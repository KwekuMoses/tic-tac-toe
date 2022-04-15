import React from "react";
import Cell from "../Cell/Cell";

export default function Row({ turn, setTurn }) {
  return (
    <tr>
      <Cell turn={turn} setTurn={setTurn} />
      <Cell turn={turn} setTurn={setTurn} />
      <Cell turn={turn} setTurn={setTurn} />
    </tr>
  );
}
