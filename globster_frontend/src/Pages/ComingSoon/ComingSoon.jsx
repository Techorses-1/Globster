import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./ComingSoon.scss";

// ==========================================================================
// ComingSoon.jsx
// Used for the "Global Contact" page while the real page is being built.
// No countdown / timer — purely an animated holding screen that keeps the
// same visual language as the rest of the site (navy / olive / black).
// ==========================================================================

const contentVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: (delay = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: "easeOut", delay },
    }),
};

const ComingSoon = () => {
    return (
        <section className="coming-soon">
            {/* ---- Animated globe / network backdrop ---- */}
            <div className="coming-soon__scene" aria-hidden="true">
                <div className="coming-soon__ring coming-soon__ring--one" />
                <div className="coming-soon__ring coming-soon__ring--two" />
                <div className="coming-soon__ring coming-soon__ring--three" />

                <svg
                    className="coming-soon__globe"
                    viewBox="0 0 600 600"
                    fill="none"
                >
                    {/* latitude ellipses */}
                    <ellipse cx="300" cy="300" rx="220" ry="220" className="coming-soon__meridian" />
                    <ellipse cx="300" cy="300" rx="220" ry="90" className="coming-soon__meridian" />
                    <ellipse cx="300" cy="300" rx="220" ry="150" className="coming-soon__meridian" />
                    <ellipse cx="300" cy="300" rx="90" ry="220" className="coming-soon__meridian" />
                    <ellipse cx="300" cy="300" rx="150" ry="220" className="coming-soon__meridian" />

                    {/* connection lines between nodes */}
                    <path
                        d="M120 210 L300 120 L480 210 L420 400 L180 400 Z"
                        className="coming-soon__link"
                    />
                    <path
                        d="M300 120 L300 480 M120 210 L480 400 M480 210 L120 400"
                        className="coming-soon__link"
                    />

                    {/* pulsing nodes */}
                    {[
                        [120, 210],
                        [300, 120],
                        [480, 210],
                        [420, 400],
                        [180, 400],
                        [300, 480],
                        [300, 300],
                    ].map(([cx, cy], i) => (
                        <circle
                            key={`${cx}-${cy}`}
                            cx={cx}
                            cy={cy}
                            r="6"
                            className="coming-soon__node"
                            style={{ animationDelay: `${i * 0.35}s` }}
                        />
                    ))}
                </svg>

                <div className="coming-soon__grain" />
            </div>

            {/* ---- Content ---- */}
            <div className="coming-soon__content-wrap">
                <div className="coming-soon__content">
                    <motion.span
                        className="coming-soon__eyebrow"
                        variants={contentVariants}
                        custom={0.05}
                        initial="hidden"
                        animate="visible"
                    >
                        Global Contact
                    </motion.span>

                    <motion.h1
                        className="coming-soon__title"
                        variants={contentVariants}
                        custom={0.15}
                        initial="hidden"
                        animate="visible"
                    >
                        We&apos;re Connecting
                        <br />
                        The Dots
                    </motion.h1>

                    <motion.p
                        className="coming-soon__one-liner"
                        variants={contentVariants}
                        custom={0.25}
                        initial="hidden"
                        animate="visible"
                    >
                        A New Way To Reach Us, Wherever You Are
                    </motion.p>

                    <motion.p
                        className="coming-soon__description"
                        variants={contentVariants}
                        custom={0.35}
                        initial="hidden"
                        animate="visible"
                    >
                        This page is being built to make reaching our team easier,
                        no matter where in the world you&apos;re working from. Check
                        back soon.
                    </motion.p>

                    <motion.div
                        variants={contentVariants}
                        custom={0.45}
                        initial="hidden"
                        animate="visible"
                    >
                        <Link to="/" className="coming-soon__cta">
                            Back To Homepage
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ComingSoon;