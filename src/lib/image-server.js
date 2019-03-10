/**
 * Loads images from server. Settings are read from manifest.json
 * @class
 */
export class ImageServer {
  /**
   *
   * @param {{}} owner  An instance of {@link MiniMemory}
   */
  constructor(owner) {
    this.owner = owner;
    this.manifest = {};
    this.images = {};
    this.index = { from: 0, to: 0, card: 0 };
  }
  /**
   * Load manifest.json
   * @return {{}} manifest Json Object
   */
  getManifest() {
    const self = this;
    return fetch('./manifest.json')
      .then((response) => {
        return response.json();
      })
      .then((manifest) => {
        self.manifest = manifest;
        return manifest;
      })
      .catch((err) => {
        return err;
      });
  }
  /**
   * get Images from server. Server path/url retrieved from manifest.json
   * @param {{}} options width, height and number of images to
   * be requested from server
   */
  getCardImages(options) {
    const self = this;
    self.index.to = options.imageCount;
    const host = self.manifest.imageServer.list
      .replace(':from', self.index.from)
      .replace(':to', self.index.to)
      .replace(':cardId', self.index.card);
    self.index.from = options.imageCount;
    self.index.card = self.index.card + 1;
    fetch(host)
      .then((response) => response.json())
      .then((res) => {
        self.done(res, options);
      });
  }
  /**
   * Create Images (HTMLImageElement) and load images from server
   * @param {{}} res {images:[], card:[]}
   * @param {{}} options width, height and number of images to be
   * requested from server
   */
  done(res, options) {
    const self = this;

    self.owner.cardBack.addEventListener('load', (e) => {
      res.images.forEach((image) => {
        const img = document.createElement('img');
        img.src = self.manifest.imageServer.image
          .replace(':width', options.width)
          .replace(':height', options.height)
          .replace(':path', image);

        self.owner.game.addImage(img);
      });
    });

    self.owner.cardBack.src = self.manifest.imageServer.image
      .replace(':width', options.width)
      .replace(':height', options.height)
      .replace(':path', res.cards[0]);
  }
}
