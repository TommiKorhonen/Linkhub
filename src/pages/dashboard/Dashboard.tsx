import React from "react";
import Preview, { ILink } from "../../components/preview/Preview";
import { TrashIcon } from "@heroicons/react/solid";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useDocument } from "../../hooks/useDocument";
import { useFirestore } from "../../hooks/useFirestore";

const Dashboard = () => {
  const { updateDocument } = useFirestore("users");
  const { user } = useAuthContext();
  const { document, error } = useDocument("users", user?.displayName);
  console.log(document);

  const removeLink = async (linkId: string) => {
    if (linkId && user && user.displayName === document.id) {
      await updateDocument(document.id, {
        links: document.links.filter((item: ILink) => item.id !== linkId),
      });
    }
  };

  if (!document) {
    return (
      <div className="w-full h-screen flex items-center">
        <h1 className="mx-auto text-7xl">Loading...</h1>
      </div>
    );
  }
  return (
    <main className="w-full">
      <section className="grid grid-cols-2 w-full min-h-screen">
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
                  <TrashIcon
                    className="h-6 w-6 text-gray-500 cursor-pointer"
                    onClick={() => removeLink(link.id)}
                  />
                </div>
              </div>
            ))}
        </div>
        <div className="flex items-center justify-center h-full">
          <Preview {...document} />
        </div>
      </section>
    </main>
  );
};

export default Dashboard;
