import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Nav from "../Nav";

describe("Checking whether the user input dropdown renders and works correctly", () => {
  test("Checking functionality", () => {
    //Arrange
    const expected = "Week 01 - Intro to the School of Code Way";
    const userSelect = "week1";

    //Act
    render(<Nav />);
    userEvent.selectOptions(screen.getByRole("combobox"), userSelect);

    //Assert
    expect(
      screen.getByRole("option", {
        name: expected,
      }).selected
    ).toBe(true);
  });
});

// test("check whether addToList function is called when button is clicked", function () {
//     const addToList = jest.fn();
//     render(<AddItem addToList={addToList}/>)
//     const button = screen.getByRole("button")
//     userEvent.click(button);
//     expect(addToList).toHaveBeenCalled();
// });
