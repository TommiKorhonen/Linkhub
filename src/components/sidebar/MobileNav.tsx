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
import styled from "styled-components";

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
      <StyledNav className="flex items-center justify-between flex-wrap bg-purple-500 p-4 w-full sm:hidden">
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
      </StyledNav>
      <ModalContainer>
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
      </ModalContainer>
    </>
  );
};

export default MobileNav;

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  background-color: ${({ theme }) => theme.colors.themeColor};
  padding: 1rem;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.sm}) {
    display: none;
  }

  ul {
    display: flex;
    gap: 1rem;
    a {
      color: white;
    }
  }
  button {
    border: none;
    background: transparent;
    color: white;
    font-size: 100%;
  }
`;

const ModalContainer = styled.div`
  section {
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;

    svg {
      position: absolute;
      cursor: pointer;
      color: black;
      background-color: white;
      padding: 0.5rem;
      border-radius: 9999px;
      top: 90%;
      height: 4rem;
      width: 4rem;
    }
  }
  @media (min-width: ${({ theme }) => theme.sm}) {
    display: none;
  }
`;
