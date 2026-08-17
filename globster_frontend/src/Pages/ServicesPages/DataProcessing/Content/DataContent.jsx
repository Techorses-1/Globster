import React from "react";
import { motion } from "framer-motion";
import {
  BarChart3,
  Zap as ZapIcon,
  Users,
  Keyboard,
  Filter,
  RefreshCcw,
  PieChart,
  ArrowRightLeft,
  Target,
  Lock,
  Zap,
  Wallet,
  HeartHandshake,
} from "lucide-react";
import "./DataContent.scss";

// NOTE: Replace this with your final production photography.
const SECTION_IMAGE = "https://picsum.photos/seed/svc-data/1000/1200";

const WHY_MATTERS = [
  {
    icon: BarChart3,
    title: "Improve Decision-Making",
    description:
      "Processed data surfaces the insights behind confident, strategic decisions.",
  },
  {
    icon: ZapIcon,
    title: "Enhance Productivity",
    description:
      "Automating the grind of data handling saves time and cuts out manual error.",
  },
  {
    icon: Users,
    title: "Boost Customer Engagement",
    description:
      "Clean, well-organized customer data makes personalized outreach actually possible.",
  },
];

// 5 services — staggered layout (3 on top, 2 offset below)
const OUR_SERVICES = [
  {
    icon: Keyboard,
    title: "Data Entry",
    description:
      "Accurate, efficient manual entry across data types, with integrity kept intact.",
  },
  {
    icon: Filter,
    title: "Data Cleaning",
    description:
      "We catch errors, inconsistencies, and duplicates to keep your data reliable.",
  },
  {
    icon: RefreshCcw,
    title: "Data Transformation",
    description:
      "Raw data reshaped into formats that are ready for analysis and reporting.",
  },
  {
    icon: PieChart,
    title: "Data Analysis",
    description:
      "Advanced analytics that pull actionable insight out of what you already have.",
  },
  {
    icon: ArrowRightLeft,
    title: "Data Migration",
    description:
      "Smooth transfer of data between systems, databases, or platforms — no data lost.",
  },
];

const WHY_US = [
  {
    icon: Target,
    title: "Data Accuracy",
    description: "Accuracy and quality come first in every processing job we take on.",
  },
  {
    icon: Lock,
    title: "Data Security",
    description:
      "Your data's confidentiality is handled under strict protection protocols.",
  },
  {
    icon: Zap,
    title: "Quick Turnaround",
    description: "An efficient workflow built to deliver results on time, every time.",
  },
  {
    icon: Wallet,
    title: "Competitive Pricing",
    description: "Cost-effective processing solutions without cutting corners.",
  },
  {
    icon: HeartHandshake,
    title: "Client Collaboration",
    description:
      "We work closely with you to understand exactly what your data needs to do.",
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

const DataContent = () => {
  return (
    <section className="data-content">
      <div className="data-content__inner">
        {/* Intro — centered */}
        <motion.div
          className="data-content__intro"
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          variants={fadeUp}
        >
          <span className="data-content__eyebrow">Data Processing</span>
          <h2 className="data-content__intro-heading">
            Your Data, Organized And Ready To Use
          </h2>
          <p className="data-content__intro-lead">
            Streamline your data management with Globster's comprehensive
            Data Processing solutions. We handle, clean, and transform your
            data so your business always runs on reliable information.
          </p>
        </motion.div>

        {/* Why It Matters — image + points */}
        <div className="data-content__what">
          <motion.div
            className="data-content__what-image"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportSettings}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <img src={SECTION_IMAGE} alt="Data processing dashboard sample" />
          </motion.div>

          <div className="data-content__what-text">
            <motion.div
              className="data-content__block-header data-content__block-header--left"
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              variants={fadeUp}
            >
              <h3 className="data-content__block-heading">
                The Importance Of Data Processing
              </h3>
              <p className="data-content__block-lead">
                Data is the lifeblood of a modern business. Efficient
                processing can:
              </p>
            </motion.div>

            <div className="data-content__use-list">
              {WHY_MATTERS.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    className="data-content__use-item"
                    key={item.title}
                    custom={i * 0.1}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportSettings}
                    variants={fadeUp}
                  >
                    <span className="data-content__use-icon">
                      <Icon size={20} strokeWidth={1.8} />
                    </span>
                    <div>
                      <h4 className="data-content__use-title">
                        {item.title}
                      </h4>
                      <p className="data-content__use-description">
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
        <div className="data-content__block">
          <motion.div
            className="data-content__block-header data-content__block-header--center"
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            variants={fadeUp}
          >
            <h3 className="data-content__block-heading">
              Our Data Processing Services
            </h3>
            <p className="data-content__block-lead">
              A full data pipeline, tailored to exactly where your data
              needs to end up.
            </p>
          </motion.div>

          <div className="data-content__grid data-content__grid--count-5">
            {OUR_SERVICES.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  className="data-content__card"
                  key={item.title}
                  custom={i * 0.1}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportSettings}
                  variants={fadeUp}
                >
                  <span className="data-content__card-icon">
                    <Icon size={26} strokeWidth={1.7} />
                  </span>
                  <h4 className="data-content__card-title">{item.title}</h4>
                  <p className="data-content__card-description">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Why Choose Us — fixed 2-column grid */}
        <div className="data-content__why">
          <motion.div
            className="data-content__block-header data-content__block-header--center"
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            variants={fadeUp}
          >
            <h3 className="data-content__block-heading">Why Choose Us?</h3>
            <p className="data-content__block-lead data-content__block-lead--cursive">
              Because your data deserves to be handled, not just stored.
            </p>
          </motion.div>

          <div className="data-content__why-grid">
            {WHY_US.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  className="data-content__why-item"
                  key={item.title}
                  custom={i * 0.1}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportSettings}
                  variants={fadeUp}
                >
                  <span className="data-content__why-icon">
                    <Icon size={22} strokeWidth={1.8} />
                  </span>
                  <div>
                    <h4 className="data-content__why-title">{item.title}</h4>
                    <p className="data-content__why-description">
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
          className="data-content__cta"
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          variants={fadeUp}
        >
          <p className="data-content__cta-text">
            Optimize your data processes, harness the power of your data,
            and make informed decisions with our Data Processing
            solutions.
          </p>
          <a href="#contact" className="data-content__cta-button">
            Discuss Your Project
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default DataContent;