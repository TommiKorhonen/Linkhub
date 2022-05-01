import React from "react";
import Avatar from "../avatar/Avatar";
import UserImg from "../../assets/user.png";
import { Link } from "react-router-dom";
import { useLogout } from "../../hooks/useLogout";
const Sidebar = () => {
  const { logout } = useLogout();
  return (
    <div className="flex flex-col items-center bg-violet-500 min-h-screen w-[100px] min-w-[100px] relative right-0">
      <div className="flex flex-col items-center mb-auto">
        <h2 className="font-semibold ">Linkhub</h2>
        <Link to="/create">Create</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/design">Design</Link>
      </div>
      <h2 onClick={logout} className="cursor-pointer">
        Logout
      </h2>
      <div className="p-4">
        <Avatar src={UserImg} h={36} w={36} />
      </div>
    </div>
  );
};

export default Sidebar;
