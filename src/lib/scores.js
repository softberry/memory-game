import { CurrentPlayer } from './player';

/**
 * Scores management
 *@class
 */
export class Scores {
  /**
   * @constructor
   */
  constructor() {
    this.players = {};

    this.currentPlayer = new CurrentPlayer('Player 1');
  }
  /**
   * Adds new user into list (if not yet exists)
   * @param {string} playerName
   */
  addPlayer(playerName) {
    const self = this;
    Object.entries(self.players).forEach((player) => {
      if (player[1].name === playerName) {
        return;
      }
    });
    const player = new CurrentPlayer(playerName);
    self.players.push(player);
    self.currentPlayer = player;
  }
}
