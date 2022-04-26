import React from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useDocument } from "../../hooks/useDocument";
import UserImg from "../../assets/user.png";
interface IAvatarProps {
  src?: string;
  w: number;
  h: number;
}

const Avatar: React.FC<IAvatarProps> = ({ src, w, h }) => {
  const { user } = useAuthContext();
  const { document, error } = useDocument("users", user?.displayName);
  if (!document) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className={`overflow-hidden`} style={{ width: w, height: h }}>
      <img
        src={document.photoURL ? document.photoURL : UserImg}
        alt="user avatar"
        className="rounded-[50%] w-full h-full"
      />
    </div>
  );
};

export default Avatar;
