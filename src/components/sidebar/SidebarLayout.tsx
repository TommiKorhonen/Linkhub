import React from "react";
import { Link, Outlet } from "react-router-dom";
import { StyledLayout } from "./Layout.styled";
import MobileNav from "./MobileNav";
import Sidebar from "./Sidebar";

const SidebarLayout = () => {
  return (
    <StyledLayout className="sm:flex">
      <MobileNav />
      <Sidebar />
      <Outlet />
    </StyledLayout>
  );
};

export default SidebarLayout;
