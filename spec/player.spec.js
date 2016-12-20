//player.spec.js
import Player from 'app/models/player'

describe('Player', function() {
  var player1;
  var player2;
  beforeEach(function() {
    player1 = new Player({
      name: "Mario"
    });
    player2 = new Player({
      name: "Luigi"
    });
  })
  describe('name', function() {
    it('allows you to set a name to a player', function() {
      expect(player1.get("name")).toEqual("Mario");
    })// close it

    it('creates two distinct players', function() {
      expect(player1.get("name")).toEqual("Mario")
      expect(player2.get("name")).toEqual("Luigi")
    })
  })//close describe name
}) //close describe Player
