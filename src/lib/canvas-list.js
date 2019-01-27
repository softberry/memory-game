/**
 * @class MemoryCanvaslist
 */
export class MemoryCanvaslist extends Array {
  /**
   *
   * @param {{}} canvas
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
   *
   * @param {{}} srcCanvas
   * @return {{}}
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
