import React from "react";
import { motion } from "framer-motion";
import { UserCheck, ShieldCheck, Clock } from "lucide-react";
import "./WhyGlobsterStats.scss";

const POINTS = [
    {
        icon: UserCheck,
        number: "01",
        title: "You choose your VA",
        description:
            "Interview candidates and select the assistant who best fits your business needs and working style.",
    },
    {
        icon: ShieldCheck,
        number: "02",
        title: "Backup always included",
        description:
            "Every dedicated assistant comes with a trained backup-so your work never stops.",
    },
    {
        icon: Clock,
        number: "03",
        title: "We work on your time",
        description:
            "Whether you're in the US, UK, Europe, Australia or elsewhere-we align with your business hours.",
    },
];

const viewportSettings = { once: true, amount: 0.3 };

const WhyGlobsterStats = () => {
    return (
        <section className="why-stats2">
            <div className="why-stats2__inner">
                <div className="why-stats2__header">
                    <motion.span
                        className="why-stats2__eyebrow"
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={viewportSettings}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        Why Globster
                    </motion.span>
                    <motion.h2
                        className="why-stats2__heading"
                        initial={{ opacity: 0, y: 28 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={viewportSettings}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                    >
                        A Partnership Built To Just Work
                    </motion.h2>
                </div>

                <div className="why-stats2__grid">
                    {POINTS.map((point, i) => {
                        const Icon = point.icon;
                        return (
                            <motion.div
                                className="why-stats2__block"
                                key={point.title}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={viewportSettings}
                                transition={{
                                    duration: 0.7,
                                    ease: "easeOut",
                                    delay: i * 0.15,
                                }}
                            >
                                <span className="why-stats2__number" aria-hidden="true">
                                    {point.number}
                                </span>

                                <span className="why-stats2__icon">
                                    <Icon size={24} strokeWidth={1.8} />
                                </span>

                                <h3 className="why-stats2__title">{point.title}</h3>
                                <p className="why-stats2__description">{point.description}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default WhyGlobsterStats;