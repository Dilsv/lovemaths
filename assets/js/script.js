// Wait for the DOM to finish loading before running game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName("button");

    for  (let buttons of buttons) {
        buttons.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submmit") {
                alert("You clicked Submit!");
                else {
                    let gameType = this.getAttribute("data-type");
                    alert('You clicked ${gameType}');
                }
            }
        })
    }
})

function runGame() {

}

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAsnwer() {

}

function displayAdditionQuestion() {

}

function displaySubtractQuestion () {

}

function displayMultiplyQuestion() {

}