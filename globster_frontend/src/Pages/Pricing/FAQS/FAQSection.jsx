import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Plus, MessageCircle, ArrowRight } from "lucide-react";
import "./FAQSection.scss";

const LEFT_FAQS = [
    {
        question: "What does a virtual assistant do?",
        answer:
            "A virtual assistant helps with remote tasks such as scheduling, inbox management, data entry, research, product listing updates, customer enquiries and administrative coordination. The exact responsibilities depend on the role and your business requirements.",
    },
    {
        question: "Who can work with Globster?",
        answer:
            "We work with businesses and professionals who need help with recurring tasks or defined support projects, including e-commerce brands, startups, small businesses, coaches, consultants, manufacturers, real estate professionals and SaaS companies.",
    },
    {
        question: "Which countries do you serve?",
        answer:
            "We support businesses in the USA, Canada, the UK, Europe, the UAE, Australia and New Zealand. Specific working arrangements depend on the engagement and the coverage you need.",
    },
    {
        question: "Can I interview my virtual assistant first?",
        answer:
            "Where applicable, we arrange interviews with suitable candidates so you can evaluate their experience, communication and working style before making a selection.",
    },
    {
        question: "Can I hire part-time or full-time support?",
        answer:
            "Yes, we discuss part-day and full-day arrangements based on the role, workload, availability and working hours. The available options and terms are confirmed before the engagement begins.",
    },
    {
        question: "Can I change my assigned assistant?",
        answer:
            "If the working arrangement isn't a good fit, raise it with our team. We'll review the issue and discuss solutions, including a replacement where feasible and subject to the service agreement.",
    },
];

const RIGHT_FAQS = [
    {
        question: "How much does a virtual assistant cost?",
        answer:
            "Pricing depends on the tasks, required skills, working hours and engagement structure. Contact us with your requirements and we'll discuss the relevant hourly rate or agreed price.",
    },
    {
        question: "Do you offer a free trial?",
        answer:
            "A one-week trial may be available for suitable engagements. Whether it is paid or unpaid, the scope and conditions are agreed before the trial begins.",
    },
    {
        question: "How does onboarding work?",
        answer:
            "We discuss your requirements, agree on the role and scope, arrange candidate selection where applicable, set up access and communication processes, and then begin the engagement.",
    },
    {
        question: "Can my assistant work in my time zone?",
        answer:
            "We discuss your preferred working hours and the coverage you need before confirming availability. Time-zone alignment depends on the role, the agreed schedule and staffing availability.",
    },
    {
        question: "How do you protect my business information?",
        answer:
            "We set confidentiality expectations and access controls for each engagement, and NDA terms can be agreed before work begins. We recommend delegated access, client-owned accounts, a password manager and multifactor authentication instead of sharing passwords directly.",
    },
    {
        question: "Which online store and creative tasks can you handle?",
        answer:
            "We can help with product listings, catalogue maintenance, inventory records, routine customer enquiries and follow-ups. Our creative support covers vector artwork, image editing, product mockups and embroidery digitizing, depending on project specifications.",
    },
];

const viewportSettings = { once: true, amount: 0.2 };

const FAQSection = () => {
    const [openId, setOpenId] = useState(null);

    const toggle = (id) => setOpenId((prev) => (prev === id ? null : id));

    const renderColumn = (items, prefix) => (
        <div className="faq-section__column">
            {items.map((item, i) => {
                const id = `${prefix}-${i}`;
                const isOpen = openId === id;
                return (
                    <div
                        className={`faq-section__item ${isOpen ? "is-open" : ""}`}
                        key={id}
                    >
                        <button
                            type="button"
                            className="faq-section__trigger"
                            onClick={() => toggle(id)}
                            aria-expanded={isOpen}
                            aria-controls={`faq-panel-${id}`}
                        >
                            <span className="faq-section__question">{item.question}</span>
                            <motion.span
                                className="faq-section__icon"
                                animate={{ rotate: isOpen ? 135 : 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                            >
                                <Plus size={18} strokeWidth={2.2} />
                            </motion.span>
                        </button>

                        <AnimatePresence initial={false}>
                            {isOpen && (
                                <motion.div
                                    id={`faq-panel-${id}`}
                                    key="panel"
                                    className="faq-section__panel"
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{
                                        height: { duration: 0.35, ease: [0.4, 0, 0.2, 1] },
                                        opacity: { duration: 0.25, ease: "easeOut" },
                                    }}
                                >
                                    <div className="faq-section__panel-inner">
                                        <p className="faq-section__answer">{item.answer}</p>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                );
            })}
        </div>
    );

    return (
        <section className="faq-section" id="faq">
            <div className="faq-section__inner">
                <div className="faq-section__header">
                    <motion.span
                        className="faq-section__eyebrow"
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={viewportSettings}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        FAQs
                    </motion.span>

                    <motion.h2
                        className="faq-section__heading"
                        initial={{ opacity: 0, y: 28 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={viewportSettings}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                    >
                        Answers to Questions Businesses Ask Before Getting Started
                    </motion.h2>

                    <motion.p
                        className="faq-section__description"
                        initial={{ opacity: 0, y: 28 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={viewportSettings}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                    >
                        Clear answers on hiring, pricing, onboarding and security, so you
                        know what to expect from day one.
                    </motion.p>
                </div>

                <motion.div
                    className="faq-section__grid"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={viewportSettings}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                >
                    {renderColumn(LEFT_FAQS, "left")}
                    {renderColumn(RIGHT_FAQS, "right")}
                </motion.div>

                <motion.div
                    className="faq-section__cta"
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={viewportSettings}
                    transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                >
                    <span className="faq-section__cta-icon">
                        <MessageCircle size={22} strokeWidth={1.8} />
                    </span>
                    <div className="faq-section__cta-text">
                        <h3 className="faq-section__cta-title">Still have a question?</h3>
                        <p className="faq-section__cta-copy">
                            Tell us about your business and we'll point you in the right
                            direction.
                        </p>
                    </div>
                    <Link to="/contact" className="faq-section__cta-button">
                        <span>Talk to Our Team</span>
                        <ArrowRight size={16} strokeWidth={2.2} />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default FAQSection;