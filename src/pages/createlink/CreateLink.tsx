import React, { useState } from "react";
import { ArrowLeftIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import { useFirestore } from "../../hooks/useFirestore";
import { useDocument } from "../../hooks/useDocument";
import { useAuthContext } from "../../hooks/useAuthContext";
import { v4 as uuidv4 } from "uuid";
import Sidebar from "../../components/sidebar/Sidebar";
const CreateLink = () => {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [message, setMessage] = useState("");

  const { user } = useAuthContext();
  const { document, error } = useDocument("users", user?.displayName);
  const { updateDocument } = useFirestore("users");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage("");
    const link = {
      title,
      url,
      id: uuidv4(),
    };

    if (title && url && user) {
      await updateDocument(document.id, {
        links: [...document.links, link],
      });
      setTitle("");
      setUrl("");
      setMessage("Link added!");
      setTimeout(() => {
        setMessage("");
      }, 2000);
    }
  };

  return (
    <main className="flex h-screen">
      <Sidebar />
      <form
        className="auth-form w-full h-[450px] relative"
        onSubmit={handleSubmit}
      >
        <Link to="/dashboard">
          <ArrowLeftIcon className=" h-6 w w-6 absolute top-0 left-0 text-gray-600 bg-slate-200 p-1" />
        </Link>
        <h2 className="font-semibold text-3xl">Create link</h2>
        <label>
          <span>Link Title: </span>
          <input
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label>
          <span>URL:</span>
          <input
            type="text"
            required
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </label>
        <button className="px-6 w-full mt-4 py-3 text-white  rounded-md bg-violet-500">
          Add new link
        </button>
        {message && (
          <p className="text-green-900 bg-lime-200 border border-solid border-green-900 rounded-sm p-2 my-3">
            {message}
          </p>
        )}
      </form>
    </main>
  );
};

export default CreateLink;
