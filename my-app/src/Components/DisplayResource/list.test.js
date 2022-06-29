import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import List from "../List";

describe("Checking information from api is rendered correctly depending on prop", () => {
  test("Checks whether the list component is rendered correctly for useful links", () => {
    //Arrange
    const data = {
      id: 1,
      week_number: 1,
      catagory_id: 1,
      contact_id: null,
      catagory_name: "Useful links",
      title: "The shapes of css",
      content:
        "CSS is capable of making all sorts of shapes. Squares and rectangles are easy, as they are the natural shapes of the web. Add a width and height and you have the exact size rectangle you need. Add border-radius and you can round that shape, and enough of it you can turn those rectangles into circles and ovals.",
      url: "https://css-tricks.com/the-shapes-of-css/",
      img: null,
      name: null,
      heading: null,
      twitter: null,
      linkedin: null,
      description: null,
    };

    //Act
    render(<List data={data} />);
    const mainheading = screen.getByText("Useful links");
    const subheading = screen.getAllByText("The shapes of css");
    const maincontent = screen.getByText(
      /CSS is capable of making all sorts of shapes/
    );
    const link = subheading[1];
    //Assert
    expect(mainheading).toBeInTheDocument();
    expect(subheading[0]).toBeInTheDocument();
    expect(maincontent).toBeInTheDocument();
    expect(link).toHaveAttribute(
      "href",
      "https://css-tricks.com/the-shapes-of-css/"
    );
  });
  test("Checks whether the list component is rendered correctly for contact information", () => {
    //Arrange
    const data = {
      id: 3,
      week_number: 1,
      catagory_id: null,
      contact_id: 1,
      catagory_name: null,
      title: null,
      content: null,
      url: null,
      img: null,
      name: "Chris Meah",
      heading: "Contact Information",
      twitter: "https://twitter.com/TheMeahCat",
      linkedin: "https://www.linkedin.com/in/chrismeah/",
      description: "SOC CEO",
    };

    //Act
    render(<List data={data} />);
    const name = screen.getByText("Chris Meah");
    const description = screen.getByText("SOC CEO");
    const twitter = screen.getByText("https://twitter.com/TheMeahCat");
    const linkedin = screen.getByText("https://www.linkedin.com/in/chrismeah/");

    //Assert
    expect(name).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(twitter).toBeInTheDocument();
    expect(linkedin).toBeInTheDocument();
  });
});
