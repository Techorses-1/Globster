import React from "react";
import { motion } from "framer-motion";
import { Zap, Star, Crown, CheckCircle2 } from "lucide-react";
import "./PricingShowcase.scss";

const PLANS = [
    {
        icon: Zap,
        name: "Flexible",
        description:
            "Adapt to your unique schedule with our flexible-hours virtual assistant service, offering versatile support for your evolving business demands.",
        features: [
            "24 X 6 Customer Support",
            "Open on Public Holidays",
            "Choose your own Shift Times",
            "Daily Reports",
        ],
        popular: false,
        buttonLabel: "Get Started",
    },
    {
        icon: Crown,
        name: "Full Time",
        description:
            "Optimize operations seamlessly with our full-time virtual assistant service, ensuring dedicated support for your business success.",
        features: [
            "Dedicated Resource",
            "24 X 6 Customer Support",
            "Trained Backup Resources",
            "Client Account Manager",
            "Choose your own Shift Times",
            "Open on Public Holidays",
            "Live Monitoring Software",
            "Free Daily Reports",
        ],
        popular: true,
        buttonLabel: "Get Started",
    },
    {
        icon: Star,
        name: "Part Time",
        description:
            "Elevate productivity with our part-time virtual assistant service, delivering efficiency and support tailored to your business needs.",
        features: [
            "Dedicated Resource",
            "24 X 6 Customer Support",
            "Open on Public Holidays",
            "Choose your own Shift Times",
            "Daily Reports",
            "Trained Backup Resources",
            "Client Account Manager",
            "Live Monitoring Software",
        ],
        popular: false,
        buttonLabel: "Get Started",
    },
];

const viewportSettings = { once: true, amount: 0.25 };

const PricingShowcase = () => {
    return (
        <section className="pricing-showcase" id="pricing">
            <div className="pricing-showcase__inner">
                <div className="pricing-showcase__header">
                    <motion.span
                        className="pricing-showcase__eyebrow"
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={viewportSettings}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        Pricing Plans
                    </motion.span>
                    <motion.h2
                        className="pricing-showcase__heading"
                        initial={{ opacity: 0, y: 28 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={viewportSettings}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                    >
                        Choose The Plan That Fits Your Business
                    </motion.h2>
                </div>

                <div className="pricing-showcase__grid">
                    {PLANS.map((plan, i) => {
                        const Icon = plan.icon;
                        return (
                            <motion.div
                                className={`pricing-showcase__card ${plan.popular ? "pricing-showcase__card--popular" : ""
                                    }`}
                                key={plan.name}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={viewportSettings}
                                transition={{
                                    duration: 0.65,
                                    ease: "easeOut",
                                    delay: i * 0.12,
                                }}
                                whileHover={{ y: -8 }}
                            >
                                {plan.popular && (
                                    <span className="pricing-showcase__ribbon">
                                        Most Popular
                                    </span>
                                )}

                                <span className="pricing-showcase__icon">
                                    <Icon size={26} strokeWidth={1.8} />
                                </span>

                                <h3 className="pricing-showcase__name">{plan.name}</h3>
                                <p className="pricing-showcase__description">
                                    {plan.description}
                                </p>

                                <span className="pricing-showcase__included-label">
                                    What&apos;s Included
                                </span>

                                <ul className="pricing-showcase__features">
                                    {plan.features.map((feature) => (
                                        <li className="pricing-showcase__feature" key={feature}>
                                            <CheckCircle2 size={18} strokeWidth={2} />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <a href="#contact" className="pricing-showcase__button">
                                    {plan.buttonLabel}
                                </a>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default PricingShowcase;