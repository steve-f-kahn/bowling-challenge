function Player(name) {
  this.rolls = []
  this.name = name
  this._score = 0
}
Player.prototype = {
  addroll: function (roll) {
    this.rolls.push(roll)
  },
  score: function() {
    for (var i = 0; i < this.rolls.length; i+= 2) {
      if (this.rolls[i] + this.rolls[i+1] == 10) {
        this._score += this.rolls[i+2]
      }
    }
    this._score += this.rolls.reduce(sumArray)
    return this._score
  }
}

sumArray = function(total, num){
  return total += num
}
