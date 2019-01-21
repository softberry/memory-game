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
    this.lastGame = '';
  }
  /**
   *
   * @param {string} level passed lavel matrix
   * @param {string} lastScore time lepased for it
   */
  addScore(level, lastScore) {
    this.lastGame = `${lastScore.strDiff}`;
    level = `_${level}`;
    this.scores[level] = this.scores[level] || [];
    this.scores[level].push(lastScore);
    this.scores[level].sort((first, second) => {
      return first.timer.diff - second.timer.diff;
    });
  }
  /**
   *
   * @return {string} Formatted table for the scores of currentPlayer
   */
  table() {
    let tbl = '<table>';
    Object.entries(this.scores).forEach((key) => {
      tbl += `<tr><td>${key[0].slice(1)}</td><td>&nbsp;</td></tr>`;
      key[1].forEach((v) => {
        tbl += `<tr><td>&nbsp;</td><td>${v.strDiff}</td></tr>`;
      });
    });
    return tbl + '</table>';
  }
}
