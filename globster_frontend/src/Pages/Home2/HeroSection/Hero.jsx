import React, { useState, useEffect, useCallback, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./Hero.scss";
import hero from "../../../assets/images/newhero.jpeg"

const SLIDES = [
    {
        id: "virtual-assistant",
        image: hero,
        title: "Virtual Support, Real Results",
        oneLiner: "Your Time Back, Every Day",
        description:
            "Reliable support for admin, inbox, and daily tasks - so you can focus on growth and scale your business effortlessly with expert assistance.",
        link: "/service/virtual-assistant",
    },
    {
        id: "website-development",
         image: hero,
        title: "Websites Crafted Around You",
        oneLiner: "Websites Built Around You",
        description:
            "Custom-coded websites designed to match your brand identity and convert visitors into loyal, long-term customers effectively.",
        link: "/service/website-development",
    },
    {
        id: "ecommerce-development",
         image: hero,
        title: "E-Commerce Stores Built To Convert",
        oneLiner: "Stores Built to Sell",
        description:
            "High-performing online stores designed for a seamless shopping experience and higher conversion rates that drive revenue growth.",
        link: "/service/ecommerce-development",
    },
    {
        id: "vector-artwork",
         image: hero,
        title: "Vector Artwork, Perfected",
        oneLiner: "Clean, Scalable, Print-Ready",
        description:
            "We turn your designs into crisp vector artwork - perfect for print, branding, merchandise, and digital use across all platforms.",
        link: "/service/vector-art",
    },
    {
        id: "embroidery-digitizing",
         image: hero,
        title: "Embroidery Digitizing, Stitched Right",
        oneLiner: "From Design to Stitch",
        description:
            "Precise, machine-ready embroidery files that bring your designs to life on fabric with exceptional detail and flawless execution.",
        link: "/service/embroidery",
    },
    {
        id: "image-video-editing",
         image: hero,
        title: "Visuals That Demand Attention",
        oneLiner: "Polished Visuals, Every Time",
        description:
            "Professional editing that makes your photos and videos look sharp, compelling, and market-ready for any platform or campaign.",
        link: "/service/image-editing",
    },
    {
        id: "product-mockups",
         image: hero,
        title: "Mockups That Sell The Vision",
        oneLiner: "See Your Product Before It's Made",
        description:
            "Realistic mockups that showcase your products beautifully - before a single unit ships to customers or hits the market.",
        link: "/service/product-mockup",
    },
    {
        id: "data-processing",
         image: hero,
        title: "Data Processing, Done Right",
        oneLiner: "Your Data, Organized & Ready",
        description:
            "Accurate data entry, cleaning, and processing - so you always work with reliable and actionable information for better decision-making.",
        link: "/service/data-processing",
    },
];

const AUTOPLAY_DELAY = 6000;

const contentVariants = {
    enter: { opacity: 0, y: 28 },
    center: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -18 },
};

const imageVariants = {
    enter: { opacity: 0, scale: 1.12 },
    center: { opacity: 1, scale: 1.04 },
    exit: { opacity: 0, scale: 1 },
};

const Hero = () => {
    const [index, setIndex] = useState(0);
    const [isHovering, setIsHovering] = useState(false);
    const timerRef = useRef(null);

    const goTo = useCallback((next) => {
        setIndex((prev) => {
            const total = SLIDES.length;
            return ((next % total) + total) % total;
        });
    }, []);

    const goNext = useCallback(() => goTo(index + 1), [goTo, index]);
    const goPrev = useCallback(() => goTo(index - 1), [goTo, index]);

    useEffect(() => {
        if (isHovering) return undefined;
        timerRef.current = setInterval(() => {
            setIndex((prev) => (prev + 1) % SLIDES.length);
        }, AUTOPLAY_DELAY);
        return () => clearInterval(timerRef.current);
    }, [isHovering, index]);

    const slide = SLIDES[index];

    return (
        <section
            className="hero2"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            <div className="hero2__slides">
                <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                        key={slide.id}
                        className="hero2__slide"
                        initial="enter"
                        animate="center"
                        exit="exit"
                    >
                        <motion.div
                            className="hero2__image"
                            style={{ backgroundImage: `url(${slide.image})` }}
                            variants={imageVariants}
                            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                        />
                        <div className="hero2__overlay" />

                        <div className="hero2__content-wrap">
                            <motion.div
                                className="hero2__content"
                                variants={contentVariants}
                                transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
                            >
                                <span className="hero2__counter">
                                    {String(index + 1).padStart(2, "0")}
                                    <span className="hero2__counter-divider"> / </span>
                                    {String(SLIDES.length).padStart(2, "0")}
                                </span>

                                <h1 className="hero2__title">{slide.title}</h1>
                                <p className="hero2__one-liner">{slide.oneLiner}</p>
                                <p className="hero2__description">{slide.description}</p>

                                <motion.a
                                    href="#contact"
                                    className="hero2__cta"
                                    whileHover={{ y: -3, boxShadow: "0 14px 30px rgba(0,0,0,0.25)" }}
                                    whileTap={{ y: 0 }}
                                    transition={{ duration: 0.25, ease: "easeOut" }}
                                >
                                    Get Started
                                </motion.a>
                            </motion.div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Arrows - grouped bottom-right, orange by default */}
            <div className="hero2__arrows">
                <motion.button
                    type="button"
                    className="hero2__arrow hero2__arrow--prev"
                    onClick={goPrev}
                    aria-label="Previous slide"
                    whileHover={{ scale: 1.08, backgroundColor: "#003185" }}
                    whileTap={{ scale: 0.95 }}
                >
                    <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
                        <path
                            d="M17 7H1M1 7L7 1M1 7L7 13"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </motion.button>

                <motion.button
                    type="button"
                    className="hero2__arrow hero2__arrow--next"
                    onClick={goNext}
                    aria-label="Next slide"
                    whileHover={{ scale: 1.08, backgroundColor: "#003185" }}
                    whileTap={{ scale: 0.95 }}
                >
                    <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
                        <path
                            d="M1 7H17M17 7L11 1M17 7L11 13"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </motion.button>
            </div>

            {/* Dots */}
            <div className="hero2__dots">
                {SLIDES.map((s, i) => (
                    <button
                        key={s.id}
                        type="button"
                        className={`hero2__dot ${i === index ? "is-active" : ""}`}
                        aria-label={`Go to slide ${i + 1}: ${s.title}`}
                        onClick={() => goTo(i)}
                    >
                        <span className="hero2__dot-fill" />
                    </button>
                ))}
            </div>
        </section>
    );
};

export default Hero;