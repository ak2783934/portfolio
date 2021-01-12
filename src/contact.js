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
              <div class="fields">
                <div class="field half">
                  <input type="text" name="name" id="name" placeholder="Name" />
                </div>
                <div class="field half">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                  />
                </div>
                <div class="field">
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Message"
                    rows="7"
                  ></textarea>
                </div>
              </div>
              <ul class="actions">
                <li>
                  <input
                    type="submit"
                    value="Send Message"
                    class="button primary"
                  />
                </li>
              </ul>
            </form>
          </Col>
          <Col sm={4}></Col>
        </Row>
      </div>
    );
  }
}

export default Contacts;
