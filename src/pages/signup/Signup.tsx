import React, { useState } from "react";
import { useSignup } from "../../hooks/useSignup";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const { error, signup } = useSignup();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signup(email, password, displayName);
  };
  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h2 className="font-semibold text-3xl">Signup</h2>
      <label className="block my-[24px] mx-auto">
        <span>Email:</span>
        <input
          required
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </label>
      <label className="block my-[24px] mx-auto">
        <span className="block">Password:</span>
        <input
          required
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </label>
      <label className="block my-[24px] mx-auto">
        <span className="block">Username:</span>
        <input
          required
          type="text"
          onChange={(e) => setDisplayName(e.target.value)}
          value={displayName}
        />
      </label>
      <button className="px-6 w-full mt-4 py-3 text-white  rounded-md bg-violet-500">
        Create account
      </button>
      {error && <p className="error">{error}</p>}
    </form>
  );
};

export default Signup;
