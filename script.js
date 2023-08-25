const playerChoice  = document.querySelector("#player");
const computerChoice  = document.querySelector("#computer");
const resultText  = document.querySelector("#result");

const choiceBtn = document.querySelectorAll(".choiceBtn");

let player;
let computer;
let result;

choiceBtn.forEach((button) =>
  button.addEventListener("click", () => {
    player = button.textContent;
    computerTurn();
    playerChoice.textContent = `You:${player}` 
    computerChoice.textContent = `Computer:${computer}`
    resultText.textContent = `Result:${compare()}`
  })
);

function computerTurn() {
  let randomNum = Math.floor(Math.random() * 3) + 1;
  switch (randomNum) {
    case 1:
      computer = "Rock";
      break;
    case 2:
      computer = "Paper";
      break;
    case 3:
      computer = "Scissors";
      break;
  }
}

function compare(){
  if(player == computer){
    return result = "Draw"
  }else if(computer == "Rock"){
    return player == "Paper" ? "You Win" : "You Lose"
  }else if(computer == "Paper"){
    return player == "Scissors" ? "You Win" :"You Lose"
  }else if(computer == "Scissors"){
    return player == "Rock" ? "You Win" :"You Lose"
  }
}
