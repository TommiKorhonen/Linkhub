import React from "react";
import { Link } from "react-router-dom";
import { useLogout } from "../../hooks/useLogout";

const MobileNav = () => {
  const { logout } = useLogout();
  return (
    <nav className="flex items-center justify-between bg-purple-500 p-4 w-full sm:hidden">
      <ul className="flex gap-4 text-white">
        <li>
          <Link to="/create">Create</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/design">Design</Link>
        </li>
      </ul>
      <div>
        <button className="text-white" onClick={logout}>
          Logout
        </button>
      </div>
    </nav>
  );
};

export default MobileNav;
