import React, { useEffect, useReducer, useState } from "react";
import Axios from "axios";
import { Button, Card } from "react-bootstrap";
import PostForm from "./PostForm";

const Landing = () => {
  const [people, setPeople] = useState([]);
  const [five, setFive] = useState([]);

  useEffect(() => {
    // findPeople();

    Axios.get("/api/people")
      .then((res) => {
        setPeople(res.data);
        getRandomSample(res.data);
      })

      .catch(console.log);
  }, []);

  const getRandomSample = (array) => {
    let randomFive = [];
    for (let i = 0; i < 5; i++) {
      randomFive.push(array[Math.floor(Math.random() * array.length)]);
    }
    setFive(randomFive);
  };

  const renderPeople = () => {
    return five.map((p) => (
      <Card key={p.id} style={{ width: "10rem" }}>
        <Card.Body>
          <Card.Img variant="top" src={p.avatar} />
          <Card.Title>{p.name}</Card.Title>
          <Card.Text>From: {p.location}</Card.Text>
          <Card.Text>Age: {p.age}</Card.Text>
          <Button variant="success">Add As friend</Button>
        </Card.Body>
      </Card>
    ));
  };

  return (
    <div>
      <h1>Welcome</h1>
      <div>
        {renderPeople()}
        <PostForm />
      </div>
    </div>
  );
};

export default Landing;
