document.addEventListener('DOMContentLoaded', function() {
let playerWins = 0;
let computerWins = 0;
let gameOver = false;


function getComputerChoice() {
    choices = ['Rock', 'Paper', 'Scissors'];
    randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}

function playRound(playerSelection, computerSelection) {
    let word = playerSelection;
    computerSelection = getComputerChoice();
    const result = document.createElement('p');

    if (gameOver == false) {
        if (computerSelection === 'Rock') {
            if (word === 'paper') {
                playerWins++;
                result.textContent = 'You WIN!';
            } else if (word === 'scissors') {
                computerWins++;
                result.textContent = 'You LOSE!';
            } else if (word === 'rock') {
                result.textContent = 'TIE!';
            }
        } else if (computerSelection === 'Paper') {
            if (word === 'paper') {
                result.textContent = 'TIE!';
            } else if (word === 'scissors') {
                playerWins++;
                result.textContent = 'You WIN!';
            } else if (word === 'rock') {
                computerWins++;
                result.textContent = 'You LOSE!';
            }
        } else if (computerSelection === 'Scissors') {
            if (word === 'paper') {
                computerWins++;
                result.textContent = 'You LOSE!';
            } else if (word === 'scissors') {
                result.textContent  = 'TIE!';
            } else if (playerSelection === 'rock') {
                playerWins++;
                result.textContent= 'You WIN!';
            }
        };
    };
    results.appendChild(result);
    playGame();
}

function playGame() {
    playerScore.textContent = 'Player Wins: ' + playerWins;
    computerScore.textContent = 'Computer Wins: ' + computerWins;
    const result = document.createElement('p');

    if (playerWins >= 5 || computerWins >= 5) {
        if (playerWins === 5) {
            result.textContent = 'CONGRATS, YOU WIN!!!';
            gameOver = true;
        } else if (computerWins === 5) {
            result.textContent = 'LOSERRRR!!! YOU SUCKKKK';
            gameOver = true;
        }
    };
    results.appendChild(result);
};

const body = document.querySelector('body');
const rps = document.querySelector('ul');

const rock = document.createElement('button');
rock.textContent = 'Rock';

const paper = document.createElement('button');
paper.textContent = 'Paper';

const scissors = document.createElement('button');
scissors.textContent = 'Scissors';

rps.appendChild(rock);
rps.appendChild(paper);
rps.appendChild(scissors);

const playerScore = document.createElement('h3');
playerScore.textContent = 'Player Score: ' + playerWins

const computerScore = document.createElement('h3');
computerScore.textContent = 'Computer Score: ' + computerWins

body.appendChild(playerScore);
body.appendChild(computerScore);

const results = document.createElement('div');
results.textContent = 'Results:';
body.appendChild(results);

rock.addEventListener('click', () => {
    playRound('rock')
});
paper.addEventListener('click', () => {
    playRound('paper')
});
scissors.addEventListener('click', () => {
    playRound('scissors')
});
});