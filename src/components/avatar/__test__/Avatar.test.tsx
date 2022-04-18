import React from "react";
import { render, screen } from "@testing-library/react";
import Avatar from "../Avatar";

const avatarProps = {
  src: "http://localhost/Portfolio.png",
};

describe("Avatar", () => {
  test("should show user img", () => {
    render(<Avatar {...avatarProps} />);
    const imgElement: HTMLImageElement = screen.getByAltText(/user avatar/i);
    expect(imgElement.src).toBe(avatarProps.src);
  });
});
