import React from "react";
import Avatar from "../../components/avatar/Avatar";
import { useDocument } from "../../hooks/useDocument";
import { useParams } from "react-router-dom";
import LinkList from "../../components/linklist/LinkList";

const User = () => {
  let { username } = useParams();
  const { document, error } = useDocument("users", username);

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
      <div className="max-w-[680px] h-screen w-full overflow-hidden">
        {/* Avatar component */}
        <div className="flex flex-col items-center gap-4 mb-8 mt-3">
          <Avatar src={document.photoURL} h={96} w={96} />
          <div className="flex flex-col gap-1">
            {/* Title */}
            <h2
              style={{
                color: document.text_color ? document.text_color : "#000000",
              }}
              className="text-center font-semibold"
            >
              @{document.displayName}
            </h2>
            {/* Bio */}
            <p className="font-semibold" style={{ color: document.text_color }}>
              {document.bio ? document.bio : ""}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-6 px-3 mt-8">
          {document.links && <LinkList links={document.links} />}
        </div>
      </div>
    </div>
  );
};

export default User;
