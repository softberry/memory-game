import { newImage } from './tools/image';

/**
 * Loads images from server incase of
 * manifest.json or image server can not be loaded.
 * @class
 */
export class Fallback {
  /**
   *
   * @param {{}} owner  An instance of {@link MiniMemory}
   * @param {{}} options width, height and number of images to be
   */
  constructor(owner, options) {
    this.owner = owner;
    this.width = options.width;
    this.height = options.height;
    this.imageCount = options.imageCount;
    /**
     * @description Holds list of Images those returns 404
     * to avoid try to load again.
     */
    this.excludedImages = [];
    this.init();
  }
  /**
   * initialize loading images from picsum.com
   */
  init() {
    const self = this;
    /**
     * @summary Image succesfully  loaded  handler.
     * @param {Event} e Image onload event.
     */
    function imageFound(e) {
      self.owner.game.addImage(e.target);
    }
    /**
     * @summary Image could not loaded error handler
     * @param {Event} e Image onload.
     */
    function imageNotFound(e) {
      e.target.src = self.picsum(self.width, self.height);
    }

    self.owner.cardBack.addEventListener('load', () => {
      for (let i = 0; i <= self.imageCount; i++) {
        const img = newImage(
          self.picsum(self.width, self.height),
          imageFound,
          imageNotFound
        );
        self.owner.images.push(img);
      }
    });

    self.owner.cardBack.addEventListener('error', (e) => {
      e.target.src = self.picsum(self.width, self.height);
    });

    self.owner.cardBack.src = self.picsum(self.width, self.height);
  }
  /**
   * Creates picsum image patterm.
   * @param { integer} w width of requested image.
   * @param {integer} h height of requested image.
   * @return {string} URL
   */
  picsum(w, h) {
    return `https://picsum.photos/${w}/${h}?image=${this.getFreeId()}`;
  }
  /**
   * Returned number should not be in the excludedImages array
   * Save namber in to excludedImages to avoid it to be choosen again.
   * @return {integer} random Integer between 0 - 1000.
   */
  getFreeId() {
    const self = this;
    let rnd = Math.floor(Math.random() * 1000);
    while (self.excludedImages.filter((ex) => ex === rnd).length > 0) {
      rnd = Math.floor(Math.random() * 1000);
    }
    self.excludedImages.push(rnd);
    return rnd;
  }
}
