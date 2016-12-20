//app/models/game.js

import Backbone from 'backbone';
import Player from 'app/models/player'

const Game = Backbone.Model.extend({
  initialize: function() {
    this.set("board", {
      1: null,
      2: null,
      3: null,
      4: null,
      5: null,
      6: null,
      7: null,
      8: null,
      9: null
    });
    this.set("allPlayers", []);
  }, //close theGame

  players: function(player1, player2) {
    if (this.get("allPlayers").length == 0) {
      var p1 = new Player({
        name: player1
      });
      p1.set("symbol", "X");
      p1.set("turn", true);

      var p2 = new Player({
        name: player2
      });
      p2.set("symbol", "O");
      // p2.set("turn") = false; //don't think I need this bc default is false

      this.get("allPlayers").push(p1,p2)
    }
    return this.get("allPlayers")
  }, //close players

  play: function(location) {
    // console.log(">!>!>!>!>!>!>" + this.get("allPlayers")[0]);

    if (this.get("allPlayers")[0].get("winner") == true || this.get("allPlayers")[1].get("winner") == true) {
      throw new Error("The Game is Over");
    } //close if for error: trying to play when game is over

    if (this.get("board")[location] !== null) {
      return this.get("board");
    } //close if stmnt for if space is already taken

    var p = this.get("allPlayers")
    for (var player in p) {
      if (p[player].get("turn")) {
        this.get("board")[location] = p[player].get("symbol")
        p[player].set("turn", false);
        if (this.hasWon() == p[player].get("symbol")) {
          p[player].set("winner", true);
          break;
        }
      } else {
        p[player].set("turn", true);
      }
    } //close for loop
    // console.log("look at you trying to do stuff in the play function!");
    var nullSpacesLeft = false;
    for (var i = 1; i < 10; i++) {
      if (this.get("board")[i] == null) {
        nullSpacesLeft = true;
      }
    }//close for loop that checks if there are empty spaces left

    if (this.hasWon() == null && nullSpacesLeft == false) {
      throw new Error("It's a tie! You both lose.")
    } //close if stmnt for checking ties
    return this.get("board");
  }, //close play

  hasWon: function () {
    var b = this.get("board");
    var winningSolutions = [[1,4,7], [2,5,8], [3,6,9], [1,2,3], [4,5,6], [7,8,9], [1,5,9], [3,5,7]];

    var answer = null;
    for (var i=0; i < winningSolutions.length; i++) {
      if (b[winningSolutions[i][0]] == b[winningSolutions[i][1]] && b[winningSolutions[i][2]] == b[winningSolutions[i][1]] && b[winningSolutions[i][1]] !== null) {
        answer = b[winningSolutions[i][0]]
      }
    }
    return answer
  } //close hasWon function

});

export default Game;
