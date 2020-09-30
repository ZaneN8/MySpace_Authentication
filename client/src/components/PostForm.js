import Axios from "axios";
import React, { useState } from "react";
import { Form } from "react-bootstrap";

const PostForm = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = () => {};
  return (
    <Form onSubmit={handleSubmit}>
      <br />
      <Form.Group>What is on your mind?</Form.Group>
      <Form.Control
        placeholder="Title"
        label="Title"
        name="title"
        required
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <Form.Control
        placeholder="Body"
        label="Body"
        name="body"
        required
        onChange={(e) => setBody(e.target.value)}
        value={body}
      />
    </Form>
  );
};

export default PostForm;
