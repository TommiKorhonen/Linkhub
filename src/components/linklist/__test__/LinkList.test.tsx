import React from "react";
import { render, screen } from "@testing-library/react";
import LinkList from "../LinkList";
import { linksData } from "../../../mocks/Links";

describe("Link", () => {
  test("should render given amount of links", () => {
    render(<LinkList links={linksData} />);
    expect(screen.getAllByRole("link").length).toBe(2);
  });
});
