/**

 * @typedef {Object} Tile
 * @property {Object} tile HTMLDivElement
 * @property {Object} canvas HTMLCanvasElement
 **/
/**
 * @description Creates a Tile object.
 * @module
 * @param {integer} index
 * @return {Tile} Tile object
 */
export function newTile(index) {
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
