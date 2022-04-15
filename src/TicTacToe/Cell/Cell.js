import React from "react";
import styled from "styled-components";

const Td = styled.td`
  border: 1px solid grey;
  width: 100px;
  height: 100px;
`;

const handleClick = (e, turn, setTurn) => {
  if (!e.target.getAttribute("checked")) {
    e.target.setAttribute("checked", true);
    e.target.innerHTML = turn;
    if (turn === "X") {
      setTurn("O");
    } else {
      setTurn("X");
    }
  }
};

export default function Cell({ turn, setTurn }) {
  return <Td role="cell" onClick={(e) => handleClick(e, turn, setTurn)}></Td>;
}
