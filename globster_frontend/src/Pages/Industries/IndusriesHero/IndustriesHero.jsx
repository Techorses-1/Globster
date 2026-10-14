import React from "react";
import { motion } from "framer-motion";

import "./IndustriesHero.scss";
import hero from "../../../assets/images/industry/hero.png";

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

const IndustriesHero = () => {
    return (
        <section className="industries-hero">
            <div className="industries-hero__image-wrap">
                <div
                    className="industries-hero__image"
                    style={{ backgroundImage: `url(${hero})` }}
                />
                <div className="industries-hero__overlay" />
            </div>

            <div className="industries-hero__content-wrap">
                <div className="industries-hero__content">
                    <motion.span
                        className="industries-hero__eyebrow"
                        variants={contentVariants}
                        custom={0.08}
                        initial="hidden"
                        animate="visible"
                    >
                        Industries
                    </motion.span>

                    <motion.h1
                        className="industries-hero__title"
                        variants={contentVariants}
                        custom={0.16}
                        initial="hidden"
                        animate="visible"
                    >
                        Business Support That Understands Your Industry
                    </motion.h1>

                    <motion.p
                        className="industries-hero__one-liner"
                        variants={contentVariants}
                        custom={0.24}
                        initial="hidden"
                        animate="visible"
                    >
                        Different businesses have different operational demands.
                    </motion.p>

                    <motion.p
                        className="industries-hero__description"
                        variants={contentVariants}
                        custom={0.32}
                        initial="hidden"
                        animate="visible"
                    >
                        We start by understanding how your business works, then
                        delegate recurring tasks around your workflows and
                        priorities.
                    </motion.p>

                    <motion.div
                        className="industries-hero__actions"
                        variants={contentVariants}
                        custom={0.4}
                        initial="hidden"
                        animate="visible"
                    >
                        <a
                            href="/contact"
                            className="industries-hero__button"
                        >
                            <span className="industries-hero__button-text">
                                Find Support for Your Industry
                            </span>
                            <span
                                className="industries-hero__button-arrow"
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

export default IndustriesHero;