import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Stack from "react-bootstrap/Stack";
export function Child({ setCount }) {
  return (
    <Card.Text>
      <p>Child</p>
      <Stack direction="horizontal" gap="1">
        <Button varient="outline-primary" onClick={() => setCount(1)}>
          1
        </Button>
        <Button varient="outline-primary" onClick={() => setCount(2)}>
          2
        </Button>
        <Button varient="outline-primary" onClick={() => setCount(3)}>
          3
        </Button>
      </Stack>
    </Card.Text>
  );
}

export function Parent() {
  const [count, setCount] = useState(0);
  return (
    <Card className="custom-card">
      <Card.Body>
        <Card.Title>Pass props from child to Parent</Card.Title>
        <Card.Text>
          <p>Parent</p>
          <p>count: {count}</p>
          <Child setCount={setCount} />
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
