// Make a prompt where the user can input their choice of Rock, Paper, or Scissor.
// const playerSelection = prompt('Please enter a selection of Rock, Paper, or Scissor.')
// playerSelection.toLowerCase;
// Figure out how to make it so that the computer knows Rock > Scissor , Scissor > Paper, Paper > Rock. 
/* It looks like I was just over complicating things here by trying to add a prompt to it. Will create that in the future. 
const rock = 'rock';
const paper = 'paper';
const scissor = 'scissor';

let rockBeat = rock > scissor || rock === rock;
let paperBeat = paper > rock || paper === paper;
let scissorBeat = scissor > paper || scissor === scissor;

if (rockBeat === true) {
    return ('You win! Rock beats Scissor');
} else {
    return ('It\'s a tie, rock doesn\'t beat rock.');
} */

/*
let rockLength = rock.length; // 4
let paperLength = paper.length; // 5
let scissorLength = scissor.length; // 7
*/

// Have the computer randomly throw out Rock, Paper, or Scissor, we will call this function computerPlay. Done.

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
function playerPlay() {
    let userInput = prompt('Please enter your battle sign: Rock, Paper, or Scissor');
        if (userInput.toLowerCase() == 'rock') {
            return'rock';
        } else if (userInput.toLowerCase() == 'paper') {
            return'paper';
        } else if (userInput.toLowerCase() == 'scissor') {
            return'scissor';
        }
    }
//Have the user's input go against the computer's random choice and decide on a winner, this will be done through a function called playRound(),
//which will have two paramaters: playerSelection and computerSelection. Done, now I have to make playerSelection case insensitive.

function playRound(playerSelection, computerSelection) {

    switch(true) {
        case (playerSelection == 'rock' && computerSelection == 'scissor'):
        return('Rock beats Scissor! You win!');
        case (playerSelection == 'rock' && computerSelection == 'paper'):
        return('Rock loses to Paper. You lose!');
        case playerSelection == 'rock' && computerSelection == 'rock':
        return('Rock ties with Rock. It\'s a tie!');
        case (playerSelection == 'paper' && computerSelection == 'rock'):
        return('Paper beats Rock! You win!');
        case (playerSelection == 'paper' && computerSelection == 'scissor'):
        return('Paper loses to Scissor! You lose!');
        case (playerSelection == 'paper' && computerSelection == 'paper'):
        return('Paper ties with Paper. It\'s a tie!');
        case (playerSelection == 'scissor' && computerSelection == 'paper'):
        return('Scissor beats Paper! You win!');
        case (playerSelection == 'scissor' && computerSelection == 'rock'):
        return('Scissor loses to Rock! You lose!');
        case (playerSelection == 'scissor' && computerSelection == 'scissor'):
        return('Scissor ties with Scissor. It\'s a tie!');
    }
}

//const playerSelection = "rock".toLowerCase(); // I only used lowercase strings in all of my input and output of 'rock', 'paper', 'scissor' so I just needed to make sure my input here is all lowercase.
console.log(playRound(playerPlay(), computerPlay()));
console.log(playRound(playerPlay(), computerPlay()));


/*function playSingleRound() {
    console.log(playRounds);
}
let playSingle = playSingleRound(); */
// Display a message declaring who the winner of the round is. Done.

// Create a new function called game() where we can run the RPS game 5 times and have it keep track of the score and declare a winner at the end.
/*
function game() {
    
}
game();
*/



