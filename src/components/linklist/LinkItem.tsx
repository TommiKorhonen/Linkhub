import React from "react";
import { StyledLinks } from "./LinkItem.styled";

interface IlinkItemprops {
  url: string;
  title: string;
  style?: {
    background_color: string;
    border_radius: string;
    text_color: string;
  };
}

const LinkItem: React.FC<IlinkItemprops> = ({ url, title, style }) => {
  return (
    <StyledLinks
      style={{
        backgroundColor: style?.background_color
          ? style.background_color
          : "#d3d3d3",
        color: style?.text_color ? style?.text_color : "white",
        borderRadius: style?.border_radius ? style?.border_radius : "1.5rem",
      }}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      data-cy="linkItem"
    >
      {title}
    </StyledLinks>
  );
};

export default LinkItem;
