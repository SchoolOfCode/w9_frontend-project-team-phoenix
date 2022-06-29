import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import SelectForm from ".";

describe("Checking whether the user input dropdown renders and works correctly", () => {
  test("Checking functionality", () => {
    //Arrange
    const expected = "Week 01 - Intro to the School of Code Way";
    const userSelect = "week1";

    //Act
    render(<SelectForm />);
    userEvent.selectOptions(screen.getByRole("combobox"), userSelect);

    //Assert
    expect(
      screen.getByRole("option", {
        name: expected,
      }).selected
    ).toBe(true);
  });
});
