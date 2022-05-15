import { DocumentData } from "firebase/firestore";
import React, { useState } from "react";
import { useFirestore } from "../../hooks/useFirestore";

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
      setMessage("Please choose a color");
    }

    // Change bg && font color
    if (bgColor && textColor) {
      const linksCopy = [...document.links];

      linksCopy.forEach(
        (link) =>
          (link["style"] = {
            ...link["style"],
            background_color: bgColor,
            text_color: textColor,
          })
      );
      console.log(linksCopy);

      await updateDocument(document.id, {
        links: linksCopy,
      });

      setBgColor("");
      setTextColor("");
      return setMessage("Background & Text Updated!");
    }
    // Change text color
    if (textColor) {
      const linksCopy = [...document.links];

      linksCopy.forEach(
        (link) =>
          (link["style"] = {
            ...link["style"],
            text_color: textColor,
          })
      );
      console.log(linksCopy);

      await updateDocument(document.id, {
        links: linksCopy,
      });

      setMessage("Text updated!");
      return setTextColor("");
    }
    // Change bg color
    if (bgColor) {
      const linksCopy = [...document.links];

      linksCopy.forEach(
        (link) =>
          (link["style"] = {
            ...link["style"],
            background_color: bgColor,
          })
      );
      console.log(linksCopy);

      await updateDocument(document.id, {
        links: linksCopy,
      });

      setMessage("Background updated!");
      return setBgColor("");
    }
  };
  return (
    <form className="p-4 bg-white rounded-md mb-8" onSubmit={handleSubmit}>
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
        <span>Font color:</span>
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
      <button className="bg-violet-500 w-full px-6 py-4 font-semibold rounded-md text-white">
        Save Changes
      </button>
    </form>
  );
};

export default LinkColors;
