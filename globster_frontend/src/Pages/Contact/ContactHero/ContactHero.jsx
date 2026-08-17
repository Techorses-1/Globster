import React from "react";
import { motion } from "framer-motion";

import "./ContactHero.scss";

// NOTE: Replace this with your final production photography.
// Placeholder is served from picsum.photos (seeded, so it stays
// consistent) purely so the layout is visible while you wire up a real asset.
const HERO_IMAGE = "https://picsum.photos/seed/globster-contact/1920/1080";

const contentVariants = {
    hidden: { opacity: 0, y: 32 },
    visible: (delay = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: "easeOut", delay },
    }),
};

const ContactHero = () => {
    return (
        <section className="contact-hero">
            <div className="contact-hero__image-wrap">
                <div
                    className="contact-hero__image"
                    style={{ backgroundImage: `url(${HERO_IMAGE})` }}
                />
                <div className="contact-hero__overlay" />
            </div>

            <div className="contact-hero__content-wrap">
                <div className="contact-hero__content">
                   

                    <motion.span
                        className="contact-hero__eyebrow"
                        variants={contentVariants}
                        custom={0.08}
                        initial="hidden"
                        animate="visible"
                    >
                        Contact Us
                    </motion.span>

                    <motion.h1
                        className="contact-hero__title"
                        variants={contentVariants}
                        custom={0.16}
                        initial="hidden"
                        animate="visible"
                    >
                        Let&apos;s Start The Conversation
                    </motion.h1>

                    <motion.p
                        className="contact-hero__one-liner"
                        variants={contentVariants}
                        custom={0.24}
                        initial="hidden"
                        animate="visible"
                    >
                        We&apos;re Just One Message Away
                    </motion.p>

                    <motion.p
                        className="contact-hero__description"
                        variants={contentVariants}
                        custom={0.32}
                        initial="hidden"
                        animate="visible"
                    >
                        Have a project in mind or just a question? Reach out and our
                        team will get back to you within one business day.
                    </motion.p>
                </div>
            </div>
        </section>
    );
};

export default ContactHero;