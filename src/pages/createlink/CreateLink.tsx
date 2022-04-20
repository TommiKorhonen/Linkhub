import React, { useState } from "react";
import { ArrowLeftIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
const CreateLink = () => {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage("");
    console.log(title, url);
    if (title && url) {
      setTitle("");
      setUrl("");
      setMessage("Link added!");
      setTimeout(() => {
        setMessage("");
      }, 2000);
    }
  };
  return (
    <form className="auth-form relative" onSubmit={handleSubmit}>
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
  );
};

export default CreateLink;
