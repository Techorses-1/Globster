import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { SERVICES } from "./Servicesdata.js";
import "./ServicesEditorial.scss";

const viewportSettings = { once: true, amount: 0.3 };

const ServicesEditorial = () => {
  return (
    <section className="services-editorial">
      <div className="services-editorial__panels">
        {SERVICES.map((service, i) => {
          const Icon = service.icon;
          const isEven = i % 2 === 1;
          return (
            <div
              className={`services-editorial__panel ${isEven ? "services-editorial__panel--reverse" : ""
                }`}
              key={service.title}
            >
              <motion.div
                className="services-editorial__image-full"
                style={{ backgroundImage: `url(${service.image})` }}
                initial={{ opacity: 0, scale: 1.06 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={viewportSettings}
                transition={{ duration: 0.9, ease: "easeOut" }}
              >
                <div className="services-editorial__image-overlay" />
                <span className="services-editorial__badge">
                  <Icon size={26} strokeWidth={1.8} />
                </span>
              </motion.div>

              <motion.div
                className="services-editorial__card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportSettings}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
              >
                <span className="services-editorial__number">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="services-editorial__one-liner">
                  {service.oneLiner}
                </span>
                <h3 className="services-editorial__title">{service.title}</h3>
                <p className="services-editorial__description">
                  {service.description}
                </p>
                <Link to={service.link} className="services-editorial__link">
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
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ServicesEditorial;