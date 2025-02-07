/*
  Rock, paper, scissors against computer in console.
  Game will be played agains computer that returns random decision
*/

function getPlayerChoice() {
  
  let choice = parseInt(prompt("1. Rock, 2. Paper, 3. Scissor"));

  if (isNaN(choice)) {
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
        console.log("Please enter a valid number (1-3 only)");
        return;
    }
  }
}

// returns random "rock", "paper", or "scissors"
function getComputerChoice() {
  switch (Math.floor(Math.random() * 3 + 1)) {
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissor";
    default:
      break;
  }
}

console.log(getPlayerChoice());