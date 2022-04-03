// create array with possible outcomes
const CHOICES = ["rock", "paper", "scissors"]

// define Player and Cmputer Score
let playerScore = 0
let computerScore = 0

// function that randomly returns rock papaer or scissors
// generate random numbers between 0 and 2
// use random number as index for the outcome array
function computerPlay() {
    let randomNum = Math.floor(Math.random() * 3)
    return CHOICES[randomNum]
}

// gamme logic function
// if computer and player picks the same = draw
// if computer wins
// if the player input is  invalid
// otherwise player wins
function playRound(computer, player) {
    if (computer === player) {
        console.log(`It's a Draw!, the computer choose ${computer} and you choose ${player}`)
        playerScore += 1
        computerScore += 1
    } else if (computer === "paper" && player === "rock" || computer === "rock" && player === "scissors" || computer === "scissors" && player === "paper") {
        console.log(`You Loose!, the computer choose ${computer} and you choose ${player}`)
        computerScore += 1
    } else if (player !== "scissors" && player !== "rock" && player !== "paper") {
        console.log(`inavild input (${player}), please try again!`)
    } else {
        console.log(`You Win!, the computer choose ${computer} and you choose ${player}`)
        playerScore += 1
    }
}
// function that starts a new game over 5 rounds and tells the winner of each and in total
function game() {
    for (let i = 1; i <= 5; i++) {
        let computerSelection = computerPlay()
        let playerSelection = prompt("Please choose Rock, Paper or Scissors", "Rock").toLocaleLowerCase()
        playRound(computerSelection, playerSelection)
        console.log(i)
        console.log(`The scores are: ${playerScore} You / ${computerScore} Computer`)
    }
    (playerScore > computerScore) ? console.log(`You Win! The scores are: ${playerScore} You / ${computerScore} Computer`) :
        (playerScore === computerScore) ? console.log(`It's a Draw! The scores are: ${playerScore} You / ${computerScore} Computer`) :
            console.log(`You Loose! The scores are: ${playerScore} You / ${computerScore} Computer`)

}

// initializes the game
game()