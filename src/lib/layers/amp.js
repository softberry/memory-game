/**
 * @description Prepare AMP Ads Markup for google AdSense.
 * Required JavaScript Library must be included in
 * ```<head></head>``` part of publisher document.
 */
export class AMP {
  /**
   *
   * @param {{}} options Options object for AMP Custom Element
   */
  constructor(options) {
    this.customElement = options.customElement;
    this.publisherId = options.publisherId;
  }
  /**
   * @return {String} HtmlMarkup of ad-block if amp info available
   * in manifest.json, empty otherwise.
   */
  markup() {
    if (!(this.customElement && this.publisherId)) {
      return '';
    }
    return ` <${this.customElement} type="adsense"
data-ad-client="${this.publisherId}">
</${this.customElement}>
`;
  }
}
