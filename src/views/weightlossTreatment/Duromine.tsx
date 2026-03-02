"use client";

import {
  staggerContainer,
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  scaleIn,
} from "../../lib/animations";
import { motion } from "framer-motion";
import {
  Activity,
  AlertCircle,
  AlertTriangle,
  ArrowRight,
  Brain,
  BrainCircuit,
  CalendarCheck,
  Check,
  CheckCircle2,
  ClipboardList,
  Clock,
  Droplet,
  FileCheck,
  Heart,
  Info,
  Lock,
  Moon,
  Pill,
  Scale,
  Shield,
  Stethoscope,
  Syringe,
  Target,
  Thermometer,
  TrendingDown,
  UserCheck,
  Utensils,
  Volume2,
  X,
  XCircle,
} from "lucide-react";
import FAQ from "../../components/FAQ";
import SectionBeforeAfter from "../../components/BeforeAfterCustomize";
import { useTranslation } from "@/src/i18n/client";
import { fallbackLng } from "@/src/i18n/settings";

const DuromineLandingPage = ({ locale = fallbackLng }: { locale?: string }) => {
  const { t } = useTranslation(locale, "duromine");
  const faqs = [
    {
      q: "Is Duromine safe for weight loss?",
      a: "It can be safe for the right person, when a doctor screens you properly and monitors you. It is not suitable for everyone, especially people with heart disease, uncontrolled blood pressure, pregnancy, or recent MAOI use.",
    },
    {
      q: "Do I need a prescription for Duromine in Malaysia?",
      a: "Yes. Duromine is treated as prescription medicine in practice, and phentermine is listed in Malaysia's poisons list, which supports controlled access.",
    },
    {
      q: "How fast does Duromine start working?",
      a: "Many people feel appetite changes early, sometimes within the first days. Weight change usually depends on food intake and consistency over the next weeks.",
    },
    {
      q: "Is Duromine the same as phentermine?",
      a: "Duromine contains phentermine as a modified-release resin complex.",
    },
    {
      q: "Can I drink alcohol while taking Duromine?",
      a: "Alcohol can increase nervous system side effects like dizziness or confusion, so it is commonly advised to avoid combining them.",
    },
  ];
  const transformations = [
    {
      id: 1,
      before: "/images/B&A-w/B&A-duromine1.webp",
      after: "/images/B&A-w/B&A-duromine1.webp",
    },
    {
      id: 2,
      before: "/images/B&A-w/B&A-duromine2.webp",
      after: "/images/B&A-w/B&A-duromine2.webp",
    },
    {
      id: 3,
      before: "/images/B&A-w/B&A-duromine3.webp",
      after: "/images/B&A-w/B&A-duromine3.webp",
    },
  ];
  return (
    <>
      <main className="min-h-screen bg-linear-to-b from-light to-cream font-[(--font-inter)]">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <motion.div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `radial-linear(circle at 30% 50%, var(--color-wine) 0%, transparent 25%),
                              radial-linear(circle at 80% 80%, var(--color-rose) 0%, transparent 30%)`,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 1.5 }}
          />

          <div className="container mx-auto px-4 py-20 md:py-28">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.div
                  variants={fadeInUp}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-wine/10 rounded-full mb-6"
                >
                  <Shield className="w-4 h-4 text-wine" />
                  <span className="text-sm font-medium text-wine">
                    Doctor Monitored at Nexus Clinic KL
                  </span>
                </motion.div>

                <motion.h1
                  variants={fadeInUp}
                  className="font-[(--font-georgia)] text-4xl md:text-5xl lg:text-6xl text-brown mb-6 leading-tight"
                >
                  Duromine Weight Loss Treatment in{" "}
                  <span className="text-wine relative">
                    Kuala Lumpur
                    <motion.span
                      className="absolute bottom-0 left-0 w-full h-1 bg-rose/30"
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ delay: 0.5, duration: 0.8 }}
                    />
                  </span>
                </motion.h1>

                <motion.p
                  variants={fadeInUp}
                  className="text-lg md:text-xl text-taupe mb-8 max-w-lg"
                >
                  Quiet the cravings. Take back control. Lose weight with a
                  doctor-led plan that fits real life.
                </motion.p>

                <motion.div
                  variants={fadeInUp}
                  className="flex flex-wrap gap-4"
                >
                  <button className="group bg-wine text-white px-8 py-4 rounded-full font-medium hover:bg-rose transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2">
                    Start Your Journey
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="border-2 border-wine text-wine px-8 py-4 rounded-full font-medium hover:bg-wine/5 transition-all duration-300">
                    Learn More
                  </button>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  className="flex items-center gap-6 mt-8 pt-8 border-t border-taupe/20"
                >
                  <div className="flex -space-x-2">
                    <div className="flex -space-x-4 rtl:space-x-reverse">
                      <img
                        className="w-10 h-10 border-2 border-buffer rounded-full"
                        src="/images/profile1.png"
                        alt="p1"
                      />
                      <img
                        className="w-10 h-10 border-2 border-buffer rounded-full"
                        src="/images/profile2.png"
                        alt="p2"
                      />
                      <img
                        className="w-10 h-10 border-2 border-buffer rounded-full"
                        src="/images/profile3.png"
                        alt="p3"
                      />
                      <img
                        className="w-10 h-10 border-2 border-buffer rounded-full"
                        src="/images/profile4.png"
                        alt="p4"
                      />
                    </div>
                  </div>
                  <p className="text-sm text-brown">
                    <span className="font-bold">200+</span> patients started
                    their journey
                  </p>
                </motion.div>
              </motion.div>

              <motion.div
                variants={scaleIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative z-10 bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white">
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      { icon: Brain, text: "Quiet food noise" },
                      { icon: Heart, text: "Doctor monitored" },
                      { icon: Shield, text: "Prescription only" },
                      { icon: Clock, text: "Short-term support" },
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        variants={fadeInUp}
                        custom={index}
                        className="text-center"
                      >
                        <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-wine/10 flex items-center justify-center">
                          <item.icon className="w-6 h-6 text-wine" />
                        </div>
                        <p className="text-sm text-brown">{item.text}</p>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div
                    className="mt-6 p-4 bg-cream rounded-2xl"
                    variants={fadeInUp}
                  >
                    <p className="text-sm text-brown">
                      <span className="font-bold text-wine">
                        NPRA registered
                      </span>{" "}
                      with MAL numbers for 15mg & 30mg capsules
                    </p>
                  </motion.div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-rose/20 rounded-full blur-2xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-wine/20 rounded-full blur-2xl" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-20 bg-white/50 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-8"
            >
              {[
                {
                  icon: UserCheck,
                  title: "Doctor Monitored",
                  desc: "Not guesswork. Real medical supervision.",
                },
                {
                  icon: FileCheck,
                  title: "Prescription Only",
                  desc: "Proper screening before any prescription",
                },
                {
                  icon: CalendarCheck,
                  title: "Ongoing Check-ins",
                  desc: "Stay safe and consistent with follow-ups",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="group p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-cream"
                >
                  <div className="w-12 h-12 mb-4 rounded-lg bg-wine/10 group-hover:bg-wine transition-colors duration-300 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-wine group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-brown mb-2 font-[(--font-georgia)]">
                    {item.title}
                  </h3>
                  <p className="text-taupe">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Quick Overview */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                variants={fadeInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <span className="text-sm font-medium text-wine uppercase tracking-wider">
                  Quick Overview
                </span>
                <h2 className="text-3xl md:text-4xl font-[(--font-georgia)] text-brown mt-2 mb-6">
                  For fast reading, here's what you need to know
                </h2>

                <div className="space-y-6">
                  {[
                    {
                      icon: Pill,
                      title: "What it is",
                      desc: "Prescription appetite suppressant with phentermine in modified-release capsule",
                    },
                    {
                      icon: Target,
                      title: "What it helps with",
                      desc: "Strong hunger, constant snacking, and 'food noise' early in your plan",
                    },
                    {
                      icon: BrainCircuit,
                      title: "How it works",
                      desc: "Affects appetite area of brain to help you feel less hungry",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      className="flex gap-4"
                    >
                      <div className="shrink-0 w-10 h-10 rounded-lg bg-wine/10 flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-wine" />
                      </div>
                      <div>
                        <h3 className="font-bold text-brown">{item.title}</h3>
                        <p className="text-taupe">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                  <div className="bg-linear-to-br from-wine to-rose rounded-3xl p-8 text-white">
                    <h3 className="text-2xl font-[(--font-georgia)] mb-4">
                      Important Note
                    </h3>
                    <p className="mb-4 opacity-90">
                      Duromine is meant to be used with a structured diet and
                      activity plan, under medical supervision.
                    </p>
                    <div className="bg-white/20 rounded-xl p-4 backdrop-blur-sm">
                      <p className="text-sm">
                        <span className="font-bold">
                          Not a fat-melting pill.
                        </span>{" "}
                        It does not target belly fat overnight. It helps you eat
                        less without constant hunger.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative rounded-3xl overflow-hidden shadow-xl">
                  <img
                    src="/images/main/duromine.webp"
                    alt="Duromine"
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-brown/40 to-transparent"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Who It's For Section */}
        <section className="py-20 bg-white/50 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <motion.span
                variants={fadeInUp}
                className="text-sm font-medium text-wine uppercase tracking-wider"
              >
                Who It's For
              </motion.span>
              <motion.h2
                variants={fadeInUp}
                className="text-3xl md:text-4xl font-[(--font-georgia)] text-brown mt-2 mb-4"
              >
                Is Duromine right for you?
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-taupe">
                Often considered for people who need short-term appetite support
                to start losing weight safely
              </motion.p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8">
              <motion.div
                variants={fadeInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-8 shadow-xl"
              >
                <h3 className="text-2xl font-[(--font-georgia)] text-brown mb-6 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-green-500" />
                  Suitable Candidates
                </h3>

                <div className="space-y-4">
                  {[
                    "Have obesity, or are significantly overweight",
                    "Tried diet and activity changes but derailed by cravings",
                    "Need short-term appetite support to start losing weight",
                    "BMI 30+ or BMI 27+ with weight-related health conditions",
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      className="flex items-start gap-3"
                    >
                      <Check className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                      <span className="text-brown">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-8 shadow-xl"
              >
                <h3 className="text-2xl font-[(--font-georgia)] text-brown mb-6 flex items-center gap-2">
                  <XCircle className="w-6 h-6 text-red-500" />
                  NOT Suitable For
                </h3>

                <div className="space-y-4">
                  {[
                    "Severe heart disease or rhythm problems",
                    "Uncontrolled high blood pressure",
                    "Hyperthyroidism or glaucoma",
                    "Pregnancy or breastfeeding",
                    "History of drug misuse",
                    "Recent MAOI medicine use",
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      className="flex items-start gap-3"
                    >
                      <X className="w-5 h-5 text-red-500 mt-0.5 shrink-0" />
                      <span className="text-brown">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-8 p-6 bg-amber-50 rounded-2xl border border-amber-200"
            >
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5" />
                <div>
                  <p className="font-bold text-brown">Alcohol Warning</p>
                  <p className="text-taupe">
                    Alcohol can increase nervous system side effects like
                    dizziness and confusion. Avoid combining with Duromine.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <motion.span
                variants={fadeInUp}
                className="text-sm font-medium text-wine uppercase tracking-wider"
              >
                How It Works
              </motion.span>
              <motion.h2
                variants={fadeInUp}
                className="text-3xl md:text-4xl font-[(--font-georgia)] text-brown mt-2 mb-4"
              >
                Understanding the science, simply
              </motion.h2>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                variants={fadeInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-linear-to-br from-wine to-rose rounded-3xl p-8 text-white">
                  <div className="flex items-center gap-3 mb-6">
                    <Volume2 className="w-8 h-8" />
                    <h3 className="text-2xl font-[(--font-georgia)]">
                      The Volume Knob
                    </h3>
                  </div>
                  <p className="text-lg mb-6 opacity-90">
                    Think of appetite like a volume knob. For some people, that
                    knob feels stuck on high.
                  </p>
                  <p>
                    Duromine helps lower that "hunger volume" by acting on brain
                    signals tied to appetite and fullness.
                  </p>
                </div>

                {/* Volume meter animation */}
                <motion.div
                  className="absolute -right-4 top-1/2 -translate-y-1/2 w-12 h-48 bg-white rounded-full shadow-xl overflow-hidden"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <motion.div
                    className="w-full bg-wine absolute bottom-0"
                    initial={{ height: "80%" }}
                    animate={{ height: "30%" }}
                    transition={{ delay: 1, duration: 1, ease: "easeOut" }}
                  />
                </motion.div>
              </motion.div>
              <motion.div
                variants={fadeInRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-[(--font-georgia)] text-brown mb-6">
                  When appetite is calmer, these things become easier:
                </h3>

                <div className="space-y-4">
                  {[
                    { icon: Utensils, text: "Saying no to random snacks" },
                    { icon: Scale, text: "Stopping at a normal portion" },
                    { icon: Moon, text: "Avoiding late-night overeating" },
                    {
                      icon: Activity,
                      text: "Staying consistent long enough to see results",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-md"
                    >
                      <div className="w-10 h-10 rounded-full bg-wine/10 flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-wine" />
                      </div>
                      <span className="text-brown">{item.text}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Journey at Nexus Clinic */}
        <section className="py-20 bg-white/50 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <motion.span
                variants={fadeInUp}
                className="text-sm font-medium text-wine uppercase tracking-wider"
              >
                Your Journey
              </motion.span>
              <motion.h2
                variants={fadeInUp}
                className="text-3xl md:text-4xl font-[(--font-georgia)] text-brown mt-2 mb-4"
              >
                What to expect at Nexus Clinic KL
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-taupe">
                A structured program that feels supportive, not overwhelming
              </motion.p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Medical Assessment",
                  icon: Stethoscope,
                  items: [
                    "Weight history & past attempts",
                    "Health conditions & medications",
                    "Blood pressure & heart checks",
                    "Lifestyle pattern review",
                  ],
                },
                {
                  step: "02",
                  title: "Your Custom Plan",
                  icon: ClipboardList,
                  items: [
                    "Simple nutrition targets",
                    "Realistic activity plan",
                    "Cravings & social meal strategies",
                    "Follow-up schedule",
                  ],
                },
                {
                  step: "03",
                  title: "Monitoring & Adjustments",
                  icon: Activity,
                  items: [
                    "Side effects tracking",
                    "Appetite response",
                    "Sleep changes",
                    "Blood pressure & pulse trends",
                  ],
                },
              ].map((phase, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="relative group"
                >
                  <div className="absolute -inset-0.5 bg-linear-to-r from-wine to-rose rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur" />
                  <div className="relative bg-white p-8 rounded-2xl shadow-lg h-full">
                    <span className="text-6xl font-[(--font-georgia)] text-wine/10 font-bold">
                      {phase.step}
                    </span>
                    <div className="mt-4">
                      <div className="w-12 h-12 mb-4 rounded-lg bg-wine/10 flex items-center justify-center">
                        <phase.icon className="w-6 h-6 text-wine" />
                      </div>
                      <h3 className="text-xl font-bold text-brown mb-4 font-[(--font-georgia)]">
                        {phase.title}
                      </h3>
                      <ul className="space-y-2">
                        {phase.items.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-2 text-sm text-taupe"
                          >
                            <Check className="w-4 h-4 text-wine" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-12 p-6 bg-wine/5 rounded-2xl border border-wine/20 text-center"
            >
              <p className="text-brown">
                <span className="font-bold">Important:</span> If Duromine is not
                appropriate, we will not push it. Your safety comes first.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <motion.div variants={fadeInLeft}>
                <span className="text-sm font-medium text-wine uppercase tracking-wider">
                  Realistic Expectations
                </span>
                <h2 className="text-3xl md:text-4xl font-[(--font-georgia)] text-brown mt-2 mb-6">
                  What results can you expect?
                </h2>

                <div className="space-y-4">
                  {[
                    "Appetite drops in the first days to week",
                    "Cravings feel less aggressive",
                    "Portion control becomes easier",
                    "Weight starts trending down within a few weeks",
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      className="flex items-start gap-3"
                    >
                      <TrendingDown className="w-5 h-5 text-green-500 mt-0.5" />
                      <span className="text-brown">{item}</span>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  variants={fadeInUp}
                  className="mt-8 p-4 bg-cream rounded-xl"
                >
                  <p className="text-sm text-brown italic">
                    "Results vary. Your body is your body. Duromine should sit
                    inside a full weight management plan that includes diet and
                    exercise. That's where long-term results come from."
                  </p>
                </motion.div>
              </motion.div>

              <motion.div variants={fadeInRight} className="relative">
                <div className="bg-white rounded-3xl p-8 shadow-xl border border-cream">
                  <h3 className="text-xl font-[(--font-georgia)] text-brown mb-6">
                    Progress Timeline
                  </h3>

                  <div className="space-y-6">
                    {[
                      {
                        week: "Week 1",
                        desc: "Appetite suppression begins",
                        progress: 20,
                      },
                      {
                        week: "Week 2-3",
                        desc: "Consistent portion control",
                        progress: 40,
                      },
                      {
                        week: "Week 4",
                        desc: "Visible weight trends",
                        progress: 60,
                      },
                      {
                        week: "Week 8+",
                        desc: "Sustainable habits forming",
                        progress: 80,
                      },
                    ].map((item, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="font-medium text-brown">
                            {item.week}
                          </span>
                          <span className="text-wine">{item.desc}</span>
                        </div>
                        <div className="h-2 bg-cream rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-linear-to-r from-wine to-rose rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${item.progress}%` }}
                            transition={{ delay: index * 0.2, duration: 0.8 }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Before & After */}
        <SectionBeforeAfter transformations={transformations} />

        {/* Pros & Cons */}
        <section className="py-20 bg-white/50 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <motion.span
                variants={fadeInUp}
                className="text-sm font-medium text-wine uppercase tracking-wider"
              >
                Honest & Clear
              </motion.span>
              <motion.h2
                variants={fadeInUp}
                className="text-3xl md:text-4xl font-[(--font-georgia)] text-brown mt-2 mb-4"
              >
                Pros and Cons
              </motion.h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                variants={fadeInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-8 shadow-xl border border-green-100"
              >
                <h3 className="text-2xl font-[(--font-georgia)] text-green-600 mb-6 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6" />
                  Benefits
                </h3>

                <div className="space-y-4">
                  {[
                    "Helps reduce hunger and cravings",
                    "Supports early momentum",
                    "Simple to use within doctor-led plan",
                    "No procedures, no downtime",
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      className="flex items-start gap-3"
                    >
                      <Check className="w-5 h-5 text-green-500 mt-0.5" />
                      <span className="text-brown">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-8 shadow-xl border border-red-100"
              >
                <h3 className="text-2xl font-[(--font-georgia)] text-red-600 mb-6 flex items-center gap-2">
                  <XCircle className="w-6 h-6" />
                  Downsides
                </h3>

                <div className="space-y-4">
                  {[
                    "Not suitable for everyone",
                    "Side effects can happen",
                    "Not a permanent fix on its own",
                    "Misuse risk without supervision",
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      className="flex items-start gap-3"
                    >
                      <X className="w-5 h-5 text-red-500 mt-0.5" />
                      <span className="text-brown">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Side Effects */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-12"
            >
              <motion.div variants={fadeInLeft}>
                <span className="text-sm font-medium text-wine uppercase tracking-wider">
                  What to Expect
                </span>
                <h2 className="text-3xl md:text-4xl font-[(--font-georgia)] text-brown mt-2 mb-6">
                  Side Effects: What People Commonly Feel
                </h2>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    "Dry mouth",
                    "Trouble sleeping",
                    "Faster heartbeat",
                    "Feeling restless",
                    "Anxiety",
                    "Constipation",
                  ].map((effect, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      className="p-4 bg-white rounded-xl shadow-md flex items-center gap-2"
                    >
                      <AlertCircle className="w-4 h-4 text-amber-500" />
                      <span className="text-sm text-brown">{effect}</span>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  variants={fadeInUp}
                  className="mt-8 p-6 bg-red-50 rounded-2xl border border-red-200"
                >
                  <h3 className="font-bold text-red-700 mb-2 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5" />
                    Serious Symptoms Need Urgent Care
                  </h3>
                  <p className="text-sm text-red-600">
                    Chest pain, severe shortness of breath, fainting, or severe
                    racing heartbeat require immediate medical attention.
                  </p>
                </motion.div>
              </motion.div>

              <motion.div variants={fadeInRight} className="relative">
                <div className="bg-linear-to-br from-wine to-rose rounded-3xl p-8 text-white h-full">
                  <h3 className="text-2xl font-[(--font-georgia)] mb-4">
                    Medical Supervision Is Not Optional
                  </h3>
                  <p className="mb-6 opacity-90">
                    Rare but serious cardiovascular events have been reported
                    with anorectic agents. This is why proper screening and
                    monitoring are essential.
                  </p>

                  <div className="space-y-4">
                    {[
                      "Blood pressure checks",
                      "Heart rate monitoring",
                      "Regular follow-ups",
                      "Immediate support if needed",
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        variants={fadeInUp}
                        className="flex items-center gap-3"
                      >
                        <Shield className="w-5 h-5" />
                        <span>{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Cost Section */}
        <section className="py-20 bg-white/50 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <motion.span
                variants={fadeInUp}
                className="text-sm font-medium text-wine uppercase tracking-wider"
              >
                Investment
              </motion.span>
              <motion.h2
                variants={fadeInUp}
                className="text-3xl md:text-4xl font-[(--font-georgia)] text-brown mt-2 mb-4"
              >
                How much does Duromine cost in Kuala Lumpur?
              </motion.h2>
            </motion.div>

            <motion.div
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-2xl mx-auto"
            >
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-cream">
                <p className="text-taupe mb-6">
                  Pricing depends on your consultation and monitoring plan. Some
                  Malaysia clinics quote ranges like:
                </p>

                <div className="flex justify-center items-baseline gap-2 mb-8">
                  <span className="text-4xl font-[(--font-georgia)] text-wine">
                    RM300
                  </span>
                  <span className="text-taupe">to</span>
                  <span className="text-4xl font-[(--font-georgia)] text-wine">
                    RM600
                  </span>
                  <span className="text-taupe">/month</span>
                </div>

                <div className="space-y-4">
                  {[
                    "Consultation fee",
                    "Monitoring plan",
                    "Prescription decision",
                    "Follow-up visits",
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      className="flex items-center justify-between p-3 bg-cream rounded-xl"
                    >
                      <span className="text-brown">{item}</span>
                      <Info className="w-4 h-4 text-taupe" />
                    </motion.div>
                  ))}
                </div>

                <motion.p
                  variants={fadeInUp}
                  className="mt-6 text-sm text-wine font-medium text-center"
                >
                  At Nexus Clinic KL, we treat price as a plan-based quote, not
                  a random number. Safety monitoring is part of the value.
                </motion.p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <motion.span
                variants={fadeInUp}
                className="text-sm font-medium text-wine uppercase tracking-wider"
              >
                Comparison
              </motion.span>
              <motion.h2
                variants={fadeInUp}
                className="text-3xl md:text-4xl font-[(--font-georgia)] text-brown mt-2 mb-4"
              >
                Duromine vs Other Treatments
              </motion.h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Duromine",
                  icon: Pill,
                  color: "wine",
                  desc: "Appetite suppressant",
                  use: "Short-term hunger control",
                },
                {
                  title: "Fat Freezing",
                  icon: Droplet,
                  color: "wine",
                  desc: "Targets local fat pockets",
                  use: "For stable weight shaping",
                },
                {
                  title: "Ozempic/Wegovy",
                  icon: Syringe,
                  color: "wine",
                  desc: "GLP-1 hormone pathway",
                  use: "Longer-term plans",
                },
                {
                  title: "Mounjaro",
                  icon: Thermometer,
                  color: "wine",
                  desc: "Dual hormone action",
                  use: "Blood sugar + appetite",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-cream">
                    <div
                      className={`w-12 h-12 mb-4 rounded-lg bg-${item.color}/10 group-hover:bg-${item.color} transition-colors duration-300 flex items-center justify-center`}
                    >
                      <item.icon
                        className={`w-6 h-6 text-${item.color} group-hover:text-white transition-colors duration-300`}
                      />
                    </div>
                    <h3 className="text-lg font-bold text-brown mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-taupe mb-2">{item.desc}</p>
                    <p className="text-xs text-wine">{item.use}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-8 p-6 bg-cream rounded-2xl"
            >
              <p className="text-center text-brown">
                <span className="font-bold">Key insight:</span> If your weight
                is still fluctuating, medical weight loss usually comes first.
                Then body contouring can refine what remains.
              </p>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQ data={faqs} />

        {/* CTA Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-linear-to-r from-wine to-rose opacity-90" />
            <motion.div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
              animate={{
                backgroundPosition: ["0% 0%", "100% 100%"],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center text-white max-w-3xl mx-auto"
            >
              <motion.h2
                variants={fadeInUp}
                className="text-3xl md:text-4xl lg:text-5xl font-[(--font-georgia)] mb-6"
              >
                Ready to finally feel in control again?
              </motion.h2>

              <motion.p
                variants={fadeInUp}
                className="text-lg md:text-xl mb-8 opacity-90"
              >
                If your biggest battle is hunger, cravings, and constant
                snacking, a doctor-monitored program can be a game-changer.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="flex flex-wrap gap-4 justify-center"
              >
                <button className="group bg-white text-wine px-8 py-4 rounded-full font-medium hover:bg-cream transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2">
                  Book Your Consultation
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-all duration-300">
                  Learn More About Nexus Clinic
                </button>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="mt-8 flex items-center justify-center gap-4 text-sm"
              >
                <span className="flex items-center gap-1">
                  <Shield className="w-4 h-4" />
                  Doctor Monitored
                </span>
                <span className="w-1 h-1 bg-white/50 rounded-full" />
                <span className="flex items-center gap-1">
                  <Lock className="w-4 h-4" />
                  Prescription Only
                </span>
                <span className="w-1 h-1 bg-white/50 rounded-full" />
                <span className="flex items-center gap-1">
                  <Heart className="w-4 h-4" />
                  Safe & Controlled
                </span>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Final Trust Message */}
        <section className="py-12 bg-brown text-white">
          <div className="container mx-auto px-4">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center"
            >
              <motion.p
                variants={fadeInUp}
                className="text-lg italic max-w-2xl mx-auto font-[(--font-georgia)]"
              >
                "Duromine is not for everyone. But for the right person, with
                the right monitoring, it can help you build momentum and finally
                feel in control again."
              </motion.p>
              <motion.p variants={fadeInUp} className="mt-4 text-cream">
                — Nexus Clinic Kuala Lumpur
              </motion.p>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

export default DuromineLandingPage;
