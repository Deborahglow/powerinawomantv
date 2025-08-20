import { Container, Row, Col } from "react-bootstrap";

export default function Video() {
  return (
    <section id="video-section" style={{ padding: "60px 0", backgroundColor: "#fff" }}>
      <Container>
        <Row>
          <Col md={8} className="mx-auto text-center">
            <h2 className="mb-4">The Deborah's Concept</h2>
            <div
              style={{
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0px 4px 12px rgba(0,0,0,0.15)",
              }}
            >
              <video
                controls
                style={{ width: "100%", height: "auto", borderRadius: "12px" }}
              >
                <source src="/images/piawvid.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
