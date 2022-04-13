// hello.test.js

import React from "react";
import userEvent from "@testing-library/user-event";
import Cell from "./Cell";
import App from "../../App";
import { getByText, render, screen } from "@testing-library/react";
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

  const renderer = new ShallowRenderer();
  renderer.render(<Cell />);

  const cellElements = screen.getAllByRole("cell");
  for (let i = 0; i < cellElements.length; i++) {
    await user.click(cellElements[i]);

    if (i % 2 === 0) {
      expect(cellElements[i].innerHTML).toBe("<p>X</p>");
    } else {
      expect(cellElements[i].innerHTML).toBe("<p>O</p>");
    }
  }
});
