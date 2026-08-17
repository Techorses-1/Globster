import React from "react";
import { motion } from "framer-motion";
import {
  Shirt,
  Gift,
  PartyPopper,
  ScanLine,
  PenTool,
  FileStack,
  BadgeCheck,
  Zap,
  Wallet,
  HeartHandshake,
} from "lucide-react";
import "./EmbroideryContent.scss";

// NOTE: Replace this with your final production photography.
const SECTION_IMAGE = "https://picsum.photos/seed/svc-embroidery/1000/1200";

const USE_CASES = [
  {
    icon: Shirt,
    title: "Corporate Apparel",
    description:
      "Give uniforms, caps, and company wear a professional finish with a clean embroidered logo.",
  },
  {
    icon: Gift,
    title: "Personalized Gifts",
    description:
      "Turn towels, blankets, and bags into thoughtful, one-of-a-kind gifts with custom stitching.",
  },
  {
    icon: PartyPopper,
    title: "Event Merchandise",
    description:
      "Make your next event memorable with embroidered merchandise guests actually keep.",
  },
];

const OUR_SERVICES = [
  {
    icon: ScanLine,
    title: "Logo Digitizing",
    description:
      "We convert your company logos and emblems into machine-ready stitch files with precision and clarity.",
  },
  {
    icon: PenTool,
    title: "Custom Embroidery Designs",
    description:
      "No existing artwork? Our digitizers build custom embroidery designs from the ground up.",
  },
  {
    icon: FileStack,
    title: "Every File Format",
    description:
      "DST, PES, and more — delivered in a format that works with your embroidery machine.",
  },
];

const WHY_US = [
  {
    icon: BadgeCheck,
    title: "Quality Craftsmanship",
    description:
      "Close attention to every stitch so your design translates accurately to fabric.",
  },
  {
    icon: Zap,
    title: "Quick Turnaround",
    description:
      "An efficient digitizing process that keeps your deadlines on track.",
  },
  {
    icon: Wallet,
    title: "Competitive Pricing",
    description:
      "Professional digitizing priced within reach for businesses and individuals alike.",
  },
  {
    icon: HeartHandshake,
    title: "Customer Satisfaction",
    description:
      "We stay hands-on with you until the final embroidery meets the mark.",
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

const EmbroideryContent = () => {
  return (
    <section className="embroidery-content">
      <div className="embroidery-content__inner">
        {/* Intro — centered */}
        <motion.div
          className="embroidery-content__intro"
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          variants={fadeUp}
        >
          <span className="embroidery-content__eyebrow">
            Embroidery Digitizing
          </span>
          <h2 className="embroidery-content__intro-heading">
            Branding That Goes Beyond The Screen
          </h2>
          <p className="embroidery-content__intro-lead">
            Elevate your branding and personalization with Globster's
            Custom Embroidery Digitizing services. We turn your logos,
            designs, and artwork into stitched, wearable creations.
          </p>
        </motion.div>

        {/* What is Embroidery Digitizing — image + use cases */}
        <div className="embroidery-content__what">
          <motion.div
            className="embroidery-content__what-image"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportSettings}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <img src={SECTION_IMAGE} alt="Embroidered fabric sample" />
          </motion.div>

          <div className="embroidery-content__what-text">
            <motion.div
              className="embroidery-content__block-header embroidery-content__block-header--left"
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              variants={fadeUp}
            >
              <h3 className="embroidery-content__block-heading">
                What Is Embroidery Digitizing?
              </h3>
              <p className="embroidery-content__block-lead">
                It's the process of converting a digital design into a
                format embroidery machines can stitch — precise, intricate,
                and built to last on fabric. It's widely used for:
              </p>
            </motion.div>

            <div className="embroidery-content__use-list">
              {USE_CASES.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    className="embroidery-content__use-item"
                    key={item.title}
                    custom={i * 0.1}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportSettings}
                    variants={fadeUp}
                  >
                    <span className="embroidery-content__use-icon">
                      <Icon size={20} strokeWidth={1.8} />
                    </span>
                    <div>
                      <h4 className="embroidery-content__use-title">
                        {item.title}
                      </h4>
                      <p className="embroidery-content__use-description">
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
        <div className="embroidery-content__block">
          <motion.div
            className="embroidery-content__block-header embroidery-content__block-header--center"
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            variants={fadeUp}
          >
            <h3 className="embroidery-content__block-heading">
              Our Embroidery Digitizing Services
            </h3>
            <p className="embroidery-content__block-lead">
              A complete range of digitizing services, tailored to your
              exact fabric and format needs.
            </p>
          </motion.div>

          <div className="embroidery-content__grid">
            {OUR_SERVICES.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  className="embroidery-content__card"
                  key={item.title}
                  custom={i * 0.12}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportSettings}
                  variants={fadeUp}
                >
                  <span className="embroidery-content__card-icon">
                    <Icon size={26} strokeWidth={1.7} />
                  </span>
                  <h4 className="embroidery-content__card-title">
                    {item.title}
                  </h4>
                  <p className="embroidery-content__card-description">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="embroidery-content__why">
          <motion.div
            className="embroidery-content__block-header embroidery-content__block-header--center"
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            variants={fadeUp}
          >
            <h3 className="embroidery-content__block-heading">
              Why Choose Us?
            </h3>
            <p className="embroidery-content__block-lead embroidery-content__block-lead--cursive">
              Because every stitch should look intentional.
            </p>
          </motion.div>

          <div className="embroidery-content__why-grid">
            {WHY_US.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  className="embroidery-content__why-item"
                  key={item.title}
                  custom={i * 0.1}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportSettings}
                  variants={fadeUp}
                >
                  <span className="embroidery-content__why-icon">
                    <Icon size={22} strokeWidth={1.8} />
                  </span>
                  <div>
                    <h4 className="embroidery-content__why-title">
                      {item.title}
                    </h4>
                    <p className="embroidery-content__why-description">
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
          className="embroidery-content__cta"
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          variants={fadeUp}
        >
          <p className="embroidery-content__cta-text">
            Enhance your branding, create unique gifts, and make your
            events memorable with our Custom Embroidery Digitizing
            services.
          </p>
          <a href="#contact" className="embroidery-content__cta-button">
            Discuss Your Project
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default EmbroideryContent;