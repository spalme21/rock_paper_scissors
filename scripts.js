const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', playRound);
});

const results = document.querySelector("#results");

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
};

function getRoundResult(playerSelection, computerSelection) {
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
};

function updateScore(result) {
    if (result === "You win!") {
        playerScore++;
    } else if (result === "You lose!") {
        computerScore++;
    }
};

function displayScore() {
    const playerSpan = document.getElementById("player-score");
    const computerSpan = document.getElementById("computer-score");
    playerSpan.textContent = playerScore;
    computerSpan.textContent = computerScore;
};

function checkForWinner() {
    if (playerScore == 5) {
        const win = document.createElement('h2');
        win.textContent = "You win!"
        results.insertBefore(win, results.firstChild);
    } else if (computerScore == 5) {
        const lose = document.createElement('h2');
        lose.textContent = "You lose!"
        results.insertBefore(lose, results.firstChild);
    }
}

function playRound(e) {
    const round = document.createElement('div')

    const playerSelection = e.target.textContent.toLowerCase();
    const pPlayerSelection = document.createElement('p');
    pPlayerSelection.textContent = `You chose ${playerSelection}`;
    round.appendChild(pPlayerSelection);

    const computerSelection = getComputerChoice();
    const pComputerSelection = document.createElement('p');
    pComputerSelection.textContent = `I choose ${computerSelection}`;
    round.appendChild(pComputerSelection);

    const p = document.createElement('p');
    p.textContent = getRoundResult(playerSelection, computerSelection);
    round.appendChild(p);

    results.insertBefore(round, results.firstChild);

    updateScore(p.textContent);
    displayScore();
    checkForWinner();
};

/*
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
*/

