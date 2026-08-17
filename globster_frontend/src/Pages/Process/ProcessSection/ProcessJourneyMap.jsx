import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Rocket } from "lucide-react";
import { PROCESS_STEPS } from "./Processstepsdata.js";
import "./ProcessJourneyMap.scss";

const viewportSettings = { once: true, amount: 0.4 };

const ProcessJourneyMap = () => {
  const trackRef = useRef(null);
  const nodeRefs = useRef([]);
  const [thresholds, setThresholds] = useState([]);
  const [activeStates, setActiveStates] = useState([]);
  const [endActive, setEndActive] = useState(false);

  // Progress across the whole track, from the moment it enters the
  // viewport until it fully leaves — drives the line fill, the
  // traveler marker's position, AND (below) the icon active states.
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start end", "end start"],
  });

  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const travelerTop = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const travelerOpacity = useTransform(
    scrollYProgress,
    [0, 0.03, 0.97, 1],
    [0, 1, 1, 0]
  );

  // Measure each node's actual center position as a fraction of the
  // track height. We use getBoundingClientRect (not offsetTop) because
  // each .process-map__stop is itself position:relative, which would
  // make offsetTop relative to the stop, not the track.
  useLayoutEffect(() => {
    const measure = () => {
      const track = trackRef.current;
      if (!track) return;
      const trackRect = track.getBoundingClientRect();
      const trackHeight = trackRect.height;
      if (!trackHeight) return;

      const next = nodeRefs.current.map((el) => {
        if (!el) return 0;
        const nodeRect = el.getBoundingClientRect();
        const nodeCenter = nodeRect.top + nodeRect.height / 2 - trackRect.top;
        return nodeCenter / trackHeight;
      });
      setThresholds(next);
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // Drive icon "active" state off the exact same progress value that
  // drives the line fill, instead of a separate viewport check. Once
  // the fill passes a node's position, that node stays active.
  useEffect(() => {
    if (!thresholds.length) return;

    const unsubscribe = scrollYProgress.on("change", (latest) => {
      setActiveStates((prev) => {
        const next = thresholds.map((t) => latest >= t - 0.02); 
        if (prev.length === next.length && prev.every((v, i) => v === next[i])) {
          return prev;
        }
        return next;
      });
      setEndActive(latest >= 0.995);
    });

    return unsubscribe;
  }, [thresholds, scrollYProgress]);

  return (
    <section className="process-map">
      <div className="process-map__inner">
        <div className="process-map__header">
          <motion.span
            className="process-map__eyebrow"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportSettings}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Process
          </motion.span>
          <motion.h2
            className="process-map__heading"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportSettings}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          >
            A simple path to your first hire
          </motion.h2>
          <motion.p
            className="process-map__subheading"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportSettings}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          >
            From your first call to your VA settling into the role - here's
            exactly what happens at each step.
          </motion.p>
        </div>

        <div className="process-map__track" ref={trackRef}>
          {/* Base line + animated fill */}
          <div className="process-map__line-track" aria-hidden="true">
            <motion.div
              className="process-map__line-fill"
              style={{ scaleY: lineScale }}
            />
          </div>

          {/* Traveler marker moving down the track */}
          <motion.div
            className="process-map__traveler"
            style={{ top: travelerTop, opacity: travelerOpacity }}
            aria-hidden="true"
          >
            <span className="process-map__traveler-dot" />
            <span className="process-map__traveler-pulse" />
          </motion.div>

          {PROCESS_STEPS.map((step, i) => {
            const Icon = step.icon;
            const isEven = i % 2 === 1;
            const isActive = !!activeStates[i];
            return (
              <motion.div
                className={`process-map__stop ${isEven ? "process-map__stop--right" : "process-map__stop--left"
                  } ${isActive ? "is-active" : ""}`}
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportSettings}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div className="process-map__card">
                  <span className="process-map__card-number">
                    {step.number}
                  </span>
                  <h3 className="process-map__card-title">{step.title}</h3>
                  <p className="process-map__card-description">
                    {step.description}
                  </p>
                </div>

                <motion.span
                  className="process-map__node"
                  ref={(el) => {
                    nodeRefs.current[i] = el;
                  }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                >
                  <Icon size={22} strokeWidth={1.8} />
                </motion.span>
              </motion.div>
            );
          })}

          {/* Final marker at the end of the track */}
          <div className={`process-map__end ${endActive ? "is-active" : ""}`}>
            <Rocket size={20} strokeWidth={1.8} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessJourneyMap;