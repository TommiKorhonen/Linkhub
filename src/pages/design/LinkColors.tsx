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

const LinkColors = (document: DocumentData) => {
  const { updateDocument } = useFirestore("users");
  const [bgColor, setBgColor] = useState("");
  const [textColor, setTextColor] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage("");

    // Return if no colors choosed
    if (!bgColor && !textColor) {
      return setMessage("Please choose a color");
    }

    // Change bg && font color
    if (bgColor && textColor) {
      await updateDocument(document.id, {
        linkStyle: {
          ...document.linkStyle,
          background_color: bgColor,
          text_color: textColor,
        },
      });
      setBgColor("");
      setTextColor("");
      return setMessage("Background & Text Updated!");
    }
    // Change text color
    if (textColor) {
      await updateDocument(document.id, {
        linkStyle: {
          ...document.linkStyle,
          text_color: textColor,
        },
      });
      setMessage("Text updated!");
      return setTextColor("");
    }
    // Change bg color
    if (bgColor) {
      await updateDocument(document.id, {
        linkStyle: {
          ...document.linkStyle,
          background_color: bgColor,
        },
      });
      setMessage("Background updated!");
      return setBgColor("");
    }
  };
  return (
    <FormEditor onSubmit={handleSubmit}>
      {message && <Success>{message}</Success>}

      <BgEditor className="m-0">
        <span>Background color:</span>
        <input
          type="color"
          title="bgColor"
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
        <Button>Save Changes</Button>
      </ButtonContainer>
    </FormEditor>
  );
};

export default LinkColors;
