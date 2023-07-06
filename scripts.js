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
            return "You lose!";
        } else {
            return "You win!";
        }
    }  else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            return "You win!";
        } else if (computerSelection == "paper") {
            return "Draw!";
        } else {
            return "You lose!";
        }
    } else {
        if (computerSelection == "rock") {
            return "You lose!";
        } else if (computerSelection == "paper") {
            return "You win!";
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
    for (let i=0; i<5; i++) {
        let result = playRound();
        console.log(result);
        if (result == "You win!") {
            playerScore++;
        } else if (result == "You lose!") {
            computerScore++;
        }
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