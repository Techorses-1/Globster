import React from "react";
import { motion } from "framer-motion";

import "./ServicesHero.scss";

// NOTE: Replace this with your final production photography.
// Placeholder is served from picsum.photos (seeded, so it stays
// consistent) purely so the layout is visible while you wire up a real asset.
const HERO_IMAGE = "https://picsum.photos/seed/globster-services/1920/1080";

const contentVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut", delay },
  }),
};

const ServicesHero = () => {
  return (
    <section className="services-hero">
      <div className="services-hero__image-wrap">
        <div
          className="services-hero__image"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
        />
        <div className="services-hero__overlay" />
      </div>

      <div className="services-hero__content-wrap">
        <div className="services-hero__content">
         

          <motion.span
            className="services-hero__eyebrow"
            variants={contentVariants}
            custom={0.08}
            initial="hidden"
            animate="visible"
          >
            Our Services
          </motion.span>

          <motion.h1
            className="services-hero__title"
            variants={contentVariants}
            custom={0.16}
            initial="hidden"
            animate="visible"
          >
            Everything Your Business Needs, In One Place
          </motion.h1>

          <motion.p
            className="services-hero__one-liner"
            variants={contentVariants}
            custom={0.24}
            initial="hidden"
            animate="visible"
          >
            One Team, Every Service You Need
          </motion.p>

          <motion.p
            className="services-hero__description"
            variants={contentVariants}
            custom={0.32}
            initial="hidden"
            animate="visible"
          >
            From creative work to daily operations, explore the full range
            of services we offer - built to flex around whatever your
            business needs next.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;