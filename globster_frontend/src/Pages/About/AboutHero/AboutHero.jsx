import React from "react";
import { motion } from "framer-motion";

import "./AboutHero.scss";
import hero from "../../../assets/images/about/hero.png";

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

const AboutHero = () => {
    return (
        <section className="about-hero">
            <div className="about-hero__image-wrap">
                <div
                    className="about-hero__image"
                    style={{ backgroundImage: `url(${hero})` }}
                />
                <div className="about-hero__overlay" />
            </div>

            <div className="about-hero__content-wrap">
                <div className="about-hero__content">
                    <motion.span
                        className="about-hero__eyebrow"
                        variants={contentVariants}
                        custom={0.08}
                        initial="hidden"
                        animate="visible"
                    >
                        About Us
                    </motion.span>

                    <motion.h1
                        className="about-hero__title"
                        variants={contentVariants}
                        custom={0.16}
                        initial="hidden"
                        animate="visible"
                    >
                        Helping Businesses Move Forward, One Task at a Time
                    </motion.h1>

                    <motion.p
                        className="about-hero__one-liner"
                        variants={contentVariants}
                        custom={0.24}
                        initial="hidden"
                        animate="visible"
                    >
                        Dependable support, without managing every task yourself.
                    </motion.p>

                    <motion.p
                        className="about-hero__description"
                        variants={contentVariants}
                        custom={0.32}
                        initial="hidden"
                        animate="visible"
                    >
                        We help entrepreneurs, startups and growing companies
                        make delegation easier and day-to-day operations more
                        manageable.
                    </motion.p>

                    <motion.div
                        className="about-hero__actions"
                        variants={contentVariants}
                        custom={0.4}
                        initial="hidden"
                        animate="visible"
                    >
                        <a href="/contact" className="about-hero__button">
                            <span className="about-hero__button-text">
                                Talk to Our Team
                            </span>
                            <span
                                className="about-hero__button-arrow"
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

export default AboutHero;