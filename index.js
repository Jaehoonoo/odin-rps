let playerWins = 0;
let computerWins = 0;

function getComputerChoice() {
    choices = ['Rock', 'Paper', 'Scissors'];
    randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}

function playRound(playerSelection, computerSelection) {
    let word = playerSelection.toLowerCase();

    if (computerSelection === 'Rock') {
        if (word === 'paper') {
            playerWins++;
            return 'You WIN!';
        } else if (word === 'scissors') {
            computerWins++;
            return 'You LOSE!';
        } else if (word === 'rock') {
            return 'TIE!';
        }
    } else if (computerSelection === 'Paper') {
        if (word === 'paper') {
            return'TIE!';
        } else if (word === 'scissors') {
            playerWins++;
            return 'You WIN!';
        } else if (word === 'rock') {
            computerWins++;
            return 'You LOSE!';
        }
    } else if (computerSelection === 'Scissors') {
        if (word === 'paper') {
            computerWins++;
            return 'You LOSE!';
        } else if (word === 'scissors') {
            return 'TIE!';
        } else if (playerSelection === 'rock') {
            playerWins++;
            return 'You WIN!';
        }
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt('Enter rock, paper, or scissors:');
        let computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
    if (playerWins > computerWins) {
        console.log('You BEAT THE COMPUTER');
    } else if (computerWins == playerWins) {
        console.log('You guys tied...')
    } else if (playerWins < computerWins) {
        console.log('The computer wins... what da frick man')
    }
}

playGame();