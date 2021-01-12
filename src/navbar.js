import React, { Component } from "react";

import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";

class NavBar extends Component {
  render() {
    const navColor = {
      color: "pink",
    };

    return (
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className={"navBar"}
      >
        <Navbar.Brand href="#home">
          <h2>My Portfolio</h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav style={navColor}>
            <Nav.Link href="#home">
              <span className={"span-color-link"}>Home</span>
            </Nav.Link>
            <Nav.Link href="#skills">
              <span className={"span-color-link"}>Skills</span>
            </Nav.Link>
            <Nav.Link href="#projects">
              <span className={"span-color-link"}>Projects</span>
            </Nav.Link>
            <Nav.Link href="#experiences">
              <span className={"span-color-link"}>Experiences</span>
            </Nav.Link>
            <Nav.Link href="#contact">
              <span className={"span-color-link"}>Contact</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar;
