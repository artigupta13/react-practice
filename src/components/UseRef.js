import { useState, useEffect, useRef } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";

function UseRef() {
  const [name, setName] = useState("");
  const renderCount = useRef(0);
  useEffect(() => {
    console.log(renderCount);
    renderCount.current = renderCount.current + 1;
  });
  return (
    <Card className="custom-card">
      <Card.Body>
        <Card.Title>useRef Example</Card.Title>
        <FloatingLabel
          controlId="floatingInput"
          label="type here"
          className="mb-3"
        >
          <Form.Control
            type="text"
            placeholder="type here"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FloatingLabel>

        <Card.Text> I have been rendered {renderCount.current} times</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default UseRef;
