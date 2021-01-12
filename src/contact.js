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
            <form name="contact" method="POST" data-netlify="true">
              <p>
                <label>
                  Your Name: <input type="text" name="name" />
                </label>
              </p>
              <p>
                <label>
                  Your Email: <input type="email" name="email" />
                </label>
              </p>
              <p>
                <label>
                  Message: <textarea name="message"></textarea>
                </label>
              </p>
              <p>
                <button type="submit">Send</button>
              </p>
            </form>
          </Col>
          <Col sm={4}></Col>
        </Row>
      </div>
    );
  }
}

export default Contacts;
