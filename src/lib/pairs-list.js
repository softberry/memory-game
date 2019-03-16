/**
 *@classdesc Controler of paired items.
 * @class
 */
export class MemoryPairsList extends Array {
  /**
   * Apply visual changes on paired elements.
   * @param {HTMLCanvasElement} canvas Set a pair as found.
   */
  checkMark(canvas) {
    const ctx = canvas.getContext('2d');
    const w = canvas.offsetWidth;
    const h = canvas.offsetHeight;
    const img = this.getImage(canvas);
    ctx.clearRect(0, 0, w, h);
    ctx.globalAlpha = 0.25;
    ctx.drawImage(
      img,
      0,
      0,
      parseInt(img.width),
      parseInt(img.height),
      0,
      0,
      w,
      h
    );
    ctx.globalAlpha = 1;
    ctx.save();
  }
  /**
   *
   * @param {HTMLCanvasElement} canvas Canvas element to be checked.
   * @return {boolean} If given canvas has already a known pair.
   */
  hasPair(canvas) {
    const self = this;
    let hasPair = false;
    self.forEach((c) => {
      if (c[0] === canvas) {
        hasPair = true;
      }
      if (c[1] === canvas) {
        hasPair = true;
      }
    });

    return hasPair;
  }

  /**
   *
   * @param {Array} state Holds info object for both open cards.
   * @return {boolean} Are both canvas in given state pair or not.
   */
  arePairs(state) {
    const one = state[0];
    const two = state[1];
    const self = this;
    let matches = false;
    self.forEach((c) => {
      if (c[0] === one || c[1] === one) {
        if (c[0] === two || c[1] === two) {
          matches = true;
          this.checkMark(one);
          this.checkMark(two);
        }
      }
    });
    return matches;
  }

  /**
   * find image of given canvas.
   * @param {HTMLCanvasElement} canvas image of the given canvas.
   * @return {HTMLImageElement} Image for the given canvas.
   */
  getImage(canvas) {
    let img;
    this.forEach((c) => {
      if (c[0] === canvas || c[1] === canvas) {
        img = c[2];
      }
    });
    return img;
  }
}
