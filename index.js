const result = document.querySelector('.result');

function getComputerChoice() {
    choices = ['Rock', 'Paper', 'Scissors'];
    randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}

function playRound(playerSelection, computerSelection) {
    let word = playerSelection.toLowerCase();

    if (computerSelection === 'Rock') {
        if (word === 'paper') {
            return 'You WIN!';
        } else if (word === 'scissors') {
            return 'You LOSE!';
        } else if (word === 'rock') {
            return 'TIE!';
        }
    } else if (computerSelection === 'Paper') {
        if (word === 'paper') {
            return'TIE!';
        } else if (word === 'scissors') {
            return 'You WIN!';
        } else if (word === 'rock') {
            return 'You LOSE!';
        }
    } else if (computerSelection === 'Scissors') {
        if (word === 'paper') {
            return 'You LOSE!';
        } else if (word === 'scissors') {
            return 'TIE!';
        } else if (playerSelection === 'rock') {
            return 'You WIN!';
        }
    }
}

let playerSelection = prompt('Enter rock, paper, or scissors:');
let computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));