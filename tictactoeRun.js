var statusDisplay = document.getElementById('gameStatusTag');
//Game condition
let gameActive = true;
let currentPlayer = "X";
let gameSelectionArray = ["", "", "", "", "", "", "", "", "",];
//Game condition
var winningMessage = () => `Player ${currentPlayer} has won!`;
const drawMessage = () => 'Game ended in a draw!';
var currentPlayerTurn = () => `It ${currentPlayer} turn`;
const winningCondition = [[0, 1, 2], [3, 4, 5], [6, 7, 8],
[0, 3, 6], [1, 4, 7], [2, 5, 8],
[0, 4, 8], [2, 4, 6]
];
//Game status
statusDisplay.innerHTML = currentPlayerTurn();
//Game function
function squarePlayed(clickedSquare, clickedSquareIndex) {
    gameSelectionArray[clickedSquareIndex] = currentPlayer;
    clickedSquare.innerHTML = currentPlayer;
}
function playerChange() {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusDisplay.innerHTML = currentPlayerTurn();
}
function resultValidation() {
    let ruondWon = false;

    for (let i = 0; i <= 7; i++) {
        if (gameSelectionArray[winningCondition[i][0]] == gameSelectionArray[winningCondition[i][1]] &&
            gameSelectionArray[winningCondition[i][1]] == gameSelectionArray[winningCondition[i][2]] &&
            gameSelectionArray[winningCondition[i][2]] == currentPlayer) {
                gameActive = false;
                statusDisplay.innerHTML = winningMessage();
                return false;
        }
    }

    return true;

    // for(let i = 0; i <= 9; i++){
    //     const winCondition = winningCondition[i];
    //     let a = gameSelectionArray[winCondition[0]];
    //     let b = gameSelectionArray[winCondition[1]];
    //     let c = gameSelectionArray[winCondition[2]];
    // if(a === currentPlayer || b === currentPlayer || c === currentPlayer) {
    //     continue;
    //   }
    // if(a === b && b === c) {
    //     ruondWon = true;
    //     break
    //   }
    // }
    // if(ruondWon) {
    //     statusDisplay.innerHTML = winningMessage();
    //     gameActive = false;
    //     return;
    // }
    //     let roundDraw = !gameSelectionArray.includes("");
    //     if(roundDraw) {
    //         statusDisplay.innerHTML = drawMessage();
    //         gameActive = false;
    //         return;
    //     }
}
function squareClick(clickedSquareEvent) {

    var clickedSquare = clickedSquareEvent.target;
    //clickedSquare.innerText  = currentPlayer;
    var clickedSquareIndex = clickedSquare.id['1'];
    //gameSelectionArray[clickedSquare.id['1']] = currentPlayer;

    if (gameSelectionArray[clickedSquareIndex] !== "" || !gameActive) {
        return;
    }

    squarePlayed(clickedSquare, clickedSquareIndex);
    if(resultValidation())
        playerChange();
}
function restartGame() {
    gameActive = true;
    currentPlayer = "X";
    gameSelectionArray = ["", "", "", "", "", "", "", "", "",];
    statusDisplay.innerHTML = currentPlayerTurn();
    document.querySelectorAll('#board > button').forEach((b) => b.addEventListener('click', squareClick));
}
//Button query 
document.querySelectorAll('#board > button').forEach((b) => b.addEventListener('click', squareClick));
document.querySelector('header button').addEventListener('click', restartGame);
