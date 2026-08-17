import React from "react";
import { motion } from "framer-motion";
import {
  ShoppingCart,
  Truck,
  Building2,
  Store,
} from "lucide-react";
import "./IndustriesShowcase.scss";

// NOTE: Replace these with your final production photography.
// Placeholders are served from picsum.photos (seeded, so they stay
// consistent) purely so the layout is visible while you wire up real assets.

const INDUSTRIES = [
  {
    icon: ShoppingCart,
    image: "https://picsum.photos/seed/globster-ecommerce/900/700",
    title: "E-Commerce Virtual Assistant Support",
    description:
      "From order processing and inventory updates to customer service and returns, our VAs keep your online store running smoothly around the clock - so nothing slips through during your busiest sales periods.",
  },
  {
    icon: Truck,
    image: "https://picsum.photos/seed/globster-logistics/900/700",
    title: "Virtual Assistants For Transportation & Logistics",
    description:
      "We help logistics teams manage dispatch coordination, shipment tracking, and back-office admin — keeping every load, driver, and delivery window accounted for.",
  },
  {
    icon: Building2,
    image: "https://picsum.photos/seed/globster-realestate/900/700",
    title: "Real Estate Virtual Assistant Support",
    description:
      "From listing management to appointment scheduling and lead follow-ups, our VAs help agents and agencies focus on closing deals instead of getting buried in busywork.",
  },
  {
    icon: Store,
    image: "https://picsum.photos/seed/globster-retail/900/700",
    title: "Virtual Assistance For Retail Businesses",
    description:
      "We support retail teams with inventory tracking, customer inquiries, and day-to-day admin - keeping your storefront and back office running like clockwork.",
  },
];

const viewportSettings = { once: true, amount: 0.3 };

const IndustriesShowcase = () => {
  return (
    <section className="industries-showcase">
      <div className="industries-showcase__inner">
        <div className="industries-showcase__header">
          <motion.span
            className="industries-showcase__eyebrow"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportSettings}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Industries We Serve
          </motion.span>
          <motion.h2
            className="industries-showcase__heading"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportSettings}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          >
            Support Tailored To The Way Your Industry Works
          </motion.h2>
        </div>

        <div className="industries-showcase__rows">
          {INDUSTRIES.map((industry, i) => {
            const Icon = industry.icon;
            const isEven = i % 2 === 1;
            return (
              <div
                className={`industries-showcase__row ${
                  isEven ? "industries-showcase__row--reverse" : ""
                }`}
                key={industry.title}
              >
                <motion.div
                  className="industries-showcase__image-wrap"
                  initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={viewportSettings}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                >
                  <img
                    src={industry.image}
                    alt={industry.title}
                    loading="lazy"
                  />
                  <span className="industries-showcase__badge">
                    <Icon size={22} strokeWidth={1.8} />
                  </span>
                </motion.div>

                <motion.div
                  className="industries-showcase__content"
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={viewportSettings}
                  transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                >
                  <span className="industries-showcase__number">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="industries-showcase__title">
                    {industry.title}
                  </h3>
                  <p className="industries-showcase__description">
                    {industry.description}
                  </p>
                  <a href="#contact" className="industries-showcase__link">
                    Talk to us about your industry
                    <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
                      <path
                        d="M1 6H15M15 6L10 1M15 6L10 11"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IndustriesShowcase;