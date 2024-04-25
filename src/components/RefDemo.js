import React from "react";
function RefDemo() {
  const inputValue = React.createRef();
  function HandleSubmit(e) {
    e.preventDefault()
    alert(`Input value: ${inputValue.current.value}`);
  }
  return (
    <div className="App">
      <h3>use of createRef</h3>
      <form onSubmit={HandleSubmit}>
        <input type="text" ref={inputValue} />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default RefDemo;
