import React from "react";
import Avatar from "../../components/avatar/Avatar";
import LinkList from "../linklist/LinkList";

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
    <div
      className="w-[375px] h-[668px] border-4 border-solid border-black rounded-[35px] overflow-hidden overflow-y-auto"
      style={{ backgroundColor: background_color }}
    >
      <div className="flex flex-col py-12 w-full h-full mx-auto">
        <div className="mx-auto px-3">
          <Avatar src={photoURL} h={96} w={96} />
        </div>
        <div className="mt-4 flex flex-col gap-1 overflow-hidden break-words">
          {/* Title */}
          <h1
            className="text-center font-semibold"
            style={{ color: text_color }}
          >
            @{displayName}
          </h1>
          {/* Bio */}
          <p
            className="text-center px-4 font-semibold"
            style={{ color: text_color }}
          >
            {bio ? bio : ""}
          </p>
        </div>
        <div className="flex flex-col gap-6 px-3 mt-8 ">
          {links && <LinkList links={links} style={linkStyle} />}
        </div>
      </div>
    </div>
  );
};

export default Preview;
