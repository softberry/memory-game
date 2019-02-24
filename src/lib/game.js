import { MemoryImageList } from './image-list';
import { MemoryCanvaslist } from './canvas-list';
import { MemoryPairsList } from './pairs-list';

/**
 * @classdesc Controls main actions directly related to the game itself.
 * @class
 */
export class Game {
  /**
   * @summary Contruct
   * @param {Array} canvas List of canvas elements to be drawn image on.
   * @param {HTMLImageElement} cardBack Image element to be drown
   * as card back face.
   */
  constructor(canvas, cardBack) {
    // Event Listener Object. This is not actually used as DOM object.
    this.events = document.createElement('div');

    this.cardBack = cardBack;
    this.canvas = new MemoryCanvaslist();
    this.images = new MemoryImageList();

    this.pairs = new MemoryPairsList();

    this.canvas.addCanvas(canvas);
    this.state = [];
    this.prepared = false;

    this.cards = {
      open: 0,
      length: 0,
    };
  }

  /**
   * @summary Includes given image to the game.
   * @param {HTMLImageElement} img image to be added.
   */
  addImage(img) {
    this.images.push(img);
    if (this.images.length === this.canvas.length / 2) {
      this.prepare();
    }
  }
  /**
   * Prepares the Game.
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
                const eventWin = new CustomEvent('win', {});
                self.events.dispatchEvent(eventWin);
              }
            }
            break;
          }

          default:
        }
      });
    });

    self.prepared = true;
    const delay = 1000 / self.canvas.length;
    self.canvas.forEach((c, i) => {
      setTimeout(() => {
        c.classList.remove('wait');
        self.closeCard(c);
      }, i * delay);
    });
    const eventReady = new CustomEvent('ready', {});
    self.events.dispatchEvent(eventReady);
  }

  /**
   * @summary Opens  card by drawing it's image on given canvas.
   * @param {HTMLCanvasElement} canvas Elment to be opened.
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
   * Closes card by drawing cardback image on given canvas.
   * @param {HTMLCanvasElement} canvas Canvas element to be closed.
   */
  closeCard(canvas) {
    const self = this;
    self.drawImageOnCanvas(canvas, self.cardBack);
    canvas.classList.remove('open');
  }
  /**
   * Draws any image on given canvas.
   * @param {HTMLCanvasElement} canvas target element to be drawn on to.
   * @param {HTMLImageElement} image Image drawn on.
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
  /**
   * Calculates dimensions of next level.
   * @param {{}} options All attriburtes.
   * @return {string} Matrix of the next level.
   */
  nextLevel(options) {
    self = this;
    let col;
    let row;
    [col, row] = options.matrix.split('x').map((n) => parseInt(n));
    col === row ? col++ : row++;

    if (col > 10 || row > 10) {
      return '2x2';
    } else {
      return `${col}x${row}`;
    }
  }
}
