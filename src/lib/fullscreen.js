/**
 * Cross-Browser available fullscreen support
 * @module FullScreen
 */
class FullScreen {
  /**
   * create cross-fulscreen-utility
   * @constructor
   */
  constructor() {
    const doc = window.document;
    const docEl = doc.documentElement;
    this.doc = doc;
    this.docEl = docEl;
    this.requestFullScreen =
      docEl.requestFullscreen ||
      docEl.mozRequestFullScreen ||
      docEl.webkitRequestFullScreen ||
      docEl.msRequestFullscreen;
    this.cancelFullScreen =
      doc.exitFullscreen ||
      doc.mozCancelFullScreen ||
      doc.webkitExitFullscreen ||
      doc.msExitFullscreen;
  }
  /**
   * enters to fulscreen mode
   */
  enter() {
    if (
      !this.doc.fullscreenElement &&
      !this.doc.mozFullScreenElement &&
      !this.doc.webkitFullscreenElement &&
      !this.doc.msFullscreenElement
    ) {
      this.requestFullScreen.call(this.docEl);
    }
  }
  /**
   * exits from fulscreen mode
   */
  exit() {
    if (
      this.doc.fullscreenElement ||
      this.doc.mozFullScreenElement ||
      this.doc.webkitFullscreenElement ||
      this.doc.msFullscreenElement
    ) {
      this.cancelFullScreen.call(this.doc);
    }
  }
}

const fullScreen = new FullScreen();
export { fullScreen };
