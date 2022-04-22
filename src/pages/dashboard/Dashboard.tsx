import React from "react";
import Preview from "./Preview";
import { TrashIcon } from "@heroicons/react/solid";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useDocument } from "../../hooks/useDocument";
const Dashboard = () => {
  const { user } = useAuthContext();
  const { document, error } = useDocument("users", user?.displayName);
  console.log(document);
  return (
    <div className="grid grid-cols-2 min-h-screen">
      <div className="flex flex-col p-8">
        <h2 className="font-semibold text-3xl">Links</h2>
        <div className="border border-solid border-black max-w-96 p-4 mt-4 bg-white shadow-md rounded-md">
          <h2>Link title</h2>
          <div className="flex items-center justify-between">
            <p>url</p>
            <TrashIcon className="h-6 w-6 text-gray-500" />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center h-full">
        <Preview {...document} />
      </div>
    </div>
  );
};

export default Dashboard;
