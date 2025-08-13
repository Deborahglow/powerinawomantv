"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
// import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className="container py-5" style={{ marginTop: "4rem" }}>
      <div className="row align-items-center">
        
        {/* Left Column: Text + CTA */}
        <motion.div
          className="col-md-6"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 10, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h4 className="fw-bold mb-3" style={{ color: "#e63a6f",}}>What is the International African Women Award?</h4>
          <p>
            International African Women Awards acknowledges the impact African women are making around the world; the award recognizes them for their tremendous efforts to alleviate sufferings, promote societal growth, causing significant changes within their sphere of influence and motivates gender equality acceptance due to their outstanding works. The award showcases women who have braved the odds, crossed every known barrier to become role models and world changers. All awards are significant and highlights the high impact contributions and achievements made by African women across the world.
          </p>
          <h4 className="fw-bold mb-3" style={{ color: "#e63a6f",}}>What Is The Award Process Like?</h4>
          <p>
            The international African women awards is decided by a public nomination across the world; a panel collates all the nominated names, confirming each data and achievements. After which a verified letter seeking consent to publish biography online for the final vote is sent to nominated persons. This final collation will be done by our international judges cut across the globe.

            The award is in various categories and it cuts across the whole of Africa and African’s living and working in diaspora.
            3 persons each will be recognized in each category and an award presented to winners at the end of the process.
          </p>
          <h4 className="fw-bold mb-3" style={{ color: "#e63a6f",}}>Public Votes</h4>
          <p>
            The public nominations are held in consideration with the award requirements before the nominated can win. This criteria’s are online and they form the yard stick to ascertain who qualifies for the life time achievements awards.
          </p>
          <Link href="#contact" scroll={true}>
        <button className="learn-more-btn">Learn More</button>
      </Link>

      <style jsx>{`
        .about-section {
          text-align: center;
          padding: 40px;
        }

        .learn-more-btn {
          background-color: #ff4f81;
          color: white;
          padding: 10px 20px;
          border: none;
          border-radius: 50px;
          cursor: pointer;
          font-size: 16px;
          transition: background-color 0.3s ease;
        }

        .learn-more-btn:hover {
          color: #e63a6f";
        }
      `}</style>
        </motion.div>

        {/* Right Column: Image */}
        <motion.div
          className="col-md-6 text-center"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 10, duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Image
            src="/images/reallogo.jpg" // Change to your image path
            alt="About Us"
            width={700}
            height={600}
            className="img-fluid rounded shadow"
          />
        </motion.div>

      </div>
    </section>
  );
}
