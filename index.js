// create array with possible outcomes
const CHOICES = ["rock", "paper", "scissors"]

// define Player and Cmputer Score
let playerScore = 0
let computerScore = 0
let winner = ""

// function that randomly returns rock papaer or scissors
// generate random numbers between 0 and 2
// use random number as index for the outcome array
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
        playerScore += 1
        computerScore += 1
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
// function that starts a new game over 5 rounds and tells the winner of each and in total
function game(choice) {
    console.log(`Game intitalized! Best of 5 Wins!`)
    for (let i = 1; i <= 5; i++) {
        let computerSelection = computerPlay()
        let playerSelection = choice//prompt("Please choose Rock, Paper or Scissors", "Rock").toLocaleLowerCase()
        playRound(computerSelection, playerSelection);

        (winner === "") ? console.log(`I'ts a Tie, you picked ${playerSelection} and the computer ${computerSelection}`) :
            console.log(`The winner is ${winner}, you picked ${playerSelection} and the computer ${computerSelection}`)

        console.log(`The scores are: ${playerScore} You / ${computerScore} Computer`)
    }
    (playerScore > computerScore) ? console.log(`You won the Game! The scores are: ${playerScore} You / ${computerScore} Computer`) :
        (playerScore === computerScore) ? console.log(`It's a Draw! The scores are: ${playerScore} You / ${computerScore} Computer`) :
            console.log(`Game over! you lost the gme. The scores are: ${playerScore} You / ${computerScore} Computer`)
    console.log(`Refresh to start another Best of 5`)

}

// initializes the game
// game()

//add 3 buttons
const rockBtn = document.getElementById("rock")
const paperBtn = document.querySelector("#paper")
const scissorsBtn = document.querySelector("#scisssors")
const log = document.getElementById("log")
function logging(text) {
    log.textContent = text
}
// call function playRound on click 
rockBtn.addEventListener("click", function () {
    playRound("rock")
})
