'use client'
import { Container, Row, Col } from "react-bootstrap";

export default function Video() {
  return (
    <section id="video-section" style={{ padding: "60px 0", backgroundColor: "#fff" }}>
      <Container>
        <Row>
          <Col md={6} className="mx-auto text-center">
            <h2 className="mb-4">The Deborah's Concept</h2>
            <div
              style={{
                borderRadius: "12px",
                boxShadow: "0px 4px 12px rgba(0,0,0,0.15)",
                overflow: "hidden",
              }}
            >
              {/* Responsive Video Wrapper */}
              <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
                <iframe
                  src="https://www.youtube.com/embed/A9pBU1tEYTY?si=TFSeFyhtNh4XWbe8"
                  title="women arise video"
                  frameBorder="0"
                  allow="accelerometer; encrypted-media; gyroscope;"
                  referrerPolicy="strict-origin-when-cross-origin"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    border: "0",
                  }}
                ></iframe>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
