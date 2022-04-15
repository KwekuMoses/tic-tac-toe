import React from "react";
import styled from "styled-components";

const Td = styled.td`
  border: 1px solid grey;
  width: 100px;
  height: 100px;
`;

const handleClick = (e, symbol, setSymbol) => {
  if (!e.target.getAttribute("checked")) {
    e.target.setAttribute("checked", true);
    e.target.innerHTML = symbol;
    if (symbol === "X") {
      setSymbol("O");
    } else {
      setSymbol("X");
    }
  }
};

export default function Cell({ symbol, setSymbol }) {
  return (
    <Td role="cell" onClick={(e) => handleClick(e, symbol, setSymbol)}></Td>
  );
}
