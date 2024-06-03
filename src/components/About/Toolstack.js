import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiVercel,
  SiJenkins,
  SiJamboard,
  SiWordpress,
  SiKaggle,
  SiAmazonaws,
  SiApachekafka,
  SiGit,
  SiGitlab,
  SiJinja,
  SiJira,
  SiDocker,
  SiLocal,
  SiAdobexd
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={6} md={2} className="tech-icons">
        <SiAmazonaws />
        <h6>Amazon aws</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <h6>Visual studio code</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJenkins />
        <h6>Jenkins</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJira />
        <h6>Jira</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiWordpress />
        <h6>WordPress</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGitlab />
        <h6>Gitlab</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <h6>Postman</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker />
        <h6>Docker</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJamboard />
        <h6>Jama</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobexd />
        <h6>Adobe XD</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLocal />
        <h6>Local</h6>
      </Col>
    </Row>
  );
}

export default Toolstack;
