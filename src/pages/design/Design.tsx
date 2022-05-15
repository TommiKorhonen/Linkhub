import React from "react";
import Preview from "../../components/preview/Preview";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useDocument } from "../../hooks/useDocument";
import LinkEdit from "./LinkEdit";
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
    <main className="w-full sm:ml-72 grid  grid-cols-1 lg:grid-cols-2 max-h-screen">
      <section className="max-w-[672px] mx-auto mt-8 lg:pr-8 overflow-scroll">
        <h1 className="font-semibold my-12 mb-4 text-2xl">Profile</h1>
        <ProfileEdit />
        <h1 className="font-semibold my-12 mb-4 text-2xl">Theme</h1>
        <ThemeEdit {...document} />
        <h1 className="font-semibold my-12 mb-4 text-2xl">Button style</h1>
        <LinkEdit {...document} />
      </section>
      <section className="lg:flex items-center justify-center h-full hidden">
        <Preview {...document} />
      </section>
    </main>
  );
};

export default Design;
