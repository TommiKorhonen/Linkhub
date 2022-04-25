import React from "react";
import Preview, { ILink } from "./Preview";
import { TrashIcon } from "@heroicons/react/solid";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useDocument } from "../../hooks/useDocument";

// firebase imports
import { doc, updateDoc, deleteField } from "firebase/firestore";

const Dashboard = () => {
  const { user } = useAuthContext();
  const { document, error } = useDocument("users", user?.displayName);
  console.log(document);

  const removeLink = () => {};

  if (!document) {
    return (
      <div className="text-center h-screen flex items-center">
        <h1 className="mx-auto text-7xl">Loading...</h1>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-2 min-h-screen">
      <div className="flex flex-col p-8">
        <h2 className="font-semibold text-3xl">Links</h2>
        {document.links.length > 0 &&
          document.links.map((link: ILink) => (
            <div
              className="border border-solid border-black w-96  p-4 mt-4 bg-white shadow-md rounded-md"
              key={link.id}
            >
              <h2>{link.title}</h2>
              <div className="flex items-center justify-between">
                <p>{link.url}</p>
                <TrashIcon className="h-6 w-6 text-gray-500" />
              </div>
            </div>
          ))}
      </div>
      <div className="flex items-center justify-center h-full">
        <Preview {...document} />
      </div>
    </div>
  );
};

export default Dashboard;
