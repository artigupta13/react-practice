import { useState } from "react";
import Card from "react-bootstrap/Card";

function createInitialTodos() {
  console.log("createInitialTodos is called");
  const initialTodos = [];
  for (let i = 0; i < 5; i++) {
    initialTodos.push({
      id: i,
      text: "Item" + (i + 1),
    });
  }
  return initialTodos;
}

export default function InitializerFunction() {
  const [todos, setTodos] = useState(createInitialTodos);
  const [text, setText] = useState("");

  const addMe = () => {
    setText("");
    setTodos([
      {
        id: todos.length,
        text: text,
      },
      ...todos,
    ]);
  };
  return (
    <Card className="custom-card">
      <Card.Body>
        <Card.Title>Passing the initializer function</Card.Title>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={addMe}> Add </button>
        <ul>
          {todos.map((item) => (
            <li key={item.id}>{item.text}</li>
          ))}
        </ul>
      </Card.Body>
    </Card>
  );
}
