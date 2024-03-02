const result = document.querySelector('.result');

function getComputerChoice() {
    choices = ['Rock', 'Paper', 'Scissors']
    randomChoice = Math.floor(Math.random() * choices.length)
    return choices[randomChoice]
}

function playRound(playerSelection, computerSelection) {
    playerSelection.toLowerCase()

    if (computerSelection === 'Rock') {
        if (playerSelection === 'paper') {
            return 'You WIN!';
        } else if (playerSelection === 'scissors') {
            return 'You LOSE!';
        } else if (playerSelection === 'rock') {
            return 'TIE!';
        }
    } else if (computerSelection === 'Paper') {
        if (playerSelection === 'paper') {
            return'TIE!';
        } else if (playerSelection === 'scissors') {
            return 'You WIN!';
        } else if (playerSelection === 'rock') {
            return 'You LOSE!';
        }
    } else if (computerSelection === 'Scissors') {
        if (playerSelection === 'paper') {
            return 'You LOSE!';
        } else if (playerSelection === 'scissors') {
            return 'TIE!';
        } else if (playerSelection === 'rock') {
            return 'You WIN!';
        }
    }
}

let playerSelection = prompt('Enter rock, paper, or scissors:');
let computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));