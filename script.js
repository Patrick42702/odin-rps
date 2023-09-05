function capitalize(string) {
  let temp = string.toLowerCase();
  return string[0].toUpperCase() + temp.slice(1);
}

function getComputerChoice() {
  let randomNum = Math.floor(Math.random() * 3);
  switch (randomNum) {
    case 0:
      return "Rock";
    case 1:
      return "Paper";
    case 2:
      return "Scissors";
    default:
      return "getComputerChoice not working properly";
  }
}

function playRound(playerSelection, computerSelection) {
  const paperWin = "Paper beats Rock!";
  const rockWin = "Rock beats Scissors";
  const scissorsWin = "Scissors beats Paper";
  const youWin = "You Win! ";
  const youLose = "You Lose! ";

  let caseInsenstivePS = capitalize(playerSelection);

  if (caseInsenstivePS === computerSelection) {
    return "You tied!";
  } else if (caseInsenstivePS === "Rock") {
    return computerSelection === "Scissors"
      ? youWin + rockWin
      : youLose + paperWin;
  } else if (caseInsenstivePS === "Paper") {
    return computerSelection === "Rock"
      ? youWin + paperWin
      : youLose + scissorsWin;
  } else if (caseInsenstivePS === "Scissors") {
    return computerSelection === "Paper"
      ? youWin + scissorsWin
      : youLose + rockWin;
  } else {
    return "Error!";
  }
}

let playerScore = 0;
let computerScore = 0;

function displayScore(result) {
  const playerScoreRef = document.querySelector(".playerScore");
  const compScoreRef = document.querySelector(".computerScore");
  const roundRef = document.querySelector(".round-message");

  playerScoreRef.textContent = `${playerScore}`;
  compScoreRef.textContent = `${computerScore}`;
  roundRef.textContent = result;

  if (Math.max(playerScore, computerScore) === 5) {
    const div = document.createElement("div");
    div.classList.add("winner");

    if (result.includes("You Win")) {
      div.textContent =
        "Good job! You beat the computer in first to win 5 rounds!";
    } else {
      div.textContent =
        "Unfortunately, the computer has beaten you to the first to win 5 rounds.";
    }
    roundRef.appendChild(div);
  }
}

function handleMove(playerInput) {
  if (Math.max(computerScore, playerScore) === 5) {
  } else {
    let computerSelection = getComputerChoice();
    let result = playRound(playerInput, computerSelection);
    if (result.includes("You tied")) {
    } else if (result.includes("You Win")) {
      playerScore++;
    } else {
      computerScore++;
    }
    displayScore(result);
  }
}

displayScore();

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    handleMove(button.className);
  });
});
