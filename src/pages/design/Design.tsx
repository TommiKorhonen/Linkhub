import React from "react";
import Preview from "../../components/preview/Preview";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useDocument } from "../../hooks/useDocument";
import ProfileEdit from "./ProfileEdit";
import ThemeEdit from "./ThemeEdit";

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
      <div className="w-full h-screen flex items-center">
        <h1 className="mx-auto text-7xl">Loading...</h1>
      </div>
    );
  }
  return (
    <main className="w-full ml-72">
      <section className="grid w-full grid-cols-2 min-h-screen">
        <div className="max-w-[672px] mx-auto mt-8">
          <h3 className="font-semibold my-12 mb-4 text-2xl">Profile</h3>
          <ProfileEdit />
          <h3 className="font-semibold my-12 mb-4 text-2xl">Theme</h3>
          <ThemeEdit {...document} />
        </div>
        <div className="flex items-center justify-center h-full">
          <Preview {...document} />
        </div>
      </section>
    </main>
  );
};

export default Design;
