import React from "react";
import { ILink } from "../preview/Preview";

const LinkItem: React.FC<ILink> = ({ url, title, style }) => {
  return (
    <a
      className={`bg-gray-200 p-4 w-full flex items-center justify-center hover:invert ${
        style || "rounded-3xl"
      }`}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {title}
    </a>
  );
};

export default LinkItem;
