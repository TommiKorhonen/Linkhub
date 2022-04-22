import React from "react";
import Avatar from "../../components/avatar/Avatar";
import UserImg from "../../assets/user.png";
import { useCollection } from "../../hooks/useCollection";
import { useDocument } from "../../hooks/useDocument";
import { useParams } from "react-router-dom";

const User = () => {
  let { id } = useParams();
  const { document, error } = useDocument("users", id);
  console.log(document);

  if (error) {
    return <div className="error">{error}</div>;
  }
  if (!document) {
    return <div className="loading">Loading...</div>;
  }
  return (
    <div className="mx-auto h-full flex flex-col items-center justify-center bg-[#E3D9D9]">
      <div className="max-w-[680px] h-screen w-full">
        {/* Avatar component */}
        <div className="flex flex-col items-center gap-4 mb-8 mt-3">
          <Avatar src={UserImg} h={96} w={96} />
          <div>
            <p>@{document.displayName}</p>
          </div>
        </div>
        <div className="bg-gray-200 p-4 w-full flex items-center justify-center rounded-3xl hover:invert">
          <a>Perkele</a>
        </div>
        {/* links */}
      </div>
    </div>
  );
};

export default User;
