import React from "react";
import Cell from "../Cell/Cell";

export default function Row({
  cells,
  setCells,
  turn,
  setTurn,
  setWinmessage,
  winmessage,
}) {
  return (
    <tr>
      <Cell
        cells={cells}
        setCells={setCells}
        turn={turn}
        setTurn={setTurn}
        setWinmessage={setWinmessage}
        winmessage={winmessage}
      />
      <Cell
        cells={cells}
        setCells={setCells}
        turn={turn}
        setTurn={setTurn}
        setWinmessage={setWinmessage}
        winmessage={winmessage}
      />
      <Cell
        cells={cells}
        setCells={setCells}
        turn={turn}
        setTurn={setTurn}
        setWinmessage={setWinmessage}
        winmessage={winmessage}
      />
    </tr>
  );
}
