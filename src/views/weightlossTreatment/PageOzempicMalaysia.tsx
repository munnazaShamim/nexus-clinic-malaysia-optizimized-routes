"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Shield,
  TrendingDown,
  AlertCircle,
  CheckCircle2,
  XCircle,
  Clock,
  Heart,
  Scale,
  Apple,
  Activity,
  Info,
  Brain,
} from "lucide-react";
import {
  fadeInUp,
  staggerContainer,
  fadeInLeft,
  fadeInRight,
  scaleIn,
} from "../../lib/animations";
import FAQ from "../../components/FAQ";
import SectionBeforeAfter from "../../components/BeforeAfterCustomize";
import { useTranslation } from "@/src/i18n/client";
import { fallbackLng } from "@/src/i18n/settings";

const PageOzempicMalaysia = ({ locale = fallbackLng }: { locale?: string }) => {
  const { t } = useTranslation(locale, "ozempic");
  const faqs = [
    {
      q: "Is Ozempic approved for weight loss?",
      a: "Ozempic is not a weight loss drug. It is mainly for type 2 diabetes, although weight loss may happen. For weight management, semaglutide is studied and marketed as Wegovy.",
    },
    {
      q: "How much weight can you lose on Ozempic?",
      a: "Results vary. In obesity trials using semaglutide 2.4 mg, average weight loss was about 14.9% at 68 weeks with lifestyle support.",
    },
    {
      q: "What happens when you stop Ozempic?",
      a: "Weight regain is common if you stop without a maintenance plan. Studies show many people regain a meaningful portion of lost weight after stopping.",
    },
    {
      q: "Can Ozempic cause 'Ozempic face'?",
      a: "Rapid weight loss can reduce facial volume in some people. The best prevention is steady loss, good protein intake, and doctor-guided pacing.",
    },
    {
      q: "Is Ozempic available in Malaysia, and how do I avoid fake products?",
      a: "Use licensed providers and check product registration status through NPRA tools. Avoid unverified online sellers and suspicious 'cheap pens.'",
    },
  ];

  const transformations = [
    {
      id: 1,
      before: "/images/B&A-w/B&A-ozempic-malaysia1.webp",
      after: "/images/B&A-w/B&A-ozempic-malaysia1.webp",
    },
    {
      id: 2,
      before: "/images/B&A-w/B&A-ozempic-malaysia2.webp",
      after: "/images/B&A-w/B&A-ozempic-malaysia2.webp",
    },
    {
      id: 3,
      before: "/images/B&A-w/B&A-ozempic-malaysia3.webp",
      after: "/images/B&A-w/B&A-ozempic-malaysia3.webp",
    },
  ];

  return (
    <>
      <main className="min-h-screen bg-linear-to-b from-light to-cream">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-16 pb-24 px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={fadeInLeft} className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-glass backdrop-blur-sm rounded-full border border-taupe/20">
                <Shield className="w-4 h-4 text-wine" />
                <span className="text-sm font-inter text-brown">
                  Doctor-Led Weight Loss in Kuala Lumpur
                </span>
              </div>

              <h1 className="font-georgia text-5xl md:text-6xl text-brown leading-tight">
                Lose weight with
                <span className="text-wine block">medical support,</span>
                not guesswork
              </h1>

              <p className="text-lg text-taupe font-inter leading-relaxed max-w-xl">
                Ozempic can reduce appetite and support steady weight loss for
                suitable patients. At Nexus Clinic Kuala Lumpur, your plan stays
                doctor led, safe, and realistic.
              </p>

              <div className="flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-wine text-light font-inter rounded-full hover:bg-rose transition-colors flex items-center gap-2 group"
                >
                  Start Your Consultation
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 border-2 border-wine/30 text-wine font-inter rounded-full hover:bg-wine/5 transition-colors"
                >
                  Learn More
                </motion.button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
                {[
                  { icon: <TrendingDown />, text: "From RM1,800/pen" },
                  { icon: <Shield />, text: "Doctor Screening" },
                  { icon: <Clock />, text: "Progress Tracking" },
                  { icon: <Heart />, text: "Side-Effect Support" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={scaleIn}
                    className="flex flex-col items-center text-center gap-2"
                  >
                    <div className="text-wine">{item.icon}</div>
                    <span className="text-xs font-inter text-brown">
                      {item.text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeInRight} className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/images/treatment/hero-ozempic.webp"
                  alt="Nexus Clinic KL - Professional medical consultation for weight loss"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-brown/20 to-transparent"></div>
              </div>

              {/* Trust Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -bottom-6 -left-6 bg-glass backdrop-blur-md p-6 rounded-2xl border border-light shadow-xl max-w-xs"
              >
                <p className="text-sm font-inter text-brown">
                  <span className="font-bold">Quick Facts:</span> Ozempic is
                  primarily for type 2 diabetes. For weight management, Wegovy
                  is specifically studied. Always verify MAL numbers.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* Quick Answers Section */}
        <section className="py-16 px-4 bg-glass backdrop-blur-sm border-y border-taupe/10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="max-w-7xl mx-auto"
          >
            <motion.div
              variants={fadeInUp}
              className="grid md:grid-cols-3 gap-8"
            >
              {[
                {
                  icon: <AlertCircle className="text-wine" />,
                  title: "Ozempic vs Fat Freezing",
                  text: "Ozempic affects overall weight through appetite, not spot reduction. Fat freezing targets specific areas.",
                },
                {
                  icon: <Shield className="text-wine" />,
                  title: "Safe Sourcing",
                  text: "Never buy from random sellers. All our medications have traceable supply chains and valid MAL numbers.",
                },
                {
                  icon: <Info className="text-wine" />,
                  title: "Medical Clarity",
                  text: "Ozempic is approved for diabetes. Weight loss can occur, but proper medical screening is essential.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  className="flex gap-4 items-start"
                >
                  <div className="p-3 bg-wine/10 rounded-xl shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-georgia text-brown mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-taupe font-inter">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* What is Ozempic */}
        <section className="py-24 px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={fadeInLeft} className="space-y-6">
              <h2 className="font-georgia text-4xl text-brown">
                What is Ozempic, and why is everyone talking about it?
              </h2>

              <p className="text-lg text-taupe font-inter leading-relaxed">
                Ozempic is the brand name for semaglutide, a medicine in the
                GLP-1 receptor agonist family. It was developed for type 2
                diabetes, and it can also lead to weight loss in many patients.
              </p>

              <div className="bg-cream p-8 rounded-3xl border border-taupe/10">
                <p className="font-inter text-brown italic">
                  <span className="font-bold text-wine">Important note:</span>{" "}
                  Ozempic is not marketed as a weight loss drug in the way
                  Wegovy is. Ozempic may support weight loss, but it is still a
                  prescription medicine that needs proper screening and
                  monitoring.
                </p>
              </div>

              <div className="space-y-4 pt-4">
                <h3 className="font-georgia text-2xl text-brown">
                  How it works:
                </h3>
                {[
                  { icon: <Apple />, text: "You get full faster" },
                  { icon: <Brain />, text: "Cravings feel quieter" },
                  {
                    icon: <Scale />,
                    text: "Portions become easier to control",
                  },
                  { icon: <Activity />, text: "Blood sugar swings may reduce" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="flex items-center gap-4 p-4 bg-glass rounded-xl"
                  >
                    <div className="text-wine">{item.icon}</div>
                    <span className="font-inter text-brown">{item.text}</span>
                  </motion.div>
                ))}
                <p className="text-sm text-taupe mt-4 italic">
                  This is why people describe it as "food noise goes down." It
                  doesn't replace healthy eating, but it makes healthy choices
                  feel less exhausting.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeInRight}>
              <div className="relative rounded-3xl overflow-hidden shadow-xl">
                <img
                  src="/images/main/ozempic-malaysia.webp"
                  alt="Medical professional explaining Ozempic treatment"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-linear-to-t from-brown/40 to-transparent"></div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Suitability Section */}
        <section className="py-24 px-4 bg-cream">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="max-w-7xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="font-georgia text-4xl text-brown text-center mb-16"
            >
              Who may be suitable for Ozempic weight loss in Malaysia?
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-12">
              <motion.div variants={fadeInLeft} className="space-y-6">
                <p className="text-taupe font-inter">
                  At Nexus Clinic Kuala Lumpur, suitability is not based on
                  vibes or trends. It is based on health, risk, and goals.
                </p>

                <div className="space-y-4">
                  {[
                    "Adults with overweight or obesity who struggle despite consistent efforts",
                    "People with insulin resistance, prediabetes, or type 2 diabetes",
                    "People with weight-related issues like high BP, fatty liver risk, sleep problems, or PCOS symptoms",
                  ].map((text, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      className="flex gap-3 p-4 bg-light rounded-xl border border-taupe/10"
                    >
                      <CheckCircle2 className="w-5 h-5 text-wine shrink-0 mt-1" />
                      <span className="font-inter text-brown">{text}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                className="bg-wine/5 p-8 rounded-3xl border border-wine/20"
              >
                <h3 className="font-georgia text-2xl text-wine mb-6 flex items-center gap-2">
                  <XCircle className="w-6 h-6" />
                  Who should NOT use Ozempic
                </h3>

                <div className="space-y-4">
                  {[
                    "Personal or family history of medullary thyroid cancer or MEN2",
                    "History of pancreatitis",
                    "Pregnancy, trying to conceive, or breastfeeding",
                    "Significant stomach or gut conditions",
                    "Planning surgery or endoscopy soon",
                  ].map((text, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      className="flex gap-3 items-start p-3 bg-light rounded-lg"
                    >
                      <AlertCircle className="w-4 h-4 text-wine shrink-0 mt-1" />
                      <span className="text-sm font-inter text-brown">
                        {text}
                      </span>
                    </motion.div>
                  ))}
                </div>
                <p className="text-xs text-taupe mt-6">
                  *Ozempic is not for everyone. A doctor must screen properly.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Timeline & Results */}
        <section className="py-24 px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="max-w-7xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="font-georgia text-4xl text-brown text-center mb-6"
            >
              What results can you expect, and how fast?
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-center text-taupe font-inter max-w-2xl mx-auto mb-16"
            >
              Real talk: results vary. Your dose, starting weight, sleep,
              stress, food quality, and activity all matter.
            </motion.p>

            <div className="grid md:grid-cols-4 gap-4 mb-16">
              {[
                {
                  period: "Weeks 1-4",
                  desc: "Appetite changes start. Some nausea is common.",
                },
                {
                  period: "Weeks 4-12",
                  desc: "Weight loss becomes more noticeable.",
                },
                {
                  period: "3-6 months",
                  desc: "Steadier momentum, better habit patterns.",
                },
                {
                  period: "6-12 months",
                  desc: "Bigger health changes with consistency.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  className="p-6 bg-glass backdrop-blur-sm rounded-2xl border border-taupe/10"
                >
                  <div className="text-2xl font-georgia text-wine mb-2">
                    {item.period}
                  </div>
                  <p className="text-sm font-inter text-brown">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={fadeInUp}
              className="bg-wine/5 p-8 rounded-3xl max-w-3xl mx-auto"
            >
              <h3 className="font-georgia text-2xl text-wine mb-4">
                What studies show
              </h3>
              <p className="font-inter text-brown">
                In major clinical trials of semaglutide (2.4mg), average weight
                loss was around 14.9% at 68 weeks when combined with lifestyle
                changes. That doesn't mean everyone gets that result, but it
                gives you a real-world "range" to discuss with a doctor.
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* Before & After */}
        <SectionBeforeAfter transformations={transformations} />

        {/* Pros & Cons */}
        <section className="py-24 px-4 bg-cream">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="max-w-7xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="font-georgia text-4xl text-brown text-center mb-16"
            >
              Pros and cons of Ozempic for weight loss (honest version)
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                variants={fadeInLeft}
                className="bg-light p-8 rounded-3xl border border-green-200"
              >
                <h3 className="font-georgia text-2xl text-green-700 mb-6 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6" />
                  Pros
                </h3>
                <ul className="space-y-4">
                  {[
                    "Helps reduce appetite and portions without feeling constantly deprived",
                    "Supports steady, progressive weight loss when combined with lifestyle changes",
                    "Can improve metabolic markers in suitable patients (doctor monitored)",
                  ].map((text, index) => (
                    <motion.li
                      key={index}
                      variants={fadeInUp}
                      className="flex gap-3 items-start"
                    >
                      <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-1" />
                      <span className="font-inter text-brown">{text}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                className="bg-light p-8 rounded-3xl border border-red-200"
              >
                <h3 className="font-georgia text-2xl text-wine mb-6 flex items-center gap-2">
                  <XCircle className="w-6 h-6" />
                  Cons
                </h3>
                <ul className="space-y-4">
                  {[
                    "Side effects can be uncomfortable at the start",
                    "Cost can add up if you stay on it long term",
                    "You may regain weight if you stop without a plan",
                    "Not suitable for everyone, especially with certain thyroid cancer risks",
                  ].map((text, index) => (
                    <motion.li
                      key={index}
                      variants={fadeInUp}
                      className="flex gap-3 items-start"
                    >
                      <XCircle className="w-4 h-4 text-wine shrink-0 mt-1" />
                      <span className="font-inter text-brown">{text}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Side Effects & Safety */}
        <section className="py-24 px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="max-w-7xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="font-georgia text-4xl text-brown text-center mb-6"
            >
              Side effects and safety: what to expect
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-center text-taupe font-inter max-w-2xl mx-auto mb-16"
            >
              Most side effects are digestive and often improve as your body
              adapts.
            </motion.p>

            <div className="grid md:grid-cols-2 gap-12">
              <motion.div variants={fadeInLeft} className="space-y-6">
                <h3 className="font-georgia text-2xl text-brown">
                  Common side effects
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    "Nausea",
                    "Constipation",
                    "Diarrhea",
                    "Bloating",
                    "Reflux",
                    "Stomach discomfort",
                    "Reduced appetite",
                  ].map((effect, index) => (
                    <motion.div
                      key={index}
                      variants={scaleIn}
                      className="p-3 bg-glass rounded-xl border border-taupe/10 text-center"
                    >
                      <span className="text-sm font-inter text-brown">
                        {effect}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                className="bg-wine/5 p-8 rounded-3xl"
              >
                <h3 className="font-georgia text-2xl text-wine mb-6">
                  Serious side effects (rare, but important)
                </h3>
                <p className="font-inter text-sm text-brown mb-4">
                  Seek medical advice urgently if you have:
                </p>
                <ul className="space-y-4">
                  {[
                    "Severe belly pain that does not go away",
                    "Signs of gallbladder issues (upper right abdominal pain, fever, jaundice)",
                    "Signs of dehydration or kidney strain after vomiting/diarrhea",
                  ].map((text, index) => (
                    <motion.li
                      key={index}
                      variants={fadeInUp}
                      className="flex gap-3 items-start"
                    >
                      <AlertCircle className="w-4 h-4 text-wine shrink-0 mt-1" />
                      <span className="text-sm font-inter text-brown">
                        {text}
                      </span>
                    </motion.li>
                  ))}
                </ul>

                <div className="mt-8 p-4 bg-light rounded-xl border border-wine/20">
                  <p className="text-xs font-inter text-brown">
                    <span className="font-bold">Surgery safety note:</span>{" "}
                    Malaysia's NPRA has highlighted aspiration risk. If you have
                    a procedure coming up, tell your anesthetist early.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Pricing & Comparison */}
        <section className="py-24 px-4 bg-cream">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="max-w-7xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="font-georgia text-4xl text-brown text-center mb-16"
            >
              Ozempic price in Malaysia (Kuala Lumpur)
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-12">
              <motion.div variants={fadeInLeft} className="space-y-6">
                <div className="bg-light p-8 rounded-3xl border-2 border-wine/20">
                  <h3 className="font-georgia text-3xl text-wine mb-2">
                    From RM1,800
                  </h3>
                  <p className="text-taupe font-inter mb-6">
                    per pen at Nexus Clinic KL
                  </p>
                  <p className="text-sm font-inter text-brown">
                    Multi-pen packages available subject to medical
                    consultation. Price includes medical supervision, not just
                    medication.
                  </p>
                </div>

                <div className="bg-glass p-6 rounded-2xl">
                  <p className="text-sm font-inter text-brown">
                    Other clinics may quote RM800-1,000/month. Always confirm
                    what's included: consultation, follow-ups, education,
                    sourcing, storage, and safety monitoring.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeInRight} className="space-y-6">
                <h3 className="font-georgia text-2xl text-brown">
                  Ozempic vs Wegovy vs Mounjaro vs Saxenda
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      name: "Ozempic",
                      desc: "Primarily for type 2 diabetes; weight loss can occur",
                    },
                    {
                      name: "Wegovy",
                      desc: "Developed for chronic weight management at higher dosing",
                    },
                    {
                      name: "Mounjaro",
                      desc: "Targets GLP-1 and GIP hormones",
                    },
                    {
                      name: "Saxenda",
                      desc: "Daily injection for weight management",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      className="flex gap-4 p-4 bg-light rounded-xl"
                    >
                      <span className="font-bold text-wine min-w-24">
                        {item.name}
                      </span>
                      <span className="text-sm font-inter text-brown">
                        {item.desc}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Nexus Approach */}
        <section className="py-24 px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="max-w-7xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="font-georgia text-4xl text-brown text-center mb-6"
            >
              The Nexus Clinic Kuala Lumpur approach
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-center text-taupe font-inter max-w-2xl mx-auto mb-16"
            >
              People don't want a lecture. They want a plan that fits real life.
            </motion.p>

            <div className="grid md:grid-cols-5 gap-4">
              {[
                {
                  step: "1",
                  title: "Suitability screening",
                  desc: "Medical history, risk checks, goal setting",
                },
                {
                  step: "2",
                  title: "Gradual dose approach",
                  desc: "Paced changes to reduce side effects",
                },
                {
                  step: "3",
                  title: "Food strategy",
                  desc: "Protein, fibre, smart portions, Malaysian food friendly",
                },
                {
                  step: "4",
                  title: "Tracking & support",
                  desc: "Quick guidance when side effects hit",
                },
                {
                  step: "5",
                  title: "Maintenance planning",
                  desc: "Prevent regain with early next-step planning",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  className="p-6 bg-glass backdrop-blur-sm rounded-2xl border border-taupe/10 text-center"
                >
                  <div className="w-10 h-10 bg-wine text-light rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                    {item.step}
                  </div>
                  <h4 className="font-georgia text-lg text-brown mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs font-inter text-taupe">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* FAQ Section */}
        <FAQ data={faqs} />

        {/* CTA Section */}
        <section className="py-24 px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h2
              variants={fadeInUp}
              className="font-georgia text-4xl text-brown mb-6"
            >
              Ready for a doctor-led Ozempic consultation in Kuala Lumpur?
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-taupe font-inter text-lg mb-12 max-w-2xl mx-auto"
            >
              If you are considering Ozempic weight loss treatment in Malaysia,
              start with a proper medical discussion. Nexus Clinic Kuala Lumpur
              focuses on safe prescribing, transparent pricing, and a plan you
              can actually follow.
            </motion.p>

            <motion.button
              variants={scaleIn}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-5 bg-wine text-light font-inter text-lg rounded-full hover:bg-rose transition-colors shadow-xl hover:shadow-2xl"
            >
              Book Your Consultation
            </motion.button>
          </motion.div>
        </section>
      </main>
    </>
  );
};

export default PageOzempicMalaysia;
