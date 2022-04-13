import React from "react";
import Cell from "../Cell/Cell";
import styled from "styled-components";

export default function TicTacToe() {
  return (
    <div>
      <table id="table">
        <tbody>
          <tr>
            <Cell />
            <Cell />
            <Cell />
          </tr>
          <tr>
            <Cell />
            <Cell />
            <Cell />
          </tr>
          <tr>
            <Cell />
            <Cell />
            <Cell />
          </tr>
        </tbody>
      </table>
    </div>
  );
}
