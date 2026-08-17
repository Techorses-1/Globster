import React from "react";
import { motion } from "framer-motion";

import "./AboutHero.scss";

// NOTE: Replace this with your final production photography.
// Placeholder is served from picsum.photos (seeded, so it stays
// consistent) purely so the layout is visible while you wire up a real asset.
const HERO_IMAGE = "https://picsum.photos/seed/globster-about/1920/1080";

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
                    style={{ backgroundImage: `url(${HERO_IMAGE})` }}
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
                        The Team Behind Your Growth
                    </motion.h1>

                    <motion.p
                        className="about-hero__one-liner"
                        variants={contentVariants}
                        custom={0.24}
                        initial="hidden"
                        animate="visible"
                    >
                        Who We Are & Why We Do This
                    </motion.p>

                    <motion.p
                        className="about-hero__description"
                        variants={contentVariants}
                        custom={0.32}
                        initial="hidden"
                        animate="visible"
                    >
                        Get to know the people, the values, and the story behind
                        Globster - and why businesses trust us to be part of their
                        team.
                    </motion.p>
                </div>
            </div>
        </section>
    );
};

export default AboutHero;