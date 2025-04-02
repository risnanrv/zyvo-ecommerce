import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import "./Footer.css";

const FooterSection = () => {
  return (
    <footer className="footer bg-dark text-light py-5">
      <Container>
        <Row className="gy-4">
          {/* Brand & About */}
          <Col md={3}>
            <h4 className="fw-bold">Zyvo</h4>
            <p className="">Your one-stop shop for the best deals on fashion, gadgets, and more.</p>
          </Col>

          {/* Quick Links */}
          <Col md={3}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/shop">Shop</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact" >Contact</a></li>
              <li><a href="/faq" >FAQs</a></li>
            </ul>
          </Col>

          {/* Contact Info */}
          <Col md={3}>
            <h5>Contact Us</h5>
            <p className="">Email: support@zyvo.com</p>
            <p className="">Phone: +1 (123) 456-7890</p>
            <p className="">Address: 123 Main Street, City, Country</p>
          </Col>

          {/* Newsletter */}
          <Col md={3}>
            <h5>Newsletter</h5>
            <Form>
              <Form.Control type="email" placeholder="Enter your email" className="mb-2" />
              <Button variant="primary" className="w-100">Subscribe</Button>
            </Form>
          </Col>
        </Row>

        {/* Social Media & Copyright */}
        <Row className="mt-4 text-center">
          <Col>
            <div className="social-icons d-flex justify-content-center gap-3">
              <a href="#" className="text-white fs-4"><FaFacebook /></a>
              <a href="#" className="text-white fs-4"><FaInstagram /></a>
              <a href="#" className="text-white fs-4"><FaTwitter /></a>
              <a href="#" className="text-white fs-4"><FaLinkedin /></a>
            </div>
            <p className=" mt-3">© 2025 Zyvo. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default FooterSection;
