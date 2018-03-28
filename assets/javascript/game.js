// Global variables
var words = [
    "blanche",
    "rose",
    "dorothy",
    "sophia",
    "miami"]
var wins = 0;
var losses = 0;
var letters = "";
var win = false;
var answer = "";
var guesses = "";

// Display wins / losses default
document.getElementById("wins").innerHTML = wins;
document.getElementById("losses").innerHTML = losses;

// Reset Function
function reset() {
    
    // Computer word selection
    answer = words[Math.floor(Math.random() * words.length)];

    // Set answer array
    answerArr = [];
    for (var i = 0; i < answer.length; i++) {
    answerArr[i] = "_";
    }

    // Display answer array
    document.getElementById("current").innerHTML = answerArr.join(" ");

    // Display guesses remaining
    guesses = answer.length + 6;
    document.getElementById("guesses").innerHTML = guesses;

    // Clear letters already guessed
    letters = "";
    document.getElementById("letters").innerHTML = letters;

}

// Initial Reset
reset();


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
            reset();
        }

        // Win logic
        for (var k = 0; k < answer.length; k++) {
            // Are there any blanks left?
            if (answerArr[k] === "_") {
                win = false;
                console.log(win);
                break;
            }
            else {
                win = true;
                console.log(win);
            }
        }
        if (win===true) {
            wins++;
            document.getElementById("wins").innerHTML = wins;
            reset();
        }
    }
}

