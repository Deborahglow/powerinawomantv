"use client";
import { motion } from "framer-motion";
// import Image from "next/image";
import { Button } from "react-bootstrap";

export default function About() {
  return (
    <section id="about" className="py-5 bg-white">
      <div className="container">
        <h2 className="text-center mb-5 fw-bold">Who We Are</h2>
        <div className="row align-items-center">
          {/* Left Side - Text & Cards */}
          <div className="col-md-6">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <div className="card shadow border-0 p-4">
                <h4 className="fw-bold">Power in a Woman Organization</h4>
                <p>
                  Power in a Woman is a non governmental organisation that is dedicated to empowering women and the girl child, supporting and advocating for women.
                </p>
                <Button
                href="#piaw"
                  style={{
                  backgroundColor: "#ff4b93",
                  color: "white",
                  fontWeight: "bolder",
                  border: "none",
                  padding: "10px 20px",
                  borderRadius: "50px",
                  transition: "0.3s",
              }}
              onMouseOver={(e) => {
              e.target.style.color = "#ff4b93";
              e.target.style.backgroundColor = "#d63384";
              }}
              onMouseOut={(e) => {
              e.target.style.color = "#d63384";
              e.target.style.backgroundColor = "#ff4b93";
              }}
            >
              See How We Do It
          </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="card shadow border-0 p-4">
                <h4 className="fw-bold">IAWA Award</h4>
                <p>
                  IAWA is the award giving arm of PIAW vision that highlights high impact women that have become role models to the younger generation, change agents that inspire other women for excellence and also showcase endless possibilities for women through their achievements.
                </p>
                <Button
                href="#iawa"
                  style={{
                  backgroundColor: "#ff4b93",
                  color: "white",
                  fontWeight: "bolder",
                  border: "none",
                  padding: "10px 20px",
                  borderRadius: "50px",
                  transition: "0.3s",
                }}
                onMouseOver={(e) => {
                e.target.style.color = "#ff4b93";
                e.target.style.backgroundColor = "#d63384";
                }}
                onMouseOut={(e) => {
                e.target.style.color = "#d63384";
                e.target.style.backgroundColor = "#ff4b93";
                }}
          >
            Know More
          </Button>

              </div>
            </motion.div>
          </div>

          {/* Right Side - Image */}
          <div className="col-md-6 text-center">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <a href="https://im.ge/i/reallogo.JpWVR6"><img src="https://i.im.ge/2025/08/21/JpWVR6.reallogo.jpeg" alt="reallogo" border="0"></img></a>
              

            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
