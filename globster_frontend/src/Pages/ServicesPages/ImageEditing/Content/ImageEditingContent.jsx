import React from "react";
import { motion } from "framer-motion";
import {
  TrendingUp,
  ShoppingBag,
  BookOpen,
  Wand2,
  Palette,
  Scissors,
  Sparkles,
  ShoppingCart,
  Users,
  Eye,
  Zap,
  Wallet,
  HeartHandshake,
} from "lucide-react";
import "./ImageEditingContent.scss";

// NOTE: Replace this with your final production photography.
const SECTION_IMAGE = "https://picsum.photos/seed/svc-imagevideo/1000/1200";

const WHY_MATTERS = [
  {
    icon: TrendingUp,
    title: "Boost Brand Image",
    description:
      "Polished, consistent visuals build credibility and make your brand look established.",
  },
  {
    icon: ShoppingBag,
    title: "Increase Sales",
    description:
      "Sharper product images translate directly into higher conversion rates online.",
  },
  {
    icon: BookOpen,
    title: "Tell A Story",
    description:
      "A well-edited photo carries emotion and message far better than a raw one ever could.",
  },
];

const OUR_SERVICES = [
  {
    icon: Wand2,
    title: "Photo Retouching",
    description:
      "We clean up imperfections and distractions so your subject always looks its best.",
  },
  {
    icon: Palette,
    title: "Color Correction",
    description:
      "Balanced tones, contrast, and brightness for images that feel vibrant and true to life.",
  },
  {
    icon: Scissors,
    title: "Background Removal",
    description:
      "Isolate subjects or swap in a new background for a cleaner, more impactful shot.",
  },
  {
    icon: Sparkles,
    title: "Image Manipulation",
    description:
      "Add or remove elements, blend images, or build out a fully custom visual effect.",
  },
  {
    icon: ShoppingCart,
    title: "Product Image Editing",
    description:
      "Listing-ready product shots built to pop on marketplaces and marketing pages alike.",
  },
];

const WHY_US = [
  {
    icon: Users,
    title: "Experienced Editors",
    description:
      "A team with years of hands-on image enhancement and retouching work behind them.",
  },
  {
    icon: Eye,
    title: "Attention To Detail",
    description:
      "Every image gets reviewed pixel by pixel before it reaches you.",
  },
  {
    icon: Zap,
    title: "Quick Turnaround",
    description:
      "An efficient workflow that keeps your deadlines firmly on track.",
  },
  {
    icon: Wallet,
    title: "Affordable Pricing",
    description:
      "High-quality editing priced within reach for businesses of every size.",
  },
  {
    icon: HeartHandshake,
    title: "Client Satisfaction",
    description:
      "We stay closely involved until the final images match your vision.",
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

const ImageEditingContent = () => {
  return (
    <section className="image-editing-content">
      <div className="image-editing-content__inner">
        {/* Intro — centered */}
        <motion.div
          className="image-editing-content__intro"
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          variants={fadeUp}
        >
          <span className="image-editing-content__eyebrow">
            Digital Image Editing
          </span>
          <h2 className="image-editing-content__intro-heading">
            Photos That Do More Than Just Look Good
          </h2>
          <p className="image-editing-content__intro-lead">
            Transform your photos into standout visuals with Globster's
            professional Digital Image Editing services. We enhance and
            retouch images so they tell a compelling story, every time.
          </p>
        </motion.div>

        {/* Why It Matters — image + points */}
        <div className="image-editing-content__what">
          <motion.div
            className="image-editing-content__what-image"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportSettings}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <img src={SECTION_IMAGE} alt="Edited product photography sample" />
          </motion.div>

          <div className="image-editing-content__what-text">
            <motion.div
              className="image-editing-content__block-header image-editing-content__block-header--left"
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              variants={fadeUp}
            >
              <h3 className="image-editing-content__block-heading">
                Why Digital Image Editing Matters
              </h3>
              <p className="image-editing-content__block-lead">
                In a visual-first world, the quality of your images shapes
                how your brand is perceived. Well-edited photos can:
              </p>
            </motion.div>

            <div className="image-editing-content__use-list">
              {WHY_MATTERS.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    className="image-editing-content__use-item"
                    key={item.title}
                    custom={i * 0.1}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportSettings}
                    variants={fadeUp}
                  >
                    <span className="image-editing-content__use-icon">
                      <Icon size={20} strokeWidth={1.8} />
                    </span>
                    <div>
                      <h4 className="image-editing-content__use-title">
                        {item.title}
                      </h4>
                      <p className="image-editing-content__use-description">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Our Services - staggered 5-card layout */}
        <div className="image-editing-content__block">
          <motion.div
            className="image-editing-content__block-header image-editing-content__block-header--center"
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            variants={fadeUp}
          >
            <h3 className="image-editing-content__block-heading">
              Our Digital Image Editing Services
            </h3>
            <p className="image-editing-content__block-lead">
              A complete editing toolkit, tailored to exactly what your
              images need.
            </p>
          </motion.div>

          <div className="image-editing-content__grid image-editing-content__grid--count-5">
            {OUR_SERVICES.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  className="image-editing-content__card"
                  key={item.title}
                  custom={i * 0.1}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportSettings}
                  variants={fadeUp}
                >
                  <span className="image-editing-content__card-icon">
                    <Icon size={26} strokeWidth={1.7} />
                  </span>
                  <h4 className="image-editing-content__card-title">
                    {item.title}
                  </h4>
                  <p className="image-editing-content__card-description">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="image-editing-content__why">
          <motion.div
            className="image-editing-content__block-header image-editing-content__block-header--center"
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            variants={fadeUp}
          >
            <h3 className="image-editing-content__block-heading">
              Why Choose Us?
            </h3>
            <p className="image-editing-content__block-lead image-editing-content__block-lead--cursive">
              Because every image deserves a second look.
            </p>
          </motion.div>

          <div className="image-editing-content__why-grid">
            {WHY_US.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  className="image-editing-content__why-item"
                  key={item.title}
                  custom={i * 0.1}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportSettings}
                  variants={fadeUp}
                >
                  <span className="image-editing-content__why-icon">
                    <Icon size={22} strokeWidth={1.8} />
                  </span>
                  <div>
                    <h4 className="image-editing-content__why-title">
                      {item.title}
                    </h4>
                    <p className="image-editing-content__why-description">
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
          className="image-editing-content__cta"
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          variants={fadeUp}
        >
          <p className="image-editing-content__cta-text">
            Elevate your visual content, impress your audience, and stand
            out from the competition with our Digital Image Editing
            services.
          </p>
          <a href="#contact" className="image-editing-content__cta-button">
            Discuss Your Project
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ImageEditingContent;