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
            <h1 className={"h1-from-home"}>Hi there!, I'm Avinash</h1>
            <p className={"paragraph-home-intro"}>
              I am final year undergraduate student at{" "}
              <a className={"jad-clg"} href="http://jaduniv.edu.in/">
                Jadavpur University
              </a>
              . I make websites and mobile apps. Reading books, watching movies
              and sitcoms are the things I do when I am free.
            </p>
          </Col>
          <Col sm={4}></Col>
        </Row>
      </div>
    );
  }
}

export default Home;
