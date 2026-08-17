import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { User, Mail, Phone, Building2, MessageSquare } from "lucide-react";
import {
  SERVICE_OPTIONS,
  orderFormInitialValues,
  orderFormValidationSchema,
  submitOrderForm,
} from "./Orderformschema.js";
import "./MakeAnOrderSplit.scss";

const viewportSettings = { once: true, amount: 0.25 };

const STATS = [
  { value: "150+", label: "Projects Delivered" },
  { value: "24h", label: "Avg. Response Time" },
  { value: "98%", label: "Client Satisfaction" },
];

const MakeAnOrderSplit = () => {
  const handleSubmit = async (values, { resetForm, setSubmitting }) => {
    try {
      await submitOrderForm(values);
      toast.success("Thanks! Your project request has been sent.");
      resetForm();
    } catch (err) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="mao-split" id="contact">
      <div className="mao-split__inner">
        <div className="mao-split__grid">
          {/* ---- Left: text side ---- */}
          <motion.div
            className="mao-split__text"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportSettings}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="mao-split__eyebrow">Make An Order</span>
            <h2 className="mao-split__heading">
              Let&apos;s Build Something{" "}
              <span className="mao-split__cursive">Great</span> Together
            </h2>
            <p className="mao-split__paragraph">
              Tell us a bit about your project and the service you need -
              we&apos;ll get back to you within one business day with next
              steps.
            </p>

            <div className="mao-split__stats">
              {STATS.map((stat) => (
                <div className="mao-split__stat" key={stat.label}>
                  <span className="mao-split__stat-value">{stat.value}</span>
                  <span className="mao-split__stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ---- Right: floating form card ---- */}
          <motion.div
            className="mao-split__card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportSettings}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          >
            <Formik
              initialValues={orderFormInitialValues}
              validationSchema={orderFormValidationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form className="mao-split__form" noValidate>
                  <div className="mao-split__row">
                    <div className="mao-split__field">
                      <label htmlFor="fullName">Full Name *</label>
                      <div className="mao-split__input-wrap">
                        <User size={17} strokeWidth={1.8} />
                        <Field
                          id="fullName"
                          name="fullName"
                          type="text"
                          placeholder="John Doe"
                        />
                      </div>
                      <ErrorMessage
                        name="fullName"
                        component="span"
                        className="mao-split__error"
                      />
                    </div>

                    <div className="mao-split__field">
                      <label htmlFor="email">Email *</label>
                      <div className="mao-split__input-wrap">
                        <Mail size={17} strokeWidth={1.8} />
                        <Field
                          id="email"
                          name="email"
                          type="email"
                          placeholder="john@company.com"
                        />
                      </div>
                      <ErrorMessage
                        name="email"
                        component="span"
                        className="mao-split__error"
                      />
                    </div>
                  </div>

                  <div className="mao-split__row">
                    <div className="mao-split__field">
                      <label htmlFor="phone">Phone *</label>
                      <div className="mao-split__input-wrap">
                        <Phone size={17} strokeWidth={1.8} />
                        <Field
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="+1 (000) 000-0000"
                        />
                      </div>
                      <ErrorMessage
                        name="phone"
                        component="span"
                        className="mao-split__error"
                      />
                    </div>

                    <div className="mao-split__field">
                      <label htmlFor="companyName">Company Name *</label>
                      <div className="mao-split__input-wrap">
                        <Building2 size={17} strokeWidth={1.8} />
                        <Field
                          id="companyName"
                          name="companyName"
                          type="text"
                          placeholder="Your Company"
                        />
                      </div>
                      <ErrorMessage
                        name="companyName"
                        component="span"
                        className="mao-split__error"
                      />
                    </div>
                  </div>

                  <div className="mao-split__field">
                    <label htmlFor="service">Select Service *</label>
                    <div className="mao-split__input-wrap">
                      <Field as="select" id="service" name="service">
                        {SERVICE_OPTIONS.map((opt) => (
                          <option key={opt.value} value={opt.value}>
                            {opt.label}
                          </option>
                        ))}
                      </Field>
                    </div>
                    <ErrorMessage
                      name="service"
                      component="span"
                      className="mao-split__error"
                    />
                  </div>

                  <div className="mao-split__field">
                    <label htmlFor="message">Message *</label>
                    <div className="mao-split__input-wrap mao-split__input-wrap--textarea">
                      <MessageSquare size={17} strokeWidth={1.8} />
                      <Field
                        as="textarea"
                        id="message"
                        name="message"
                        rows={4}
                        placeholder="Tell us about your project..."
                      />
                    </div>
                    <ErrorMessage
                      name="message"
                      component="span"
                      className="mao-split__error"
                    />
                  </div>

                  <div className="mao-split__checkbox-field">
                    <label className="mao-split__checkbox">
                      <Field type="checkbox" name="acceptTerms" />
                      <span>
                        I accept the{" "}
                        <a href="#privacy-policy">Privacy Policy</a> and{" "}
                        <a href="#terms">Terms &amp; Conditions</a> *
                      </span>
                    </label>
                    <ErrorMessage
                      name="acceptTerms"
                      component="span"
                      className="mao-split__error"
                    />
                  </div>

                  <button
                    type="submit"
                    className="mao-split__submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Submit Request"}
                  </button>
                </Form>
              )}
            </Formik>
          </motion.div>
        </div>
      </div>

      <ToastContainer position="top-right" autoClose={4000} />
    </section>
  );
};

export default MakeAnOrderSplit;