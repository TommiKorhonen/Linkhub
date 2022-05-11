import React from "react";
import Preview, { ILink } from "../../components/preview/Preview";
//Heroicons
import { LinkIcon } from "@heroicons/react/solid";
import { TrashIcon } from "@heroicons/react/solid";

//Hooks imports
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
    <main className="ml-72 grid grid-cols-1 lg:grid-cols-2 w-full min-h-screen">
      <section className="flex flex-col p-8">
        <h2 className="font-semibold text-3xl">Links</h2>
        <button
          className="w-80 flex items-center justify-center text-violet-500 bg-white py-1 border border-gray-200"
          onClick={() =>
            navigator.clipboard.writeText(
              `https://linkhub-3a46d.web.app/${user?.displayName}`
            )
          }
        >
          <LinkIcon className="h-6 w-6" />
          <span>{`linkhub/${user?.displayName}`}</span>
        </button>
        <ul>
          {document.links.length > 0 &&
            document.links.map((link: ILink) => (
              <li
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
              </li>
            ))}
        </ul>
      </section>
      <section className="lg:flex hidden items-center justify-center h-full">
        <Preview {...document} />
      </section>
    </main>
  );
};

export default Dashboard;
