import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../modal/Modal";
import Preview from "../preview/Preview";

//Hooks
import { useAuthContext } from "../../hooks/useAuthContext";
import { useDocument } from "../../hooks/useDocument";
import { useLogout } from "../../hooks/useLogout";

//Heroicons
import { XCircleIcon } from "@heroicons/react/outline";
import { DocumentData } from "firebase/firestore";
import { useCollection } from "../../hooks/useCollection";

const MobileNav = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const { document, error } = useDocument("users", user?.displayName);
  const { documents } = useCollection("links");

  // Users personal link document
  const linkDoc =
    documents &&
    documents.filter((link: DocumentData) => link.createdBy.id === user?.uid);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="flex items-center justify-between flex-wrap bg-purple-500 p-4 w-full sm:hidden">
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
          <li>
            <button onClick={() => setIsOpen(true)}>Preview</button>
          </li>
        </ul>
        <div>
          <button className="text-white" onClick={logout}>
            Logout
          </button>
        </div>
      </nav>
      <div className="sm:hidden">
        {isOpen && (
          <Modal>
            <section className="flex h-full items-center justify-center">
              <XCircleIcon
                className="absolute cursor-pointer text-black bg-white p-2 rounded-full top-[90%] h-16 w-16"
                onClick={() => setIsOpen(false)}
              />
              <Preview {...document} links={linkDoc} />
            </section>
          </Modal>
        )}
      </div>
    </>
  );
};

export default MobileNav;
