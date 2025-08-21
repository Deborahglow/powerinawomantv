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
              <div className="video-container" style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
              <iframe
              src="https://player.vimeo.com/video/1111798722?badge=0&autopause=0&player_id=0& app_id=58479"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
              title="piawvid"
              ></iframe>
            </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
