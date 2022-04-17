import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex bg-red-50 w-full py-4 px-8">
      <div className="mr-auto">
        <p className="font-semibold">Linkhub</p>
      </div>
      <div className="flex gap-4">
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign up</Link>
        <button>Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
