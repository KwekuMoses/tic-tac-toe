import React, { useEffect, useState } from "react";
import Row from "../Row/Row";
import styled from "styled-components";

export default function TicTacToe() {
  const [turn, setTurn] = useState("X");

  useEffect(() => {
    let nodeListCells = document.querySelectorAll("td");
    let cells = Array.from(nodeListCells);
    cells.map((cell, i) => {
      return cell.setAttribute("data-testid", i);
    });
  }, [turn]);

  return (
    <Container>
      <TurnIndicator>Turn: {turn}</TurnIndicator>
      <Table id="table">
        <tbody>
          <Row turn={turn} setTurn={setTurn} />
          <Row turn={turn} setTurn={setTurn} />
          <Row turn={turn} setTurn={setTurn} />
        </tbody>
      </Table>
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  place-items: center;
  width: 100vw;
  height: 100vh;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
`;
const Table = styled.table`
  grid-row: 2;
  grid-column: 2;
  place-self: center;
  min-width: 300px;
`;

const TurnIndicator = styled.p`
  color: black;
  grid-column: 2;
  grid-row: 1;
  place-self: end center;
`;
