import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Stack from "react-bootstrap/Stack";

function EventsInList() {
  const [myarray, setmyarray] = useState([1, 2, 3, 4, 5, 6]);
  function handleMe(e, index) {
    //e.preventDefault();
    const temp = myarray.map((a, i) => {
      if (i === index) {
        return a + 1;
      } else {
        return a;
      }
    });
    setmyarray(temp);
  }
  return (
    <Card className="custom-card">
      <Card.Body>
        <Card.Title>List Key example</Card.Title>
        <Card.Text>
          <Stack direction="horizontal" gap="1">
            {myarray.map((element, index) => (
              <Button
                variant="warning"
                key={index}
                onClick={(e) => handleMe(e, index)}
              >
                {element}
              </Button>
            ))}
          </Stack>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default EventsInList;
