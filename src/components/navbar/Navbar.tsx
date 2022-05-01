import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex bg-red-50 w-full py-4 px-8">
      <div className="mr-auto">
        <h2 className="font-semibold">Linkhub</h2>
      </div>
      <div className="flex gap-4">
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign up</Link>
      </div>
    </nav>
  );
};

export default Navbar;
