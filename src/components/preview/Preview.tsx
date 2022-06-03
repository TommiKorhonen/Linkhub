import React from "react";
import Avatar from "../../components/avatar/Avatar";
import LinkList from "../linklist/LinkList";
import { PreviewWrapper, StyledPreview } from "./Preview.styled";

export interface ILink {
  createdBy?: {
    id: string;
  };
  id: string;
  title: string;
  url: string;
}
interface IUserDoc {
  background_color: string;
  displayName: string;
  photoURL: null | string;
  linkStyle?: {
    background_color: string;
    border_radius: string;
    text_color: string;
  };
  text_color: string;
  bio: string;
  links: ILink[];
}

const Preview: React.FC<IUserDoc> = (props) => {
  const {
    background_color,
    displayName,
    photoURL,
    text_color,
    links,
    bio,
    linkStyle,
  } = props;
  return (
    <StyledPreview
      data-cy="previewBg"
      style={{ backgroundColor: background_color }}
    >
      <PreviewWrapper>
        <div>
          <Avatar src={photoURL} h={96} w={96} />
        </div>
        <div>
          {/* Title */}
          <h3 style={{ color: text_color }}>@{displayName}</h3>
          {/* Bio */}
          <p data-cy="bio" style={{ color: text_color }}>
            {bio ? bio : ""}
          </p>
        </div>
        <div>{links && <LinkList links={links} style={linkStyle} />}</div>
      </PreviewWrapper>
    </StyledPreview>
  );
};

export default Preview;
