var initGame = (function () {
  //set up user object, public:
    alert("welcome to the game! please input names of player X & player O ")
    usero = {name: "", winnertimes: 0};
    userx = {name: "", winnertimes: 0};
    tietimes = 0;
    rounds = 0;
    winner = "nobody"
    user = {usero, userx, tietimes, rounds, winner};
    // get user information,make sure they are not null and should be different:
    function getUserInfo() {
        do {
            user.userx.name = prompt("player X's name");
        } while (user.userx.name == "");
        do {
            user.usero.name = prompt("player O's name");
        } while (user.usero.name == "");
        while (user.usero.name == user.userx.name){
            user.usero.name = prompt("player O's name, players must be different! ");
        }
        alert("click 'new game' to start");
        //hide the table and  paragraph to make it clear at the start:
        $(document).ready(function( ){
            $("table").hide();
            $("p").hide();
        });
        return user.userx.name, user.usero.name;
    };
  //  setting gameboard
    function generateGameBoard(){
      //calculate the times of game played and display:
      $("#button2").on("click", function(){
        rounds = rounds + 1;
        $("h1").text("Round " + rounds + " is going on: " + user.userx.name + " VS " + user.usero.name);
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

var nextRound = (function() {
    var turnsPlayer = 0;
    // decide the first round player randomly by math() methond
    function getFirstPlayer(){
      var firstRound = (Math.floor(Math.random() * 10) + 1)%2;
      turnsPlayer = turnsPlayer + firstRound;
    //display the current turn:
      if (turnsPlayer%2 == 0){
        currentPlayer = user.userx.name;
      } else {
        currentPlayer = user.usero.name;}
      $("#button2").on("click", function(){
        $("p").text("Player " + currentPlayer + "'s turn");
      });
    }
    return{
      getFirstPlayer: getFirstPlayer,
    }
}());
$('#button2').on("click", nextRound.getFirstPlayer());

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
          if (currentPlayer == user.userx.name && $(this).text() =="") {
            //mark with user symbol:
              $(this).text("X");
              //switch the user after being selected:
              currentPlayer = user.usero.name;
              $("p").text("Player " + currentPlayer + "'s turn");
          }else if (currentPlayer == user.usero.name && $(this).text() =="") {
              $(this).text("O");
              currentPlayer = user.userx.name;
              $("p").text("Player " + currentPlayer + "'s turn");
          }
          $(this).css("background-color", "blue");
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
  // decide who is winner in the game by different combination:
  function resultWinner(){
    $(document).ready(function( ){
        $("td").on("click", function(){
          if ($("#a1").text() == "X" && $("#a2").text() == "X" && $("#a3").text() == "X"){
            user.winner = user.userx.name;
            user.userx.winnertimes = user.userx.winnertimes + 1;
            $("table").hide();
            $("p").text("click 'new game' to replay");
          }
          if ($("#a1").text() == "X" && $("#a4").text() == "X" && $("#a7").text() == "X") {
            user.winner = user.userx.name;
            user.userx.winnertimes = user.userx.winnertimes + 1;
            $("table").hide();
            $("p").text("click 'new game' to replay");
          }
          if ($("#a1").text() == "X" && $("#a5").text() == "X" && $("#a9").text() == "X") {
            user.winner = user.userx.name;
            user.userx.winnertimes = user.userx.winnertimes + 1;
            $("table").hide();
            $("p").text("click 'new game' to replay");
          }
          if ($("#a4").text() == "X" && $("#a5").text() == "X" && $("#a6").text() == "X") {
            user.winner = user.userx.name;
            user.userx.winnertimes = user.userx.winnertimes + 1;
            $("table").hide();
            $("p").text("click 'new game' to replay");
          }
          if ($("#a7").text() == "X" && $("#a8").text() == "X" && $("#a9").text() == "X") {
            user.winner = user.userx.name;
            user.userx.winnertimes = user.userx.winnertimes + 1;
            $("table").hide();
            $("p").text("click 'new game' to replay");
          }
          if ($("#a2").text() == "X" && $("#a5").text() == "X" && $("#a8").text() == "X") {
            user.winner = user.userx.name;
            user.userx.winnertimes = user.userx.winnertimes + 1;
            $("table").hide();
            $("p").text("click 'new game' to replay");
          }
          if ($("#a3").text() == "X" && $("#a6").text() == "X" && $("#a9").text() == "X") {
            user.winner = user.userx.name;
            user.userx.winnertimes = user.userx.winnertimes + 1;
            $("table").hide();
            $("p").text("click 'new game' to replay");
          }
          if ($("#a3").text() == "X" && $("#a5").text() == "X" && $("#a7").text() == "X") {
            user.winner = user.userx.name;
            user.userx.winnertimes = user.userx.winnertimes + 1;
            $("table").hide();
            $("p").text("click 'new game' to replay");
          }
          if ($("#a1").text() == "O" && $("#a2").text() == "O" && $("#a3").text() == "O"){
            user.winner = user.usero.name;
            user.usero.winnertimes = user.usero.winnertimes + 1;
            $("table").hide();
            $("p").text("click 'new game' to replay");
          }
          if ($("#a1").text() == "O" && $("#a4").text() == "O" && $("#a7").text() == "O") {
            user.winner = user.usero.name;
            user.usero.winnertimes = user.usero.winnertimes + 1;
            $("table").hide();
            $("p").text("click 'new game' to replay");
          }
          if ($("#a1").text() == "O" && $("#a5").text() == "O" && $("#a9").text() == "O") {
            user.winner = user.usero.name;
            user.usero.winnertimes = user.usero.winnertimes + 1;
            $("table").hide();
            $("p").text("click 'new game' to replay");
          }
          if ($("#a4").text() == "O" && $("#a5").text() == "O" && $("#a6").text() == "O") {
            user.winner = user.usero.name;
            user.usero.winnertimes = user.usero.winnertimes + 1;
            $("table").hide();
            $("p").text("click 'new game' to replay");
          }
          if ($("#a7").text() == "O" && $("#a8").text() == "O" && $("#a9").text() == "O") {
            user.winner = user.usero.name;
            user.usero.winnertimes = user.usero.winnertimes + 1;
            $("table").hide();
            $("p").text("click 'new game' to replay");
          }
          if ($("#a2").text() == "O" && $("#a5").text() == "O" && $("#a8").text() == "O") {
            user.winner = user.usero.name;
            user.usero.winnertimes = user.usero.winnertimes + 1;
            $("table").hide();
            $("p").text("click 'new game' to replay");
          }
          if ($("#a3").text() == "O" && $("#a6").text() == "O" && $("#a9").text() == "O") {
            user.winner = user.usero.name;
            user.usero.winnertimes = user.usero.winnertimes + 1;
            $("table").hide();
            $("p").text("click 'new game' to replay");
          }
          if ($("#a3").text() == "O" && $("#a5").text() == "O" && $("#a7").text() == "O") {
            user.winner = user.usero.name;
            user.usero.winnertimes = user.usero.winnertimes + 1;
            $("table").hide();
            $("p").text("click 'new game' to replay");
          };
        });
      });
  }
  // If ties, h1 display:
  function resultTie(){
    $(document).ready(function( ){
        $("td").on("click", function(){
          if (user.winner == "nobody" && ($("td").text()).length ==9) {
            //use "nobody but tie" to display in the results
            user.winner = "nobody but tie"
            // tietimes will be accumulated in the results
            tietimes = tietimes + 1;
            $("table").hide();
            $("p").text("click 'new game' to replay");
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
      //display the results by click results button
      $("h1").text(user.usero.name + " win: " + user.usero.winnertimes + "  ||  " + user.userx.name + " win: " + user.userx.winnertimes + "  ||  " + "tie: " + tietimes);
    });
  });
}
$('#button1').on("click", displayResults());

function roundClear(){
  $(document).ready(function( ) {
    $("#button2").on("click", function(){
      //show the paragraph and table again:
        $("p").show();
        $("table").show();
        //clear the table:
        $("td").text("");
        //mark the table clean again:
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
