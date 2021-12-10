// Make a prompt where the user can input their choice of Rock, Paper, or Scissor.
// const playerSelection = prompt('Please enter a selection of Rock, Paper, or Scissor.')
// Figure out how to make it so that the computer knows Rock > Scissor , Scissor > Paper, Paper > Rock. 
const rock = 'rock';
const paper = 'paper';
const scissor = 'scissor';

let rockLength = rock.length;
let paperLength = paper.length;
let scissorLength = scissor.length;
// Have the computer randomly throw out Rock, Paper, or Scissor, we will call this function computerPlay

function computerPlay() {
    let test = 3;
    function getRandomChoice() {
        return (Math.floor(Math.random()*test));
    } 
    let randomNumber = getRandomChoice();
    if (randomNumber === 0) {
        return ('Rock');
    } else if (randomNumber === 1) {
        return ('Paper'); 
    } else if (randomNumber === 2) {
        return ('Scissor');
    } 
} 


/* Have the user's input go against the computer's random choice and decide on a winner, this will be done through a function called playRound(),
   which will have two paramaters: playerSelection and computerSelection */

// Display a message declaring who the winner of the round is. 

// Create a new function called game() where we can run the RPS game 5 times and have it keep track of the score and declare a winner at the end.