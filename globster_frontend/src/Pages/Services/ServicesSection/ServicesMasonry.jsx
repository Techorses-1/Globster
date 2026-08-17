import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { SERVICES } from "./Servicesdata.js";
import "./ServicesMasonry.scss";

const viewportSettings = { once: true, amount: 0.2 };

const ServicesMasonry = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (i) => {
        setActiveIndex((prev) => (prev === i ? null : i));
    };

    return (
        <section className="services-masonry">
            <div className="services-masonry__inner">
                <div className="services-masonry__header">
                    <motion.span
                        className="services-masonry__eyebrow"
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={viewportSettings}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        Our Services
                    </motion.span>
                    <motion.h2
                        className="services-masonry__heading"
                        initial={{ opacity: 0, y: 28 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={viewportSettings}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                    >
                        Hover Or Tap A Tile To See More
                    </motion.h2>
                </div>

                <div className="services-masonry__grid">
                    {SERVICES.map((service, i) => {
                        const Icon = service.icon;
                        const isActive = activeIndex === i;
                        return (
                            <motion.div
                                className={`services-masonry__tile services-masonry__tile--${i % 3
                                    } ${isActive ? "is-active" : ""}`}
                                key={service.title}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={viewportSettings}
                                transition={{
                                    duration: 0.55,
                                    ease: "easeOut",
                                    delay: (i % 4) * 0.06,
                                }}
                                onMouseEnter={() => setActiveIndex(i)}
                                onMouseLeave={() =>
                                    setActiveIndex((prev) => (prev === i ? null : prev))
                                }
                                onClick={() => handleToggle(i)}
                            >
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    loading="lazy"
                                    className="services-masonry__image"
                                />

                                <div className="services-masonry__scrim" />

                                <span className="services-masonry__icon">
                                    <Icon size={20} strokeWidth={1.8} />
                                </span>

                                <div className="services-masonry__info">
                                    <h3 className="services-masonry__title">
                                        {service.title}
                                    </h3>

                                    <div className="services-masonry__reveal">
                                        <span className="services-masonry__one-liner">
                                            {service.oneLiner}
                                        </span>
                                        <p className="services-masonry__description">
                                            {service.description}
                                        </p>
                                        <Link 
                                            to={service.link} 
                                            className="services-masonry__link"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            Learn More
                                            <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
                                                <path
                                                    d="M1 6H15M15 6L10 1M15 6L10 11"
                                                    stroke="currentColor"
                                                    strokeWidth="1.6"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ServicesMasonry;