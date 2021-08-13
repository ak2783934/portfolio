import React, { Component } from "react";

import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

class Contacts extends Component {
  render() {
    return (
      <div className={"skill-containers"} id="contact">
        <h1 className={"skill-heading"}>Contacts</h1>
        <div className={"contact-container"}>
          <div className={"col-list"}>
            <a
              href="mailto:ak2783934@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://i.pinimg.com/originals/2b/dc/78/2bdc78b6c227760fca29334de506d739.png"
                alt="gmail"
                className={"img-logo"}
                style={{ width: "80px", height: "80px", borderRadius: "50px" }}
              />
            </a>
            <a
              href="https://github.com/ak2783934"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                alt="github"
                className={"img-logo"}
                style={{ width: "80px", height: "80px", borderRadius: "50px" }}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/avinash-kumar-111513188/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://www.kindpng.com/picc/m/363-3632986_logo-linkedin-png-rond-transparent-png.png"
                alt="LinkedIn"
                className={"img-logo"}
                style={{ width: "80px", height: "80px", borderRadius: "50px" }}
              />
            </a>
            <a
              href="https://drive.google.com/file/d/1UekrinoFr9VsWu0yW5zQ_d28vyeCJ9lS/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://p.kindpng.com/picc/s/495-4952561_resume-icon-gray-social-media-icon-png-transparent.png"
                alt="Resume"
                className={"img-logo"}
                style={{ width: "80px", height: "80px", borderRadius: "50px" }}
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
