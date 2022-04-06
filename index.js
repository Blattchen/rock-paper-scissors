// create array with possible outcomes
const CHOICES = ["rock", "paper", "scissors"]

// define Player and Cmputer Score & winner
let playerScore = 0
let computerScore = 0
let winner = ""

// function that randomly returns rock papaer or scissors
function computerPlay() {
    let randomNum = Math.floor(Math.random() * 3)
    return CHOICES[randomNum]
}

// game logic function
// if computer and player picks the same = draw
// if computer wins, winner and playerscore adjustment
// if the player input is  invalid, nothing
// otherwise player wins, winner and playerscore adjustment
function playRound(player) {
    let computer = computerPlay()
    if (computer === player) {
        winner = ""
    } else if (computer === "paper" && player === "rock" || computer === "rock" && player === "scissors" || computer === "scissors" && player === "paper") {
        winner = "Computer"
        computerScore += 1
    } else if (player !== "scissors" && player !== "rock" && player !== "paper") {
        console.log(`inavild input (${player}), please try again!`)
    } else {
        winner = "You"
        playerScore += 1
    }
    (winner === "") ? logging(`Tie!, you picked ${player} and the computer ${computer}`) :
        logging(`${winner} won!, you picked ${player} and the computer ${computer}`)
}

//add 3 buttons
const rockBtn = document.getElementById("rock")
const paperBtn = document.querySelector("#paper")
const scissorsBtn = document.querySelector("#scissors")
//add 2 divs
const log = document.getElementById("log")
const score = document.getElementById("score")

// prints the score and tells the winner after 5 rounds and resets the scores
function printScore() {
    score.textContent = `You ${playerScore} /  ${computerScore} Computer`
    if (playerScore >= 5 || computerScore >= 5) {
        if (playerScore > computerScore) {
            score.textContent = `You won the Game! The scores are: ${playerScore} You / ${computerScore} Computer`
        } else if (playerScore === computerScore) {
            score.textContent = `It's a Draw! The scores are: ${playerScore} You / ${computerScore} Computer`
        } else {
            score.textContent = `Game over! you lost the gme. The scores are: ${playerScore} You / ${computerScore} Computer`
        }
        playerScore = 0
        computerScore = 0
    }

}
// logs the text inside the div
function logging(text) {
    log.textContent = text
}
// call function playRound on click 
rockBtn.addEventListener("click", function () {
    playRound("rock")
    printScore()
})
paperBtn.addEventListener("click", function () {
    playRound("paper")
    printScore()
})
scissorsBtn.addEventListener("click", function () {
    playRound("scissors")
    printScore()
})
