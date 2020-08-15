import React from "react";
import Card from "./index";
import Button from "../Button";

describe("Card presentational component", () => {
  it("render an h3 and p tag", () => {
    const wrapper = shallow(<Card />);
    expect(wrapper.find("h3")).to.have.length(1);
  });
  it("has two Buttons", () => {
    const wrapper = shallow(<Card />);
    expect(wrapper.find(Button)).to.have.length(2);
  });
});
