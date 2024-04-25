import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../features/counter/counterSlice";
import { counterSlice } from "../features/counter/counterSlice";

export default function ReduxExample() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  console.log(counterSlice);

  return (
    <div className="App">
      <h3> Redux Example</h3>
      <div>
        <button id="b1" onClick={() => dispatch(increment())}>
          +
        </button>
        <h1>{count}</h1>
        <button id="b1" onClick={() => dispatch(decrement())}>
          -
        </button>
      </div>
    </div>
  );
}
