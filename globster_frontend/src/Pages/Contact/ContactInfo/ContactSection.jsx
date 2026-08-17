import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
    Phone,
    Mail,
    MapPin,
    User,
    MessageSquare,
} from "lucide-react";

import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaXTwitter,
} from "react-icons/fa6";
import {
    contactFormInitialValues,
    contactFormValidationSchema,
    submitContactForm,
} from "./Contactformschema.js";
import "./ContactSection.scss";

const CONTACT_INFO = [
    {
        icon: Phone,
        label: "Phone",
        value: "+1 (000) 000-0000",
        href: "tel:+10000000000",
    },
    {
        icon: Mail,
        label: "Email",
        value: "hello@globster.com",
        href: "mailto:hello@globster.com",
    },
    {
        icon: MapPin,
        label: "Address",
        value: "Remote & Global - serving clients worldwide",
        href: null,
    },
];

const SOCIALS = [
    {
        label: "Facebook",
        href: "https://facebook.com",
        icon: FaFacebookF,
    },
    {
        label: "Instagram",
        href: "https://instagram.com",
        icon: FaInstagram,
    },
    {
        label: "LinkedIn",
        href: "https://linkedin.com",
        icon: FaLinkedinIn,
    },
    {
        label: "Twitter / X",
        href: "https://twitter.com",
        icon: FaXTwitter,
    },
];

const viewportSettings = { once: true, amount: 0.25 };

const ContactSection = () => {
    const handleSubmit = async (values, { resetForm, setSubmitting }) => {
        try {
            await submitContactForm(values);
            toast.success("Thanks! We've received your message.");
            resetForm();
        } catch (err) {
            toast.error("Something went wrong. Please try again.");
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <section className="contact-section">
            <div className="contact-section__inner">
                {/* ---- NEW: Center Heading (like Pricing section) ---- */}
                <div className="contact-section__header">
                    <motion.span
                        className="contact-section__eyebrow"
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={viewportSettings}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        Contact Us
                    </motion.span>
                    <motion.h2
                        className="contact-section__main-heading"
                        initial={{ opacity: 0, y: 28 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={viewportSettings}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                    >
                        Let's Start The Conversation
                    </motion.h2>
                </div>

                <div className="contact-section__grid">
                    {/* ---- Left: contact info panel (NO CHANGE) ---- */}
                    <motion.div
                        className="contact-section__panel"
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={viewportSettings}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                    >
                        <span className="contact-section__tag">
                            Get In Touch
                        </span>

                        <h2 className="contact-section__heading">
                            We&apos;d Love To Hear From You
                        </h2>
                        <p className="contact-section__paragraph">
                            Reach out through whichever way suits you best - we&apos;re
                            always happy to talk about your next project.
                        </p>

                        <ul className="contact-section__info-list">
                            {CONTACT_INFO.map(({ icon: Icon, label, value, href }) => (
                                <li className="contact-section__info-item" key={label}>
                                    <span className="contact-section__info-icon">
                                        <Icon size={19} strokeWidth={1.8} />
                                    </span>
                                    <span className="contact-section__info-text">
                                        <span className="contact-section__info-label">
                                            {label}
                                        </span>
                                        {href ? (
                                            <a href={href} className="contact-section__info-value">
                                                {value}
                                            </a>
                                        ) : (
                                            <span className="contact-section__info-value">
                                                {value}
                                            </span>
                                        )}
                                    </span>
                                </li>
                            ))}
                        </ul>

                        <div className="contact-section__socials">
                            {SOCIALS.map(({ label, href, icon: Icon }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="contact-section__social"
                                    aria-label={label}
                                >
                                    <Icon size={17} strokeWidth={1.8} />
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* ---- Right: form card ---- */}
                    <motion.div
                        className="contact-section__card"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={viewportSettings}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
                    >
                        <Formik
                            initialValues={contactFormInitialValues}
                            validationSchema={contactFormValidationSchema}
                            onSubmit={handleSubmit}
                        >
                            {({ isSubmitting }) => (
                                <Form className="contact-section__form" noValidate>
                                    <div className="contact-section__row">
                                        <div className="contact-section__field">
                                            <label htmlFor="fullName">Full Name *</label>
                                            <div className="contact-section__input-wrap">
                                                <User size={17} strokeWidth={1.8} />
                                                <Field
                                                    id="fullName"
                                                    name="fullName"
                                                    type="text"
                                                    placeholder="John Doe"
                                                />
                                            </div>
                                            <ErrorMessage
                                                name="fullName"
                                                component="span"
                                                className="contact-section__error"
                                            />
                                        </div>

                                        <div className="contact-section__field">
                                            <label htmlFor="email">Email *</label>
                                            <div className="contact-section__input-wrap">
                                                <Mail size={17} strokeWidth={1.8} />
                                                <Field
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    placeholder="john@company.com"
                                                />
                                            </div>
                                            <ErrorMessage
                                                name="email"
                                                component="span"
                                                className="contact-section__error"
                                            />
                                        </div>
                                    </div>

                                    <div className="contact-section__field">
                                        <label htmlFor="phone">Phone *</label>
                                        <div className="contact-section__input-wrap">
                                            <Phone size={17} strokeWidth={1.8} />
                                            <Field
                                                id="phone"
                                                name="phone"
                                                type="tel"
                                                placeholder="+1 (000) 000-0000"
                                            />
                                        </div>
                                        <ErrorMessage
                                            name="phone"
                                            component="span"
                                            className="contact-section__error"
                                        />
                                    </div>

                                    <div className="contact-section__field">
                                        <label htmlFor="message">Message *</label>
                                        <div className="contact-section__input-wrap contact-section__input-wrap--textarea">
                                            <MessageSquare size={17} strokeWidth={1.8} />
                                            <Field
                                                as="textarea"
                                                id="message"
                                                name="message"
                                                rows={5}
                                                placeholder="How can we help?"
                                            />
                                        </div>
                                        <ErrorMessage
                                            name="message"
                                            component="span"
                                            className="contact-section__error"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="contact-section__submit"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? "Sending..." : "Send Message"}
                                    </button>
                                </Form>
                            )}
                        </Formik>
                    </motion.div>
                </div>
            </div>

            <ToastContainer position="top-right" autoClose={4000} />
        </section>
    );
};

export default ContactSection;