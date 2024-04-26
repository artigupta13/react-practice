import React, { Component } from "react";
import ClickCounterTwo from "./ClickCounterTwo";
import Counter from "./Counter";
import HoverCounterTwo from "./HoverCounterTwo";
import Card from "react-bootstrap/Card";

class RenderProps extends Component {
  render() {
    return (
      <Card className="custom-card">
        <Card.Body>
          <Card.Title>RenderProps demo</Card.Title>
          <h6>
            The term renderProps refers to a technique for sharing code between
            react components using a prop whose value is a function.
          </h6>
          <Counter
            render={(count, incrementCount) => (
              <ClickCounterTwo count={count} incrementCount={incrementCount} />
            )}
          />
          <h3>Not Working </h3>
          <Counter
            render={(count, incrementCount) => {
              <HoverCounterTwo count={count} incrementCount={incrementCount} />;
            }}
          />
        </Card.Body>
      </Card>
    );
  }
}

export default RenderProps;
