describe("Player", function(){
  let player

  beforeEach(function(){
    player = new Player("Steve")

  })
  describe("Setup and name", function(){
    it("Has an array called rolls", function(){
      expect(player.rolls).toEqual([])
    })

    it("Has a name, Steve", function(){
      expect(player.name).toEqual("Steve")
    })

    it("Has a name, Freddy", function(){
      player = new Player("Freddy")
      expect(player.name).toEqual("Freddy")
    })
  })

  describe("Scoring", function(){
    it("A player roles all gutter balls and the score to be 0", function(){
      for (var i = 0; i < 20; i++) {
        player.addroll(0)
      }
      expect(player.score()).toEqual(0)
    })

    it("A player roles all 1 balls and the score to be 20", function(){
      for (var i = 0; i < 20; i++) {
        player.addroll(1)
      }
      expect(player.score()).toEqual(20)
    })

    it("A player roles all 2 balls and the score to be 40", function(){
      for (var i = 0; i < 20; i++) {
        player.addroll(2)
      }
      expect(player.score()).toEqual(40)
    })

    it("A player roles a spare and a 6 then gutterballs. The score should be 22", function(){
      player.addroll(5)
      player.addroll(5)
      player.addroll(6)
      for (var i = 0; i < 17; i++) {
        player.addroll(0)
      }
      expect(player.score()).toEqual(22)
    })

    it("A player roles a strike and a 8 then gutterballs. The score should be 26", function(){
      player.addroll(10)
      player.addroll(0)
      player.addroll(0)
      player.addroll(8)
      for (var i = 0; i < 16; i++) {
        player.addroll(0)
      }
      expect(player.score()).toEqual(26)
    })

    it("Gets a spare on the last roll so gets another roll", function(){
      for (var i = 0; i < 18; i++) {
        player.addroll(0)
      }
      player.addroll(5)
      player.addroll(5)
      player.addroll(9)
      expect(player.score()).toEqual(28)
    })

    it("Gets a strike on the last round so gets another roll", function(){
      for (var i = 0; i < 18; i++) {
        player.addroll(0)
      }
      player.addroll(10)
      player.addroll(0)
      player.addroll(9)
      expect(player.score()).toEqual(28)
    })
  })

})
