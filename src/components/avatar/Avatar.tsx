import React from "react";
import UserImg from "../../assets/user.png";
interface IAvatarProps {
  src: string | null;
  w: number;
  h: number;
}

const Avatar: React.FC<IAvatarProps> = ({ src, w, h }) => {
  return (
    <div className={`overflow-hidden`} style={{ width: w, height: h }}>
      <img
        src={src ? src : UserImg}
        alt="user avatar"
        className="rounded-[50%] w-full h-full"
      />
    </div>
  );
};

export default Avatar;
