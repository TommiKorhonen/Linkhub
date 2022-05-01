import { DocumentData } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useFirestore } from "../../hooks/useFirestore";

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

    // Change bg && title color
    if (bgColor && textColor) {
      updateDocument(document.id, {
        background_color: bgColor,
        text_color: textColor,
      });
      setBgColor("");
      setTextColor("");
      return setMessage("Background & Title Updated!");
    }
    // Change title color
    if (textColor) {
      updateDocument(document.id, {
        text_color: textColor,
      });
      setMessage("Title updated!");
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
    <form className="p-4 bg-white rounded-md" onSubmit={handleSubmit}>
      {message && (
        <p className="text-green-900 bg-lime-200 border border-solid border-green-900 rounded-sm p-2 my-3">
          {message}
        </p>
      )}

      <label className="m-0">
        <span>Background color:</span>
        <input
          type="color"
          className="h-16 p-0 border-0"
          value={bgColor}
          onChange={(e) => setBgColor(e.target.value)}
        />
      </label>
      {bgColor && (
        <button
          className="bg-red-800 py-1 px-4 text-white"
          onClick={() => setBgColor("")}
        >
          Reset
        </button>
      )}

      <label>
        <span>Title color</span>
        <input
          type="color"
          className="h-16 p-0 border-0"
          value={textColor}
          onChange={(e) => setTextColor(e.target.value)}
        />
      </label>
      {textColor && (
        <button
          className="bg-red-800 py-1 px-4 mb-4 text-white"
          onClick={() => setTextColor("")}
        >
          Reset
        </button>
      )}
      <button className="bg-green-500 w-full px-6 py-4 font-semibold rounded-md text-white">
        Save Changes
      </button>
    </form>
  );
};

export default ThemeEdit;