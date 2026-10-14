import React from "react";
import { motion } from "framer-motion";
import { ClipboardList, Users, Clock } from "lucide-react";
import "./WhoWeAre.scss";

import about1 from "../../../assets/images/home/about1.png"
import about2 from "../../../assets/images/home/about2.png"

// NOTE: Replace the image URLs below with your final production photography.
// Placeholders are served from picsum.photos (seeded, so they stay
// consistent) purely so the layout is visible while you wire up real assets.

const CARDS = [
  {
    title: "Delegate the Busywork",
    text: "Hand off repetitive, time-consuming tasks and get your hours back.",
    icon: ClipboardList,
  },
  {
    title: "A Consistent Extension of Your Team",
    text: "Dependable virtual professionals who become part of your daily operations.",
    icon: Users,
  },
  {
    title: "Flexible, Built Around You",
    text: "From a few hours a week to full-time support, shaped to fit your business.",
    icon: Clock,
  },
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
    <section className="who2" id="about-us">
      <div className="who2__inner">
        {/* ---- Visual side ---- */}
        <motion.div
          className="who2__visual"
          initial={{ opacity: 0, x: -50, scale: 0.96 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={viewportSettings}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="who2__visual-shape" aria-hidden="true" />

          <div className="who2__image-main">
            <img
              src={about1}
              alt="Globster virtual professionals working with a client team"
              loading="lazy"
            />
          </div>

          <motion.div
            className="who2__image-badge"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportSettings}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          >
            <img
              src={about2}
              alt="Globster virtual assistant at work"
              loading="lazy"
            />
          </motion.div>
        </motion.div>

        {/* ---- Content side ---- */}
        <div className="who2__content">
          <motion.span
            className="who2__eyebrow"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
          >
            Who We Are
          </motion.span>

          <motion.h2
            className="who2__heading"
            variants={fadeUp}
            custom={0.1}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
          >
            More Than a Virtual Assistant. A Reliable Extension of Your Team.
          </motion.h2>

          <motion.p
            className="who2__paragraph who2__paragraph--lead"
            variants={fadeUp}
            custom={0.18}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
          >
            Running a growing business means there&apos;s always more to do
            than your team has time for.
          </motion.p>

          <motion.p
            className="who2__paragraph"
            variants={fadeUp}
            custom={0.26}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
          >
            Globster helps businesses delegate the repetitive, time-consuming
            and operational work that slows them down. We connect you with
            dependable virtual professionals who can become a consistent part
            of your daily operations.
          </motion.p>

          <motion.p
            className="who2__paragraph"
            variants={fadeUp}
            custom={0.34}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
          >
            Whether you need support for a few hours a week or dedicated
            full-time assistance, we build a solution around the way your
            business actually works.
          </motion.p>

          {/* Cards */}
          <div className="who2__services">
            {CARDS.map(({ title, text, icon: Icon }, i) => (
              <motion.div
                className="who2__service"
                key={title}
                variants={fadeUp}
                custom={0.42 + i * 0.08}
                initial="hidden"
                whileInView="visible"
                viewport={viewportSettings}
                whileHover={{ y: -4 }}
              >
                <span className="who2__service-icon">
                  <Icon size={20} strokeWidth={1.8} />
                </span>
                <h3 className="who2__service-title">{title}</h3>
                <p className="who2__service-text">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;