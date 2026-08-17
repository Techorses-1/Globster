import React from "react";
import { motion } from "framer-motion";
import { Home, ArrowLeft, Compass } from "lucide-react";
import "./NotFound.scss";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut", delay },
  }),
};

const NotFound = () => {
  return (
    <section className="not-found">
      <div className="not-found__glow not-found__glow--1" aria-hidden="true" />
      <div className="not-found__glow not-found__glow--2" aria-hidden="true" />

      <div className="not-found__inner">
        <motion.div
          className="not-found__badge"
          initial={{ opacity: 0, scale: 0.7, rotate: -8 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Compass size={26} strokeWidth={1.8} />
        </motion.div>

        <motion.span
          className="not-found__number"
          initial="hidden"
          animate="visible"
          custom={0.1}
          variants={fadeUp}
        >
          40<span className="not-found__number-accent">4</span>
        </motion.span>

        <motion.span
          className="not-found__cursive"
          initial="hidden"
          animate="visible"
          custom={0.2}
          variants={fadeUp}
        >
          Oops!
        </motion.span>

        <motion.h1
          className="not-found__heading"
          initial="hidden"
          animate="visible"
          custom={0.28}
          variants={fadeUp}
        >
          This Page Took A Wrong Turn
        </motion.h1>

        <motion.p
          className="not-found__description"
          initial="hidden"
          animate="visible"
          custom={0.36}
          variants={fadeUp}
        >
          The page you&apos;re looking for doesn&apos;t exist, may have
          been moved, or the link might be broken. Let&apos;s get you
          back on track.
        </motion.p>

        <motion.div
          className="not-found__actions"
          initial="hidden"
          animate="visible"
          custom={0.44}
          variants={fadeUp}
        >
          <a href="#home" className="not-found__button">
            <Home size={17} strokeWidth={1.8} />
            Back to Home
          </a>
          <button
            type="button"
            className="not-found__link"
            onClick={() => window.history.back()}
          >
            <ArrowLeft size={16} strokeWidth={1.8} />
            Go back
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default NotFound;