import React from "react";
import Preview from "../../components/preview/Preview";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useDocument } from "../../hooks/useDocument";
import ProfileEdit from "./ProfileEdit";

const Design = () => {
  const { user } = useAuthContext();
  const { document, error } = useDocument("users", user?.displayName);

  if (error) {
    return (
      <div className="text-center h-screen flex items-center">
        <h1 className="mx-auto error text-7xl">{error}</h1>
      </div>
    );
  }
  if (!document) {
    return (
      <div className="text-center h-screen flex items-center">
        <h1 className="mx-auto text-7xl">Loading...</h1>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-2 min-h-screen">
      <div className="max-w-[672px] mx-auto mt-8">
        <h3 className="font-semibold my-12 mb-4 text-2xl">Profile</h3>
        <ProfileEdit />
      </div>
      <div className="flex items-center justify-center h-full">
        <Preview {...document} />
      </div>
    </div>
  );
};

export default Design;