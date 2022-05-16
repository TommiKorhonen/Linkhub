import React from "react";
import Avatar from "../avatar/Avatar";
import { Link, NavLink } from "react-router-dom";
//Hooks
import { useLogout } from "../../hooks/useLogout";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useDocument } from "../../hooks/useDocument";

// Heroicons imports
import { PlusCircleIcon } from "@heroicons/react/solid";
import { TemplateIcon } from "@heroicons/react/solid";
import { PencilAltIcon } from "@heroicons/react/solid";
import { LogoutIcon } from "@heroicons/react/solid";

const Sidebar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const { document, error } = useDocument("users", user?.displayName);
  return (
    <nav className="sm:flex flex-col fixed items-center bg-violet-500 h-full w-[200px] hidden">
      <div className="p-4 gap-2 flex flex-col items-center justify-center">
        {document && <Avatar src={document.photoURL} h={96} w={96} />}
        <h2 className="font-bold text-center text-white mb-8">
          Linkhub/{user?.displayName}
        </h2>
      </div>
      <div className="flex flex-col items-center justify-between h-full">
        <div className="flex flex-col gap-4">
          <NavLink
            to="/create"
            className="flex items-center gap-2 py-2 px-4 rounded-md hover:bg-gray-500"
          >
            <PlusCircleIcon className="h-6 w-6 text-gray-200 " />
            <span className="text-white font-medium">Create</span>
          </NavLink>
          <NavLink
            to="/dashboard"
            className="flex items-center gap-2 py-2 px-4 rounded-md hover:bg-gray-500"
          >
            <TemplateIcon className="h-6 w-6 text-gray-200" />
            <span className="text-white font-medium">Dashboard</span>
          </NavLink>
          <NavLink
            to="/design"
            className="flex items-center gap-2 py-2 px-4 rounded-md hover:bg-gray-500"
          >
            <PencilAltIcon className="h-6 w-6 text-gray-200" />
            <span className="text-white font-medium">Design</span>
          </NavLink>
        </div>
        <button
          onClick={logout}
          className="flex items-center mb-4 gap-2 py-2 px-4 rounded-md hover:bg-gray-500"
        >
          <LogoutIcon className="h-6 w-6 text-gray-200" />
          <span className="text-white font-medium">Logout</span>
        </button>
      </div>
    </nav>
  );
};

export default Sidebar;
