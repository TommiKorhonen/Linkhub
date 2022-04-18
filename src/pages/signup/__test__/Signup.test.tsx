import React from "react";
import { render, screen } from "@testing-library/react";
import Signup from "../Signup";
import userEvent from "@testing-library/user-event";

beforeEach(() => {
  // eslint-disable-next-line testing-library/no-render-in-setup
  render(<Signup />);
});

// const typeIntoFrom: React.FC<{
//   email?: string;
//   password?: string;
//   displayName?: string;
// }> = ({ email, password, displayName }) => {
//   const emailInputElement: HTMLInputElement = screen.getByRole("textbox", {
//     name: /email/i,
//   });
//   const passwordInputElement: HTMLInputElement =
//     screen.getByLabelText("Password");
//   const displayNameInputElement: HTMLInputElement =
//     screen.getByLabelText(/confirm password/i);
//   if (email) {
//     userEvent.type(emailInputElement, email);
//   }
//   if (password) {
//     userEvent.type(passwordInputElement, password);
//   }
//   if (displayName) {
//     userEvent.type(displayNameInputElement, displayName);
//   }
//   return {
//     emailInputElement,
//     passwordInputElement,
//     displayNameInputElement,
//   };
// };

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
  //   test("paska", () => {
  //     const { emailInputElement } = typeIntoFrom({ email: "selena@gmail.com" });
  //   });
});
