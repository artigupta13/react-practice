import EventsInList from "./EventsInList";
import { Parent } from "./ChildToParentProps";
import UseRef from "./UseRef";
import RefDemo from "./RefDemo";
import EventBubbling from "./EventBubbling";
import AppendList from "./AppendList";
import UpdateDictionary from "./UpdateDictionary";
import SelectPractice from "./SelectPractice";
import ArrayRotation from "./ArrayRotation";
import ContextPractice from "./ContextPractice";
import CountDown from "./CountDown";
import ReduxExample from "./ReduxExample";
import FormExample from "./FormExample";
import UseReducerDemo from "./UseReducerDemo";
import RenderProps from "./RenderProps";
import Memo from "./Memo";
import UseEffectDemo from "./UseEffectDemo";
import InitializerFunction from "./InitializerFunction";
import PokemonApiComponent from "./PokemonApiComponent";
import PassStateToBootstrapComponent from "./PassStateToBootstrapComponent";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function MainTable() {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col>
          {" "}
          <EventsInList />
        </Col>
        <Col>
          {" "}
          <UseRef />
        </Col>
        <Col>
          {" "}
          <Parent />
        </Col>
      </Row>
      <Row>
        <Col>
          {" "}
          <RefDemo />
        </Col>
        <Col>
          {" "}
          <AppendList />
        </Col>
        <Col>
          {" "}
          <UpdateDictionary />
        </Col>
      </Row>
      <Row>
        <Col>
          {" "}
          <SelectPractice />
        </Col>
        <Col>
          {" "}
          <ArrayRotation />
        </Col>
        <Col>
          {" "}
          <EventBubbling />
        </Col>
      </Row>
      <Row>
        <Col>
          {" "}
          <ContextPractice />
        </Col>
        <Col>
          {" "}
          <CountDown />
        </Col>
        <Col>
          {" "}
          <ReduxExample />
        </Col>
      </Row>
      <Row>
        <Col>
          {" "}
          <FormExample />
        </Col>
        <Col>
          {" "}
          <InitializerFunction />
        </Col>
        <Col>
          {" "}
          <RenderProps />
        </Col>
      </Row>
      <Row>
        <Col>
          {" "}
          <Memo />
        </Col>
        <Col>
          {" "}
          <UseEffectDemo />
        </Col>
        <Col>
          {" "}
          <UseReducerDemo />
        </Col>
      </Row>
      <Row>
        <Col>
          {" "}
          <PokemonApiComponent />
        </Col>
        <Col>
          {" "}
          <PassStateToBootstrapComponent />
        </Col>
      </Row>
    </Container>
  );
}
