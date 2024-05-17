import React, { useEffect } from "react";
import { useToggle } from "../use-hooks/hooks/useToggle/useToggle";
import "./style.css";

const initGrid = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

const winnerCombo = ["012", "345", "678", "03"];

export const TicTacToe = () => {
  const { value, toggle } = useToggle(false);
  const player = value ? "X" : "O";

  /**
   *  grid and initvalue of state have same reference
   * */

  const [grid, setGrid] = React.useState(structuredClone(initGrid));

  const reset = () => {
    console.log("initGrid", initGrid);
    setGrid([...initGrid]);
    const spans = [...document.getElementsByTagName("span")];
    spans.forEach((span) => {
      span.classList.remove("red");
    });
  };

  const handleClick = (e) => {
    console.log("=-=-=-=");
    const span = e.target.closest("span");
    const pos = span.dataset.pos;
    const [row, col] = pos.split(","); // use proper split
    grid[row][col] = player;
    // this can change initGrid
    const winner = checkWinner(grid);
    if (!winner) {
      toggle();
    }
    setGrid([...grid]);
  };

  function checkWinner(grid) {
    const winnerCombo = [
      [
        [0, 0],
        [0, 1],
        [0, 2],
      ], // row 0
      [
        [1, 0],
        [1, 1],
        [1, 2],
      ], // row 1
      [
        [2, 0],
        [2, 1],
        [2, 2],
      ], // row 2
      [
        [0, 0],
        [1, 0],
        [2, 0],
      ], // col 1
      [
        [0, 1],
        [1, 1],
        [2, 1],
      ], // col 2
      [
        [0, 2],
        [1, 2],
        [2, 2],
      ], // col 2
      [
        [0, 0],
        [1, 1],
        [2, 2],
      ], // diagonal 1
      [
        [0, 2],
        [1, 1],
        [2, 0],
      ], // diagonal 1
    ];

    const winner = winnerCombo.find((combo, idx) => {
      const allEquals = combo.every((com) => {
        return grid[com[0]][com[1]] == player;
      });
      return allEquals;
    });

    if (winner) {
      const spans = [...document.getElementsByTagName("span")];
      if (spans?.forEach) {
        winner?.forEach((win) => {
          spans.forEach((span) => {
            if (span.dataset.pos === win?.join(",")) {
              span.classList.add("red");
            }
          });
        });
      }
      alert(`we got winner ${player}`);
    }
    return winner;
  }

  // console.log(grid);

  return (
    <>
      <div className="container" onClick={handleClick}>
        {grid.map((row, idx) => {
          return (
            <div className="row" data-row={idx} key={idx}>
              {row.map((col, jdx) => (
                <span key={jdx} data-pos={`${idx},${jdx}`}>
                  {col}
                </span>
              ))}
            </div>
          );
        })}
      </div>
      <div className="player">Player {player}</div>
      <button onClick={reset}>reset</button>
    </>
  );
};
