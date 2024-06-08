let player;
let computer;
let result;


//
// generate random integer to store
// switches 
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
//
// Determine Winner
// Main Logic
//
function checkWinner(player, computer){
if (player === computer) {
  return "draw"
}
if ((player === "Rock" && computer === "Scissor") ||
    (player === "Paper" && computer === "Rock") ||
    (player === "Scissor" && computer === "Paper"))
{
  return "win"
}
return "lose"
}

//
// Player's single round of the game
//

function playRound(playerMove) {
  computerTurn();
  const result = checkWinner(playerMove, computer);
  console.log("You choose " + playerMove + ".Computer chose " + computer+".You: " +result + "!");
}

function isValidMove(move) {
  const validMoves =['Rock', 'Paper', 'Scissor']
  return validMoves.includes(move)
}

function main() {
  const args = process.argv.slice(2)
  if (args.length === 0) {
    console.log("Error, please choose rock or paper or scissor")
    return null
  }
  const playerMove = args[0]
  if (!isValidMove(playerMove)) {
    console.log("Error, invalid move, pick rock, paper or scissor")
    return null
  }
  playRound(playerMove)
}

// run main function

main();