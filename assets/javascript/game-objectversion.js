// Global variables
var words = [
    "blanche",
    "rose",
    "dorothy",
    "sophia",
    "miami",
    "friends"]
var wins = 0;
var losses = 0;
var letters = "";
var win = false;
var answer = "";
var guesses = "";

var game = {
    // Reset Function
    reset: function() {
        
        // Computer word selection
        answer = words[Math.floor(Math.random() * words.length)];

        // Set answer array
        answerArr = [];
        for (var i = 0; i < answer.length; i++) {
        answerArr[i] = "_";
        }

        // Display Wins / Losses
        document.getElementById("wins").innerHTML = wins;
        document.getElementById("losses").innerHTML = losses;

        // Display answer array
        document.getElementById("current").innerHTML = answerArr.join(" ");

        // Display guesses remaining
        guesses = answer.length + 6;
        document.getElementById("guesses").innerHTML = guesses;

        // Clear letters already guessed
        letters = " ";
        document.getElementById("letters").innerHTML = letters;

        // Insert invisible underscore for layout
        document.getElementById("blankspace").style.opacity = "0";

    },

    // Audio play
    friend: document.getElementById("friend"),
    playFriend: function() {
        friend.play();
    }

};

// Initial Reset
game.reset();


// When key pressed
document.onkeyup = function(event) {
    var keypress = event.key;
    var keycode = event.keyCode;
    var keymatch = false;

    //  Check if key is in alphabet
    if (keycode >= 65 && keycode <= 90) {

        // Check if key is in answer
        for (var j = 0; j < answer.length; j++) {
            if (answer[j] === keypress) {
                answerArr[j] = keypress;
                document.getElementById("current").innerHTML = answerArr.join(" ");
                keymatch = true;
            }
        }

        // If key is not in answer
        if (keymatch === false) {
            guesses -= 1;
            document.getElementById("guesses").innerHTML = guesses;
            // Hide invisible underscore
            document.getElementById("blankspace").style.display = "none";
            letters += " " + keypress;
            document.getElementById("letters").innerHTML = letters;
        }
        else {
            keymatch = false;
        }

        // Loss logic
        if (guesses <= 0) {
            losses++;
            document.getElementById("losses").innerHTML = losses;
            game.reset();
        }

        // Win logic
        for (var k = 0; k < answer.length; k++) {
            // Are there any blanks left?
            if (answerArr[k] === "_") {
                win = false;
                break;
            }
            else {
                win = true;
            }
        }
        if (win===true) {
            wins++;
            document.getElementById("wins").innerHTML = wins;
            game.playFriend();
            game.reset();
        }
    }
}

