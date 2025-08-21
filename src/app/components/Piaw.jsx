"use client";
import { useEffect, useRef, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Image from "next/image";

export default function PiawSection() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const images = [
    {
      src: "/images/schoolchild2.jpg",
      alt: "Women in Leadership",
      text: "We advocate and train the girl child and we have a vision to build an all girls schools so that every girl child will have the priviledge of education."
    },
    {
      src:  "/images/informal.jpg",
      alt: "Team Collaboration",
      text: "We organise informal trainings for women to empower them both financially and mentally so as to help them start up businesses."
    },
    {
      src: "/images/homeless.jpg",
      alt: "Community Support",
      text: "Providing homes for young pregnant and homeless girls is also our vision."
    },
    {
      src: "/images/abusedwoman.jpg",
      alt: "Community Support",
      text: "Abused women are sheltered to prevent further emotional, mental and physical damages through our abuse women shelter center."
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      id="piaw"
      ref={sectionRef}
      style={{
        padding: "60px 0",
        overflow: "hidden",
        backgroundColor: "#ffffff",
      }}
    >
      <Container
        style={{
          transform: isVisible ? "translateX(0)" : "translateX(100%)",
          opacity: isVisible ? 1 : 0,
          transition: "all 0.8s ease-in-out",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontWeight: "bold",
            marginBottom: "30px",
            color: "#d63384",
          }}
        >
          P.I.A.W. – Power in a Woman
        </h2>

        {images.map((item, index) => (
          <Row
            key={index}
            style={{
              marginBottom: "40px",
              flexDirection: index % 2 === 0 ? "row" : "row-reverse",
              alignItems: "center",
            }}
          >
            {/* Image */}
            <Col md={6} xs={12} style={{ position: "relative" }}>
              <Image
                src={item.src}
                alt={item.alt}
                width={300}
                height={400}
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "10px",
                }}
              />

              {/* Card Overlay */}
              <div
                style={{
                  position: "absolute",
                  bottom: "10px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  background: "rgba(255, 255, 255, 0.65)",
                  padding: "15px",
                  borderRadius: "8px",
                  width: "90%",
                  textAlign: "center",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                }}
              >
                <p style={{ marginBottom: "10px" }}>{item.text}</p>
                <Button
                  href="#contact"
                  style={{
                    backgroundColor: "#d63384",
                    border: "none",
                    padding: "6px 14px",
                    fontWeight: "bold",
                    borderRadius: "4px",
                    transition: "0.3s",
                    margin: "5px",
                  }}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = "#ad1457";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = "#d63384";
                  }}
                >
                  Be a Sponsor
                </Button>
                {/* <p style={{ marginBottom: "10px" }}>{item.text}</p> */}
                <Button
                  href="#contact"
                  style={{
                    backgroundColor: "#d63384",
                    border: "none",
                    padding: "6px 14px",
                    fontWeight: "bold",
                    borderRadius: "4px",
                    transition: "0.3s",
                  }}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = "#ad1457";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = "#d63384";
                  }}
                >
                  Join our Team
                </Button>
              </div>
            </Col>
          </Row>
        ))}
      </Container>
    </section>
  );
}
