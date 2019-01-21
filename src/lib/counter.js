/**
 * @class
 */
export class Counter {
  /**
   *
   * @param {HTMLDivEleemnt} el counter element in toolbar
   */
  constructor(el) {
    const now = Date.now();
    this.board = el;
    this.intervalHandle = 0;
    this.strDiff = '';
    this.timer = {
      start: now,
      end: now,
      diff: 0,
    };
  }
  /**
   * start counter
   */
  start() {
    const self = this;
    const now = Date.now();
    this.timer.start = now;
    this.timer.end = now;
    this.timer.diff = 0;
    this.intervalHandle = window.setInterval(() => {
      self.diff();
    }, 100);
  }
  /**
   * calculate difference between start/stop and convert it to ISO
   */
  diff() {
    const now = Date.now();
    this.timer.end = now;
    this.timer.diff = this.timer.end - this.timer.start;
    this.strDiff = new Date(this.timer.diff).toISOString().slice(11, -5);
    this.board.innerHTML = this.strDiff;
  }
  /**
   * stops the counter
   */
  stop() {
    window.clearInterval(this.intervalHandle);
  }
}
