import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Stack from "react-bootstrap/Stack";
function RefDemo() {
  const inputValue = React.createRef();
  function HandleSubmit(e) {
    e.preventDefault();
    alert(`Input value: ${inputValue.current.value}`);
  }
  return (
    <Card className="custom-card">
      <Card.Body>
        <Card.Title>use of createRef</Card.Title>
        <Form onSubmit={HandleSubmit}>
          <Stack gap={2} direction="horizontal">
            <Form.Control type="text" ref={inputValue} />
            <Button variant="primary" type="submit">
              submit
            </Button>
          </Stack>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default RefDemo;
