import { useState } from "react";
function ArrayRotation() {
  const [myList, setMyList] = useState([1, 2, 3, 4, 5, 6]);
  const leftRotate = () => {
    const firstElement = myList[0];
    const restElements = myList.slice(1, myList.length);
    restElements.push(firstElement);
    setMyList(restElements);
  };

  const rightRotate = () => {
    const temp = [...myList];
    const lastElement = temp.pop();
    setMyList([lastElement, ...temp]);
  };

  return (
    <div className="App">
      <h3> Array Rotation </h3>
      {myList.map((element, index) => (
        <button key={element}> {element}</button>
      ))}
      <br />
      <br />
      <button id="b1" onClick={leftRotate}>
        Left Rotate
      </button>
      <button id="b1" onClick={rightRotate}>
        Right Rotate
      </button>
    </div>
  );
}

export default ArrayRotation;
