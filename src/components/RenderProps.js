import React, { Component } from "react";
import ClickCounterTwo from "./ClickCounterTwo";
import Counter from "./Counter";
import HoverCounterTwo from "./HoverCounterTwo";

class RenderProps extends Component {
  render() {
    return (
      <div className="App">
      <h3>RenderProps demo</h3>
      <h6>The term renderProps refers to a technique for sharing code between react components using a prop whose value is a function.</h6>
        <Counter
          render={(count, incrementCount) => (
            <ClickCounterTwo count={count} incrementCount={incrementCount} />
          )}
        />
        <h1>Not Working </h1>
        <Counter
          render={(count, incrementCount) => {
            <HoverCounterTwo count={count} incrementCount={incrementCount} />
          }}
        />
      </div>
    );
  }
}

export default RenderProps;
