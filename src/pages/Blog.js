import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Blog.css";

const blogPosts = [
  {
    id: 1,
    title: "What’s New in Laravel 12: A Comprehensive Overview",
    date: "27 February 2025",
    img: "/images/blog1.jpg", // letakkan gambar di public/images/
    desc: "Explore new features, improvements, and changes introduced in Laravel 12 for better development.",
  },
  {
    id: 2,
    title: "Laravel Development Trends 2025",
    date: "10 March 2025",
    img: "/images/blog2.jpg",
    desc: "Stay ahead with the latest Laravel best practices, tools, and community updates this year.",
  },
  {
    id: 3,
    title: "Mastering React with Tailwind CSS",
    date: "5 April 2025",
    img: "/images/blog3.jpg",
    desc: "Combine React’s component-based power with Tailwind’s utility-first CSS for faster frontend dev.",
  },
];

const Blog = () => {
  return (
    <div className="py-5 text-white blog-page">
      <Container>
        <h2 className="fw-bold mb-4 text-center">Latest Blog Posts</h2>
        <Row>
          {blogPosts.map((post) => (
            <Col lg={4} sm={6} xs={12} key={post.id} className="mb-4">
              <Card className="bg-dark text-white blog-card h-100">
                <Card.Img variant="top" src={post.img} alt={post.title} />
                <Card.Body>
                  <Card.Title className="fw-bold text-info">
                    {post.title}
                  </Card.Title>
                  <Card.Text>
                    <small className="text-muted">{post.date}</small>
                    <br />
                    <span className="d-block mt-2">{post.desc}</span>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Blog;
