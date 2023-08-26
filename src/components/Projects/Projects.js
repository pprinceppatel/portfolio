import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Personal Portfolio website"
              description="Eveloped a Personal Portfolio to highlighting my education and work experience. Used HTML elements and tags to achieve expected UI. Added some more functionalities after reviewing some more portfolios across the web"
              ghLink="https://github.com/pprinceppatel/portfolio"
              demoLink="https://pprinceppatel.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="I-HAB-WEB"
              description="I designed the Footer Page in this website alongside the team.Tailwind CSS is used.Design and styling are done with the help of grid and flex.Make Fully Responsive Footer Page."
              // ghLink=""
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="TodoApp"
              description="Designed and implemented the user interface using React.js,ensuring a seamless user experience responsive .Using HTML,CSS,Tailwind Css,React.js,Typescript. This is a common project that all web developers have done at least once in their lifetime."
              ghLink="https://github.com/pprinceppatel/TodoApp"
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Dynamic Web pages"
              description="Contact Pages, Login Page and Register Page etc.. Designed a visually appealing and user-friendly interface for the website Using HTML, CSS. All I have practiced from is given below website."
              // ghLink=""
              demoLink="https://www.frontendmentor.io/challenges"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="pify"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              // ghLink=""
              // demoLink=""
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink=""
              // demoLink="
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
