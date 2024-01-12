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
    <div className="App">
      <h3>UseReducerDemo</h3>
      <h4>Count:{newState}</h4>
      <button id="b1" onClick={() => dispatch("increment")}>
        Increment
      </button>
      <button id="b1" onClick={() => dispatch("decrement")}>
        Decrement
      </button>
      <button id="b1" onClick={() => dispatch("reset")}>
        Reset
      </button>
    </div>
  );
}

export default UseReducerDemo;
