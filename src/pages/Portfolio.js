import React, { useState } from "react";
import { Container, Button, Row, Col, Card } from "react-bootstrap";
import "./Portfolio.css"; // Optional: untuk styling tambahan
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import pincela from "../images/logopincela.jpg";

// Dummy data project
const projectData = [
  {
    title: "Pincela",
    type: "web",
    desc: "Website sederhana untuk project mata kuliah Pemrograman Web, mencakup fitur CRUD, routing, dan responsive UI.",
    stack: "HTML, CSS, JavaScript, PHP",
    image: pincela,
    link: "https://mkhaeruzzamzami.github.io/pemweb-project/",
    github: "https://github.com/mkhaeruzzamzami/pemweb-project",
  },
  {
    title: "Point Of Sales - IPOS",
    type: "web",
    desc: "IPOS : Aplikasi sistem kasir online untuk Coffee Shop menggunakan Laravel 7 dan VueJS.",
    stack: "Laravel, VueJS",
    image: "/projects/ipos.png",
    link: "#",
    github: "#",
  },
  {
    title: "The Connecter",
    type: "mobile",
    desc: "Aplikasi crypto wallet berbasis web yang aman dan mudah digunakan untuk manajemen aset digital terdesentralisasi.",
    stack: "TypeScript, Next.js",
    image: "/projects/crypto.png",
    link: "#",
    github: "#",
  },
];


const Portfolio = () => {
  const [filter, setFilter] = useState("all");

  const filteredProjects =
    filter === "all"
      ? projectData
      : projectData.filter((proj) => proj.type === filter);

  return (
    <div className="portfolio-page py-5 text-white">
      <Container>
        <h2 className="text-center fw-bold mb-2">Past Project Experience</h2>
        <p className="text-center mb-4 text-secondary">
          Explore the projects I've worked on so far
        </p>

        <div className="text-center mb-5">
          {["all", "web", "mobile"].map((cat) => (
            <Button
              key={cat}
              variant={filter === cat ? "outline-info" : "outline-light"}
              className="mx-2"
              onClick={() => setFilter(cat)}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </Button>
          ))}
        </div>

        <Row>
          {filteredProjects.map((proj, idx) => (
            <Col key={idx} lg={4} sm={12} className="mb-4">
              <Card className="bg-dark text-white h-100 border-0 shadow">
                <Card.Img
                  variant="top"
                  src={proj.image}
                  alt={proj.title}
                  style={{ borderRadius: "0.5rem 0.5rem 0 0" }}
                />
                <Card.Body>
                  <Card.Title className="fw-bold">{proj.title}</Card.Title>
                  <Card.Text>{proj.desc}</Card.Text>
                  <Card.Text className="text-info">{proj.stack}</Card.Text>
                  <div className="d-flex justify-content-end gap-3">
                    <a href={proj.link} target="_blank" rel="noreferrer">
                      <FaExternalLinkAlt color="white" />
                    </a>
                    <FaGithub color="white" />
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Portfolio;
