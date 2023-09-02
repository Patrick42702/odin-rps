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

  if (caseInsenstivePS === computerSelection){
    return "You tied!";
  }
  else if (caseInsenstivePS === "Rock"){
    return computerSelection === "Scissors" ? youWin + rockWin : youLose + paperWin;
  }
  else if (caseInsenstivePS === "Paper"){
    return computerSelection === "Rock" ? youWin + paperWin : youLose + scissorsWin;
  }
  else if (caseInsenstivePS === "Scissors"){
    return computerSelection === "Paper" ? youWin + scissorsWin : youLose + rockWin;
  }
  else{
    return "Error!";
  }

}



function game(){
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++){
        const playerSelection = prompt("Enter your decision here");
        const computerSelection = getComputerChoice();
        let round = playRound(playerSelection, computerSelection);
        let decision = round.slice(0,8);
        if (decision === "You Win!"){
            playerScore++;
        }
        else{
            computerScore++;
        }
    }
    if (playerScore > computerScore){
        return "You win the best of 5 games!";
    }else{
        return "You lose the best of 5 games!";
    }
}

console.log(game());