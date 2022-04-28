import { DocumentData } from "firebase/firestore";
import React, { useState } from "react";
import { useFirestore } from "../../hooks/useFirestore";

const ThemeEdit = (document: DocumentData) => {
  // Hooks
  const { updateDocument } = useFirestore("users");
  const [bgColor, setBgColor] = useState("#ffffff");
  const [textColor, setTextColor] = useState("#ffffff");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(bgColor);

    await updateDocument(document.id, {
      background_color: bgColor,
    });
  };

  return (
    <form className="p-4 bg-white rounded-md" onSubmit={handleSubmit}>
      <label>
        <span>Background color</span>
        <input
          type="color"
          className="h-16"
          value={bgColor}
          onChange={(e) => setBgColor(e.target.value)}
        />
      </label>
      <label>
        <span>Text color</span>
        <input
          type="color"
          value={textColor}
          onChange={(e) => setTextColor(e.target.value)}
        />
      </label>
      <button className="bg-green-500 w-full px-6 py-4 font-semibold rounded-md text-white">
        Save Changes
      </button>
    </form>
  );
};

export default ThemeEdit;
