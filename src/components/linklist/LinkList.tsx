import React from "react";
import { ILink } from "../preview/Preview";

const LinkList: React.FC<{ links: ILink[] }> = ({ links }) => {
  return (
    <>
      {links.length > 0 &&
        links.map((link) => (
          <a
            className="bg-gray-200 p-4 w-full flex items-center justify-center rounded-3xl hover:invert"
            href={link.url}
            key={link.id}
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
