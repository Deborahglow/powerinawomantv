"use client";
import { useEffect } from "react";
import Link from "next/link";
import { Navbar, Nav, Container } from "react-bootstrap";
import Image from "next/image";
import styles from "./Navbar.module.css";

export default function CustomNavbar() {
  // Smooth scroll for internal links
  useEffect(() => {
    const handleSmoothScroll = (e) => {
      const href = e.target.getAttribute("href");
      if (href && href.startsWith("#")) {
        e.preventDefault();
        const targetElement = document.querySelector(href);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    document.querySelectorAll('a[href^="#"]').forEach((link) => {
      link.addEventListener("click", handleSmoothScroll);
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach((link) => {
        link.removeEventListener("click", handleSmoothScroll);
      });
    };
  }, []);

  return (
    <Navbar
      expand="lg"
      className={`shadow-lg ${styles.navbarCustom}`}
      fixed="top"
    >
      <Container>
        {/* Logo */}
        <Link href="/" className="navbar-brand">
          <Image
            src="/images/reallogo.jpg" // Place logo in public folder
            alt="NGO Logo"
            width={50}
            height={50}
            className={styles.logo}
          />
        </Link>

        {/* Toggle Button */}
        <Navbar.Toggle
          aria-controls="navbarNav"
          className={styles.customToggler}
        />

        {/* Links */}
        <Navbar.Collapse id="navbarNav" className="justify-content-end">
          <Nav>
            <Nav.Link href="#home" className={styles.navLink}>Home</Nav.Link>
            <Nav.Link href="#about" className={styles.navLink}>About</Nav.Link>
            <Nav.Link href="#nomineecategory" className={styles.navLink}>Nomination Category</Nav.Link>
            {/* <Nav.Link href="#gallery" className={styles.navLink}>Gallery</Nav.Link> */}
            <Nav.Link href="#contact" className={styles.navLink}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
