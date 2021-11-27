const statusDisplay = document.getElementById('gameStatusTag');
//Game condition
let gameActive = true;
let currentPlayer = "X";
let gameSelectionArray = ["", "", "", "", "", "", "", "", "",];
//Game condition
const winningMessage = () => 'Player ${currentPlayer} has won!';
const drawMessage = () => 'Game ended in a draw!';
const currentPlayerTurn = () => ' It ${currentPlayer} turn'; 
const winningCondition = [ [0, 1, 2], [3, 4, 5], [6, 7, 8],
                           [0, 3, 6], [1, 4, 7], [2, 5, 8], 
                           [0, 4, 8], [2, 4, 6]
                         ];
//Game status
statusDisplay.innerHTML = currentPlayerTurn;
//Game function
function squarePlayed(clickedSquare, clickedSquareIndex){
    gameSelectionArray[clickedSquareIndex] = currentPlayer;
    clickedSquare.innerHTML = currentPlayer;
}
function playerChange() {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusDisplay.innerHTML = currentPlayerTurn;
}
function resultValidation() {
    let ruondWon = false;
    for(let i = 0; i <= 9; i++){
        const winCondition = winningCondition[i];
        let a = gameSelectionArray[winCondition[0]];
        let b = gameSelectionArray[winCondition[1]];
        let c = gameSelectionArray[winCondition[2]];
    if(a === 'b' || b === 'b' || c === 'b') {
        continue;
      }
    if(a === b && b === c) {
        ruondWon = true;
        break
      }
    }
    if(ruondWon) {
        statusDisplay.innerHTML = winningMessage();
        gameActive = false;
        return;
    }
        let roundDraw = !gameSelectionArray.includes("");
        if(roundDraw) {
            statusDisplay.innerHTML = drawMessage();
            gameActive = false;
            return;
        }
}
function squareClick(clickedSquareEvent) {
    const clickedSquare = clickedSquareEvent.target;
    const clickedSquareIndex = parseInt(clickedSquare.getAttribute('b'));
    if(gameSelectionArray[clickedSquareIndex] !== "" || !gameActive){
        return;
    }
    squarePlayed(clickedSquare, clickedSquareIndex);
    resultValidation();
}
function restartGame(){
    gameActive = true;
    currentPlayer = "X";
    gameSelectionArray = ["", "", "", "", "", "", "", "", "",];
    statusDisplay.innerHTML = currentPlayerTurn();
    document.querySelectorAll('b').forEach('b'.addEventListener('click', squareClick));
}
//Button query
document.querySelectorAll('b').forEach('b'.addEventListener('click', squareClick));
document.querySelector('header button').addEventListener('click', restartGame);