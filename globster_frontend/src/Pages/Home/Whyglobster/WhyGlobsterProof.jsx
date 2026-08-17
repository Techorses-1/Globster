import React from "react";
import { motion } from "framer-motion";
import { User, CheckCircle2, ShieldCheck, Globe2, Clock } from "lucide-react";
import "./WhyGlobsterProof.scss";

const viewportSettings = { once: true, amount: 0.3 };

// ---- Mini illustrated visual for Card 1: "You choose your VA" ----
const ChooseVisual = () => (
  <div className="proof-visual proof-visual--choose">
    <span className="proof-visual__avatar proof-visual__avatar--back">
      <User size={20} strokeWidth={1.8} />
    </span>
    <span className="proof-visual__avatar proof-visual__avatar--mid">
      <User size={20} strokeWidth={1.8} />
    </span>
    <span className="proof-visual__avatar proof-visual__avatar--front">
      <User size={22} strokeWidth={1.8} />
      <span className="proof-visual__check">
        <CheckCircle2 size={16} strokeWidth={2} />
      </span>
    </span>
  </div>
);

// ---- Mini illustrated visual for Card 2: "Backup always included" ----
const BackupVisual = () => (
  <div className="proof-visual proof-visual--backup">
    <span className="proof-visual__ring proof-visual__ring--dashed">
      <User size={20} strokeWidth={1.8} />
    </span>
    <span className="proof-visual__ring proof-visual__ring--solid">
      <ShieldCheck size={24} strokeWidth={1.8} />
    </span>
  </div>
);

// ---- Mini illustrated visual for Card 3: "We work on your time" ----
const TimezoneVisual = () => (
  <div className="proof-visual proof-visual--time">
    <span className="proof-visual__globe">
      <Globe2 size={30} strokeWidth={1.6} />
    </span>
    <span className="proof-visual__clock proof-visual__clock--1">
      <Clock size={14} strokeWidth={2} />
    </span>
    <span className="proof-visual__clock proof-visual__clock--2">
      <Clock size={14} strokeWidth={2} />
    </span>
    <span className="proof-visual__clock proof-visual__clock--3">
      <Clock size={14} strokeWidth={2} />
    </span>
  </div>
);

const POINTS = [
  {
    Visual: ChooseVisual,
    title: "You choose your VA",
    description:
      "Interview candidates and select the assistant who best fits your business needs and working style.",
  },
  {
    Visual: BackupVisual,
    title: "Backup always included",
    description:
      "Every dedicated assistant comes with a trained backup-so your work never stops.",
  },
  {
    Visual: TimezoneVisual,
    title: "We work on your time",
    description:
      "Whether you're in the US, UK, Europe, Australia or elsewhere-we align with your business hours.",
  },
];

const WhyGlobsterProof = () => {
  return (
    <section className="why-proof">
      <div className="why-proof__inner">
        <div className="why-proof__header">
          <motion.span
            className="why-proof__eyebrow"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportSettings}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Why Globster
          </motion.span>
          <motion.h2
            className="why-proof__heading"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportSettings}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          >
            A Partnership Built To Just Work
          </motion.h2>
        </div>

        <div className="why-proof__grid">
          {POINTS.map((point, i) => {
            const { Visual } = point;
            return (
              <motion.div
                className="why-proof__card"
                key={point.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportSettings}
                transition={{
                  duration: 0.65,
                  ease: "easeOut",
                  delay: i * 0.15,
                }}
                whileHover={{ y: -6 }}
              >
                <Visual />
                <h3 className="why-proof__title">{point.title}</h3>
                <p className="why-proof__description">{point.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyGlobsterProof;