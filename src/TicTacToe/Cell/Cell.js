import React, { useState } from "react";
import styled from "styled-components";

export default function Cell({
  cells,
  setCells,
  turn,
  setTurn,
  setWinmessage,
  winmessage,
}) {
  const checkForWinner = (squares) => {
    let combos = {
      across: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
      ],
      down: [
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
      ],
      diagonal: [
        [0, 4, 8],
        [2, 4, 6],
      ],
    };
    // Kolla i varje pattern om indexplats 0 = 1 = 2
    for (let combo in combos) {
      combos[combo].forEach((pattern) => {
        // if there is an empty string in any of the below we cant have a winner
        if (
          squares[pattern[0]] === "" ||
          squares[pattern[1]] === "" ||
          squares[pattern[2]] === ""
        ) {
          // Either X or O
          // Pattern [X] refers to the X:th position in each combo array
          // do nothing
        } else if (
          // if Pattern[0] är X och pattern 1 är X och pattern 2 är X
          squares[pattern[0]] === squares[pattern[1]] &&
          squares[pattern[1]] === squares[[pattern[2]]]
        ) {
          setWinmessage(turn + " wins!");
          let cells = document.querySelectorAll(".cell");
          console.log(cells);
          Array.from(cells).map((cell) => {
            cell.setAttribute("onClick", "");
          });
        }
      });
    }
  };

  const handleClick = (e, turn, setTurn) => {
    let squares = [...cells];

    if (!e.target.getAttribute("checked")) {
      e.target.setAttribute("checked", turn);
      e.target.innerHTML = turn;

      turn === "X"
        ? (squares[e.target.getAttribute("data-testid")] = "X")
        : (squares[e.target.getAttribute("data-testid")] = "O");

      turn === "X" ? setTurn("O") : setTurn("X");
    }

    checkForWinner(squares);
    setCells(squares);
  };

  return winmessage === "" ? (
    <Td
      className="cell"
      role="cell"
      onClick={(e) => handleClick(e, turn, setTurn)}
    ></Td>
  ) : (
    <Td className="cell" role="cell"></Td>
  );
}

const Td = styled.td`
  border: 1px solid grey;
  width: 100px;
  height: 100px;
`;
