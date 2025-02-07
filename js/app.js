/*
  Rock, paper, scissors against computer in console.
  Game will be played agains computer that returns random decision
*/

let playerScore = 0;
let computerScore = 0;

function evaluateChoice(choice) {
  if (isNaN(choice)) {
    // Player enters letter
    console.log("Please enter a valid number (1-3 only)");
    return;
  } else {
    switch (choice) {
      case 1:
        return "rock";
      case 2:
        return "paper";
      case 3:
        return "scissor";
      default:
        // Player enters a number below or beyond the required choice
        console.log("Please enter a valid number (1-3 only)");
        return;
    }
  }
}

function getPlayerChoice() {
  let choice = parseInt(prompt("1. Rock, 2. Paper, 3. Scissor"));

  return evaluateChoice(choice);
}

// returns random "rock", "paper", or "scissors"
function getComputerChoice() {
  return evaluateChoice(Math.floor(Math.random() * 3 + 1));
}

console.log(getPlayerChoice());