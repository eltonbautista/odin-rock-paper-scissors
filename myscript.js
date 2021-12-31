
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

const startBtn = document.querySelector('#start-game');
const rockBtn = document.querySelector('.rock-button');
const paperBtn = document.querySelector('.paper-button');
const scissorsBtn = document.querySelector('.scissors-button');
const againBtn = document.querySelector('#play-again');
document.getElementById('play-again').style.visibility = 'hidden';
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
function theGame() {

let humanScore = 0;
let computerScore = 0;

const playRock = function() {
    let rockTest = playRound('rock', computerPlay());
    if (humanScore < 5 && computerScore < 5) {
    document.getElementById('results-display').innerText = rockTest;
}
    if (rockTest === 'Rock beats Scissor! You win!' && humanScore < 5 && computerScore != 5) {
        document.getElementById('score-display-human').innerText = (++humanScore);
    } else if(rockTest === 'Rock loses to Paper! You lose!' && computerScore < 5 && humanScore != 5) {
         document.getElementById('score-display-computer').innerText = (++computerScore);
    }
};

const playPaper = () => {
    let paperTest = playRound('paper', computerPlay());
    if (humanScore < 5 && computerScore < 5) {
    document.getElementById('results-display').innerText = paperTest;
}
    if (paperTest === 'Paper beats Rock! You win!' && humanScore < 5 && computerScore != 5) {
         document.getElementById('score-display-human').innerText = (++humanScore);
    } else if(paperTest === 'Paper loses to Scissor! You lose!' && computerScore < 5 && humanScore != 5) {
         document.getElementById('score-display-computer').innerText = (++computerScore);
    }
};

const playScissor = () => {
    let scissorTest = playRound ('scissor', computerPlay());
    if (humanScore < 5 && computerScore < 5) {
    document.getElementById('results-display').innerText = scissorTest;
}
    if (scissorTest === 'Scissor beats Paper! You win!' && humanScore < 5 && computerScore != 5) {
         document.getElementById('score-display-human').innerText = (++humanScore);
    } else if (scissorTest === 'Scissor loses to Rock! You lose!' && computerScore < 5 && humanScore != 5) {
         document.getElementById('score-display-computer').innerText = (++computerScore);    }
}

rockBtn.addEventListener('click', playRock);
paperBtn.addEventListener('click', playPaper);
scissorsBtn.addEventListener('click', playScissor);

function scoreKeeper() {
    if (humanScore === 1) {
         document.querySelector('#human-message').innerText = 'That\'s one point, Human.'
    } else if (humanScore === 2) {
         document.querySelector('#human-message').innerText = "And a second point for you Human, not bad.."
    } else if (humanScore === 3) {
         document.querySelector('#human-message').innerText = "Almost there, do not waiver" 
    } else if (humanScore === 4) {
         document.querySelector('#human-message').innerText = "Can you taste victory Human?"
    } else if (humanScore === 5) {
         document.querySelector('#human-message').innerText = "I can't believe you've done it. Congratulations, Human!" 
    }

    if (humanScore === 5) {
        alert('Congratulations Human!');
    }

    if (humanScore === 5 || computerScore === 5) {
        document.getElementById('play-again').style.visibility = 'visible';
    }

    if (computerScore === 1) {
         document.querySelector('#computer-message').innerText = "One point to the Robot."
    } else if (computerScore === 2) {
         document.querySelector('#computer-message').innerText = "Aaaand another point to the Robot"
    } else if (computerScore === 3) {
         document.querySelector('#computer-message').innerText = "Whoa Human, are you trying to lose?"
    } else if (computerScore === 4) {
         document.querySelector('#computer-message').innerText = "So this is what giving up looks like."
    } else if (computerScore === 5) {
         document.querySelector('#computer-message').innerText = "Well Human if your goal was to lose, congratulations!"
    }
    if (computerScore === 5) {
        alert('You have lost Human!');
    }
}
rockBtn.addEventListener('click', scoreKeeper);
paperBtn.addEventListener('click', scoreKeeper);
scissorsBtn.addEventListener('click', scoreKeeper);

const playAgain = function() {
    if (humanScore === 5) {
        return (humanScore = 0, computerScore = 0,
        document.getElementById('results-display').innerText = '',
        document.getElementById('score-display-human').innerText = '', 
        document.querySelector('#human-message').innerText = '',
        document.getElementById('score-display-computer').innerText = '',
        document.querySelector('#human-message').innerText = '',
        document.getElementById('play-again').style.visibility = 'hidden');
    } else {}
    if (computerScore === 5) {
        return (humanScore = 0, computerScore = 0,
        document.getElementById('results-display').innerText = '',
        document.getElementById('score-display-human').innerText = '', 
        document.querySelector('#computer-message').innerText = '',
        document.getElementById('score-display-computer').innerText = '',
        document.querySelector('#computer-message').innerText = '',
        document.getElementById('play-again').style.visibility = 'hidden');
    } else {}
}
againBtn.addEventListener('click', playAgain);

document.getElementById('start-game').style.visibility = 'hidden';
}

startBtn.addEventListener('click', theGame, {once: true});