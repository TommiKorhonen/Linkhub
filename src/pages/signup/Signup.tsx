import { async } from "@firebase/util";
import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { useCollection } from "../../hooks/useCollection";
import { useSignup } from "../../hooks/useSignup";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [message, setMessage] = useState("");
  const { error, signup } = useSignup();
  const { documents } = useCollection("users");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage("");
    const docIds = await documents.map((doc: any) => doc.id);
    if (docIds.includes(displayName)) {
      return setMessage("Username already exists");
    }
    signup(email, password, displayName);
  };
  return (
    <>
      <Navbar />
      <main className="h-screen flex p-4 items-center">
        <form
          className="auth-form w-full overflow-hidden"
          onSubmit={handleSubmit}
        >
          <h2 className="font-semibold text-3xl">Signup</h2>
          <label>
            <span>Email:</span>
            <input
              required
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </label>
          <label>
            <span>Password:</span>
            <input
              required
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </label>
          <label>
            <span>
              Username: {message && <p className="error">{message}</p>}
            </span>
            <input
              required
              type="text"
              onChange={(e) => setDisplayName(e.target.value)}
              value={displayName}
            />
            <span className="mt-2">linkhub-3a46d.web.app/{displayName}</span>
          </label>
          <button className="px-6 w-full mt-4 py-3 text-white  rounded-md bg-violet-500">
            Create account
          </button>
          {error && <p className="error">{error}</p>}
        </form>
      </main>
    </>
  );
};

export default Signup;
