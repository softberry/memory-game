/**
 * @class
 */
export class MemoryImageList extends Array {
  /**
   * @return {{HMLImageElement}}
   */
  random() {
    const length = this.length;
    const rnd = Math.floor(Math.random() * length);
    return this.splice(rnd, 1)[0];
  }
}
