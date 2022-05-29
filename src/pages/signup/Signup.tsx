import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import { Button } from "../../components/styles/Button.styled";
import { Error } from "../../components/styles/Error.styled";
import { Form } from "../../components/styles/Form.styled";
import { useCollection } from "../../hooks/useCollection";
import { useSignup } from "../../hooks/useSignup";
import { StyledSignup } from "./Signup.styled";

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
    if (displayName.length > 15) {
      return setMessage("Username length must be between 1-15 characters");
    }
    if (docIds.includes(displayName)) {
      return setMessage("Username already exists");
    }
    signup(email, password, displayName);
  };
  return (
    <>
      <Navbar />
      <StyledSignup>
        <Form onSubmit={handleSubmit}>
          <h2>Signup</h2>
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
              Username: {message && <Error className="error">{message}</Error>}
            </span>
            <input
              required
              type="text"
              onChange={(e) => setDisplayName(e.target.value)}
              value={displayName}
            />
            <span>linkhub-3a46d.web.app/{displayName}</span>
          </label>
          <Button>Create account</Button>
          {error && <Error>{error}</Error>}
        </Form>
      </StyledSignup>
    </>
  );
};

export default Signup;
