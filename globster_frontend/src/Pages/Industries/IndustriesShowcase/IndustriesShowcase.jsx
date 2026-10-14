import React from "react";
import { motion } from "framer-motion";
import {
  ShoppingCart,
  Rocket,
  Briefcase,
  Factory,
  Building2,
  Cloud,
  CheckCircle2,
} from "lucide-react";
import "./IndustriesShowcase.scss";

// NOTE: Replace these with your final production photography.
// Placeholders are served from picsum.photos (seeded, so they stay
// consistent) purely so the layout is visible while you wire up real assets.

const INDUSTRIES = [
  {
    icon: ShoppingCart,
    image: "https://picsum.photos/seed/globster-ecommerce/900/700",
    title: "E-commerce & Online Retail",
    oneLiner: "Keep Your Online Store Organized as You Grow",
    description:
      "Managing an online store takes consistent attention to product information, customer enquiries, orders and inventory records.",
    points: [
      "Product listings and catalogue maintenance",
      "Order administration and tracking records",
      "Routine customer enquiries",
    ],
    cta: "Explore E-commerce Support",
    link: "/contact",
  },
  {
    icon: Rocket,
    image: "https://picsum.photos/seed/globster-startups/900/700",
    title: "Startups & Small Businesses",
    oneLiner: "Additional Support Without Adding Unnecessary Complexity",
    description:
      "We help founders and small teams delegate suitable routine tasks so they can focus on customers, delivery and growth.",
    points: [
      "Calendar and inbox management",
      "CRM and spreadsheet updates",
      "Routine follow-ups and task tracking",
    ],
    cta: "Find Business Support",
    link: "/contact",
  },
  {
    icon: Briefcase,
    image: "https://picsum.photos/seed/globster-consultants/900/700",
    title: "Coaches & Consultants",
    oneLiner: "Spend More Time With Clients and Less Time on Administration",
    description:
      "Independent professionals need organized schedules, client records and timely follow-ups.",
    points: [
      "Appointment and calendar coordination",
      "Client database updates",
      "Document and presentation preparation",
    ],
    cta: "Explore Virtual Assistant Services",
    link: "/contact",
  },
  {
    icon: Factory,
    image: "https://picsum.photos/seed/globster-manufacturing/900/700",
    title: "Manufacturing & Distribution",
    oneLiner: "Organized Records for More Efficient Operations",
    description:
      "We help manage product information, supplier records, purchase documentation and recurring operational data.",
    points: [
      "Spreadsheet and database maintenance",
      "Product and catalogue data entry",
      "Record updates and data cleanup",
    ],
    cta: "Discuss Manufacturing Support",
    link: "/contact",
  },
  {
    icon: Building2,
    image: "https://picsum.photos/seed/globster-realestate/900/700",
    title: "Real Estate",
    oneLiner: "Keep Property Information and Administrative Work Organized",
    description:
      "Real estate professionals manage listings, enquiries, appointments and records across multiple properties and clients.",
    points: [
      "Property listing updates",
      "CRM and contact record maintenance",
      "Appointment coordination",
    ],
    cta: "Explore Real Estate Support",
    link: "/contact",
  },
  {
    icon: Cloud,
    image: "https://picsum.photos/seed/globster-saas/900/700",
    title: "SaaS & Technology Companies",
    oneLiner: "Operational Support for Growing Digital Businesses",
    description:
      "We help with customer records, documentation, support workflows and routine administrative work.",
    points: [
      "Customer support administration",
      "CRM and database updates",
      "Documentation and spreadsheet maintenance",
    ],
    cta: "Discuss SaaS Support",
    link: "/contact",
  },
];

const viewportSettings = { once: true, amount: 0.3 };

const IndustriesShowcase = () => {
  return (
    <section className="industries-showcase">
      <div className="industries-showcase__inner">
        <div className="industries-showcase__header">
          <motion.span
            className="industries-showcase__eyebrow"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportSettings}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Industries We Serve
          </motion.span>
          <motion.h2
            className="industries-showcase__heading"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportSettings}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          >
            Virtual Assistance Shaped Around Your Industry
          </motion.h2>
        </div>

        <div className="industries-showcase__rows">
          {INDUSTRIES.map((industry, i) => {
            const Icon = industry.icon;
            const isEven = i % 2 === 1;
            return (
              <div
                className={`industries-showcase__row ${isEven ? "industries-showcase__row--reverse" : ""
                  }`}
                key={industry.title}
              >
                <motion.div
                  className="industries-showcase__image-wrap"
                  initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={viewportSettings}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                >
                  <img
                    src={industry.image}
                    alt={industry.title}
                    loading="lazy"
                  />
                  <span className="industries-showcase__badge">
                    <Icon size={22} strokeWidth={1.8} />
                  </span>
                </motion.div>

                <motion.div
                  className="industries-showcase__content"
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={viewportSettings}
                  transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                >
                  <span className="industries-showcase__number">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="industries-showcase__title">
                    {industry.title}
                  </h3>
                  <span className="industries-showcase__one-liner">
                    {industry.oneLiner}
                  </span>
                  <p className="industries-showcase__description">
                    {industry.description}
                  </p>

                  <ul className="industries-showcase__points">
                    {industry.points.map((point) => (
                      <li className="industries-showcase__point" key={point}>
                        <CheckCircle2 size={18} strokeWidth={2.2} />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <a href={industry.link} className="industries-showcase__link">
                    {industry.cta}
                    <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
                      <path
                        d="M1 6H15M15 6L10 1M15 6L10 11"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IndustriesShowcase;