import { useState } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

export default function FormExample() {
  const [form, setForm] = useState({
    firstName: "Barbara",
    lastName: "Hepworth",
    email: "bhepworth@sculpture.com",
  });
  return (
    <Card className="custom-card">
      <Card.Body>
        <Card.Title> Form Handling</Card.Title>
        <Form.Label htmlFor="firstname">First Name</Form.Label>
        <Form.Control
          type="text"
          key="1"
          style={{ backgroundColor: 'orange' }} 
          value={form.firstName}
          onChange={(e) => setForm({ ...form, firstName: e.target.value })}
        />
        <Form.Label htmlFor="lastname">Last Name</Form.Label>
        <Form.Control
          type="text"
          key="2"
          value={form.lastName}
          onChange={(e) => setForm({ ...form, lastName: e.target.value })}
        />
        <Form.Label htmlFor="email">Email</Form.Label>
        <Form.Control
          type="text"
          key="3"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <strong>
          {form.firstName} {form.lastName} {form.email}{" "}
        </strong>
      </Card.Body>
    </Card>
  );
}
