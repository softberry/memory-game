import {Errors} from '../_lib/errors';
import {Game} from './game';
import {default as style} from './style.css';
import {default as template} from './template.html';

/**
 *
 * @param {string} lang
 * @return {{}}
 */
function getErrorForLang(lang) {
  if (typeof lang !== 'string') {
    lang = navigator.language;
  }
  lang = lang.slice(0, 2).toLowerCase();
  return new Errors(lang);
}
/**
 * if total number of images are not even, then one canvas is
 * not required. In this case place this in the middle of the layout
 * @param {array} matrix
 * @return {integer} index of the mid-element otherwise -1
 */
function getOddMidIndex(matrix) {
  const [col, row] = matrix;
  return (col * row) % 2 === 1 ? (col * row - 1) / 2 : -1;
}

/**
 * Creates a Tile object
 * @param {integer} index
 * @return {{}} Tile object
 */
function createTile(index) {
  const tile = document.createElement('div');
  const canvas = document.createElement('canvas');
  tile.classList.add('tile');
  canvas.setAttribute('index', index);
  tile.appendChild(canvas);
  return {
    tile,
    canvas,
  };
}
/**
 * @class MiniMemory
 */
export default class MiniMemory extends HTMLElement {
  /**
   * @description extendes HTMLElement to prepare Custom element MiniMemory
   * @constructor
   */
  constructor() {
    super();

    this.err = getErrorForLang();
    this.rendered = false;
    this.images = [];
    this.tiles = [];
    this.loaded = false;

    this.tmpl = document.createElement('div');
    this.tmpl.innerHTML = template;
    this.spinner = this.getImageFromTemplate('#tmpl-loader');
    this.cardBack = this.getImageFromTemplate('#tmpl-cardback');
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
   *
   * @param {string} id of the image tempalte
   * @return {HTMLImageElement}
   */
  getImageFromTemplate(id) {
    const tmpl = this.tmpl.querySelector(id);
    const clone = document.importNode(tmpl, true);
    const tmp = document.createElement('div');
    tmp.innerHTML = clone.innerHTML;
    return tmp.querySelector('img');
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
      this.err = getErrorForLang(newVal);
    }
    this.rendered = false;
    this.render();
  }
  /**
   * shows loading animation
   * @param {HTMLCanvasElement} canvas
   */
  showSpinner(canvas) {
    const ctx = canvas.getContext('2d');
    const self = this;
    let deg = 0;

    const interval = window.setInterval(() => {
      const tx = canvas.width / 2;
      const ty = canvas.height / 2;

      if (self.loaded) {
        window.clearInterval(interval);
        return;
      }
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.translate(tx, ty);
      ctx.rotate((deg * Math.PI) / 180);
      ctx.translate(-tx, -ty);
      deg %= 360;
      ctx.drawImage(
        self.spinner,
        0,
        0,
        self.spinner.width,
        self.spinner.height,
        canvas.width / 2 - 16,
        canvas.height / 2 - 16,
        32,
        32
      );
      deg += 360 / 16;
    }, 1000 / 8);
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
      ${this.err.message('MATRIX_DIMENSIONS_ERROR')}
      ${this.err.sample('MATRIX_DIMENSIONS_ERROR')}
      `;
      return;
    }

    let outer = 0;

    let inner = 0;

    const oddMid = getOddMidIndex(matrix);
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
      img.src = `//picsum.photos/${value.width}/${value.height}
      /?image=${index}`;
      img.addEventListener('load', (e) => {
        self.game.addImage(e.target);
      });
    }
    this.images = [
      ...new Array(imageCount).fill({
        width: parseInt(this.parentNode.offsetWidth / matrix[0]),
        height: parseInt(this.parentNode.offsetHeight / matrix[1]),
      }),
    ].map(prepareImages);

    this.shadowRoot.innerHTML += `
    <style>\n :host .tile {
      ${cssRow}  ${cssCol}
    }
    </style>`;
    let index = 0;

    for (outer = 0; outer < matrix[0]; outer++) {
      for (inner = 0; inner < matrix[1]; inner++) {
        index = inner + matrix[1] * outer;

        const tile = createTile(index);

        this.shadowRoot.appendChild(tile.tile);

        if (index !== oddMid) {
          this.tiles.push(tile);
          this.showSpinner(tile.canvas);
        }
      }
    }

    self.game = new Game(this.tiles.map((t) => t.canvas), this.cardBack);
    self.game.onReady = function() {
      self.loaded = true;
    };
  }
  /**
   * @description Renders custom element with initial attributes
   */
  render() {
    if (this.rendered) {
      return;
    }
    this.err = getErrorForLang(this.getAttribute('lang'));
    this.rendered = true;

    if (!this.shadowRoot) {
      this.attachShadow({mode: 'open'});
    }

    this.shadowRoot.innerHTML = `<style>${style}</style>`;

    this.prepareMatrix();
  }
}

customElements.define('mini-memory', MiniMemory);
