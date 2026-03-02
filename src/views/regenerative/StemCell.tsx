"use client";

import { motion } from "framer-motion";
import {
  Heart,
  AlertCircle,
  CheckCircle,
  XCircle,
  Shield,
  Phone,
  MapPin,
  Activity,
  Droplets,
  Microscope,
  Users,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import {
  fadeInUp,
  staggerContainer,
  fadeInLeft,
  fadeInRight,
  scaleIn,
} from "../../lib/animations";
import FAQ from "../../components/FAQ";
import { useTranslation } from "@/src/i18n/client";
import { fallbackLng } from "@/src/i18n/settings";

const StemCellLanding = ({ locale = fallbackLng }: { locale?: string }) => {
  const { t } = useTranslation(locale, "stemCell");
  const faqs = [
    {
      q: "What is stem cell therapy?",
      a: "A treatment that uses stem cells, or cells derived from them, to repair or replace damaged cells or tissues.",
    },
    {
      q: "What conditions are stem cell treatments proven for?",
      a: "Blood and immune disorders, loss of bone marrow function via blood stem cell transplantation (most established).",
    },
    {
      q: "Is stem cell therapy approved in Malaysia?",
      a: "MOH notes hematopoietic and cord blood stem cell transplantation are most established; other uses are experimental.",
    },
    {
      q: "Why do some clinics offer stem cells for many diseases?",
      a: "ISSCR warns that unproven interventions are widely commercialised without sufficient evidence.",
    },
    {
      q: "Is stem cell therapy safe?",
      a: "No medical treatment is risk-free. Long-term safety can be uncertain; follow-up is important.",
    },
    {
      q: "What are the side effects or risks?",
      a: "Infection, immune reactions, unknown long-term effects. FDA reports serious harms from unapproved products.",
    },
    {
      q: "How many sessions do I need?",
      a: "Depends on condition and protocol. Be cautious if someone promises a fixed number for everyone.",
    },
    {
      q: "How long does it take to see results?",
      a: "Timelines vary. A good clinic defines measurable goals and follow-up points.",
    },
    {
      q: "How much does stem cell therapy cost in Kuala Lumpur?",
      a: "Some clinics start around RM6,000+. Higher ranges for complexity. Always request itemised quote.",
    },
    {
      q: "Where do the stem cells come from?",
      a: "Common sources: cord tissue (Wharton's Jelly), adipose tissue, bone marrow.",
    },
    {
      q: "What should I ask a clinic before I book?",
      a: "Ask for scientific evidence, ethics oversight, regulatory compliance. Be cautious of testimonial-based claims.",
    },
    {
      q: "Are exosome treatments the same as stem cell therapy?",
      a: "No. FDA includes exosomes among unapproved regenerative products broadly marketed.",
    },
  ];
  return (
    <>
      <main className="min-h-screen bg-linear-to-b from-light to-white overflow-hidden">
        {/* Hero Section with Background Image */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8"
        >
          {/* Background Image dengan overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src={"/images/clinic/interior.png"}
              alt="Stem Cell Therapy"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-r from-light via-light/90 to-transparent"></div>
          </div>

          <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5 z-1"></div>

          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <motion.div variants={fadeInUp} className="mb-8">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-wine/10 text-wine font-serif text-sm mb-6 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 mr-2" />
                Regenerative Medicine Excellence in KLCC
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="font-serif text-5xl md:text-7xl font-bold mb-6"
              style={{ color: "var(--color-brown)" }}
            >
              When your body feels "stuck,"
              <br />
              <span style={{ color: "var(--color-wine)" }}>
                regenerative care
              </span>{" "}
              can feel like hope.
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto font-light"
              style={{ color: "var(--color-taupe)" }}
            >
              It should also feel safe.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full font-medium text-white shadow-lg"
                style={{ backgroundColor: "var(--color-wine)" }}
              >
                Schedule Private Consultation
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full font-medium border-2 bg-white/80 backdrop-blur-sm"
                style={{
                  borderColor: "var(--color-rose)",
                  color: "var(--color-brown)",
                }}
              >
                Understand Your Options
              </motion.button>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="mt-16 p-6 rounded-2xl"
              style={{
                backgroundColor: "var(--color-glass)",
                backdropFilter: "blur(10px)",
                border: "1px solid var(--color-taupe)/20",
              }}
            >
              <p className="text-sm" style={{ color: "var(--color-brown)" }}>
                <span className="font-semibold">
                  📍 Nexus Clinic Kuala Lumpur
                </span>{" "}
                — LG 10, Lower Ground Floor, Wisma UOA II, Jalan Pinang, 50450
                Kuala Lumpur
                <br />
                <span className="inline-flex items-center mt-2 gap-2">
                  <Phone
                    className="w-4 h-4"
                    style={{ color: "var(--color-wine)" }}
                  />{" "}
                  016-7025699 / 03-21635699
                </span>
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Trust Section dengan Image Card */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="py-20 px-4 sm:px-6 lg:px-8 relative"
        >
          <div className="max-w-7xl mx-auto">
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2
                className="font-serif text-4xl md:text-5xl font-bold mb-6"
                style={{ color: "var(--color-brown)" }}
              >
                Patient-First, Safety-Focused
              </h2>
              <p
                className="text-lg max-w-3xl mx-auto"
                style={{ color: "var(--color-taupe)" }}
              >
                Where Malaysia's MOH guidelines meet international standards of
                care
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Medical Team Image Card */}
              <motion.div
                variants={scaleIn}
                className="relative rounded-2xl overflow-hidden group cursor-pointer h-64"
              >
                <img
                  src={
                    "https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&w=2070&auto=format&fit=crop"
                  }
                  alt="Medical team at Nexus Clinic"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-linear(to top, var(--color-brown), transparent)",
                  }}
                ></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="font-serif text-xl font-bold mb-2">
                    Expert Team
                  </h3>
                  <p className="text-sm text-cream">
                    Specialized in regenerative medicine
                  </p>
                </div>
              </motion.div>

              {[
                {
                  icon: <MapPin className="w-8 h-8" />,
                  title: "Central KL Location",
                  desc: "KLCC area — Wisma UOA II, Jalan Pinang",
                },
                {
                  icon: <Users className="w-8 h-8" />,
                  title: "Private Consultations",
                  desc: "Patient-first approach with complete privacy",
                },
                {
                  icon: <Shield className="w-8 h-8" />,
                  title: "MOH-Aligned",
                  desc: "Following Malaysia's guidelines for stem cell therapy",
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={scaleIn}
                  whileHover={{ y: -10 }}
                  className="p-8 rounded-2xl text-center group cursor-pointer"
                  style={{
                    backgroundColor: "var(--color-cream)",
                    transition: "all 0.3s ease",
                  }}
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform"
                    style={{
                      backgroundColor: "var(--color-wine)/10",
                      color: "var(--color-wine)",
                    }}
                  >
                    {item.icon}
                  </div>
                  <h3
                    className="font-serif text-xl font-bold mb-3"
                    style={{ color: "var(--color-brown)" }}
                  >
                    {item.title}
                  </h3>
                  <p style={{ color: "var(--color-taupe)" }}>{item.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={fadeInUp}
              className="mt-12 p-6 rounded-xl border-l-4"
              style={{
                borderLeftColor: "var(--color-wine)",
                backgroundColor: "var(--color-glass)",
              }}
            >
              <p
                className="text-sm italic"
                style={{ color: "var(--color-brown)" }}
              >
                "Malaysia's MOH guideline notes that hematopoietic and cord
                blood stem cell transplant are the most established forms of
                stem cell therapy, while many other stem cell applications are
                considered experimental and require proper oversight."
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* What Is Stem Cell Therapy - with Image Split */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20 px-4 sm:px-6 lg:px-8 relative"
          style={{ backgroundColor: "var(--color-brown)" }}
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('/cells-pattern.svg')] bg-repeat opacity-20"></div>
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInLeft}>
                <span
                  className="text-sm uppercase tracking-wider"
                  style={{ color: "var(--color-cream)" }}
                >
                  Foundation Knowledge
                </span>
                <h2 className="font-serif text-4xl md:text-5xl font-bold mt-4 mb-6 text-white">
                  What Is Stem Cell Therapy?
                </h2>
                <p
                  className="text-lg leading-relaxed"
                  style={{ color: "var(--color-cream)" }}
                >
                  Stem cells are special cells that can self-renew and can
                  mature into other cell types. Stem cell therapy is any
                  treatment that uses stem cells, or cells derived from them, to
                  repair or replace damaged cells or tissues.
                </p>
                <div
                  className="mt-8 p-6 rounded-xl"
                  style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                >
                  <p className="font-medium text-white">
                    That sounds powerful, and it can be. But it is also why stem
                    cell treatment needs stricter rules than most "wellness"
                    services.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeInRight} className="relative">
                {/* Stem Cells Image */}
                <div className="rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src={"/images/regenerative/what-is-stem-cell.webp"}
                    alt="Microscopic view of stem cells"
                    className="w-full h-100 object-cover"
                  />
                </div>

                {/* Overlay Card */}
                <div
                  className="absolute -bottom-6 -left-6 p-6 rounded-2xl backdrop-blur-md"
                  style={{ backgroundColor: "var(--color-glass)" }}
                >
                  <h3
                    className="font-serif text-lg font-bold mb-2"
                    style={{ color: "var(--color-wine)" }}
                  >
                    The Most Important Truth
                  </h3>
                  <p
                    className="text-sm mb-2"
                    style={{ color: "var(--color-brown)" }}
                  >
                    Not all "stem cell therapy" is the same.
                  </p>
                  <div className="space-y-1">
                    {[
                      "HSC transplant is most established",
                      "Other uses are experimental",
                      "Xenotransplantation prohibited",
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-1 text-xs"
                      >
                        <CheckCircle
                          className="w-3 h-3"
                          style={{ color: "var(--color-rose)" }}
                        />
                        <span style={{ color: "var(--color-taupe)" }}>
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Types of Stem Cells with Image Gallery */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20 px-4 sm:px-6 lg:px-8"
          style={{ backgroundColor: "var(--color-cream)" }}
        >
          <div className="max-w-7xl mx-auto">
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2
                className="font-serif text-4xl md:text-5xl font-bold mb-4"
                style={{ color: "var(--color-brown)" }}
              >
                Types of Stem Cells in Malaysia
              </h2>
              <p className="text-lg" style={{ color: "var(--color-taupe)" }}>
                Understanding the terminology clinics use
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* HSCs */}
              <motion.div
                variants={scaleIn}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src="/images/regenerative/hematopoietic-stem-cells.webp"
                    alt="Hematopoietic stem cells"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mb-6 -mt-12 bg-white shadow-lg"
                    style={{ color: "var(--color-wine)" }}
                  >
                    <Droplets
                      className="w-6 h-6"
                      style={{ color: "var(--color-wine)" }}
                    />
                  </div>
                  <h3
                    className="font-serif text-xl font-bold mb-3"
                    style={{ color: "var(--color-brown)" }}
                  >
                    Hematopoietic Stem Cells (HSCs)
                  </h3>
                  <p
                    className="text-sm mb-4"
                    style={{ color: "var(--color-taupe)" }}
                  >
                    "Blood-forming" stem cells used in bone marrow or blood stem
                    cell transplantation. This is the best-established form
                    globally.
                  </p>
                  <div
                    className="p-4 rounded-lg"
                    style={{ backgroundColor: "var(--color-cream)" }}
                  >
                    <span
                      className="text-xs font-semibold"
                      style={{ color: "var(--color-wine)" }}
                    >
                      ✓ Established by ISSCR & Malaysian guidance
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* MSCs */}
              <motion.div
                variants={scaleIn}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src="/images/regenerative/mysenchymal-stem-cell.webp"
                    alt="Mesenchymal stem cells in lab"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mb-6 -mt-12 bg-white shadow-lg"
                    style={{ color: "var(--color-rose)" }}
                  >
                    <Microscope
                      className="w-6 h-6"
                      style={{ color: "var(--color-rose)" }}
                    />
                  </div>
                  <h3
                    className="font-serif text-xl font-bold mb-3"
                    style={{ color: "var(--color-brown)" }}
                  >
                    Mesenchymal Stem Cells (MSCs)
                  </h3>
                  <p
                    className="text-sm mb-4"
                    style={{ color: "var(--color-taupe)" }}
                  >
                    Often discussed for inflammation and tissue repair. Many KL
                    providers focus on MSC therapy, frequently from umbilical
                    cord Wharton's Jelly.
                  </p>
                  <div
                    className="p-4 rounded-lg"
                    style={{ backgroundColor: "var(--color-cream)" }}
                  >
                    <span
                      className="text-xs"
                      style={{ color: "var(--color-brown)" }}
                    >
                      ⚠️ Evolving area — ISSCR warns against routine commercial
                      use
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Embryonic & iPS */}
              <motion.div
                variants={scaleIn}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src="/images/regenerative/embryonic.webp"
                    alt="DNA research"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mb-6 -mt-12 bg-white shadow-lg"
                    style={{ color: "var(--color-taupe)" }}
                  >
                    <Activity
                      className="w-6 h-6"
                      style={{ color: "var(--color-taupe)" }}
                    />
                  </div>
                  <h3
                    className="font-serif text-xl font-bold mb-3"
                    style={{ color: "var(--color-brown)" }}
                  >
                    Embryonic & iPS Cells
                  </h3>
                  <p
                    className="text-sm mb-4"
                    style={{ color: "var(--color-taupe)" }}
                  >
                    Exist in scientific research and some clinical trials
                    globally. Not "routine clinic services."
                  </p>
                  <div
                    className="p-4 rounded-lg"
                    style={{ backgroundColor: "var(--color-cream)" }}
                  >
                    <span
                      className="text-xs"
                      style={{ color: "var(--color-brown)" }}
                    >
                      ⚠️ Malaysia treats embryonic stem cell therapy as
                      experimental
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Proven vs Experimental with Image */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left side - Text content */}
              <motion.div variants={fadeInLeft}>
                <div
                  className="rounded-3xl p-8 relative overflow-hidden"
                  style={{ backgroundColor: "var(--color-wine)" }}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                  <h3 className="font-serif text-3xl font-bold text-white mb-6">
                    What's Proven Today
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-white/10 rounded-xl p-4">
                      <p className="text-white">
                        "Best-established stem cell treatments are blood and
                        immune disorders and loss of bone marrow function,
                        treated with blood stem cell transplantation."
                      </p>
                    </div>
                    <p className="text-white/80 text-sm">
                      Malaysia's guideline aligns: hematopoietic and cord blood
                      stem cell transplantation are the most established.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Right side - Image with overlay text */}
              <motion.div variants={fadeInRight} className="relative">
                <img
                  src={"/images/regenerative/hematopoietic-stem-cells2.webp"}
                  alt="Medical research laboratory"
                  className="rounded-3xl w-full h-100 object-cover"
                />
                <div
                  className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl backdrop-blur-md"
                  style={{ backgroundColor: "var(--color-glass)" }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <AlertCircle
                      className="w-5 h-5"
                      style={{ color: "var(--color-rose)" }}
                    />
                    <h4
                      className="font-serif font-bold"
                      style={{ color: "var(--color-brown)" }}
                    >
                      Being Studied (Mixed Evidence)
                    </h4>
                  </div>
                  <p
                    className="text-sm mb-3"
                    style={{ color: "var(--color-taupe)" }}
                  >
                    Joints, autoimmune, neuro, metabolic — areas of active
                    research
                  </p>
                  <p className="text-xs italic">
                    ISSCR warns: unproven interventions need well-regulated
                    trials
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Nexus Clinic Approach with Image */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20 px-4 sm:px-6 lg:px-8"
          style={{ backgroundColor: "var(--color-cream)" }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <motion.div variants={fadeInLeft}>
                <h2
                  className="font-serif text-4xl md:text-5xl font-bold mb-4"
                  style={{ color: "var(--color-brown)" }}
                >
                  The Nexus Clinic Approach
                </h2>
                <p className="text-lg" style={{ color: "var(--color-taupe)" }}>
                  Patient-safe mindset, structured journey, MOH-aligned
                  procedures
                </p>
              </motion.div>
              <motion.div variants={fadeInRight} className="relative">
                <img
                  src={"/images/clinic/consultation.png"}
                  alt="Private consultation at Nexus Clinic"
                  className="rounded-2xl shadow-xl w-full h-64 object-cover"
                />
                <div
                  className="absolute -bottom-4 -left-4 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-md"
                  style={{
                    backgroundColor: "var(--color-wine)",
                    color: "white",
                  }}
                >
                  Private & Confidential
                </div>
              </motion.div>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  step: 1,
                  title: "Consultation & Screening",
                  desc: "We start with what you feel, what you've tried, and your actual diagnosis.",
                },
                {
                  step: 2,
                  title: "Clear Classification",
                  desc: "Established indication? Investigational? Or redirect to standard care.",
                },
                {
                  step: 3,
                  title: "Informed Consent",
                  desc: "Clearly state if treatment is unproven, explain risks and alternatives.",
                },
                {
                  step: 4,
                  title: "Delivery & Monitoring",
                  desc: "IV infusion or local injection with proper follow-up plan.",
                },
              ].map((item, idx) => (
                <motion.div key={idx} variants={scaleIn} className="relative">
                  <div className="bg-white rounded-2xl p-6 shadow-lg h-full">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center mb-4 font-bold text-white"
                      style={{ backgroundColor: "var(--color-wine)" }}
                    >
                      {item.step}
                    </div>
                    <h3
                      className="font-serif text-lg font-bold mb-2"
                      style={{ color: "var(--color-brown)" }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="text-sm"
                      style={{ color: "var(--color-taupe)" }}
                    >
                      {item.desc}
                    </p>
                  </div>
                  {idx < 3 && (
                    <ChevronRight className="hidden md:block absolute -right-3 top-1/2 transform -translate-y-1/2 text-rose" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Patient Care Image Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative h-125 overflow-hidden"
        >
          <img
            src={"/images/clinic/patient-care.png"}
            alt="Patient care at Nexus Clinic"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-linear(to right, var(--color-brown), transparent)",
            }}
          ></div>
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <motion.div variants={fadeInLeft} className="max-w-xl text-white">
                <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
                  Your Safety Is Our Priority
                </h2>
                <p className="text-xl mb-8 text-cream">
                  Every patient journey is unique, structured, and
                  evidence-based.
                </p>
                <div className="flex gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold">1000+</div>
                    <div className="text-sm text-cream">Patients Treated</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">15+</div>
                    <div className="text-sm text-cream">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">100%</div>
                    <div className="text-sm text-cream">MOH Compliant</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Benefits & Risks with Image */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Benefits */}
              <motion.div variants={fadeInLeft}>
                <div
                  className="rounded-3xl p-8"
                  style={{ backgroundColor: "var(--color-cream)" }}
                >
                  <Heart
                    className="w-12 h-12 mb-6"
                    style={{ color: "var(--color-rose)" }}
                  />
                  <h3
                    className="font-serif text-3xl font-bold mb-6"
                    style={{ color: "var(--color-brown)" }}
                  >
                    Benefits People Hope For
                  </h3>
                  <ul className="space-y-4">
                    {[
                      "Less pain",
                      "Better movement",
                      "Better energy",
                      "Improved function",
                      "Slower progression of chronic condition",
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <CheckCircle
                          className="w-5 h-5"
                          style={{ color: "var(--color-wine)" }}
                        />
                        <span style={{ color: "var(--color-brown)" }}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 p-4 rounded-lg bg-white">
                    <p className="text-sm italic">
                      Look for measurable outcomes (pain score, walking
                      distance, blood markers). Set realistic timeline, plan
                      follow-up, not "one shot and done."
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Risks with Image */}
              <motion.div variants={fadeInRight}>
                <div className="rounded-3xl overflow-hidden mb-6">
                  <img
                    src="/images/regenerative/benefits-people-hope.webp"
                    alt="Medical consultation discussing risks"
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div
                  className="rounded-3xl p-8 border-2"
                  style={{ borderColor: "var(--color-wine)" }}
                >
                  <AlertCircle
                    className="w-12 h-12 mb-6"
                    style={{ color: "var(--color-wine)" }}
                  />
                  <h3
                    className="font-serif text-3xl font-bold mb-6"
                    style={{ color: "var(--color-brown)" }}
                  >
                    Risks & Why Safety Matters
                  </h3>
                  <p
                    className="mb-4 font-medium"
                    style={{ color: "var(--color-brown)" }}
                  >
                    Stem cells are not vitamins. They are living materials. That
                    brings real risk.
                  </p>
                  <div className="space-y-3 mb-6">
                    {[
                      "Infection",
                      "Immune reactions",
                      "Fever and inflammatory reactions",
                      "Clotting risk",
                      "Unknown long-term effects",
                      "Financial harm from repeated unproven sessions",
                    ].map((risk, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <XCircle
                          className="w-4 h-4 mt-1 shrink-0"
                          style={{ color: "var(--color-wine)" }}
                        />
                        <span
                          className="text-sm"
                          style={{ color: "var(--color-taupe)" }}
                        >
                          {risk}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Clinic Location Image */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative h-100 overflow-hidden"
        >
          <img
            src={"/images/clinic/interior.png"}
            alt="Nexus Clinic interior"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-linear(to left, var(--color-wine), transparent)",
            }}
          ></div>
          <div className="absolute inset-0 flex items-center justify-end">
            <motion.div
              variants={fadeInRight}
              className="max-w-xl text-white text-right p-8"
            >
              <h2 className="font-serif text-4xl font-bold mb-4">
                Visit Us at KLCC
              </h2>
              <p className="text-lg mb-6">Wisma UOA II, Jalan Pinang</p>
              <div className="flex justify-end gap-4">
                <div className="text-center bg-white/20 backdrop-blur-sm p-4 rounded-2xl">
                  <Phone className="w-6 h-6 mx-auto mb-2" />
                  <p className="text-sm">016-7025699</p>
                </div>
                <div className="text-center bg-white/20 backdrop-blur-sm p-4 rounded-2xl">
                  <MapPin className="w-6 h-6 mx-auto mb-2" />
                  <p className="text-sm">LG 10</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* FAQ Section */}
        <FAQ data={faqs} />

        {/* Final CTA with Image Background */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
        >
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070&auto=format&fit=crop"
              alt="Modern medical facility"
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{ backgroundColor: "var(--color-wine)", opacity: 0.9 }}
            ></div>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
            <motion.h2
              variants={fadeInUp}
              className="font-serif text-4xl md:text-5xl font-bold mb-6"
            >
              Start with Clarity
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl mb-12 text-cream">
              If you're searching for stem cell therapy in Malaysia or
              regenerative medicine in Kuala Lumpur, start with a private
              consult focused on your diagnosis, your risks, and what is
              realistically achievable.
            </motion.p>

            <motion.div variants={fadeInUp} className="space-y-4">
              <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm max-w-md mx-auto">
                <p className="font-serif text-lg mb-2">
                  Nexus Clinic Kuala Lumpur
                </p>
                <p className="text-sm text-cream mb-4">
                  LG 10, Lower Ground Floor, Wisma UOA II, Jalan Pinang, 50450
                  Kuala Lumpur
                </p>
                <div className="flex items-center justify-center gap-4">
                  <Phone className="w-5 h-5" />
                  <span>016-7025699 / 03-21635699</span>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white rounded-full font-medium text-lg shadow-xl"
                style={{ color: "var(--color-wine)" }}
              >
                Schedule Your Private Consultation
              </motion.button>
            </motion.div>
          </div>
        </motion.section>
      </main>
    </>
  );
};

export default StemCellLanding;
