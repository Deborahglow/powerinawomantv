"use client";
import { useRef } from "react";
import { Carousel, Container, Row, Col, Button } from "react-bootstrap";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import styles from './Nominee.module.css';

const categories = [
  {
    title: "Life Time Achievement Award",
    image: "/images/iawagold.jpg",
  },
  {
    title: "Leadership Award",
    image: "/images/iawagold.jpg",
  },
  {
    title: "Governance and Humanitarian Award",
    image: "/images/iawagold.jpg",
  },
  {
    title: "Religious Leaders Award",
    image: "/images/iawagold.jpg",
  },
  {
    title: "Creatives and Entrepreneur Award",
    image: "/images/iawagold.jpg",
  },
];

export default function NominationCategories() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const bounceSlide = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 12,
      },
    },
  };

  return (
    <section
      ref={ref}
      id="nomineecategory"
      style={{ padding: "80px 0", backgroundColor: "#fff" }}
    >
      <Container>
        <motion.h2
          className="text-center mb-5"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={bounceSlide}
          style={{ fontFamily: "Poppins", fontWeight: "700" }}
        >
          Nomination Category
        </motion.h2>

        {/* Desktop Grid */}
        <Row className="d-none d-md-flex justify-content-center text-center">
          {categories.map((category, idx) => (
            <motion.div
              key={idx}
              className="col-md-2 mx-3"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={bounceSlide}
            >
              <div
                className="category-card"
                style={{
                  backgroundColor: "#ff4f8b", // default background same as button hover
                  color: "#fff",
                  borderRadius: "10px",
                  overflow: "hidden",
                  position: "relative",
                  cursor: "pointer",
                  transition: "transform 0.3s ease",
                }}
              >
                {/* Image */}
                <Image
                  src={category.image}
                  alt={category.title}
                  width={300}
                  height={200}
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "180px",
                  }}
                />
                {/* Overlay */}
                <div
                  className="overlay"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0,0,0,0.4)",
                    transition: "background-color 0.3s ease",
                  }}
                ></div>

                {/* Text */}
                <div style={{ padding: "15px", position: "relative", zIndex: 2 }}>
                  <h5 style={{ fontFamily: "Poppins", fontWeight: "600" }}>
                    {category.title}
                  </h5>
                  
                </div>
              </div>
            </motion.div>
          ))}
        </Row>

        {/* Mobile Carousel */}
        <Carousel
          className="d-md-none"
          interval={3000}
          pause={false}
          indicators={false}
        >
          {categories.map((category, idx) => (
            <Carousel.Item key={idx}>
              <motion.div
                className="text-center"
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={bounceSlide}
              >
                <div
                  className="category-card"
                  style={{
                    backgroundColor: "#ff4f8b",
                    color: "#fff",
                    borderRadius: "10px",
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  {/* Image */}
                  <Image
                    src={category.image}
                    alt={category.title}
                    width={300}
                    height={200}
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "180px",
                    }}
                  />
                  {/* Overlay */}
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      backgroundColor: "rgba(0,0,0,0.4)",
                      transition: "background-color 0.3s ease",
                    }}
                  ></div>

                  {/* Text */}
                  <div style={{ padding: "15px", position: "relative", zIndex: 2 }}>
                    <h5 style={{ fontFamily: "Poppins", fontWeight: "600" }}>
                      {category.title}
                    </h5>
                    <Button
                      variant="light"
                      style={{
                        marginTop: "10px",
                        backgroundColor: "#ff4f8b",
                        border: "none",
                        fontFamily: "Poppins",
                        color: "#fff",
                        fontWeight: "500",
                        padding: "8px 16px",
                      }}
                    >
                      Nominate Now
                    </Button>
                  </div>
                </div>
              </motion.div>
            </Carousel.Item>
          ))}
        </Carousel>
        {/* General Know More Button */}
        <div style={{ marginTop: "40px", display: "flex", justifyContent: "center" }}>
          <Button
            href="#contact"
            style={{
              backgroundColor: "#ff4f81",
              color: "#fff",
              fontFamily: "Poppins",
              fontWeight: "600",
              padding: "10px 25px",
              borderRadius: "25px",
              border: "none",
              transition: "all 0.3s ease-in-out"
            }}
            onMouseEnter={(e) => {
      e.target.style.backgroundColor = "#e63a6f"; // Darker pink on hover
      e.target.style.transform = "scale(1.05)";
    }}
    onMouseLeave={(e) => {
      e.target.style.backgroundColor = "#ff4f81"; // Original pink
      e.target.style.transform = "scale(1)";
    }}
          >
            Know More
          </Button>
          </div>
      </Container>

      <style jsx>{`
        .category-card:hover {
          transform: scale(1.05);
        }
        .category-card:hover .overlay {
          background-color: rgba(0, 0, 0, 0);
        }
      `}</style>

      <Container className="mt-4">
        <motion.div
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 50 }}
        >
          <Carousel interval={7000} controls={false} indicators={false} fade>
            <Carousel.Item>
              <p className={styles.quote}>
                "Empowering women is the key to transforming Africa."
              </p>
            </Carousel.Item>
            <Carousel.Item>
              <p className={styles.quote}>
                "Her voice, her power, her story — celebrated."
              </p>
            </Carousel.Item>
            <Carousel.Item>
              <p className={styles.quote}>
                "Recognizing excellence, inspiring the next generation."
              </p>
            </Carousel.Item>
            <Carousel.Item>
              <p className={styles.quote}>
                "Recognizing excellence, inspiring the next generation."
              </p>
            </Carousel.Item>
            <Carousel.Item>
              <p className={styles.quote}>
                "Recognizing excellence, inspiring the next generation."
              </p>
            </Carousel.Item>
          </Carousel>
        </motion.div>
        </Container>
    </section>
  );
}
