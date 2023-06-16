function EventBubbling() {
  function handleDiv() {
    console.log("div was clicked");
  }
  function handleSpan() {
    console.log("span was clicked");
  }

  function handleButton(e) {
    // e.stopPropagation(); this is stop event bubbling
    console.log("button was clicked");
  }

  function handleH1() {
    console.log("H1 was clicked");
  }

  return (
    <div className="App">
      <div onClick={handleDiv} id="eb1">
        <h1 onClick={handleH1}>
          {" "}
          Event Bubbling - click button and check console logs
        </h1>
        <span onClick={handleSpan} id="eb2">
          <button id="eb3" onClick={handleButton}>
            {" "}
            Click Me
          </button>
        </span>
      </div>
    </div>
  );
}

export default EventBubbling;
