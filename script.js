
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
    if(playerSelection.toUpperCase() == "ROCK" && computerSelection.toUpperCase() == "SCISSORS") {
        return "Rock beats scissors, player wins!";
    } else if(playerSelection.toUpperCase() == "SCISSORS" && computerSelection.toUpperCase() == "ROCK") {
        return "Rock beats scissors, computer wins!";   
    } else if(playerSelection.toUpperCase() == "PAPER" && computerSelection.toUpperCase() == "ROCK") {
        return "Paper beats rock, player wins!";
    } else if(playerSelection.toUpperCase() == "ROCK" && computerSelection.toUpperCase() == "PAPER") {
        return "Paper beats rock, computer wins!";
    } else if(playerSelection.toUpperCase() == "SCISSORS" && computerSelection.toUpperCase() == "PAPER") {
        return "Scissors beats paper, player wins!";
    } else if(playerSelection.toUpperCase() == "PAPER" && computerSelection.toUpperCase() == "SCISSORS") {
        return "Scissors beats paper, computer wins!";
    } else {
        return "It's a tie!";
    }

}


//TODO: add user input, get computerChoice, flesh out game loop
function game() {

    for(let i = 0; i < 5; i++) {

        playRound()
    }
}


console.log(playRound(playerSelection, computerSelection));