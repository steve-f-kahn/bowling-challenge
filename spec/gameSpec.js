describe("Game", function(){
  it("Can add a new player to the game", function(){
    game = new Game()
    game.addplayer("Steve")
    expect(game.players[0].name).toEqual("Steve")
  })
})
