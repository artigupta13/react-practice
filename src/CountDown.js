import { useState } from "react";
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
    <div className="App">
      <h3> setInterval example</h3>
      <button id="b1" onClick={startCountdown}>
        {" "}
        Start me
      </button>
      <button id="b1" onClick={stopCountdown}>
        {" "}
        Stop me
      </button>
      <br /> <br /> <br />
      <div className="dot">
        <strong style={{ top: "20px", left: "0px", position: "relative" }}>
          {count}
        </strong>
      </div>
    </div>
  );
}

export default CountDown;
