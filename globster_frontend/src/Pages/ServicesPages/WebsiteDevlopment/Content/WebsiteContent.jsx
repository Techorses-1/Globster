import React from "react";
import { motion } from "framer-motion";
import {
  Zap,
  Smile,
  TrendingUp,
  Code2,
  RefreshCcw,
  ShoppingCart,
  FileText,
  Building2,
  Award,
  Sliders,
  Layers,
  ShieldCheck,
  Wallet,
} from "lucide-react";
import "./WebsiteContent.scss";

// NOTE: Replace this with your final production photography.
const SECTION_IMAGE = "https://picsum.photos/seed/svc-website/1000/1200";

const WHY_MATTERS = [
  {
    icon: Zap,
    title: "Improve Efficiency",
    description:
      "Automate processes, reduce manual tasks, and enhance overall productivity.",
  },
  {
    icon: Smile,
    title: "Enhance Customer Experience",
    description:
      "Provide user-friendly, intuitive interfaces that keep customers engaged.",
  },
  {
    icon: TrendingUp,
    title: "Scale With Your Business",
    description:
      "Tailored web apps can grow and evolve with your company's changing needs.",
  },
];

// 5 services — staggered layout (3 on top, 2 offset below)
const OUR_SERVICES = [
  {
    icon: Code2,
    title: "Custom Web Application Development",
    description:
      "We design and develop web applications from scratch, aligned with your goals and processes.",
  },
  {
    icon: RefreshCcw,
    title: "Web App Modernization",
    description:
      "Upgrade and modernize your existing web applications to improve performance, security, and UX.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Platforms",
    description:
      "Robust e-commerce platforms with secure payment gateways, inventory, and a seamless shopping flow.",
  },
  {
    icon: FileText,
    title: "Content Management Systems",
    description:
      "User-friendly CMS solutions built for easy content management and publishing.",
  },
  {
    icon: Building2,
    title: "Enterprise Portals",
    description:
      "Secure, feature-rich portals for efficient internal and external communication.",
  },
];

const WHY_US = [
  {
    icon: Award,
    title: "Expertise",
    description:
      "Our team of experienced developers has a deep understanding of web technologies and frameworks.",
  },
  {
    icon: Sliders,
    title: "Customization",
    description:
      "We tailor every aspect of your web app to match your unique branding and requirements.",
  },
  {
    icon: Layers,
    title: "Scalability",
    description:
      "Our solutions are designed to scale with your business, accommodating growth and change.",
  },
  {
    icon: ShieldCheck,
    title: "Security",
    description:
      "We prioritize security at every stage of development, keeping your web app safe from threats.",
  },
  {
    icon: Wallet,
    title: "Affordable Pricing",
    description:
      "Competitive, cost-effective web app development for businesses of all sizes.",
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

const WebsiteContent = () => {
  return (
    <section className="website-content">
      <div className="website-content__inner">
        {/* Intro — centered */}
        <motion.div
          className="website-content__intro"
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          variants={fadeUp}
        >
          <span className="website-content__eyebrow">
            Website Development
          </span>
          <h2 className="website-content__intro-heading">
            Web Applications Built To Power Your Business
          </h2>
          <p className="website-content__intro-lead">
            Empower your business with our Custom Web App Development
            services. At Globster, we specialize in creating powerful,
            tailored web applications that meet your unique requirements
            and drive digital transformation.
          </p>
        </motion.div>

        {/* Why It Matters — image + points */}
        <div className="website-content__what">
          <motion.div
            className="website-content__what-image"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportSettings}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <img src={SECTION_IMAGE} alt="Custom web application sample" />
          </motion.div>

          <div className="website-content__what-text">
            <motion.div
              className="website-content__block-header website-content__block-header--left"
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              variants={fadeUp}
            >
              <h3 className="website-content__block-heading">
                Why Web App Development Matters
              </h3>
              <p className="website-content__block-lead">
                In the digital age, web applications are essential for
                businesses looking to streamline operations, engage
                customers, and gain a competitive edge. Custom web
                applications can:
              </p>
            </motion.div>

            <div className="website-content__use-list">
              {WHY_MATTERS.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    className="website-content__use-item"
                    key={item.title}
                    custom={i * 0.1}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportSettings}
                    variants={fadeUp}
                  >
                    <span className="website-content__use-icon">
                      <Icon size={20} strokeWidth={1.8} />
                    </span>
                    <div>
                      <h4 className="website-content__use-title">
                        {item.title}
                      </h4>
                      <p className="website-content__use-description">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Our Services — 5 cards, staggered layout */}
        <div className="website-content__block">
          <motion.div
            className="website-content__block-header website-content__block-header--center"
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            variants={fadeUp}
          >
            <h3 className="website-content__block-heading">
              Our Custom Web App Development Services
            </h3>
            <p className="website-content__block-lead">
              A comprehensive range of web app development services,
              tailored to your specific needs.
            </p>
          </motion.div>

          <div className="website-content__grid website-content__grid--count-5">
            {OUR_SERVICES.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  className="website-content__card"
                  key={item.title}
                  custom={i * 0.1}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportSettings}
                  variants={fadeUp}
                >
                  <span className="website-content__card-icon">
                    <Icon size={26} strokeWidth={1.7} />
                  </span>
                  <h4 className="website-content__card-title">
                    {item.title}
                  </h4>
                  <p className="website-content__card-description">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Why Choose Us — fixed 2-column grid */}
        <div className="website-content__why">
          <motion.div
            className="website-content__block-header website-content__block-header--center"
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            variants={fadeUp}
          >
            <h3 className="website-content__block-heading">
              Why Choose Us?
            </h3>
            <p className="website-content__block-lead website-content__block-lead--cursive">
              Because your web app deserves more than a template.
            </p>
          </motion.div>

          <div className="website-content__why-grid">
            {WHY_US.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  className="website-content__why-item"
                  key={item.title}
                  custom={i * 0.1}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportSettings}
                  variants={fadeUp}
                >
                  <span className="website-content__why-icon">
                    <Icon size={22} strokeWidth={1.8} />
                  </span>
                  <div>
                    <h4 className="website-content__why-title">
                      {item.title}
                    </h4>
                    <p className="website-content__why-description">
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
          className="website-content__cta"
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          variants={fadeUp}
        >
          <p className="website-content__cta-text">
            Empower your business, enhance your online presence, and
            streamline your operations with our Custom Web App Development
            services.
          </p>
          <a href="#contact" className="website-content__cta-button">
            Discuss Your Project
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default WebsiteContent;