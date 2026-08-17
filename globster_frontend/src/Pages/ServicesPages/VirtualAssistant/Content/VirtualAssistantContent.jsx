import React from "react";
import { motion } from "framer-motion";
import {
  Calculator,
  ClipboardList,
  Headset,
  Share2,
  Globe2,
  Award,
  Wallet,
  Layers,
  ShieldCheck,
  Boxes,
} from "lucide-react";
import "./VirtualAssistantContent.scss";

// NOTE: Replace this with your final production photography.
const SECTION_IMAGE = "https://picsum.photos/seed/svc-va/1000/1200";

// 5 services — staggered layout (3 on top, 2 offset below)
const OUR_SERVICES = [
  {
    icon: Calculator,
    title: "Virtual Accounting & Bookkeeping",
    description:
      "Data entry, payroll processing, financial reporting, and tax preparation — accurately and securely.",
  },
  {
    icon: ClipboardList,
    title: "Virtual Administrative Support",
    description:
      "Scheduling, email management, data entry, and travel arrangements — so you can focus on strategy.",
  },
  {
    icon: Headset,
    title: "Virtual Customer Support",
    description:
      "Live chat, email, and phone-based service — your customers heard, helped, and happy.",
  },
  {
    icon: Share2,
    title: "Virtual Social Media Management",
    description:
      "Content, scheduling, engagement, and performance tracking across Instagram, LinkedIn, Facebook, and X.",
  },
  {
    icon: Globe2,
    title: "Virtual Website Development",
    description:
      "New builds, redesigns, or ongoing updates — user-friendly, responsive, and optimized for SEO.",
  },
];

const WHY_US = [
  {
    icon: Award,
    title: "Experienced Professionals",
    description:
      "We hire skilled virtual assistants with relevant experience and train them to understand your business.",
  },
  {
    icon: Wallet,
    title: "Cost-Effective Solutions",
    description:
      "Save on office space, equipment, and full-time salaries while accessing premium support.",
  },
  {
    icon: Layers,
    title: "Scalable Support",
    description:
      "Whether you need 10 hours a week or full-time coverage, we adjust to meet your demand.",
  },
  {
    icon: ShieldCheck,
    title: "Security First",
    description:
      "Your data is protected by strict confidentiality and compliance protocols.",
  },
  {
    icon: Boxes,
    title: "One-Stop Shop",
    description:
      "No need to juggle vendors — we offer a full suite of services under one roof.",
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

const VirtualAssistantContent = () => {
  return (
    <section className="va-content">
      <div className="va-content__inner">
        {/* Intro — centered */}
        <motion.div
          className="va-content__intro"
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          variants={fadeUp}
        >
          <span className="va-content__eyebrow">Virtual Assistant</span>
          <h2 className="va-content__intro-heading">
            Your Strategic Partner For Virtual Support
          </h2>
          <p className="va-content__intro-lead">
            In today&apos;s fast-paced digital landscape, businesses of
            all sizes are constantly seeking smarter, leaner, and more
            flexible ways to operate. That&apos;s where Globster comes
            in — we don&apos;t just offer support, we provide strategic
            partnerships that adapt to your evolving business needs, with
            trained professionals who integrate seamlessly with your
            team.
          </p>
        </motion.div>

        {/* What We Offer — image + intro text (no bullet list here; the
            5 specific services are detailed in the grid below) */}
        <div className="va-content__what">
          <motion.div
            className="va-content__what-image"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportSettings}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <img src={SECTION_IMAGE} alt="Virtual assistant at work" />
          </motion.div>

          <div className="va-content__what-text">
            <motion.div
              className="va-content__block-header va-content__block-header--left"
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              variants={fadeUp}
            >
              <h3 className="va-content__block-heading">What We Offer</h3>
              <p className="va-content__block-lead">
                From bookkeeping to customer engagement, our virtual
                assistants are trained professionals ready to support
                exactly where your business needs it most — five core
                services, all under one roof.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Our Services — 5 cards, staggered layout */}
        <div className="va-content__block">
          <div className="va-content__grid va-content__grid--count-5">
            {OUR_SERVICES.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  className="va-content__card"
                  key={item.title}
                  custom={i * 0.1}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportSettings}
                  variants={fadeUp}
                >
                  <span className="va-content__card-icon">
                    <Icon size={26} strokeWidth={1.7} />
                  </span>
                  <h4 className="va-content__card-title">{item.title}</h4>
                  <p className="va-content__card-description">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          <motion.p
            className="va-content__more-note"
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            variants={fadeUp}
          >
            ...and much more — from eCommerce support to real estate
            virtual assistance, HR and recruitment coordination, or
            document management. We scale our services to match your
            ambition.
          </motion.p>
        </div>

        {/* Why Choose Us — fixed 2-column grid */}
        <div className="va-content__why">
          <motion.div
            className="va-content__block-header va-content__block-header--center"
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            variants={fadeUp}
          >
            <h3 className="va-content__block-heading">Why Choose Us?</h3>
            <p className="va-content__block-lead va-content__block-lead--cursive">
              Because your time is worth more than admin work.
            </p>
          </motion.div>

          <div className="va-content__why-grid">
            {WHY_US.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  className="va-content__why-item"
                  key={item.title}
                  custom={i * 0.1}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportSettings}
                  variants={fadeUp}
                >
                  <span className="va-content__why-icon">
                    <Icon size={22} strokeWidth={1.8} />
                  </span>
                  <div>
                    <h4 className="va-content__why-title">{item.title}</h4>
                    <p className="va-content__why-description">
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
          className="va-content__cta"
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          variants={fadeUp}
        >
          <p className="va-content__cta-text">
            Ready to simplify your workload and accelerate your growth?
            Whether you&apos;re a startup founder, a small business
            owner, or a growing enterprise, our virtual assistants are
            here to support you — virtually everywhere.
          </p>
          <a href="#contact" className="va-content__cta-button">
            Get Started Today
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default VirtualAssistantContent;