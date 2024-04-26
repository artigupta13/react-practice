import { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";

function AppendList() {
  const [arr, setArr] = useState(["thing1", "thing2", "thing3"]);

  const handleMe = () => {
    console.log("handleMe");
    const arrLength = arr.length + 1;
    console.log(arrLength, arr);
    setArr([...arr, `thing${arrLength}`]); // never append items directly to the state
  };

  return (
    <Card className="custom-card">
      <Card.Body>
        <Card.Title>Append Element</Card.Title>
        <Stack direction="vertical" gap={1}>
          <Button variant="outline-warning" onClick={handleMe}>
            add items
          </Button>
          <Card.Text>
            <Stack direction="horizontal" gap={1}>
              {arr.map((a, index) => (
                <Button variant="outline-success" key={index}>
                  {" "}
                  {a}
                </Button>
              ))}
            </Stack>
          </Card.Text>
        </Stack>
      </Card.Body>
    </Card>
  );
}

export default AppendList;
