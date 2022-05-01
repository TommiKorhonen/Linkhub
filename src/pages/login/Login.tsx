import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import { useLogin } from "../../hooks/useLogin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { error, login, isPending } = useLogin();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login(email, password);
  };
  return (
    <>
      <Navbar />
      <main className="h-screen">
        <form className="auth-form w-full" onSubmit={handleSubmit}>
          <h2 className="font-semibold text-3xl">Login</h2>
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
          <button className="px-6 w-full mt-4 py-3 text-white rounded-md bg-violet-500">
            Login
          </button>
          {error && <p className="error">{error}</p>}
        </form>
      </main>
    </>
  );
};

export default Login;
