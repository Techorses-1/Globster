import React from "react";
import { motion } from "framer-motion";

import "./MockupsHero.scss";

// NOTE: Replace this with your final production photography.
// Placeholder is served from picsum.photos (seeded, so it stays
// consistent) purely so the layout is visible while you wire up a real asset.
const HERO_IMAGE = "https://picsum.photos/seed/svc-mockups/1920/1080";

const contentVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut", delay },
  }),
};

const MockupsHero = () => {
  return (
    <section className="mockups-hero">
      <div className="mockups-hero__image-wrap">
        <div
          className="mockups-hero__image"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
        />
        <div className="mockups-hero__overlay" />
      </div>

      <div className="mockups-hero__content-wrap">
        <div className="mockups-hero__content">

          {/* <motion.div
            className="mockups-hero__breadcrumb"
            variants={contentVariants}
            custom={0.04}
            initial="hidden"
            animate="visible"
          >
            <a href="/">Home</a>
            <span>/</span>
            <a href="/services">Services</a>
            <span>/</span>
            <span>Product Mockups</span>
          </motion.div> */}

          <motion.span
            className="mockups-hero__eyebrow"
            variants={contentVariants}
            custom={0.1}
            initial="hidden"
            animate="visible"
          >
            Product Mockups
          </motion.span>

          <motion.h1
            className="mockups-hero__title"
            variants={contentVariants}
            custom={0.18}
            initial="hidden"
            animate="visible"
          >
            Mockups That Sell The Vision
          </motion.h1>

          <motion.p
            className="mockups-hero__one-liner"
            variants={contentVariants}
            custom={0.26}
            initial="hidden"
            animate="visible"
          >
            See Your Product Before It's Made
          </motion.p>

          <motion.p
            className="mockups-hero__description"
            variants={contentVariants}
            custom={0.34}
            initial="hidden"
            animate="visible"
          >
            Realistic mockups that showcase your products beautifully —
            before a single unit ships.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default MockupsHero;