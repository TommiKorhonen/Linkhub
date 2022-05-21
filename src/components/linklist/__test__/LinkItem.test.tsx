import React from "react";
import { render, screen } from "@testing-library/react";
import LinkItem from "../LinkItem";

const avatarProps = {
  id: "",
  url: "https://tommi-korhonen.com/",
  title: "Portfolio",
  style: {
    background_color: "",
    border_radius: "",
    text_color: "",
  },
};

describe("Link", () => {
  test("should show title", () => {
    render(<LinkItem {...avatarProps} />);
    expect(screen.getByRole("link")).toHaveTextContent(/portfolio/i);
  });
});
