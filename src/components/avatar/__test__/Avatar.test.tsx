import React from "react";
import { render, screen } from "@testing-library/react";
import Avatar from "../Avatar";

const avatarProps = {
  src: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80",
  h: 3,
  w: 3,
};

describe("Avatar", () => {
  test("should show user img", () => {
    render(<Avatar {...avatarProps} />);
    const imgElement: HTMLImageElement = screen.getByAltText(/user avatar/i);
    expect(imgElement.src).toBe(avatarProps.src);
  });
});
