import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import { Button } from "../../components/styles/Button.styled";
import { Error } from "../../components/styles/Error.styled";
import { Form } from "../../components/styles/Form.styled";
import { useLogin } from "../../hooks/useLogin";
import { StyledLogin } from "./Login.styled";
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
      <StyledLogin>
        <Form onSubmit={handleSubmit}>
          <h2>Login</h2>
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
          <Button>Login</Button>
          {error && <Error>{error}</Error>}
        </Form>
      </StyledLogin>
    </>
  );
};

export default Login;
