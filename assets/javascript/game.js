$(document).ready(function() {
  const MAXCrystalButtons = 4;
  var wins = 0;
  var losses = 0;
  var playerScore = 0;
  var clickCounter = 0;

  var tSpan = "<span>";
  var imagesUrl = [
    "assets/images/5f0691dbfdce5e34dac71ed15d7e8071.png",
    "assets/images/779f2e337fedeefe9fd814b81363160b.png",
    "assets/images/818f13e5e4970babcf937a13bb7dea79.png",
    "assets/images/a6c22e772091573ac2b70be0ad2c6ed5.png"
  ];

  // four crystals displayed as buttons on DOM.
  for (var i = 0; i < MAXCrystalButtons; i++) {
    var crystalButton = $("<button>");

    crystalButton.attr('id="button' + i);
    crystalButton.addClass("crystal-image").css('border', '2px solid orange');
    crystalButton.append("<img src=" + imagesUrl[i] + " width='200px'>");
    //
    // Each crystal has random hidden value between 1 - 12.
    crystalButton.val(getRandomNumber(1, 12));
    console.log(crystalButton.val());

    $("#crystal-Btn").append(crystalButton).css('border', '2px solid grey');
  }

  // The player will see a random number atst art of game.
  // Random number shown at start of game  between 19 - 120.
  var crystalGameScore = getRandomNumber(19, 120);
  console.log("This is the target score: " + crystalGameScore);

  $("#crystal-GameScore")
    .text(crystalGameScore)
    .append(tSpan);

  // FUNCTIONS
  // ==================================================================================================
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  var reset = function() {
    // the user's score will reset to zero.
    // score counter will reset to zero.

    playerScore = 0;
    scoreCounter = 0;
    clickCounter = 0;
  };

  function displayStats(clickCounter, playerScore, amount, wins, losses) {
    console.log("in displayStats");
    // The app should show the number of games the player wins and loses.

    $("#wins")
      .text(wins)
      .append(tSpan);
    $("#losses")
      .text(losses)
      .append(tSpan);
    $("#playerScore")
      .text(playerScore)
      .append(tSpan);
    $("clickCounter")
      .text(clickCounter)
      .append(tSpan);
    $("#amount")
      .text(amount)
      .append(tSpan);
  }

  // function resetGame() {
  //   // When the game begins again,
  //   // a new random number.
  //   var crystalGameScore = getRandomNumber(19, 120);
  //   return reset();
  // }

  //  When player clicks on a crystal, it will add an  amount of points to player's total score.
  // Your game will hide this amount until the player clicks a crystal.
  //  When they do click one, update the player's score counter.
  $("button").on("click", function() {
    clickCounter++;
    var crystalPoints = $(this).val();
    console.log(crystalPoints);
    var amount = parseInt(crystalPoints);
    console.log(amount);
    // add a specific amount of points to the player's total score
    playerScore = playerScore + amount;
    console.log("New score: " + playerScore);

    // game win/lose logic.
    if (playerScore === crystalGameScore) {
      // The player wins if player score matches displayed random number game.
      wins++;
      alert("You win!");
      console.log("win: " + wins);
      //  The game restarts whenever the player wins or loses.
      // resetGame();
    } else if (playerScore > crystalGameScore) {
      // The player loses if player score goes above the random number.
      losses++;
      alert("You lose!!");
      console.log("Lost: " + losses);
      //  The game restarts whenever the player wins or loses.
      // resetGame();
    }
    displayStats(clickCounter, playerScore, amount, wins, losses);
  });

  // all the crystals will have four new hidden values.
  // do not refresh the page as a means to restart the game.
  // resetGame();
  
});
