import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Target, Handshake, User, ArrowRight } from "lucide-react";
import "./OurFounder.scss";

// DEVELOPER NOTE: Replace with an authentic founder photograph.
// Add a verified professional biography only. Do NOT add unverified
// qualifications, experience claims or personal achievements.
// The Unsplash image below is a placeholder only.
const FOUNDER_IMAGE =
    "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1000&q=80";

const NOTES = [
    {
        icon: Target,
        label: "Our focus",
        text: "The focus is on understanding the practical challenges businesses face, identifying work that can be delegated effectively and establishing processes that support consistent delivery.",
    },
    {
        icon: Handshake,
        label: "Our aim",
        text: "As Globster grows, the aim remains the same: build relationships around clear communication, dependable execution and an understanding of each client's needs.",
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

const OurFounder = () => {
    return (
        <section className="founder" id="our-founder">
            <div className="founder__inner">
                <div className="founder__panel">
                    {/* ---- Left: photo ---- */}
                    <motion.div
                        className="founder__media"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={viewportSettings}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="founder__photo-wrap">
                            <div className="founder__photo">
                                <img
                                    src={FOUNDER_IMAGE}
                                    alt="Shrey Dave, Founder of Globster"
                                    loading="lazy"
                                />
                            </div>
                        </div>

                        <div className="founder__name-card">
                            <span className="founder__name-icon">
                                <User size={22} strokeWidth={1.9} />
                            </span>
                            <div className="founder__name-text">
                                <span className="founder__name">Shrey Dave</span>
                                <span className="founder__role">Founder, Globster</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* ---- Right: content ---- */}
                    <div className="founder__content">
                        <motion.span
                            className="founder__eyebrow"
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={viewportSettings}
                        >
                            Our Founder
                        </motion.span>

                        <motion.h2
                            className="founder__heading"
                            variants={fadeUp}
                            custom={0.1}
                            initial="hidden"
                            whileInView="visible"
                            viewport={viewportSettings}
                        >
                            A Practical Approach to Business Support
                        </motion.h2>

                        <motion.p
                            className="founder__lead"
                            variants={fadeUp}
                            custom={0.2}
                            initial="hidden"
                            whileInView="visible"
                            viewport={viewportSettings}
                        >
                            Globster was founded by Shrey Dave with the goal of making
                            dependable virtual assistance and business support more
                            accessible to growing businesses.
                        </motion.p>

                        <div className="founder__notes">
                            {NOTES.map(({ icon: Icon, label, text }, i) => (
                                <motion.div
                                    className="founder__note"
                                    key={label}
                                    initial={{ opacity: 0, y: 36 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={viewportSettings}
                                    transition={{
                                        duration: 0.65,
                                        ease: "easeOut",
                                        delay: 0.25 + i * 0.12,
                                    }}
                                >
                                    <span className="founder__note-icon">
                                        <Icon size={22} strokeWidth={1.9} />
                                    </span>
                                    <span className="founder__note-label">{label}</span>
                                    <p className="founder__note-text">{text}</p>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            className="founder__actions"
                            variants={fadeUp}
                            custom={0.5}
                            initial="hidden"
                            whileInView="visible"
                            viewport={viewportSettings}
                        >
                            <Link to="/contact" className="founder__button">
                                <span>Connect With Globster</span>
                                <ArrowRight size={16} strokeWidth={2.2} />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurFounder;