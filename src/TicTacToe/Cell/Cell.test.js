// hello.test.js

import React from "react";
import userEvent from "@testing-library/user-event";
import Cell from "./Cell";
import App from "../../App";
import { render, screen } from "@testing-library/react";
import ShallowRenderer from "react-test-renderer/shallow";

beforeEach(() => {
  render(<App />);
});

test("There Should Be 9 Cells In The Document At Start", () => {
  const cells = screen.getAllByRole("cell");
  expect(cells.length).toEqual(9);
});

test("Check That Cells Append Children On Click", async () => {
  const user = userEvent.setup();

  const renderer = new ShallowRenderer();
  renderer.render(<Cell />);

  const cellElements = screen.getAllByRole("cell");
  for (let i = 0; i < cellElements.length; i++) {
    await user.click(cellElements[i]);
    expect(cellElements[i].innerHTML).not.toBe("undefined");
  }
});

test("Check That Everyother Cell is X and everyother Cell is O when clicked", async () => {
  const user = userEvent.setup();

  const cellElements = screen.getAllByRole("cell");
  for (let i = 0; i < cellElements.length; i++) {
    await user.click(cellElements[i]);

    if (i % 2 === 0) {
      expect(cellElements[i].innerHTML).toBe("X");
    } else {
      expect(cellElements[i].innerHTML).toBe("O");
    }
  }
});

test("Cell Can Only Be Pressed Once", async () => {
  const user = userEvent.setup();

  const cellElements = screen.getAllByRole("cell");
  for (let i = 0; i < cellElements.length; i++) {
    await user.click(cellElements[i]);
    await user.click(cellElements[i]);

    if (i % 2 === 0) {
      expect(cellElements[i].innerHTML).toBe("X");
    } else {
      expect(cellElements[i].innerHTML).toBe("O");
    }
  }
});

test("Check That Winner Is Announced On Winning Combination", async () => {
  const userX = userEvent.setup();
  const userO = userEvent.setup();
  const winElement = screen.queryByText(/win/i);

  expect(winElement).not.toBeInTheDocument();

  const cellElementsNodelist = screen.getAllByRole("cell");
  const winner = screen.getByRole("winner");
  const cellElements = Array.from(cellElementsNodelist);
  await userX.click(cellElements[0]);
  await userO.click(cellElements[8]);

  await userX.click(cellElements[1]);
  await userO.click(cellElements[4]);

  await userX.click(cellElements[2]);
  await userO.click(cellElements[7]);

  expect(winner.innerHTML).toBe("win");
});
