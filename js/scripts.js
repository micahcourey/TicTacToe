//set gameboard with 9 index positions
function GameBoard() {
  this.spaces = [0, 1, 2, 3, 4, 5, 6, 7, 8];
};

//specify a position and replace with a mark
GameBoard.prototype.mark = function(xo, position) {
  this.spaces.splice(position, 1, xo);
  return this.spaces;
};

//winning scenario
GameBoard.prototype.win = function() {
if (((this.spaces[0] == "X") && (this.spaces[1] == "X") && (this.spaces[2] == "X")) ||
    ((this.spaces[3] == "X") && (this.spaces[4] == "X") && (this.spaces[5] == "X")) ||
    ((this.spaces[6] == "X") && (this.spaces[7] == "X") && (this.spaces[8] == "X")) ||
    ((this.spaces[0] == "X") && (this.spaces[3] == "X") && (this.spaces[6] == "X")) ||
    ((this.spaces[1] == "X") && (this.spaces[4] == "X") && (this.spaces[7] == "X")) ||
    ((this.spaces[2] == "X") && (this.spaces[5] == "X") && (this.spaces[8] == "X")) ||
    ((this.spaces[0] == "X") && (this.spaces[4] == "X") && (this.spaces[8] == "X")) ||
    ((this.spaces[2] == "X") && (this.spaces[4] == "X") && (this.spaces[6] == "X"))) {

      return "Player X wins!"
  }
if (((this.spaces[0] == "O") && (this.spaces[1] == "O") && (this.spaces[2] == "O")) ||
    ((this.spaces[3] == "O") && (this.spaces[4] == "O") && (this.spaces[5] == "O")) ||
    ((this.spaces[6] == "O") && (this.spaces[7] == "O") && (this.spaces[8] == "O")) ||
    ((this.spaces[0] == "O") && (this.spaces[3] == "O") && (this.spaces[6] == "O")) ||
    ((this.spaces[1] == "O") && (this.spaces[4] == "O") && (this.spaces[7] == "O")) ||
    ((this.spaces[2] == "O") && (this.spaces[5] == "O") && (this.spaces[8] == "O")) ||
    ((this.spaces[0] == "O") && (this.spaces[4] == "O") && (this.spaces[8] == "O")) ||
    ((this.spaces[2] == "O") && (this.spaces[4] == "O") && (this.spaces[6] == "O"))) {

      return "Player O wins!"
  }
};

$(document).ready(function(){
  var gameBoard = new GameBoard();
  var checkWin = gameBoard.win();
  var counter = 0;
  var turn = function() {
    for(var i=0; counter.length; i++)
      if (counter%2 == 0) {
        return gameBoard.mark("X", position);
      } else {
        return gameBoard.mark("O", position);
      }

  };
  console.log(counter);
  $("#game-board").gameBoard
    $("#btn-0").click(function() {
      gameBoard.mark("X", 0);
      $("#btn-0").text($("#btn-0").data("text-swap"))
      var checkWin = gameBoard.win();
      console.log(gameBoard.spaces);
      console.log(checkWin);
    });
    $("#btn-1").click(function() {
      gameBoard.mark("X", 1)
      $("#btn-1").text($("#btn-1").data("text-swap"))
      var checkWin = gameBoard.win();
      console.log(gameBoard.spaces);
      console.log(checkWin);
    });
    $("#btn-2").click(function() {
      gameBoard.mark("X", 2)
      $("#btn-2").text($("#btn-2").data("text-swap"))
      var checkWin = gameBoard.win();
      console.log(gameBoard.spaces);
      console.log(checkWin);
    });
    $("#btn-3").click(function() {
      gameBoard.mark("X", 3)
      $("#btn-3").text($("#btn-3").data("text-swap"))
      var checkWin = gameBoard.win();
      console.log(gameBoard.spaces);
      console.log(checkWin);
    });
    $("#btn-4").click(function() {
      gameBoard.mark("X", 4)
      $("#btn-4").text($("#btn-4").data("text-swap"))
      var checkWin = gameBoard.win();
      console.log(gameBoard.spaces);
      console.log(checkWin);
    });
    $("#btn-5").click(function() {
      gameBoard.mark("X", 5)
      $("#btn-5").text($("#btn-5").data("text-swap"))
      var checkWin = gameBoard.win();
      console.log(gameBoard.spaces);
      console.log(checkWin);
    });
    $("#btn-6").click(function() {
      gameBoard.mark("X", 6)
      $("#btn-6").text($("#btn-6").data("text-swap"))
      var checkWin = gameBoard.win();
      console.log(gameBoard.spaces);
      console.log(checkWin);
    });
    $("#btn-7").click(function() {
      gameBoard.mark("X", 7)
      $("#btn-7").text($("#btn-7").data("text-swap"))
      var checkWin = gameBoard.win();
      console.log(gameBoard.spaces);
      console.log(checkWin);
    });
    $("#btn-8").click(function() {
      gameBoard.mark("X", 8)
      $("#btn-8").text($("#btn-8").data("text-swap"))
      var checkWin = gameBoard.win();
      console.log(gameBoard.spaces);
      console.log(checkWin);
    });

  $("#form_X").submit(function(event) {
    event.preventDefault();
    var markX = $("input#X").val();
    gameBoard.mark("X", markX);
    var checkWin = gameBoard.win();
    console.log(gameBoard.spaces);
    console.log(checkWin);
  });


  $("#form_O").submit(function(event) {
    event.preventDefault();
    var markO = $("input#O").val();
    gameBoard.mark("O", markO);
    var checkWin = gameBoard.win();
    console.log(gameBoard.spaces);
    console.log(checkWin);
   });
 });
