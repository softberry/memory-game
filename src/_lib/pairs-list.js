/**
 * @class
 */
export class MemoryPairsList extends Array {
  checkMark(canvas) {
    const ctx = canvas.getContext('2d');
    const w = canvas.offsetWidth;
    const h = canvas.offsetHeight;
    ctx.clearRect(0, 0, w, h);
    ctx.globalAlpha = 0.25;
    ctx.drawImage(this.getImage(canvas), 0, 0, w, h);
    ctx.globalAlpha = 1;
    ctx.save();

    ctx.beginPath();
    ctx.arc(w - 18, h - 18, 15, 0, 2 * Math.PI);
    ctx.fillStyle = '#33cc33';
    ctx.fill();
    ctx.fillStyle = '#ffffff';
    ctx.font = '24px Arial';
    ctx.fillText('\u2713', w - 28, h - 8);

    ctx.save();
  }
  /**
   *
   * @param {HTMLCanvasElement} canvas Canvas element to be checked
   * @return {boolean} if given canvas has already a known pair
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
   * @param {Array} state holds info object for both open cards
   * @return {boolean} are both canvas in given state pair or not.
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
   *
   * @param {HTMLCanvasElement} canvas image of the given canvas
   * @return {HTMLImageElement} Image for the given canvas
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
