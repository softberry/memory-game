/**
 * if total number of images are not even, then one canvas is
 * not required. In this case place this in the middle of the layout
 * @module
 * @param {array} matrix col,row counts of the game.
 * @return {integer} index of the mid-element otherwise -1
 */
export function oddMiddle(matrix) {
  const [col, row] = matrix;
  return (col * row) % 2 === 1 ? (col * row - 1) / 2 : -1;
}
