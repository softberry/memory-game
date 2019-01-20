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
}
