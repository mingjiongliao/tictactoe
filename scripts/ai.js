var initGame = (function () {
  //set up user object, public:
    alert("welcome to the game!")
    usero = {name: "you", winnertimes: 0};
    userx = {name: "computer", winnertimes: 0};
    tietimes = 0;
    rounds = 0;
    winner = "nobody"
    user = {usero, userx, tietimes, rounds, winner};
    // get user information:
    function getUserInfo() {
        alert("click 'new game' to start");
        $(document).ready(function( ){
            $("table").hide();
            $("p").hide();
        });
    };
  //  setting gameboard
    function generateGameBoard(){
      //calculate the times of game played and display:
      $("#button2").on("click", function(){
        rounds = rounds + 1;
        $("h1").text("Round " + rounds + " is going on: " + user.userx.name + " VS " + user.usero.name);
        $("p").text("your turn");
      });
    }
    return {
        usero: usero,
        userx: userx,
        tietimes: tietimes,
        rounds: rounds,
        winner: winner,
        user: user,
        getUserInfo: getUserInfo,
        generateGameBoard: generateGameBoard
    };
}());
initGame.getUserInfo();
$('#button2').on('click', initGame.generateGameBoard());
var selectSquare = (function() {
// check if it has been selected:
  function checkSquare() {
    $(document).ready(function( ) {
      $("td").bind("click", function(){
              if ($(this).text() == "X"){
                alert("It has been selected!");
              }
              if ($(this).text() == "O"){
                alert("It has been selected!");
              }
        });
    });
  }
  // mark the selected td by giving blue color and mark "O" or "X":
  function markSquare() {
    $(document).ready(function( ){
        $("td").bind("click", function(){
          if ($(this).text() =="" && $("#a5").text() =="") {
              $(this).text("O");
              $("#a5").text("X");
              $(this).css("background-color", "blue");
              $("#a5").css("background-color", "blue");
          }
          else if ($(this).text() =="" && $("td").eq($(this).index()+3).text() =="") {
            $(this).text("O");
            $("td").eq($(this).index()+3).text("X");
            $(this).css("background-color", "blue");
            $("td").eq($(this).index()+3).css("background-color", "blue");
          }
          else if ($(this).text() =="" && $("td").eq($(this).index()-3).text() =="") {
            $(this).text("O");
            $("td").eq($(this).index()-3).text("X");
            $(this).css("background-color", "blue");
            $("td").eq($(this).index()-3).css("background-color", "blue");
          }
          else if ($(this).text() =="" && $("td").eq($(this).index()+2).text() =="") {
            $(this).text("O");
            $("td").eq($(this).index()+2).text("X");
            $(this).css("background-color", "blue");
            $("td").eq($(this).index()+2).css("background-color", "blue");
          }
          else if ($(this).text() =="" && $("td").eq($(this).index()-2).text() =="") {
            $(this).text("O");
            $("td").eq($(this).index()-2).text("X");
            $(this).css("background-color", "blue");
            $("td").eq($(this).index()-2).css("background-color", "blue");
          }
          else if ($(this).text() =="" && $("td").eq($(this).index()+1).text() =="") {
            $(this).text("O");
            $("td").eq($(this).index()+1).text("X");
            $(this).css("background-color", "blue");
            $("td").eq($(this).index()+1).css("background-color", "blue");
          }
          else if ($(this).text() =="" && $("td").eq($(this).index()-1).text() =="") {
            $(this).text("O");
            $("td").eq($(this).index()-1).text("X");
            $(this).css("background-color", "blue");
            $("td").eq($(this).index()-1).css("background-color", "blue");
          }
        });
    });
  }
    return{
      checkSquare: checkSquare,
      markSquare: markSquare
    };
}());
selectSquare.checkSquare();
selectSquare.markSquare();

