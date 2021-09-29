/**
 * @classdesc Cross-Browser available fullscreen support.
 * @class
 */
export class FullScreen {
  /**
   * @summary Create cross-fulscreen-utility.
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
   * @summary Enters to fulscreen mode.
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
   * @summary Exits from fulscreen mode.
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
