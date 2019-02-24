/**
 * Extends Array with additional methods to esily keep
 * track of all canvas in layout.
 * @class
 * @extends Array
 */
export class MemoryCanvaslist extends Array {
  /**
   * All given HTMLCanvasElements are included in {`MemoryCanvaslist`}
   * Correction of width and height values are important.
   * @param {Array} canvas list of canvas elements.
   */
  addCanvas(canvas) {
    const self = this;

    canvas.forEach((c) => {
      c.width = parseInt(c.offsetWidth);
      c.height = parseInt(c.offsetHeight);
      self.push(c);
    });
  }

  /**
   * Chooses randomly pair Canvas.
   * @param {{}} srcCanvas Canvas element that needs to be paired.
   * @return {{}} Paired elements.
   */
  randomPair(srcCanvas) {
    const srcIndex = this.indexOf(srcCanvas);
    const result = [];
    result.push(this.splice(srcIndex, 1)[0]);

    const length = this.length;
    const rnd = Math.floor(Math.random() * length);

    result.push(this.splice(rnd, 1)[0]);
    return result;
  }
}
