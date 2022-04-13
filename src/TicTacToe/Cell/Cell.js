import React from "react";
import styled from "styled-components";

const Td = styled.td`
  border: 1px solid grey;
  width: 100px;
  height: 100px;
`;

function test(e) {
  var z = document.createElement("p"); // is a node

  e.target.appendChild(z);
}
export default function Cell() {
  return <td role="cell" onClick={(e) => test(e)}></td>;
}
