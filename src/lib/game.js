import { MemoryImageList } from './image-list';
import { MemoryCanvaslist } from './canvas-list';
import { MemoryPairsList } from './pairs-list';

/**
 * @class
 */
export class Game {
  /**
   *
   * @param {HTMLCanvasElement} canvas
   * @param {HTMLImageElement} cardBack
   */
  constructor(canvas, cardBack) {
    this.cardBack = cardBack;
    this.canvas = new MemoryCanvaslist();
    this.images = new MemoryImageList();

    this.pairs = new MemoryPairsList();

    this.canvas.addCanvas(canvas);
    this.state = [];
    this.prepared = false;
    this.readyFunctions = [];
    this.cards = {
      open: 0,
      length: 0,
    };
  }

  /**
   * Includes given image to the game
   * @param {HTMLImageElement} img image to be added
   */
  addImage(img) {
    this.images.push(img);

    if (this.images.length === this.canvas.length / 2) {
      this.prepare();
    }
  }
  /**
   * Prepares the Game
   */
  prepare() {
    const self = this;

    self.cards.open = 0;
    self.cards.length = self.images.length;
    this.canvas.forEach((c) => {
      c.addEventListener('click', (e) => {
        if (this.counter.timer.diff === 0) {
          this.counter.start();
        }
        if (e.target.classList.contains('open')) {
          return;
        }
        if (!self.pairs.hasPair(e.target)) {
          const randomPair = self.canvas.randomPair(e.target);
          self.pairs.push(randomPair.concat(self.images.random()));
        }
        switch (self.state.length) {
          case 2: {
            self.closeCard(self.state.pop());
            self.closeCard(self.state.pop());
          }
          case 0: {
            self.state.push(e.target);

            self.openCard(e.target);
            break;
          }
          case 1: {
            self.state.push(e.target);
            self.openCard(e.target);
            if (self.pairs.arePairs(self.state)) {
              self.state = [];
              self.cards.open++;
              if (self.cards.open === self.cards.length) {
                self.counter.stop();
              }
            }
            if (self.images.length === 0) {
              self.counter.stop();
            }
            break;
          }

          default:
        }
      });
    });

    this.prepared = true;

    this.canvas.forEach((c) => {
      c.classList.remove('wait');
      self.closeCard(c);
    });
    this.readyFunctions.forEach((cb) => {
      cb.fn.call(cb.context);
    });
  }
  /**
   * adds  function to self.game to enable hiding
   * 'LOADING...' layer after successful load.
   * @param {function} fn
   * @param {{}} context ` this ` context to be used
   * at the time of calling function
   */
  onReady(fn, context) {
    this.readyFunctions.push({ fn, context });
  }
  /**
   * Opens  card by drawing cardback image on given canvas
   * @param {HTMLCanvasElement} canvas
   */
  openCard(canvas) {
    const self = this;
    const img = self.pairs.getImage(canvas);

    if (img.constructor !== HTMLImageElement) {
      console.warn('Translate-error: no image for the canvas found ');
      return;
    }
    canvas.classList.add('open');
    self.drawImageOnCanvas(canvas, img);
  }
  /**
   * Closes card by drawing cardback image on given canvas
   * @param {HTMLCanvasElement} canvas
   */
  closeCard(canvas) {
    const self = this;
    self.drawImageOnCanvas(canvas, self.cardBack);
    canvas.classList.remove('open');
  }
  /**
   * Draws any image on given canvas.
   * @param {HTMLCanvasElement} canvas
   * @param {HTMLImageElement} image
   */
  drawImageOnCanvas(canvas, image) {
    const ctx = canvas.getContext('2d');
    ctx.restore();

    const props = {
      cw: canvas.width,
      ch: canvas.height,
      iw: image.width,
      ih: image.height,
    };

    ctx.clearRect(0, 0, props.cw, props.ch);
    ctx.drawImage(image, 0, 0, props.iw, props.ih, 0, 0, props.cw, props.ch);
  }
}
