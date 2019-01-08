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
    this.scores = [];
    this.playerTemplate = {
      name: '',
      best: [
        {
          size: '2x2',
          best: '99:99:99.999',
        },
      ],
      all: [],
    };
    this.currentPlayer = this.playerTemplate;
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
    const player = {
      name: playerName,
      best: [
        {
          size: '2x2',
          best: '99:99:99.999',
        },
      ],
    };
    self.players.push(player);
    self.currentPlayer = player;
  }
}
