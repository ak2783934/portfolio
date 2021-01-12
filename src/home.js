import React, { Component } from "react";

import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row } from "react-bootstrap";

class Home extends Component {
  render() {
    return (
      <div className={"home-intro-mar"}>
        <Row>
          <Col sm={8}>
            <h1 className={"h1-from-home"}>Hello, I'm Avinash Kumar</h1>
            <p className={"paragraph-home-intro"}>
              I am an 3rd-year Electrical Engineering Undergrad from{" "}
              <a className={"jad-clg"} href="http://jaduniv.edu.in/">
                Jadavpur University
              </a>
              . I am also a full stack web developer. I love playing with
              different kind of web technologies. I am passionate about problem
              solving and have done more than 500 DSA questions from different
              online coding platforms. I will be Joining{" "}
              <a className={"jad-clg"} href="https://www.expediagroup.com/">
                Expedia group
              </a>{" "}
              this summer as an SDE Intern.{" "}
            </p>
          </Col>
          <Col sm={4}></Col>
        </Row>
      </div>
    );
  }
}

export default Home;
