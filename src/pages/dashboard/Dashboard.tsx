import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Preview from "./Preview";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-2 min-h-screen">
      <div className="flex p-8">
        <h2 className="font-semibold text-3xl">Perkele</h2>
      </div>
      <div className="flex items-center justify-center h-full">
        <Preview />
      </div>
    </div>
  );
};

export default Dashboard;
