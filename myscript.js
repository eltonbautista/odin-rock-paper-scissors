
// The function used for the computer to throw a random selection, the selection is returned to the computerPlay() function caller.
function computerPlay() {
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

// The function used for the user to input their selection and be returned into the playerPlay() function caller. 
const playerSelection = function(choice) {
        if (choice === rockButton) {
            return('rock');
        } else if (choice === paperButton) {
            return('paper');
        } else if (choice === scissorButton) {
            return('scissor');
        }
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
// This function is here so that I can return the value of playRound() to this playSingleRound() function. 
// This returned value is then stored inside the result variable so that it can be used in the game() function.
const playSingleRound = function(choice) {
    return(playRound(playerSelection(choice), computerPlay()));  
}

// The scoreKeeper() function is used to keep a single point score of the playSingleRound() function.
const scoreKeeper = function(choice) {
let result = playSingleRound(choice);
let score = 0
switch (true) {
    case(result === 'Rock beats Scissor! You win!' || result === 'Paper beats Rock! You win!' || result === 'Scissor beats Paper! You win!'):
    score++;
    break;
    case(result === 'Rock loses to Paper! You lose!' || result === 'Paper loses to Scissor! You lose!' || result === 'Scissor loses to Rock! You lose!'):
    score--;
}
console.log(score);
document.getElementById('results-display').innerHTML = result;
return score;
}
// if scoreKeeper() return +1 (player win) then add 1 to playerScore, if scoreKeeper() return -1 (computer win) then add 1 to computerScore, if tie(0), no addition. 
// going to need to create a for loop for this ^, i = 0; i <= 5; i++ 
// The game() function runs the game however many times the scoreKeeper() function is called and then totals the score using the finalScore variable.
// An alert is displayed declaring the winner of the game.
/*
function game() {
let finalScore = scoreKeeper() + scoreKeeper() + scoreKeeper() +scoreKeeper() + scoreKeeper();
console.log(finalScore); 
if (finalScore > 0) {
    alert(`You won with a score of ${finalScore}!`);
} else if (finalScore < 0) {
    alert(`You lost with a score of ${finalScore}!`);
} else {
    alert('You scored a tie!');
}
}
*/
/* Prompt to run game();
let playGame = prompt(`Would you like to play a game? Type 'Yes'`)
if (playGame === null) {
    alert('ABORT ABORT ABORT');
} else if (playGame.toLowerCase() == 'yes') {
        game();
    } else {
        alert('Boohoo! You\'re no fun!');
    }
*/


const container = document.querySelector('#container');

const rpsContainer = document.createElement('div');
rpsContainer.classList.add('rpsContainer');
container.appendChild(rpsContainer)


const rockButton = document.createElement('button');
rockButton.classList.add('rockButton');
rockButton.textContent = 'ROCK';
rpsContainer.appendChild(rockButton);

const rockScore = function () {
    rockButton.addEventListener('click', () => {
        scoreKeeper(rockButton);
});
} 

const paperButton = document.createElement('button');
rockButton.classList.add('paperButton');
paperButton.textContent = 'PAPER';
rpsContainer.appendChild(paperButton);

const paperScore = function () {
    paperButton.addEventListener('click', () => {
        scoreKeeper(paperButton);
});
}

const scissorButton = document.createElement('button');
rockButton.classList.add('scissorButton')
scissorButton.textContent = 'SCISSOR';
rpsContainer.appendChild(scissorButton);

const scissorScore = function() {
    scissorButton.addEventListener('click', () => {
        scoreKeeper(scissorButton);
});
}

function scoreDisplay() {
    rockScore();
    paperScore();
    scissorScore();
}
scoreDisplay();

const resultsDisplay = document.querySelector('#results-display');
document.getElementById('results-display').innerHTML = ''


