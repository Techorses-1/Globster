import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
    Briefcase,
    Palette,
    Cpu,
    Users,
    CalendarCheck,
    Headphones,
    Database,
    PenTool,
    Image as ImageIcon,
    Package,
    Shirt,
    Globe,
    Code,
    Wrench,
    ArrowRight,
} from "lucide-react";
import "./WhatWeDo.scss";

import business from "../../../assets/images/about/business.png"
import creative from "../../../assets/images/about/creative.png"
import technical from "../../../assets/images/about/technical.png"

// NOTE: Replace these with your final production photography.
const CATEGORIES = [
    {
        id: "business",
        icon: Briefcase,
        title: "Business Support",
        image: business
            ,
        alt: "Modern office with people working",
        services: [
            { icon: Users, text: "Virtual assistance" },
            { icon: CalendarCheck, text: "Administrative coordination" },
            { icon: Headphones, text: "Customer support" },
            { icon: Database, text: "Data entry and processing" },
        ],
    },
    {
        id: "creative",
        icon: Palette,
        title: "Creative Support",
        image: creative
            ,
        alt: "Colorful creative artwork and paint",
        services: [
            { icon: PenTool, text: "Vector artwork" },
            { icon: ImageIcon, text: "Image editing" },
            { icon: Package, text: "Product mockups" },
            { icon: Shirt, text: "Embroidery digitizing" },
        ],
    },
    {
        id: "technical",
        icon: Cpu,
        title: "Technical Support",
        image:technical
           ,
        alt: "Code on a computer monitor",
        services: [
            { icon: Globe, text: "Defined website tasks" },
            { icon: Code, text: "Web-development tasks" },
            { icon: Wrench, text: "Routine technical assistance" },
        ],
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

const WhatWeDo = () => {
    const [activeId, setActiveId] = useState(CATEGORIES[0].id);

    return (
        <section className="what-we-do" id="what-we-do">
            <div className="what-we-do__inner">
                {/* ---- Header ---- */}
                <div className="what-we-do__header">
                    <motion.span
                        className="what-we-do__eyebrow"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportSettings}
                    >
                        What We Do
                    </motion.span>

                    <motion.h2
                        className="what-we-do__heading"
                        variants={fadeUp}
                        custom={0.1}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportSettings}
                    >
                        Support Across Business Operations
                    </motion.h2>

                    <motion.p
                        className="what-we-do__description"
                        variants={fadeUp}
                        custom={0.2}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportSettings}
                    >
                        Our services cover three broad areas:
                    </motion.p>
                </div>

                {/* ---- Expanding cards ---- */}
                <motion.div
                    className="what-we-do__cards"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={viewportSettings}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    {CATEGORIES.map((cat, i) => {
                        const Icon = cat.icon;
                        const isActive = cat.id === activeId;
                        return (
                            <div
                                className={`what-we-do__card ${isActive ? "is-active" : ""}`}
                                key={cat.id}
                                tabIndex={0}
                                onMouseEnter={() => setActiveId(cat.id)}
                                onFocus={() => setActiveId(cat.id)}
                                onClick={() => setActiveId(cat.id)}
                            >
                                <img
                                    className="what-we-do__card-img"
                                    src={cat.image}
                                    alt={cat.alt}
                                    loading="lazy"
                                />
                                <div className="what-we-do__card-shade" />

                                <span className="what-we-do__number" aria-hidden="true">
                                    {String(i + 1).padStart(2, "0")}
                                </span>

                                <div className="what-we-do__card-content">
                                    <span className="what-we-do__icon">
                                        <Icon size={26} strokeWidth={1.8} />
                                    </span>

                                    <h3 className="what-we-do__title">{cat.title}</h3>

                                    <div className="what-we-do__reveal">
                                        <ul className="what-we-do__services">
                                            {cat.services.map(({ icon: SIcon, text }) => (
                                                <li className="what-we-do__service" key={text}>
                                                    <span className="what-we-do__service-icon">
                                                        <SIcon size={16} strokeWidth={2} />
                                                    </span>
                                                    <span className="what-we-do__service-text">
                                                        {text}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </motion.div>

                {/* ---- Closing note ---- */}
                <motion.div
                    className="what-we-do__note"
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={viewportSettings}
                    transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                >
                    <p className="what-we-do__note-text">
                        This structure lets clients explore the type of support they need
                        and discuss a suitable arrangement.
                    </p>
                    <Link to="/contact" className="what-we-do__button">
                        <span>Discuss Your Needs</span>
                        <ArrowRight size={16} strokeWidth={2.2} />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default WhatWeDo;