import React from "react";

interface ILinkButton {
  rounded: string;
  changeStyle: () => void;
}

const LinkButton: React.FC<ILinkButton> = ({ rounded, changeStyle }) => {
  return (
    <li
      onClick={changeStyle}
      className={`border border-black p-4 flex-grow ${
        rounded || "rounded-none"
      }`}
    ></li>
  );
};

export default LinkButton;
