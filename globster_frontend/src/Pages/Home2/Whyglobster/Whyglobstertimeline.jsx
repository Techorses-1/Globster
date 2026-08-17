import React from "react";
import { motion } from "framer-motion";
import { UserCheck, ShieldCheck, Clock } from "lucide-react";
import "./WhyGlobsterTimeline.scss";

const POINTS = [
  {
    icon: UserCheck,
    title: "You choose your VA",
    description:
      "Interview candidates and select the assistant who best fits your business needs and working style.",
  },
  {
    icon: ShieldCheck,
    title: "Backup always included",
    description:
      "Every dedicated assistant comes with a trained backup-so your work never stops.",
  },
  {
    icon: Clock,
    title: "We work on your time",
    description:
      "Whether you're in the US, UK, Europe, Australia or elsewhere-we align with your business hours.",
  },
];

const viewportSettings = { once: true, amount: 0.3 };

const WhyGlobsterTimeline = () => {
  return (
    <section className="why-timeline">
      <div className="why-timeline__inner">
        <div className="why-timeline__header">
          <motion.span
            className="why-timeline__eyebrow"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportSettings}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Why Globster
          </motion.span>
          <motion.h2
            className="why-timeline__heading"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportSettings}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          >
            A Partnership Built To Just Work
          </motion.h2>
        </div>

        <div className="why-timeline__track">
          <span className="why-timeline__line" aria-hidden="true" />

          {POINTS.map((point, i) => {
            const Icon = point.icon;
            return (
              <motion.div
                className="why-timeline__step"
                key={point.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportSettings}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: i * 0.18,
                }}
              >
                <motion.span
                  className="why-timeline__node"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                >
                  <Icon size={26} strokeWidth={1.8} />
                  <span className="why-timeline__number">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </motion.span>

                <h3 className="why-timeline__title">{point.title}</h3>
                <p className="why-timeline__description">
                  {point.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyGlobsterTimeline;