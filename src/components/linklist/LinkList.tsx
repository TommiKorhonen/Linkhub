import React from "react";
import { ILink } from "../preview/Preview";
import LinkItem from "./LinkItem";

const LinkList: React.FC<{ links: ILink[] }> = ({ links }) => {
  return (
    <>
      {links.length > 0 &&
        links.map((link) => (
          <LinkItem
            key={link.id}
            id={""}
            url={link.url}
            title={link.title}
            style={link.style}
          />
        ))}
    </>
  );
};

export default LinkList;
