import React from "react";
import { motion } from "framer-motion";

import hero from "../../../assets/images/home/newhero.png";
import "./NewHeroSection.scss";

const contentVariants = {
    hidden: { opacity: 0, y: 32 },
    visible: (delay = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: "easeOut", delay },
    }),
};

const NewHeroSection = () => {
    return (
        <section className="new-hero-section">
            <div className="new-hero-section__image-wrap">
                <div
                    className="new-hero-section__image"
                    style={{ backgroundImage: `url(${hero})` }}
                />
                <div className="new-hero-section__overlay" />
            </div>

            <div className="new-hero-section__content-wrap">
                <div className="new-hero-section__content">
                    <motion.h1
                        className="new-hero-section__title"
                        variants={contentVariants}
                        custom={0.08}
                        initial="hidden"
                        animate="visible"
                    >
                        Dependable Virtual Support, From Day One.
                    </motion.h1>

                    <motion.p
                        className="new-hero-section__one-liner"
                        variants={contentVariants}
                        custom={0.16}
                        initial="hidden"
                        animate="visible"
                    >
                        Dedicated virtual assistants who handle the work behind
                        your business, so your team can focus on growth.
                    </motion.p>

                    <motion.p
                        className="new-hero-section__description"
                        variants={contentVariants}
                        custom={0.24}
                        initial="hidden"
                        animate="visible"
                    >
                        From admin and customer service to research and
                        e-commerce, our trained remote professionals work as an
                        extension of your team.
                    </motion.p>

                    <motion.div
                        className="new-hero-section__actions"
                        variants={contentVariants}
                        custom={0.32}
                        initial="hidden"
                        animate="visible"
                    >
                        <a
                            href="/contact"
                            className="new-hero-section__button"
                        >
                            <span className="new-hero-section__button-text">
                                Find Your Virtual Assistant
                            </span>
                            <span
                                className="new-hero-section__button-arrow"
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

export default NewHeroSection;