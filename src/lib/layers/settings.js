import { default as template } from '../../templates/settings.html';
import { Scores } from '../scores';
import { FullScreen } from '../fullscreen';

/**
 * @description Controller for all user defined settings such as, dimentions,
 * fullscreen etc.
 */
export class Settings {
  /**
   *
   * @param {{}} owner  An instance of {@link MiniMemory}
   */
  constructor(owner) {
    this.owner = owner;
    this.html = template;
    this.scores = new Scores();
    this.fullScreen = new FullScreen();
  }
  /**
   * Retrieves Panel content from shadow DOM.
   * @param {shadowRoot} shadow
   */
  updateChildren(shadow) {
    const self = this;
    self.panel = shadow.querySelector('#settings');
    self.closeX = shadow.querySelector('#settings .close-x');

    self.labels = {
      playerName: shadow.querySelector('label[for="playerName"]'),
      matrixcol: shadow.querySelector('label[for="matrixcol"]'),
      matrixrow: shadow.querySelector('label[for="matrixrow"]'),
    };

    self.params = {
      languageSelection: shadow.querySelector('#languageSelection'),
      playerName: shadow.querySelector('#playerName'),
      matrixcol: shadow.querySelector('#matrixcol'),
      matrixrow: shadow.querySelector('#matrixrow'),
      isFullScreen: shadow.querySelector('#isFullScreen'),
      isChallenge: shadow.querySelector('#isChallenge'),
    };

    self.vCheckFullScreen = shadow.querySelector('#isFullScreen + .vCheck');
    self.vCheckChallenge = shadow.querySelector('#isChallenge + .vCheck');

    self.applySettings = shadow.querySelector('#applySettings');
    self.restartGame = shadow.querySelector('#restartGame');

    self.closeX.addEventListener('click', () => self.hide());

    self.params.languageSelection.addEventListener('change', (e) => {
      //  self.owner.i18n = new Localization(e.target.value);
      // self.owner.i18n.update(self.shadowRoot);
      self.owner.setAttribute('lang', e.target.value);
    });

    self.vCheckFullScreen.addEventListener('click', (e) => {
      const chk = self.params.isFullScreen;
      chk.checked = !chk.checked;
      self.enableApplyButton.call(self);
    });

    self.vCheckChallenge.addEventListener('click', (e) => {
      const chk = self.params.isChallenge;
      chk.checked = !chk.checked;
      self.enableApplyButton.call(self);
    });

    self.applySettings.addEventListener('click', (e) => {
      if (self.params.playerName.value.replace(/\s/g, '').length === 0) {
        self.params.playerName.classList.add('error');
        return;
      }
      const c = self.params.matrixcol.value;
      const r = self.params.matrixrow.value;
      const col = Math.max(Math.min(c, 10), 2);
      const row = Math.max(Math.min(r, 10), 2);

      const vCheckFullScreen = self.params.isFullScreen.checked;
      self.scores.currentPlayer.name = self.params.playerName.value;
      const vCheckChallenge = self.params.isChallenge.checked;
      self.scores.currentPlayer.name = self.params.playerName.value;

      self.owner.layers.toolbar.player.innerText =
        self.scores.currentPlayer.name;

      self.owner.setAttribute('matrix', `${col}x${row}`);

      if (vCheckFullScreen) {
        self.fullScreen.enter();
        self.owner.setAttribute('view', 'fullscreen');
      } else {
        self.fullScreen.exit();
      }
      if (vCheckChallenge) {
        self.owner.removeAttribute('challenge');
      } else {
        self.owner.setAttribute('challenge', 'off');
      }
      self.hide();
    });

    self.restartGame.addEventListener('click', (e) => {
      self.hide();

      self.owner.reset();
      self.owner.render();
    });

    document.addEventListener('fullscreenchange', (e) => {
      if (document.fullscreenElement === null) {
        self.owner.setAttribute('view', '');
      }
    });
    Object.keys(self.params).forEach((key) => {
      const param = self.params[key];

      param.addEventListener('focus', () => {
        self.show();
      });
      const events = [];
      param.type === ('text' || 'number')
        ? events.push('blur', 'keyup')
        : events.push('change');
      events.forEach((ev) => {
        param.addEventListener(ev, self.enableApplyButton.bind(self));
      });
    });
  }
  /**
   * Resets Panel content.
   * @param {*} options Given initial options.
   */
  reset(options) {
    [this.params.matrixcol.value, this.params.matrixrow.value] = options.matrix
      .split('x')
      .filter((m) => m !== 'x');
    const curPlayerName = this.scores.currentPlayer.name;

    if (options.settings === 'no') {
      this.owner.layers.toolbar.menu.className = 'hide';
    } else {
      this.owner.layers.toolbar.menu.className = '';
    }

    if (options.view === 'fullscreen') {
      this.params.isFullScreen.checked = true;
      this.params.isFullScreen.setAttribute('checked', 'checked');
    } else {
      this.params.isFullScreen.checked = false;
      this.params.isFullScreen.removeAttribute('checked');
    }

    if (options.challenge !== 'off') {
      this.params.isChallenge.checked = true;
      this.params.isChallenge.setAttribute('checked', 'checked');
    } else {
      this.params.isChallenge.checked = false;
      this.params.isChallenge.removeAttribute('checked');
    }

    this.applySettings.setAttribute('disabled', 'disabled');
    this.params.playerName.value = curPlayerName;
    if (curPlayerName && curPlayerName.length > 0) {
      this.owner.layers.toolbar.player.innerText = curPlayerName;
    } else {
      this.show();
    }
  }

  /**
   * @summary Makes Apply button usable.
   */
  enableApplyButton() {
    this.applySettings.removeAttribute('disabled');
  }

  /**
   * @summary Shows Settings pabel (Sidepanel).
   */
  show() {
    this.panel.classList.add('show');
  }

  /**
   * @summary Hides Settings pabel (Sidepanel).
   */
  hide() {
    this.panel.classList.remove('show');
  }
}
