'use strict';

const buttons = document.querySelectorAll('button');
const announcer = document.getElementById('msg');
const playerScore = document.getElementById('playerScore');
const computerScore = document.getElementById('computerScore');
const turnDisplay = document.getElementById('turnCounter');
var turnCounter = 1;
var pScoreActual = 0;
var cScoreActual = 0;


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

function setScore(who) {
    if(who === "p") {
        playerScore.textContent = `Player Score: ${pScoreActual}`;
    } else if(who === "c") {
        computerScore.textContent = `Computer Score: ${cScoreActual}`;
    }
}

function resetPage() {
    playerScore.textContent = "Player Score: ";
    computerScore.textContent = "Computer Score: ";
    turnDisplay.textContent = "Round: 1";
}

function playRound(playerSelection, computerSelection) {
    //logic for a turn
    let p = playerSelection.toUpperCase();
    let c = computerSelection.toUpperCase();
    let msg = "";
    turnCounter++;

    turnDisplay.textContent = `Round ${turnCounter}`;

    //who gets score?
    if(p == c) {
        msg = "It's a tie";
    } else if(p == "ROCK" && c == "SCISSORS") {
        pScoreActual++;
        setScore("p");
        msg = "Rock beats scissors, player wins!";
    } else if(p == "SCISSORS" && c == "ROCK") {
        cScoreActual++;
        setScore("c");
        msg = "Rock beats scissors, computer wins!";   
    } else if(p == "PAPER" && c == "ROCK") {
        pScoreActual++;
        setScore("p");
        msg = "Paper beats rock, player wins!";
    } else if(p == "ROCK" && c == "PAPER") {
        cScoreActual++;
        setScore("c");
        msg = "Paper beats rock, computer wins!";
    } else if(p == "SCISSORS" && c == "PAPER") {
        pScoreActual++;
        setScore("p");
        msg = "Scissors beats paper, player wins!";
    } else if(p == "PAPER" && c == "SCISSORS") {
        cScoreActual++;
        setScore("c");
        msg = "Scissors beats paper, computer wins!";
    }

    //did someone win?
    if(pScoreActual === 5) {
        resetPage();
        return "Game over! Player wins";
    } else if(cScoreActual === 5) {
        resetPage();
        return "Game over! Computer wins";
    } else {
        return msg;
    }

} 


