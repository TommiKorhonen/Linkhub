import { DocumentData } from "firebase/firestore";
import React, { useState } from "react";
import {
  Button,
  ButtonContainer,
  ResetButton,
} from "../../components/styles/Button.styled";
import { FormEditor } from "../../components/styles/Form.styled";
import { Success } from "../../components/styles/Success.styled";
import { useFirestore } from "../../hooks/useFirestore";
import { BgEditor, FontEditor } from "./ThemeEdit.style";

const ThemeEdit = (document: DocumentData) => {
  // Hooks
  const { updateDocument } = useFirestore("users");
  const [bgColor, setBgColor] = useState("");
  const [textColor, setTextColor] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage("");

    // Return if no colors choosed
    if (!bgColor && !textColor) {
      setMessage("Please choose a color");
    }

    // Change bg && font color
    if (bgColor && textColor) {
      updateDocument(document.id, {
        background_color: bgColor,
        text_color: textColor,
      });
      setBgColor("");
      setTextColor("");
      return setMessage("Background & Title Updated!");
    }
    // Change font color
    if (textColor) {
      updateDocument(document.id, {
        text_color: textColor,
      });
      setMessage("Font updated!");
      return setTextColor("");
    }
    // Change bg color
    if (bgColor) {
      updateDocument(document.id, {
        background_color: bgColor,
      });
      setMessage("Background updated!");
      return setBgColor("");
    }
  };

  return (
    <FormEditor onSubmit={handleSubmit}>
      {message && <Success>{message}</Success>}
      <BgEditor>
        <span>Background color:</span>
        <input
          title="bgColor"
          type="color"
          value={bgColor}
          onChange={(e) => setBgColor(e.target.value)}
        />
      </BgEditor>
      {bgColor && (
        <ResetButton onClick={() => setBgColor("")}>Reset</ResetButton>
      )}

      <FontEditor>
        <span>Font color:</span>
        <input
          type="color"
          title="fontColor"
          value={textColor}
          onChange={(e) => setTextColor(e.target.value)}
        />
      </FontEditor>
      {textColor && (
        <ResetButton onClick={() => setTextColor("")}>Reset</ResetButton>
      )}
      <ButtonContainer>
        <Button data-cy="themeSubmit">Save Changes</Button>
      </ButtonContainer>
    </FormEditor>
  );
};

export default ThemeEdit;
