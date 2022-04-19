import React from "react";

interface IAvatarProps {
  src: string;
  w: number;
  h: number;
}

const Avatar: React.FC<IAvatarProps> = ({ src, w, h }) => {
  return (
    <div className={`overflow-hidden`} style={{ width: w, height: h }}>
      <img
        src={src}
        alt="user avatar"
        className="rounded-[50%] w-full h-full"
      />
    </div>
  );
};

export default Avatar;
