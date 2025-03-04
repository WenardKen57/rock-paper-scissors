/*
  Rock, paper, scissors against computer in console.
  Game will be played agains computer that returns random decision
*/

let playerScore = 0;
let computerScore = 0;
const NUM_ROUNDS = 5;

const container = document.querySelector("#container");

const rockButton = document.createElement("button");
const scissorButton = document.createElement("button");
const paperButton = document.createElement("button");

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

function evaluateWinner(playerChoice, computerChoice) {
  if (playerChoice === undefined && computerChoice === undefined) {
    console.log("Invalid choices");
    return;
  } else if (computerChoice === "rock" && playerChoice === "paper") {
    return 1; // 1 means player won the round
  } else if (computerChoice === "rock" && playerChoice == "scissor") {
    return 0; // 0 means computer won the round
  } else if (computerChoice === "paper" && playerChoice == "rock") {
    return 0; // 0 means computer won the round
  } else if (computerChoice === "scissor" && playerChoice == "paper") {
    return 0; // 0 means computer won the round
  } else if (computerChoice === "paper" && playerChoice == "scissor") {
    return 1; // 0 means computer won the round
  } else if (computerChoice === "scissor" && playerChoice == "rock") {
    return 1; // 0 means computer won the round
  } else {
    console.log("It's draw");
      return 2;
  }
}

function playRound(playerChoice, computerChoice) {
  console.log("Player choice: " + playerChoice, "Computer choice: " + computerChoice);
  return evaluateWinner(playerChoice, computerChoice);
}

function playGame() {
  
}



playGame();