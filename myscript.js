
// The function used for the computer to throw a random selection, the selection is returned to the computerPlay() function caller.
const computerPlay = function() {
    let test = 3;
    function getRandomChoice() {
        return (Math.floor(Math.random()*test));
    } 
    let randomNumber = getRandomChoice();
    if (randomNumber === 0) {
        return ('rock');
    } else if (randomNumber === 1) {
        return ('paper'); 
    } else if (randomNumber === 2) {
        return ('scissor');
    } 
} 

const playRock = () => {
    let rockTest = playRound('rock', computerPlay());
    document.getElementById('results-display').innerHTML = rockTest;
    return rockTest;
};

const playPaper = () => {
    let paperTest = playRound('paper', computerPlay());
    document.getElementById('results-display').innerHTML = paperTest;
    return paperTest;
};

const playScissor = () => {
    let scissorTest = playRound ('scissor', computerPlay());
    document.getElementById('results-display').innerHTML = scissorTest;
    return scissorTest;
}

// This function is used to play a round of RPS, it uses the parameters playerSelection and computerSelection to receive data which is then relayed to the switch statement. 
// The switch statements returns a string value depending on the outcome of the round.  
function playRound(playerSelection, computerSelection) {

    switch(true) {
        case (playerSelection == 'rock' && computerSelection == 'scissor'):
        return('Rock beats Scissor! You win!');
        case (playerSelection == 'rock' && computerSelection == 'paper'):
        return('Rock loses to Paper! You lose!');
        case (playerSelection == 'paper' && computerSelection == 'rock'):
        return('Paper beats Rock! You win!');
        case (playerSelection == 'paper' && computerSelection == 'scissor'):
        return('Paper loses to Scissor! You lose!');
        case (playerSelection == 'scissor' && computerSelection == 'paper'):
        return('Scissor beats Paper! You win!');
        case (playerSelection == 'scissor' && computerSelection == 'rock'):
        return('Scissor loses to Rock! You lose!');
        case (playerSelection === computerSelection): 
        return('It\'s a tie!');
    }
}

const startBtn = document.querySelector('#start-game');
const rockBtn = document.querySelector('.rock-button');
const paperBtn = document.querySelector('.paper-button');
const scissorsBtn = document.querySelector('.scissors-button')

const theGame = function () {

let humanScore = 0;
let computerScore = 0;

rockBtn.addEventListener('click', playRock);
paperBtn.addEventListener('click', playPaper);
scissorsBtn.addEventListener('click', playScissor);


switch (true) {
    case(playRock === 'Rock beats Scissor! You win!' || playPaper === 'Paper beats Rock! You win!' ||
    playScissor === 'Scissor beats Paper! You win!'):
    return(++humanScore);
    case(playRock === 'Rock loses to Paper! You lose!' || playPaper === 'Paper loses to Scissor! You lose!' ||
    playScissor === 'Scissor loses to Rock! You lose!'):
    return(++computerScore);
}

if (humanScore === 5) {
    return alert('Congrats human! You have prevailed!');
} else if (computerScore === 5) {
    return alert('I\'m sorry human.. You have been defeated.')
}
}

startBtn.addEventListener('click', theGame);