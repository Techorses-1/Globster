import React from "react";
import { motion } from "framer-motion";

import "./PricingHero.scss";

// NOTE: Replace this with your final production photography.
// Placeholder is served from picsum.photos (seeded, so it stays
// consistent) purely so the layout is visible while you wire up a real asset.
const HERO_IMAGE = "https://picsum.photos/seed/globster-pricing/1920/1080";

const contentVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut", delay },
  }),
};

const PricingHero = () => {
  return (
    <section className="pricing-hero">
      <div className="pricing-hero__image-wrap">
        <div
          className="pricing-hero__image"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
        />
        <div className="pricing-hero__overlay" />
      </div>

      <div className="pricing-hero__content-wrap">
        <div className="pricing-hero__content">
          

          <motion.span
            className="pricing-hero__eyebrow"
            variants={contentVariants}
            custom={0.08}
            initial="hidden"
            animate="visible"
          >
            Pricing
          </motion.span>

          <motion.h1
            className="pricing-hero__title"
            variants={contentVariants}
            custom={0.16}
            initial="hidden"
            animate="visible"
          >
            Simple Pricing, No Surprises
          </motion.h1>

          <motion.p
            className="pricing-hero__one-liner"
            variants={contentVariants}
            custom={0.24}
            initial="hidden"
            animate="visible"
          >
            Fair Rates, Real Value
          </motion.p>

          <motion.p
            className="pricing-hero__description"
            variants={contentVariants}
            custom={0.32}
            initial="hidden"
            animate="visible"
          >
            Clear pricing built around the way you work - no hidden fees,
            no long-term contracts, just great work at a fair price.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default PricingHero;