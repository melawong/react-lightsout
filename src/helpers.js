  /** create a board nrows high/ncols wide, each cell randomly lit or unlit */
  function createBoard(nrows, ncols, chanceLightStartsOn) {
    let initialBoard = [];
    // TODO: create array-of-arrays of true/false values
    for(let i = 0; i < nrows; i++){
      let newRow = [];
    for(let j = 0; j < ncols; j++) {
      newRow.push("f");
    }
    initialBoard.push(newRow);
  }
    return initialBoard;
  }

  export {createBoard}