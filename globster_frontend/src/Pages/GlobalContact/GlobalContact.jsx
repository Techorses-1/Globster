import React from "react";
import { motion } from "framer-motion";
import { Globe2, Home } from "lucide-react";
import "./GlobalContact.scss";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut", delay },
  }),
};

const GlobalContact = () => {
  return (
    <section className="global-contact">
      <div className="global-contact__glow global-contact__glow--1" aria-hidden="true" />
      <div className="global-contact__glow global-contact__glow--2" aria-hidden="true" />

      <div className="global-contact__inner">
        {/* Signature element — orbiting dots around a globe, echoing "Global" */}
        <motion.div
          className="global-contact__orbit-wrap"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="global-contact__badge">
            <Globe2 size={30} strokeWidth={1.6} />
          </span>

          <motion.div
            className="global-contact__orbit-ring"
            animate={{ rotate: 360 }}
            transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
          >
            <span className="global-contact__orbit-dot global-contact__orbit-dot--1" />
            <span className="global-contact__orbit-dot global-contact__orbit-dot--2" />
            <span className="global-contact__orbit-dot global-contact__orbit-dot--3" />
          </motion.div>

          <motion.div
            className="global-contact__orbit-ring global-contact__orbit-ring--reverse"
            animate={{ rotate: -360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <span className="global-contact__orbit-dot global-contact__orbit-dot--4" />
          </motion.div>
        </motion.div>

        <motion.span
          className="global-contact__eyebrow"
          initial="hidden"
          animate="visible"
          custom={0.15}
          variants={fadeUp}
        >
          Global Contact
        </motion.span>

        <motion.span
          className="global-contact__cursive"
          initial="hidden"
          animate="visible"
          custom={0.22}
          variants={fadeUp}
        >
          Something great is brewing
        </motion.span>

        <motion.h1
          className="global-contact__heading"
          initial="hidden"
          animate="visible"
          custom={0.3}
          variants={fadeUp}
        >
          This Page Is Coming Soon
        </motion.h1>

        <motion.p
          className="global-contact__description"
          initial="hidden"
          animate="visible"
          custom={0.38}
          variants={fadeUp}
        >
          We&apos;re building a better way to reach us from anywhere in the
          world. This page isn&apos;t ready just yet, but the rest of
          Globster is - head back home in the meantime.
        </motion.p>

        <motion.div
          className="global-contact__actions"
          initial="hidden"
          animate="visible"
          custom={0.46}
          variants={fadeUp}
        >
          <a href="/" className="global-contact__button">
            <Home size={17} strokeWidth={1.8} />
            Back to Home
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default GlobalContact;