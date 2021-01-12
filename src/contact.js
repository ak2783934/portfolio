import React, { Component } from "react";

import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row } from "react-bootstrap";

class Contacts extends Component {
  render() {
    return (
      <div className={"skill-containers"} id="contact">
        <h1 className={"skill-heading"}>Contacts</h1>
        <div className={"contact-container"}>
          <Row>
            <Col sm={4}></Col>
            <Col sm={8}>
              <form name="contact" method="post" className={"form-input"}>
                <input type="hidden" name="form-name" value="contact" />
                <div className={"input-field"}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    className={"input-space1"}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className={"input-space2"}
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="Write the message"
                    className={"text-input"}
                  ></textarea>
                </div>

                <button type="submit" class="btn btn-block btn-secondary">
                  Send
                </button>
              </form>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Contacts;
