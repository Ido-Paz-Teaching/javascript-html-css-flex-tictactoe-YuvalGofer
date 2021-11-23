/*function getWinningHorizontally(array) {
    let winningPlayer = getWinning(array, 0, 1, 2);
    if(winningPlayer != undefined) return winningPlayer;
    //
    winningPlayer = getWinning(array, 3, 4, 5);
    if(winningPlayer != undefined) return winningPlayer;
    //
    winningPlayer = getWinning(array, 6, 7, 8);
    if(winningPlayer != undefined) return winningPlayer;
    //
    return undefined;
}*/
//
/*function getWinningVertically(array) {
    let winningPlayer = getWinning(array, 0, 3, 6);
    if(winningPlayer != undefined) return winningPlayer;
    //
    winningPlayer = getWinning(array, 1, 4, 7);
    if(winningPlayer != undefined) return winningPlayer;
    //
    winningPlayer = getWinning(array, 2, 5, 8);
    if(winningPlayer != undefined) return winningPlayer;
    //
    return undefined;
}*/
//
/*function getWinningDiagonally(array) {
    let winningPlayer = getWinning(array, 0, 4, 8);
    if(winningPlayer != undefined) return winningPlayer;
    //
    winningPlayer = getWinning(array, 2, 4, 6);
    if(winningPlayer != undefined) return winningPlayer;
    //
    return undefined;
}*/
//
/*function getWinningAllAngle(array) {
    let winningPlayer = getWinningHorizontally(array);
    if(winningPlayer != undefined) return winningPlayer;
    //
    winningPlayer = getWinningVertically(array);
    if(winningPlayer != undefined) return winningPlayer;
    //
    winningPlayer = getWinningDiagonally(array);
    if(winningPlayer != undefined) return winningPlayer;
    //
    return undefined;
}*/

/*  if(!Array.isArray(selectionArray))
    throw('Must be string array!');
    //
    let playerWon = hasWon(selectionArray);
    if(!playerWon) {
        let allSquareHasValue = selectionArray.every((square)=>{
        return hasValue(square);
        });
        return allSquareHasValue;
    }
   return false;
}*/

/*if(!Array.isArray(selectionArray) )
    throw('Must be string array!');
    //
    let winningPlayer = getWinningAllAngle(selectionArray);
    if(winningPlayer != undefined) return true;
    //
    return false;
}*/

/*function getWinning(array,...squareID) {
    let line = getSquare(array,...squareID)
    let player = line[0];
    let allIsSame = false;
    if(hasValue(player)) {
        allIsSame = line.every((s)=>{
            s === player;
        });
        return allIsSame ? player : undefined ;;
    }
}*/