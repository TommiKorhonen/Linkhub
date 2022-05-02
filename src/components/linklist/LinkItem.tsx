import React from "react";
import { ILink } from "../preview/Preview";

const LinkItem: React.FC<ILink> = ({ url, title }) => {
  return (
    <a
      className="bg-gray-200 p-4 w-full flex items-center justify-center rounded-3xl hover:invert"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {title}
    </a>
  );
};

export default LinkItem;
