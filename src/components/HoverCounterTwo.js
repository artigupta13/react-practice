import React, { Component } from "react";

class HoverCounterTwo extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return (
      <button onMouseHover={incrementCount}>Hovered {count} times </button>
    );
  }
}

export default HoverCounterTwo;
