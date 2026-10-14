import React from "react";
import { motion } from "framer-motion";
import {
    ListChecks,
    MessagesSquare,
    Database,
    Palette,
    Search,
    ClipboardCheck,
    Repeat,
    ShieldCheck,
    Quote,
} from "lucide-react";
import "./OurStory.scss";

import about1 from "../../../assets/images/about/about1.png";
import about2 from "../../../assets/images/about/about2.png";

const WORKLOAD = [
    { icon: ListChecks, text: "Routine tasks still need completing" },
    { icon: MessagesSquare, text: "Customers still need responses" },
    { icon: Database, text: "Information still needs updating" },
    { icon: Palette, text: "Creative work still needs preparing" },
];

const PRINCIPLES = [
    {
        icon: Search,
        title: "Understand the business",
        text: "We learn how you work before we suggest anything.",
    },
    {
        icon: ClipboardCheck,
        title: "Set clear expectations",
        text: "Scope, communication and priorities agreed up front.",
    },
    {
        icon: Repeat,
        title: "Build a process people can rely on",
        text: "A steady routine that works week after week.",
    },
];

const fadeUp = {
    hidden: { opacity: 0, y: 32 },
    visible: (delay = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: "easeOut", delay },
    }),
};

const viewportSettings = { once: true, amount: 0.2 };

const OurStory = () => {
    return (
        <section className="our-story" id="our-story">
            <div className="our-story__inner">
                {/* ================= TOP: image + story ================= */}
                <div className="our-story__top">
                    {/* ---- Visual side ---- */}
                    <motion.div
                        className="our-story__visual"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={viewportSettings}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="our-story__dots" aria-hidden="true" />
                        <div className="our-story__frame" aria-hidden="true" />

                        <div className="our-story__image-main">
                            <img
                                src={about1}
                                alt="Team collaborating around laptops"
                                loading="lazy"
                            />
                        </div>

                        <motion.div
                            className="our-story__image-secondary"
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={viewportSettings}
                            transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
                        >
                            <img
                                src={about2}
                                alt="Team meeting discussing a project"
                                loading="lazy"
                            />
                        </motion.div>

                        <motion.div
                            className="our-story__badge"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={viewportSettings}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
                        >
                            <span className="our-story__badge-icon">
                                <ShieldCheck size={22} strokeWidth={1.9} />
                            </span>
                            <span className="our-story__badge-text">
                                <strong>Dependable</strong>
                                <span>by design</span>
                            </span>
                        </motion.div>
                    </motion.div>

                    {/* ---- Content side ---- */}
                    <div className="our-story__content">
                        <motion.span
                            className="our-story__eyebrow"
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={viewportSettings}
                        >
                            Our Story
                        </motion.span>

                        <motion.h2
                            className="our-story__heading"
                            variants={fadeUp}
                            custom={0.1}
                            initial="hidden"
                            whileInView="visible"
                            viewport={viewportSettings}
                        >
                            Built to Make Business Support More Dependable
                        </motion.h2>

                        <motion.p
                            className="our-story__lead"
                            variants={fadeUp}
                            custom={0.18}
                            initial="hidden"
                            whileInView="visible"
                            viewport={viewportSettings}
                        >
                            Growing a business often means taking on more responsibilities
                            than one person or a small team can comfortably manage.
                        </motion.p>

                        <motion.div
                            className="our-story__workload"
                            variants={fadeUp}
                            custom={0.26}
                            initial="hidden"
                            whileInView="visible"
                            viewport={viewportSettings}
                        >
                            {WORKLOAD.map(({ icon: Icon, text }) => (
                                <div className="our-story__workload-item" key={text}>
                                    <span className="our-story__workload-icon">
                                        <Icon size={18} strokeWidth={1.9} />
                                    </span>
                                    <span className="our-story__workload-text">{text}</span>
                                </div>
                            ))}
                        </motion.div>

                        <motion.p
                            className="our-story__paragraph"
                            variants={fadeUp}
                            custom={0.34}
                            initial="hidden"
                            whileInView="visible"
                            viewport={viewportSettings}
                        >
                            Globster was created to help businesses manage this growing
                            workload through structured virtual assistance and practical
                            operational support.
                        </motion.p>
                    </div>
                </div>

                {/* ================= BOTTOM: full-width principles ================= */}
                <motion.div
                    className="our-story__principles"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportSettings}
                >
                    <span className="our-story__principles-label">
                        A good support relationship starts with
                    </span>

                    <ol className="our-story__principles-list">
                        {PRINCIPLES.map(({ icon: Icon, title, text }, i) => (
                            <li className="our-story__principle" key={title}>
                                <div className="our-story__principle-top">
                                    <span className="our-story__principle-icon">
                                        <Icon size={22} strokeWidth={1.8} />
                                    </span>
                                    <span className="our-story__principle-number">
                                        {String(i + 1).padStart(2, "0")}
                                    </span>
                                </div>
                                <h3 className="our-story__principle-title">{title}</h3>
                                <p className="our-story__principle-text">{text}</p>
                            </li>
                        ))}
                    </ol>

                    <blockquote className="our-story__quote">
                        <span className="our-story__quote-icon">
                            <Quote size={18} strokeWidth={2} />
                        </span>
                        <p>
                            We don&apos;t treat every task as an isolated assignment. We aim
                            to become a dependable part of your working routine.
                        </p>
                    </blockquote>
                </motion.div>
            </div>
        </section>
    );
};

export default OurStory;