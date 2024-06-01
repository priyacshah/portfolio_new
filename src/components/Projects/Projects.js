import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import abiomed from "../../Assets/Projects/abiomed.png";
import sdwan from "../../Assets/Projects/sdwan.jpeg";
import worrynot from "../../Assets/Projects/worrynot.png";
import logo from "../../Assets/Projects/logo.png";
import rcesask from "../../Assets/Projects/rcesask.png";
import driver from "../../Assets/Projects/driver_distraction.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={logo}
              isBlog={false}
              title="Fruits and Veggie Classification using CNN"
              description="This application looks for driver distraction using deep learning technique. In this application, Kaggle dataset was used for training and testing on google cloud instance. I developed python script for training using TensorFlow and pre trained VGG16 model. This was implemented for 10 classes of driver’s behavior such as operating radio, talking etc."
              ghLink="https://github.com/priyacshah/Fruits-and-Vegetables-Classification-using-CNN"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={driver}
              isBlog={false}
              title="Driver Distraction Detection"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/priyacshah/Drivers-Behaviour-Classification"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={worrynot}
              isBlog={false}
              title="WorryNot"
              description="WorryNot website is a platform to address the issues of community related to mental health and focuses on the user’s mental health by integrating features of create goal, community, daily affirmation and lift your mood to make user more ambitious, confident and fearless at any stage. I developed the website using WordPress and plugins."
              ghLink="https://github.com/priyacshah/ENSE-805-Project"     
              demoLink="https://www.youtube.com/watch?v=E_i0O_LQ6S4"         
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={abiomed}
              isBlog={false}
              title="Medical Device Automation"
              description="This was the part of my project at Einfochips. Automated Impella console to control the Impella catheter that is the smallest heart pump to support patients undergoing critical surgeries. I developed the Automation Scripts in Python using Behave framework & REST API (Test hooks) on server-side software written in C. Also, wrote & executed Automated, manual and semi-automated test cases through JAMA & Jenkins."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rcesask}
              isBlog={false}
              title="RCE Sask Website design"
              description="This is academic project as a part of ENSE 871 course. The objective was to re-design and re-develop Projects and profile page in an innovative way in order to mobilize the knowledge work. We tried to improve the look & feel of the Project and Profile section."
              ghLink="https://github.com/priyacshah/RCE_Sask_Website_Design"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sdwan}
              isBlog={false}
              title="Cloud managed SD-WAN tools"
              description="This is the project at Nokia. Nuage SD-WAN portal contains different networking apps with various features. My role was developing the automation scripts, defining the scenarios and steps for automation and test it with developed radish framework. Improved software quality by validating the defects."
              // ghLink="https://github.com/priyacshah/Automated-Movie-Subscription"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
