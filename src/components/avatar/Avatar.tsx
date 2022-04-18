import React from "react";

const Avatar: React.FC<{ src: string }> = ({ src }) => {
  return (
    <div className="w-[96px] h-[96px] overflow-hidden">
      <img
        src={src}
        alt="user avatar"
        className="rounded-[50%] w-full h-full"
      />
    </div>
  );
};

export default Avatar;
