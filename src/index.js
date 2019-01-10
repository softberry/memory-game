import { Localization } from './lib/i18n';
import { Game } from './lib/game';
import { default as style } from './style.css';
import { Counter } from './lib/counter';

import { default as toolbar } from './templates/toolbar.html';
import { default as settings } from './templates/settings.html';
import { Scores } from './lib/scores';
const excludedImages = [];
/**
 * Returned number should not be in the excludedImages array
 * Save namber in to excludedImages to avoid it to be choosen again
 * @return {integer} random Integer between 0 - 1000
 */
function getFreeId() {
  let rnd = Math.floor(Math.random() * 1000);
  while (excludedImages.filter((ex) => ex === rnd).length > 0) {
    rnd = Math.floor(Math.random() * 1000);
  }
  excludedImages.push(rnd);
  return rnd;
}
const picsum = (w, h) => `https://picsum.photos/${w}/${h}?image=${getFreeId()}`;

/**
 * Main container of the game.
 * @class
 */
class MiniMemory extends HTMLElement {
  /**
   * @description extendes HTMLElement to prepare Custom element MiniMemory
   * @constructor
   */
  constructor() {
    super();
    this.i18n = new Localization();
    this.scores = new Scores();
    this.rendered = false;
    this.images = [];
    this.tiles = [];
    this.toolbar = document.createElement('div');

    this.layers = {
      loading: null,
    };

    this.cardBack = document.createElement('img');
  }
  /**
   * Resets all parameters to enable a clean restart/render
   */
  reset() {
    this.rendered = false;
    this.images = [];
    this.tiles = [];
    this.layers = {
      loading: {},
    };
  }

  /**
   * if total number of images are not even, then one canvas is
   * not required. In this case place this in the middle of the layout
   * @param {array} matrix
   * @return {integer} index of the mid-element otherwise -1
   */
  getOddMidIndex(matrix) {
    const [col, row] = matrix;
    return (col * row) % 2 === 1 ? (col * row - 1) / 2 : -1;
  }

  /**
   * Creates a Tile object
   * @param {integer} index
   * @return {{}} Tile object
   */
  createTile(index) {
    const tile = document.createElement('div');
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    ctx.save();
    tile.classList.add('tile');
    canvas.setAttribute('index', index);
    tile.appendChild(canvas);
    return {
      tile,
      canvas,
    };
  }
  /**
   * @description callback on custom element included in DOM
   */
  connectedCallback() {
    if (!this.rendered) {
      this.render();
    }
  }

  /**
   * @description necessary attributes to be watched
   */
  static get observedAttributes() {
    return ['matrix', 'lang', 'fullscreen'];
  }

  /**
   * @description callback function on removing of custom element
   */
  disconnectedCallback() {}
  /**
   * @description callback function on adding of custom element to another dom
   */
  adoptedCallback() {}
  /**
   * callback funciotn on attribute change of custom element
   * @param {string} name
   * @param {string} oldVal
   * @param {string} newVal
   */
  attributeChangedCallback(name, oldVal, newVal) {
    if (name === 'lang') {
      this.i18n = new Localization(newVal);
    }
    this.reset();
    this.rendered = false;
    this.render();
  }
  /**
   * checks if columns and rows are in defined range
   * @param {array} dim
   * @return {boolean} true on exceed
   */
  limitsExceeded(dim) {
    let hasError = false;
    dim.forEach((e) => {
      e < 2 || e > 16 ? (hasError = true) : false;
    });
    return hasError;
  }
  /**
   * @description prepare cards layout using given matrix attribute
   */
  prepareMatrix() {
    const matrix = this.getAttribute('matrix').split('x');
    matrix[0] = parseInt(matrix[0]);
    matrix[1] = parseInt(matrix[1]);

    if (this.limitsExceeded(matrix)) {
      this.shadowRoot.innerHTML += `
      ${this.i18n.message('MATRIX_DIMENSIONS_ERROR')}
      ${this.i18n.sample('MATRIX_DIMENSIONS_ERROR')}
      `;
      return;
    }

    const oddMid = this.getOddMidIndex(matrix);
    const cssRow = `width:${100 / matrix[0]}%;`;
    const cssCol = `height:${100 / matrix[1]}%;`;
    const squares = matrix[0] * matrix[1];
    const imageCount = squares % 2 === 0 ? squares / 2 : (squares - 1) / 2;

    const self = this;
    /**
     *
     * @param {{width,height}} value width of image, height of image
     */
    function prepareImages(value) {
      const img = document.createElement('img');
      self.images.push(img);

      img.addEventListener('load', (e) => {
        self.game.addImage(e.target);
      });
      img.addEventListener('error', (e) => {
        img.src = picsum(value.width, value.height);
      });
      img.src = picsum(value.width, value.height);
    }

    self.shadowRoot.innerHTML += `<style>:host .tile {${cssRow +
      cssCol}}</style>`;
    let outer = 0;
    let inner = 0;
    let index = 0;
    const tilesContainer = document.createElement('div');
    const parentContainer =
      self.getAttribute('fullscreen') === 'fullscreen'
        ? { w: window.innerWidth, h: window.innerHeight }
        : { w: self.parentNode.offsetWidth, h: self.parentNode.offsetHeight };
    const width = parseInt(parentContainer.w / matrix[0]);
    const height = parseInt(parentContainer.h / matrix[1]);

    tilesContainer.id = 'tiles-container';
    self.shadowRoot.appendChild(tilesContainer);
    for (outer = 0; outer < matrix[0]; outer++) {
      for (inner = 0; inner < matrix[1]; inner++) {
        index = inner + matrix[1] * outer;
        const tile = self.createTile(index);
        tilesContainer.appendChild(tile.tile);
        if (index !== oddMid) {
          tile.canvas.classList.add('wait');
          self.tiles.push(tile);
        }
      }
    }
    const rnd = Math.floor(Math.random() * squares) + 50;

    this.cardBack.addEventListener('load', () => {
      for (let i = rnd; i <= rnd + imageCount; i++) {
        prepareImages({ width, height });
      }

      self.game = new Game(this.tiles.map((t) => t.canvas), this.cardBack);

      self.game.onReady(() => {
        this.shadowRoot.querySelector('#loading').classList.add('done');
        self.game.counter = new Counter(
          self.shadowRoot.querySelector('#counter')
        );
      }, self);
      self.game.onWin(() => {
        self.layers.settings.panel.classList.add('show');
      });
    });

    this.cardBack.addEventListener('error', (e) => {
      this.cardBack.src = picsum(width, height);
    });

    this.cardBack.src = picsum(width, height);
  }

