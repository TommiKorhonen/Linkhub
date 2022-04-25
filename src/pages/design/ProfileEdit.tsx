import React from "react";
import Avatar from "../../components/avatar/Avatar";
import UserImg from "../../assets/user.png";
const ProfileEdit = () => {
  return (
    <div className="p-4 bg-white rounded-md">
      <div className="flex gap-4">
        <Avatar src={UserImg} h={96} w={96} />
        <div className="flex gap-4 items-center">
          <button className="bg-violet-500 px-6 py-4 font-semibold rounded-md text-white">
            Pick an image
          </button>
          <button className="bg-gray-500 px-6 py-4 font-semibold rounded-md text-white">
            Set Default
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileEdit;
