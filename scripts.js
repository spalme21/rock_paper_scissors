function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    const lowerCaseSelection = playerSelection.toLowerCase();
    if (lowerCaseSelection == "rock") {
        if (computerSelection == "rock") {
            return "Draw!";
        } else if (computerSelection == "paper") {
            return "You lose! Paper beats Rock!";
        } else {
            return "You win! Rock beats Scissors!";
        }
    }  else if (lowerCaseSelection == "paper") {
        if (computerSelection == "rock") {
            return "You win! Paper beats Rock!";
        } else if (computerSelection == "paper") {
            return "Draw!";
        } else {
            return "You lose! Scissors beats paper!";
        }
    } else {
        if (computerSelection == "rock") {
            return "You lose! Rock beats Scissors!";
        } else if (computerSelection == "paper") {
            return "You win! Scissors beats Rock!";
        } else {
            return "Draw!";
        }
    }
}