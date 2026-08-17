import React from "react";
import { motion } from "framer-motion";
import {
  PenTool,
  Shirt,
  Film,
  Box,
  Database,
  Headset,
  Globe2,
  CheckCircle2,
} from "lucide-react";
import "./WhoWeAre.scss";

// NOTE: Replace the image URLs below with your final production photography.
// Placeholders are served from picsum.photos (seeded, so they stay
// consistent) purely so the layout is visible while you wire up real assets.

const SERVICES = [
  { label: "Vector Artwork", icon: PenTool },
  { label: "Embroidery Digitizing", icon: Shirt },
  { label: "Image & Video Editing", icon: Film },
  { label: "Website Development", icon: Globe2 },
  { label: "Data Processing", icon: Database },
  { label: "Virtual Assistance", icon: Headset },
//   { label: "Website Development", icon: Globe2 },
//   { label: "Product Mockups", icon: Box }, 
];

const FEATURES = [
  "Clear communication",
  "Fair pricing",
  "No long-term contracts",
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut", delay },
  }),
};

const viewportSettings = { once: true, amount: 0.25 };

const WhoWeAre = () => {
  return (
    <section className="who" id="about-us">
      <div className="who__inner">
        {/* ---- Visual side ---- */}
        <motion.div
          className="who__visual"
          initial={{ opacity: 0, x: -50, scale: 0.96 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={viewportSettings}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="who__visual-shape" aria-hidden="true" />

          <div className="who__image-main">
            <img
              src="https://picsum.photos/seed/globster-team/900/1100"
              alt="Globster team collaborating on client projects"
              loading="lazy"
            />
          </div>

          <motion.div
            className="who__image-badge"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportSettings}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          >
            <img
              src="https://picsum.photos/seed/globster-detail/300/300"
              alt="Detail of design work delivered by Globster"
              loading="lazy"
            />
          </motion.div>
        </motion.div>

        {/* ---- Content side ---- */}
        <div className="who__content">
          <motion.span
            className="who__eyebrow"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
          >
            Who We Are
          </motion.span>

          <motion.h2
            className="who__heading"
            variants={fadeUp}
            custom={0.1}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
          >
            Quality Work, Without The In-House Overhead
          </motion.h2>

          <motion.p
            className="who__paragraph"
            variants={fadeUp}
            custom={0.2}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
          >
            Globster is a global outsourcing partner built for businesses that
            want quality work without the overhead of hiring in-house.
          </motion.p>

          <motion.p
            className="who__paragraph"
            variants={fadeUp}
            custom={0.28}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
          >
            We believe good work speaks for itself - so instead of promising
            you decades of experience, we promise you our full attention,
            fast turnarounds, and results you can see from the very first
            project. Every task we take on, big or small, gets the same
            level of care.
          </motion.p>

          {/* Feature strip */}
          <motion.ul
            className="who__features"
            variants={fadeUp}
            custom={0.36}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
          >
            {FEATURES.map((feature) => (
              <li className="who__feature" key={feature}>
                <CheckCircle2 size={18} strokeWidth={2.2} />
                <span>{feature}</span>
              </li>
            ))}
          </motion.ul>

          <motion.p
            className="who__paragraph who__paragraph--services-intro"
            variants={fadeUp}
            custom={0.42}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
          >
            Whether you&apos;re a small business or a growing brand, we
            adapt our support to fit exactly what you need - across:
          </motion.p>

          {/* Services icon grid */}
          <div className="who__services">
            {SERVICES.map(({ label, icon: Icon }, i) => (
              <motion.div
                className="who__service"
                key={label}
                variants={fadeUp}
                custom={0.46 + i * 0.06}
                initial="hidden"
                whileInView="visible"
                viewport={viewportSettings}
                whileHover={{ y: -4 }}
              >
                <span className="who__service-icon">
                  <Icon size={20} strokeWidth={1.8} />
                </span>
                <span className="who__service-label">{label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;