import React from "react";
import Avatar from "../../components/avatar/Avatar";
import UserImg from "../../assets/user.png";
import { useCollection } from "../../hooks/useCollection";
import { useDocument } from "../../hooks/useDocument";
import { useParams } from "react-router-dom";
import { ILink } from "../../components/preview/Preview";

const User = () => {
  let { username } = useParams();
  const { document, error } = useDocument("users", username);
  // console.log(document);

  if (error) {
    return (
      <div className="text-center h-screen flex items-center">
        <h1 className="error m-auto">{error}</h1>
      </div>
    );
  }
  if (!document) {
    return (
      <div className="text-center h-screen flex items-center">
        <h1 className="mx-auto text-7xl">Loading...</h1>
      </div>
    );
  }
  return (
    <div
      className="mx-auto h-full flex flex-col items-center justify-center"
      style={{
        backgroundColor: document.background_color
          ? document.background_color
          : "#ffffff",
      }}
    >
      <div className="max-w-[680px] h-screen w-full">
        {/* Avatar component */}
        <div className="flex flex-col items-center gap-4 mb-8 mt-3">
          <Avatar src={UserImg} h={96} w={96} />
          <div>
            <p>@{document.displayName}</p>
          </div>
        </div>
        <div className="flex flex-col gap-6 px-3 mt-8">
          {document.links &&
            document.links.map((link: ILink) => (
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
        </div>
        {/* links */}
      </div>
    </div>
  );
};

export default User;
