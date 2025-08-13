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
          {/* <Col md={4} className={styles.heroSection}> */}
            {/* <img src="/images/reallogo.jpg" alt="NGO Awards Logo" className="footer-logo" /> */}
            {/* <p>
              The IAWA nomination team Awards to recognize and celebrate 
              outstanding NGOs contributing to sustainable development.
            </p> */}
            {/* <div className="social-icons">
              <FaFacebookF />
              <FaTwitter />
              <FaLinkedinIn />
              <FaInstagram />
            </div> */}
          {/* </Col> */}

          {/* Menu */}
          <Col md={6} className={styles.footerm}>
            <h5>Menu</h5>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#nomineecategory">Nomination Category</a></li>
              <li><a href="#contact">Contact</a></li>
              {/* <li><a href="#contact">Contact</a></li> */}
            </ul>
          </Col>

          {/* Contact */}
          <Col md={6} className={styles.footerc}>
            <h5>Contacts</h5>
            <p>FO1, Kubwa, Abuja, Nigeria.</p>
            {/* <p>+254 729 782 688</p> */}
            <p>iawa@gmail.com</p>
          </Col>
        </Row>

        <Row className={styles.footerr}>
          <Col className="text-center">
            <p>IAWAAwards © 2025 All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
