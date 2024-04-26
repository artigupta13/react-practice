import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

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
    <Card className="custom-card">
      <Card.Body>
        <Card.Title> Event Bubbling </Card.Title>
        <div onClick={handleDiv} id="eb1">
          <h6 onClick={handleH1}>
            Event Bubbling - click button and check console logs
          </h6>
          <br />
          <span onClick={handleSpan} id="eb2">
            <Button variant="info" onClick={handleButton}>
              Click Me
            </Button>
          </span>
        </div>
      </Card.Body>
    </Card>
  );
}

export default EventBubbling;
