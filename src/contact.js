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
          <div className={"col-list"}>
            <a
              href="https://mail.google.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://res.cloudinary.com/dlb1ct3qc/image/upload/v1610681200/PORTFOLIO/logos/gmail_fdxe83.png"
                alt="gmail"
                className={"img-logo"}
                style={{ width: "80px", height: "80px" }}
              />
            </a>
            <a
              href="https://github.com/ak2783934"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://res.cloudinary.com/dlb1ct3qc/image/upload/v1610285746/PORTFOLIO/logos/zxcvzvv_tm3azp.png"
                alt="gmail"
                className={"img-logo"}
                style={{ width: "80px", height: "80px" }}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/avinash-kumar-111513188/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://res.cloudinary.com/dlb1ct3qc/image/upload/v1610681200/PORTFOLIO/logos/linkedin_rpxdyl.png"
                alt="gmail"
                className={"img-logo"}
                style={{ width: "80px", height: "80px" }}
              />
            </a>
            <a
              href="https://docs.google.com/document/d/1Y6h037QulalWNdi73M4XxgcOkq743i8y4Td5ZmE4lSE/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://res.cloudinary.com/dlb1ct3qc/image/upload/v1610681200/PORTFOLIO/logos/ewqrwer_rclsxt.png"
                alt="gmail"
                className={"img-logo"}
                style={{ width: "80px", height: "80px" }}
              />
            </a>
          </div>

          <div>
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

              <button type="submit" class="submit-button">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Contacts;
