import React from "react";
import { motion } from "framer-motion";

import "./VirtualAssistantHero.scss";

// NOTE: Replace this with your final production photography.
// Placeholder is served from picsum.photos (seeded, so it stays
// consistent) purely so the layout is visible while you wire up a real asset.
const HERO_IMAGE = "https://picsum.photos/seed/svc-va/1920/1080";

const contentVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut", delay },
  }),
};

const VirtualAssistantHero = () => {
  return (
    <section className="va-hero">
      <div className="va-hero__image-wrap">
        <div
          className="va-hero__image"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
        />
        <div className="va-hero__overlay" />
      </div>

      <div className="va-hero__content-wrap">
        <div className="va-hero__content">
          {/* <motion.div
            className="va-hero__breadcrumb"
            variants={contentVariants}
            custom={0.04}
            initial="hidden"
            animate="visible"
          >
            <a href="/">Home</a>
            <span>/</span>
            <a href="/services">Services</a>
            <span>/</span>
            <span>Virtual Assistant</span>
          </motion.div> */}

          <motion.span
            className="va-hero__eyebrow"
            variants={contentVariants}
            custom={0.1}
            initial="hidden"
            animate="visible"
          >
            Virtual Assistant
          </motion.span>

          <motion.h1
            className="va-hero__title"
            variants={contentVariants}
            custom={0.18}
            initial="hidden"
            animate="visible"
          >
            Virtual Support, Real Results
          </motion.h1>

          <motion.p
            className="va-hero__one-liner"
            variants={contentVariants}
            custom={0.26}
            initial="hidden"
            animate="visible"
          >
            Your Time Back, Every Day
          </motion.p>

          <motion.p
            className="va-hero__description"
            variants={contentVariants}
            custom={0.34}
            initial="hidden"
            animate="visible"
          >
            Reliable support for admin, inbox, and daily tasks — so you
            can focus on growth.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default VirtualAssistantHero;