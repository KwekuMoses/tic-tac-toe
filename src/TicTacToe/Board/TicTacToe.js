import React, { useState } from "react";
import Row from "../Row/Row";

export default function TicTacToe() {
  const [symbol, setSymbol] = useState("X");

  return (
    <div>
      <table id="table">
        <tbody>
          <Row symbol={symbol} setSymbol={setSymbol} />
          <Row symbol={symbol} setSymbol={setSymbol} />
          <Row symbol={symbol} setSymbol={setSymbol} />
        </tbody>
      </table>
    </div>
  );
}
