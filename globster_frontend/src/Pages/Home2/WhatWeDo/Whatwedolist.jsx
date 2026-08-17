import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Headset,
  Globe2,
  ShoppingCart,
  PenTool,
  Shirt,
  Film,
  Box,
  Database,
  Plus,
} from "lucide-react";
import "./WhatWeDoList.scss";

const SERVICES = [
  {
    icon: Headset,
    title: "Virtual Support, Real Results",
    oneLiner: "Your Time Back, Every Day",
    description:
      "Reliable support for admin, inbox, and daily tasks - so you can focus on growth and scale your business effortlessly with expert assistance.",
    link: "/service/virtual-assistant",
  },
  {
    icon: Globe2,
    title: "Websites Crafted Around You",
    oneLiner: "Websites Built Around You",
    description:
      "Custom-coded websites designed to match your brand identity and convert visitors into loyal, long-term customers effectively.",
    link: "/service/website-development",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Stores Built To Convert",
    oneLiner: "Stores Built to Sell",
    description:
      "High-performing online stores designed for a seamless shopping experience and higher conversion rates that drive revenue growth.",
    link: "/service/ecommerce-development",
  },
  {
    icon: PenTool,
    title: "Vector Artwork, Perfected",
    oneLiner: "Clean, Scalable, Print-Ready",
    description:
      "We turn your designs into crisp vector artwork - perfect for print, branding, merchandise, and digital use across all platforms.",
    link: "/service/vector-art",
  },
  {
    icon: Shirt,
    title: "Embroidery Digitizing, Stitched Right",
    oneLiner: "From Design to Stitch",
    description:
      "Precise, machine-ready embroidery files that bring your designs to life on fabric with exceptional detail and flawless execution.",
    link: "/service/embroidery",
  },
  {
    icon: Film,
    title: "Visuals That Demand Attention",
    oneLiner: "Polished Visuals, Every Time",
    description:
      "Professional editing that makes your photos and videos look sharp, compelling, and market-ready for any platform or campaign.",
    link: "/service/image-editing",
  },
  {
    icon: Box,
    title: "Mockups That Sell The Vision",
    oneLiner: "See Your Product Before It's Made",
    description:
      "Realistic mockups that showcase your products beautifully - before a single unit ships to customers or hits the market.",
    link: "/service/product-mockup",
  },
  {
    icon: Database,
    title: "Data Processing, Done Right",
    oneLiner: "Your Data, Organized & Ready",
    description:
      "Accurate data entry, cleaning, and processing - so you always work with reliable and actionable information for better decision-making.",
    link: "/service/data-processing",
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
          Services Built To Move Your Business Forward
        </motion.h2>
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
                      Learn More
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
                Learn More
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
};

export default WhatWeDoList;