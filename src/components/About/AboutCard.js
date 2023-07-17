import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Prince Patel </span>
            from <span className="purple"> Gujarat, India.</span>
            <br /> I am a final year student pursuing a graduation In
            Information Technologies (B.Tech) at Silver Oak Univarsity, Gujarat.
            <br />
            Additionally, I joined as a intern in company the special character for a Full Stack Developer role.

            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies and Web Series
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading A Book
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">pprinceppatel</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
