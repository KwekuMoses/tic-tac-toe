import React, { useState } from "react";
import styled from "styled-components";

const Td = styled.td`
  border: 1px solid grey;
  width: 100px;
  height: 100px;
`;

function test(e, symbol, setSymbol) {
  var z = document.createElement("p"); // is a node
  e.target.appendChild(z);
  z.innerHTML = "X";
}
export default function Cell() {
  return <Td role="cell" onClick={(e) => test(e)}></Td>;
}
