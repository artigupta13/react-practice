import React, { useState } from "react";
import AnotherComponent from "./AnotherComponent";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Memo() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(["data1", "data2"]);

  const incrementMe = () => {
    setCount((pre) => pre + 1);
  };

  return (
    <Card className="custom-card">
      <Card.Body>
        <Card.Title>React Memo</Card.Title>
        Count: {count} &nbsp;
        <Button variant="warning" onClick={incrementMe}>
          +
        </Button>
        <AnotherComponent data={data} />
      </Card.Body>
    </Card>
  );
}

export default Memo;
