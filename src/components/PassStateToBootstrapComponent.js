import React from "react";
import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const PassStateToBootstrapComponent = () => {
  const [show, setShow] = useState(false);
  return (
    <Card className="custom-card">
      <Card.Body>
        <Alert show={show} varient="success">
          <Alert.Heading>My Alert</Alert.Heading>
          <p>Hello, You have clicked the alert button.</p>
          <hr />
          <Button onClick={() => setShow(false)}>Close me</Button>
        </Alert>
        {!show && (
          <Button onClick={() => setShow(true)} variant="outline-success">
            Click Me
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default PassStateToBootstrapComponent;
