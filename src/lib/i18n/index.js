import { default as en } from './lang/en-US';
import { default as tr } from './lang/tr-TR';
import { default as de } from './lang/de-DE';

import { default as template } from './template.html';
/**
 * @description Localization
 */
export class Localization {
  /**
   *
   * @param {string} lang language code
   * @constructor
   */
  constructor(lang = 'en') {
    if (typeof lang !== 'string') {
      lang = navigator.language;
    }
    lang = lang.slice(0, 2).toLowerCase();

    this.tmpl = window.document.createElement('div');
    this.tmpl.innerHTML = template;

    switch (lang) {
      case 'en': {
        this.dict = en;
        break;
      }
      case 'tr': {
        this.dict = tr;
        break;
      }
      case 'de': {
        this.dict = de;
        break;
      }
      default: {
        this.dict = en;
      }
    }
  }
  /**
   *
   * @param {string} key key name of identifier
   * @return {string} Message in selected langauge
   */
  message(key) {
    return this.dict[key].message;
  }
  /**
   * returns html markup from sample templates
   * @param {string} key name of identifier
   * @return {string} HTML-markup as sample
   */
  sample(key) {
    const tmpl = this.tmpl.querySelector(`#${key}`);

    const clone = window.document.importNode(tmpl, true);

    return clone.innerHTML;
  }
}
