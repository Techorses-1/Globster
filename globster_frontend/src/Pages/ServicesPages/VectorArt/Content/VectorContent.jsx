import React from "react";
import { motion } from "framer-motion";
import {
  Layers,
  Printer,
  Shirt,
  Wand2,
  PenTool,
  FileStack,
  BadgeCheck,
  Zap,
  Wallet,
  HeartHandshake,
} from "lucide-react";
import "./VectorContent.scss";

// NOTE: Replace this with your final production photography.
const SECTION_IMAGE = "https://picsum.photos/seed/svc-vector/1000/1200";

const USE_CASES = [
  {
    icon: Layers,
    title: "Logo Design",
    description:
      "Sharp, resizable logos that stay crisp on a favicon or a storefront sign.",
  },
  {
    icon: Printer,
    title: "Print Materials",
    description:
      "Brochures, flyers, and banners that print clean at any size, every time.",
  },
  {
    icon: Shirt,
    title: "Merchandise",
    description:
      "Apparel and promotional prints with zero pixelation, no matter the scale.",
  },
];

const OUR_SERVICES = [
  {
    icon: Wand2,
    title: "Vectorization",
    description:
      "We convert your raster files — JPEG, PNG, and beyond — into clean, scalable vector art ready for any application.",
  },
  {
    icon: PenTool,
    title: "Custom Vector Design",
    description:
      "Need something from scratch? Our designers build custom logos, illustrations, and graphics with precision and care.",
  },
  {
    icon: FileStack,
    title: "Every File Format",
    description:
      "SVG, AI, EPS, PDF — delivered in whatever format your design or print workflow needs.",
  },
];

const WHY_US = [
  {
    icon: BadgeCheck,
    title: "Quality Assurance",
    description:
      "Every line and curve is checked with an obsessive eye for detail.",
  },
  {
    icon: Zap,
    title: "Quick Turnaround",
    description:
      "We build our workflow around your deadlines, not the other way round.",
  },
  {
    icon: Wallet,
    title: "Affordable Pricing",
    description:
      "Professional-grade vector art priced for businesses of every size.",
  },
  {
    icon: HeartHandshake,
    title: "Client Satisfaction",
    description:
      "We work alongside you until the final art exceeds what you pictured.",
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

const VectorContent = () => {
  return (
    <section className="vector-content">
      <div className="vector-content__inner">
        {/* Intro — centered */}
        <motion.div
          className="vector-content__intro"
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          variants={fadeUp}
        >
          <span className="vector-content__eyebrow">Vector Artwork</span>
          <h2 className="vector-content__intro-heading">
            Precision-Crafted Graphics, Built To Scale
          </h2>
          <p className="vector-content__intro-lead">
            Transform your artwork into clean, scalable, print-ready
            masterpieces. At Globster, we turn your creative ideas into
            versatile vector graphics that hold up at any size.
          </p>
        </motion.div>

        {/* What is Vector Artwork — image + use cases */}
        <div className="vector-content__what">
          <motion.div
            className="vector-content__what-image"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportSettings}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <img src={SECTION_IMAGE} alt="Vector artwork sample" />
          </motion.div>

          <div className="vector-content__what-text">
            <motion.div
              className="vector-content__block-header vector-content__block-header--left"
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              variants={fadeUp}
            >
              <h3 className="vector-content__block-heading">
                What Is Vector Artwork?
              </h3>
              <p className="vector-content__block-lead">
                Vector art is built from mathematical equations rather than
                pixels, so it can scale to any size without ever losing
                quality. That makes it the go-to format for:
              </p>
            </motion.div>

            <div className="vector-content__use-list">
              {USE_CASES.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    className="vector-content__use-item"
                    key={item.title}
                    custom={i * 0.1}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportSettings}
                    variants={fadeUp}
                  >
                    <span className="vector-content__use-icon">
                      <Icon size={20} strokeWidth={1.8} />
                    </span>
                    <div>
                      <h4 className="vector-content__use-title">
                        {item.title}
                      </h4>
                      <p className="vector-content__use-description">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Our Services */}
        <div className="vector-content__block">
          <motion.div
            className="vector-content__block-header vector-content__block-header--center"
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            variants={fadeUp}
          >
            <h3 className="vector-content__block-heading">
              Our Vector Artwork Services
            </h3>
            <p className="vector-content__block-lead">
              A complete range of vector services, tailored to what your
              business actually needs.
            </p>
          </motion.div>

          <div className="vector-content__grid">
            {OUR_SERVICES.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  className="vector-content__card"
                  key={item.title}
                  custom={i * 0.12}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportSettings}
                  variants={fadeUp}
                >
                  <span className="vector-content__card-icon">
                    <Icon size={26} strokeWidth={1.7} />
                  </span>
                  <h4 className="vector-content__card-title">{item.title}</h4>
                  <p className="vector-content__card-description">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="vector-content__why">
          <motion.div
            className="vector-content__block-header vector-content__block-header--center"
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            variants={fadeUp}
          >
            <h3 className="vector-content__block-heading">Why Choose Us?</h3>
            <p className="vector-content__block-lead vector-content__block-lead--cursive">
              Because your artwork deserves more than a rushed export.
            </p>
          </motion.div>

          <div className="vector-content__why-grid">
            {WHY_US.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  className="vector-content__why-item"
                  key={item.title}
                  custom={i * 0.1}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportSettings}
                  variants={fadeUp}
                >
                  <span className="vector-content__why-icon">
                    <Icon size={22} strokeWidth={1.8} />
                  </span>
                  <div>
                    <h4 className="vector-content__why-title">
                      {item.title}
                    </h4>
                    <p className="vector-content__why-description">
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
          className="vector-content__cta"
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          variants={fadeUp}
        >
          <p className="vector-content__cta-text">
            Sharpen your branding, print with confidence, and get artwork
            that scales as far as your business does.
          </p>
          <a href="#contact" className="vector-content__cta-button">
            Discuss Your Project
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default VectorContent;