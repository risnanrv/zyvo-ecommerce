import React from "react";
import "./AboutSection.css";
import aboutImage from "../../assets/Logo.png";
import { FaShippingFast, FaLock, FaHeadset } from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap";

const AboutSection = () => {
  return (
    <section className="about-section">
      <Container>
        <Row className="about-hero align-items-center g-5">
          <Col lg={6} className="order-lg-1 order-2">
            <div className="about-content">
              <h1 className="about-title">
                About <span className="highlight">Zyvo</span>
              </h1>
              <p className="about-description">
                Welcome to Zyvo, the ultimate destination for men's fashion. We bring 
                you the trendiest styles, finest quality, and unbeatable prices. Whether 
                you're dressing up for an occasion or upgrading your everyday look, Zyvo 
                has you covered.
              </p>
              <div className="stats-container">
                <div className="stat-item">
                  <span className="stat-number">500+</span>
                  <span className="stat-label">Happy Clients</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">100+</span>
                  <span className="stat-label">Premium Products</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">24/7</span>
                  <span className="stat-label">Support</span>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={6} className="order-lg-2 order-1">
            <div className="about-image-container">
              <img 
                src={aboutImage} 
                alt="About Zyvo" 
                className="img-fluid about-image" 
              />
            </div>
          </Col>
        </Row>
        
        <Row className="about-features g-4 mt-5">
          <Col md={4}>
            <div className="feature-card">
              <div className="feature-icon-container">
                <FaShippingFast className="feature-icon" />
              </div>
              <h3>Fast & Free Shipping</h3>
              <p>Enjoy free and quick delivery on all orders, no hidden costs.</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="feature-card">
              <div className="feature-icon-container">
                <FaLock className="feature-icon" />
              </div>
              <h3>Secure Payments</h3>
              <p>We ensure 100% secure payment transactions with top-tier encryption.</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="feature-card">
              <div className="feature-icon-container">
                <FaHeadset className="feature-icon" />
              </div>
              <h3>24/7 Support</h3>
              <p>Need help? Our customer support is available round the clock.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;