var checkGameState = (function() {
  // decide who winner the game:
  function resultWinner(){
    $(document).ready(function( ){
        $("td").on("click", function(){
          if ($("#a1").text() == "X" && $("#a2").text() == "X" && $("#a3").text() == "X"){
            user.winner = user.userx.name;
            user.userx.winnertimes = user.userx.winnertimes + 1;
            $("table").hide();
            $("p").hide();
          }
          if ($("#a1").text() == "X" && $("#a4").text() == "X" && $("#a7").text() == "X") {
            user.winner = user.userx.name;
            user.userx.winnertimes = user.userx.winnertimes + 1;
            $("table").hide();
            $("p").hide();
          }
          if ($("#a1").text() == "X" && $("#a5").text() == "X" && $("#a9").text() == "X") {
            user.winner = user.userx.name;
            user.userx.winnertimes = user.userx.winnertimes + 1;
            $("table").hide();
            $("p").hide();
          }
          if ($("#a4").text() == "X" && $("#a5").text() == "X" && $("#a6").text() == "X") {
            user.winner = user.userx.name;
            user.userx.winnertimes = user.userx.winnertimes + 1;
            $("table").hide();
            $("p").hide();
          }
          if ($("#a7").text() == "X" && $("#a8").text() == "X" && $("#a9").text() == "X") {
            user.winner = user.userx.name;
            user.userx.winnertimes = user.userx.winnertimes + 1;
            $("table").hide();
            $("p").hide();
          }
          if ($("#a2").text() == "X" && $("#a5").text() == "X" && $("#a8").text() == "X") {
            user.winner = user.userx.name;
            user.userx.winnertimes = user.userx.winnertimes + 1;
            $("table").hide();
            $("p").hide();
          }
          if ($("#a3").text() == "X" && $("#a6").text() == "X" && $("#a9").text() == "X") {
            user.winner = user.userx.name;
            user.userx.winnertimes = user.userx.winnertimes + 1;
            $("table").hide();
            $("p").hide();
          }
          if ($("#a3").text() == "X" && $("#a5").text() == "X" && $("#a7").text() == "X") {
            user.winner = user.userx.name;
            user.userx.winnertimes = user.userx.winnertimes + 1;
            $("table").hide();
            $("p").hide();
          }
          if ($("#a1").text() == "O" && $("#a2").text() == "O" && $("#a3").text() == "O"){
            user.winner = user.usero.name;
            user.usero.winnertimes = user.usero.winnertimes + 1;
            $("table").hide();
            $("p").hide();
          }
          if ($("#a1").text() == "O" && $("#a4").text() == "O" && $("#a7").text() == "O") {
            user.winner = user.usero.name;
            user.usero.winnertimes = user.usero.winnertimes + 1;
            $("table").hide();
            $("p").hide();
          }
          if ($("#a1").text() == "O" && $("#a5").text() == "O" && $("#a9").text() == "O") {
            user.winner = user.usero.name;
            user.usero.winnertimes = user.usero.winnertimes + 1;
            $("table").hide();
            $("p").hide();
          }
          if ($("#a4").text() == "O" && $("#a5").text() == "O" && $("#a6").text() == "O") {
            user.winner = user.usero.name;
            user.usero.winnertimes = user.usero.winnertimes + 1;
            $("table").hide();
            $("p").hide();
          }
          if ($("#a7").text() == "O" && $("#a8").text() == "O" && $("#a9").text() == "O") {
            user.winner = user.usero.name;
            user.usero.winnertimes = user.usero.winnertimes + 1;
            $("table").hide();
            $("p").hide();
          }
          if ($("#a2").text() == "O" && $("#a5").text() == "O" && $("#a8").text() == "O") {
            user.winner = user.usero.name;
            user.usero.winnertimes = user.usero.winnertimes + 1;
            $("table").hide();
            $("p").hide();
          }
          if ($("#a3").text() == "O" && $("#a6").text() == "O" && $("#a9").text() == "O") {
            user.winner = user.usero.name;
            user.usero.winnertimes = user.usero.winnertimes + 1;
            $("table").hide();
            $("p").hide();
          }
          if ($("#a3").text() == "O" && $("#a5").text() == "O" && $("#a7").text() == "O") {
            user.winner = user.usero.name;
            user.usero.winnertimes = user.usero.winnertimes + 1;
            $("table").hide();
            $("p").hide();
          };
        });
      });
  }
  // If ties, h1 display:
  function resultTie(){
    $(document).ready(function( ){
        $("td").on("click", function(){
          if (user.winner == "nobody" && ($("td").text()).length ==9) {
            user.winner = "nobody but tie"
            tietimes = tietimes + 1;
            $("table").hide();
            $("p").hide();
            return tietimes;
          }
        });
    });
  }
    //  h1 display the winner:
  function displayWinner(){
    $(document).ready(function( ){
        $("td").on("click", function(){
          if (user.winner == user.usero.name || user.winner == user.userx.name || user.winner == "nobody but tie") {
            $("h1").text("Game over, winner is: " + user.winner);
            alert("winner is " + user.winner);
          }
        });
    });
  }
  return{
    resultWinner: resultWinner,
    resultTie: resultTie,
    displayWinner: displayWinner,
  };
}());
checkGameState.resultWinner();
checkGameState.resultTie();
checkGameState.displayWinner();

function displayResults() {
  $(document).ready(function( ) {
    $("#button1").on("click", function(){
      $("h1").text(user.usero.name + " win: " + user.usero.winnertimes + "  ||  " + user.userx.name + " win: " + user.userx.winnertimes + "  ||  " + "tie: " + tietimes);
    });
  });
}
$('#button1').on("click", displayResults());

function roundClear(){
  $(document).ready(function( ) {
    $("#button2").on("click", function(){
        $("p").show();
        $("table").show();
        $("td").text("");
        $("td").css("background-color","white");
        return user.winner = "nobody";
    });
  });
}
$('#button2').on("click", roundClear());

function resetGame() {
  $(document).ready(function( ) {
    $("#button3").on("click", function(){
      usero = {name: "", winnertimes: 0};
      userx = {name: "", winnertimes: 0};
      tietimes = 0;
      rounds = 1;
      user.winner = "nobody"
      user = {usero, userx, tietimes, rounds, winner};
    });
  });
}
$("#button3").on("click", resetGame());
