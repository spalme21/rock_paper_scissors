function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

function playRound() {
    const playerSelection = prompt("Make your choice. Enter 'Rock, Paper, or Scissors: ").toLowerCase();
    const computerSelection = getComputerChoice();
    if (playerSelection == "rock") {
        if (computerSelection == "rock") {
            return "Draw!";
        } else if (computerSelection == "paper") {
            computerScore++;
            return "You lose! Paper beats Rock!";
        } else {
            playerScore++;
            return "You win! Rock beats Scissors!";
        }
    }  else if (lowerCaseSelection == "paper") {
        if (computerSelection == "rock") {
            playerScore++;
            return "You win! Paper beats Rock!";
        } else if (computerSelection == "paper") {
            return "Draw!";
        } else {
            computerScore++;
            return "You lose! Scissors beats paper!";
        }
    } else {
        if (computerSelection == "rock") {
            computerScore++;
            return "You lose! Rock beats Scissors!";
        } else if (computerSelection == "paper") {
            playerScore++;
            return "You win! Scissors beats Rock!";
        } else {
            return "Draw!";
        }
    }
}

function displayScore(playerScore, computerScore) {
    console.log(`Your score: ${playerScore}`);
    console.log(`My score: ${computerScore}`);
}

function game() {
    console.log("Let's play Rock Paper Scissors");
    let playerScore = 0;
    let computerScore = 0;
    for (let i=0, i<5; i++) {
        let result = playRound();
        console.log(result);
        displayScore(playerScore, computerScore);
    }
    if (playerScore > computerScore) {
        console.log("You win!");
    } else if (playerScore < computerScore) {
        console.log("You lose!");
    } else {
        console.log("Draw!");
    }
}