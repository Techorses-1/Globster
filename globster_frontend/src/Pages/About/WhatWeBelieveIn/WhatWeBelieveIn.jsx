import React from "react";
import { motion } from "framer-motion";
import {
    ShieldCheck,
    Eye,
    ClipboardCheck,
    Lock,
    Shuffle,
    TrendingUp,
    Handshake,
} from "lucide-react";
import "./WhatWeBelieveIn.scss";
import belive from "../../../assets/images/about/belive.png"


const PRINCIPLES = [
    {
        icon: ShieldCheck,
        title: "Reliability",
        text: "Commit to clear expectations, communicate when priorities change and take agreed responsibilities seriously.",
    },
    {
        icon: Eye,
        title: "Transparency",
        text: "Discuss the scope, working arrangements, deliverables and commercial terms before an engagement begins.",
    },
    {
        icon: ClipboardCheck,
        title: "Accountability",
        text: "Keep work organized, document progress where appropriate and raise questions before small issues become larger problems.",
    },
    {
        icon: Lock,
        title: "Confidentiality",
        text: "Treat client information with care and follow agreed security and access procedures.",
    },
    {
        icon: Shuffle,
        title: "Flexibility",
        text: "Recognize that businesses have different workflows, schedules and support requirements.",
    },
    {
        icon: TrendingUp,
        title: "Continuous improvement",
        text: "Use feedback and regular reviews to improve how work is organized and delivered.",
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

const WhatWeBelieveIn = () => {
    return (
        <section className="beliefs" id="what-we-believe-in">
            <div className="beliefs__inner">
                {/* ---- Header ---- */}
                <div className="beliefs__header">
                    <motion.span
                        className="beliefs__eyebrow"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportSettings}
                    >
                        What We Believe In
                    </motion.span>

                    <motion.h2
                        className="beliefs__heading"
                        variants={fadeUp}
                        custom={0.1}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportSettings}
                    >
                        The Principles Behind Our Work
                    </motion.h2>
                </div>

                {/* ---- Layout ---- */}
                <div className="beliefs__layout">
                    {/* Left: sticky image */}
                    <motion.div
                        className="beliefs__media"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={viewportSettings}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="beliefs__media-frame">
                            <img
                                src={belive}
                                alt="Team collaborating around a table"
                                loading="lazy"
                            />
                        </div>

                        <div className="beliefs__badge">
                            <span className="beliefs__badge-icon">
                                <Handshake size={24} strokeWidth={1.8} />
                            </span>
                            <div className="beliefs__badge-text">
                                <span className="beliefs__badge-title">
                                    Six principles
                                </span>
                                <span className="beliefs__badge-copy">
                                    Guiding every engagement
                                </span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: principles */}
                    <ul className="beliefs__list">
                        {PRINCIPLES.map(({ icon: Icon, title, text }, i) => (
                            <motion.li
                                className="beliefs__item"
                                key={title}
                                initial={{ opacity: 0, x: 40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={viewportSettings}
                                transition={{
                                    duration: 0.6,
                                    ease: "easeOut",
                                    delay: i * 0.07,
                                }}
                            >
                                <span className="beliefs__icon">
                                    <Icon size={24} strokeWidth={1.8} />
                                </span>

                                <div className="beliefs__content">
                                    <h3 className="beliefs__title">{title}</h3>
                                    <p className="beliefs__text">{text}</p>
                                </div>

                                <span className="beliefs__number" aria-hidden="true">
                                    {String(i + 1).padStart(2, "0")}
                                </span>
                            </motion.li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default WhatWeBelieveIn;