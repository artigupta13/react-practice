// useReducer in React
// useReducer(reducer,initialValue)
// newState = reducer(currentState,action)
// useReducer returns a pair of CSSFontFeatureValuesRule. [newStatem dispatch]

// reduce in JavaScript
// array.reduce(reducer,intialValue)
// singleValue = reducer(accumulator, itemValue)
// return method returns a single value

// const array1 = [1,2,3,4,5];
// const reducer = (accumulator, currentValue) => accumulator+ currentValue;
// console.log(array1.reduce(reducer));
// console.log(array1.reduce(reducer,5));

import React, { useReducer } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Stack from "react-bootstrap/Stack";

function UseReducerDemo() {
  const intialValue = 0;

  const reducer = (state, action) => {
    switch (action) {
      case "increment":
        return state + 1;
      case "decrement":
        return state - 1;
      case "reset":
        return 0;
      default:
        return state;
    }
  };

  const [newState, dispatch] = useReducer(reducer, intialValue);
  return (
    <Card className="custom-card">
      <Card.Body>
        <Card.Title>UseReducerDemo</Card.Title>
        <h5>Count:{newState}</h5>
        <Stack direction="horizontal" gap={1}>
        <Button variant="warning" id="b1" onClick={() => dispatch("increment")}>
          Increment
        </Button>
        <Button variant="warning" id="b1" onClick={() => dispatch("decrement")}>
          Decrement
        </Button>
        <Button variant="warning" id="b1" onClick={() => dispatch("reset")}>
          Reset
        </Button>
        </Stack>
      </Card.Body>
    </Card>
  );
}

export default UseReducerDemo;
