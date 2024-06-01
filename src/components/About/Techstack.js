import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiWordpress,
  DiSpark,
  DiPhp,
  DiDatabase,
} from "react-icons/di";
import {
  SiPytorch,
  SiFirebase,
  SiNextdotjs,
  SiApachekafka,
  SiDocker,
  SiHtml5,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <h6>Python</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiWordpress />
        <h6>WordPress</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiSpark />
        <h6>Spark</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPhp />
        <h6>Php</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiDatabase />
        <h6>Database</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiApachekafka />
        <h6>Kafka</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker />
        <h6>Docker</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 />
        <h6>HTML</h6>
      </Col>
    </Row>
  );
}

export default Techstack;
