/*
enter code to handle:
1. User cell selection click
2. game status update messages
3. Start button click
*/
/*const player = ['X', 'O'];
const squareTag = 'button';
const maximumTurns = 10;
const squareIdPre = 'b';
const selectionArray = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ];
//
let gameStatusMessage = ' ';
let playerTurn = player[0];
let turnsNumber = 0;
let isGameOver = false;
//
    window.addEventListener('load', function() {
    startGame();
    }, false);
//pre-function
function switchPlayers(){
    if(playerTurn == player[0]) {
        return player[0];
    }
    else{
        return player[1];
    }
}
const isDraw = () => turnsNumber == maximumTurns; 
const getSquareNum = (squareID) => parseInt(squareID.replace(squareIdPre, ''));

//main function
function startGame() {
    let board = document.getElementById('board');
    let squareTags = board.getElementsByTagName(squareTag);
    //
    isGameOver = false;
    turnsNumber = 0;

    setGameStatus();
    document.querySelector('header button').removeEventListener('click', startGame);
    document.querySelector('header button').addEventListener('click', startGame, false);

    for(let i = 0; i< squareTags.length; i++){
    squareTags[i].removeEventListener('click', selectSquare);
    squareTags[i].addEventListener('click', selectSquare, false);
    squareTags[i].innerText = ' ';
    }
}

function selectSquare(event) {
    let selectedSquare = event.currentTarget.id;
    if(!isGameOver && !isDraw()) {
      let squareID = getSquareNum(selectedSquare.id);
      selectionArray[squareID] = playerTurn;
      selectedSquare.innerText = playerTurn;
      turnsNumber++;
      }
      isGameOver = hasWon(selectionArray);
    }
     /*setGameStatus();*/

//
/*function setGameStatus() {
    if(isGameOver) 
    gameStatusMessage = playerTurn + 'Won the game!';
    else if(turnsNumber == 0)
    gameStatusMessage = 'Waiting for you to start the game..';
    else if(turnsNumber == maximumTurns-1)
    gameStatusMessage = 'Game ended with a draw!';
    else {
        switchPlayers();
        gameStatusMessage = 'Player' + playerTurn + 'turn..';
    }
    document.getElementById('gameStatusTag').innerText = gameStatusMessage;
}/*
    
    
    
