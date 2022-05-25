import React from "react";
import UserImg from "../../assets/user.png";
import { StyledAvatar } from "./Avatar.styled";
interface IAvatarProps {
  src: string | null;
  h: number;
  w: number;
}

const Avatar: React.FC<IAvatarProps> = ({ src, h, w }) => {
  return (
    <StyledAvatar
      src={src ? src : UserImg}
      alt="user avatar"
      width={w}
      height={h}
    />
  );
};

export default Avatar;
