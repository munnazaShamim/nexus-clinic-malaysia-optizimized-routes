"use client";

import { motion } from "framer-motion";
import {
  Activity,
  Shield,
  Heart,
  Clock,
  ChevronRight,
  Star,
  CheckCircle2,
  AlertCircle,
  TrendingDown,
  Target,
  Sparkles,
  Users,
  FileText,
  Syringe,
  Info,
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

const TirzepatideLanding = ({ locale = fallbackLng }: { locale?: string }) => {
  const { t } = useTranslation(locale, "tirzepatide");
  const faqs = [
    {
      q: "What is tirzepatide used for?",
      a: "Tirzepatide is used to improve blood sugar control in type 2 diabetes (Mounjaro). In the US, it's also approved for chronic weight management under the brand Zepbound.",
    },
    {
      q: "Is tirzepatide the same as Mounjaro or Zepbound?",
      a: "Mounjaro and Zepbound contain tirzepatide as the active ingredient. Tirzepatide is the medicine; Mounjaro and Zepbound are brand names.",
    },
    {
      q: "How much weight can you lose on tirzepatide?",
      a: "In a 72 week trial, average weight loss was 15% to about 21% in adults with obesity (without diabetes). Individual results vary.",
    },
    {
      q: "Is tirzepatide available in Malaysia?",
      a: "Malaysia's NPRA has referenced Mounjaro in safety communications. It's available through prescription only at clinics with proper medical supervision.",
    },
    {
      q: "Do I still need diet and exercise on tirzepatide?",
      a: "Yes. Even the FDA indication specifies use with reduced calorie diet and increased physical activity. The injection supports appetite control, but habits keep results.",
    },
  ];

  const transformations = [
    {
      id: 1,
      before: "/images/B&A-w/B&A-tirzepatide1.webp",
      after: "/images/B&A-w/B&A-tirzepatide1.webp",
    },
    {
      id: 2,
      before: "/images/B&A-w/B&A-tirzepatide2.webp",
      after: "/images/B&A-w/B&A-tirzepatide2.webp",
    },
    {
      id: 3,
      before: "/images/B&A-w/B&A-tirzepatide3.webp",
      after: "/images/B&A-w/B&A-tirzepatide3.webp",
    },
  ];
  return (
    <>
      <main className="min-h-screen bg-light font-['Inter',sans-serif]">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center overflow-hidden">
          {/* Background Glass Element */}
          <div className="absolute inset-0 bg-linear-to-br from-cream via-light to-cream" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              {/* Left Column */}
              <motion.div variants={fadeInLeft} className="space-y-8">
                <motion.div
                  variants={scaleIn}
                  className="inline-flex items-center space-x-2 bg-wine/10 px-4 py-2 rounded-full"
                >
                  <Sparkles className="w-4 h-4 text-wine" />
                  <span className="text-sm font-medium text-wine">
                    Nexus Clinic Kuala Lumpur
                  </span>
                </motion.div>

                <h1 className="font-['Georgia',serif] text-5xl sm:text-6xl lg:text-7xl leading-tight">
                  Lose weight when{" "}
                  <span className="text-wine italic">willpower</span>
                  <br />
                  is not the problem
                </h1>

                <p className="text-xl text-brown/80 max-w-lg">
                  Tirzepatide is a once weekly medical option that helps reduce
                  hunger and cravings. At Nexus Clinic Kuala Lumpur, we keep it
                  safe, structured, and doctor monitored.
                </p>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group bg-wine text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-rose transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2"
                >
                  <span>Book a consultation</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>

                {/* Quick Proof Bar */}
                <motion.div
                  variants={scaleIn}
                  className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-8"
                >
                  {[
                    { icon: FileText, text: "Doctor led assessment" },
                    { icon: Syringe, text: "Prescription only" },
                    { icon: Users, text: "Regular follow ups" },
                    { icon: Heart, text: "Lifestyle plan" },
                    { icon: Shield, text: "Safety guidance" },
                    { icon: Info, text: "Privacy first care" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-2 text-sm text-brown"
                    >
                      <item.icon className="w-4 h-4 text-wine" />
                      <span>{item.text}</span>
                    </div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Right Column - Glass Card */}
              <motion.div variants={fadeInRight} className="relative">
                <div className="relative bg-white/70 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/50">
                  <div className="absolute -top-4 -right-4 bg-wine text-white px-4 py-2 rounded-full text-sm font-medium">
                    Doctor Monitored
                  </div>

                  <h3 className="font-['Georgia',serif] text-2xl mb-6 text-brown">
                    What makes it different
                  </h3>

                  <div className="space-y-6">
                    {[
                      "Dual hormone pathway activation (GIP + GLP-1)",
                      "Reduces food noise and cravings",
                      "Slows stomach emptying naturally",
                      "Clinically proven results",
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start space-x-3"
                      >
                        <CheckCircle2 className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                        <span className="text-brown">{item}</span>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-8 pt-6 border-t border-taupe/20">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
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
                        <span className="text-sm text-brown">
                          +200 patients
                        </span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 fill-wine text-wine" />
                        <Star className="w-4 h-4 fill-wine text-wine" />
                        <Star className="w-4 h-4 fill-wine text-wine" />
                        <Star className="w-4 h-4 fill-wine text-wine" />
                        <Star className="w-4 h-4 fill-wine text-wine" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Understanding Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <motion.div variants={fadeInUp} className="text-center mb-16">
                <h2 className="font-['Georgia',serif] text-4xl md:text-5xl mb-6 text-brown">
                  Tirzepatide weight loss in Malaysia:
                  <br />
                  <span className="text-wine">
                    what it is, and why it feels different
                  </span>
                </h2>
                <p className="text-lg text-brown/80 max-w-2xl mx-auto">
                  If you have tried "eat less, move more" a hundred times, you
                  already know the truth. Some bodies fight back harder.
                </p>
                <div className="relative rounded-3xl overflow-hidden shadow-xl mt-4">
                  <img
                    src="/images/main/tirzepatide.webp"
                    alt="Tirzepatide"
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-brown/40 to-transparent"></div>
                </div>
              </motion.div>

              <motion.div
                variants={scaleIn}
                className="bg-cream rounded-3xl p-8 md:p-12 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-wine/5 rounded-full blur-3xl" />

                <div className="grid md:grid-cols-2 gap-8 relative z-10">
                  <div className="space-y-6">
                    <h3 className="font-['Georgia',serif] text-2xl text-brown">
                      The science
                    </h3>
                    <p className="text-brown leading-relaxed">
                      Tirzepatide is designed for that exact problem. It works
                      on appetite and fullness signals in the body, not just
                      motivation. In large clinical trials, people with obesity
                      lost significant body weight over time.
                    </p>
                    <div className="bg-white/50 backdrop-blur-sm rounded-xl p-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full bg-wine/10 flex items-center justify-center">
                          <Activity className="w-5 h-5 text-wine" />
                        </div>
                        <div>
                          <div className="text-sm text-brown/70">
                            Active ingredient in
                          </div>
                          <div className="font-medium text-brown">
                            Mounjaro® & Zepbound®
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h3 className="font-['Georgia',serif] text-2xl text-brown">
                      What patients notice
                    </h3>
                    <ul className="space-y-4">
                      {[
                        "Calmer eating patterns",
                        "Feel full sooner",
                        "Stay full longer",
                        "Food noise gets quieter",
                        "Portions feel naturally smaller",
                      ].map((item, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <CheckCircle2 className="w-4 h-4 text-wine" />
                          <span className="text-brown">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Who It's For Section */}
        <section className="py-24 bg-light">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-12 items-start"
            >
              <motion.div variants={fadeInLeft} className="space-y-8">
                <div className="inline-flex items-center space-x-2 bg-wine/10 px-4 py-2 rounded-full">
                  <Target className="w-4 h-4 text-wine" />
                  <span className="text-sm font-medium text-wine">
                    Who this is for
                  </span>
                </div>

                <h2 className="font-['Georgia',serif] text-4xl md:text-5xl text-brown">
                  This may suit you if:
                </h2>

                <div className="space-y-4">
                  {[
                    "You have obesity, or you are overweight with weight related health risks",
                    "You have tried structured diet and exercise but keep rebounding",
                    "Hunger and cravings feel like the main obstacle",
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      variants={scaleIn}
                      className="flex items-start space-x-3 bg-white p-4 rounded-xl shadow-sm"
                    >
                      <CheckCircle2 className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                      <span className="text-brown">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={fadeInRight} className="space-y-8">
                <div className="inline-flex items-center space-x-2 bg-rose/10 px-4 py-2 rounded-full">
                  <AlertCircle className="w-4 h-4 text-rose" />
                  <span className="text-sm font-medium text-rose">
                    Important considerations
                  </span>
                </div>

                <h2 className="font-['Georgia',serif] text-4xl md:text-5xl text-brown">
                  This may NOT suit you if:
                </h2>

                <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-rose">
                  <p className="text-sm text-brown/70 mb-4">
                    A doctor must screen you, but common "do not use" situations
                    include:
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Personal or family history of medullary thyroid cancer, or MEN2",
                      "Pregnancy or breastfeeding",
                      "Certain serious GI conditions",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose mt-2" />
                        <span className="text-brown">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-brown/50 mt-4">
                    These cautions are highlighted in tirzepatide prescribing
                    information, including a boxed warning.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <motion.div variants={fadeInUp} className="text-center mb-16">
                <h2 className="font-['Georgia',serif] text-4xl md:text-5xl mb-6 text-brown">
                  What results can you
                  <br />
                  <span className="text-wine">realistically expect?</span>
                </h2>
                <p className="text-lg text-brown/80">
                  Let's keep it honest. Results vary. Genetics, starting weight,
                  dose tolerance, protein intake, sleep, and consistency all
                  matter.
                </p>
              </motion.div>

              <motion.div
                variants={scaleIn}
                className="grid md:grid-cols-3 gap-6 mb-12"
              >
                {[
                  {
                    value: "15-21%",
                    label: "Average weight loss",
                    sub: "in 72 week trials",
                  },
                  {
                    value: "72",
                    label: "Weeks",
                    sub: "clinical study duration",
                  },
                  {
                    value: "2025",
                    label: "Head to head",
                    sub: "vs semaglutide",
                  },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="bg-cream rounded-2xl p-6 text-center"
                  >
                    <div className="font-['Georgia',serif] text-3xl text-wine font-bold mb-1">
                      {stat.value}
                    </div>
                    <div className="font-medium text-brown">{stat.label}</div>
                    <div className="text-sm text-brown/60">{stat.sub}</div>
                  </div>
                ))}
              </motion.div>

              <motion.div
                variants={scaleIn}
                className="bg-linear-to-br from-wine to-rose rounded-3xl p-8 text-white"
              >
                <h3 className="font-['Georgia',serif] text-2xl mb-6">
                  A simple timeline
                </h3>
                <div className="grid md:grid-cols-4 gap-4">
                  {[
                    {
                      period: "Weeks 1-4",
                      desc: "Appetite drops first; scale may change slowly",
                      icon: Clock,
                    },
                    {
                      period: "Weeks 5-12",
                      desc: "Momentum builds if you keep meals consistent",
                      icon: TrendingDown,
                    },
                    {
                      period: "Months 3-6",
                      desc: "Many notice visible body shape changes",
                      icon: Heart,
                    },
                    {
                      period: "Months 6-12",
                      desc: "Progress continues, but plateaus can happen",
                      icon: Target,
                    },
                  ].map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={index}
                        className="bg-white/10 backdrop-blur-sm rounded-xl p-4"
                      >
                        <Icon className="w-6 h-6 mb-2" />
                        <div className="font-medium text-sm mb-1">
                          {item.period}
                        </div>
                        <div className="text-xs text-white/80">{item.desc}</div>
                      </div>
                    );
                  })}
                </div>
                <p className="text-sm text-white/70 mt-4">
                  * If you stop treatment after losing weight, regain is common.
                  SURMOUNT-4 study shows importance of continuity.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Nexus Approach Section */}
        <section className="py-24 bg-cream">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <motion.div variants={fadeInUp} className="text-center mb-16">
                <h2 className="font-['Georgia',serif] text-4xl md:text-5xl mb-6 text-brown">
                  The Nexus Clinic Kuala Lumpur approach
                  <br />
                  <span className="text-wine text-2xl">
                    (what "doctor monitored" should look like)
                  </span>
                </h2>
              </motion.div>

              <div className="space-y-6">
                {[
                  {
                    step: "01",
                    title: "Medical assessment first",
                    items: [
                      "Weight history",
                      "Sleep, stress, cravings",
                      "Family history",
                      "Realistic target setting",
                    ],
                  },
                  {
                    step: "02",
                    title: "Eligibility and safety screening",
                    items: [
                      "Check contraindications",
                      "Risk factors",
                      "Medical history review",
                    ],
                  },
                  {
                    step: "03",
                    title: "Dose titration and follow ups",
                    items: [
                      "Gradual introduction",
                      "Individualized schedule",
                      "Regular monitoring",
                    ],
                  },
                  {
                    step: "04",
                    title: "Nutrition that fits Malaysian life",
                    items: [
                      "Protein first",
                      "Fiber daily",
                      "Steady hydration",
                      "Smarter portions",
                    ],
                  },
                  {
                    step: "05",
                    title: "Progress tracking beyond the scale",
                    items: [
                      "Waist and hip measurements",
                      "Cravings and hunger scores",
                      "Energy and sleep",
                      "Labs when needed",
                    ],
                  },
                ].map((phase, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInLeft}
                    className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-full bg-wine/10 flex items-center justify-center shrink-0">
                        <span className="font-['Georgia',serif] text-xl text-wine">
                          {phase.step}
                        </span>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-['Georgia',serif] text-xl text-brown mb-3">
                          {phase.title}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {phase.items.map((item, i) => (
                            <span
                              key={i}
                              className="bg-cream px-3 py-1 rounded-full text-sm text-brown"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Before After  */}
        <SectionBeforeAfter transformations={transformations} />

        {/* Side Effects Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-12"
            >
              <motion.div variants={fadeInLeft} className="space-y-8">
                <h2 className="font-['Georgia',serif] text-4xl md:text-5xl text-brown">
                  Side effects:
                  <br />
                  <span className="text-wine">
                    what's common, what's serious
                  </span>
                </h2>

                <div className="bg-cream rounded-2xl p-6">
                  <h3 className="font-medium text-brown mb-4">
                    Most common (GI related):
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      "Nausea",
                      "Diarrhea",
                      "Vomiting",
                      "Constipation",
                      "Abdominal discomfort",
                      "Reduced appetite",
                    ].map((item, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-wine" />
                        <span className="text-brown">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-medium text-brown">
                    Simple ways to reduce discomfort:
                  </h3>
                  {[
                    "Eat smaller meals",
                    "Avoid greasy foods early on",
                    "Stop when comfortably full",
                    "Spread protein across the day",
                    "Stay hydrated",
                  ].map((tip, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle2 className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                      <span className="text-brown">{tip}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={fadeInRight} className="space-y-8">
                <div className="bg-rose/10 rounded-2xl p-6 border-l-4 border-rose">
                  <h3 className="font-medium text-brown mb-4 flex items-center space-x-2">
                    <AlertCircle className="w-5 h-5 text-rose" />
                    <span>Important safety notes</span>
                  </h3>
                  <ul className="space-y-4">
                    <li className="text-sm text-brown">
                      <span className="font-medium">Boxed warning:</span>{" "}
                      Thyroid C-cell tumors observed in animal studies
                    </li>
                    <li className="text-sm text-brown">
                      <span className="font-medium">
                        NPRA safety communication:
                      </span>{" "}
                      Aspiration risk during general anaesthesia or deep
                      sedation
                    </li>
                    <li className="text-sm text-brown font-medium">
                      If you develop severe persistent abdominal pain, seek
                      medical care immediately.
                    </li>
                  </ul>
                </div>

                <div className="bg-wine text-white rounded-2xl p-6">
                  <h3 className="font-['Georgia',serif] text-xl mb-4">
                    Always tell your doctor:
                  </h3>
                  <p className="text-sm opacity-90 mb-4">
                    Before any procedure involving anaesthesia or sedation,
                    inform your doctor you are on GLP-1 class medication.
                  </p>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <div className="flex items-center space-x-2">
                      <Info className="w-4 h-4" />
                      <span className="text-sm">
                        Malaysia's NPRA specifically highlights this risk
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Cost & Comparison Section */}
        <section className="py-24 bg-light">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <motion.div variants={fadeInUp} className="text-center mb-16">
                <h2 className="font-['Georgia',serif] text-4xl md:text-5xl text-brown">
                  Cost of tirzepatide in Malaysia
                </h2>
                <p className="text-lg text-brown/80 mt-4">
                  What affects the price
                </p>
              </motion.div>

              <motion.div
                variants={scaleIn}
                className="bg-white rounded-3xl p-8 shadow-lg mb-12"
              >
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-['Georgia',serif] text-xl text-brown mb-4">
                      Factors include:
                    </h3>
                    <ul className="space-y-3">
                      {[
                        "Brand and supply chain",
                        "Dose strength",
                        "Pen or vial format",
                        "Medical monitoring included",
                        "Labs, consults, and follow ups",
                      ].map((item, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-wine" />
                          <span className="text-brown">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-cream rounded-xl p-6">
                    <p className="text-brown text-sm">
                      At Nexus Clinic Kuala Lumpur, we position pricing around
                      total programme value, not just "per injection," because
                      monitoring and safety protect the patient.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="space-y-8">
                <h3 className="font-['Georgia',serif] text-2xl text-brown text-center">
                  Tirzepatide vs other weight loss options
                </h3>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <h4 className="font-medium text-wine mb-3">
                      vs Semaglutide
                    </h4>
                    <p className="text-sm text-brown">
                      Both reduce appetite. Tirzepatide targets two pathways
                      (GIP + GLP-1). In head to head research, tirzepatide
                      produced greater average weight loss.
                    </p>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <h4 className="font-medium text-wine mb-3">
                      vs Fat freezing
                    </h4>
                    <p className="text-sm text-brown">
                      Fat freezing targets local fat pockets. Tirzepatide
                      supports whole body weight loss. Many use contouring after
                      weight loss, not instead of it.
                    </p>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-sm md:col-span-2">
                    <h4 className="font-medium text-wine mb-3">
                      vs "Quick pills"
                    </h4>
                    <p className="text-sm text-brown">
                      Some stimulant options can reduce appetite, but they don't
                      address the same hormonal appetite pathways. A doctor
                      should guide choices based on risks and medical history.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQ data={faqs} />

        {/* Final CTA Section */}
        <section className="py-24 bg-wine relative overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-r from-wine to-rose opacity-90" />
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center text-white"
            >
              <motion.h2
                variants={fadeInUp}
                className="font-['Georgia',serif] text-4xl md:text-5xl mb-6"
              >
                If you are tired of starting over every Monday,
                <br />
                <span className="italic">you are not alone.</span>
              </motion.h2>

              <motion.p
                variants={fadeInUp}
                className="text-xl mb-12 text-white/90"
              >
                A doctor monitored tirzepatide programme can help you feel in
                control again, with a plan that is safe and realistic.
              </motion.p>

              <motion.button
                variants={scaleIn}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-wine px-12 py-5 rounded-full text-lg font-medium hover:bg-cream transition-all duration-300 shadow-xl hover:shadow-2xl inline-flex items-center space-x-3"
              >
                <span>Book a weight loss consultation</span>
                <ChevronRight className="w-5 h-5" />
              </motion.button>

              <motion.p
                variants={fadeInUp}
                className="text-sm text-white/70 mt-6"
              >
                Discuss eligibility, expected outcomes, side effects, and a
                structured plan at Nexus Clinic Kuala Lumpur
              </motion.p>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

export default TirzepatideLanding;
