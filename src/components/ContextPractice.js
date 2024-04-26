import { useState, useContext, createContext } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const UserContext = createContext();

function ContextPractice() {
  const [user, setUser] = useState("Jesse Hall");

  return (
    <UserContext.Provider value={user}>
      <Card className="custom-card">
        <Card.Body>
          <Card.Title> useContext example </Card.Title>
          <h6>{`Hello ${user}`}</h6>
          <Button
            variant="success"
            onClick={() => {
              user !== "Arti Gupta"
                ? setUser("Arti Gupta")
                : setUser("Jesse Hall");
            }}
          >
            change name
          </Button>
          <Component2 />
        </Card.Body>
      </Card>
    </UserContext.Provider>
  );
}

function Component2() {
  return (
    <>
      <h6>Component 2</h6>
      <Component3 />
    </>
  );
}

function Component3() {
  return (
    <>
      <h6> Component 3</h6>
      <Component4 />
    </>
  );
}

function Component4() {
  return (
    <>
      <h6>Component 4</h6>
      <Component5 />
    </>
  );
}

function Component5() {
  const user = useContext(UserContext);
  return (
    <>
      <h6> Componenet 5</h6>
      <strong>{`Hello ${user} again`}</strong>
    </>
  );
}

export default ContextPractice;
