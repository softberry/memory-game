/**
 * @classdesc Keep track of current player and scroes etc. of the player.
 * @class
 */
export class CurrentPlayer {
  /**
   * Initalize a Player as current.
   * @param {string} playerName Name of the player.
   */
  constructor(playerName) {
    this.name = playerName;
    this.scores = {};
    this.lastGame = '';
  }
  /**
   *
   * @param {string} level Passed lavel matrix.
   * @param {string} lastScore Time elapsed for it.
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
   * Prepares table.
   * @deprecated Score table needs to be new consepted,
   * which can be used for external settings panel.
   * @return {string} Formatted table for the scores of currentPlayer.
   */
  table() {
    let tbl = '<table>';
    Object.keys(this.scores).forEach((key) => {
      const param = this.scores[key];
      tbl += `<tr><td>${param.slice(1)}</td><td>&nbsp;</td></tr>`;
      param.forEach((v) => {
        tbl += `<tr><td>&nbsp;</td><td>${v.strDiff}</td></tr>`;
      });
    });
    return tbl + '</table>';
  }
}
