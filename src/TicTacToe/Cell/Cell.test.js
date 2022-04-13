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
test("Check that Cells are of type td", () => {
  const renderer = new ShallowRenderer();
  renderer.render(<Cell />);
  const result = renderer.getRenderOutput();
  expect(result.type).toBe("td");
});

test("Check That Cells Append Children On Click", async () => {
  const user = userEvent.setup();

  const renderer = new ShallowRenderer();
  renderer.render(<Cell />);

  const cellElements = screen.getAllByRole("cell");
  for (let i = 0; i < cellElements.length; i++) {
    await user.click(cellElements[i]);
  }
});
