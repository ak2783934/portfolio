import React, { Component } from "react";

import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row } from "react-bootstrap";

class Contacts extends Component {
  render() {
    return (
      <div className={"skill-containers"}>
        <h1 className={"skill-heading"}>Contacts</h1>

        <Row>
          <Col sm={8}>
            <form name="contact" method="POST" netlify>
              <input type="text" name="name" placeholder="name" />
              <input type="text" name="email" placeholder="email" />
              <textarea
                name="message"
                placeholder="message"
                cols="28"
                rows="20"
              ></textarea>
              <button type="submit">Submit</button>
            </form>
          </Col>
          <Col sm={4}></Col>
        </Row>
      </div>
    );
  }
}

export default Contacts;
