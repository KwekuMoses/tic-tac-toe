import React, { useEffect, useState } from "react";
import Row from "../Row/Row";
import styled from "styled-components";

export default function TicTacToe() {
  const [symbol, setSymbol] = useState("X");
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    let nodeListCells = document.querySelectorAll("td");
    let cells = Array.from(nodeListCells);

    cells.map((cell, i) => {
      cell.setAttribute("data-testid", i);
    });
  }, [symbol]);

  return (
    <Container>
      <table id="table">
        <tbody>
          <Row symbol={symbol} setSymbol={setSymbol} />
          <Row symbol={symbol} setSymbol={setSymbol} />
          <Row symbol={symbol} setSymbol={setSymbol} />
        </tbody>
      </table>
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  place-items: center;
  width: 100vw;
  height: 100vh;
`;
