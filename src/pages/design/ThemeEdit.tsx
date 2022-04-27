import React, { useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useDocument } from "../../hooks/useDocument";
import { useFirestore } from "../../hooks/useFirestore";

const ThemeEdit = () => {
  // Hooks
  const { user } = useAuthContext();
  const { updateDocument } = useFirestore("users");
  const { document, error } = useDocument("users", user?.displayName);
  const [bgColor, setBgColor] = useState("");

  return (
    <form className="p-4 bg-white rounded-md">
      <label>
        <span>Background color</span>
        <input
          type="color"
          className="h-16"
          value={bgColor}
          onChange={(e) => setBgColor(e.target.value)}
        />
      </label>
    </form>
  );
};

export default ThemeEdit;
