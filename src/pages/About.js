import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Tab, Nav } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import "./About.css";
import profileImage from "../images/profil.jpg";

// const techStacks = [
//   { name: "Kotlin", img: "kotlin.png" },
//   { name: "Flutter", img: "flutter.png" },
//   { name: "Javascript", img: "js.png" },
//   { name: "PHP", img: "php.png" },
//   { name: "NodeJS", img: "node.png" },
//   { name: "VueJS", img: "vue.png" },
//   { name: "React", img: "react.png" },
//   { name: "Codeigniter", img: "codeigniter.png" },
//   { name: "Angular", img: "angular.png" },
//   { name: "Laravel", img: "laravel.png" },
//   { name: "Java", img: "java.png" },
//   { name: "Tailwind", img: "tailwind.png" },
// ];

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
            <h5 className="text-info mb-1">Fullstack & Mobile Developer</h5>
            <small className="text-muted">Freelance & Project Based | 2020 - Present</small>
            <p className="mt-2">
              Bisa membuat frontend dan backend menggunakan PHP, JavaScript (React), serta aplikasi mobile Android.
            </p>
          </div>
            {/* NEW EXPERIENCE */}
          <div className="experience-item mb-4">
            <h5 className="text-info mb-1">IoT & Microcontroller Developer</h5>
            <small className="text-muted">Academic & Personal Projects | 2019 - Present</small>
            <p className="mt-2">
              Berpengalaman mengembangkan project berbasis mikrokontroler (Arduino, ESP8266) untuk sistem otomatisasi 
              seperti <strong>Penyiraman Tanaman Otomatis</strong> dan <strong>Jemuran Pintar</strong>. 
              Menggunakan berbagai sensor (kelembapan tanah, suhu, cahaya, hujan) serta aktuator (relay, motor servo, pompa).
            </p>
          </div>
          {/* END NEW EXPERIENCE */}
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
              <Nav.Item>
                <Nav.Link eventKey="iot" onClick={() => setActiveTab("iot")}>IoT Projects</Nav.Link>
              </Nav.Item>
            </Nav>

            <Tab.Content>
              <Tab.Pane eventKey="tech">
                <Row>
                  {["JavaScript", "Python", "PHP", "C++", "HTML"].map((item, idx) => (
                    <Col key={idx} md={3} sm={6} xs={12} className="mb-4">
                      <div className="tech-card text-center p-3 border rounded h-100">
                        <strong>{item}</strong>
                      </div>
                    </Col>
                  ))}
                </Row>
              </Tab.Pane>

              <Tab.Pane eventKey="tools">
                <p>Coming soon: Laragon (Localhost), VSCode, Figma, GitHub, Postman, etc.</p>
              </Tab.Pane>

              <Tab.Pane eventKey="iot">
                <h5 className="text-info mb-3">IoT Projects</h5>

                {/* Project 1 */}
                <div className="mb-4" data-aos="fade-up">
                  <h6 className="fw-bold">🌱 Penyiraman Tanaman Otomatis di Rumah Kaca</h6>
                  <p>
                    Sistem IoT untuk mengontrol penyiraman tanaman berdasarkan sensor. 
                    Menggunakan input dari berbagai sensor dan menghasilkan aksi otomatis.
                  </p>

                  <Row>
                    <Col md={6} sm={12} className="mb-3">
                      <div className="tech-card text-center p-3 border rounded h-100" data-aos="fade-up">
                        <strong>Variabel Input</strong>
                        <ul className="text-start mt-2">
                          <li>Kelembapan tanah</li>
                          <li>Suhu udara</li>
                          <li>Kelembapan udara</li>
                          <li>Intensitas cahaya</li>
                        </ul>
                      </div>
                    </Col>
                    <Col md={6} sm={12} className="mb-3">
                      <div className="tech-card text-center p-3 border rounded h-100" data-aos="fade-up">
                        <strong>Variabel Output</strong>
                        <ul className="text-start mt-2">
                          <li>Kontrol air</li>
                          <li>Indikator air</li>
                          <li>Notifikasi</li>
                        </ul>
                      </div>
                    </Col>
                  </Row>

                  <div className="tech-card p-3 border rounded mt-3" data-aos="fade-up">
                    <strong>Komponen Utama:</strong>
                    <p className="mb-0">
                      Arduino Uno, Sensor YL-69, DHT11, Relay 5V, Pompa Air DC 12V, 
                      Kipas Angin DC 12V, LCD 16x2 I2C, Adaptor 12V, Laptop (USB power).
                    </p>
                  </div>
                </div>

                {/* Project 2 */}
                <div data-aos="fade-up">
                  <h6 className="fw-bold">☔ Jemuran Pintar Otomatis</h6>
                  <p>
                    Jemuran otomatis dengan atap yang menutup saat hujan, dilengkapi 
                    notifikasi ke HP via ESP8266.
                  </p>

                  <Row>
                    <Col md={6} sm={12} className="mb-3">
                      <div className="tech-card text-center p-3 border rounded h-100" data-aos="fade-up">
                        <strong>Sensor & Input</strong>
                        <ul className="text-start mt-2">
                          <li>Sensor Hujan</li>
                          <li>DHT11 (suhu & kelembapan)</li>
                          <li>Kelembapan tanah (deteksi baju kering)</li>
                        </ul>
                      </div>
                    </Col>
                    <Col md={6} sm={12} className="mb-3">
                      <div className="tech-card text-center p-3 border rounded h-100" data-aos="fade-up">
                        <strong>Aksi & Output</strong>
                        <ul className="text-start mt-2">
                          <li>Motor Servo (atap otomatis)</li>
                          <li>ESP8266 (notifikasi ke HP)</li>
                          <li>LCD I2C 16x2, buzzer, push button</li>
                        </ul>
                      </div>
                    </Col>
                  </Row>
                  <div className="tech-card p-3 border rounded mt-3" data-aos="fade-up">
                    <strong>Komponen Utama:</strong>
                    <p className="mb-0">
                      Arduino UNO, Motor Servo, Driver Motor, ESP8266, LCD I2C 16x2, 
                      Rangka jemuran lipat + atap mekanis, resistor, kabel jumper, breadboard.
                    </p>
                  </div>
                </div>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </div>
      </Container>
    </div>
  );
};

export default About;
