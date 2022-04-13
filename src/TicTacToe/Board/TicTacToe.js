import React from "react";
import Row from "../Row/Row";
import styled from "styled-components";

export default function TicTacToe() {
  return (
    <div>
      <table id="table">
        <tbody>
          <Row />
          <Row />
          <Row />
        </tbody>
      </table>
    </div>
  );
}
