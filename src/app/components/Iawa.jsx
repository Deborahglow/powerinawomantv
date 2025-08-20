"use client";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Iawa() {
  const awards = [
    { id: 1, title: "Life Time Achievement Award", image: "/images/iawagold.jpg" },
    { id: 2, title: "Leadership Award", image: "/images/iawagold.jpg" },
    { id: 3, title: "Creatives and Entrepreneur Award", image: "/images/iawagold.jpg" },
    { id: 4, title: "Politics and Humanitarian Award", image: "/images/iawagold.jpg" },
    { id: 4, title: "Religious Leaders Award", image: "/images/iawagold.jpg" },
  ];

  return (
    <section
      id="iawa"
      >
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      style={{ backgroundColor: "white", padding: "4rem 1rem" }}
    >
      <Container>
        <h2
          style={{
            textAlign: "center",
            fontWeight: "bold",
            marginBottom: "3rem",
            color: "#ff007f",
          }}
        >
          IAWA Awards Categories
        </h2>

        <Row className="g-4">
          {awards.map((award) => (
            <Col key={awards.id} xs={12} sm={6} md={3}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Card
                  style={{
                    backgroundColor: "#cc0066",
                    border: "none",
                    borderRadius: "12px",
                    overflow: "hidden",
                    textAlign: "center",
                    color: "white",
                    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                  }}
                >
                  <Image
                    src={award.image}
                    alt={award.title}
                    width={400}
                    height={400}
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                    }}
                  />
                  <Card.Body>
                    <Card.Title style={{ fontWeight: "bold" }}>
                      {award.title}
                    </Card.Title>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>

        {/* CTA Button */}
        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <Button
            href="#contact"
            style={{
              backgroundColor: "black",
              color: "white",
              border: "none",
              padding: "0.75rem 2rem",
              fontWeight: "bold",
              borderRadius: "30px",
              transition: "all 0.3s ease",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor = "#444")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor = "black")
            }
          >
            Get Involve
          </Button>
        </div>
      </Container>
    </motion.div>
    </section>
  );
}

