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
      e.target.src = self.owner.private.picsum(self.width, self.height);
    }
    self.owner.cardBack.addEventListener('load', () => {
      for (let i = 0; i <= self.imageCount; i++) {
        const img = self.owner.private.getNewImage(
          (e) => imageFound(e),
          (e) => imageNotFound(e)
        );

        img.src = self.owner.private.picsum(self.width, self.height);
        self.owner.images.push(img);
      }
    });

    self.owner.cardBack.addEventListener('error', (e) => {
      e.target.src = self.owner.private.picsum(self.width, self.height);
    });

    self.owner.cardBack.src = self.owner.private.picsum(
      self.width,
      self.height
    );
  }
}
