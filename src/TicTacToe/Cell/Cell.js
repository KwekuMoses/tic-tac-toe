import React from "react";
import styled from "styled-components";

const Td = styled.td`
  border: 1px solid grey;
  width: 100px;
  height: 100px;
`;

function test(e, symbol, setSymbol) {
  var z = document.createElement("p"); // is a node
  e.target.appendChild(z);
  z.innerHTML = symbol;
  if (symbol === "X") {
    setSymbol("O");
  } else {
    setSymbol("X");
  }
}

export default function Cell({ symbol, setSymbol }) {
  return <Td role="cell" onClick={(e) => test(e, symbol, setSymbol)}></Td>;
}
