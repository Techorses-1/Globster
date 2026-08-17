import React from "react";
import { motion } from "framer-motion";

import "./EcommerceHero.scss";

// NOTE: Replace this with your final production photography.
// Placeholder is served from picsum.photos (seeded, so it stays
// consistent) purely so the layout is visible while you wire up a real asset.
const HERO_IMAGE = "https://picsum.photos/seed/svc-ecommerce/1920/1080";

const contentVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut", delay },
  }),
};

const EcommerceHero = () => {
  return (
    <section className="ecommerce-hero">
      <div className="ecommerce-hero__image-wrap">
        <div
          className="ecommerce-hero__image"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
        />
        <div className="ecommerce-hero__overlay" />
      </div>

      <div className="ecommerce-hero__content-wrap">
        <div className="ecommerce-hero__content">
          {/* <motion.div
            className="ecommerce-hero__breadcrumb"
            variants={contentVariants}
            custom={0.04}
            initial="hidden"
            animate="visible"
          >
            <a href="/">Home</a>
            <span>/</span>
            <a href="/services">Services</a>
            <span>/</span>
            <span>E-commerce Development</span>
          </motion.div> */}

          <motion.span
            className="ecommerce-hero__eyebrow"
            variants={contentVariants}
            custom={0.1}
            initial="hidden"
            animate="visible"
          >
            E-commerce Development
          </motion.span>

          <motion.h1
            className="ecommerce-hero__title"
            variants={contentVariants}
            custom={0.18}
            initial="hidden"
            animate="visible"
          >
            E-Commerce Stores Built To Convert
          </motion.h1>

          <motion.p
            className="ecommerce-hero__one-liner"
            variants={contentVariants}
            custom={0.26}
            initial="hidden"
            animate="visible"
          >
            Stores Built to Sell
          </motion.p>

          <motion.p
            className="ecommerce-hero__description"
            variants={contentVariants}
            custom={0.34}
            initial="hidden"
            animate="visible"
          >
            High-performing online stores designed for a smooth shopping
            experience and more sales.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default EcommerceHero;