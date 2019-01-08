import { Localization } from './lib/i18n';
import { Game } from './lib/game';
import { default as style } from './style.css';
import { Counter } from './lib/counter';

import { default as toolbar } from './templates/toolbar.html';
import { default as settings } from './templates/settings.html';
import { Scores } from './lib/scores';

const cardback = require('./cardback.jpg');

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
    return ['matrix', 'lang'];
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
    let imageCount = matrix[0] * matrix[1];
    imageCount = imageCount % 2 === 0 ? imageCount / 2 : (imageCount - 1) / 2;

    const self = this;
    /**
     *
     * @param {{width,height}} value width of image, height of image
     * @param {integer} index index of the current item
     */
    function prepareImages(value, index) {
      const img = document.createElement('img');
      self.images.push(img);
      img.src = `//picsum.photos/${value.width}/${
        value.height
      }/?image=${index}`;
      img.addEventListener('load', (e) => {
        self.game.addImage(e.target);
      });
    }

    this.shadowRoot.innerHTML += `<style>:host .tile {${cssRow +
      cssCol}}</style>`;
    let outer = 0;
    let inner = 0;
    let index = 0;
    const tilesContainer = document.createElement('div');

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

    this.cardBack.addEventListener('load', () => {
      for (let i = 0; i < imageCount; i++) {
        prepareImages(
          {
            width: parseInt(this.parentNode.offsetWidth / matrix[0]),
            height: parseInt(this.parentNode.offsetHeight / matrix[1]),
          },
          i
        );
      }

      self.game = new Game(this.tiles.map((t) => t.canvas), this.cardBack);

      self.game.onReady(() => {
        this.shadowRoot.querySelector('#loading').classList.add('done');
        self.game.counter = new Counter(
          self.shadowRoot.querySelector('#counter')
        );
      }, self);
    });

    this.cardBack.addEventListener('error', (e) => {
      console.warn('Translate-error: Use cardback as base64');
      e.target.setAttribute(
        'src',
        'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/4QCMRXhpZgAATU0AK' +
          'gAAAAgABQESAAMAAAABAAEAAAEaAAUAAAABAAAASgEbAAUAAAABAAAAUgEoAAMAA' +
          'AABAAIAAIdpAAQAAAABAAAAWgAAAAAAAABIAAAAAQAAAEgAAAABAAOgAQADAAAAA' +
          'QABAACgAgAEAAAAAQAAABmgAwAEAAAAAQAAABEAAAAA/+0AOFBob3Rvc2hvcCAzL' +
          'jAAOEJJTQQEAAAAAAAAOEJJTQQlAAAAAAAQ1B2M2Y8AsgTpgAmY7PhCfv/AABEIA' +
          'BEAGQMBIgACEQEDEQH/xAAfAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgv' +
          '/xAC1EAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQr' +
          'HBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY' +
          '2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3' +
          'uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+fr/xAAfA' +
          'QADAQEBAQEBAQEBAAAAAAAAAQIDBAUGBwgJCgv/xAC1EQACAQIEBAMEBwUEBAA' +
          'BAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxF' +
          'xgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXq' +
          'Cg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09' +
          'TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2wBDAAIDAwMEAwQFBQQGBgYGBggIB' +
          'wcICA0JCgkKCQ0TDA4MDA4MExEUEQ8RFBEeGBUVGB4jHRwdIyolJSo1MjVFRV' +
          'z/2wBDAQIDAwMEAwQFBQQGBgYGBggIBwcICA0JCgkKCQ0TDA4MDA4MExEUEQ8' +
          'RFBEeGBUVGB4jHRwdIyolJSo1MjVFRVz/3QAEAAL/2gAMAwEAAhEDEQA/APzj' +
          'WNNue/ao5IwCanVwV6cCoZXUEg+/1rZvUg5C7jA9PrWBhK2r6T5yOM1hZ' +
          'H+z+dbRegH/0PzXT/Vj6iqkn33+tW0/1Y+oqpJ99/rW73A5K+/1p+prn66C' +
          '+/1p+prn60QH/9k='
      );
    });

    this.cardBack.setAttribute('src', cardback);
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
    }
    formReset();
    self.layers.toolbar.menu.addEventListener('click', function(e) {
      formReset();

      self.layers.settings.panel.classList.add('show');
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
        self.setAttribute('fullscreen', '');
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
