"use client";

import { motion } from "framer-motion";
import {
  Sun,
  Droplets,
  Shield,
  Sparkles,
  Calendar,
  CheckCircle2,
  AlertCircle,
  ChevronRight,
  Heart,
  Thermometer,
  Moon,
  SunDim,
  Wind,
  Zap,
  Leaf,
  Gem,
  ArrowRight,
} from "lucide-react";
import {
  fadeInUp,
  staggerContainer,
  fadeInLeft,
  fadeInRight,
  scaleIn,
} from "../../lib/animations";
import { useTranslation } from "@/src/i18n/client";
import { fallbackLng } from "@/src/i18n/settings";
import SectionBeforeAfter from "@/src/components/BeforeAfterCustomize";

const MelasmaLanding = ({ locale = fallbackLng }: { locale?: string }) => {
  const { t } = useTranslation(locale, "melasmaTreatment");

  const services = [
    {
      title: t("treatments.t1Title"),
      description: t("treatments.t1Desc"),
      icon: <Zap className="w-6 h-6" />,
      color: "from-wine/20 to-rose/20",
    },
    {
      title: t("treatments.t2Title"),
      description: t("treatments.t2Desc"),
      icon: <Gem className="w-6 h-6" />,
      color: "from-brown/20 to-taupe/20",
    },
    {
      title: t("treatments.t3Title"),
      description: t("treatments.t3Desc"),
      icon: <Leaf className="w-6 h-6" />,
      color: "from-rose/20 to-wine/20",
    },
    {
      title: t("treatments.t4Title"),
      description: t("treatments.t4Desc"),
      icon: <Droplets className="w-6 h-6" />,
      color: "from-taupe/20 to-brown/20",
    },
  ];

  const triggers = [
    {
      icon: <Sun className="w-5 h-5" />,
      text: t("understanding.trigger1"),
      color: "text-rose",
    },
    {
      icon: <Thermometer className="w-5 h-5" />,
      text: t("understanding.trigger2"),
      color: "text-wine",
    },
    {
      icon: <Heart className="w-5 h-5" />,
      text: t("understanding.trigger3"),
      color: "text-brown",
    },
    {
      icon: <Wind className="w-5 h-5" />,
      text: t("understanding.trigger4"),
      color: "text-taupe",
    },
  ];

  const comparisons = [
    {
      type: t("results.comp1Type"),
      best: t("results.comp1Best"),
      limit: t("results.comp1Limit"),
    },
    {
      type: t("results.comp2Type"),
      best: t("results.comp2Best"),
      limit: t("results.comp2Limit"),
    },
    {
      type: t("results.comp3Type"),
      best: t("results.comp3Best"),
      limit: t("results.comp3Limit"),
    },
  ];

  const faqs = [
    { q: t("faq.q1"), a: t("faq.a1") },
    { q: t("faq.q2"), a: t("faq.a2") },
    { q: t("faq.q3"), a: t("faq.a3") },
    { q: t("faq.q4"), a: t("faq.a4") },
  ];

  const trustItems = [
    t("hero.trust1"),
    t("hero.trust2"),
    t("hero.trust3"),
    t("hero.trust4"),
  ];

  const heroAreas = [
    t("hero.area1"),
    t("hero.area2"),
    t("hero.area3"),
    t("hero.area4"),
  ];

  const whyItems = [
    t("understanding.whyItem1"),
    t("understanding.whyItem2"),
    t("understanding.whyItem3"),
    t("understanding.whyItem4"),
  ];

  const approachSteps = [
    {
      step: t("approach.step1Num"),
      title: t("approach.step1Title"),
      desc: t("approach.step1Desc"),
      icon: <Moon className="w-8 h-8" />,
      color: "from-wine/20 to-rose/20",
    },
    {
      step: t("approach.step2Num"),
      title: t("approach.step2Title"),
      desc: t("approach.step2Desc"),
      icon: <Sparkles className="w-8 h-8" />,
      color: "from-brown/20 to-taupe/20",
    },
    {
      step: t("approach.step3Num"),
      title: t("approach.step3Title"),
      desc: t("approach.step3Desc"),
      icon: <Shield className="w-8 h-8" />,
      color: "from-rose/20 to-wine/20",
    },
  ];

  const resultItems = [
    t("results.result1"),
    t("results.result2"),
    t("results.result3"),
  ];

  const preventionTips = [
    {
      icon: <SunDim className="w-8 h-8" />,
      title: t("prevention.tip1Title"),
      desc: t("prevention.tip1Desc"),
      color: "from-wine/20 to-rose/20",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: t("prevention.tip2Title"),
      desc: t("prevention.tip2Desc"),
      color: "from-brown/20 to-taupe/20",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: t("prevention.tip3Title"),
      desc: t("prevention.tip3Desc"),
      color: "from-rose/20 to-wine/20",
    },
  ];

      const transformations = [
    {
      id: 1,
      before: "/images/B&A-skin/B&A-melasma-treatment1.webp",
      after: "/images/B&A-skin/B&A-melasma-treatment1.webp",
    },
    {
      id: 2,
      before: "/images/B&A-skin/B&A-melasma-treatment2.webp",
      after: "/images/B&A-skin/B&A-melasma-treatment2.webp",
    },
    {
      id: 3,
      before: "/images/B&A-skin/B&A-melasma-treatment3.webp",
      after: "/images/B&A-skin/B&A-melasma-treatment3.webp",
    },
  ];

  return (
    <>
      <main className="min-h-screen bg-linear-to-b from-light via-cream/50 to-light">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-20 right-10 w-96 h-96 bg-wine/5 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-10 w-80 h-80 bg-rose/5 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="max-w-5xl mx-auto"
            >
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <motion.div variants={fadeInLeft} className="space-y-8">
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 bg-glass backdrop-blur-sm px-4 py-2 rounded-full border border-cream">
                    <span className="w-2 h-2 bg-wine rounded-full animate-pulse" />
                    <span className="text-sm font-medium text-brown">
                      {t("hero.badge")}
                    </span>
                  </div>

                  {/* Main Heading */}
                  <h1 className="font-georgia text-5xl lg:text-6xl text-brown leading-tight">
                    {t("hero.title1")}
                    <span className="block text-wine">{t("hero.title2")}</span>
                  </h1>

                  {/* Description */}
                  <p className="text-lg text-taupe leading-relaxed max-w-lg">
                    {t("hero.desc")}
                  </p>

                  {/* Trust Indicators */}
                  <div className="flex wrap gap-6 pt-4">
                    {trustItems.map((item, i) => (
                      <motion.div
                        key={i}
                        variants={scaleIn}
                        className="flex items-center gap-2 text-sm text-brown"
                      >
                        <CheckCircle2 className="w-4 h-4 text-wine" />
                        <span>{item}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex wrap gap-4 pt-4">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="group px-8 py-4 bg-wine text-light rounded-full font-medium
                             hover:bg-brown transition-all duration-300 shadow-lg hover:shadow-xl
                             flex items-center gap-2"
                    >
                      {t("hero.bookBtn")}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-8 py-4 border-2 border-wine/30 text-wine rounded-full
                             font-medium hover:border-wine hover:bg-wine/5 transition-all"
                    >
                      {t("hero.whatsappBtn")}
                    </motion.button>
                  </div>
                </motion.div>

                <motion.div variants={fadeInRight} className="relative">
                  {/* Glass Card */}
                  <div className="bg-glass backdrop-blur-md rounded-3xl p-8 border border-cream shadow-2xl">
                    <div className="space-y-6">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-wine/10 rounded-2xl flex items-center justify-center">
                          <Sparkles className="w-6 h-6 text-wine" />
                        </div>
                        <div>
                          <h3 className="font-georgia text-xl text-brown">
                            {t("hero.glassTitle")}
                          </h3>
                          <p className="text-taupe">
                            {t("hero.glassSubtitle")}
                          </p>
                        </div>
                      </div>

                      <p className="text-brown/80 leading-relaxed">
                        {t("hero.glassQuote")}
                      </p>

                      <div className="grid grid-cols-2 gap-3">
                        {heroAreas.map((area, i) => (
                          <div
                            key={i}
                            className="bg-cream/50 rounded-xl p-3 text-center"
                          >
                            <span className="text-sm font-medium text-brown">
                              {area}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Understanding Melasma Section */}
        <section className="py-24 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-6xl mx-auto"
            >
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <motion.div variants={fadeInLeft} className="space-y-8">
                  <div>
                    <span className="text-wine font-medium tracking-wider text-sm uppercase">
                      {t("understanding.badge")}
                    </span>
                    <h2 className="font-georgia text-4xl text-brown mt-2">
                      {t("understanding.title")}
                    </h2>
                  </div>

                <div className="relative rounded-3xl overflow-hidden shadow-xl">
                 <img
                   src="/images/skin/melasma-treament.webp"
                   alt="Melasma Treatment"
                   className="w-full h-auto"
                 />
                 <div className="absolute inset-0 bg-linear-to-t from-brown/40 to-transparent"></div>
               </div>


                  <p className="text-lg text-taupe leading-relaxed">
                    {t("understanding.desc")}
                  </p>

                  <div className="bg-cream/50 rounded-3xl p-8 border border-cream">
                    <h3 className="font-georgia text-xl text-brown mb-4">
                      {t("understanding.triggersTitle")}
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      {triggers.map((trigger, i) => (
                        <motion.div
                          key={i}
                          variants={scaleIn}
                          className="flex items-center gap-3 bg-white/50 rounded-xl p-3"
                        >
                          <div className={`${trigger.color} p-2 rounded-lg`}>
                            {trigger.icon}
                          </div>
                          <span className="text-sm font-medium text-brown">
                            {trigger.text}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                <motion.div variants={fadeInRight} className="space-y-6">
                  <div className="bg-glass backdrop-blur-sm rounded-3xl p-8 border border-cream">
                    <h3 className="font-georgia text-xl text-brown mb-6">
                      {t("understanding.whyMalaysiaTitle")}
                    </h3>
                    <p className="text-brown/70 mb-6">
                      {t("understanding.whyMalaysiaDesc")}
                    </p>

                    <div className="space-y-4">
                      {whyItems.map((item, i) => (
                        <motion.div
                          key={i}
                          variants={fadeInUp}
                          className="flex items-center gap-3"
                        >
                          <div className="w-1.5 h-1.5 bg-wine rounded-full" />
                          <span className="text-brown/70">{item}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-wine/5 rounded-3xl p-8 border border-wine/10">
                    <h3 className="font-georgia text-xl text-brown mb-4">
                      {t("understanding.isItTitle")}
                    </h3>
                    <p className="text-brown/70 mb-4">
                      {t("understanding.isItDesc")}
                    </p>
                    <p className="text-sm text-taupe">
                      {t("understanding.isItNote")}
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Approach Section */}
        <section className="py-24 bg-linear-to-b from-cream/30 to-light">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center mb-16"
            >
              <span className="text-wine font-medium tracking-wider text-sm uppercase">
                {t("approach.badge")}
              </span>
              <h2 className="font-georgia text-4xl text-brown mt-2 mb-6">
                {t("approach.title")}
              </h2>
              <p className="text-lg text-taupe">
                {t("approach.desc")}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {approachSteps.map((item, i) => (
                <motion.div
                  key={i}
                  variants={scaleIn}
                  whileHover={{ y: -5 }}
                  className="relative group"
                >
                  <div
                    className="bg-glass backdrop-blur-sm rounded-3xl p-8 border border-cream
                              hover:border-wine/30 transition-all duration-300"
                  >
                    <div
                      className={`absolute inset-0 bg-linear-to-br ${item.color} rounded-3xl opacity-0
                                  group-hover:opacity-100 transition-opacity duration-500`}
                    />
                    <div className="relative z-10">
                      <div className="text-6xl font-georgia text-brown/10 mb-4">
                        {item.step}
                      </div>
                      <div
                        className="w-16 h-16 bg-wine/10 rounded-2xl flex items-center justify-center mb-6
                                  group-hover:scale-110 transition-transform duration-300"
                      >
                        {item.icon}
                      </div>
                      <h3 className="font-georgia text-xl text-brown mb-3">
                        {item.title}
                      </h3>
                      <p className="text-taupe">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Treatment Options */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-linear(ellipse_at_top,var(--tw-linear-stops))] from-wine/5 via-transparent to-transparent" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-6xl mx-auto"
            >
              <div className="text-center mb-16">
                <span className="text-wine font-medium tracking-wider text-sm uppercase">
                  {t("treatments.badge")}
                </span>
                <h2 className="font-georgia text-4xl text-brown mt-2">
                  {t("treatments.title")}
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {services.map((service, i) => (
                  <motion.div
                    key={i}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.02 }}
                    className="group relative"
                  >
                    <div
                      className={`absolute inset-0 bg-linear-to-br ${service.color} rounded-3xl
                                  opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    />
                    <div
                      className="relative bg-glass backdrop-blur-sm rounded-3xl p-8 border border-cream
                                h-full group-hover:border-wine/30 transition-all duration-300"
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className="w-14 h-14 bg-wine/10 rounded-2xl flex items-center justify-center
                                    group-hover:scale-110 transition-transform duration-300"
                        >
                          {service.icon}
                        </div>
                        <div className="1">
                          <h3 className="font-georgia text-xl text-brown mb-2">
                            {service.title}
                          </h3>
                          <p className="text-taupe mb-4">
                            {service.description}
                          </p>
                          <button
                            className="text-wine font-medium inline-flex items-center gap-2
                                         hover:gap-3 transition-all"
                          >
                            {t("treatments.learnMore")} <ChevronRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Results & Expectations */}
        <section className="py-24 bg-cream/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-5xl mx-auto"
            >
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div variants={fadeInLeft} className="space-y-6">
                  <span className="text-wine font-medium tracking-wider text-sm uppercase">
                    {t("results.badge")}
                  </span>
                  <h2 className="font-georgia text-4xl text-brown">
                    {t("results.title")}
                  </h2>

                  <div className="space-y-4">
                    {resultItems.map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                        <span className="text-brown/70">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-white/50 rounded-2xl p-6 border border-cream">
                    <h3 className="font-georgia text-lg text-brown mb-3">
                      {t("results.importantTitle")}
                    </h3>
                    <p className="text-taupe text-sm">
                      {t("results.importantDesc")}
                    </p>
                  </div>
                </motion.div>

                <motion.div variants={fadeInRight} className="space-y-6">
                  <div className="bg-glass backdrop-blur-sm rounded-3xl p-8 border border-cream">
                    <h3 className="font-georgia text-xl text-brown mb-6">
                      {t("results.comparisonTitle")}
                    </h3>
                    <div className="space-y-4">
                      {comparisons.map((item, i) => (
                        <div
                          key={i}
                          className="border-b border-cream last:border-0 pb-4 last:pb-0"
                        >
                          <div className="flex items-center gap-2 mb-2">
                            <span className="font-georgia text-brown">
                              {item.type}
                            </span>
                          </div>
                          <div className="grid grid-cols-2 gap-2 text-sm">
                            <div>
                              <span className="text-wine font-medium">
                                {t("results.bestLabel")}
                              </span>
                              <span className="text-taupe">{item.best}</span>
                            </div>
                            <div>
                              <span className="text-rose font-medium">
                                {t("results.limitLabel")}
                              </span>
                              <span className="text-taupe">{item.limit}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-wine/5 rounded-2xl">
                    <AlertCircle className="w-5 h-5 text-wine shrink-0" />
                    <p className="text-sm text-brown">
                      <span className="font-medium">
                        {t("results.riskTitle")}
                      </span>{" "}
                      {t("results.riskDesc")}
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* BEFORE & AFTER */}
        <SectionBeforeAfter transformations={transformations} />

        {/* Prevention Tips */}
        <section className="py-24 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center mb-12"
            >
              <span className="text-wine font-medium tracking-wider text-sm uppercase">
                {t("prevention.badge")}
              </span>
              <h2 className="font-georgia text-4xl text-brown mt-2">
                {t("prevention.title")}
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {preventionTips.map((item, i) => (
                <motion.div
                  key={i}
                  variants={scaleIn}
                  whileHover={{ y: -5 }}
                  className="group relative"
                >
                  <div
                    className={`absolute inset-0 bg-linear-to-br ${item.color} rounded-3xl
                                opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />
                  <div
                    className="relative bg-glass backdrop-blur-sm rounded-3xl p-8 border border-cream
                              text-center group-hover:border-wine/30 transition-all duration-300"
                  >
                    <div
                      className="w-16 h-16 bg-wine/10 rounded-2xl flex items-center justify-center mx-auto mb-4
                                group-hover:scale-110 transition-transform duration-300"
                    >
                      {item.icon}
                    </div>
                    <h3 className="font-georgia text-xl text-brown mb-3">
                      {item.title}
                    </h3>
                    <p className="text-taupe text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-linear-to-b from-light to-cream/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <div className="text-center mb-12">
                <span className="text-wine font-medium tracking-wider text-sm uppercase">
                  {t("faq.badge")}
                </span>
                <h2 className="font-georgia text-4xl text-brown mt-2">
                  {t("faq.title")}
                </h2>
              </div>

              <div className="grid gap-4">
                {faqs.map((faq, i) => (
                  <motion.div
                    key={i}
                    variants={fadeInUp}
                    className="group bg-glass backdrop-blur-sm rounded-2xl border border-cream
                           hover:border-wine/30 transition-all duration-300 overflow-hidden"
                  >
                    <details className="group">
                      <summary
                        className="flex items-center justify-between p-6 cursor-pointer
                                     list-none marker:hidden"
                      >
                        <span className="font-georgia text-brown text-lg pr-8">
                          {faq.q}
                        </span>
                        <ChevronRight className="w-5 h-5 text-wine group-open:rotate-90 transition-transform" />
                      </summary>
                      <div className="px-6 pb-6">
                        <p className="text-taupe leading-relaxed">{faq.a}</p>
                      </div>
                    </details>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-linear(ellipse_at_center,var(--tw-linear-stops))] from-wine/10 via-transparent to-transparent" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <motion.div variants={scaleIn} className="mb-8">
                <span className="hidden w-20 h-20 bg-wine/10 rounded-full mb-6" />
              </motion.div>

              <motion.h2
                variants={fadeInUp}
                className="font-georgia text-4xl lg:text-5xl text-brown mb-6 leading-tight"
              >
                {t("cta.title1")}
                <span className="block text-wine">{t("cta.title2")}</span>
              </motion.h2>

              <motion.p
                variants={fadeInUp}
                className="text-lg text-taupe mb-10 max-w-2xl mx-auto"
              >
                {t("cta.desc")}
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="flex wrap gap-4 justify-center"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group px-10 py-5 bg-wine text-light rounded-full font-medium
                         hover:bg-brown transition-all duration-300 shadow-xl hover:shadow-2xl
                         flex items-center gap-3 text-lg"
                >
                  {t("cta.bookBtn")}
                  <Calendar className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 border-2 border-wine/30 text-wine rounded-full
                         font-medium hover:border-wine hover:bg-wine/5 transition-all text-lg"
                >
                  {t("cta.whatsappBtn")}
                </motion.button>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="mt-12 flex items-center justify-center gap-6 text-sm text-taupe"
              >
                <span>✓ {t("cta.trust1")}</span>
                <span>✓ {t("cta.trust2")}</span>
                <span>✓ {t("cta.trust3")}</span>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

export default MelasmaLanding;
