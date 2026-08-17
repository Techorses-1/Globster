import React from "react";
import { motion } from "framer-motion";

import "./WebsiteHero.scss";

// NOTE: Replace this with your final production photography.
// Placeholder is served from picsum.photos (seeded, so it stays
// consistent) purely so the layout is visible while you wire up a real asset.
const HERO_IMAGE = "https://picsum.photos/seed/svc-website/1920/1080";

const contentVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut", delay },
  }),
};

const WebsiteHero = () => {
  return (
    <section className="website-hero">
      <div className="website-hero__image-wrap">
        <div
          className="website-hero__image"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
        />
        <div className="website-hero__overlay" />
      </div>

      <div className="website-hero__content-wrap">
        <div className="website-hero__content">
          {/* <motion.div
            className="website-hero__breadcrumb"
            variants={contentVariants}
            custom={0.04}
            initial="hidden"
            animate="visible"
          >
            <a href="/">Home</a>
            <span>/</span>
            <a href="/services">Services</a>
            <span>/</span>
            <span>Website Development</span>
          </motion.div> */}

          <motion.span
            className="website-hero__eyebrow"
            variants={contentVariants}
            custom={0.1}
            initial="hidden"
            animate="visible"
          >
            Website Development
          </motion.span>

          <motion.h1
            className="website-hero__title"
            variants={contentVariants}
            custom={0.18}
            initial="hidden"
            animate="visible"
          >
            Websites Crafted Around You
          </motion.h1>

          <motion.p
            className="website-hero__one-liner"
            variants={contentVariants}
            custom={0.26}
            initial="hidden"
            animate="visible"
          >
            Websites Built Around You
          </motion.p>

          <motion.p
            className="website-hero__description"
            variants={contentVariants}
            custom={0.34}
            initial="hidden"
            animate="visible"
          >
            Custom-coded websites designed to match your brand and convert
            visitors into customers.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default WebsiteHero;