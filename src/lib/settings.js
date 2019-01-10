import { default as template } from '../templates/settings.html';
import { Scores } from './scores';
/**
 * @class
 */
export class Settings {
/**
 *
 * @param {{}} owner @namespace MiniMemory
 */
  constructor(owner) {
    this.owner = owner;
    this.html = template;
    this.scores = new Scores();
  }
  /**
   * retrieves Panel content from shadow DOM
   * @param {shadowRoot} shadow
   */
  updateChildren(shadow) {
    const self = this;
    self.panel = shadow.querySelector('#settings');
    self.closeX = shadow.querySelector('#settings .close-x');

    self.labels = {
      playername: shadow.querySelector('label[for="playerName"]'),
      matrixcol: shadow.querySelector('label[for="matrixcol"]'),
      matrixrow: shadow.querySelector('label[for="matrixrow"]'),
    };

    self.params = {
      languageSelection: shadow.querySelector('#languageSelection'),
      playerName: shadow.querySelector('#playerName'),
      matrixcol: shadow.querySelector('#matrixcol'),
      matrixrow: shadow.querySelector('#matrixrow'),
      isFullScreen: shadow.querySelector('#isFullScreen'),
    };

    self.vCheckFullScreen = shadow.querySelector('#isFullScreen + .vCheck');

    self.applySettings = shadow.querySelector('#applySettings');
    self.restartGame = shadow.querySelector('#restartGame');

    self.closeX.addEventListener('click', () => self.hide());

    self.params.languageSelection.addEventListener('change', (e) => {
      self.owner.i18n = new Localization(e.target.value);
      self.owner.i18n.update(self.shadowRoot);
    });

    self.vCheckFullScreen.addEventListener('click', (e) => {
      const chk = self.params.isFullScreen;
      chk.checked = !chk.checked;
      self.enableApplyButton.call(self);
    });

    self.applySettings.addEventListener('click', (e) => {
      const c = self.params.matrixcol.value;
      const r = self.params.matrixrow.value;
      const col = Math.max(Math.min(c, 16), 2);
      const row = Math.max(Math.min(r, 16), 2);

      const vCheckFullScreen = self.params.isFullScreen.checked;
      self.scores.currentPlayer.name = self.params.playerName.value;

      self.owner.layers.toolbar.player.innerText =
        self.scores.currentPlayer.name;

      self.owner.setAttribute('matrix', `${col}x${row}`);

      if (vCheckFullScreen) {
        self.owner.setAttribute('fullscreen', 'fullscreen');
      } else {
        self.owner.removeAttribute('fullscreen');
      }

      self.hide();
    });

    self.restartGame.addEventListener('click', (e) => {
      self.hide();

      self.owner.reset();
      self.owner.render();
    });

    Object.entries(self.params).forEach((param) => {
      param[1].addEventListener('focus', () => {
        self.show();
      });
      const events = [];
      param[1].type === ('text' || 'number')
        ? events.push('blur', 'keyup')
        : events.push('change');
      events.forEach((ev) => {
        param[1].addEventListener(ev, self.enableApplyButton.bind(self));
      });
    });
  }
  /**
   * Resets Panel content
   * @param {*} options
   */
  reset(options) {
    [
      this.params.matrixcol.value,
      this.params.matrixrow.value,
    ] = options.matrix.split('x').filter((m) => m !== 'x');
    const curPlayerName = this.scores.currentPlayer.name;
    this.params.isFullScreen.checked = Boolean(options.fullscreen);
    this.applySettings.setAttribute('disabled', 'disabled');
    if (curPlayerName && curPlayerName.length > 0) {
      this.owner.layers.toolbar.player.innerText = curPlayerName;
    } else {
      this.show();
    }
  }
  /**
   * Makes Apply button usable
   */
  enableApplyButton() {
    this.applySettings.removeAttribute('disabled');
  }

  /**
   * Shows Settings pabel (Sidepanel)
   */
  show() {
    this.panel.classList.add('show');
  }

  /**
   * Hides Settings pabel (Sidepanel)
   */
  hide() {
    this.panel.classList.remove('show');
  }
}