  /**
   * @description Renders custom element with initial attributes
   */
  render() {
    const self = this;
    if (self.rendered) {
      return;
    }
    self.i18n = new Localization(self.getAttribute('lang'));
    self.rendered = true;

    if (!self.shadowRoot) {
      self.attachShadow({ mode: 'open' });
    }

    self.shadowRoot.innerHTML = `<style>${style}</style>
    ${toolbar}
    ${settings}
    <div id="loading">${self.i18n.message('LOADING')}</div>`;
    self.prepareMatrix();
    self.i18n.update(self.shadowRoot);

    self.layers.toolbar = {
      counter: this.shadowRoot.querySelector('#counter'),
      player: this.shadowRoot.querySelector('#player'),
      menu: this.shadowRoot.querySelector('#menu'),
    };

    self.layers.settings = {
      panel: this.shadowRoot.querySelector('#settings'),
      closeX: this.shadowRoot.querySelector('#settings .close-x'),
      labels: {
        playername: self.shadowRoot.querySelector('label[for="playerName"]'),
        matrixcol: self.shadowRoot.querySelector('label[for="matrixcol"]'),
        matrixrow: self.shadowRoot.querySelector('label[for="matrixrow"]'),
      },
      params: {
        languageSelection: self.shadowRoot.querySelector('#languageSelection'),
        playerName: self.shadowRoot.querySelector('#playerName'),
        matrixcol: self.shadowRoot.querySelector('#matrixcol'),
        matrixrow: self.shadowRoot.querySelector('#matrixrow'),
        isFullScreen: self.shadowRoot.querySelector('#isFullScreen'),
      },
      vCheckFullScreen: self.shadowRoot.querySelector(
        '#isFullScreen + .vCheck'
      ),
      applySettings: self.shadowRoot.querySelector('#applySettings'),
      restartGame: self.shadowRoot.querySelector('#restartGame'),
    };

    /**
     * Reset Settings form
     */
    function formReset() {
      self.layers.settings.params.matrixcol.value = self
        .getAttribute('matrix')
        .split('x')[0];
      self.layers.settings.params.matrixrow.value = self
        .getAttribute('matrix')
        .split('x')[1];

      self.layers.toolbar.player.innerText = self.scores.currentPlayer.name;
      self.layers.settings.params.playerName.value =
        self.scores.currentPlayer.name;

      self.layers.settings.params.isFullScreen.checked = self.hasAttribute(
        'fullscreen'
      );
      self.layers.settings.applySettings.setAttribute('disabled', 'disabled');

      if (self.offsetWidth < 400) {
        document.querySelector('mini-memory').shadowRoot.host.style.fontSize =
          '6px';
      }
    }
    formReset();
    self.layers.toolbar.menu.addEventListener('click', function(e) {
      formReset();

      self.layers.settings.panel.classList.add('show');
      self.layers.settings.params.playerName.focus();
    });

    self.layers.settings.closeX.addEventListener('click', function(e) {
      self.layers.settings.panel.classList.remove('show');
    });

    self.layers.settings.params.languageSelection.addEventListener(
      'change',
      (e) => {
        self.i18n = new Localization(e.target.value);
        self.i18n.update(self.shadowRoot);
      }
    );

    self.layers.settings.vCheckFullScreen.addEventListener('click', (e) => {
      const chk = self.layers.settings.params.isFullScreen;
      chk.checked = !chk.checked;
      enableApplyButton();
    });
    self.layers.settings.applySettings.addEventListener('click', (e) => {
      const col = self.layers.settings.params.matrixcol.value;
      const row = self.layers.settings.params.matrixrow.value;
      const vCheckFullScreen = self.layers.settings.params.isFullScreen.checked;
      self.scores.currentPlayer.name =
        self.layers.settings.params.playerName.value;
      self.layers.toolbar.player.innerText = self.scores.currentPlayer.name;
      self.setAttribute('matrix', `${col}x${row}`);

      if (vCheckFullScreen) {
        self.setAttribute('fullscreen', 'fullscreen');
      } else {
        self.removeAttribute('fullscreen');
      }

      self.layers.settings.panel.classList.remove('show');
    });

    self.layers.settings.restartGame.addEventListener('click', (e) => {
      self.layers.settings.panel.classList.remove('show');

      self.reset();
      self.render();
      formReset();
    });
    const enableApplyButton = (e) => {
      self.layers.settings.applySettings.removeAttribute('disabled');
    };
    Object.entries(self.layers.settings.params).forEach((param) => {
      const events = [];
      param[1].type === ('text' || 'number')
        ? events.push('blur', 'keyup')
        : events.push('change');

      events.forEach((ev) => {
        param[1].addEventListener(ev, enableApplyButton);
      });
    });
  }
}

customElements.define('mini-memory', MiniMemory);
