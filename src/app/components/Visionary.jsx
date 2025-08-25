"use client";

import { Carousel, Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const visionaries = [
  {
    id: 1,
    name: "Bishop Newman Livingstone",
    role: "Power in a Woman is a mandate given to God's servant in 2009 to take the revelation of the power in a woman to the nations and the IAWA Awards vision was birthed in 2020 to celebrate high impact women who have risen in the cadar and embodies the power in a woman message",
    img: "https://i.im.ge/2025/08/25/JeBROh.1756126584137.jpeg", // replace with your image link
  },
  {
    id: 2,
    name: "Pastor Emily Newman",
    role: "She is the co-visionaire of Power in a Woman that embodies the strength of a woman",
    img: "https://i.im.ge/2025/08/25/JeBoP8.1756126418221.jpeg", // replace with your image link
  },
];

export default function Visionary() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section
      ref={ref}
      className="py-5"
      style={{ backgroundColor: "white", textAlign: "center" }}
    >
      {/* Section Title with Accent Lines */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={inView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2
          style={{
            fontFamily: "Poppins, sans-serif",
            color: "pink",
            fontWeight: "bold",
          }}
        >
          <hr style={{ borderTop: "3px solid pink", width: "50px", margin: "0 auto 10px" }} />
          Meet the Visionaries
          <hr style={{ borderTop: "3px solid pink", width: "50px", margin: "10px auto 0" }} />
        </h2>
      </motion.div>

      {/* Carousel */}
      <Container className="mt-4">
        <Row className="justify-content-center">
          <Col md={8}>
            <Carousel
              controls={true}
              indicators={false}
              interval={3000}
              fade={false}
              className="text-center"
            >
              {visionaries.map((person) => (
                <Carousel.Item key={person.id}>
                  <div className="d-flex flex-column align-items-center">
                    <Image
                      src={person.img}
                      alt={person.name}
                      width={250}
                      height={250}
                      unoptimized
                      className="rounded"
                      style={{
                        objectFit: "cover",
                        aspectRatio: "1/1",
                      }}
                    />
                    <h5
                      className="mt-3"
                      style={{ fontFamily: "Poppins, sans-serif", fontWeight: "600" }}
                    >
                      {person.name}
                    </h5>
                    <p
                      style={{
                        fontFamily: "Poppins, sans-serif",
                        fontSize: "14px",
                        maxWidth: "300px",
                      }}
                    >
                      {person.role}
                    </p>
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
