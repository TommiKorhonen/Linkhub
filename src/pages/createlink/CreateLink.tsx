import React, { useState } from "react";
import { ArrowLeftIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";

// Hooks
import { useFirestore } from "../../hooks/useFirestore";
import { useAuthContext } from "../../hooks/useAuthContext";
import { StyledCreate } from "./CreateLink.styled";
import { Form } from "../../components/styles/Form.styled";
import { Container } from "../../components/styles/Container.styled";
import { Button } from "../../components/styles/Button.styled";
import { Success } from "../../components/styles/Success.styled";

const CreateLink = () => {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [message, setMessage] = useState("");

  const { user } = useAuthContext();
  const { addDocument } = useFirestore("links");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage("");
    const link = {
      createdBy: {
        id: user?.uid,
      },
      title,
      url,
    };
    if (title && url && user) {
      await addDocument(link);
      setTitle("");
      setUrl("");
      setMessage("Link added!");
      setTimeout(() => {
        setMessage("");
      }, 2000);
    }
  };

  return (
    <StyledCreate>
      <Container>
        <Form onSubmit={handleSubmit}>
          <Link to="/dashboard">
            <ArrowLeftIcon />
          </Link>
          <h2>Create link</h2>
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
          <Button>Add new link</Button>
          {message && <Success>{message}</Success>}
        </Form>
      </Container>
    </StyledCreate>
  );
};

export default CreateLink;
