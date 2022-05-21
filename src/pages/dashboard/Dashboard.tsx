import React, { useState } from "react";
import Preview, { ILink } from "../../components/preview/Preview";
//Heroicons
import { LinkIcon } from "@heroicons/react/solid";
import { TrashIcon } from "@heroicons/react/solid";

//Hooks imports
import { useAuthContext } from "../../hooks/useAuthContext";
import { useDocument } from "../../hooks/useDocument";
import { useFirestore } from "../../hooks/useFirestore";
import { useCollection } from "../../hooks/useCollection";
import { DocumentData } from "firebase/firestore";

const Dashboard = () => {
  const { user } = useAuthContext();
  const { document, error } = useDocument("users", user?.displayName);
  const [copyMessage, setCopyMessage] = useState("");
  const { documents } = useCollection("links");
  const { deleteDocument } = useFirestore("links");
  // Users personal link document
  const linkDoc =
    documents &&
    documents.filter((link: DocumentData) => link.createdBy.id === user?.uid);

  const removeLink = async (linkId: string) => {
    deleteDocument(linkId);
  };
  const copyToClipboard = () => {
    setCopyMessage("");
    const url = navigator.clipboard.writeText(
      `https://linkhub-3a46d.web.app/${user?.displayName}`
    );
    setCopyMessage("Url copied!");
    return setTimeout(() => {
      setCopyMessage("");
    }, 3000);
  };
  if (!document) {
    return (
      <div className="w-full h-screen flex items-center">
        <h1 className="mx-auto text-7xl">Loading...</h1>
      </div>
    );
  }
  return (
    <main className="md:ml-72 sm:ml-44 grid grid-cols-1 lg:grid-cols-2 w-full min-h-screen">
      <section className="flex flex-col mx-auto p-4 sm:mx-0 sm:p-8">
        <h2 className="font-semibold text-3xl">Links</h2>
        <div className="flex items-center gap-2">
          <button
            className="w-80 flex items-center justify-center text-violet-500 bg-white py-1 border border-gray-200"
            onClick={() => copyToClipboard()}
          >
            <LinkIcon className="h-6 w-6" />
            <span>{`linkhub/${user?.displayName}`}</span>
          </button>
          {copyMessage && <p className="bg-gray-200 p-2 ">{copyMessage}</p>}
        </div>
        <ul>
          {linkDoc &&
            linkDoc.length > 0 &&
            linkDoc.map((link: ILink) => (
              <li
                className="border border-solid border-black max-w-[400px] sm:w-96 p-4 mt-4 bg-white shadow-md rounded-md"
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
        <Preview {...document} links={linkDoc} />
      </section>
    </main>
  );
};

export default Dashboard;
