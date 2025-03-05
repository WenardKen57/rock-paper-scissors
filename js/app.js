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
const buttonContainer = document.createElement("div");
const playNextRound = document.createElement("button");

const winnerDisplay = document.createElement("h1");
const scoreDisplay = document.createElement("h2");

rockButton.setAttribute("id", "rock");
paperButton.setAttribute("id", "paper");
scissorButton.setAttribute("id", "scissor");

rockButton.textContent = "Rock";
paperButton.textContent = "Paper";
scissorButton.textContent = "Scissor";
playNextRound.textContent = "Play next round";


function generateRandomNumber() {
  return Math.floor(Math.random() * 3 + 1);
}

// returns random "rock", "paper", or "scissors"
function getComputerChoice() {

  switch (generateRandomNumber()) {
    case 1:
      return "rock"
    case 2:
      return "paper";
    case 3:
      return "scissor";
    default:
      break;
  }
}

function playRound(playerChoice, computerChoice) {
  scoreDisplay.textContent = `Player ${playerScore} || Computer ${computerScore}`;
  if (computerChoice === "rock" && playerChoice === "paper") {
    winnerDisplay.textContent = "Player won this round!";
    playerScore += 1;
  } else if (computerChoice === "rock" && playerChoice == "scissor") {
    winnerDisplay.textContent = "Computer won this round!";
    computerScore += 1;
  } else if (computerChoice === "paper" && playerChoice == "rock") {
    winnerDisplay.textContent = "Computer won this round!";
    computerScore += 1;
  } else if (computerChoice === "scissor" && playerChoice == "paper") {
    winnerDisplay.textContent = "Computer won this round!";
    computerScore += 1;
  } else if (computerChoice === "paper" && playerChoice == "scissor") {
    winnerDisplay.textContent = "Player won this round!";
    playerScore += 1;
  } else if (computerChoice === "scissor" && playerChoice == "rock") {
    winnerDisplay.textContent = "Player won this round!";
    playerScore += 1;
  } else {
    winnerDisplay.textContent = "It's a draw";
    return;
  }
}

buttonContainer.appendChild(rockButton);
buttonContainer.appendChild(paperButton);
buttonContainer.appendChild(scissorButton);
container.appendChild(buttonContainer);
container.appendChild(winnerDisplay);
container.appendChild(scoreDisplay);

function playGame() {

  container.addEventListener("click", (event) => {
    let target = event.target;
    
    switch(target.id) {
      case "rock":
        playRound("rock", getComputerChoice());
        break; 
      case "paper":
        playRound("paper", getComputerChoice());
        break;
      case "scissor":
        playRound("scissor", getComputerChoice());
        break;
      default:
        break;
    }
  });
}


playGame();

if (playerScore >= 5 || computerScore >= 5) {
  (playerScore > computerScore) ? winnerDisplay.textContent = "Player won!" :
  winnerDisplay.textContent = "Computer won";
}

