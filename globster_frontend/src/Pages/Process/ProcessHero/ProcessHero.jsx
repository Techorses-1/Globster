import React from "react";
import { motion } from "framer-motion";

import "./ProcessHero.scss";
import hero from "../../../assets/images/process/hero.png";

// NOTE: Replace this with your final production photography.
// Placeholder is served from picsum.photos (seeded, so it stays
// consistent) purely so the layout is visible while you wire up a real asset.

const contentVariants = {
    hidden: { opacity: 0, y: 32 },
    visible: (delay = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: "easeOut", delay },
    }),
};

const ProcessHero = () => {
    return (
        <section className="process-hero">
            <div className="process-hero__image-wrap">
                <div
                    className="process-hero__image"
                    style={{ backgroundImage: `url(${hero})` }}
                />
                <div className="process-hero__overlay" />
            </div>

            <div className="process-hero__content-wrap">
                <div className="process-hero__content">
                    <motion.span
                        className="process-hero__eyebrow"
                        variants={contentVariants}
                        custom={0.08}
                        initial="hidden"
                        animate="visible"
                    >
                        Our Process
                    </motion.span>

                    <motion.h1
                        className="process-hero__title"
                        variants={contentVariants}
                        custom={0.16}
                        initial="hidden"
                        animate="visible"
                    >
                        Getting Started With Globster Is Straightforward
                    </motion.h1>

                    <motion.p
                        className="process-hero__one-liner"
                        variants={contentVariants}
                        custom={0.24}
                        initial="hidden"
                        animate="visible"
                    >
                        Finding virtual support shouldn&apos;t create more work
                        for your business.
                    </motion.p>

                    <motion.p
                        className="process-hero__description"
                        variants={contentVariants}
                        custom={0.32}
                        initial="hidden"
                        animate="visible"
                    >
                        We understand your requirements, find the right support
                        arrangement and set up a clear workflow before tasks
                        begin.
                    </motion.p>

                    <motion.div
                        className="process-hero__actions"
                        variants={contentVariants}
                        custom={0.4}
                        initial="hidden"
                        animate="visible"
                    >
                        <a href="/contact" className="process-hero__button">
                            <span className="process-hero__button-text">
                                Start a Conversation
                            </span>
                            <span
                                className="process-hero__button-arrow"
                                aria-hidden="true"
                            >
                                →
                            </span>
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ProcessHero;