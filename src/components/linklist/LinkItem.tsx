import React from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useDocument } from "../../hooks/useDocument";
import { ILink } from "../preview/Preview";

const LinkItem: React.FC<ILink> = ({ url, title }) => {
  const { user } = useAuthContext();
  const { document, error } = useDocument("users", user?.displayName);
  const style = document && document.linkStyle;
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
