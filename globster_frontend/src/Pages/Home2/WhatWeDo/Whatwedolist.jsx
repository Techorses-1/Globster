import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ClipboardList,
  Headset,
  Search,
  ShoppingCart,
  TrendingUp,
  Palette,
  Plus,
} from "lucide-react";
import "./WhatWeDoList.scss";

const SERVICES = [
  {
    icon: ClipboardList,
    title: "Administrative Support",
    oneLiner: "Stay Organized, Stay Ahead",
    description:
      "Keep your day organized with calendar management, data entry, documentation, scheduling, email management and other administrative tasks.",
    link: "/service/administrative-support",
  },
  {
    icon: Headset,
    title: "Customer Support",
    oneLiner: "Timely, Professional Replies",
    description:
      "Give your customers timely, professional support through email, chat, social media and other communication channels.",
    link: "/service/customer-support",
  },
  {
    icon: Search,
    title: "Data & Research",
    oneLiner: "From Raw Data to Real Insight",
    description:
      "Turn hours of manual research into organized, actionable information with web research, data collection, data processing and reporting.",
    link: "/service/data-research",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Support",
    oneLiner: "Your Store, Running Smoothly",
    description:
      "Manage product listings, order processing, inventory updates, customer queries and other daily e-commerce operations.",
    link: "/service/ecommerce-support",
  },
  {
    icon: TrendingUp,
    title: "Sales & Lead Support",
    oneLiner: "Keep Your Pipeline Moving",
    description:
      "Keep your sales pipeline moving with lead research, CRM updates, prospect list building, follow-ups and appointment coordination.",
    link: "/service/sales-lead-support",
  },
  {
    icon: Palette,
    title: "Creative & Digital Support",
    oneLiner: "Creative Work, Handled",
    description:
      "Get assistance with digital image editing, graphic production, content preparation, product mockups and other recurring creative tasks.",
    link: "/service/creative-digital-support",
  },
];

const viewportSettings = { once: true, amount: 0.25 };

const WhatWeDoList = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = SERVICES[activeIndex];
  const ActiveIcon = active.icon;

  const handleSelect = (i) => {
    setActiveIndex((prev) => (prev === i ? prev : i));
  };

  return (
    <section className="wwd-list2" id="services">
      <div className="wwd-list2__header">
        <motion.span
          className="wwd-list2__eyebrow"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportSettings}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          What We Do
        </motion.span>

        <motion.h2
          className="wwd-list2__heading"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportSettings}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
        >
          Support That Fits the Way You Work
        </motion.h2>

        <motion.p
          className="wwd-list2__description"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportSettings}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        >
          From everyday administration to specialized operational support, our
          virtual assistants help you get more done without adding unnecessary
          overhead.
        </motion.p>
      </div>

      <motion.div
        className="wwd-list2__inner"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportSettings}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {/* Left: numbered list (also doubles as mobile accordion) */}
        <ul className="wwd-list2__nav">
          {SERVICES.map((service, i) => {
            const isActive = i === activeIndex;
            const Icon = service.icon;
            return (
              <li
                className={`wwd-list2__nav-item ${isActive ? "is-active" : ""}`}
                key={service.title}
              >
                <button
                  type="button"
                  className="wwd-list2__nav-trigger"
                  onClick={() => handleSelect(i)}
                  aria-expanded={isActive}
                >
                  <span className="wwd-list2__nav-number">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="wwd-list2__nav-title">{service.title}</span>
                  <span className="wwd-list2__nav-plus">
                    <Plus size={16} strokeWidth={2} />
                  </span>
                </button>

                {/* Mobile-only inline panel (hidden on desktop via CSS) */}
                <div className="wwd-list2__mobile-panel">
                  <div className="wwd-list2__mobile-panel-inner">
                    <span className="wwd-list2__mobile-icon">
                      <Icon size={26} strokeWidth={1.7} />
                    </span>
                    <span className="wwd-list2__mobile-one-liner">
                      {service.oneLiner}
                    </span>
                    <p className="wwd-list2__mobile-description">
                      {service.description}
                    </p>
                    <Link to={service.link} className="wwd-list2__mobile-cta">
                      Explore This Service
                    </Link>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>

        {/* Right: live preview panel (desktop/tablet only, hidden on mobile) */}
        <div className="wwd-list2__preview">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.title}
              className="wwd-list2__preview-card2"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            >
              <span className="wwd-list2__preview-icon">
                <ActiveIcon size={40} strokeWidth={1.6} />
              </span>
              <span className="wwd-list2__preview-one-liner">
                {active.oneLiner}
              </span>
              <h3 className="wwd-list2__preview-title">{active.title}</h3>
              <p className="wwd-list2__preview-description">
                {active.description}
              </p>
              <Link to={active.link} className="wwd-list2__preview-cta">
                Explore This Service
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
};

export default WhatWeDoList;