import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Tab, Nav } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import "./About.css";
import profileImage from "../images/profil.jpg";

const techStacks = [
  { name: "Kotlin", img: "kotlin.png" },
  { name: "Flutter", img: "flutter.png" },
  { name: "Javascript", img: "js.png" },
  { name: "PHP", img: "php.png" },
  { name: "NodeJS", img: "node.png" },
  { name: "VueJS", img: "vue.png" },
  { name: "React", img: "react.png" },
  { name: "Codeigniter", img: "codeigniter.png" },
  { name: "Angular", img: "angular.png" },
  { name: "Laravel", img: "laravel.png" },
  { name: "Java", img: "java.png" },
  { name: "Tailwind", img: "tailwind.png" },
];

const About = () => {
  const [activeTab, setActiveTab] = useState("tech");

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="about-page py-5 text-white">
      <Container>
        {/* About Me Section */}
        <div className="p-4 rounded bg-dark border mb-5" data-aos="fade-up">
          <h2 className="mb-4 fw-bold border-bottom pb-2">About Me</h2>
          <Row className="flex-column flex-lg-row align-items-center text-center text-lg-start">
            <Col lg={5} className="mb-4 mb-lg-0 d-flex justify-content-center">
              <img
                src={profileImage}
                alt="profile"
                className="img-fluid rounded-circle shadow"
                style={{ maxWidth: "300px", width: "100%" }}
              />
            </Col>
            <Col lg={7}>
              <p>
                👋 <strong>Hi there! I'm Muhammad Khaeruz Zamzami.</strong><br />
                I’m a 21-year-old developer based in Cirebon, Indonesia, with over 1 years of professional experience in <strong>Web Development</strong> and <strong>Android Development</strong>.
              </p>
              <p>
                💻 <strong>What I Do:</strong><br />
                I specialize in building functional, user-friendly, and visually appealing websites and applications. By combining technical expertise with creative design, I ensure products perform flawlessly and deliver strong user impact.
              </p>
              <div className="d-flex gap-3 flex-wrap justify-content-center justify-content-lg-start mt-3">
                <Button variant="outline-light" href="https://wa.me/62895416130944" target="_blank">
                  📲 WhatsApp
                </Button>
                <Button variant="outline-light" href="mailto:agisres97@gmail.com">
                  📧 Email
                </Button>
              </div>
            </Col>
          </Row>
        </div>

        {/* Experiences Section */}
        <div className="p-4 rounded bg-dark border mb-5" data-aos="fade-up">
          <h2 className="mb-4 fw-bold">Experiences</h2>
          <div className="experience-item mb-4">
            <h5 className="text-info mb-1">Frontend Developer</h5>
            <small className="text-muted">PT. Digital Kreasi | 2022 - Present</small>
            <p className="mt-2">
              Developing responsive web applications using React and Tailwind. Collaborating with UI/UX team to implement modern interfaces.
            </p>
          </div>
          <div className="experience-item mb-4">
            <h5 className="text-info mb-1">Mobile Developer</h5>
            <small className="text-muted">Freelance | 2020 - 2022</small>
            <p className="mt-2">
              Building Android apps using Kotlin & Flutter for clients in education and small business sectors.
            </p>
          </div>
          <div className="experience-item">
            <h5 className="text-info mb-1">Intern Web Developer</h5>
            <small className="text-muted">Kominfo Tangerang | 2019</small>
            <p className="mt-2">
              Contributed to internal tools using PHP and CodeIgniter. Learned development in team environments.
            </p>
          </div>
        </div>

        {/* Skills Section */}
        <div className="p-4 rounded bg-dark border" data-aos="fade-up">
          <h2 className="mb-4 fw-bold">Skills</h2>

          <Tab.Container defaultActiveKey="tech" activeKey={activeTab}>
            <Nav variant="pills" className="mb-3">
              <Nav.Item>
                <Nav.Link eventKey="tech" onClick={() => setActiveTab("tech")}>Tech Stack</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="tools" onClick={() => setActiveTab("tools")}>Tools</Nav.Link>
              </Nav.Item>
            </Nav>

            <Tab.Content>
              <Tab.Pane eventKey="tech">
                <Row>
                  {techStacks.map((item, idx) => (
                    <Col key={idx} md={3} sm={6} xs={12} className="mb-4">
                      <div className="tech-card text-center p-3 border rounded h-100">
                        <img
                          src={`/icons/${item.img}`}
                          alt={item.name}
                          style={{ height: 40, marginBottom: 10 }}
                        />
                        <strong>{item.name}</strong>
                      </div>
                    </Col>
                  ))}
                </Row>
              </Tab.Pane>
              <Tab.Pane eventKey="tools">
                <p>Coming soon: VSCode, Figma, GitHub, Postman, etc.</p>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </div>
      </Container>
    </div>
  );
};

export default About;
