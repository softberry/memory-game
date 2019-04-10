import { default as tmplNextLevel } from '../../templates/NextLevel.html';
import { SocialButtons } from './social';
import { AMP } from './amp';

import { levelSummary } from '../tools/summary';
/**
 * NextLevel Layer, creates content of transition layer between levels
 */
export class NextLevel {
  /**
   *
   * @param {{}} owner  An instance of {@link MiniMemory}
   */
  constructor(owner) {
    this.owner = owner;
    this.html = tmplNextLevel;
    this.ampMarkup = '';
  }
  /**
   * Initialize class after html insert.
   */
  init() {
    this.owner.shadowRoot
      .querySelector('#nextlevel #continue')
      .addEventListener('click', this.hide.bind(this));
  }
  /**
   * Shows nextlevel layer
   */
  show() {
    const layer = this.owner.shadowRoot.querySelector('#nextlevel');
    const summary = this.owner.shadowRoot.querySelector('#summary');
    const footer = this.owner.shadowRoot.querySelector('#nextlevel .footer');
    const btnContinue = this.owner.shadowRoot.querySelector('#continue');

    if (
      Object.keys(this.owner.settings.scores.currentPlayer.scores).length === 0
    ) {
      btnContinue.setAttribute('data-i18n', 'PLAY');
    } else {
      btnContinue.setAttribute('data-i18n', 'CONTINUE');
    }

    summary.innerHTML = levelSummary(
      this.owner.settings.scores.currentPlayer.scores
    );
    layer.classList.add('active');
    layer.style.opacity = '1';
    this.owner.i18n.update(this.owner.shadowRoot);

    footer.innerHTML = this.getAmpMarkup();
    new SocialButtons().html().then((html) => {
      footer.innerHTML += html;
    });
  }
  /**
   * Hides nextlevel layer
   */
  hide() {
    const layer = this.owner.shadowRoot.querySelector('#nextlevel');
    layer.style.opacity = '0';
    setTimeout(() => {
      layer.classList.remove('active');
    }, 300);
  }
  /**
   * get AMP markup from AMP library.
   * @return {String} returns the required markup if available,
   * empty otherwise
   *
   */
  getAmpMarkup() {
    if (!this.owner.manifest || !this.owner.manifest.amp) {
      return '';
    }
    const amp = new AMP(this.owner.manifest.amp);
    return amp.markup();
  }
}
