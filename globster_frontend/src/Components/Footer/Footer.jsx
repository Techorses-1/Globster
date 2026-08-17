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
import "./Footer.scss";
import logo from "../../assets/logo/footer-logo.png";

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

const Footer = () => {
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
        <footer className="footer">
            <div className="footer__inner">
                <div className="footer__top">
                    {/* Brand column */}
                    <motion.div
                        className="footer__brand"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportSettings}
                    >
                        <a href="/" className="footer__logo">
                            <img src={logo} alt="Globster" className="footer__logo-image" />
                        </a>
                        <p className="footer__tagline">
                            A global outsourcing partner built for businesses that want
                            quality work without the overhead of hiring in-house.
                        </p>

                        <div className="footer__socials">
                            {SOCIALS.map(({ label, href, icon: Icon }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="footer__social"
                                    aria-label={label}
                                >
                                    <Icon size={17} strokeWidth={1.8} />
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Quick links column */}
                    <motion.div
                        className="footer__column"
                        variants={fadeUp}
                        custom={0.1}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportSettings}
                    >
                        <h4 className="footer__heading">Quick Links</h4>
                        <ul className="footer__list">
                            {QUICK_LINKS.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className={`footer__link ${isActiveLink(link.href) ? "is-active" : ""}`}
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Services column */}
                    <motion.div
                        className="footer__column"
                        variants={fadeUp}
                        custom={0.18}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportSettings}
                    >
                        <h4 className="footer__heading">Services</h4>
                        <ul className="footer__list">
                            {SERVICE_LINKS.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className={`footer__link ${location.pathname === link.href ? "is-active" : ""}`}
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact column */}
                    <motion.div
                        className="footer__column footer__column--contact"
                        variants={fadeUp}
                        custom={0.26}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportSettings}
                    >
                        <h4 className="footer__heading">Contact</h4>
                        <ul className="footer__list footer__list--contact">
                            <li>
                                <a href="mailto:hello@globster.com" className="footer__link">
                                    <Mail size={16} strokeWidth={1.8} />
                                    <span>hello@globster.com</span>
                                </a>
                            </li>
                            <li>
                                <a href="tel:+10000000000" className="footer__link">
                                    <Phone size={16} strokeWidth={1.8} />
                                    <span>+1 (000) 000-0000</span>
                                </a>
                            </li>
                            <li>
                                <span className="footer__link footer__link--static">
                                    <MapPin size={16} strokeWidth={1.8} />
                                    <span>Remote &amp; Global</span>
                                </span>
                            </li>
                        </ul>

                        <a href="/contact" className="footer__cta">
                            Start a project
                            <ArrowUpRight size={16} strokeWidth={2} />
                        </a>
                    </motion.div>
                </div>

                <div className="footer__divider" />

                <div className="footer__bottom">
                    <p className="footer__copyright">
                        © {year} Globster. All rights reserved.
                    </p>
                    <p className="footer__credit">
                        Designed & Developed by{" "}
                        <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer__credit-link"
                        >
                            Techorses
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;