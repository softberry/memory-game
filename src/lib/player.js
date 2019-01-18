export class CurrentPlayer {
  constructor(playerName) {
    this.name = playerName;
    this.scores = {};
  }
  static get best() {}
  setName(userName) {
    this.name = userName;
  }
  addScore(groupName, scoreAsSeconds) {}
}
