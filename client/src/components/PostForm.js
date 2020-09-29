import React from "react";
import { Form } from "react-bootstrap";

const PostForm = () => {
  const handleSubmit = () => {
    // DO SOMETHING
  };
  return (
    <Form onSubmit={handleSubmit}>
      <br />
      <Form.Group>What is on your mind?</Form.Group>
      <Form.Control placeholder="Type Here" />
    </Form>
  );
};

export default PostForm;
