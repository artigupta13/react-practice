// SideNavBar.js
import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const Menu = () => {

  return (
    <Navbar expand="lg" bg="warning" variant="light">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="flex-column">
          <Nav.Link href="/">Home</Nav.Link>

          <Nav.Link href="EventsInList">Key in List</Nav.Link>

          <Nav.Link href="AppendList">Append List</Nav.Link>

          <Nav.Link href="ArrayRotation">Array Rotation</Nav.Link>

          <Nav.Link href="FormExample">Form Handling in React</Nav.Link>

          <Nav.Link href="InitializerFunction">Intializer Function</Nav.Link>

          <Nav.Link href="EventBubbling">Event Bubbling</Nav.Link>

          <Nav.Link href="PokemonApiComponent">Redux Tool Kit Query</Nav.Link>

          <Nav.Link href="RefDemo">use of Ref</Nav.Link>

          <Nav.Link href="ContextPractice">Use of Context</Nav.Link>

          <Nav.Link href="ReduxExample">
            Example of Redux using Redux took kit
          </Nav.Link>

          <Nav.Link href="SelectPractice">
            Drop Down Selection in React
          </Nav.Link>

          <Nav.Link href="UpdateDictionary">Update Object</Nav.Link>

          <Nav.Link href="useReducer"> useReducer Function</Nav.Link>

          <Nav.Link href="useRef">use of useRef</Nav.Link>
          <Nav.Link href="passStateInBootStrap">Pass State to Bootstrap Component</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Menu;
