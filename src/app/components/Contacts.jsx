"use client";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      id="contact"
      style={{ padding: "60px 0", background: "#f9f9f9" }}
      ref={ref}
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={
            isInView
              ? { opacity: 1, x: 0, transition: { type: "spring", stiffness: 80 } }
              : {}
          }
        >
          <div
            style={{
              background: "#fff",
              padding: "30px",
              borderRadius: "10px",
              boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
            }}
          >
            <h2 className="text-center mb-4">Contact Us</h2>
            <Form>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="text" placeholder="Enter phone number" />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Reason for reaching out</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Write your message" />
              </Form.Group>

              <div className="text-center">
                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  animate={
                    isInView
                      ? { opacity: 1, x: 0, transition: { type: "spring", stiffness: 80, delay: 0.2 } }
                      : {}
                  }
                >
                  <Button
                    style={{
                      background: "#ff4f81", // same as 'Know More' button
                      border: "none",
                      padding: "10px 30px",
                      fontWeight: "bold",
                    }}
                  >
                    Send
                  </Button>
                </motion.div>
              </div>
            </Form>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
