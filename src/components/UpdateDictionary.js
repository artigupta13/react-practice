import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function UpdateDictionary() {
  const [student, setStudent] = useState({
    1: "Arti",
    2: { 1: "Red", 2: "Green" },
  });
  const updateMe = () => {
    setStudent({
      ...student,
      2: { 1: "Red", 2: "Blue" },
    });
  };

  useEffect(() => {
    console.log("I have been updated once");
  }, [student]);

  return (
    <Card className="custom-card">
      <Card.Body>
        <Card.Title> Update Object</Card.Title>

        <Button variant="outline-warning" onClick={updateMe}>
          {" "}
          Update Object
        </Button>
        <Card.Text>{JSON.stringify(student)}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default UpdateDictionary;
