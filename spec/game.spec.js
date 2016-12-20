//game.spec.js
import Game from 'app/models/game';

describe('Game', function() {
  var ticTacToe;
  beforeEach(function() {
    ticTacToe = new Game();
  });

  describe('Constructor testing', function() {
    it('constructor exists', function() {
      expect(Game).toBeFunction();
    });
  });

  describe('newGame', function() {
    it('should start a new game with an empty board', function() {
      var emptyBoard = ticTacToe.get("board");
      for (var key in emptyBoard) {
        expect(emptyBoard[key]).toBeNull();
      }
    }); //close it

    it('should have a board with 9 spaces', function() {
      expect( Object.keys(ticTacToe.get("board")).length ).toEqual(9);
    }); //close it
  }); //close describe newGame function


  describe('players', function() {
    it('should assign two players', function() {
      var gamePlayers = ticTacToe.players("Mario","Luigi");
      expect(gamePlayers[0].get("name")).toEqual("Mario");
      expect(gamePlayers[1].get("name")).toEqual("Luigi");
      expect(gamePlayers[0].get("symbol")).toEqual("X");
      expect(gamePlayers[1].get("symbol")).toEqual("O");
    });//close it

    it('should start on player one turn', function() {
      var gamePlayers = ticTacToe.players("Mario","Luigi");
      expect(gamePlayers[0].get("turn")).toEqual(true);
      expect(gamePlayers[1].get("turn")).toEqual(false);
    });

    it('should have two player', function() {
      var gamePlayers = ticTacToe.players("Mario","Luigi");
      expect(gamePlayers.length).toEqual(2);
    })

    it('should not be able to reset players', function() {
      var dudes = ticTacToe.players("Mario","Luigi");
      var dudes = ticTacToe.players("Peach","Bowser");
      expect(dudes[0].get("name")).toEqual("Mario");
      expect(dudes[1].get("name")).toEqual("Luigi");

    })
  }); //close describe players


  describe('play', function() {
    it('should switch players turns', function() {
      var thePlayers = ticTacToe.players("Mario","Luigi");
      ticTacToe.play(3);
      expect(thePlayers[0].get("turn")).toEqual(false);
      expect(thePlayers[1].get("turn")).toEqual(true);
    });

    it('should change the board with the play', function() {
      var thePlayers = ticTacToe.players("Mario","Luigi");
      ticTacToe.play(3);
      expect(ticTacToe.get("board")[3]).toEqual("X");
      for (var i=1; i < 10; i++) {
        if (i !== 3) {
          expect(ticTacToe.get("board")[i]).toEqual(null);
        }
      };
    });

    // it('should can track multiple players plays', function() {
    //   var ticTacToe = new Game();
    //   ticTacToe.players("Mario","Luigi");
    //   ticTacToe.play(3);
    //   ticTacToe.play(5);
    //
    //   expect(ticTacToe.board[3]).toEqual("X");
    //   expect(ticTacToe.board[5]).toEqual("O");
    //   for (var i=1; i < 10; i++) {
    //     if (i !== 3 && i !== 5) {
    //       expect(ticTacToe.board[i]).toEqual(null);
    //     }
    //   };
    // });

    // it('should not let a player play a taken spot', function() {
    //   var ticTacToe = new Game();
    //   ticTacToe.players("Mario","Luigi");
    //   ticTacToe.play(3);
    //   expect(ticTacToe.board[3]).toEqual("X");
    //   ticTacToe.play(3);
    //   expect(ticTacToe.board[3]).toEqual("X");
    //
    //   expect(ticTacToe.allPlayers[0].turn).toEqual(false);
    //   expect(ticTacToe.allPlayers[1].turn).toEqual(true);
    // });

    // it ('should set the winner', function() {
    //   var ticTacToe = new Game();
    //   ticTacToe.players("Mario","Luigi");
    //   ticTacToe.play(1); // player 1
    //   ticTacToe.play(4); // player 2
    //   ticTacToe.play(2); // player 1
    //   ticTacToe.play(5); // player 2
    //
    //   expect(ticTacToe.allPlayers[0].winner).toEqual(false);
    //   ticTacToe.play(3); // player 1
    //   expect(ticTacToe.allPlayers[0].winner).toEqual(true);
    //   expect(ticTacToe.allPlayers[1].winner).toEqual(false);
    //
    // });

    // it('should not allow a play if there is a winner', function() {
    //   var ticTacToe = new Game();
    //   ticTacToe.players("Mario","Luigi");
    //   ticTacToe.play(1); // player 1
    //   ticTacToe.play(4); // player 2
    //   ticTacToe.play(2); // player 1
    //   ticTacToe.play(5); // player 2
    //   ticTacToe.play(3); // player 1
    //
    //   expect(function() {ticTacToe.play(8)}).toThrow(new Error("The Game is Over"));
    // });

    // it('should detect a tie', function() {
    //   var ticTacToe = new Game();
    //   ticTacToe.players("Mario","Luigi");
    //   ticTacToe.play(1); // player 1
    //   ticTacToe.play(2); // player 2
    //   ticTacToe.play(5); // player 1
    //   ticTacToe.play(3); // player 2
    //   ticTacToe.play(6); // player 1
    //   ticTacToe.play(4); // player 2
    //   ticTacToe.play(7); // player 1
    //   ticTacToe.play(9); // player 2
    //
    //   expect(function() {ticTacToe.play(8)}).toThrow(new Error("It's a tie! You both lose."));
    //
    // })
  }); // close describe play

  // describe('hasWon', function() {
  //   it('should return a symbol for the winner', function() {
  //     var ticTacToe = new Game();
  //     ticTacToe.players("Mario","Luigi");
  //     ticTacToe.play(1); // player 1
  //     ticTacToe.play(3); // player 2
  //     ticTacToe.play(9); // player 1
  //     ticTacToe.play(5); // player 2
  //     ticTacToe.play(7); // player 1
  //     ticTacToe.play(8); // player 2
  //     ticTacToe.play(4); // player 1
  //
  //     expect(ticTacToe.hasWon()).toEqual(ticTacToe.allPlayers[0].symbol);
  //   });
  //
  //   it('should return a symbol for the winner', function() {
  //     var ticTacToe = new Game();
  //     ticTacToe.players("Mario","Luigi");
  //     ticTacToe.play(1); // player 1
  //     ticTacToe.play(3); // player 2
  //
  //     expect(ticTacToe.hasWon()).toEqual(null);
  //   });
  // }); //ending describe hasWon

});// close describe Game class
