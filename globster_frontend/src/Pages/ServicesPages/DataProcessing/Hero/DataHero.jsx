import React from "react";
import { motion } from "framer-motion";

import "./DataHero.scss";

// NOTE: Replace this with your final production photography.
// Placeholder is served from picsum.photos (seeded, so it stays
// consistent) purely so the layout is visible while you wire up a real asset.
const HERO_IMAGE = "https://picsum.photos/seed/svc-data/1920/1080";

const contentVariants = {
    hidden: { opacity: 0, y: 32 },
    visible: (delay = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: "easeOut", delay },
    }),
};

const DataHero = () => {
    return (
        <section className="data-hero">
            <div className="data-hero__image-wrap">
                <div
                    className="data-hero__image"
                    style={{ backgroundImage: `url(${HERO_IMAGE})` }}
                />
                <div className="data-hero__overlay" />
            </div>

            <div className="data-hero__content-wrap">
                <div className="data-hero__content">

                    {/* <motion.div
                        className="data-hero__breadcrumb"
                        variants={contentVariants}
                        custom={0.04}
                        initial="hidden"
                        animate="visible"
                    >
                        <a href="/">Home</a>
                        <span>/</span>
                        <a href="/services">Services</a>
                        <span>/</span>
                        <span>Data Processing</span>
                    </motion.div> */}

                    <motion.span
                        className="data-hero__eyebrow"
                        variants={contentVariants}
                        custom={0.1}
                        initial="hidden"
                        animate="visible"
                    >
                        Data Processing
                    </motion.span>

                    <motion.h1
                        className="data-hero__title"
                        variants={contentVariants}
                        custom={0.18}
                        initial="hidden"
                        animate="visible"
                    >
                        Data Processing, Done Right
                    </motion.h1>

                    <motion.p
                        className="data-hero__one-liner"
                        variants={contentVariants}
                        custom={0.26}
                        initial="hidden"
                        animate="visible"
                    >
                        Your Data, Organized & Ready
                    </motion.p>

                    <motion.p
                        className="data-hero__description"
                        variants={contentVariants}
                        custom={0.34}
                        initial="hidden"
                        animate="visible"
                    >
                        Accurate data entry, cleaning, and processing - so you always
                        work with reliable information.
                    </motion.p>
                </div>
            </div>
        </section>
    );
};

export default DataHero;