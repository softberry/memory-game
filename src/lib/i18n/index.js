import { default as en } from './lang/en-US';
import { default as tr } from './lang/tr-TR';
import { default as de } from './lang/de-DE';

import { default as template } from './template.html';
/**
 * @classdesc Internalization controller. If not efined
 * tries to get localization value from browser.
 * Or expects it's defined in 2 small letters
 * language code like `en` for `English`
 */
export class Localization {
  /**
   *
   * @param {string} lang Language code.
   */
  constructor(lang = 'en') {
    if (typeof lang !== 'string') {
      lang = navigator.language;
    }

    this.all = {
      en,
      de,
      tr,
    };
    this.lang = lang.slice(0, 2).toLowerCase();

    this.tmpl = window.document.createElement('div');
    this.tmpl.innerHTML = template;

    switch (this.lang) {
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
   * @param {string} key Key name of identifier.
   * @return {string} Message in selected langauge.
   */
  message(key) {
    return this.dict[key].message;
  }
  /**
   * Gets html markup from sample templates.
   * @param {string} key name of identifier.
   * @return {string} HTML-markup as sample.
   */
  sample(key) {
    const tmpl = this.tmpl.querySelector(`#${key}`);

    const clone = window.document.importNode(tmpl, true);

    return clone.innerHTML;
  }

  /**
   * Update all language related fileds using attribute data-i18n.
   * @param {{}} shadowRoot
   */
  update(shadowRoot) {
    const items = shadowRoot.querySelectorAll('[data-i18n]');
    const self = this;
    [].forEach.call(items, (item) => {
      switch (item.dataset.i18n) {
        case 'LANGUAGE_LABEL': {
          item.innerText = this.all[item.value].LANGUAGE_LABEL.message;
          if (item.value === self.lang) {
            item.setAttribute('selected', true);
          }
          break;
        }
        default: {
          item.innerText = this.message(item.dataset.i18n);
        }
      }
    });
  }
}
