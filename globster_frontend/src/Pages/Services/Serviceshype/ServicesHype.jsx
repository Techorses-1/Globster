import React from "react";
import { motion } from "framer-motion";
import "./ServicesHype.scss";

const HEADING_WORDS =
  "One Team. Every Skill Your Business Will Ever Need.".split(" ");

const SERVICE_TICKER = [
  "Vector Artwork",
  "Embroidery Digitizing",
  "Image & Video Editing",
  "Product Mockups",
  "Data Processing",
  "Virtual Assistance",
  "Website Development",
  "E-commerce Development",
];

const viewportSettings = { once: true, amount: 0.5 };

const wordContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.05,
    },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

const ServicesHype = () => {
  return (
    <section className="services-hype">
      <div className="services-hype__inner">
        <motion.span
          className="services-hype__eyebrow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportSettings}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          What We Offer
        </motion.span>

        <motion.h2
          className="services-hype__heading"
          variants={wordContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
        >
          {HEADING_WORDS.map((word, i) => {
            const isAccent = word === "Every" || word === "Ever" || word === "Need.";
            return (
              <motion.span
                className={`services-hype__word ${
                  isAccent ? "services-hype__word--accent" : ""
                }`}
                variants={wordVariants}
                key={`${word}-${i}`}
              >
                {word}
                {"\u00A0"}
              </motion.span>
            );
          })}
        </motion.h2>

        <motion.p
          className="services-hype__subtext"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportSettings}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
        >
          Eight services, one team, zero hassle. Scroll down and see
          everything we can take off your plate.
        </motion.p>
      </div>

      {/* Infinite scrolling ticker of every service */}
      <div className="services-hype__marquee">
        <div className="services-hype__marquee-track">
          {[...SERVICE_TICKER, ...SERVICE_TICKER].map((service, i) => (
            <span className="services-hype__marquee-item" key={i}>
              {service}
              <span className="services-hype__marquee-dot" aria-hidden="true">
                •
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesHype;