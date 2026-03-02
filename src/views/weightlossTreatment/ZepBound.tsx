"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Heart,
  ChevronRight,
  AlertCircle,
  CheckCircle2,
  Sparkles,
  Activity,
  Salad,
  Moon,
  Droplets,
  ArrowRight,
  Scale,
  Award,
  Users,
  Calendar,
  MessageCircle,
  FileText,
  Pill,
  AlertTriangle,
  Zap,
  Coffee,
  Info,
  MapPin,
} from "lucide-react";
import {
  staggerContainer,
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  scaleIn,
} from "../../lib/animations";
import FAQ from "../../components/FAQ";
import SectionBeforeAfter from "../../components/BeforeAfterCustomize";
import { useTranslation } from "@/src/i18n/client";
import { fallbackLng } from "@/src/i18n/settings";

const ZepboundLanding = ({ locale = fallbackLng }: { locale?: string }) => {
  const { t } = useTranslation(locale, "zepbound");
  const faqs = [
    {
      q: "How long does it take to see results?",
      a: "Many people notice appetite changes early, but visible weight loss is usually more obvious over weeks to months. Longer trials show larger total loss over extended use.",
    },
    {
      q: "Is Zepbound available in Malaysia?",
      a: "Yes. Malaysia's NPRA lists tirzepatide among registered GLP-1 related products. Availability and branding can vary, so your clinic will confirm during consultation.",
    },
    {
      q: "What happens if I stop taking it?",
      a: "Do not stop without speaking to your doctor. Many people regain weight after stopping weight loss medicines, so a maintenance plan matters.",
    },
    {
      q: "Which is better, Zepbound or Wegovy?",
      a: "They work differently (tirzepatide acts on GIP and GLP-1; semaglutide is GLP-1 only). 'Better' depends on your health profile and side effect tolerance.",
    },
  ];

  const transformations = [
    {
      id: 1,
      before: "/images/B&A-w/B&A-zepbound1.webp",
      after: "/images/B&A-w/B&A-zepbound1.webp",
    },
    {
      id: 2,
      before: "/images/B&A-w/B&A-zepbound2.webp",
      after: "/images/B&A-w/B&A-zepbound2.webp",
    },
    {
      id: 3,
      before: "/images/B&A-w/B&A-zepbound3.webp",
      after: "/images/B&A-w/B&A-zepbound3.webp",
    },
  ];
  return (
    <>
      <main className="min-h-screen bg-light font-['Inter',sans-serif] overflow-hidden">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-wine filter blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-rose filter blur-3xl"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="grid lg:grid-cols-2 gap-16 items-center"
            >
              <motion.div variants={fadeInLeft}>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full mb-8 border border-taupe/20"
                >
                  <Sparkles className="w-4 h-4 text-wine" />
                  <span className="text-sm font-medium text-brown">
                    Doctor-Monitored Programme
                  </span>
                </motion.div>

                <motion.h1
                  variants={fadeInUp}
                  className="text-5xl md:text-6xl lg:text-7xl font-serif text-brown leading-tight mb-6"
                >
                  Stuck at the same weight?
                  <span className="block text-wine mt-2">
                    Let's change the story.
                  </span>
                </motion.h1>

                <motion.p
                  variants={fadeInUp}
                  className="text-xl text-taupe mb-8 max-w-lg"
                >
                  Real appetite control, steady progress, and a plan you can
                  actually live with. No perfection needed—just a safer system
                  that fits your body and lifestyle.
                </motion.p>

                <motion.div
                  variants={fadeInUp}
                  className="flex flex-wrap gap-4"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group bg-wine text-white px-8 py-4 rounded-full font-medium hover:bg-rose transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
                  >
                    Book Your Consultation
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white/70 backdrop-blur-sm border-2 border-wine/30 text-brown px-8 py-4 rounded-full font-medium hover:bg-white hover:border-wine transition-all duration-300"
                  >
                    Learn More
                  </motion.button>
                </motion.div>
              </motion.div>

              <motion.div variants={fadeInRight} className="relative">
                <motion.div
                  animate={{
                    y: [0, -20, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative z-10"
                >
                  <div className="bg-white/60 backdrop-blur-xl rounded-3xl p-8 border border-white/50 shadow-2xl">
                    <img
                      src="/images/main/zepbound.webp"
                      alt="zepbound"
                      className="rounded"
                    />

                    <div className="mt-6 p-4 bg-linear-to-r from-wine/10 to-rose/10 rounded-xl">
                      <p className="text-brown text-sm">
                        <span className="font-bold">
                          Zepbound (tirzepatide):
                        </span>{" "}
                        Dual-hormone approach for natural appetite control
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Decorative elements */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute -top-10 -right-10 w-40 h-40 border-2 border-wine/20 rounded-full"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute -bottom-10 -left-10 w-32 h-32 border-2 border-rose/20 rounded-full"
                />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Quick Trust Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          viewport={{ once: true, margin: "-100px" }}
          className="py-20 bg-white/50 backdrop-blur-sm"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif text-brown mb-4">
                Why Nexus Clinic?
              </h2>
              <p className="text-taupe text-lg max-w-2xl mx-auto">
                Evidence-based care with a personal touch, right in the heart of
                Kuala Lumpur
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {[
                { icon: Award, text: "Doctor-Led Assessment" },
                { icon: Users, text: "Personal Guidance" },
                { icon: FileText, text: "Evidence-Based" },
                { icon: Calendar, text: "Clear Follow-ups" },
                { icon: MapPin, text: "KL City Centre" },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={scaleIn}
                  whileHover={{ y: -5 }}
                  className="bg-cream rounded-2xl p-6 text-center group cursor-pointer"
                >
                  <item.icon className="w-8 h-8 text-wine mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <p className="text-sm text-brown font-medium">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* What is Zepbound Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-br from-cream to-white"></div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={staggerContainer}
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-16 items-center"
            >
              <motion.div variants={fadeInLeft}>
                <h2 className="text-4xl md:text-5xl font-serif text-brown mb-6">
                  What is Zepbound, and why is everyone talking about it?
                </h2>

                <div className="space-y-6 text-taupe">
                  <p className="text-lg">
                    Zepbound is the brand name for{" "}
                    <span className="font-bold text-wine">tirzepatide</span>{" "}
                    used for chronic weight management. It's a prescription
                    injection taken once weekly, alongside a reduced-calorie
                    diet and increased physical activity.
                  </p>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-wine"
                  >
                    <p className="text-brown italic">
                      "Here's the key point: Zepbound works on hunger signals
                      and helps you feel full sooner, so eating less feels more
                      natural—not like a daily fight."
                    </p>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div variants={fadeInRight} className="relative">
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
                  <h3 className="text-xl font-bold text-brown mb-4">
                    Zepbound vs Mounjaro
                  </h3>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-wine mt-2"></div>
                      <p className="text-taupe">
                        Same active ingredient:{" "}
                        <span className="font-bold text-brown">
                          tirzepatide
                        </span>
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-rose mt-2"></div>
                      <p className="text-taupe">
                        Different marketing for different uses
                      </p>
                    </div>

                    <div className="bg-cream p-4 rounded-xl mt-4">
                      <p className="text-sm text-brown">
                        <span className="font-bold">Malaysia note:</span>{" "}
                        Clinics may discuss "tirzepatide programmes" rather than
                        US brand names. NPRA registers tirzepatide among GLP-1
                        products.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Floating elements */}
                <motion.div
                  animate={{ rotate: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="absolute -bottom-10 -right-10 w-32 h-32 bg-wine/5 rounded-full blur-2xl"
                />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* before after section  */}
        <SectionBeforeAfter transformations={transformations} />

        {/* How it Works Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={staggerContainer}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <motion.h2
                variants={fadeInUp}
                className="text-4xl md:text-5xl font-serif text-brown mb-4"
              >
                How Zepbound Works
                <span className="block text-lg font-sans text-taupe mt-2">
                  (in human language)
                </span>
              </motion.h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Coffee,
                  title: "Before",
                  desc: "Constant cravings, never feel full",
                },
                {
                  icon: Zap,
                  title: "With Zepbound",
                  desc: "Activate GLP-1 & GIP receptors",
                },
                {
                  icon: Heart,
                  title: "Result",
                  desc: "Satisfied with smaller portions",
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={scaleIn}
                  whileHover={{ y: -10 }}
                  className="relative group"
                >
                  <div className="bg-cream rounded-3xl p-8 h-full group-hover:shadow-xl transition-all duration-300">
                    <div className="w-16 h-16 bg-wine/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <item.icon className="w-8 h-8 text-wine" />
                    </div>
                    <h3 className="text-xl font-bold text-brown mb-3">
                      {item.title}
                    </h3>
                    <p className="text-taupe">{item.desc}</p>

                    {idx < 2 && (
                      <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 hidden md:block">
                        <ChevronRight className="w-6 h-6 text-rose" />
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={fadeInUp}
              className="mt-12 p-6 bg-linear-to-r from-wine to-rose rounded-2xl text-white text-center"
            >
              <p className="text-lg">
                This is not about willpower. It's about changing the signals
                that were pushing you to overeat.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Candidate Criteria Section */}
        <section className="py-24 relative">
          <div className="absolute inset-0 bg-cream/50"></div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={staggerContainer}
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-16"
            >
              <motion.div variants={fadeInLeft}>
                <h2 className="text-4xl font-serif text-brown mb-6">
                  Who can be a candidate?
                </h2>

                <div className="space-y-6">
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <h3 className="text-lg font-bold text-wine mb-3">
                      FDA Approval Criteria:
                    </h3>
                    <ul className="space-y-3">
                      {[
                        "BMI 30 or higher",
                        "BMI 27 or higher with weight-related condition (high blood pressure, type 2 diabetes, high cholesterol)",
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                          <span className="text-taupe">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-wine/20">
                    <p className="text-sm text-brown">
                      <span className="font-bold">Important:</span> Even if you
                      fit BMI ranges, a medical review matters. Some people
                      should not use tirzepatide due to risks and
                      contraindications.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeInRight}>
                <div className="bg-white rounded-2xl p-8 shadow-xl border-t-4 border-rose">
                  <div className="flex items-center gap-3 mb-6">
                    <AlertTriangle className="w-6 h-6 text-rose" />
                    <h3 className="text-xl font-bold text-brown">
                      Who should NOT use Zepbound
                    </h3>
                  </div>

                  <ul className="space-y-4">
                    {[
                      "History of medullary thyroid carcinoma (MTC)",
                      "MEN2 (Multiple Endocrine Neoplasia syndrome type 2)",
                      "Serious allergic reaction to tirzepatide",
                      "Pancreatitis history (caution)",
                      "Gallbladder disease (caution)",
                      "Kidney issues (caution)",
                    ].map((item, idx) => (
                      <motion.li
                        key={idx}
                        whileHover={{ x: 5 }}
                        className="flex items-start gap-3 text-taupe"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-rose mt-2"></div>
                        {item}
                      </motion.li>
                    ))}
                  </ul>

                  <div className="mt-6 p-4 bg-cream rounded-xl">
                    <p className="text-sm text-brown">
                      A proper clinic does not "sell injections." A proper
                      clinic checks risk, monitors you, and adjusts safely.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Results Timeline */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={staggerContainer}
              viewport={{ once: true }}
            >
              <motion.h2
                variants={fadeInUp}
                className="text-4xl md:text-5xl font-serif text-brown text-center mb-4"
              >
                What results can you realistically expect?
              </motion.h2>

              <motion.p
                variants={fadeInUp}
                className="text-taupe text-center max-w-2xl mx-auto mb-16"
              >
                Clinical results vary, but here's the typical pattern patients
                experience
              </motion.p>

              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-linear-to-r from-wine/20 via-rose to-wine/20 hidden md:block"></div>

                <div className="grid md:grid-cols-4 gap-6">
                  {[
                    {
                      weeks: "1-4",
                      title: "Early Days",
                      desc: "Appetite shifts, early adjustment",
                      icon: Activity,
                    },
                    {
                      weeks: "5-12",
                      title: "Steady Loss",
                      desc: "Visible progress begins",
                      icon: Scale,
                    },
                    {
                      weeks: "3-6 months",
                      title: "New Normal",
                      desc: "Habits feel easier",
                      icon: Heart,
                    },
                    {
                      weeks: "Long-term",
                      title: "Maintenance",
                      desc: "The real win",
                      icon: Award,
                    },
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      variants={scaleIn}
                      whileHover={{ y: -5 }}
                      className="relative bg-cream rounded-2xl p-6 text-center group"
                    >
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-wine text-white px-3 py-1 rounded-full text-xs font-bold">
                        {item.weeks}
                      </div>
                      <item.icon className="w-8 h-8 text-wine mx-auto mb-3 mt-4 group-hover:rotate-12 transition-transform" />
                      <h3 className="font-bold text-brown mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-taupe">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.div variants={fadeInUp} className="mt-12 text-center">
                <p className="text-lg text-brown italic">
                  "At Nexus Clinic Kuala Lumpur, the goal is not 'fast.' The
                  goal is safe, steady, and maintainable."
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Programme Journey */}
        <section className="py-24 bg-linear-to-b from-cream to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={staggerContainer}
              viewport={{ once: true }}
            >
              <motion.h2
                variants={fadeInUp}
                className="text-4xl md:text-5xl font-serif text-brown text-center mb-16"
              >
                Your Journey at Nexus Clinic
              </motion.h2>

              <div className="grid md:grid-cols-4 gap-8">
                {[
                  {
                    step: "01",
                    title: "First Consult",
                    desc: "Your real story matters—sleep, stress, cravings, history",
                    icon: MessageCircle,
                  },
                  {
                    step: "02",
                    title: "Safety Checks",
                    desc: "BMI, blood pressure, labs, medication review",
                    icon: Shield,
                  },
                  {
                    step: "03",
                    title: "Malaysia Life Plan",
                    desc: "Nasi campur? Grab food? Family dinners? We get it.",
                    icon: Coffee,
                  },
                  {
                    step: "04",
                    title: "Ongoing Monitoring",
                    desc: "Side effects, plateaus, motivation—we're with you",
                    icon: Heart,
                  },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.05 }}
                    className="relative"
                  >
                    <div className="bg-white rounded-2xl p-8 shadow-lg h-full">
                      <div className="text-5xl font-serif text-wine/20 mb-4">
                        {item.step}
                      </div>
                      <item.icon className="w-8 h-8 text-wine mb-4" />
                      <h3 className="text-xl font-bold text-brown mb-3">
                        {item.title}
                      </h3>
                      <p className="text-taupe">{item.desc}</p>
                    </div>

                    {idx < 3 && (
                      <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 hidden lg:block">
                        <ArrowRight className="w-6 h-6 text-rose" />
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Side Effects & Safety */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={staggerContainer}
              viewport={{ once: true }}
            >
              <motion.h2
                variants={fadeInUp}
                className="text-4xl md:text-5xl font-serif text-brown text-center mb-4"
              >
                Side Effects & Safety
              </motion.h2>

              <motion.p
                variants={fadeInUp}
                className="text-taupe text-center max-w-2xl mx-auto mb-16"
              >
                You deserve clear answers. Here's what you need to know.
              </motion.p>

              <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                  variants={fadeInLeft}
                  className="bg-cream rounded-2xl p-8"
                >
                  <h3 className="text-xl font-bold text-brown mb-6 flex items-center gap-2">
                    <Info className="w-5 h-5 text-wine" />
                    Common Side Effects
                  </h3>

                  <div className="grid grid-cols-2 gap-3">
                    {[
                      "Nausea",
                      "Diarrhea",
                      "Vomiting",
                      "Constipation",
                      "Abdominal pain",
                      "Indigestion",
                      "Fatigue",
                      "Heartburn",
                    ].map((effect, idx) => (
                      <motion.div
                        key={idx}
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-2 text-taupe"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-wine"></div>
                        <span className="text-sm">{effect}</span>
                      </motion.div>
                    ))}
                  </div>

                  <p className="mt-6 text-sm text-brown bg-white/50 p-4 rounded-xl">
                    Side effects often show up most during dose increases, then
                    reduce over time for many people.
                  </p>
                </motion.div>

                <motion.div
                  variants={fadeInRight}
                  className="bg-cream rounded-2xl p-8"
                >
                  <h3 className="text-xl font-bold text-brown mb-6 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-rose" />
                    Serious Risks
                  </h3>

                  <ul className="space-y-3">
                    {[
                      "Thyroid tumors",
                      "Pancreatitis",
                      "Gallbladder problems",
                      "Kidney issues from dehydration",
                      "Serious allergic reactions",
                      "Hypoglycemia (with diabetes meds)",
                      "Mood changes",
                    ].map((risk, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-taupe"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-rose mt-2"></div>
                        <span>{risk}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 p-4 bg-white rounded-xl border-l-4 border-rose">
                    <p className="text-sm font-bold text-brown">
                      This is exactly why doctor monitoring is not optional. It
                      is the point.
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Surgery Warning */}
              <motion.div
                variants={fadeInUp}
                className="mt-8 p-6 bg-linear-to-r from-rose/10 to-wine/10 rounded-2xl border border-wine/30"
              >
                <div className="flex items-start gap-4">
                  <AlertCircle className="w-6 h-6 text-wine shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-brown mb-2">
                      Important for Surgery or Sedation
                    </h4>
                    <p className="text-taupe text-sm">
                      Malaysia's NPRA has reviewed safety concerns about GLP-1
                      medicines and aspiration risk during anaesthesia. If
                      you're scheduled for a procedure, tell your doctor and
                      anaesthesia team early.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Cost Section */}
        <section className="py-24 bg-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={staggerContainer}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto"
            >
              <motion.h2
                variants={fadeInUp}
                className="text-4xl md:text-5xl font-serif text-brown mb-6"
              >
                Investment in Your Health
              </motion.h2>

              <motion.p variants={fadeInUp} className="text-taupe text-lg mb-8">
                Cost depends on your programme and dose plan. We believe in
                transparency.
              </motion.p>

              <motion.div
                variants={scaleIn}
                className="bg-white rounded-3xl p-8 shadow-xl"
              >
                <div className="grid md:grid-cols-2 gap-8 text-left">
                  <div>
                    <h4 className="font-bold text-brown mb-4">
                      What affects cost:
                    </h4>
                    <ul className="space-y-3">
                      {[
                        "Medicine brand & supply route",
                        "Your dose level over time",
                        "Frequency of monitoring",
                        "Lab work if needed",
                        "Nutrition coaching options",
                      ].map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2 text-taupe"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-wine"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-brown mb-4">
                      Best practice:
                    </h4>
                    <p className="text-taupe mb-4">
                      Ask for a clear breakdown of consultation fees, medicine
                      cost, monitoring, and adjustment policies.
                    </p>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full bg-wine text-white py-4 rounded-xl font-medium hover:bg-rose transition-colors"
                    >
                      Request Cost Breakdown
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={staggerContainer}
              viewport={{ once: true }}
            >
              <motion.h2
                variants={fadeInUp}
                className="text-4xl md:text-5xl font-serif text-brown text-center mb-16"
              >
                Zepbound vs Others
              </motion.h2>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    name: "Zepbound",
                    active: "Tirzepatide",
                    type: "GIP + GLP-1",
                    color: "text-wine",
                    bg: "bg-wine/10",
                  },
                  {
                    name: "Mounjaro",
                    active: "Tirzepatide",
                    type: "GIP + GLP-1",
                    color: "text-rose",
                    bg: "bg-rose/10",
                  },
                  {
                    name: "Wegovy/Ozempic",
                    active: "Semaglutide",
                    type: "GLP-1 only",
                    color: "text-brown",
                    bg: "bg-brown/10",
                  },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    variants={scaleIn}
                    whileHover={{ y: -10 }}
                    className="bg-cream rounded-2xl p-8 text-center group"
                  >
                    <div
                      className={`w-16 h-16 ${item.bg} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}
                    >
                      <Pill className={`w-8 h-8 ${item.color}`} />
                    </div>
                    <h3 className="text-2xl font-bold text-brown mb-2">
                      {item.name}
                    </h3>
                    <p className={`${item.color} font-medium mb-1`}>
                      {item.active}
                    </p>
                    <p className="text-sm text-taupe">{item.type}</p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                variants={fadeInUp}
                className="mt-12 p-6 bg-linear-to-r from-cream to-white rounded-2xl"
              >
                <p className="text-brown text-center">
                  <span className="font-bold">Note:</span> Some reports note
                  higher average weight loss in tirzepatide trials, but your
                  best option depends on your health history and doctor
                  guidance.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Fat Freezing Clarification */}
        <section className="py-16 bg-cream">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={staggerContainer}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-xl"
            >
              <motion.div
                variants={fadeInUp}
                className="flex items-center gap-4 mb-6"
              >
                <div className="w-12 h-12 bg-wine/10 rounded-xl flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-wine" />
                </div>
                <h3 className="text-2xl font-bold text-brown">
                  Is this the same as fat freezing?
                </h3>
              </motion.div>

              <motion.p variants={fadeInUp} className="text-taupe text-lg mb-4">
                <span className="font-bold text-wine">No.</span> And this is
                important for expectations.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="grid md:grid-cols-2 gap-6 mt-6"
              >
                <div className="p-4 bg-cream rounded-xl">
                  <h4 className="font-bold text-brown mb-2">Fat Freezing</h4>
                  <p className="text-sm text-taupe">
                    Targets specific pockets of fat. Reshapes areas. Doesn't
                    change appetite.
                  </p>
                </div>

                <div className="p-4 bg-wine/10 rounded-xl border border-wine/20">
                  <h4 className="font-bold text-brown mb-2">
                    Zepbound Programme
                  </h4>
                  <p className="text-sm text-taupe">
                    Appetite regulation, fullness, metabolic support. Reduces
                    overall body weight.
                  </p>
                </div>
              </motion.div>

              <motion.p
                variants={fadeInUp}
                className="mt-6 text-sm text-brown italic"
              >
                Some people do both, but the right order matters. Usually,
                medical weight loss first, contouring later.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Success Habits */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={staggerContainer}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <motion.h2
                variants={fadeInUp}
                className="text-4xl md:text-5xl font-serif text-brown mb-4"
              >
                Better Results
                <span className="block text-lg font-sans text-taupe mt-2">
                  (without turning your life upside down)
                </span>
              </motion.h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Salad,
                  habit: "Protein at each meal",
                  desc: "Stay full longer",
                },
                {
                  icon: Droplets,
                  habit: "Water & electrolytes",
                  desc: "If nausea or constipation hits",
                },
                {
                  icon: Activity,
                  habit: "Light movement",
                  desc: "Protect muscle and mood",
                },
                {
                  icon: Moon,
                  habit: "Prioritize sleep",
                  desc: "Hunger hormones worsen when sleep is poor",
                },
                {
                  icon: Coffee,
                  habit: "Smaller meals",
                  desc: "When appetite changes",
                },
                {
                  icon: Heart,
                  habit: "No crash diets",
                  desc: "You want fat loss, not burnout",
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={scaleIn}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-linear-to-br from-cream to-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <item.icon className="w-8 h-8 text-wine mb-4" />
                  <h3 className="font-bold text-brown mb-2">{item.habit}</h3>
                  <p className="text-sm text-taupe">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <FAQ data={faqs} />

        {/* Final CTA */}
        <section className="relative py-32 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full bg-linear-to-br from-wine to-rose"></div>
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 90, 0],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute top-10 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"
            />
            <motion.div
              animate={{
                scale: [1.2, 1, 1.2],
                rotate: [90, 0, 90],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute bottom-10 right-10 w-96 h-96 bg-black/10 rounded-full blur-3xl"
            />
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={{ once: true }}
            className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6"
            >
              Ready to talk to a doctor?
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-xl text-white/90 mb-12 max-w-2xl mx-auto"
            >
              If you're tired of yo-yo dieting and want a medically guided plan
              that feels realistic, book a consultation at Nexus Clinic Kuala
              Lumpur.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap justify-center gap-6"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#FFFFFF",
                  color: "#E11D48",
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-wine px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300"
              >
                Book Your Consultation
              </motion.button>

              <motion.button
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(255,255,255,0.2)",
                }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white/20 transition-all duration-300"
              >
                Call Us Now
              </motion.button>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="mt-12 flex justify-center gap-4 text-white/80 text-sm"
            >
              <span>Kuala Lumpur</span>
              <span>•</span>
              <span>Doctor-monitored</span>
              <span>•</span>
              <span>Evidence-based</span>
            </motion.div>
          </motion.div>
        </section>
      </main>
    </>
  );
};

export default ZepboundLanding;
