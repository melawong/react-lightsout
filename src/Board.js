import React, { useState } from "react";
import Cell from "./Cell";
import "./Board.css";
import { createBoard } from "./helpers"

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

function Board({ nrows = 5, ncols = 5, chanceLightStartsOn = .25 }) {
  const [board, setBoard] = useState(createBoard(nrows, ncols, chanceLightStartsOn));



  function hasWon() {
    // TODO: check the board in state to determine whether the player has won.
  }

  function flipCellsAround(coord) {
    setBoard(oldBoard => {
      const [y, x] = coord.split("-").map(Number);

      const flipCell = (y, x, boardCopy) => {
        // if this coord is actually on board, flip it

        if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
          boardCopy[y][x] = !boardCopy[y][x];
        }
      };

      // TODO: Make a (deep) copy of the oldBoard

      // TODO: in the copy, flip this cell and the cells around it

      // TODO: return the copy
    });
  }

  // if the game is won, just show a winning msg & render nothing else

  // TODO

  // make table board
  const tableBoard = [];
    for(let x = 0; x < board.length; x++) {
      let arr = [];
      //
      // const currRow = document.getElementById(row)
      for (let y = 0; y < board[x].length; y++) {
        // currRow.append(< Cell flipCellsAroundMe={flipCellsAround} isLit={false} />)
        let newCell = < Cell key={`${y}-${x}`} flipCellsAroundMe={flipCellsAround} isLit={false} />
        arr.push(newCell);
      }
      tableBoard.push(<tr key={x}>{arr}</tr>);
    }

    return (
      <table>
        <tbody>
          {tableBoard}
        </tbody>
      </table>
    )


}

export default Board;
