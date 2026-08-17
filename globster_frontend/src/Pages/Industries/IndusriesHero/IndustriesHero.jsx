import React from "react";
import { motion } from "framer-motion";

import "./IndustriesHero.scss";

// NOTE: Replace this with your final production photography.
// Placeholder is served from picsum.photos (seeded, so it stays
// consistent) purely so the layout is visible while you wire up a real asset.
const HERO_IMAGE = "https://picsum.photos/seed/globster-industries/1920/1080";

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
                    style={{ backgroundImage: `url(${HERO_IMAGE})` }}
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
                        Built To Support Every Kind Of Business
                    </motion.h1>

                    <motion.p
                        className="industries-hero__one-liner"
                        variants={contentVariants}
                        custom={0.24}
                        initial="hidden"
                        animate="visible"
                    >
                        Industries We Work With
                    </motion.p>

                    <motion.p
                        className="industries-hero__description"
                        variants={contentVariants}
                        custom={0.32}
                        initial="hidden"
                        animate="visible"
                    >
                        From e-commerce to real estate, we adapt our support to fit
                        the way your industry actually works - not the other way
                        around.
                    </motion.p>
                </div>
            </div>
        </section>
    );
};

export default IndustriesHero;