import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { ReactTyped } from "react-typed";
import "./Home.css";
import profilePic from "../images/profil.jpg";

const Home = () => {
  return (
    <div className="d-flex align-items-center min-vh-100 bg-black">
      <Container style={{ paddingTop: "80px" }}>
        <Row className="align-items-center">
          <Col lg={6} className="text-center">
            <div className="profile-glow">
              <img
                src={profilePic}
                alt="Muhammad Khaeruz Zamzami"
                className="img-fluid rounded-circle shadow"
              />
            </div>
          </Col>
          <Col
            lg={6}
            className="text-white text-center text-lg-start mb-5 mb-lg-0"
          >
            <p className="intro-text">Hello World, I'm</p>
            <h1 className="fw-bold display-4">Muhammad Khaeruz Zamzami</h1>

            <ReactTyped
              strings={[
                "Web Developer 💻",
                "UI/UX Designer 🎨",
                "Tech Enthusiast 🚀",
              ]}
              typeSpeed={50}
              backSpeed={30}
              loop
              className="typed-text d-block my-3"
            />

            <p className="lead mb-4">Welcome to my personal website. 👋</p>

            <Button
              variant="outline-info"
              href="/cv.pdf"
              download
              className="px-4"
            >
              Download CV
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
