import React, { useState, useMemo } from "react";

const factorial = (n) => {
  if (n <= 0) {
    console.log("Calculating factorial...");
    return 1;
  }
  return n * factorial(n - 1);
};

const UseMemo = () => {
  const [number, setNumber] = useState(5);
  const [counter, setCounter] = useState(0);

  const memoisedFactorial = useMemo(() => factorial(number), [number]);
  //   const memoisedFactorial = () => factorial(number); without useMemo

  const clickMe = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  return (
    <div>
      <h1>Factorial Calculator</h1>
      <input type="number" onChange={(e) => setNumber(e.target.value)} />
      {/* <p>Factorial: {memoisedFactorial()}</p> */}
      <p>Factorial: {memoisedFactorial}</p>
      <button onClick={clickMe}> Counter</button>
      <p>I am clicked {counter} times</p>
    </div>
  );
};

export default UseMemo;
