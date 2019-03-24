/**
 * Create and return an image Object, with assigned load/error
 * eventhadles and source.
 * @param {functstringion} src Optinal image path url
 * @param {function} load Function to be called on successfully
 * @param {function} error Function to be called on error
 * @module
 * @return {HTMLImageElement}
 */
export function newImage(src, load, error) {
  const img = document.createElement('img');
  img.addEventListener('load', load);
  img.addEventListener('error', error, false);
  if (src) {
    img.src = src;
  }
  return img;
}
