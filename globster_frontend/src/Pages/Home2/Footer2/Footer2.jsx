import React from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaXTwitter,
} from "react-icons/fa6";
import "./Footer2.scss";
// import logo from "../../../assets/logo/footer-logo.png";
import logo from "../../../assets/logo/newlogo.png";

const QUICK_LINKS = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Industries", href: "/industries" },
    { label: "Process", href: "/process" },
    { label: "Pricing", href: "/pricing" },
    { label: "About Us", href: "/aboutus" },
    { label: "Contact", href: "/contact" },
];

const SERVICE_LINKS = [
    { label: "Virtual Assistant", href: "/service/virtual-assistant" },
    { label: "Website Development", href: "/service/website-development" },
    { label: "E-commerce Development", href: "/service/ecommerce-development" },
    { label: "Vector Artwork", href: "/service/vector-art" },
    { label: "Embroidery Digitizing", href: "/service/embroidery" },
    { label: "Image & Video Editing", href: "/service/image-editing" },
    { label: "Product Mockups", href: "/service/product-mockup" },
    { label: "Data Processing", href: "/service/data-processing" },
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

const SERVICE_PATHS = [
    "/service/vector-art",
    "/service/embroidery",
    "/service/image-editing",
    "/service/product-mockup",
    "/service/data-processing",
    "/service/virtual-assistant",
    "/service/website-development",
    "/service/ecommerce-development",
];

const viewportSettings = { once: true, amount: 0.2 };

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (delay = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut", delay },
    }),
};

const Footer2 = () => {
    const year = new Date().getFullYear();
    const location = useLocation();

    const isServiceActive = () => {
        return SERVICE_PATHS.some(path => location.pathname === path);
    };

    const isActiveLink = (href) => {
        if (href === "/") {
            return location.pathname === "/";
        }
        if (href === "/services") {
            return location.pathname === "/services" || isServiceActive();
        }
        return location.pathname === href;
    };

    return (
        <footer className="footer2">
            <div className="footer2__inner">
                <div className="footer2__top">
                    {/* Brand column */}
                    <motion.div
                        className="footer2__brand"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportSettings}
                    >
                        <a href="/" className="footer2__logo">
                            <img src={logo} alt="Globster" className="footer2__logo-image" />
                        </a>
                        <p className="footer2__tagline">
                            A global outsourcing partner built for businesses that want
                            quality work without the overhead of hiring in-house.
                        </p>

                        <div className="footer2__socials">
                            {SOCIALS.map(({ label, href, icon: Icon }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="footer2__social"
                                    aria-label={label}
                                >
                                    <Icon size={17} strokeWidth={1.8} />
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Quick links column */}
                    <motion.div
                        className="footer2__column"
                        variants={fadeUp}
                        custom={0.1}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportSettings}
                    >
                        <h4 className="footer2__heading">Quick Links</h4>
                        <ul className="footer2__list">
                            {QUICK_LINKS.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className={`footer2__link ${isActiveLink(link.href) ? "is-active" : ""}`}
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Services column */}
                    <motion.div
                        className="footer2__column"
                        variants={fadeUp}
                        custom={0.18}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportSettings}
                    >
                        <h4 className="footer2__heading">Services</h4>
                        <ul className="footer2__list">
                            {SERVICE_LINKS.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className={`footer2__link ${location.pathname === link.href ? "is-active" : ""}`}
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact column */}
                    <motion.div
                        className="footer2__column footer2__column--contact"
                        variants={fadeUp}
                        custom={0.26}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportSettings}
                    >
                        <h4 className="footer2__heading">Contact</h4>
                        <ul className="footer2__list footer2__list--contact">
                            <li>
                                <a href="mailto:hello@globster.com" className="footer2__link">
                                    <Mail size={16} strokeWidth={1.8} />
                                    <span>hello@globster.com</span>
                                </a>
                            </li>
                            <li>
                                <a href="tel:+10000000000" className="footer2__link">
                                    <Phone size={16} strokeWidth={1.8} />
                                    <span>+1 (000) 000-0000</span>
                                </a>
                            </li>
                            <li>
                                <span className="footer2__link footer2__link--static">
                                    <MapPin size={16} strokeWidth={1.8} />
                                    <span>Remote &amp; Global</span>
                                </span>
                            </li>
                        </ul>

                        <a href="/contact" className="footer2__cta">
                            Start a project
                            <ArrowUpRight size={16} strokeWidth={2} />
                        </a>
                    </motion.div>
                </div>

                <div className="footer2__divider" />

                <div className="footer2__bottom">
                    <p className="footer2__copyright">
                        © {year} Globster. All rights reserved.
                    </p>
                    <p className="footer2__credit">
                        Designed & Developed by{" "}
                        <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer2__credit-link"
                        >
                            Techorses
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer2;