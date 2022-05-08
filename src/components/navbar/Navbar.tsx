import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full fixed top-0 bg-none py-4 px-8">
      <ul className="flex items-center  mx-auto w-[1000px]">
        <li className="mr-auto">
          <Link to="/" className="font-semibold text-lg">
            Linkhub
          </Link>
        </li>
        <li className="flex gap-4">
          <Link
            to="/login"
            className="border border-violet-500 border-solid text-violet-500 p-2 px-6"
          >
            Login
          </Link>
          <Link to="/signup" className="bg-violet-500 text-white p-2 px-6">
            Sign up
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
