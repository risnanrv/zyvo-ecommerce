import React from "react";
import "./AboutSection.css";
import aboutImage from "../../assets/Logo.png";
import { FaShippingFast, FaLock, FaHeadset } from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap";

const AboutSection = () => {
  return (
    <Container className="about-container">
      <Row className="about-hero align-items-center">
        <Col md={6} className="text-center text-md-start">
          <h1>About Zyvo</h1>
          <p>
            Welcome to Zyvo, the ultimate destination for men's fashion. We bring 
            you the trendiest styles, finest quality, and unbeatable prices. Whether 
            you're dressing up for an occasion or upgrading your everyday look, Zyvo 
            has you covered.
          </p>
        </Col>
        <Col md={6} className="text-center">
          <img src={aboutImage} alt="About Zyvo" className="img-fluid about-image" />
        </Col>
      </Row>
      
      <Row className="about-features text-center mt-5">
        <Col md={4} className="feature">
          <FaShippingFast className="feature-icon" />
          <h3>Fast & Free Shipping</h3>
          <p>Enjoy free and quick delivery on all orders, no hidden costs.</p>
        </Col>
        <Col md={4} className="feature">
          <FaLock className="feature-icon" />
          <h3>Secure Payments</h3>
          <p>We ensure 100% secure payment transactions with top-tier encryption.</p>
        </Col>
        <Col md={4} className="feature">
          <FaHeadset className="feature-icon" />
          <h3>24/7 Support</h3>
          <p>Need help? Our customer support is available round the clock.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutSection;
