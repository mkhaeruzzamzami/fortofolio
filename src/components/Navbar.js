import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/blog", label: "Blog" },
  { to: "/certificate", label: "Certificate" },
];

const CustomNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 992);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinkClass = (path) =>
    `text-white nav-animated ${
      location.pathname === path ? "fw-bold border-bottom border-info" : ""
    }`;

  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="navbar-wrapper"
        >
        <Navbar
          expand="lg"
          className={`py-3 fixed-top ${isScrolled ? "glass-navbar shadow-sm" : "navbar-transparent"}`}
          variant="dark"
        >
            <Container fluid className="px-4 px-lg-5">
              <div className="w-100 d-flex justify-content-between align-items-center">
                {/* ⛔ Nama TETAP DI KIRI */}
                <div style={{ flex: 1 }}>
                  <Navbar.Brand as={Link} to="/" className="fw-bold text-info">
                    Muhammad Khaeruz Zamzami
                  </Navbar.Brand>
                </div>
                {/* ✅ Navigasi tengah dengan animasi */}
                {!isMobile && (
                  <motion.div
                    className="d-flex gap-4 justify-content-center mx-auto"
                    style={{ flex: 2, justifyContent: "center" }}
                    initial="hidden"
                    animate="visible"
                    variants={{
                      visible: {
                        transition: {
                          staggerChildren: 0.1,
                        },
                      },
                    }}
                  >
                    {navItems.map((item, index) => (
                      <motion.div
                        key={index}
                        variants={{
                          hidden: { y: -30, opacity: 0 },
                          visible: {
                            y: 0,
                            opacity: 1,
                            transition: { type: "spring", stiffness: 100 },
                          },
                        }}
                      >
                        <Nav.Link as={Link} to={item.to} className={navLinkClass(item.to)}>
                          {item.label}
                        </Nav.Link>
                      </motion.div>
                    ))}
                  </motion.div>
                )}

                {/* ⛔ Sosmed TETAP DI KANAN */}
                <div className="d-flex gap-3 justify-content-end" style={{ flex: 1 }}>
                  <a href="https://github.com/mkhaeruzzamzami" target="_blank" rel="noopener noreferrer" className="text-white hover-icon">
                    <FaGithub size={20} />
                  </a>
                  <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-white hover-icon">
                    <FaLinkedin size={20} />
                  </a>
                  <a href="https://www.instagram.com/mhrzzii?igsh=YTYwNmE1ZnV2bGRv" target="_blank" rel="noopener noreferrer" className="text-white hover-icon">
                    <FaInstagram size={20} />
                  </a>
                </div>
              </div>
            </Container>
          </Navbar>
        </motion.div>
      </AnimatePresence>

      {/* ✅ Bottom Nav versi Mobile */}
      {isMobile && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mobile-nav-glass fixed-bottom d-flex justify-content-around py-2 z-3"
        >
          {navItems.map((item, index) => (
            <Link key={index} to={item.to} className="mobile-link">
              {item.label}
            </Link>
          ))}
        </motion.div>
      )}
    </>
  );
};

export default CustomNavbar;
