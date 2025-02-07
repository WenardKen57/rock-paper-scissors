/*
  Game will be played agains computer that returns random decision
*/


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

console.log(getComputerChoice());