import { default as tmplNextLevel } from '../../templates/NextLevel.html';
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
    summary.innerHTML = levelSummary(
      this.owner.settings.scores.currentPlayer.scores
    );
    layer.classList.add('active');
    layer.style.opacity = '1';
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
}
