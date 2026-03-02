"use client";

import { motion } from "framer-motion";
import {
  Calendar,
  Shield,
  Activity,
  Moon,
  Sun,
  Flower2,
  Brain,
  AlertCircle,
  ChevronRight,
  Phone,
  MapPin,
  Sparkles,
  Search,
  CheckCircle2,
  AlertTriangle,
  ClipboardList,
  Droplet,
  Flame,
  Thermometer,
} from "lucide-react";
import {
  staggerContainer,
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  scaleIn,
} from "../../lib/animations";
import FAQ from "../../components/FAQ";
import { useTranslation } from "@/src/i18n/client";
import { fallbackLng } from "@/src/i18n/settings";

export default function HormoneTestLanding({ locale = fallbackLng }: { locale?: string }) {
  const { t } = useTranslation(locale, "hormoneTest");

  const faqs = [
    { q: t("faq.q1"), a: t("faq.a1") },
    { q: t("faq.q2"), a: t("faq.a2") },
    { q: t("faq.q3"), a: t("faq.a3") },
    { q: t("faq.q4"), a: t("faq.a4") },
    { q: t("faq.q5"), a: t("faq.a5") },
    { q: t("faq.q6"), a: t("faq.a6") },
    { q: t("faq.q7"), a: t("faq.a7") },
    { q: t("faq.q8"), a: t("faq.a8") },
    { q: t("faq.q9"), a: t("faq.a9") },
    { q: t("faq.q10"), a: t("faq.a10") },
    { q: t("faq.q11"), a: t("faq.a11") },
    { q: t("faq.q12"), a: t("faq.a12") },
  ];

  const womenReasons = [
    t("reasons.w1"),
    t("reasons.w2"),
    t("reasons.w3"),
    t("reasons.w4"),
    t("reasons.w5"),
  ];

  const menReasons = [
    t("reasons.m1"),
    t("reasons.m2"),
    t("reasons.m3"),
    t("reasons.m4"),
  ];

  const pantaiPrices = [
    { name: t("cost.p1"), price: t("cost.p1Price") },
    { name: t("cost.p2"), price: t("cost.p2Price") },
    { name: t("cost.p3"), price: t("cost.p3Price") },
    { name: t("cost.p4"), price: t("cost.p4Price") },
    { name: t("cost.p5"), price: t("cost.p5Price") },
    { name: t("cost.p6"), price: t("cost.p6Price") },
    { name: t("cost.p7"), price: t("cost.p7Price") },
  ];

  const tests = [
    { icon: Thermometer, name: t("tests.t1Name"), sub: t("tests.t1Sub"), desc: t("tests.t1Desc") },
    { icon: Flower2, name: t("tests.t2Name"), sub: t("tests.t2Sub"), desc: t("tests.t2Desc") },
    { icon: Flame, name: t("tests.t3Name"), sub: t("tests.t3Sub"), desc: t("tests.t3Desc") },
    { icon: Activity, name: t("tests.t4Name"), sub: t("tests.t4Sub"), desc: t("tests.t4Desc") },
    { icon: Brain, name: t("tests.t5Name"), sub: t("tests.t5Sub"), desc: t("tests.t5Desc") },
  ];

  const timingCards = [
    { icon: Calendar, title: t("bestTime.womenTimingTitle"), desc: t("bestTime.womenTimingDesc") },
    { icon: Droplet, title: t("bestTime.progesteroneTitle"), desc: t("bestTime.progesteroneDesc") },
    { icon: Sun, title: t("bestTime.menTimingTitle"), desc: t("bestTime.menTimingDesc") },
  ];

  const resultFactors = [
    t("results.f1"),
    t("results.f2"),
    t("results.f3"),
    t("results.f4"),
    t("results.f5"),
    t("results.f6"),
  ];

  const tips = [
    t("preparation.tip1"),
    t("preparation.tip2"),
    t("preparation.tip3"),
  ];

  const budgetItems = [
    t("cost.b1"),
    t("cost.b2"),
    t("cost.b3"),
    t("cost.b4"),
  ];

  const nexusStandout = [
    t("market.n1"),
    t("market.n2"),
    t("market.n3"),
  ];

  return (
    <>
      <main className="min-h-screen bg-cream font-['Inter',sans-serif]">
        {/* Hero Section with Image */}
        <section className="relative min-h-screen flex items-center overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80"
              alt="Medical professional consulting with patient"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-r from-brown/90 to-wine/80" />
          </div>

          {/* Decorative Elements */}
          <motion.div
            initial={{ opacity: 0, scale: 1.5 }}
            animate={{ opacity: 0.1, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute top-20 right-20 w-64 h-64 rounded-full bg-cream blur-3xl"
          />
          <motion.div
            initial={{ opacity: 0, scale: 1.5 }}
            animate={{ opacity: 0.1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.3 }}
            className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-rose blur-3xl"
          />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="max-w-4xl mx-auto text-center text-white"
            >
              <motion.div variants={scaleIn} className="mb-6">
                <span className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full">
                  <Shield className="w-4 h-4 text-white mr-2" />
                  <span className="text-sm text-white font-medium">
                    {t("hero.badge")}
                  </span>
                </span>
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="font-['Georgia',serif] text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight"
              >
                {t("hero.title1")}
                <br />
                <span className="text-cream">
                  {t("hero.title2")}
                </span>
                <br />
                {t("hero.title3")}
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto"
              >
                {t("hero.desc")}
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <button className="group bg-white text-wine px-8 py-4 rounded-full hover:bg-cream transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center">
                  {t("hero.cta1")}
                  <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full hover:bg-white/30 transition-all duration-300 border border-white/30 flex items-center justify-center">
                  <Phone className="w-5 h-5 mr-2" />
                  {t("hero.cta2")}
                </button>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="mt-12 flex items-center justify-center gap-4 text-sm text-white/80"
              >
                <MapPin className="w-4 h-4" />
                <span>{t("hero.address")}</span>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* What Is a Hormone Test Section with Image */}
        <section className="py-24 bg-white/50 backdrop-blur-sm">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={staggerContainer}
              >
                <motion.div variants={fadeInLeft} className="mb-6">
                  <span className="text-wine font-medium mb-2 block">
                    {t("whatIs.badge")}
                  </span>
                  <h2 className="font-['Georgia',serif] text-4xl md:text-5xl text-brown mb-6">
                    {t("whatIs.title")}
                  </h2>
                  <div className="w-24 h-1 bg-linear-to-r from-wine to-rose mb-8" />
                </motion.div>

                <motion.p
                  variants={fadeInUp}
                  className="text-lg text-brown mb-8 leading-relaxed"
                >
                  {t("whatIs.desc")}
                </motion.p>

                <motion.div
                  variants={fadeInUp}
                  className="bg-cream p-8 rounded-3xl border border-taupe/20"
                >
                  <div className="flex items-start gap-4">
                    <AlertCircle className="w-6 h-6 text-wine shrink-0 mt-1" />
                    <p className="text-brown">
                      {t("whatIs.note")}
                    </p>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-linear-to-tr from-wine/20 to-transparent rounded-3xl" />
                <img
                  src="https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Blood test tubes in laboratory"
                  className="rounded-3xl shadow-2xl w-full h-auto object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Common Reasons Section with Image */}
        <section className="py-24 bg-cream">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={staggerContainer}
              className="text-center mb-16"
            >
              <motion.h2
                variants={fadeInUp}
                className="font-['Georgia',serif] text-4xl md:text-5xl text-brown mb-4"
              >
                {t("reasons.title")}
              </motion.h2>
              <motion.div
                variants={fadeInUp}
                className="w-24 h-1 bg-linear-to-r from-wine to-rose mx-auto"
              />
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div className="space-y-8">
                {/* Women's Section */}
                <motion.div
                  variants={fadeInLeft}
                  whileHover={{ y: -10 }}
                  className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-taupe/10"
                >
                  <div className="mb-6">
                    <Flower2 className="w-12 h-12 text-wine" />
                  </div>
                  <h3 className="font-['Georgia',serif] text-2xl text-brown mb-6">
                    {t("reasons.womenTitle")}
                  </h3>
                  <ul className="space-y-4">
                    {womenReasons.map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-3 text-brown"
                      >
                        <CheckCircle2 className="w-5 h-5 text-rose shrink-0 mt-1" />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                {/* Men's Section */}
                <motion.div
                  variants={fadeInLeft}
                  whileHover={{ y: -10 }}
                  className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-taupe/10"
                >
                  <div className="mb-6">
                    <Activity className="w-12 h-12 text-wine" />
                  </div>
                  <h3 className="font-['Georgia',serif] text-2xl text-brown mb-6">
                    {t("reasons.menTitle")}
                  </h3>
                  <ul className="space-y-4">
                    {menReasons.map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-3 text-brown"
                      >
                        <CheckCircle2 className="w-5 h-5 text-rose shrink-0 mt-1" />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              {/* Image Column */}
              <motion.div variants={fadeInRight} className="relative h-full">
                <div className="sticky top-24">
                  <div className="absolute inset-0 bg-linear-to-b from-wine/20 to-transparent rounded-3xl" />
                  <img
                    src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="Medical consultation with doctor"
                    className="rounded-3xl shadow-2xl w-full h-auto object-cover"
                  />
                  <div className="mt-6 bg-wine/5 p-6 rounded-2xl border border-wine/20">
                    <p className="text-brown text-sm">
                      {t("reasons.edNote")}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Common Hormone Tests Section with Image */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mb-16">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative order-2 md:order-1"
              >
                <div className="absolute inset-0 bg-linear-to-tr from-rose/20 to-transparent rounded-3xl" />
                <img
                  src="https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Laboratory blood test tubes"
                  className="rounded-3xl shadow-2xl w-full h-auto object-cover"
                />
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={staggerContainer}
                className="order-1 md:order-2"
              >
                <motion.div variants={fadeInRight}>
                  <h2 className="font-['Georgia',serif] text-4xl md:text-5xl text-brown mb-4">
                    {t("tests.title")}
                  </h2>
                  <p className="text-taupe text-lg mb-8">
                    {t("tests.subtitle")}
                  </p>
                </motion.div>
              </motion.div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {tests.map((test, index) => {
                const Icon = test.icon;
                return (
                  <motion.div
                    key={index}
                    variants={scaleIn}
                    className="bg-cream p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all"
                  >
                    <div className="mb-4">
                      <div className="w-12 h-12 bg-wine/10 rounded-full flex items-center justify-center">
                        <Icon className="w-6 h-6 text-wine" />
                      </div>
                    </div>
                    <h3 className="font-['Georgia',serif] text-xl text-brown mb-2">
                      {test.name}
                    </h3>
                    <p className="text-sm text-taupe mb-3">{test.sub}</p>
                    <p className="text-brown text-sm">{test.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Best Time Section with Image Layout */}
        <section className="py-24 bg-cream">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={staggerContainer}
              >
                <motion.div variants={fadeInLeft} className="mb-8">
                  <h2 className="font-['Georgia',serif] text-4xl md:text-5xl text-brown mb-4">
                    {t("bestTime.title")}
                  </h2>
                  <p className="text-taupe text-lg">
                    {t("bestTime.subtitle")}
                  </p>
                </motion.div>

                <div className="space-y-6">
                  {timingCards.map((card, index) => {
                    const Icon = card.icon;
                    return (
                      <motion.div
                        key={index}
                        variants={fadeInUp}
                        className="bg-white p-6 rounded-2xl shadow-lg"
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-wine/10 rounded-full flex items-center justify-center shrink-0">
                            <Icon className="w-6 h-6 text-wine" />
                          </div>
                          <div>
                            <h3 className="font-['Georgia',serif] text-lg text-brown mb-2">
                              {card.title}
                            </h3>
                            <p className="text-brown text-sm">{card.desc}</p>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="sticky top-24">
                  <div className="absolute inset-0 bg-linear-to-b from-wine/20 to-transparent rounded-3xl" />
                  <img
                    src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80"
                    alt="Medical consultation with calendar"
                    className="rounded-3xl shadow-2xl w-full h-auto object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Preparation Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={staggerContainer}
              className="max-w-4xl mx-auto"
            >
              <motion.div variants={fadeInUp} className="text-center mb-12">
                <h2 className="font-['Georgia',serif] text-4xl md:text-5xl text-brown mb-4">
                  {t("preparation.title")}
                </h2>
                <p className="text-taupe">
                  {t("preparation.subtitle")}
                </p>
              </motion.div>

              <div className="space-y-6">
                {/* Fasting */}
                <motion.div
                  variants={fadeInLeft}
                  className="bg-cream p-6 rounded-2xl shadow-lg"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-wine/10 rounded-full flex items-center justify-center shrink-0">
                      <Moon className="w-5 h-5 text-wine" />
                    </div>
                    <div>
                      <h3 className="font-['Georgia',serif] text-lg text-brown mb-2">
                        {t("preparation.fastingTitle")}
                      </h3>
                      <p className="text-brown">
                        {t("preparation.fastingDesc")}
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Biotin Warning */}
                <motion.div
                  variants={fadeInRight}
                  className="bg-cream p-6 rounded-2xl shadow-lg border-l-4 border-wine"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-wine/10 rounded-full flex items-center justify-center shrink-0">
                      <AlertTriangle className="w-5 h-5 text-wine" />
                    </div>
                    <div>
                      <h3 className="font-['Georgia',serif] text-lg text-brown mb-2">
                        {t("preparation.biotinTitle")}
                      </h3>
                      <p className="text-brown">
                        {t("preparation.biotinDesc")}
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Simple Tips */}
                <motion.div
                  variants={fadeInUp}
                  className="bg-cream p-6 rounded-2xl shadow-lg"
                >
                  <h3 className="font-['Georgia',serif] text-lg text-brown mb-4">
                    {t("preparation.tipsTitle")}
                  </h3>
                  <ul className="space-y-3">
                    {tips.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-rose shrink-0" />
                        <span className="text-brown">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-24 bg-cream">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={staggerContainer}
              className="max-w-4xl mx-auto text-center"
            >
              <motion.h2
                variants={fadeInUp}
                className="font-['Georgia',serif] text-4xl md:text-5xl text-brown mb-6"
              >
                {t("results.title")}
              </motion.h2>

              <motion.p variants={fadeInUp} className="text-lg text-taupe mb-8">
                {t("results.desc")}
              </motion.p>

              <motion.div
                variants={staggerContainer}
                className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8"
              >
                {resultFactors.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={scaleIn}
                    className="bg-white p-4 rounded-xl shadow-md"
                  >
                    <span className="text-brown capitalize">{item}</span>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="bg-wine/5 p-8 rounded-3xl"
              >
                <p className="text-xl text-brown font-medium">
                  {t("results.keyQuestion")}
                </p>
              </motion.div>

              <motion.p variants={fadeInUp} className="mt-8 text-taupe">
                {t("results.nexusApproach")}
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Cost Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={staggerContainer}
              className="max-w-5xl mx-auto"
            >
              <motion.div variants={fadeInUp} className="text-center mb-12">
                <h2 className="font-['Georgia',serif] text-4xl md:text-5xl text-brown mb-4">
                  {t("cost.title")}
                </h2>
                <p className="text-taupe">{t("cost.subtitle")}</p>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="bg-cream p-8 rounded-3xl shadow-xl mb-8"
              >
                <p className="text-brown mb-6">
                  {t("cost.intro")}
                </p>

                <h3 className="font-['Georgia',serif] text-xl text-brown mb-4">
                  {t("cost.pantaiTitle")}
                </h3>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-wine mb-3">
                      {t("cost.pantaiSubtitle")}
                    </h4>
                    <ul className="space-y-2">
                      {pantaiPrices.map((item, index) => (
                        <li
                          key={index}
                          className="flex justify-between text-brown border-b border-taupe/20 py-2"
                        >
                          <span>{item.name}</span>
                          <span className="font-medium">{item.price}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-xl">
                      <p className="text-brown">
                        <span className="font-medium text-wine">
                          {t("cost.pkg1Name")}
                        </span>{" "}
                        {t("cost.pkg1Desc")}
                      </p>
                    </div>

                    <div className="bg-white p-4 rounded-xl">
                      <p className="text-brown">
                        <span className="font-medium text-wine">
                          {t("cost.pkg2Name")}
                        </span>{" "}
                        {t("cost.pkg2Desc")}
                      </p>
                    </div>

                    <div className="bg-white p-4 rounded-xl">
                      <p className="text-brown">
                        <span className="font-medium text-wine">
                          {t("cost.pkg3Name")}
                        </span>{" "}
                        {t("cost.pkg3Desc")}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="bg-wine/5 p-6 rounded-2xl"
              >
                <h3 className="font-['Georgia',serif] text-xl text-brown mb-3">
                  {t("cost.budgetTitle")}
                </h3>
                <p className="text-brown">{t("cost.budgetIntro")}</p>
                <ol className="list-decimal list-inside mt-2 space-y-1 text-brown">
                  {budgetItems.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ol>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Market Positioning Section */}
        <section className="py-24 bg-cream">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={staggerContainer}
              className="max-w-5xl mx-auto"
            >
              <motion.h2
                variants={fadeInUp}
                className="font-['Georgia',serif] text-4xl md:text-5xl text-brown text-center mb-12"
              >
                {t("market.title")}
              </motion.h2>

              <div className="grid md:grid-cols-3 gap-6">
                <motion.div
                  variants={fadeInLeft}
                  className="bg-white p-6 rounded-2xl shadow-lg"
                >
                  <Search className="w-10 h-10 text-wine mb-4" />
                  <h3 className="font-['Georgia',serif] text-lg text-brown mb-2">
                    {t("market.m1Title")}
                  </h3>
                  <p className="text-brown text-sm">
                    {t("market.m1Desc")}
                  </p>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  className="bg-white p-6 rounded-2xl shadow-lg"
                >
                  <ClipboardList className="w-10 h-10 text-wine mb-4" />
                  <h3 className="font-['Georgia',serif] text-lg text-brown mb-2">
                    {t("market.m2Title")}
                  </h3>
                  <p className="text-brown text-sm">
                    {t("market.m2Desc")}
                  </p>
                </motion.div>

                <motion.div
                  variants={fadeInRight}
                  className="bg-white p-6 rounded-2xl shadow-lg"
                >
                  <Sparkles className="w-10 h-10 text-wine mb-4" />
                  <h3 className="font-['Georgia',serif] text-lg text-brown mb-2">
                    {t("market.m3Title")}
                  </h3>
                  <p className="text-brown text-sm">
                    {t("market.m3Desc")}
                  </p>
                </motion.div>
              </div>

              {/* Nexus Stand Out */}
              <motion.div
                variants={fadeInUp}
                className="mt-12 bg-linear-to-r from-wine to-rose p-8 rounded-3xl text-white"
              >
                <h3 className="font-['Georgia',serif] text-2xl mb-4">
                  {t("market.nexusTitle")}
                </h3>
                <ul className="space-y-3">
                  {nexusStandout.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-white/80 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQ data={faqs} />

        {/* CTA Section */}
        <section className="py-24 bg-linear-to-r from-wine to-rose">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={staggerContainer}
              className="max-w-3xl mx-auto text-center text-white"
            >
              <motion.h2
                variants={fadeInUp}
                className="font-['Georgia',serif] text-4xl md:text-5xl mb-6"
              >
                {t("cta.title")}
              </motion.h2>

              <motion.p
                variants={fadeInUp}
                className="text-lg mb-8 text-white/90"
              >
                {t("cta.desc")}
              </motion.p>

              <motion.div variants={fadeInUp} className="space-y-4">
                <button className="bg-white text-wine px-8 py-4 rounded-full font-medium hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  {t("cta.button")}
                </button>

                <div className="pt-6 text-white/80">
                  <p className="flex items-center justify-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {t("cta.address")}
                  </p>
                  <p className="flex items-center justify-center gap-2 mt-2">
                    <Phone className="w-4 h-4" />
                    {t("cta.phone")}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
