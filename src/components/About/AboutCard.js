import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi there, I am <span className="purple">Priya Shah </span>
            from <span className="purple"> Saskatchewan, Canada.</span>
            <br />Currently, I am pursuing Master of Engineering in Software systems at <span className="purple">University of Regina, Saskatchewan.</span>
            <br /> I will be graduating in December, 2022. 
            <br />
            Apart from study and job, following are some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Volleyball
            </li>
            <li className="about-activity">
              <ImPointRight /> Creating reels
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Observing everything around me
            </li>
            <li className="about-activity">
              <ImPointRight /> Crafting
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Nothing comes free and easy, work hard to make it easier and evolve! 🌞"{" "}
          </p>
          <footer className="blockquote-footer">Priya</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;