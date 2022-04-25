import React from "react";
import { ILink } from "../preview/Preview";

const LinkList: React.FC<ILink[]> = (links) => {
  return (
    <>
      {links &&
        links.map((link) => (
          <a
            className="bg-gray-200 p-4 w-full flex items-center justify-center rounded-3xl hover:invert"
            href="https://www.w3schools.com"
            key={link.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.title}
          </a>
        ))}
    </>
  );
};

export default LinkList;
