import React from "react";
import { motion } from "framer-motion";

import "./ImageEditingHero.scss";

// NOTE: Replace this with your final production photography.
// Placeholder is served from picsum.photos (seeded, so it stays
// consistent) purely so the layout is visible while you wire up a real asset.
const HERO_IMAGE = "https://picsum.photos/seed/svc-imagevideo/1920/1080";

const contentVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut", delay },
  }),
};

const ImageEditingHero = () => {
  return (
    <section className="image-editing-hero">
      <div className="image-editing-hero__image-wrap">
        <div
          className="image-editing-hero__image"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
        />
        <div className="image-editing-hero__overlay" />
      </div>

      <div className="image-editing-hero__content-wrap">
        <div className="image-editing-hero__content">

          {/* <motion.div
            className="image-editing-hero__breadcrumb"
            variants={contentVariants}
            custom={0.04}
            initial="hidden"
            animate="visible"
          >
            <a href="/">Home</a>
            <span>/</span>
            <a href="/services">Services</a>
            <span>/</span>
            <span>Digital Image Editing</span>
          </motion.div> */}

          <motion.span
            className="image-editing-hero__eyebrow"
            variants={contentVariants}
            custom={0.1}
            initial="hidden"
            animate="visible"
          >
            Digital Image Editing
          </motion.span>

          <motion.h1
            className="image-editing-hero__title"
            variants={contentVariants}
            custom={0.18}
            initial="hidden"
            animate="visible"
          >
            Visuals That Demand Attention
          </motion.h1>

          <motion.p
            className="image-editing-hero__one-liner"
            variants={contentVariants}
            custom={0.26}
            initial="hidden"
            animate="visible"
          >
            Polished Visuals, Every Time
          </motion.p>

          <motion.p
            className="image-editing-hero__description"
            variants={contentVariants}
            custom={0.34}
            initial="hidden"
            animate="visible"
          >
            Professional editing that makes your photos and videos look
            sharp, consistent, and ready for the market.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default ImageEditingHero;