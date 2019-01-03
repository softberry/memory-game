import {MemoryImageList} from './image-list';
import {MemoryCanvaslist} from './canvas-list';
import {MemoryPairsList} from './pairs-list';

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
    if (this.images.length !== this.canvas.length / 2) {
      alert('Number of images are not half of number of canvas.');
      return;
    }
    if (this.prepared) {
      alert('game is already prepared!');
      return;
    }

    this.canvas.forEach((c) => {
      c.addEventListener('click', (e) => {
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
              console.log('PAIRS');
              self.state = [];
            }

            break;
          }

          default:
        }
      });
    });
    this.onReady();
    this.prepared = true;

    this.canvas.forEach((c) => {
      self.closeCard(c);
    });
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
    const props = {
      cw: canvas.width,
      ch: canvas.height,
      iw: image.width,
      ih: image.height,
    };

    const ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, props.cw, props.ch);
    ctx.rotate(0);
    ctx.drawImage(image, 0, 0, props.iw, props.ih, 0, 0, props.cw, props.ch);

    ctx.save();
  }
}
