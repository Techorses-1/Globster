import React from "react";
import { motion } from "framer-motion";
import {
    Compass,
    Telescope,
    Repeat,
    Users,
    Lightbulb,
    Sprout,
    ShieldCheck,
    MessageCircle,
    BadgeCheck,
    Link2,
} from "lucide-react";
import "./MissionVision.scss";

import mission from "../../../assets/images/about/ourmission.png"
import vision from "../../../assets/images/about/ourvision.png"


const MISSION_POINTS = [
    { icon: Repeat, text: "Fewer repetitive tasks" },
    { icon: Users, text: "More time for customers" },
    { icon: Lightbulb, text: "Space to develop ideas" },
    { icon: Sprout, text: "Sustainable business growth" },
];

const VISION_VALUES = [
    { icon: ShieldCheck, text: "Reliability" },
    { icon: MessageCircle, text: "Clear communication" },
    { icon: BadgeCheck, text: "Accountability" },
    { icon: Link2, text: "Long-term relationships" },
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

const MissionVision = () => {
    return (
        <section className="mission-vision" id="mission-vision">
            <div className="mission-vision__inner">
                {/* ---- Header ---- */}
                <div className="mission-vision__header">
                    <motion.span
                        className="mission-vision__eyebrow"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportSettings}
                    >
                        Mission &amp; Vision
                    </motion.span>

                    <motion.h2
                        className="mission-vision__heading"
                        variants={fadeUp}
                        custom={0.1}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportSettings}
                    >
                        Purpose That Guides Every Engagement
                    </motion.h2>
                </div>

                {/* ---- Cards ---- */}
                <div className="mission-vision__grid">
                    {/* Mission */}
                    <motion.article
                        className="mission-vision__card"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={viewportSettings}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="mission-vision__media">
                            <div className="mission-vision__media-img">
                                <img
                                    src={mission}
                                    alt="Team planning together in a meeting"
                                    loading="lazy"
                                />
                            </div>
                            <span className="mission-vision__icon">
                                <Compass size={28} strokeWidth={1.7} />
                            </span>
                        </div>

                        <div className="mission-vision__body">
                            <span className="mission-vision__number" aria-hidden="true">
                                01
                            </span>
                            <span className="mission-vision__tag">Our Mission</span>

                            <h3 className="mission-vision__title">
                                Make Reliable Business Support Easier to Access
                            </h3>

                            <p className="mission-vision__text mission-vision__text--lead">
                                We help businesses manage routine work more effectively by
                                connecting them with suitable virtual assistance and support
                                services.
                            </p>

                            <p className="mission-vision__text">
                                We want business owners and their teams to spend less time on
                                repetitive tasks and more time serving customers, developing
                                ideas and building sustainable businesses.
                            </p>

                            <div className="mission-vision__group">
                                <span className="mission-vision__caption">
                                    What this means for you
                                </span>
                                <div className="mission-vision__chips">
                                    {MISSION_POINTS.map(({ icon: Icon, text }) => (
                                        <div className="mission-vision__chip" key={text}>
                                            <span className="mission-vision__chip-icon">
                                                <Icon size={17} strokeWidth={1.9} />
                                            </span>
                                            <span className="mission-vision__chip-text">{text}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.article>

                    {/* Vision */}
                    <motion.article
                        className="mission-vision__card"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={viewportSettings}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.12 }}
                    >
                        <div className="mission-vision__media">
                            <div className="mission-vision__media-img">
                                <img
                                    src={vision}
                                    alt="Bright modern workspace"
                                    loading="lazy"
                                />
                            </div>
                            <span className="mission-vision__icon">
                                <Telescope size={28} strokeWidth={1.7} />
                            </span>
                        </div>

                        <div className="mission-vision__body">
                            <span className="mission-vision__number" aria-hidden="true">
                                02
                            </span>
                            <span className="mission-vision__tag">Our Vision</span>

                            <h3 className="mission-vision__title">
                                A More Flexible Way for Businesses to Work
                            </h3>

                            <p className="mission-vision__text mission-vision__text--lead">
                                We aim to become a trusted support partner for businesses that
                                value reliability, clear communication, accountability and
                                long-term working relationships.
                            </p>

                            <p className="mission-vision__text">
                                We believe the right support should make a business more
                                organized and capable, not more complicated.
                            </p>

                            <div className="mission-vision__group">
                                <span className="mission-vision__caption">
                                    What we stand for
                                </span>
                                <div className="mission-vision__chips">
                                    {VISION_VALUES.map(({ icon: Icon, text }) => (
                                        <div className="mission-vision__chip" key={text}>
                                            <span className="mission-vision__chip-icon">
                                                <Icon size={17} strokeWidth={1.9} />
                                            </span>
                                            <span className="mission-vision__chip-text">{text}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.article>
                </div>
            </div>
        </section>
    );
};

export default MissionVision;