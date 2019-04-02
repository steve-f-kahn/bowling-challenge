function Game() {
  this.players = []
}

Game.prototype = {
  addplayer: function(name) {

    this.players.push(name)
  }
}
