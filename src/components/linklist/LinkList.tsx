import React from "react";
import { ILink } from "../preview/Preview";
import LinkItem from "./LinkItem";

interface ILinklistProps {
  links: ILink[];
  style?: {
    background_color: string;
    border_radius: string;
    text_color: string;
  };
}

const LinkList: React.FC<ILinklistProps> = ({ links, style }) => {
  return (
    <>
      {links.length > 0 &&
        links.map((link) => (
          <LinkItem
            key={link.id}
            url={link.url}
            title={link.title}
            style={style}
          />
        ))}
    </>
  );
};

export default LinkList;
