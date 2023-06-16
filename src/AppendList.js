import { useState } from "react";
function AppendList() {
  const [arr, setArr] = useState(["thing1", "thing2", "thing3"]);

  const handleMe = () => {
    console.log("handleMe");
    const arrLength = arr.length + 1;
    console.log(arrLength, arr);
    setArr([...arr, `thing${arrLength}`]); // never append items directly to the state
  };

  return (
    <div className="App">
      <br />
      <br />
      <br />
      <br />
      <button id="b1" onClick={handleMe}>
        {" "}
        add items
      </button>
      <h1>
        {arr.map((a, index) => (
          <span key={index}> {a},</span>
        ))}
      </h1>
    </div>
  );
}

export default AppendList;
