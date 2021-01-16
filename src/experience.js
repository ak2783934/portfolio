import React, { Component } from "react";

import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import experiences from "../src/databases/experiences.json";

class Experiences extends Component {
  render() {
    return (
      <div className={"experience-containers"} id="experiences">
        <h1 className={"skill-heading"}>Experiences</h1>
        <div className={"card-containers"}>
          {experiences.map((experience, index) => {
            return (
              <div className="skill-card">
                <img
                  src={experience.logo}
                  className={"card-imgs-company"}
                  alt={experience.company}
                />
                <div className={"card-body"}>
                  <h2 className={"skill-name"}>{experience.company}</h2>
                  <h5 className={"exp-date"}>{experience.time}</h5>
                  <h5>
                    <img
                      src="https://res.cloudinary.com/dlb1ct3qc/image/upload/v1610288038/PORTFOLIO/logos/location_lkw3bh.png"
                      alt="location"
                      className={"location"}
                    />
                    <span className={"location-text"}>
                      {experience.location}
                    </span>
                  </h5>
                  <p className={"para-card"}>{experience.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Experiences;
