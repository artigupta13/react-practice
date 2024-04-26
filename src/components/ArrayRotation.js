import { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";

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
    <Card className="custom-card">
      <Card.Body>
        <Card.Title> Array Rotation </Card.Title>
        {myList.map((element, index) => (
          <Button variant="outline-danger" key={element}>
            {" "}
            {element}
          </Button>
        ))}
        <br />
        <br />
        <Stack direction="horizontal" gap={1}>
          <Button id="b1" onClick={leftRotate}>
            Left Rotate
          </Button>
          <Button id="b1" onClick={rightRotate}>
            Right Rotate
          </Button>
        </Stack>
      </Card.Body>
    </Card>
  );
}

export default ArrayRotation;
