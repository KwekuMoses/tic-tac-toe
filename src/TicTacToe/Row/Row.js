import React from "react";
import Cell from "../Cell/Cell";

export default function Row({ symbol, setSymbol }) {
  return (
    <tr>
      <p>{symbol}</p>

      <Cell symbol={symbol} setSymbol={setSymbol} />
      <Cell symbol={symbol} setSymbol={setSymbol} />
      <Cell symbol={symbol} setSymbol={setSymbol} />
    </tr>
  );
}
