/*
enter code to handle:
1. User cell selection click
2. game status update messages
3. Start button click
*/
const player = ['X', 'O'];
const cellTag = 'button';
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
const getRandomPlayer = () => player[Math.floor(Math.random() * player.length)];
const isDraw = () => turnsNumber == maximumTurns;
const getSquareNum = (squareID) =>parseInt(squareID.replace(squareIdPre, ' '));
//main function
function startGame() {
    playerTurn = getRandomPlayer();
    let board = document.getElementById('board');
    let cellTags = board.getElementsByTagName(cellTag);
    //
    isGameOver = false;
    playerTurn = 0;

    setGameStatus();
    document.querySelector('header button').removeEventListener('click', startGame);
    document.querySelector('header button').addEventListener('click', startGame, false);

<<<<<<< HEAD
    for (let i = 0; i < cellTags.length; i++) {
       cellTags[i].removeEventListener('click', selectSquare);
       cellTags[i].addEventListener('click', selectSquare, false);
       cellTags[i].innerText = ' ';
       selectionArray[i] = ' ';
=======
    for(i = 0; i< cellTags.length; i++){
    cellTags[i].removeEventListener('click', selectCell);
    cellTags[i].addEventListener('click', selectCell, false);
    cellTags[i].innerText = ' ';
    selectionArray[i] = ' ';
>>>>>>> c340215070ecd6b271076c3cb331bd11c70d3e64
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
     setGameStatus();

//
function setGameStatus() {
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
}
    
    
    

