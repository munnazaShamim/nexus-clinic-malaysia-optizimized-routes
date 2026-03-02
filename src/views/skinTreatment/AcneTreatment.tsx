"use client";

import { motion } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  fadeInLeft,
  fadeInRight,
  scaleIn,
} from "../../lib/animations";
import {
  ShieldCheck,
  MapPin,
  Stethoscope,
  ChevronDown,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Star,
  Droplets,
  Zap,
  Heart,
  Activity,
} from "lucide-react";
import FAQ from "../../components/FAQ";
import { useTranslation } from "@/src/i18n/client";
import { fallbackLng } from "@/src/i18n/settings";
import SectionBeforeAfter from "@/src/components/BeforeAfterCustomize";

export default function AcneLandingPage({ locale = fallbackLng }: { locale?: string }) {
  const { t } = useTranslation(locale, "acneTreatment");

  const trustItems = [
    { icon: ShieldCheck, text: t("hero.trust1") },
    { icon: Stethoscope, text: t("hero.trust2") },
    { icon: MapPin, text: t("hero.trust3") },
  ];

  const acneTypes = [
    {
      number: "01",
      title: t("acneTypes.type1Title"),
      subtitle: t("acneTypes.type1Subtitle"),
      desc: t("acneTypes.type1Desc"),
      icon: Droplets,
    },
    {
      number: "02",
      title: t("acneTypes.type2Title"),
      subtitle: t("acneTypes.type2Subtitle"),
      desc: t("acneTypes.type2Desc"),
      icon: Zap,
    },
    {
      number: "03",
      title: t("acneTypes.type3Title"),
      subtitle: t("acneTypes.type3Subtitle"),
      desc: t("acneTypes.type3Desc"),
      icon: Activity,
    },
    {
      number: "04",
      title: t("acneTypes.type4Title"),
      subtitle: t("acneTypes.type4Subtitle"),
      desc: t("acneTypes.type4Desc"),
      icon: Heart,
    },
    {
      number: "05",
      title: t("acneTypes.type5Title"),
      subtitle: t("acneTypes.type5Subtitle"),
      desc: t("acneTypes.type5Desc"),
      icon: Sparkles,
    },
  ];

  const treatmentPhases = [
    {
      phase: t("phases.phase1Label"),
      title: t("phases.phase1Title"),
      desc: t("phases.phase1Desc"),
      duration: t("phases.phase1Duration"),
    },
    {
      phase: t("phases.phase2Label"),
      title: t("phases.phase2Title"),
      desc: t("phases.phase2Desc"),
      duration: t("phases.phase2Duration"),
    },
    {
      phase: t("phases.phase3Label"),
      title: t("phases.phase3Title"),
      desc: t("phases.phase3Desc"),
      duration: t("phases.phase3Duration"),
    },
  ];

  const treatmentOptions = [
    {
      label: "A",
      title: t("treatments.optATitle"),
      items: [t("treatments.optAItem1"), t("treatments.optAItem2"), t("treatments.optAItem3")],
      note: t("treatments.optANote"),
    },
    {
      label: "B",
      title: t("treatments.optBTitle"),
      items: [t("treatments.optBItem1"), t("treatments.optBItem2"), t("treatments.optBItem3")],
      note: t("treatments.optBNote"),
    },
    {
      label: "C",
      title: t("treatments.optCTitle"),
      items: [t("treatments.optCItem1"), t("treatments.optCItem2"), t("treatments.optCItem3")],
      note: t("treatments.optCNote"),
    },
  ];

  const faqs = [
    { q: t("faq.q1"), a: t("faq.a1") },
    { q: t("faq.q2"), a: t("faq.a2") },
    { q: t("faq.q3"), a: t("faq.a3") },
    { q: t("faq.q4"), a: t("faq.a4") },
    { q: t("faq.q5"), a: t("faq.a5") },
  ];

  const pros = [
    t("prosCons.pro1"),
    t("prosCons.pro2"),
    t("prosCons.pro3"),
    t("prosCons.pro4"),
  ];

  const cons = [
    t("prosCons.con1"),
    t("prosCons.con2"),
    t("prosCons.con3"),
  ];


  const transformations = [
    {
      id: 1,
      before: "/images/B&A-skin/B&A-acne-treatment1.webp",
      after: "/images/B&A-skin/B&A-acne-treatment1.webp",
    },
    {
      id: 2,
      before: "/images/B&A-skin/B&A-acne-treatment2.webp",
      after: "/images/B&A-skin/B&A-acne-treatment2.webp",
    },
    {
      id: 3,
      before: "/images/B&A-skin/B&A-acne-treatment3.webp",
      after: "/images/B&A-skin/B&A-acne-treatment3.webp",
    },
  ];

  return (
    <>
      <main
        className="min-h-screen overflow-x-hidden"
        style={{
          backgroundColor: "var(--color-light)",
          color: "var(--color-brown)",
          fontFamily: "var(--font-georgia)",
        }}
      >
        {/* ── DECORATIVE TEXTURE OVERLAY ── */}
        <div
          className="fixed inset-0 pointer-events-none z-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 15% 20%, rgba(140,79,88,0.06) 0%, transparent 50%), radial-gradient(circle at 85% 75%, rgba(172,153,144,0.08) 0%, transparent 50%)",
          }}
        />

        {/* HERO SECTION */}
        <section className="relative min-h-screen flex col justify-center px-6 md:px-16 lg:px-24 pt-20 pb-16">
          {/* Decorative vertical line */}
          <div
            className="absolute hidden md:block left-6 md:left-16 top-0 h-full w-px opacity-20"
            style={{
              background:
                "linear-gradient(to bottom, transparent, var(--color-wine), transparent)",
            }}
          />

          {/* Floating label */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-8 items-center gap-3 hidden md:flex"
          ></motion.div>

          {/* H1 */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-5xl px-24 md:px-0"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-6xl lg:text-7xl leading-[1.1] font-normal mb-6"
              style={{ color: "var(--color-brown)" }}
            >
              {t("hero.title1")}{" "}
              <span className="italic" style={{ color: "var(--color-wine)" }}>
                {t("hero.titleHighlight")}
              </span>{" "}
              {t("hero.title2")}
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-base md:text-lg max-w-2xl leading-relaxed mb-4"
              style={{
                color: "var(--color-taupe)",
                fontFamily: "var(--font-inter)",
              }}
            >
              {t("hero.desc1")}
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-base md:text-lg max-w-2xl leading-relaxed mb-12"
              style={{
                color: "var(--color-taupe)",
                fontFamily: "var(--font-inter)",
              }}
            >
              {t("hero.desc2Before")}{" "}
              <span
                style={{ color: "var(--color-brown)" }}
                className="font-medium"
              >
                {t("hero.desc2Bold")}
              </span>
              {t("hero.desc2After")}
            </motion.p>

            {/* CTA Button */}
            <motion.div
              variants={fadeInUp}
              className="flex col sm:row gap-4 mb-16"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 px-8 py-4 text-sm tracking-widest uppercase"
                style={{
                  backgroundColor: "var(--color-wine)",
                  color: "var(--color-cream)",
                  fontFamily: "var(--font-inter)",
                  letterSpacing: "0.15em",
                }}
              >
                {t("hero.bookButton")}
                <ArrowRight size={16} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 px-8 py-4 text-sm tracking-widest uppercase border"
                style={{
                  borderColor: "var(--color-taupe)",
                  color: "var(--color-brown)",
                  fontFamily: "var(--font-inter)",
                  letterSpacing: "0.15em",
                  backgroundColor: "transparent",
                }}
              >
                {t("hero.learnMore")}
                <ChevronDown size={16} />
              </motion.button>
            </motion.div>

            {/* Trust Strip */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex wrap gap-6 md:gap-10"
            >
              {trustItems.map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="flex items-center gap-2"
                >
                  <item.icon size={16} style={{ color: "var(--color-wine)" }} />
                  <span
                    className="text-xs tracking-wide"
                    style={{
                      color: "var(--color-taupe)",
                      fontFamily: "var(--font-inter)",
                    }}
                  >
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Decorative number */}
          <div
            className="absolute right-8 md:right-16 top-1/2 -translate-y-1/2 text-[12rem] md:text-[18rem] font-bold leading-none select-none pointer-events-none hidden lg:block"
            style={{
              color: "rgba(140,79,88,0.04)",
              fontFamily: "var(--font-georgia)",
            }}
          >
            01
          </div>
        </section>

        {/* MALAYSIA CONTEXT SECTION */}
        <section
          className="relative py-20 md:py-28 px-6 md:px-16 lg:px-24"
          style={{ backgroundColor: "var(--color-cream)" }}
        >
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="mb-6 flex items-center gap-3">
                <div
                  className="h-px w-8"
                  style={{ backgroundColor: "var(--color-wine)" }}
                />
                <span
                  className="text-xs tracking-[0.25em] uppercase"
                  style={{
                    color: "var(--color-wine)",
                    fontFamily: "var(--font-inter)",
                  }}
                >
                  {t("klReality.badge")}
                </span>
              </div>
              <h2
                className="text-3xl md:text-4xl lg:text-5xl leading-tight mb-6 font-normal"
                style={{ color: "var(--color-brown)" }}
              >
                {t("klReality.title1")}{" "}
                <span className="italic" style={{ color: "var(--color-wine)" }}>
                  {t("klReality.titleHighlight")}
                </span>{" "}
                {t("klReality.title2")}
              </h2>
                <div className="relative rounded-3xl overflow-hidden shadow-xl mb-4">
                 <img
                   src="/images/skin/acne-treatment.webp"
                   alt="acne-treatment"
                   className="w-full h-auto"
                 />
                 <div className="absolute inset-0 bg-linear-to-t from-brown/40 to-transparent"></div>
               </div>
              <p
                className="leading-relaxed mb-4 text-sm md:text-base"
                style={{
                  color: "var(--color-taupe)",
                  fontFamily: "var(--font-inter)",
                }}
              >
                {t("klReality.desc1")}
              </p>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {[
                t("klReality.step1"),
                t("klReality.step2"),
                t("klReality.step3"),
                t("klReality.step4"),
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="flex items-start gap-4 p-5"
                  style={{
                    backgroundColor: "var(--color-glass)",
                    backdropFilter: "blur(8px)",
                    border: "1px solid rgba(140,79,88,0.12)",
                  }}
                >
                  <span
                    className="text-xs font-medium mt-0.5"
                    style={{
                      color: "var(--color-wine)",
                      fontFamily: "var(--font-inter)",
                    }}
                  >
                    0{i + 1}
                  </span>
                  <span
                    className="text-sm leading-relaxed"
                    style={{
                      color: "var(--color-brown)",
                      fontFamily: "var(--font-inter)",
                    }}
                  >
                    {item}
                  </span>
                </motion.div>
              ))}
              <p
                className="leading-relaxed text-sm md:text-base italic"
                style={{
                  color: "var(--color-taupe)",
                  fontFamily: "var(--font-inter)",
                }}
              >
                "{t("klReality.desc2")}"
              </p>
            </motion.div>
          </div>
        </section>

        {/* ACNE TYPES SECTION */}
        <section className="py-20 md:py-28 px-6 md:px-16 lg:px-24">
          <div className="max-w-6xl mx-auto">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-16"
            >
              <motion.div
                variants={fadeInUp}
                className="flex items-center gap-3 mb-6"
              >
                <div
                  className="h-px w-8"
                  style={{ backgroundColor: "var(--color-wine)" }}
                />
                <span
                  className="text-xs tracking-[0.25em] uppercase"
                  style={{
                    color: "var(--color-wine)",
                    fontFamily: "var(--font-inter)",
                  }}
                >
                  {t("acneTypes.badge")}
                </span>
              </motion.div>
              <motion.h2
                variants={fadeInUp}
                className="text-3xl md:text-5xl font-normal"
                style={{ color: "var(--color-brown)" }}
              >
                {t("acneTypes.title1")}{" "}
                <span className="italic" style={{ color: "var(--color-wine)" }}>
                  {t("acneTypes.titleHighlight")}
                </span>{" "}
                {t("acneTypes.title2")}
              </motion.h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {acneTypes.map((type, i) => (
                <motion.div
                  key={i}
                  variants={scaleIn}
                  whileHover={{ y: -4 }}
                  className="relative p-8 group"
                  style={{
                    backgroundColor:
                      i === 0 ? "var(--color-wine)" : "var(--color-cream)",
                    border:
                      i !== 0 ? "1px solid rgba(172,153,144,0.25)" : "none",
                  }}
                >
                  <div
                    className="absolute top-4 right-6 text-5xl font-bold select-none"
                    style={{
                      color:
                        i === 0
                          ? "rgba(255,255,255,0.1)"
                          : "rgba(140,79,88,0.06)",
                      fontFamily: "var(--font-georgia)",
                    }}
                  >
                    {type.number}
                  </div>

                  <type.icon
                    size={20}
                    className="mb-5"
                    style={{
                      color:
                        i === 0 ? "rgba(243,239,238,0.7)" : "var(--color-wine)",
                    }}
                  />

                  <h3
                    className="text-xl font-normal mb-1"
                    style={{
                      color:
                        i === 0 ? "var(--color-cream)" : "var(--color-brown)",
                      fontFamily: "var(--font-georgia)",
                    }}
                  >
                    {type.title}
                  </h3>
                  <p
                    className="text-xs tracking-wider uppercase mb-4"
                    style={{
                      color:
                        i === 0
                          ? "rgba(243,239,238,0.6)"
                          : "var(--color-taupe)",
                      fontFamily: "var(--font-inter)",
                    }}
                  >
                    {type.subtitle}
                  </p>
                  <p
                    className="text-sm leading-relaxed"
                    style={{
                      color:
                        i === 0
                          ? "rgba(243,239,238,0.85)"
                          : "var(--color-taupe)",
                      fontFamily: "var(--font-inter)",
                    }}
                  >
                    {type.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* TREATMENT PROCESS — 3 PHASES */}
        <section
          className="py-20 md:py-28 px-6 md:px-16 lg:px-24"
          style={{ backgroundColor: "var(--color-brown)" }}
        >
          <div className="max-w-6xl mx-auto">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-16"
            >
              <motion.div
                variants={fadeInUp}
                className="flex items-center gap-3 mb-6"
              >
                <div
                  className="h-px w-8"
                  style={{ backgroundColor: "var(--color-rose)" }}
                />
                <span
                  className="text-xs tracking-[0.25em] uppercase"
                  style={{
                    color: "var(--color-rose)",
                    fontFamily: "var(--font-inter)",
                  }}
                >
                  {t("phases.badge")}
                </span>
              </motion.div>
              <motion.h2
                variants={fadeInUp}
                className="text-3xl md:text-5xl font-normal"
                style={{ color: "var(--color-cream)" }}
              >
                {t("phases.title1")}{" "}
                <span className="italic" style={{ color: "var(--color-rose)" }}>
                  {t("phases.titleHighlight")}
                </span>
              </motion.h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-0 relative"
            >
              <div
                className="absolute top-8 left-[16%] right-[16%] h-px hidden md:block"
                style={{ backgroundColor: "rgba(172,153,144,0.2)" }}
              />

              {treatmentPhases.map((phase, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="relative p-8 md:p-10 text-center"
                >
                  <div
                    className="w-16 h-16 mx-auto mb-8 flex items-center justify-center text-sm font-medium relative z-10"
                    style={{
                      border: `1px solid ${i === 1 ? "var(--color-rose)" : "rgba(172,153,144,0.3)"}`,
                      color:
                        i === 1 ? "var(--color-rose)" : "var(--color-taupe)",
                      backgroundColor: "var(--color-brown)",
                      fontFamily: "var(--font-inter)",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>

                  <div
                    className="text-xs tracking-[0.2em] uppercase mb-3"
                    style={{
                      color: "var(--color-rose)",
                      fontFamily: "var(--font-inter)",
                    }}
                  >
                    {phase.phase}
                  </div>
                  <h3
                    className="text-xl md:text-2xl font-normal mb-4"
                    style={{ color: "var(--color-cream)" }}
                  >
                    {phase.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed mb-6"
                    style={{
                      color: "var(--color-taupe)",
                      fontFamily: "var(--font-inter)",
                    }}
                  >
                    {phase.desc}
                  </p>
                  <div
                    className="inline-block px-3 py-1 text-xs tracking-widest uppercase"
                    style={{
                      border: "1px solid rgba(172,153,144,0.2)",
                      color: "var(--color-taupe)",
                      fontFamily: "var(--font-inter)",
                    }}
                  >
                    {phase.duration}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* TREATMENT OPTIONS */}
        <section className="py-20 md:py-28 px-6 md:px-16 lg:px-24">
          <div className="max-w-6xl mx-auto">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-16"
            >
              <motion.div
                variants={fadeInUp}
                className="flex items-center gap-3 mb-6"
              >
                <div
                  className="h-px w-8"
                  style={{ backgroundColor: "var(--color-wine)" }}
                />
                <span
                  className="text-xs tracking-[0.25em] uppercase"
                  style={{
                    color: "var(--color-wine)",
                    fontFamily: "var(--font-inter)",
                  }}
                >
                  {t("treatments.badge")}
                </span>
              </motion.div>
              <motion.h2
                variants={fadeInUp}
                className="text-3xl md:text-5xl font-normal max-w-2xl"
                style={{ color: "var(--color-brown)" }}
              >
                {t("treatments.title1")}{" "}
                <span className="italic" style={{ color: "var(--color-wine)" }}>
                  {t("treatments.titleHighlight")}
                </span>
              </motion.h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-6"
            >
              {treatmentOptions.map((opt, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  whileHover={{ y: -4 }}
                  className="p-8"
                  style={{
                    backgroundColor: "var(--color-cream)",
                    border: "1px solid rgba(172,153,144,0.2)",
                  }}
                >
                  <div
                    className="w-10 h-10 flex items-center justify-center text-sm font-medium mb-6"
                    style={{
                      backgroundColor: "var(--color-wine)",
                      color: "var(--color-cream)",
                      fontFamily: "var(--font-georgia)",
                    }}
                  >
                    {opt.label}
                  </div>
                  <h3
                    className="text-lg font-normal mb-5"
                    style={{ color: "var(--color-brown)" }}
                  >
                    {opt.title}
                  </h3>
                  <div className="space-y-3 mb-6">
                    {opt.items.map((item, j) => (
                      <div key={j} className="flex items-start gap-3">
                        <div
                          className="w-1 h-1 rounded-full mt-2 shrink-0"
                          style={{ backgroundColor: "var(--color-wine)" }}
                        />
                        <span
                          className="text-sm"
                          style={{
                            color: "var(--color-taupe)",
                            fontFamily: "var(--font-inter)",
                          }}
                        >
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div
                    className="pt-5 text-xs italic leading-relaxed"
                    style={{
                      borderTop: "1px solid rgba(172,153,144,0.2)",
                      color: "var(--color-rose)",
                      fontFamily: "var(--font-georgia)",
                    }}
                  >
                    {opt.note}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* BEFORE & AFTER */}
        <SectionBeforeAfter transformations={transformations} />

        {/* WHAT TO EXPECT AT NEXUS */}
        <section
          className="py-20 md:py-28 px-6 md:px-16 lg:px-24"
          style={{ backgroundColor: "var(--color-cream)" }}
        >
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="h-px w-8"
                  style={{ backgroundColor: "var(--color-wine)" }}
                />
                <span
                  className="text-xs tracking-[0.25em] uppercase"
                  style={{
                    color: "var(--color-wine)",
                    fontFamily: "var(--font-inter)",
                  }}
                >
                  {t("firstVisit.badge")}
                </span>
              </div>
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-normal leading-tight mb-8"
                style={{ color: "var(--color-brown)" }}
              >
                {t("firstVisit.title1")}{" "}
                <span className="italic" style={{ color: "var(--color-wine)" }}>
                  {t("firstVisit.titleHighlight")}
                </span>
              </h2>
              <p
                className="text-sm md:text-base leading-relaxed mb-6"
                style={{
                  color: "var(--color-taupe)",
                  fontFamily: "var(--font-inter)",
                }}
              >
                {t("firstVisit.desc1")}
              </p>
              <p
                className="text-sm md:text-base leading-relaxed"
                style={{
                  color: "var(--color-taupe)",
                  fontFamily: "var(--font-inter)",
                }}
              >
                {t("firstVisit.desc2")}
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {[
                { step: "01", title: t("firstVisit.step1Title"), desc: t("firstVisit.step1Desc") },
                { step: "02", title: t("firstVisit.step2Title"), desc: t("firstVisit.step2Desc") },
                { step: "03", title: t("firstVisit.step3Title"), desc: t("firstVisit.step3Desc") },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="flex gap-5 p-6"
                  style={{
                    backgroundColor: "var(--color-light)",
                    border: "1px solid rgba(172,153,144,0.15)",
                  }}
                >
                  <span
                    className="text-2xl font-normal opacity-20 shrink-0 leading-tight"
                    style={{
                      color: "var(--color-wine)",
                      fontFamily: "var(--font-georgia)",
                    }}
                  >
                    {item.step}
                  </span>
                  <div>
                    <h4
                      className="text-base mb-2"
                      style={{
                        color: "var(--color-brown)",
                        fontFamily: "var(--font-georgia)",
                      }}
                    >
                      {item.title}
                    </h4>
                    <p
                      className="text-sm leading-relaxed"
                      style={{
                        color: "var(--color-taupe)",
                        fontFamily: "var(--font-inter)",
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* PROS & CONS */}
        <section className="py-20 md:py-28 px-6 md:px-16 lg:px-24">
          <div className="max-w-6xl mx-auto">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-14"
            >
              <motion.div
                variants={fadeInUp}
                className="flex items-center gap-3 mb-6"
              >
                <div
                  className="h-px w-8"
                  style={{ backgroundColor: "var(--color-wine)" }}
                />
                <span
                  className="text-xs tracking-[0.25em] uppercase"
                  style={{
                    color: "var(--color-wine)",
                    fontFamily: "var(--font-inter)",
                  }}
                >
                  {t("prosCons.badge")}
                </span>
              </motion.div>
              <motion.h2
                variants={fadeInUp}
                className="text-3xl md:text-5xl font-normal"
                style={{ color: "var(--color-brown)" }}
              >
                {t("prosCons.title1")}{" "}
                <span className="italic" style={{ color: "var(--color-wine)" }}>
                  {t("prosCons.titleHighlight")}
                </span>
              </motion.h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-10">
              <motion.div
                variants={fadeInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div
                  className="flex items-center gap-3 mb-8 pb-4"
                  style={{ borderBottom: "1px solid rgba(172,153,144,0.2)" }}
                >
                  <CheckCircle2
                    size={18}
                    style={{ color: "var(--color-wine)" }}
                  />
                  <span
                    className="text-sm tracking-wider uppercase"
                    style={{
                      color: "var(--color-brown)",
                      fontFamily: "var(--font-inter)",
                    }}
                  >
                    {t("prosCons.prosLabel")}
                  </span>
                </div>
                <div className="space-y-5">
                  {pros.map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div
                        className="w-5 h-5 flex items-center justify-center shrink-0 mt-0.5"
                        style={{ backgroundColor: "rgba(140,79,88,0.1)" }}
                      >
                        <div
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ backgroundColor: "var(--color-wine)" }}
                        />
                      </div>
                      <p
                        className="text-sm leading-relaxed"
                        style={{
                          color: "var(--color-taupe)",
                          fontFamily: "var(--font-inter)",
                        }}
                      >
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div
                  className="flex items-center gap-3 mb-8 pb-4"
                  style={{ borderBottom: "1px solid rgba(172,153,144,0.2)" }}
                >
                  <AlertCircle
                    size={18}
                    style={{ color: "var(--color-taupe)" }}
                  />
                  <span
                    className="text-sm tracking-wider uppercase"
                    style={{
                      color: "var(--color-brown)",
                      fontFamily: "var(--font-inter)",
                    }}
                  >
                    {t("prosCons.consLabel")}
                  </span>
                </div>
                <div className="space-y-5">
                  {cons.map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div
                        className="w-5 h-5 flex items-center justify-center shrink-0 mt-0.5"
                        style={{ backgroundColor: "rgba(172,153,144,0.1)" }}
                      >
                        <div
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ backgroundColor: "var(--color-taupe)" }}
                        />
                      </div>
                      <p
                        className="text-sm leading-relaxed"
                        style={{
                          color: "var(--color-taupe)",
                          fontFamily: "var(--font-inter)",
                        }}
                      >
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* TIMELINE */}
        <section
          className="py-20 md:py-28 px-6 md:px-16 lg:px-24"
          style={{ backgroundColor: "var(--color-cream)" }}
        >
          <div className="max-w-6xl mx-auto">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-16"
            >
              <motion.div
                variants={fadeInUp}
                className="flex items-center gap-3 mb-6"
              >
                <div
                  className="h-px w-8"
                  style={{ backgroundColor: "var(--color-wine)" }}
                />
                <span
                  className="text-xs tracking-[0.25em] uppercase"
                  style={{
                    color: "var(--color-wine)",
                    fontFamily: "var(--font-inter)",
                  }}
                >
                  {t("timeline.badge")}
                </span>
              </motion.div>
              <motion.h2
                variants={fadeInUp}
                className="text-3xl md:text-5xl font-normal"
                style={{ color: "var(--color-brown)" }}
              >
                {t("timeline.title1")}{" "}
                <span className="italic" style={{ color: "var(--color-wine)" }}>
                  {t("timeline.titleHighlight")}
                </span>
              </motion.h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {[
                { duration: t("timeline.tl1Duration"), label: t("timeline.tl1Label"), source: t("timeline.tl1Source") },
                { duration: t("timeline.tl2Duration"), label: t("timeline.tl2Label"), source: t("timeline.tl2Source") },
                { duration: t("timeline.tl3Duration"), label: t("timeline.tl3Label"), source: t("timeline.tl3Source") },
                { duration: t("timeline.tl4Duration"), label: t("timeline.tl4Label"), source: t("timeline.tl4Source") },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={scaleIn}
                  className="p-6 text-center"
                  style={{
                    backgroundColor: "var(--color-light)",
                    border: "1px solid rgba(172,153,144,0.2)",
                  }}
                >
                  <div
                    className="text-2xl md:text-3xl mb-3 font-normal"
                    style={{
                      color: "var(--color-wine)",
                      fontFamily: "var(--font-georgia)",
                    }}
                  >
                    {item.duration}
                  </div>
                  <p
                    className="text-xs leading-relaxed mb-3"
                    style={{
                      color: "var(--color-taupe)",
                      fontFamily: "var(--font-inter)",
                    }}
                  >
                    {item.label}
                  </p>
                  <span
                    className="text-xs italic"
                    style={{
                      color: "var(--color-rose)",
                      fontFamily: "var(--font-georgia)",
                    }}
                  >
                    — {item.source}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            <motion.p
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-10 text-center text-sm italic"
              style={{
                color: "var(--color-taupe)",
                fontFamily: "var(--font-georgia)",
              }}
            >
              {t("timeline.warning")}
            </motion.p>
          </div>
        </section>

        {/* FAQ SECTION */}
        <FAQ data={faqs} />

        {/* FINAL CTA BANNER */}
        <section
          className="py-20 md:py-32 px-6 md:px-16 lg:px-24 relative overflow-hidden"
          style={{ backgroundColor: "var(--color-wine)" }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle at 80% 50%, rgba(75,58,51,0.3) 0%, transparent 60%)",
            }}
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center relative z-10"
          >
            <motion.div
              variants={fadeInUp}
              className="flex items-center justify-center gap-3 mb-8"
            >
              <div
                className="h-px w-8"
                style={{ backgroundColor: "rgba(243,239,238,0.4)" }}
              />
              <Star size={12} style={{ color: "rgba(243,239,238,0.6)" }} />
              <div
                className="h-px w-8"
                style={{ backgroundColor: "rgba(243,239,238,0.4)" }}
              />
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-5xl lg:text-6xl font-normal mb-6 leading-tight"
              style={{ color: "var(--color-cream)" }}
            >
              {t("cta.title1")}{" "}
              <span className="italic">{t("cta.title2")}</span>
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-sm md:text-base mb-12 max-w-xl mx-auto leading-relaxed"
              style={{
                color: "rgba(243,239,238,0.7)",
                fontFamily: "var(--font-inter)",
              }}
            >
              {t("cta.description")}
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex col sm:row gap-4 justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-3 px-10 py-4 text-sm tracking-widest uppercase"
                style={{
                  backgroundColor: "var(--color-cream)",
                  color: "var(--color-wine)",
                  fontFamily: "var(--font-inter)",
                  letterSpacing: "0.15em",
                }}
              >
                {t("cta.button")}
                <ArrowRight size={16} />
              </motion.button>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="mt-12 flex wrap justify-center gap-8"
            >
              {trustItems.map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <item.icon
                    size={14}
                    style={{ color: "rgba(243,239,238,0.5)" }}
                  />
                  <span
                    className="text-xs"
                    style={{
                      color: "rgba(243,239,238,0.6)",
                      fontFamily: "var(--font-inter)",
                    }}
                  >
                    {item.text}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </section>
      </main>
    </>
  );
}
