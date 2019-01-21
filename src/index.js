import { Localization } from './lib/i18n';
import { Game } from './lib/game';
import { default as style } from './style.css';
import { Counter } from './lib/counter';

import { default as toolbar } from './templates/toolbar.html';

import { PrivateIndex } from './index.private';
import { Settings } from './lib/settings';
import { fullScreen } from './lib/fullscreen';

const observedAttributes = ['matrix', 'lang', 'view'];
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
    this.rendered = false;
    this.images = [];
    this.tiles = [];
    this.toolbar = document.createElement('div');
    this.private = new PrivateIndex(this);

    this.settings = new Settings(this);

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
    return observedAttributes;
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
    const self = this;
    /**
     * resets all parameters and renders game again
     */
    function __fullReset() {
      self.reset();
      self.rendered = false;
      self.render();
    }

    switch (name) {
      case 'lang': {
        this.i18n = new Localization(newVal);
        this.i18n.update(this.shadowRoot);
        break;
      }
      case 'view': {
        if (newVal === 'fullscreen') {
        } else {
          fullScreen.exit();
        }
        break;
      }
      default: {
        __fullReset();
      }
    }
  }

  /**
   * @description prepare cards layout using given matrix attribute
   */
  prepareMatrix() {
    const matrix = this.getAttribute('matrix').split('x');
    matrix[0] = parseInt(matrix[0]);
    matrix[1] = parseInt(matrix[1]);

    if (this.private.limitsExceeded(matrix)) {
      this.shadowRoot.innerHTML += `
      ${this.i18n.message('MATRIX_DIMENSIONS_ERROR')}
      ${this.i18n.sample('MATRIX_DIMENSIONS_ERROR')}
      `;
      return;
    }

    const oddMid = this.private.getOddMidIndex(matrix);
    const cssRow = `width:${100 / matrix[0]}%;`;
    const cssCol = `height:${100 / matrix[1]}%;`;
    const squares = matrix[0] * matrix[1];
    const imageCount = squares % 2 === 0 ? squares / 2 : (squares - 1) / 2;

    const self = this;

    self.shadowRoot.innerHTML += `<style>:host .tile {${cssRow +
      cssCol}}</style>`;
    let outer = 0;
    let inner = 0;
    let index = 0;
    const tilesContainer = document.createElement('div');
    const parentContainer =
      self.getAttribute('view') === 'fullscreen'
        ? {
          w: document.documentElement.offsetWidth,
          h: document.documentElement.offsetHeight,
        }
        : { w: self.parentNode.offsetWidth, h: self.parentNode.offsetHeight };

    const width = parseInt(parentContainer.w / matrix[0]);
    const height = parseInt(parentContainer.h / matrix[1]);

    tilesContainer.id = 'tiles-container';
    self.shadowRoot.appendChild(tilesContainer);
    for (outer = 0; outer < matrix[0]; outer++) {
      for (inner = 0; inner < matrix[1]; inner++) {
        index = inner + matrix[1] * outer;
        const tile = self.private.createTile(index);
        tilesContainer.appendChild(tile.tile);
        if (index !== oddMid) {
          tile.canvas.classList.add('wait');
          self.tiles.push(tile);
        }
      }
    }
    /**
     * Image succesfully  loaded  handler
     * @param {Event} e
     */
    function imageFoud(e) {
      self.game.addImage(e.target);
    }
    /**
     * Image could not loaded error handler
     * @param {Event} e
     */
    function imageNotFoud(e) {
      e.target.src = self.private.picsum(width, height);
    }

    this.cardBack.addEventListener('load', () => {
      for (let i = 0; i <= imageCount; i++) {
        const img = self.private.getNewImage(
          (e) => imageFoud(e),
          (e) => imageNotFoud(e)
        );

        img.src = self.private.picsum(width, height);
        self.images.push(img);
      }

      self.game = new Game(this.tiles.map((t) => t.canvas), this.cardBack);

      self.game.events.addEventListener('ready', (e) => {
        self.shadowRoot.querySelector('#loading').classList.add('done');
        self.game.counter = new Counter(
          self.shadowRoot.querySelector('#counter')
        );
      });
      self.game.events.addEventListener('win', (e) => {
        const attr = self.myAttributes();
        const nextLevelMatrix = self.game.nextLevel(attr);
        self.settings.scores.currentPlayer.addScore(
          attr.matrix,
          self.game.counter
        );

        self.setAttribute('matrix', nextLevelMatrix);
      });
    });

    self.cardBack.addEventListener('error', (e) => {
      e.target.src = self.private.picsum(width, height);
    });

    this.cardBack.src = self.private.picsum(width, height);
  }
  /**
   * Gets current attributes according to observedAttributes
   * @return {object} attr;
   */
  myAttributes() {
    const attr = {};

    observedAttributes.forEach((oa) => {
      attr[oa] = this.getAttribute(oa);
    });

    return attr;
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
    ${self.settings.html}

    <div id="loading">
    <div class="lastScore">${self.settings.scores.currentPlayer.lastGame}</div>
    <div>${self.i18n.message('LOADING')}</div>
    </div>`;

    self.prepareMatrix();
    self.i18n.update(self.shadowRoot);

    self.settings.updateChildren(self.shadowRoot);
    self.layers.toolbar = {
      counter: this.shadowRoot.querySelector('#counter'),
      player: this.shadowRoot.querySelector('#player'),
      menu: this.shadowRoot.querySelector('#menu'),
    };

    self.settings.reset(self.myAttributes());

    self.layers.toolbar.menu.addEventListener('click', () => {
      self.settings.reset(self.myAttributes());
      self.settings.show();
    });
  }
}

customElements.define('mini-memory', MiniMemory);
