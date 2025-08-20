import React from "react";
import { Container, Row, Col, } from "react-bootstrap";
// import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer id="footer" className={styles.footer}>
      <Container>
        <Row>
          {/* About */}
          <Col md={4} className={styles.heroSection}>
            {/* <img src="/images/reallogo.jpg" alt="NGO Awards Logo" className="footer-logo" /> */}
            <p>
              Power In A Woman Organization is building a legacy for women that will live lasting impact in the women lives through different generations.
            </p>
            {/* <div className="social-icons">
              <FaFacebookF />
              <FaTwitter />
              <FaLinkedinIn />
              <FaInstagram />
            </div> */}
          </Col>

          {/* Menu */}
          <Col md={6} className={styles.footerm}>
            <h5>Menu</h5>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#piaw">PIAW</a></li>
              <li><a href="#iawa">IAWA</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </Col>

          {/* Contact */}
          <Col md={6} className={styles.footerc}>
            <h5>Contact Details</h5>
            <p>Nepa Road, Kubwa-Abuja, Nigeria.</p>
            <p>powerinawomantv@gmail.com</p>
          </Col>
        </Row>

        <Row className={styles.footerr}>
          <Col className="text-center">
            <p>PIAW | IAWAAWARD © 2025 All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
