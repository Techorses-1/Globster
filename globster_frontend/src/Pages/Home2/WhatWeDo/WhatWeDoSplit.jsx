import React from "react";
import { motion } from "framer-motion";
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
} from "lucide-react";
import "./WhatWeDoSplit.scss";

const SERVICES = [
    {
        icon: Headset,
        image: "https://picsum.photos/seed/wwd-va/600/600",
        title: "Virtual Support, Real Results",
        oneLiner: "Your Time Back, Every Day",
        description:
            "Reliable support for admin, inbox, and daily tasks - so you can focus on growth and scale your business effortlessly with expert assistance.",
        link: "/service/virtual-assistant",
    },
    {
        icon: Globe2,
        image: "https://picsum.photos/seed/wwd-website/600/600",
        title: "Websites Crafted Around You",
        oneLiner: "Websites Built Around You",
        description:
            "Custom-coded websites designed to match your brand identity and convert visitors into loyal, long-term customers effectively.",
        link: "/service/website-development",
    },
    {
        icon: ShoppingCart,
        image: "https://picsum.photos/seed/wwd-ecommerce/600/600",
        title: "E-Commerce Stores Built To Convert",
        oneLiner: "Stores Built to Sell",
        description:
            "High-performing online stores designed for a seamless shopping experience and higher conversion rates that drive revenue growth.",
        link: "/service/ecommerce-development",
    },
    {
        icon: PenTool,
        image: "https://picsum.photos/seed/wwd-vector/600/600",
        title: "Vector Artwork, Perfected",
        oneLiner: "Clean, Scalable, Print-Ready",
        description:
            "We turn your designs into crisp vector artwork - perfect for print, branding, merchandise, and digital use across all platforms.",
        link: "/service/vector-art",
    },
    {
        icon: Shirt,
        image: "https://picsum.photos/seed/wwd-embroidery/600/600",
        title: "Embroidery Digitizing, Stitched Right",
        oneLiner: "From Design to Stitch",
        description:
            "Precise, machine-ready embroidery files that bring your designs to life on fabric with exceptional detail and flawless execution.",
        link: "/service/embroidery",
    },
    {
        icon: Film,
        image: "https://picsum.photos/seed/wwd-imagevideo/600/600",
        title: "Visuals That Demand Attention",
        oneLiner: "Polished Visuals, Every Time",
        description:
            "Professional editing that makes your photos and videos look sharp, compelling, and market-ready for any platform or campaign.",
        link: "/service/image-editing",
    },
    {
        icon: Box,
        image: "https://picsum.photos/seed/wwd-mockups/600/600",
        title: "Mockups That Sell The Vision",
        oneLiner: "See Your Product Before It's Made",
        description:
            "Realistic mockups that showcase your products beautifully - before a single unit ships to customers or hits the market.",
        link: "/service/product-mockup",
    },
    {
        icon: Database,
        image: "https://picsum.photos/seed/wwd-data/600/600",
        title: "Data Processing, Done Right",
        oneLiner: "Your Data, Organized & Ready",
        description:
            "Accurate data entry, cleaning, and processing - so you always work with reliable and actionable information for better decision-making.",
        link: "/service/data-processing",
    },
];

const viewportSettings = { once: true, amount: 0.3 };

const WhatWeDoSplit = () => {
    return (
        <section className="wwd-split" id="services">
            <div className="wwd-split__header">
                <motion.span
                    className="wwd-split__eyebrow"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={viewportSettings}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    What We Do
                </motion.span>
                <motion.h2
                    className="wwd-split__heading"
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={viewportSettings}
                    transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                >
                    Services Built To Move Your Business Forward
                </motion.h2>
            </div>

            <div className="wwd-split__rows">
                {SERVICES.map((service, i) => {
                    const Icon = service.icon;
                    const isEven = i % 2 === 1;
                    return (
                        <motion.div
                            className={`wwd-split__row ${isEven ? "wwd-split__row--reverse" : ""}`}
                            key={service.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={viewportSettings}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                        >
                            <motion.div
                                className="wwd-split__visual"
                                whileHover={{ rotate: 3, scale: 1.03 }}
                                transition={{ duration: 0.35, ease: "easeOut" }}
                            >
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="wwd-split__image"
                                    loading="lazy"
                                />
                                <span className="wwd-split__scrim" aria-hidden="true" />
                                <span className="wwd-split__number">
                                    {String(i + 1).padStart(2, "0")}
                                </span>
                                <span className="wwd-split__icon">
                                    <Icon size={30} strokeWidth={1.8} />
                                </span>
                            </motion.div>

                            <div className="wwd-split__content">
                                <span className="wwd-split__one-liner">
                                    {service.oneLiner}
                                </span>
                                <h3 className="wwd-split__title">{service.title}</h3>
                                <p className="wwd-split__description">
                                    {service.description}
                                </p>
                                <Link to={service.link} className="wwd-split__link">
                                    Learn more
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
                    );
                })}
            </div>
        </section>
    );
};

export default WhatWeDoSplit;