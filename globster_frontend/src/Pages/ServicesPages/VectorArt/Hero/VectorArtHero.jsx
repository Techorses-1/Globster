import React from "react";
import { motion } from "framer-motion";

import "./VectorArtHero.scss";

// NOTE: Replace this with your final production photography.
// Placeholder is served from picsum.photos (seeded, so it stays
// consistent) purely so the layout is visible while you wire up a real asset.
const HERO_IMAGE = "https://picsum.photos/seed/globster-vector-art/1920/1080";

const contentVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut", delay },
  }),
};

const VectorArtHero = () => {
  return (
    <section className="vector-art-hero">
      <div className="vector-art-hero__image-wrap">
        <div
          className="vector-art-hero__image"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
        />
        <div className="vector-art-hero__overlay" />
      </div>

      <div className="vector-art-hero__content-wrap">
        <div className="vector-art-hero__content">

          {/* <motion.div
            className="vector-art-hero__breadcrumb"
            variants={contentVariants}
            custom={0.04}
            initial="hidden"
            animate="visible"
          >
            <a href="/">Home</a>
            <span>/</span>
            <a href="/services">Services</a>
            <span>/</span>
            <span>Vector Artwork</span>
          </motion.div> */}

          <motion.span
            className="vector-art-hero__eyebrow"
            variants={contentVariants}
            custom={0.1}
            initial="hidden"
            animate="visible"
          >
            Vector Artwork
          </motion.span>

          <motion.h1
            className="vector-art-hero__title"
            variants={contentVariants}
            custom={0.18}
            initial="hidden"
            animate="visible"
          >
            Sharp, Scalable Artwork Built For Every Use Case
          </motion.h1>

          <motion.p
            className="vector-art-hero__one-liner"
            variants={contentVariants}
            custom={0.26}
            initial="hidden"
            animate="visible"
          >
            Clean Lines. Infinite Scale. Zero Pixelation.
          </motion.p>

          <motion.p
            className="vector-art-hero__description"
            variants={contentVariants}
            custom={0.34}
            initial="hidden"
            animate="visible"
          >
            From raster-to-vector conversions to fully custom illustrations,
            our design team delivers print-ready artwork that holds up on
            a business card or a billboard — no quality lost, no detail
            skipped.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default VectorArtHero;