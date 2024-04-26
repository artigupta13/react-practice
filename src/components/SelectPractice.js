import { useState } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

function SelectPractice() {
  const countires = [
    {
      name: "India",
      value: "IN",
      cities: ["Delhi", "Mumbai"],
    },
    {
      name: "Pakistan",
      value: "PK",
      cities: ["Lahore", "Karachi"],
    },
    {
      name: "Bangladesh",
      value: "BS",
      cities: ["Dhaka", "Chittagong"],
    },
  ];
  const [country, setCountry] = useState(countires[0]);
  return (
    <Card className="custom-card">
      <Card.Body>
        <Card.Title> Select Practice</Card.Title>
        <Form.Select
          onChange={(e) => {
            console.log(e.target.value);
            setCountry(countires[e.target.value]);
          }}
        >
          {countires.map((country, index) => (
            <option key={index} value={index}>
              {country.name}
            </option>
          ))}
        </Form.Select>
        <Form.Select>
          {country?.cities?.map((city, index) => (
            <option key={index} value={index}>
              {city}
            </option>
          ))}
        </Form.Select>
      </Card.Body>
    </Card>
  );
}

export default SelectPractice;
