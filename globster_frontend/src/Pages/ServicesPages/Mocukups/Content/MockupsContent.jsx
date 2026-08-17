import React from "react";
import { motion } from "framer-motion";
import {
    Sparkles,
    TrendingUp,
    Layers,
    Package,
    Shirt,
    Monitor,
    Gift,
    Gem,
    SlidersHorizontal,
    Zap,
    Wallet,
    HeartHandshake,
} from "lucide-react";
import "./MockupsContent.scss";

// NOTE: Replace this with your final production photography.
const SECTION_IMAGE = "https://picsum.photos/seed/svc-mockups/1000/1200";

const WHY_MATTERS = [
    {
        icon: Sparkles,
        title: "Enhance Product Perception",
        description:
            "Realistic mockups make your products look more polished and valuable before customers even hold them.",
    },
    {
        icon: TrendingUp,
        title: "Boost Sales",
        description:
            "Strong product presentation directly drives higher conversion rates.",
    },
    {
        icon: Layers,
        title: "Streamline Design & Prototyping",
        description:
            "Test designs and layouts visually before committing to a full production run.",
    },
];

const OUR_SERVICES = [
    {
        icon: Package,
        title: "Product Packaging Mockups",
        description:
            "Boxes, labels, and packaging shown in a real-world setting so buyers see the full picture.",
    },
    {
        icon: Shirt,
        title: "Apparel & Fashion Mockups",
        description:
            "Clothing and fashion items displayed on models or mannequins to show true fit and drape.",
    },
    {
        icon: Monitor,
        title: "Digital Product Mockups",
        description:
            "Websites and apps presented across devices and screens, ready for a pitch or a portfolio.",
    },
    {
        icon: Gift,
        title: "Merchandise & Promotional Mockups",
        description:
            "Promotional items and merchandise presented in a way that resonates with your audience.",
    },
];

const WHY_US = [
    {
        icon: Gem,
        title: "Realism",
        description:
            "Mockups built to closely mirror how your product will actually look in the real world.",
    },
    {
        icon: SlidersHorizontal,
        title: "Customization",
        description:
            "Every mockup is tailored to your specific product and brand requirements.",
    },
    {
        icon: Zap,
        title: "Quick Turnaround",
        description:
            "An efficient creation process that keeps your deadlines firmly on track.",
    },
    {
        icon: Wallet,
        title: "Affordable Pricing",
        description:
            "Professional mockup work priced within reach for businesses of every size.",
    },
    {
        icon: HeartHandshake,
        title: "Client Satisfaction",
        description:
            "We stay closely involved with you until the mockups match your vision.",
    },
];

const viewportSettings = { once: true, amount: 0.25 };

const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    visible: (delay = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut", delay },
    }),
};

const MockupsContent = () => {
    return (
        <section className="mockups-content">
            <div className="mockups-content__inner">
                {/* Intro — centered */}
                <motion.div
                    className="mockups-content__intro"
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportSettings}
                    variants={fadeUp}
                >
                    <span className="mockups-content__eyebrow">Product Mockups</span>
                    <h2 className="mockups-content__intro-heading">
                        See Your Product Before A Single Unit Ships
                    </h2>
                    <p className="mockups-content__intro-lead">
                        Elevate your product presentations and marketing materials with
                        Globster's Realistic Product Mockup services. We create lifelike
                        mockups that put your products in the best possible light.
                    </p>
                </motion.div>

                {/* Why It Matters — image + points */}
                <div className="mockups-content__what">
                    <motion.div
                        className="mockups-content__what-image"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={viewportSettings}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                    >
                        <img src={SECTION_IMAGE} alt="Realistic product mockup sample" />
                    </motion.div>

                    <div className="mockups-content__what-text">
                        <motion.div
                            className="mockups-content__block-header mockups-content__block-header--left"
                            initial="hidden"
                            whileInView="visible"
                            viewport={viewportSettings}
                            variants={fadeUp}
                        >
                            <h3 className="mockups-content__block-heading">
                                Why Product Mockups Matter
                            </h3>
                            <p className="mockups-content__block-lead">
                                First impressions decide a lot in a competitive market.
                                High-quality mockups:
                            </p>
                        </motion.div>

                        <div className="mockups-content__use-list">
                            {WHY_MATTERS.map((item, i) => {
                                const Icon = item.icon;
                                return (
                                    <motion.div
                                        className="mockups-content__use-item"
                                        key={item.title}
                                        custom={i * 0.1}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={viewportSettings}
                                        variants={fadeUp}
                                    >
                                        <span className="mockups-content__use-icon">
                                            <Icon size={20} strokeWidth={1.8} />
                                        </span>
                                        <div>
                                            <h4 className="mockups-content__use-title">
                                                {item.title}
                                            </h4>
                                            <p className="mockups-content__use-description">
                                                {item.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Our Services — staggered 4-card layout */}
                <div className="mockups-content__block">
                    <motion.div
                        className="mockups-content__block-header mockups-content__block-header--center"
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportSettings}
                        variants={fadeUp}
                    >
                        <h3 className="mockups-content__block-heading">
                            Our Realistic Product Mockup Services
                        </h3>
                        <p className="mockups-content__block-lead">
                            A complete mockup toolkit, tailored to whatever your product
                            needs to show up looking its best.
                        </p>
                    </motion.div>

                    <div className="mockups-content__grid mockups-content__grid--count-4">
                        {OUR_SERVICES.map((item, i) => {
                            const Icon = item.icon;
                            return (
                                <motion.div
                                    className="mockups-content__card"
                                    key={item.title}
                                    custom={i * 0.1}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={viewportSettings}
                                    variants={fadeUp}
                                >
                                    <span className="mockups-content__card-icon">
                                        <Icon size={26} strokeWidth={1.7} />
                                    </span>
                                    <h4 className="mockups-content__card-title">
                                        {item.title}
                                    </h4>
                                    <p className="mockups-content__card-description">
                                        {item.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* Why Choose Us — fixed 2-column grid, extras wrap naturally */}
                <div className="mockups-content__why">
                    <motion.div
                        className="mockups-content__block-header mockups-content__block-header--center"
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportSettings}
                        variants={fadeUp}
                    >
                        <h3 className="mockups-content__block-heading">
                            Why Choose Us?
                        </h3>
                        <p className="mockups-content__block-lead mockups-content__block-lead--cursive">
                            Because your product deserves to look its best, first.
                        </p>
                    </motion.div>

                    <div className="mockups-content__why-grid">
                        {WHY_US.map((item, i) => {
                            const Icon = item.icon;
                            return (
                                <motion.div
                                    className="mockups-content__why-item"
                                    key={item.title}
                                    custom={i * 0.1}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={viewportSettings}
                                    variants={fadeUp}
                                >
                                    <span className="mockups-content__why-icon">
                                        <Icon size={22} strokeWidth={1.8} />
                                    </span>
                                    <div>
                                        <h4 className="mockups-content__why-title">
                                            {item.title}
                                        </h4>
                                        <p className="mockups-content__why-description">
                                            {item.description}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* Closing CTA — centered */}
                <motion.div
                    className="mockups-content__cta"
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportSettings}
                    variants={fadeUp}
                >
                    <p className="mockups-content__cta-text">
                        Elevate your product marketing, streamline your design process,
                        and leave a lasting impression with our Realistic Product
                        Mockup services.
                    </p>
                    <a href="#contact" className="mockups-content__cta-button">
                        Discuss Your Project
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default MockupsContent;