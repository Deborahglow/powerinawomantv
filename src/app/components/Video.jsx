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
              <div>
              <iframe width="760" height="315" src="https://www.youtube.com/embed/A9pBU1tEYTY?si=TFSeFyhtNh4XWbe8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
