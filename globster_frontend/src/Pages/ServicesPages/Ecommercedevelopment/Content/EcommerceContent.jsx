import React from "react";
import { motion } from "framer-motion";
import {
  Eye,
  Target,
  Workflow,
  Globe2,
  Code2,
  FileText,
  ShoppingCart,
  Award,
  Sliders,
  Smartphone,
  Clock,
  Wallet,
} from "lucide-react";
import "./EcommerceContent.scss";

// NOTE: Replace this with your final production photography.
const SECTION_IMAGE = "https://picsum.photos/seed/svc-ecommerce/1000/1200";

const WHY_MATTERS = [
  {
    icon: Eye,
    title: "Enhance Brand Visibility",
    description:
      "A unique and user-friendly website design sets you apart from competitors.",
  },
  {
    icon: Target,
    title: "Drive Conversions",
    description:
      "A well-optimized website can convert visitors into customers and leads.",
  },
  {
    icon: Workflow,
    title: "Streamline Business Operations",
    description:
      "Custom web applications can automate processes and improve efficiency.",
  },
];

// 4 services — staggered layout (3 on top, 4th centered below)
const OUR_SERVICES = [
  {
    icon: Globe2,
    title: "Website Development",
    description:
      "From informative websites to e-commerce platforms, built to reflect your brand and meet your goals.",
  },
  {
    icon: Code2,
    title: "Web Application Development",
    description:
      "Custom web applications that streamline your business operations and drive growth.",
  },
  {
    icon: FileText,
    title: "Content Management Systems",
    description:
      "User-friendly CMS solutions, empowering you to manage and update your website effortlessly.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Development",
    description:
      "E-commerce solutions tailored to your business, providing a seamless online shopping experience.",
  },
];

const WHY_US = [
  {
    icon: Award,
    title: "Expertise",
    description:
      "Our team of skilled developers and designers has a wealth of experience in creating effective web solutions.",
  },
  {
    icon: Sliders,
    title: "Customization",
    description:
      "We tailor every aspect of your web development project to match your unique branding and requirements.",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description:
      "All our websites and web applications are fully responsive, ensuring a great experience across all devices.",
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description:
      "Our efficient development process ensures your project is delivered on time, every time.",
  },
  {
    icon: Wallet,
    title: "Affordable Pricing",
    description:
      "Competitive pricing that makes high-quality web development accessible to businesses of all sizes.",
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

const EcommerceContent = () => {
  return (
    <section className="ecommerce-content">
      <div className="ecommerce-content__inner">
        {/* Intro — centered */}
        <motion.div
          className="ecommerce-content__intro"
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          variants={fadeUp}
        >
          <span className="ecommerce-content__eyebrow">
            E-commerce Development
          </span>
          <h2 className="ecommerce-content__intro-heading">
            Web Solutions Built To Convert
          </h2>
          <p className="ecommerce-content__intro-lead">
            Unlock the full potential of the web with our Custom Web
            Development services. At Globster, we specialize in creating
            innovative, tailored web solutions that empower your online
            presence.
          </p>
        </motion.div>

        {/* Why It Matters — image + points */}
        <div className="ecommerce-content__what">
          <motion.div
            className="ecommerce-content__what-image"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportSettings}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <img src={SECTION_IMAGE} alt="E-commerce storefront sample" />
          </motion.div>

          <div className="ecommerce-content__what-text">
            <motion.div
              className="ecommerce-content__block-header ecommerce-content__block-header--left"
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              variants={fadeUp}
            >
              <h3 className="ecommerce-content__block-heading">
                Why Custom Web Development Matters
              </h3>
              <p className="ecommerce-content__block-lead">
                In today&apos;s digital age, your website is often the
                first point of contact between your business and
                potential customers. A well-crafted website can:
              </p>
            </motion.div>

            <div className="ecommerce-content__use-list">
              {WHY_MATTERS.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    className="ecommerce-content__use-item"
                    key={item.title}
                    custom={i * 0.1}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportSettings}
                    variants={fadeUp}
                  >
                    <span className="ecommerce-content__use-icon">
                      <Icon size={20} strokeWidth={1.8} />
                    </span>
                    <div>
                      <h4 className="ecommerce-content__use-title">
                        {item.title}
                      </h4>
                      <p className="ecommerce-content__use-description">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Our Services — 4 cards, staggered layout */}
        <div className="ecommerce-content__block">
          <motion.div
            className="ecommerce-content__block-header ecommerce-content__block-header--center"
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            variants={fadeUp}
          >
            <h3 className="ecommerce-content__block-heading">
              Our Custom Web Development Services
            </h3>
            <p className="ecommerce-content__block-lead">
              A comprehensive range of web development services, tailored
              to your specific needs.
            </p>
          </motion.div>

          <div className="ecommerce-content__grid ecommerce-content__grid--count-4">
            {OUR_SERVICES.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  className="ecommerce-content__card"
                  key={item.title}
                  custom={i * 0.1}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportSettings}
                  variants={fadeUp}
                >
                  <span className="ecommerce-content__card-icon">
                    <Icon size={26} strokeWidth={1.7} />
                  </span>
                  <h4 className="ecommerce-content__card-title">
                    {item.title}
                  </h4>
                  <p className="ecommerce-content__card-description">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Why Choose Us — fixed 2-column grid */}
        <div className="ecommerce-content__why">
          <motion.div
            className="ecommerce-content__block-header ecommerce-content__block-header--center"
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            variants={fadeUp}
          >
            <h3 className="ecommerce-content__block-heading">
              Why Choose Us?
            </h3>
            <p className="ecommerce-content__block-lead ecommerce-content__block-lead--cursive">
              Because your online store deserves more than a template.
            </p>
          </motion.div>

          <div className="ecommerce-content__why-grid">
            {WHY_US.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  className="ecommerce-content__why-item"
                  key={item.title}
                  custom={i * 0.1}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportSettings}
                  variants={fadeUp}
                >
                  <span className="ecommerce-content__why-icon">
                    <Icon size={22} strokeWidth={1.8} />
                  </span>
                  <div>
                    <h4 className="ecommerce-content__why-title">
                      {item.title}
                    </h4>
                    <p className="ecommerce-content__why-description">
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
          className="ecommerce-content__cta"
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          variants={fadeUp}
        >
          <p className="ecommerce-content__cta-text">
            Elevate your online presence, streamline your digital
            operations, and engage your audience with our Custom Web
            Development services.
          </p>
          <a href="#contact" className="ecommerce-content__cta-button">
            Discuss Your Project
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default EcommerceContent;