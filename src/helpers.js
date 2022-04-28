/** create a board nrows high/ncols wide, each cell randomly lit or unlit */
function createBoard(nrows, ncols, chanceLightStartsOn) {
  let initialBoard = [];
  // TODO: create array-of-arrays of true/false values
  for (let i = 0; i < nrows; i++) {
    let newRow = [];
    for (let j = 0; j < ncols; j++) {
      const chance = Math.random() * 1;
      const isLit = chance <= chanceLightStartsOn && true;
      newRow.push(isLit);
    }
    initialBoard.push(newRow);
  }
  return initialBoard;
}
/**  */
function hasWon(board) {
  return board.every((row) => row.every((cell) => !cell));
  // TODO: check the board in state to determine whether the player has won.
}

export { createBoard, hasWon };
