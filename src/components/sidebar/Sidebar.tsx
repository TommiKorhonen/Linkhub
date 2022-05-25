import Avatar from "../avatar/Avatar";
import { NavLink } from "react-router-dom";
//Hooks
import { useLogout } from "../../hooks/useLogout";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useDocument } from "../../hooks/useDocument";

// Heroicons imports
import { PlusCircleIcon } from "@heroicons/react/solid";
import { TemplateIcon } from "@heroicons/react/solid";
import { PencilAltIcon } from "@heroicons/react/solid";
import { LogoutIcon } from "@heroicons/react/solid";
import { NavList, StyledSidebar, UserContainer } from "./Sidebar.styled";

const Sidebar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const { document, error } = useDocument("users", user?.displayName);
  return (
    <StyledSidebar>
      <UserContainer>
        {document && <Avatar src={document.photoURL} h={96} w={96} />}
        <h3>Linkhub/{user?.displayName}</h3>
      </UserContainer>
      <NavList>
        <div>
          <NavLink to="/create">
            <PlusCircleIcon />
            <span>Create</span>
          </NavLink>
          <NavLink to="/dashboard">
            <TemplateIcon />
            <span>Dashboard</span>
          </NavLink>
          <NavLink to="/design">
            <PencilAltIcon />
            <span>Design</span>
          </NavLink>
        </div>
        <button
          onClick={logout}
          className="flex items-center mb-4 gap-2 py-2 px-4 rounded-md hover:bg-gray-500"
        >
          <LogoutIcon className="h-6 w-6 text-gray-200" />
          <span className="text-white font-medium">Logout</span>
        </button>
      </NavList>
    </StyledSidebar>
  );
};

export default Sidebar;
