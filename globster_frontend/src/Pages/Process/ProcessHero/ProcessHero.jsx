import React from "react";
import { motion } from "framer-motion";

import "./ProcessHero.scss";

// NOTE: Replace this with your final production photography.
// Placeholder is served from picsum.photos (seeded, so it stays
// consistent) purely so the layout is visible while you wire up a real asset.
const HERO_IMAGE = "https://picsum.photos/seed/globster-process/1920/1080";

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
                    style={{ backgroundImage: `url(${HERO_IMAGE})` }}
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
                        How We Bring Your Ideas To Life
                    </motion.h1>

                    <motion.p
                        className="process-hero__one-liner"
                        variants={contentVariants}
                        custom={0.24}
                        initial="hidden"
                        animate="visible"
                    >
                        Simple, Transparent, Reliable
                    </motion.p>

                    <motion.p
                        className="process-hero__description"
                        variants={contentVariants}
                        custom={0.32}
                        initial="hidden"
                        animate="visible"
                    >
                        From the first conversation to final delivery, here&apos;s
                        exactly how we work together - no surprises, no guesswork.
                    </motion.p>
                </div>
            </div>
        </section>
    );
};

export default ProcessHero;