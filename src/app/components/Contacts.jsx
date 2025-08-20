"use client";
import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card, Alert } from "react-bootstrap";
import { motion } from "framer-motion";

export default function Contacts() {
  const [status, setStatus] = useState(""); // for success/error messages

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("SUCCESS");
        form.reset(); // clear form after submit
      } else {
        setStatus("ERROR");
      }
    } catch (err) {
      setStatus("ERROR");
    }
  };

  return (
    <section id="contact" style={{ backgroundColor: "#f9f9f9", padding: "60px 0" }}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card
            style={{
              padding: "30px",
              borderRadius: "12px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
              backgroundColor: "#fff",
            }}
          >
            <h2 className="text-center mb-4" style={{ fontWeight: "bold", color: "#d63384" }}>
              To Contact Us, kindly Fill The Form Below
            </h2>

            {/* Success or Error Message */}
            {status === "SUCCESS" && (
              <Alert variant="success" className="text-center">
                ✅ Message Sent Successfully! We’ll get back to you soon.
              </Alert>
            )}
            {status === "ERROR" && (
              <Alert variant="danger" className="text-center">
                ❌ Oops! Something went wrong. Please try again.
              </Alert>
            )}

            <Form
              action="https://formspree.io/f/xgvzjllp"
              method="POST"
              onSubmit={handleSubmit}
            >
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Enter your name" required />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter your email" required />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="tel" name="tel" placeholder="Enter your phone number" required />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={4} name="message" placeholder="Write your message" required />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Check
                  type="checkbox"
                  label="Would you like to sponsor any of our projects?"
                  name="sponsor_a_project"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Check
                  type="checkbox"
                  label="Would you like to volunteer to be part of our team?"
                  name="volunteer"
                />
              </Form.Group>

              <div className="text-center">
                <Button
                  type="submit"
                  style={{
                    backgroundColor: "#ff69b4", // pink
                    border: "none",
                    padding: "10px 25px",
                    fontWeight: "bold",
                    borderRadius: "8px",
                    transition: "all 0.3s ease",
                  }}
                  onMouseOver={(e) => (e.target.style.backgroundColor = "#d63384")} // dark pink
                  onMouseOut={(e) => (e.target.style.backgroundColor = "#ff69b4")}
                >
                  Send
                </Button>
              </div>
            </Form>
          </Card>
        </motion.div>
      </Container>
    </section>
  );
}
