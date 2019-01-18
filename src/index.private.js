/**
 * Holds list of Images those returs 404
 * to avoid try to load again
 */
const excludedImages = [];
/**
 * @class
 */
export class PrivateIndex {
  /**
   *
   * @param {{}} owner @namespace MiniMemory
   */
  constructor(owner) {
    this.owner = owner;
  }
  /**
   * Creates picsum image patterm
   * @param { integer} w
   * @param {integer} h
   * @return {string} URL
   */
  picsum(w, h) {
    return `https://picsum.photos/${w}/${h}?image=${this.getFreeId()}`;
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
   * Returned number should not be in the excludedImages array
   * Save namber in to excludedImages to avoid it to be choosen again
   * @return {integer} random Integer between 0 - 1000
   */
  getFreeId() {
    let rnd = Math.floor(Math.random() * 1000);
    while (excludedImages.filter((ex) => ex === rnd).length > 0) {
      rnd = Math.floor(Math.random() * 1000);
    }
    excludedImages.push(rnd);
    return rnd;
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
   * checks if columns and rows are in defined range
   * @param {array} dim
   * @return {boolean} true on exceed
   */
  limitsExceeded(dim) {
    let hasError = false;
    dim.forEach((e) => {
      e < 2 || e > 10 ? (hasError = true) : false;
    });
    return hasError;
  }
  /**
   * Creates and img element and assigns events
   * @param {function} load
   * @param {function} error
   * @return {HTMLImageElement}
   */
  getNewImage(load, error) {
    const img = document.createElement('img');
    img.addEventListener('load', load);
    img.addEventListener('error', error, false);
    return img;
  }
}
