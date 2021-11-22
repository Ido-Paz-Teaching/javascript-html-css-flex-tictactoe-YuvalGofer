const { hasWon } = require("./tictactoe");

/*
enter code to handle:
1. User cell selection click
2. game status update messages
3. Start button click
*/
const selectionArray = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ];
const player = ['X', 'O'];
const cellTag = 'button';
const maximumTurns = 10;
const squareIdPre = 'b';
//
let gameStatus = ' ';
let playerTurn = player[0];
let turnsNumber = 0;
let isGameOver = false;
//
window.addEventListener('load', function(){
    startGame();
}, false);
//pre-function
function switchPlayers(){
    if(playerTurn == player[0]){
        return player[0];
    }
    else{
        return player[1];
    }
}
function isDraw(){
    if(turnsNumber == maximumTurns){
        return 'Draw!';
    }
}
function getSquareNum(squareID)
{
    parseInt(squareID.replace(squareIdPre, ''));
}
//main function
function startGame(){
    let board = document.getElementById('board');
    let cellTags = board.getElementsByTagName(cellTag);
    //
    isGameOver = false;
    playerTurn = 0;

    setGameStatus();
    document.querySelector('header button').removeEventListener('click', startGame);
    document.querySelector('header button').addEventListener('click', startGame, false);

    for(i = 0, i < cellTags.length, i++){
    cellTags[i].removeEventListener('click', selectCell);
    cellTags[i].addEventListener('click', selectCell, false);
    cellTags[i].innerText = ' ';
    selectionArray[i] = ' ';
    }
}

function selectCell(event){
  let selectedSquare = event.currentTarget;
  if(!isGameOver && !isDraw()){
      if(!hasValue(selectedSquare.innerText)){
      let squareID = getSquareNum(selectedSquare.id)
      selectionArray[squareID] = playerTurn;
      selectedSquare.innerText = playerTurn;
      turnsNumber++;
      }
      isGameOver = hasWon(selectionArray);
  }
  setGameStatus();
}
//
function setGameStatus()
{
    if(isGameOver)
    gameStatusMessage = playerTurn + 'Won the game!';
    else if(turnsNumber == 0)
    gameStatusMessage = 'Waiting for you to start the game..'
    else if(turnsNumber == maximumTurns)
    gameStatusMessage = 'Game ended with a draw!';
    else {
        switchPlayers();
    }
}
    
    
    

