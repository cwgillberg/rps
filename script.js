'use strict';

const buttons = document.querySelectorAll('button');
const announcer = document.getElementById('msg');
var playerScore = 0;
var computerScore = 0;
var turnCounter = 0;

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        announcer.textContent = playRound(button.id, getComputerChoice());
    });
});



function getComputerChoice() {
    let random = Math.floor(Math.random() * 3);

    if(random === 0) {
        return 'rock';
    } else if(random === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}   

function playRound(playerSelection, computerSelection) {
    //logic for a turn
    let p = playerSelection.toUpperCase();
    let c = computerSelection.toUpperCase();

    if(p == c) {
        return "It's a tie";
    } else if(p == "ROCK" && c == "SCISSORS") {
        return "Rock beats scissors, player wins!";
    } else if(p == "SCISSORS" && c == "ROCK") {
        return "Rock beats scissors, computer wins!";   
    } else if(p == "PAPER" && c == "ROCK") {
        return "Paper beats rock, player wins!";
    } else if(p == "ROCK" && c == "PAPER") {
        return "Paper beats rock, computer wins!";
    } else if(p == "SCISSORS" && c == "PAPER") {
        return "Scissors beats paper, player wins!";
    } else if(p == "PAPER" && c == "SCISSORS") {
        return "Scissors beats paper, computer wins!";
    }

}

function updateScore(who) {
    if(who === "player") {
        playerScore++;
        let updateTarget = document.getElementById('playerScore');
        updateTarget.textContent = "Player Score: `${playerScore}`";

    } else if(who === "computer") {
        computerScore++;
        let updateTarget = document.getElementById('computerScore');
        updateTarget.textContent = "Computer Score: `${computerScore}`";
    }
}

function game(player, vom) {
    while(turnCounter <= 5) {

    }

}