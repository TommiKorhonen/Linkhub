import React from "react";
import Avatar from "../avatar/Avatar";
import UserImg from "../../assets/user.png";
import { Link } from "react-router-dom";
import { useLogout } from "../../hooks/useLogout";

import { DocumentData } from "firebase/firestore";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useDocument } from "../../hooks/useDocument";

interface ISidebarProps {
  photoURL: string;
}

const Sidebar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const { document, error } = useDocument("users", user?.displayName);
  return (
    <nav className="flex flex-col items-center bg-violet-500 min-h-screen w-[200px] ">
      <div className="p-4">
        {document && <Avatar src={document.photoURL} h={96} w={96} />}
      </div>
      <div className="flex flex-col items-center mb-auto">
        <h2 className="font-semibold ">Linkhub</h2>
        <Link to="/create">Create</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/design">Design</Link>
      </div>
      <h2 onClick={logout} className="cursor-pointer">
        Logout
      </h2>
    </nav>
  );
};

export default Sidebar;
