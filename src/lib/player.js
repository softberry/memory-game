/**
 * Keep track of current player and scroes etc. of the player
 * @class
 */
export class CurrentPlayer {
  /**
   *Initalize a Player as current
   * @param {string} playerName Name of the player
   */
  constructor(playerName) {
    this.name = playerName;
    this.scores = {};
  }
  /**
   *
   * @param {string} level passed lavel matrix
   * @param {string} seconds time lepased for it
   */
  addScore(level, seconds) {
    this.scores[level] = seconds;
  }
}
