let playerScore = 0;
let computerScore = 0;

const possiblities = ["rock", "paper", "scissor"];

const refs = {
  playerRock: document.getElementById("rock"),
  playerPaper: document.getElementById("paper"),
  playerScissor: document.getElementById("scissor"),
  gameWrapper: document.getElementsByClassName("game-wrapper")[0],
  resultWrapper: document.getElementsByClassName("result-wrapper")[0],
  playerSelection: document.getElementById("result-wrapper-player-img"),
  computerSelection: document.getElementById("result-wrapper-computer-img"),
  playAgain: document.getElementById("play-again"),
  reset: document.getElementById("reset"),
  score: document.getElementById("score"),
  announcementText: document.getElementsByClassName("announcement-text")[0],
  playerSelectionText: document.getElementById("result-wrapper-player-text"),
  computerSelectionText: document.getElementById(
    "result-wrapper-computer-text"
  ),
};

refs.playerRock.addEventListener("click", () => play("rock"));
refs.playerPaper.addEventListener("click", () => play("paper"));
refs.playerScissor.addEventListener("click", () => play("scissor"));
refs.playAgain.addEventListener("click", () => playAgain());
refs.reset.addEventListener("click", () => reset());

const play = (choice) => {
  refs.gameWrapper.classList.add("hide");
  refs.resultWrapper.classList.remove("hide");
  refs.reset.classList.remove("hide");
  refs.playerSelection.parentNode.classList.add(choice);
  refs.playerSelection.src = "assets/images/icon-" + choice + ".svg";
  refs.playerSelectionText.innerText = choice;

  const computerChoice =
    possiblities[Math.floor(Math.random() * possiblities.length)];
  console.log(computerChoice);

  let announcementText = "";
  const result = getResult(choice, computerChoice);
  if (result === undefined) {
    announcementText = "It's a draw";
  } else if (result === true) {
    playerScore += 1;
    announcementText = "You won";
  } else {
    computerScore += 1;
    announcementText = "You lost";
  }

  refs.score.innerText = `${playerScore} | ${computerScore}`;
  refs.announcementText.innerText = announcementText;
  refs.computerSelection.parentNode.classList.add(computerChoice);
  refs.computerSelection.src = "assets/images/icon-" + computerChoice + ".svg";
  refs.computerSelectionText.innerText = computerChoice;
};

const playAgain = () => {
  refs.gameWrapper.classList.remove("hide");
  refs.resultWrapper.classList.add("hide");
  refs.reset.classList.add("hide");
};

const reset = () => {
  playerScore = 0;
  computerScore = 0;
  refs.gameWrapper.classList.remove("hide");
  refs.resultWrapper.classList.add("hide");
  refs.reset.classList.add("hide");
};

const getResult = (choice, computerChoice) => {
  if (computerChoice === choice) {
    return undefined;
  } else if (choice === "paper" && computerChoice === "rock") {
    return true;
  } else if (choice === "rock" && computerChoice === "scissor") {
    return true;
  } else if (choice === "scissor" && computerChoice === "paper") {
    return true;
  } else {
    return false;
  }
};
