import { Localization } from './lib/i18n';
import { Game } from './lib/game';
import { default as style } from './style.css';
import { Counter } from './lib/counter';
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
      e.target.setAttribute(
        'src',
        'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/4QCMRXhpZgAATU0AKgAAAAgABQESAAMAAAABAAEAAAEaAAUAAAABAAAASgEbAAUAAAABAAAAUgEoAAMAAAABAAIAAIdpAAQAAAABAAAAWgAAAAAAAABIAAAAAQAAAEgAAAABAAOgAQADAAAAAQABAACgAgAEAAAAAQAAABmgAwAEAAAAAQAAABEAAAAA/+0AOFBob3Rvc2hvcCAzLjAAOEJJTQQEAAAAAAAAOEJJTQQlAAAAAAAQ1B2M2Y8AsgTpgAmY7PhCfv/AABEIABEAGQMBIgACEQEDEQH/xAAfAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgv/xAC1EAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+fr/xAAfAQADAQEBAQEBAQEBAAAAAAAAAQIDBAUGBwgJCgv/xAC1EQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2wBDAAIDAwMEAwQFBQQGBgYGBggIBwcICA0JCgkKCQ0TDA4MDA4MExEUEQ8RFBEeGBUVGB4jHRwdIyolJSo1MjVFRVz/2wBDAQIDAwMEAwQFBQQGBgYGBggIBwcICA0JCgkKCQ0TDA4MDA4MExEUEQ8RFBEeGBUVGB4jHRwdIyolJSo1MjVFRVz/3QAEAAL/2gAMAwEAAhEDEQA/APzjWNNue/ao5IwCanVwV6cCoZXUEg+/1rZvUg5C7jA9PrWBhK2r6T5yOM1hZH+z+dbRegH/0PzXT/Vj6iqkn33+tW0/1Y+oqpJ99/rW73A5K+/1p+prn66C+/1p+prn60QH/9k='
      );
      e.target.dispatchEvent('load');
    });

    this.cardBack.setAttribute('src', cardback);
  }
  /**
   * @description Renders custom element with initial attributes
   */
  render() {
    if (this.rendered) {
      return;
    }
    this.i18n = new Localization(this.getAttribute('lang'));
    this.rendered = true;

    if (!this.shadowRoot) {
      this.attachShadow({ mode: 'open' });
    }

    this.shadowRoot.innerHTML = `<style>${style}</style>
    <div id="toolbar">
    <div id="counter"></div>
    <div id="player"></div>
    <div id="menu"></div>
    </div>
    <div id="loading">${this.i18n.message('LOADING')}</div>`;
    this.shadowRoot.appendChild(this.toolbar);
    this.layers.loading = this.shadowRoot.querySelector('#loading');
    this.layers.toolbar = {
      counter: this.shadowRoot.querySelector('#counter'),
      player: this.shadowRoot.querySelector('#player'),
      menu: this.shadowRoot.querySelector('#menu'),
    };

    this.prepareMatrix();
  }
}

customElements.define('mini-memory', MiniMemory);
