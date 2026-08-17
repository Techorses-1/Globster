import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { SERVICES } from "./Servicesdata.js";
import "./ServicesStack.scss";

const viewportSettings = { once: true, amount: 0.4 };

const ServicesStack = () => {
  return (
    <section className="services-stack">
      <div className="services-stack__header">
        <motion.span
          className="services-stack__eyebrow"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportSettings}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Our Services
        </motion.span>
        <motion.h2
          className="services-stack__heading"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportSettings}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
        >
          Keep Scrolling - Every Service, One Card At A Time
        </motion.h2>
      </div>

      <div className="services-stack__deck">
        {SERVICES.map((service, i) => {
          const Icon = service.icon;
          return (
            <div
              className="services-stack__wrapper"
              key={service.title}
              style={{ zIndex: i + 1 }}
            >
              <motion.div
                className="services-stack__card"
                style={{ top: `${90 + i * 16}px` }}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportSettings}
                transition={{ duration: 0.6, ease: "easeOut" }}
                whileHover={{ y: -6 }}
              >
                <div className="services-stack__image-side">
                  <img src={service.image} alt={service.title} loading="lazy" />
                  <span className="services-stack__badge">
                    <Icon size={22} strokeWidth={1.8} />
                  </span>
                </div>

                <div className="services-stack__content-side">
                  <span className="services-stack__number">
                    {String(i + 1).padStart(2, "0")} / {String(SERVICES.length).padStart(2, "0")}
                  </span>
                  <span className="services-stack__one-liner">
                    {service.oneLiner}
                  </span>
                  <h3 className="services-stack__title">{service.title}</h3>
                  <p className="services-stack__description">
                    {service.description}
                  </p>
                  <Link to={service.link} className="services-stack__link">
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
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ServicesStack;