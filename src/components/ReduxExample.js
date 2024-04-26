import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../features/counter/counterSlice";
import { counterSlice } from "../features/counter/counterSlice";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";

export default function ReduxExample() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  console.log(counterSlice);

  return (
    <Card className="custom-card">
      <Card.Body>
        <Card.Title>Redux Example using Redux tool kit</Card.Title>
        <Stack direction="vertical">
          <Button
            variant="warning"
            id="b1"
            onClick={() => dispatch(increment())}
          >
            +
          </Button>
          <center>{count}</center>
          <Button id="b1" onClick={() => dispatch(decrement())}>
            -
          </Button>
        </Stack>
      </Card.Body>
    </Card>
  );
}
