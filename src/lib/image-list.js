/**
 * Controls images in a list.
 * @extends Array.
 * @class
 */
export class MemoryImageList extends Array {
  /**
   * @return {{HMLImageElement}} Randomly selected image.
   */
  random() {
    const length = this.length;
    const rnd = Math.floor(Math.random() * length);
    return this.splice(rnd, 1)[0];
  }
}
