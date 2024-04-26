import React, { useEffect, useState } from "react";
import axios from "axios";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Stack from "react-bootstrap/Stack";

function UseEffectDemo() {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        console.log("jsonplaceholder", res);
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <Card className="custom-card">
      <Card.Body>
        <Card.Title>UseEffectDemo</Card.Title>
        <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
        <p>
          {post.title},{post.body}
        </p>
      </Card.Body>
    </Card>
  );
}

export default UseEffectDemo;
