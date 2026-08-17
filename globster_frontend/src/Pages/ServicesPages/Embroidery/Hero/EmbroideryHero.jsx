import React from "react";
import { motion } from "framer-motion";

import "./EmbroideryHero.scss";

// NOTE: Replace this with your final production photography.
// Placeholder is served from picsum.photos (seeded, so it stays
// consistent) purely so the layout is visible while you wire up a real asset.
const HERO_IMAGE = "https://picsum.photos/seed/svc-embroidery/1920/1080";

const contentVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut", delay },
  }),
};

const EmbroideryHero = () => {
  return (
    <section className="embroidery-hero">
      <div className="embroidery-hero__image-wrap">
        <div
          className="embroidery-hero__image"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
        />
        <div className="embroidery-hero__overlay" />
      </div>

      <div className="embroidery-hero__content-wrap">
        <div className="embroidery-hero__content">

          {/* <motion.div
            className="embroidery-hero__breadcrumb"
            variants={contentVariants}
            custom={0.04}
            initial="hidden"
            animate="visible"
          >
            <a href="/">Home</a>
            <span>/</span>
            <a href="/services">Services</a>
            <span>/</span>
            <span>Embroidery Digitizing</span>
          </motion.div> */}

          <motion.span
            className="embroidery-hero__eyebrow"
            variants={contentVariants}
            custom={0.1}
            initial="hidden"
            animate="visible"
          >
            Embroidery Digitizing
          </motion.span>

          <motion.h1
            className="embroidery-hero__title"
            variants={contentVariants}
            custom={0.18}
            initial="hidden"
            animate="visible"
          >
            Embroidery Digitizing, Stitched Right
          </motion.h1>

          <motion.p
            className="embroidery-hero__one-liner"
            variants={contentVariants}
            custom={0.26}
            initial="hidden"
            animate="visible"
          >
            From Design To Stitch
          </motion.p>

          <motion.p
            className="embroidery-hero__description"
            variants={contentVariants}
            custom={0.34}
            initial="hidden"
            animate="visible"
          >
            Precise, machine-ready embroidery files that bring your designs
            to life on fabric — built for uniforms, gifts, and everything
            in between.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default EmbroideryHero;