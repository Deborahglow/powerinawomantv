"use client";
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

export default function HeroSection() {
  const texts = [
    "Empowering Women.",
    "Recognizing High-Impact Women.",
    "Revealing The Glory Of The Woman.",
    "Celebrating The Power In The Woman."
  ];

  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  // Typing effect logic
  useEffect(() => {
    if (charIndex < texts[textIndex].length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + texts[textIndex][charIndex]);
        setCharIndex(prev => prev + 1);
      }, 50); // typing speed
      return () => clearTimeout(timeout);
    } else {
      // Wait, then show next text
      const timeout = setTimeout(() => {
        setTextIndex(prev => (prev + 1) % texts.length);
        setDisplayText("");
        setCharIndex(0);
      }, 1500); // pause before next sentence
      return () => clearTimeout(timeout);
    }
  }, [charIndex, textIndex]);

  return (
    <section id="home">
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      style={{
        background: "linear-gradient(135deg, #ff4b93, #d63384, #a61e4d, #6a0d47)",
        backgroundSize: "400% 400%",
        animation: "gradientBG 8s ease infinite",
        color: "white",
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container>
        <Row className="justify-content-center text-center mb-4 mt-4">
          <Col md={10}>
            <h1 className="fw-bold display-4">{displayText}</h1>
          </Col>
        </Row>
      </Container>
      <style jsx>{`
        @keyframes gradientBG {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </motion.section>
    </section>
  );
}
