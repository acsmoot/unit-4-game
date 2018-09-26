$(document).ready(function() {
  const MAXCrystalButtons = 4;
  var imagesUrl = [
    "https://goo.gl/images/ro9agL",
    "https://goo.gl/images/FGhGmf",
    "	https://goo.gl/images/ahRFpt",
    "	https://goo.gl/images/kBfWiq"
  ];

  var tmpImages = [
    "assets/images/bootstrap.png",
    "assets/images/github-logo.jpg",
    "assets/images/loading.gif",
    "assets/images/logo_JavaScript.png"
  ];

  var playerScore = 0;
  var currentScore = 0;
  var scoreCounter = 0;
  var clickCounter = 0;
  var wins = 0;
  var losses = 0;
  var clickCounter = 0;

  // four crystals displayed as buttons on DOM.
  for (var i = 0; i < MAXCrystalButtons; i++) {
    var crystalButton = $("<button>");
    crystalButton.attr('id="button' + i);
    crystalButton.addClass("crystal-image");
    //  $(".crystal-image").attr("src", displayImage(i));
    //

    //
    // Each crystal has random hidden value between 1 - 12.
    crystalButton.val(getRandomNumber(1, 12));
    console.log(crystalButton.val());

    $("#crystal-Btn").append(crystalButton);
  }

  // for(var k=0; k< tmpImages.length; k++){
  //   displayImage(k);
  // }

  // The player will see a random number atst art of game.
  // Random number shown at start of game  between 19 - 120.
  var crystalGameScore = getRandomNumber(19, 120);
  console.log("This is the target score: " + crystalGameScore);
  //getbyElementID
  var tSpan = "<span>";
  $("#crystal-GameScore")
    .text(crystalGameScore)
    .append(tSpan);

  // FUNCTIONS
  // ==================================================================================================
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function displayImage(k) {
    $(".crystal-image").append("<img src=" + tmpImages[k] + " width='200px'>");
    // return url= tmpImages[i] + " width='200px'";
  }

  //  function displayStats(clickCounter, playerScore, amount){
  //     alert("in displayStats");
  //   };

  function resetGame() {
    var crystalGameScore = getRandomNumber(19, 120);
    return {
      playerScore: 0,
      currentScore: 0,
      scoreCounter: 0,
      clickCounter: 0,
      wins: 0,
      losses: 0,
      clickCounter: 0
    };
  }
  //  When player clicks on a crystal, it will add an  amount of points to player's total score.
  // Your game will hide this amount until the player clicks a crystal.
  //  When they do click one, update the player's score counter.
  $("button").on("click", function() {
    
    clickCounter++;
    var crystalPoints = $(this).val();
    console.log(crystalPoints);
    var amount = parseInt(crystalPoints);
    
    // add a specific amount of points to the player's total score
    playerScore += amount;
    
    // game win/lose logic. 
    console.log("New score: " + playerScore);
    if (playerScore === crystalGameScore) {
      // The player wins if player score matches displayed random number game. 
      wins++;
      alert("You win!");
      console.log("win: " + wins);
    } else if (playerScore > crystalGameScore) {
      // The player loses if player score goes above the random number.
      losses++
      alert("You lose!!");
      console.log("Lost: " + losses);
    }

    // displayStats(clickCounter, playerScore, amount);
  });

  //  The game restarts whenever the player wins or loses.
  // When the game begins again,
  // a new random number.
  // all the crystals will have four new hidden values.
  // the user's score will reset to zero.
  // score counter will reset to zero.
  // The app should show the number of games the player wins and loses.
  // do not refresh the page as a means to restart the game.
  resetGame();
});
