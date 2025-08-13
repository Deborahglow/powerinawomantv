"use client";
import { motion } from "framer-motion";
import { Container } from "react-bootstrap";
import styles from "./Hero.module.css";
// import { Carousel } from 'react-bootstrap';

export default function Hero() {
  return (
    <section id="home" className={styles.heroSection}>
      <Container fluid className="p-0">
        <motion.video
          className={styles.heroVideo}
          autoPlay
          muted
          loop
          playsInline
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0, ease: "easeIn" }}
        >
          <source src="/images/finalvid.mp4" type="video/mp4" />
        </motion.video>

        
      </Container>
    </section>
  );
}
