import React, { useEffect, useState } from "react";
import Row from "../Row/Row";
import styled from "styled-components";

export default function TicTacToe() {
  const [turn, setTurn] = useState("X");
  const [cells, setCells] = useState(Array(9).fill(""));
  const [winmessage, setWinmessage] = useState("");

  // Assign each cell a unique Id
  useEffect(() => {
    let nodeListCells = document.querySelectorAll("td");
    let cells = Array.from(nodeListCells);
    cells.map((cell, i) => {
      return cell.setAttribute("data-testid", i);
    });
  }, []);

  const handleRestart = () => {
    window.location.reload();
  };

  return (
    <Container>
      <TurnIndicator>Turn: {turn}</TurnIndicator>
      <WinAnnouncer role="winner">{winmessage}</WinAnnouncer>
      <Table id="table">
        <tbody>
          <Row
            cells={cells}
            setCells={setCells}
            turn={turn}
            setTurn={setTurn}
            setWinmessage={setWinmessage}
            winmessage={winmessage}
          />
          <Row
            cells={cells}
            setCells={setCells}
            turn={turn}
            setTurn={setTurn}
            setWinmessage={setWinmessage}
            winmessage={winmessage}
          />
          <Row
            cells={cells}
            setCells={setCells}
            turn={turn}
            setTurn={setTurn}
            setWinmessage={setWinmessage}
            winmessage={winmessage}
          />
        </tbody>
      </Table>
      {winmessage !== "" ? (
        <Button onClick={() => handleRestart()}>Play Again</Button>
      ) : (
        ""
      )}
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
const WinAnnouncer = styled.span`
  color: black;
  grid-column: 2;
  grid-row: 1;
  place-self: end center;
`;

const Button = styled.button`
  grid-row: 3;
  grid-column: 2;
`;
