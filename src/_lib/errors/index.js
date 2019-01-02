import {default as en} from './_en';
import {default as tr} from './_tr';
import {default as de} from './_de';

import {default as template} from './template.html';

export class Errors {
	constructor(lang) {
		this.tmpl = window.document.createElement('div');
		this.tmpl.innerHTML = template;
		this.errors = en;
		switch (lang) {
			case 'en': {
				this.errors = en;
				break;
			}
			case 'tr': {
				this.errors = tr;
				break;
			}
			case 'de': {
				this.errors = de;
				break;
			}
			default: {
				this.errors = en;
			}
		}
	}

	message(key) {
		return this.errors[key].message;
	}

	sample(key) {
		const tmpl = this.tmpl.querySelector(`#${key}`);

		const clone = window.document.importNode(tmpl, true);

		return clone.innerHTML;
	}
}
