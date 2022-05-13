import React from "react";
import { Link, Outlet } from "react-router-dom";
import MobileNav from "./MobileNav";
import Sidebar from "./Sidebar";

const SidebarLayout = () => {
  return (
    <div className="sm:flex">
      <MobileNav />
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default SidebarLayout;
