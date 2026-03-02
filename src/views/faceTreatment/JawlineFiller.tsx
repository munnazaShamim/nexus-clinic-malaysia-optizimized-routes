"use client";

import { motion } from "framer-motion";
import {
  Award,
  Syringe,
  Clock,
  Sparkles,
  TrendingUp,
  Heart,
  AlertCircle,
  CheckCircle2,
  XCircle,
  BadgeCheck,
  ChevronRight,
  Droplets,
  Brain,
  Zap,
  Feather,
  Target,
  Sun,
  Moon,
  Wind,
  Gem,
  Layers,
  ScanFace,
  Sparkle,
} from "lucide-react";
import {
  staggerContainer,
  fadeInLeft,
  fadeInRight,
  scaleIn,
  fadeInUp,
} from "../../lib/animations";
import FAQ from "../../components/FAQ";
import { useTranslation } from "@/src/i18n/client";
import { fallbackLng } from "@/src/i18n/settings";

const JawlineFillerLanding = ({ locale = fallbackLng }: { locale?: string }) => {
  const { t } = useTranslation(locale, "jawlineFiller");

  const faqs = [
    { q: t("faq.q1"), a: t("faq.a1") },
    { q: t("faq.q2"), a: t("faq.a2") },
    { q: t("faq.q3"), a: t("faq.a3") },
    { q: t("faq.q4"), a: t("faq.a4") },
  ];

  const trustBadges = [
    { icon: BadgeCheck, text: t("hero.trust1") },
    { icon: Syringe, text: t("hero.trust2") },
    { icon: Award, text: t("hero.trust3") },
  ];

  const whyCards = [
    { icon: ScanFace, title: t("why.card1Title"), desc: t("why.card1Desc") },
    { icon: TrendingUp, title: t("why.card2Title"), desc: t("why.card2Desc") },
    { icon: Sparkles, title: t("why.card3Title"), desc: t("why.card3Desc") },
  ];

  const propCards = [
    { icon: Droplets, label: t("what.prop1"), color: "from-blue-400/20 to-blue-600/20" },
    { icon: Layers, label: t("what.prop2"), color: "from-purple-400/20 to-purple-600/20" },
    { icon: Heart, label: t("what.prop3"), color: "from-pink-400/20 to-pink-600/20" },
    { icon: Sparkles, label: t("what.prop4"), color: "from-yellow-400/20 to-yellow-600/20" },
  ];

  const canHelp = [
    t("canHelp.help1"), t("canHelp.help2"), t("canHelp.help3"), t("canHelp.help4"), t("canHelp.help5"),
  ];

  const cannotFix = [
    t("canHelp.cannot1"), t("canHelp.cannot2"), t("canHelp.cannot3"), t("canHelp.cannot4"),
  ];

  const treatmentPoints = [
    { top: "45%", left: "45%", label: t("areas.point1") },
    { top: "60%", left: "40%", label: t("areas.point2") },
    { top: "75%", left: "35%", label: t("areas.point3") },
    { top: "85%", left: "45%", label: t("areas.point4") },
  ];

  const areaCards = [t("areas.area1"), t("areas.area2"), t("areas.area3"), t("areas.area4")];

  const processSteps = [
    { icon: ScanFace, title: t("process.step1Title"), desc: t("process.step1Desc"), step: "01" },
    { icon: Layers, title: t("process.step2Title"), desc: t("process.step2Desc"), step: "02" },
    { icon: Syringe, title: t("process.step3Title"), desc: t("process.step3Desc"), step: "03" },
    { icon: Sparkles, title: t("process.step4Title"), desc: t("process.step4Desc"), step: "04" },
  ];

  const healingItems = [t("pain.healing1"), t("pain.healing2"), t("pain.healing3"), t("pain.healing4")];

  const aftercareCards = [
    { icon: Wind, label: t("pain.card1Label"), time: t("pain.card1Time") },
    { icon: Sun, label: t("pain.card2Label"), time: t("pain.card2Time") },
    { icon: Moon, label: t("pain.card3Label"), time: t("pain.card3Time") },
    { icon: Zap, label: t("pain.card4Label"), time: t("pain.card4Time") },
  ];

  const aftercareItems = [
    t("aftercare.item1"), t("aftercare.item2"), t("aftercare.item3"),
    t("aftercare.item4"), t("aftercare.item5"), t("aftercare.item6"),
  ];

  const durationItems = [
    { value: t("longevity.dur1Value"), desc: t("longevity.dur1Desc") },
    { value: t("longevity.dur2Value"), desc: t("longevity.dur2Desc") },
    { value: t("longevity.dur3Value"), desc: t("longevity.dur3Desc") },
  ];

  const syringeItems = [
    { range: t("longevity.syr1Range"), desc: t("longevity.syr1Desc") },
    { range: t("longevity.syr2Range"), desc: t("longevity.syr2Desc") },
    { range: t("longevity.syr3Range"), desc: t("longevity.syr3Desc") },
  ];

  const comparisons = [
    { title: t("compare.comp1Title"), filler: t("compare.comp1Filler"), other: t("compare.comp1Other"), icon: Brain },
    { title: t("compare.comp2Title"), filler: t("compare.comp2Filler"), other: t("compare.comp2Other"), icon: Zap },
    { title: t("compare.comp3Title"), filler: t("compare.comp3Filler"), other: t("compare.comp3Other"), icon: Target },
  ];

  const commonEffects = [t("safety.common1"), t("safety.common2"), t("safety.common3"), t("safety.common4")];

  return (
    <>
      <main className="min-h-screen bg-linear-to-b from-light to-cream font-['Inter',sans-serif]">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-linear-to-br from-cream via-light to-cream">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-20">
            <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-wine blur-3xl"></div>
            <div className="absolute bottom-20 right-40 w-80 h-80 rounded-full bg-rose blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 py-20 lg:py-28 relative z-10">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              {/* Left Column */}
              <motion.div variants={fadeInLeft} className="space-y-8">
                <div className="inline-flex items-center gap-2 bg-taupe/10 px-4 py-2 rounded-full">
                  <Sparkle className="w-4 h-4 text-wine" />
                  <span className="text-sm font-medium text-brown">
                    {t("hero.badge")}
                  </span>
                </div>

                <h1 className="font-['Georgia',serif] text-5xl lg:text-6xl text-brown leading-tight">
                  {t("hero.title")}
                  <span className="block text-wine">{t("hero.titleHighlight")}</span>
                </h1>

                <p className="text-lg text-brown/80 max-w-lg">
                  {t("hero.desc")}
                </p>

                {/* Trust Badges */}
                <div className="flex flex-wrap gap-6 pt-4">
                  {trustBadges.map((item, idx) => (
                    <motion.div
                      key={idx}
                      variants={scaleIn}
                      className="flex items-center gap-2"
                    >
                      <item.icon className="w-5 h-5 text-wine" />
                      <span className="text-sm text-brown">{item.text}</span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4 pt-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-wine text-white px-8 py-4 rounded-full font-medium hover:bg-rose transition-colors shadow-lg shadow-wine/20"
                  >
                    {t("hero.cta1")}
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="border border-taupe text-brown px-8 py-4 rounded-full font-medium hover:bg-taupe/10 transition-colors"
                  >
                    {t("hero.cta2")}
                  </motion.button>
                </div>
              </motion.div>

              {/* Right Column - Visual Element */}
              <motion.div variants={fadeInRight} className="relative">
                <div className="relative aspect-square max-w-lg mx-auto">
                  {/* Profile Silhouette */}
                  <div className="absolute inset-0 bg-linear-to-br from-wine/10 to-rose/10 rounded-full blur-2xl"></div>
                  <div className="relative w-full h-full flex items-center justify-center">
                    <div className="w-72 h-96 bg-taupe/20 rounded-full backdrop-blur-sm border border-white/30 relative overflow-hidden">
                      {/* Simplified profile outline */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-32 h-48 border-2 border-wine/30 rounded-full"></div>
                      </div>
                      {/* Jawline highlight */}
                      <motion.div
                        animate={{
                          y: [0, -5, 0],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="absolute bottom-16 left-1/2 -translate-x-1/2 w-40 h-1 bg-linear-to-r from-transparent via-wine to-transparent"
                      ></motion.div>
                    </div>
                  </div>

                  {/* Floating Elements */}
                  {[
                    { icon: Gem, text: t("hero.float1"), top: "10%", right: "0%" },
                    {
                      icon: Feather,
                      text: t("hero.float2"),
                      bottom: "20%",
                      left: "0%",
                    },
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      animate={{
                        y: [0, -10, 0],
                      }}
                      transition={{
                        duration: 3,
                        delay: idx * 0.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="absolute bg-white/80 backdrop-blur-md px-4 py-2 rounded-full shadow-xl"
                      style={{
                        top: item.top,
                        right: item.right,
                        bottom: item.bottom,
                        left: item.left,
                      }}
                    >
                      <div className="flex items-center gap-2">
                        <item.icon className="w-4 h-4 text-wine" />
                        <span className="text-sm text-brown">{item.text}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Why Jawline Definition Matters */}
        <section className="py-24 bg-light">
          <div className="container mx-auto px-4">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              className="max-w-4xl mx-auto"
            >
              <motion.div variants={fadeInUp} className="text-center mb-16">
                <h2 className="font-['Georgia',serif] text-4xl text-brown mb-6">
                  {t("why.title")}
                  <span className="block text-wine text-2xl mt-2">
                    {t("why.titleHighlight")}
                  </span>
                </h2>
                <p className="text-lg text-brown/70 max-w-2xl mx-auto">
                  {t("why.desc")}
                </p>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-8">
                {whyCards.map((item, idx) => (
                  <motion.div
                    key={idx}
                    variants={scaleIn}
                    className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 border border-taupe/20 hover:border-wine/30 transition-colors"
                  >
                    <div className="w-16 h-16 bg-linear-to-br from-wine/10 to-rose/10 rounded-2xl flex items-center justify-center mb-6">
                      <item.icon className="w-8 h-8 text-wine" />
                    </div>
                    <h3 className="font-['Georgia',serif] text-xl text-brown mb-2">
                      {item.title}
                    </h3>
                    <p className="text-brown/60">{item.desc}</p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                variants={fadeInUp}
                className="mt-12 p-8 bg-taupe/10 rounded-3xl border border-taupe/20"
              >
                <p className="text-brown italic text-center">
                  {t("why.quote")}
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* What is Jawline Filler */}
        <section className="py-24 bg-linear-to-b from-cream to-light">
          <div className="container mx-auto px-4">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              className="grid lg:grid-cols-2 gap-16 items-center"
            >
              <motion.div variants={fadeInLeft} className="space-y-8">
                <h2 className="font-['Georgia',serif] text-4xl text-brown">
                  {t("what.title")}
                  <span className="block text-wine">{t("what.titleHighlight")}</span>
                </h2>

                <p className="text-brown/80 leading-relaxed">
                  {t("what.desc1")}
                </p>

                <p className="text-brown/80 leading-relaxed">
                  {t("what.desc2")}
                </p>

                <div className="bg-white rounded-2xl p-6 border border-taupe/20">
                  <h4 className="font-semibold text-brown mb-3 flex items-center gap-2">
                    <Target className="w-5 h-5 text-wine" />
                    {t("what.approachTitle")}
                  </h4>
                  <p className="text-brown/70">
                    {t("what.approachDesc")}
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeInRight} className="relative">
                <div className="grid grid-cols-2 gap-4">
                  {propCards.map((item, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ scale: 1.05 }}
                      className={`bg-linear-to-br ${item.color} backdrop-blur-sm rounded-2xl p-6 border border-white/30`}
                    >
                      <item.icon className="w-8 h-8 text-wine mb-3" />
                      <p className="text-sm font-medium text-brown">
                        {item.label}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* Decorative */}
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-wine/5 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-rose/5 rounded-full blur-2xl"></div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Can Help vs Cannot Fix */}
        <section className="py-24 bg-light">
          <div className="container mx-auto px-4">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              className="max-w-5xl mx-auto"
            >
              <motion.h2
                variants={fadeInUp}
                className="font-['Georgia',serif] text-4xl text-brown text-center mb-16"
              >
                {t("canHelp.title")}
                <span className="block text-wine text-2xl mt-2">
                  {t("canHelp.titleHighlight")}
                </span>
              </motion.h2>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Can Help */}
                <motion.div
                  variants={fadeInLeft}
                  className="bg-white rounded-3xl p-8 border border-green-200/50"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="font-['Georgia',serif] text-2xl text-brown">
                      {t("canHelp.helpTitle")}
                    </h3>
                  </div>

                  <ul className="space-y-4">
                    {canHelp.map((item, idx) => (
                      <motion.li
                        key={idx}
                        variants={fadeInLeft}
                        custom={idx}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-brown/80">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                {/* Cannot Fix */}
                <motion.div
                  variants={fadeInRight}
                  className="bg-white rounded-3xl p-8 border border-red-200/50"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                      <XCircle className="w-6 h-6 text-red-600" />
                    </div>
                    <h3 className="font-['Georgia',serif] text-2xl text-brown">
                      {t("canHelp.cannotTitle")}
                    </h3>
                  </div>

                  <ul className="space-y-4">
                    {cannotFix.map((item, idx) => (
                      <motion.li
                        key={idx}
                        variants={fadeInRight}
                        custom={idx}
                        className="flex items-start gap-3"
                      >
                        <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                        <span className="text-brown/80">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              <motion.p
                variants={fadeInUp}
                className="text-center mt-8 p-6 bg-taupe/10 rounded-2xl text-brown"
              >
                {t("canHelp.note")}
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Treatment Areas */}
        <section className="py-24 bg-linear-to-b from-light to-cream">
          <div className="container mx-auto px-4">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              className="max-w-4xl mx-auto"
            >
              <motion.div variants={fadeInUp} className="text-center mb-16">
                <h2 className="font-['Georgia',serif] text-4xl text-brown mb-4">
                  {t("areas.title")}
                  <span className="text-wine"> {t("areas.titleHighlight")}</span>
                </h2>
                <p className="text-brown/70">
                  {t("areas.desc")}
                </p>
              </motion.div>

              <div className="relative">
                {/* Profile silhouette with points */}
                <div className="max-w-xs mx-auto mb-12">
                  <div className="relative aspect-3/4 bg-taupe/10 rounded-3xl overflow-hidden border border-taupe/20">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-24 h-40 border-2 border-wine/30 rounded-full"></div>
                    </div>

                    {/* Treatment points */}
                    {treatmentPoints.map((point, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: idx * 0.2 }}
                        className="absolute w-4 h-4 bg-wine rounded-full cursor-pointer group"
                        style={{ top: point.top, left: point.left }}
                      >
                        <span className="absolute left-6 top-1/2 -translate-y-1/2 bg-white px-3 py-1 rounded-full text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                          {point.label}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {areaCards.map((text, idx) => (
                    <motion.div
                      key={idx}
                      variants={scaleIn}
                      className="bg-white/70 backdrop-blur-sm rounded-xl p-4 text-center border border-taupe/20"
                    >
                      <p className="text-sm text-brown">{text}</p>
                    </motion.div>
                  ))}
                </div>

                <motion.p
                  variants={fadeInUp}
                  className="mt-8 text-sm text-brown/60 italic text-center"
                >
                  {t("areas.note")}
                </motion.p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Fillers Used */}
        <section className="py-24 bg-cream">
          <div className="container mx-auto px-4">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              className="max-w-4xl mx-auto"
            >
              <motion.h2
                variants={fadeInUp}
                className="font-['Georgia',serif] text-4xl text-brown text-center mb-16"
              >
                {t("fillers.title")}
              </motion.h2>

              <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                  variants={fadeInLeft}
                  className="bg-white rounded-3xl p-8 border border-taupe/20"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-linear-to-br from-wine/20 to-rose/20 rounded-2xl flex items-center justify-center">
                      <Gem className="w-6 h-6 text-wine" />
                    </div>
                    <div>
                      <h3 className="font-['Georgia',serif] text-xl text-brown">
                        {t("fillers.filler1Name")}
                      </h3>
                      <p className="text-sm text-brown/60">
                        {t("fillers.filler1Sub")}
                      </p>
                    </div>
                  </div>
                  <p className="text-brown/70">
                    {t("fillers.filler1Desc")}
                  </p>
                </motion.div>

                <motion.div
                  variants={fadeInRight}
                  className="bg-white rounded-3xl p-8 border border-taupe/20"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-linear-to-br from-wine/20 to-rose/20 rounded-2xl flex items-center justify-center">
                      <Droplets className="w-6 h-6 text-wine" />
                    </div>
                    <div>
                      <h3 className="font-['Georgia',serif] text-xl text-brown">
                        {t("fillers.filler2Name")}
                      </h3>
                      <p className="text-sm text-brown/60">
                        {t("fillers.filler2Sub")}
                      </p>
                    </div>
                  </div>
                  <p className="text-brown/70">
                    {t("fillers.filler2Desc")}
                  </p>
                </motion.div>
              </div>

              <motion.div
                variants={fadeInUp}
                className="mt-12 p-6 bg-taupe/10 rounded-2xl border border-taupe/20"
              >
                <p className="text-brown text-center">
                  {t("fillers.note")}
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* What to Expect */}
        <section className="py-24 bg-light">
          <div className="container mx-auto px-4">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              className="max-w-5xl mx-auto"
            >
              <motion.h2
                variants={fadeInUp}
                className="font-['Georgia',serif] text-4xl text-brown text-center mb-4"
              >
                {t("process.title")}
                <span className="text-wine"> {t("process.titleHighlight")}</span>
              </motion.h2>

              <div className="grid md:grid-cols-4 gap-4 mt-16">
                {processSteps.map((item, idx) => (
                  <motion.div key={idx} variants={scaleIn} className="relative">
                    <div className="bg-white rounded-2xl p-6 border border-taupe/20 h-full">
                      <span className="text-5xl font-['Georgia',serif] text-wine/20 absolute top-2 right-4">
                        {item.step}
                      </span>
                      <item.icon
                        size={32}
                        className="w-10 h-10 text-wine mb-4"
                      />
                      <h3 className="font-semibold text-brown mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-brown/60">{item.desc}</p>
                    </div>

                    {idx < 3 && (
                      <ChevronRight className="hidden md:block absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-taupe" />
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Pain & Downtime */}
        <section className="py-24 bg-linear-to-b from-light to-cream">
          <div className="container mx-auto px-4">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <motion.div variants={fadeInLeft} className="space-y-8">
                <h2 className="font-['Georgia',serif] text-4xl text-brown">
                  {t("pain.title")}
                  <span className="block text-wine text-2xl mt-2">
                    {t("pain.titleHighlight")}
                  </span>
                </h2>

                <p className="text-brown/80">
                  {t("pain.desc")}
                </p>

                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-taupe/20">
                  <h4 className="font-semibold text-brown mb-4 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-wine" />
                    {t("pain.healingTitle")}
                  </h4>
                  <ul className="space-y-3">
                    {healingItems.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-brown/70"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-wine mt-2"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                className="grid grid-cols-2 gap-4"
              >
                {aftercareCards.map((item, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.02 }}
                    className="bg-white rounded-xl p-6 border border-taupe/20"
                  >
                    <item.icon className="w-6 h-6 text-wine mb-3" />
                    <p className="text-sm font-medium text-brown">
                      {item.label}
                    </p>
                    <p className="text-xs text-wine mt-1">{item.time}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Aftercare */}
        <section className="py-24 bg-cream">
          <div className="container mx-auto px-4">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              className="max-w-3xl mx-auto text-center"
            >
              <motion.h2
                variants={fadeInUp}
                className="font-['Georgia',serif] text-4xl text-brown mb-8"
              >
                {t("aftercare.title")}
              </motion.h2>

              <motion.p
                variants={fadeInUp}
                className="text-lg text-brown/70 mb-12"
              >
                {t("aftercare.desc")}
              </motion.p>

              <div className="grid sm:grid-cols-2 gap-6 text-left">
                {aftercareItems.map((item, idx) => (
                  <motion.div
                    key={idx}
                    variants={fadeInLeft}
                    custom={idx}
                    className="flex items-start gap-3 bg-white/50 backdrop-blur-sm rounded-xl p-4"
                  >
                    <CheckCircle2 className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                    <span className="text-sm text-brown/80">{item}</span>
                  </motion.div>
                ))}
              </div>

              <motion.p
                variants={fadeInUp}
                className="mt-8 text-sm text-brown/60 italic"
              >
                {t("aftercare.source")}
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Longevity & Syringes */}
        <section className="py-24 bg-light">
          <div className="container mx-auto px-4">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <motion.div variants={fadeInLeft} className="space-y-8">
                <h2 className="font-['Georgia',serif] text-4xl text-brown">
                  {t("longevity.title")}
                  <span className="block text-wine">{t("longevity.titleHighlight")}</span>
                </h2>

                <div className="space-y-4">
                  {durationItems.map((item, idx) => (
                    <div key={idx} className="bg-white rounded-xl p-6 border border-taupe/20">
                      <p className="text-brown/80">
                        <span className="font-semibold text-wine">
                          {item.value}
                        </span>{" "}
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>

                <p className="text-sm text-brown/60">
                  {t("longevity.source")}
                </p>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 border border-taupe/20"
              >
                <h3 className="font-['Georgia',serif] text-2xl text-brown mb-6 flex items-center gap-2">
                  <Layers className="w-6 h-6 text-wine" />
                  {t("longevity.syringeTitle")}
                </h3>

                <p className="text-brown/70 mb-6">
                  {t("longevity.syringeDesc")}
                </p>

                <div className="space-y-4">
                  {syringeItems.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex justify-between items-center p-3 bg-taupe/5 rounded-lg"
                    >
                      <span className="font-semibold text-wine">
                        {item.range}
                      </span>
                      <span className="text-sm text-brown/60">{item.desc}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Cost */}
        <section className="py-24 bg-linear-to-b from-light to-cream">
          <div className="container mx-auto px-4">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              className="max-w-3xl mx-auto text-center"
            >
              <motion.h2
                variants={fadeInUp}
                className="font-['Georgia',serif] text-4xl text-brown mb-4"
              >
                {t("cost.title")}
                <span className="block text-wine text-2xl mt-2">
                  {t("cost.titleHighlight")}
                </span>
              </motion.h2>

              <motion.div
                variants={scaleIn}
                className="bg-white rounded-3xl p-8 border border-taupe/20 mt-12"
              >
                <p className="text-lg text-brown/70 mb-8">
                  {t("cost.perSyringe")}
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 bg-linear-to-br from-wine/5 to-rose/5 rounded-2xl">
                    <h4 className="font-['Georgia',serif] text-xl text-brown mb-2">
                      {t("cost.voluxName")}
                    </h4>
                    <p className="text-2xl text-wine font-light">{t("cost.voluxPrice")}</p>
                    <p className="text-sm text-brown/60 line-through">
                      {t("cost.voluxOriginal")}
                    </p>
                    <p className="text-xs text-green-600 mt-2">{t("cost.voluxPromo")}</p>
                  </div>

                  <div className="p-6 bg-linear-to-br from-wine/5 to-rose/5 rounded-2xl">
                    <h4 className="font-['Georgia',serif] text-xl text-brown mb-2">
                      {t("cost.voliftName")}
                    </h4>
                    <p className="text-2xl text-wine font-light">{t("cost.voliftPrice")}</p>
                    <p className="text-sm text-brown/60 line-through">
                      {t("cost.voliftOriginal")}
                    </p>
                    <p className="text-xs text-green-600 mt-2">{t("cost.voliftPromo")}</p>
                  </div>
                </div>

                <p className="mt-8 text-sm text-brown/60">
                  {t("cost.note")}
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Comparison */}
        <section className="py-24 bg-cream">
          <div className="container mx-auto px-4">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              className="max-w-4xl mx-auto"
            >
              <motion.h2
                variants={fadeInUp}
                className="font-['Georgia',serif] text-4xl text-brown text-center mb-16"
              >
                {t("compare.title")}
              </motion.h2>

              <div className="space-y-6">
                {comparisons.map((item, idx) => (
                  <motion.div
                    key={idx}
                    variants={fadeInLeft}
                    className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-taupe/20"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <item.icon className="w-5 h-5 text-wine" />
                      <h3 className="font-semibold text-brown">{item.title}</h3>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-wine mt-2"></div>
                        <p className="text-sm text-brown/70">{item.filler}</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-rose mt-2"></div>
                        <p className="text-sm text-brown/70">{item.other}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.p
                variants={fadeInUp}
                className="text-center mt-8 p-4 bg-wine/5 rounded-xl text-brown italic"
              >
                {t("compare.note")}
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Safety */}
        <section className="py-24 bg-linear-to-b from-cream to-light">
          <div className="container mx-auto px-4">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              className="max-w-3xl mx-auto text-center"
            >
              <motion.h2
                variants={fadeInUp}
                className="font-['Georgia',serif] text-4xl text-brown mb-8"
              >
                {t("safety.title")}
              </motion.h2>

              <motion.div
                variants={scaleIn}
                className="bg-white rounded-3xl p-8 border border-taupe/20 mb-8"
              >
                <h3 className="font-semibold text-brown mb-4">
                  {t("safety.commonTitle")}
                </h3>
                <div className="flex flex-wrap justify-center gap-3 mb-8">
                  {commonEffects.map((item, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-taupe/10 rounded-full text-sm text-brown"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="border-t border-taupe/20 pt-6">
                  <h3 className="font-semibold text-brown mb-4">
                    {t("safety.rareTitle")}
                  </h3>
                  <p className="text-sm text-brown/70">
                    {t("safety.rareDesc")}
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="bg-red-50 border border-red-200 rounded-2xl p-6"
              >
                <AlertCircle className="w-8 h-8 text-red-500 mx-auto mb-3" />
                <p className="text-sm text-red-700">
                  {t("safety.emergency")}
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQ data={faqs} />

        {/* Location */}
        <section className="py-16 bg-brown text-light">
          <div className="container mx-auto px-4">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              className="text-center"
            >
              <motion.div variants={fadeInUp}>
                <p className="text-taupe mb-2">{t("location.visitUs")}</p>
                <p className="text-lg">
                  {t("location.address")}
                </p>
                <p className="text-sm text-taupe mt-4">
                  {t("location.established")}
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

export default JawlineFillerLanding;
