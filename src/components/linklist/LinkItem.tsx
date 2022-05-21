import React from "react";
import { useParams } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useDocument } from "../../hooks/useDocument";
import { ILink } from "../preview/Preview";

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
  let { username } = useParams();
  const { document, error } = useDocument("users", username);
  // const style = document && document.linkStyle;
  return (
    <a
      className={`p-4 w-full flex items-center justify-center shadow-xl hover:opacity-80 ${
        style?.border_radius ? style.border_radius : "rounded-3xl"
      }`}
      style={{
        backgroundColor: style?.background_color
          ? style.background_color
          : "#d3d3d3",
        color: style?.text_color ? style?.text_color : "white",
      }}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {title}
    </a>
  );
};

export default LinkItem;
