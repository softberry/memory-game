import { Localization } from './lib/i18n';
import { Game } from './lib/game';
import { Fallback } from './lib/fallback';
import { default as style } from './style.css';

import { debounce } from './lib/tools/debounce';

import { default as tmplToolbar } from './templates/toolbar.html';

import { Settings } from './lib/layers/settings';
import { FullScreen } from './lib/fullscreen';
import { ImageServer } from './lib/image-server';

// Tools
import { Limits } from './lib/tools/limit';
import { newTile } from './lib/tools/tile';
import { oddMiddle } from './lib/tools/middle';

const observedAttributes = ['matrix', 'lang', 'view', 'settings'];
/**
 * @classdesc Main container of the game. Will be used as
 * {`CustomElements.define`} constructor.
 * @author Emre Sakarya <emre.sakarya@softberry.de>
 * @extends HTMLElement
 * @example customElements.define('mini-memory', MiniMemory);
 * // Create MiniMemory DOMElement like this :
 * document.createElement('mini-memory');
 * // or like this:
 * <mini-memory></mini-memory>
 */
export class MiniMemory extends HTMLElement {
  /**
   * of the game. Will be used as ``{CustomElements.define}`` constructor.
   */
  constructor() {
    super();
    const self = this;
    this.i18n = new Localization();
    this.fullScreen = new FullScreen();
    this.imageServer = new ImageServer(this);
    this.manifest;

    this.rendered = false;
    this.images = [];
    this.tiles = [];

    window.addEventListener(
      'resize',
      debounce(() => {
        self.reset();
        self.render();
      }, 500)
    );

    /**
     * @summary HTMLDivElement information bar on top of the screen.
     */
    this.toolbar = document.createElement('div');

    /**
     * @summary Controls and keep track of game settings {@link Settings}.
     */
    this.settings = new Settings(this);
    /**
     * @summary handle of all layers such as loading, toolbar, setting etc.
     * which will be defined when they are created.
     */
    this.layers = {
      loading: null,
    };

    /**
     * @summary Image of the closed card drawn to be conatiner canvas
     */
    this.cardBack = document.createElement('img');
  }
  /**
   * @summary Resets all parameters to enable a clean restart/render.
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
   * @summary Callback on custom element included in DOM.
   */
  connectedCallback() {
    if (!this.rendered) {
      this.render();
    }
  }

  /**
   * @summary Necessary attributes to be watched.
   */
  static get observedAttributes() {
    return observedAttributes;
  }

  /**
   * @summary Callback function on removing of custom element from DOM.
   */
  disconnectedCallback() {}
  /**
   * @summary Callback function on adding of custom element to another DOM.
   */
  adoptedCallback() {}
  /**
   * callback function on attribute change of custom element.
   * @param {string} name Name of the attribute.
   * @param {string} oldVal Latest value before change.
   * @param {string} newVal The current value to be set.
   */
  attributeChangedCallback(name, oldVal, newVal) {
    const self = this;
    /**
     * Resets all parameters and renders game again.
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
          this.fullScreen.enter();
        } else {
          this.fullScreen.exit();
        }
        break;
      }
      case 'matrix': {
        __fullReset();
        break;
      }
      default: {
        // __fullReset();
      }
    }
  }
  /**
   * @summary check if element has manadatory fields defined or not.
   * @return {boolean} Returns true if minimum requirements
   * are correctly defined.
   */
  checkDefaultAttributes() {
    const attr = this.getAttribute('matrix');
    const limits = new Limits(2, 10, attr);
    if (!limits.defined()) {
      this.shadowRoot.innerHTML += `
      ${this.i18n.message('MATRIX_DIMENSIONS_ERROR')}
      ${this.i18n.sample('MATRIX_DIMENSIONS_ERROR')}
      `;
      return false;
    }

    if (limits.exceeded(attr.split('x'))) {
      this.shadowRoot.innerHTML += `
      ${this.i18n.message('MATRIX_DIMENSIONS_ERROR')}
      ${this.i18n.sample('MATRIX_DIMENSIONS_ERROR')}
      `;
      return false;
    }

    return true;
  }

  /**
   * @summary Prepare cards layout using given matrix attribute.
   */
  prepareMatrix() {
    const matrix = this.getAttribute('matrix').split('x');
    matrix[0] = parseInt(matrix[0]);
    matrix[1] = parseInt(matrix[1]);

    const oddMid = oddMiddle(matrix);
    const cssRow = `width:${100 / matrix[0]}%;`;
    const cssCol = `height:${100 / matrix[1]}%;`;
    const squares = matrix[0] * matrix[1];
    const imageCount = squares % 2 === 0 ? squares / 2 : (squares - 1) / 2;

    const self = this;

    self.shadowRoot.innerHTML += `
    <style>:host .tile {${cssRow + cssCol}}</style>`;
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
        const tile = newTile(index);
        tilesContainer.appendChild(tile.tile);
        if (index !== oddMid) {
          tile.canvas.classList.add('wait');
          self.tiles.push(tile);
        }
      }
    }
    self.game = new Game(this.tiles.map((t) => t.canvas), this.cardBack);

    self.game.events.addEventListener('ready', (e) => {
      self.shadowRoot.querySelector('#loading').classList.add('done');
      self.game.counter.reset(self.shadowRoot.querySelector('#counter'));
    });

    self.game.events.addEventListener('win', (e) => {
      const attr = self.myAttributes();
      const nextLevelMatrix = self.game.nextLevel(attr);
      self.settings.scores.currentPlayer.addScore(
        attr.matrix,
        self.game.counter
      );
      // TODO: Do not jump to auto next level.
      // Add next button so that player have a chance to make break
      self.setAttribute('matrix', nextLevelMatrix);
    });

    self.imageServer
      .getManifest()
      .then((manifest) => {
        self.manifest = manifest;
        self.imageServer
          .getCardImages({ width, height, imageCount })
          .catch((e) => {
            new Fallback(self, { width, height, imageCount });
          });
      })
      .catch((e) => {
        new Fallback(self, { width, height, imageCount });
      });
  }

  /**
   * Gets current attributes according to observedAttributes.
   * @return {object} attr Obeserved values object.
   */
  myAttributes() {
    const attr = {};

    observedAttributes.forEach((oa) => {
      attr[oa] = this.getAttribute(oa);
    });

    return attr;
  }
  /**
   * @summary Renders custom element with initial attributes.
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

    self.shadowRoot.innerHTML = `<style>${style}</style>`;
    if (!self.checkDefaultAttributes()) {
      self.i18n.update(self.shadowRoot);
      return;
    }

    self.shadowRoot.innerHTML = `<style>${style}</style>
    ${tmplToolbar}
    ${self.settings.html}
      <div id="loading">
        <div class="lastScore">${
  self.settings.scores.currentPlayer.lastGame
}</div>
        <div class="goto next level">${self.i18n.message('LOADING')}</div>
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
