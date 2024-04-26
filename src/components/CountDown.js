import { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";

function CountDown() {
  const [count, setCount] = useState(0);
  const [timer, setTimer] = useState(0);
  const startCountdown = () => {
    setTimer(
      setInterval(() => {
        setCount((count) => count + 1);
      }, 100)
    );
  };

  const stopCountdown = () => {
    console.log("setInterval ID= ", timer);
    clearInterval(timer);
  };

  return (
    <Card className="custom-card">
      <Card.Body>
        <Card.Title> setInterval example</Card.Title>
        <Stack direction="horizontal" gap={3}>
          <Button id="bt1" onClick={startCountdown}>
            Start me
          </Button>
          <Button id="bt2" onClick={stopCountdown}>
            Stop me
          </Button>
          <strong>{count}</strong>
        </Stack>
      </Card.Body>
    </Card>
  );
}

export default CountDown;
