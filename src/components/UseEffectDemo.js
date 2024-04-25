import React, { useEffect, useState } from "react";
import axios from "axios";

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
    <div className="App">
      <h3>UseEffectDemo</h3>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <p>
        {post.title},{post.body}
      </p>
    </div>
  );
}

export default UseEffectDemo;
