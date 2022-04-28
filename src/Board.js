import React, { useState } from "react";
import Cell from "./Cell";
import "./Board.css";
import { createBoard, hasWon } from "./helpers";

/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/

function Board({ nrows = 5, ncols = 5, chanceLightStartsOn = 0.25 }) {
  const [board, setBoard] = useState(
    createBoard(nrows, ncols, chanceLightStartsOn)
  );

  function flipCellsAround(coord) {
    setBoard((oldBoard) => {
      const [y, x] = coord.split("-").map(Number);

      const flipCell = (y, x, boardCopy) => {
        // if this coord is actually on board, flip it

        if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
          boardCopy[y][x] = !boardCopy[y][x];
        }
      };
      console.log(oldBoard);

      // TODO: Make a (deep) copy of the oldBoard
      const boardCopy = oldBoard.map((row) => [...row]);

      // TODO: in the copy, flip this cell and the cells around it
      flipCell(y, x, boardCopy);
      flipCell(y, x - 1, boardCopy);
      flipCell(y, x + 1, boardCopy);
      flipCell(y - 1, x, boardCopy);
      flipCell(y + 1, x, boardCopy);
      // TODO: return the copy
      return boardCopy;
    });
  }

  // if the game is won, just show a winning msg & render nothing else

  // TODO
  const won = hasWon(board);
  // make table board
  let tableBoard = [];
  for (let x = 0; x < board.length; x++) {
    let row = [];
    for (let y = 0; y < board[x].length; y++) {
      const coord = `${y}-${x}`;
      let newCell = (
        <Cell
          key={coord}
          flipCellsAroundMe={() => flipCellsAround(coord)}
          isLit={board[y][x]}
        />
      );
      row.push(newCell);
    }
    tableBoard.push(<tr key={x}>{row}</tr>);
  }

  return (
    <>
      {won && <h1>You won!!!</h1>}
      {!won && (
        <table>
          <tbody>{tableBoard}</tbody>
        </table>
      )}
    </>
  );
}

export default Board;
