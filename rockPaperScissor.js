//
// Acecss to the results+button input
//
const playerText = document.querySelector("#playerText");

const computerText = document.querySelector("#computerText");

const resultText = document.querySelector("#resultText");

const choiceButtons = document.querySelectorAll(".choiceButton");

let player;
let computer;
let result;
//
// eventlistener added to button
// sets choice input (whether it is rock, paper or scissor) and calls the function to determine
// to check the winner +show result
//
choiceButtons.forEach(button => button.addEventListener("click", () => {

  player = button.textContent;
  console.log(player)
  computerTurn();
  playerText.textContent = `Player: ${player}`;
  computerText.textContent = `Computer: ${computer}`;
  result = checkWinner(player, computer);
  resultText.textContent = `You : ${result}`;
}));
//
// generate random integer to store
// switches based on it
// check if draw, otherwise alternatives +displayed
//
function computerTurn(){
  const randNum = Math.floor(Math.random()*3) + 1;

  switch(randNum){
    case 1:
      computer = "Rock";
      break;
    case 2:
      computer = "Paper";
      break;
    case 3:
      computer = "Scissor";
      break;
  }
}
function checkWinner(player, computer){
console.log(typeof player, typeof computer)
if (player === computer) {
  return "draw"}
if ((player === "Rock" && computer === "Scissor") ||
(player === "Paper" && computer === "Rock") ||
(player === "Scissor" && computer === "Paper"))
{return "win"}
return "lose"
}