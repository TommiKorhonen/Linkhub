import React from "react";
import { render, screen } from "@testing-library/react";
import Signup from "../Signup";
import userEvent from "@testing-library/user-event";

beforeEach(() => {
  // eslint-disable-next-line testing-library/no-render-in-setup
  render(<Signup />);
});

const typeIntoFrom = ({
  email,
  password,
  displayName,
}: {
  email?: string;
  password?: string;
  displayName?: string;
}) => {
  const emailInputElement: HTMLInputElement = screen.getByRole("textbox", {
    name: /email/i,
  });
  const passwordInputElement: HTMLInputElement =
    screen.getByLabelText(/password/i);
  const displayNameInputElement: HTMLInputElement =
    screen.getByLabelText(/username/i);

  if (email) {
    userEvent.type(emailInputElement, email);
  }
  if (password) {
    userEvent.type(passwordInputElement, password);
  }
  if (displayName) {
    userEvent.type(displayNameInputElement, displayName);
  }

  return {
    emailInputElement,
    passwordInputElement,
    displayNameInputElement,
  };
};

describe("signup", () => {
  test("inputs should be initially empty", () => {
    const emailInputElement: HTMLInputElement = screen.getByRole("textbox", {
      name: /email/i,
    });
    const passwordInputElement: HTMLInputElement =
      screen.getByLabelText(/Password/i);
    const displayNameInputElement: HTMLInputElement =
      screen.getByLabelText(/Username/i);
    expect(emailInputElement.value).toBe("");
    expect(passwordInputElement.value).toBe("");
    expect(displayNameInputElement.value).toBe("");
  });

  test("should be able to type an email", () => {
    const { emailInputElement } = typeIntoFrom({ email: "selena@gmail.com" });
    expect(emailInputElement.value).toBe("selena@gmail.com");
  });

  test("should be able to type a password", () => {
    const { passwordInputElement } = typeIntoFrom({ password: "test" });
    expect(passwordInputElement.value).toBe("test");
  });

  test("should be able to type password confirmation", () => {
    const { displayNameInputElement } = typeIntoFrom({
      displayName: "Juhani",
    });
    expect(displayNameInputElement.value).toBe("Juhani");
  });
});
