"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  Shield,
  Clock,
  MapPin,
  Sun,
  Droplets,
  ChevronRight,
  Star,
  Heart,
  Flower2,
  Sparkle,
  Target,
  Calendar,
  MessageCircle,
  Quote,
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

const PigmentationLanding = ({ locale = fallbackLng }: { locale?: string }) => {
  const { t } = useTranslation(locale, "pigmentationTreatment");

  const causes = [
    {
      icon: Sun,
      title: t("whyMalaysia.cause1Title"),
      desc: t("whyMalaysia.cause1Desc"),
      color: "rose",
    },
    {
      icon: Heart,
      title: t("whyMalaysia.cause2Title"),
      desc: t("whyMalaysia.cause2Desc"),
      color: "wine",
    },
    {
      icon: Droplets,
      title: t("whyMalaysia.cause3Title"),
      desc: t("whyMalaysia.cause3Desc"),
      color: "taupe",
    },
    {
      icon: Flower2,
      title: t("whyMalaysia.cause4Title"),
      desc: t("whyMalaysia.cause4Desc"),
      color: "brown",
    },
  ];

  const pigmentTypes = [
    t("whatIs.type1"),
    t("whatIs.type2"),
    t("whatIs.type3"),
    t("whatIs.type4"),
  ];

  const typeCards = [
    {
      title: t("types.type1Title"),
      desc: t("types.type1Desc"),
      color: "wine",
      icon: Heart,
    },
    {
      title: t("types.type2Title"),
      desc: t("types.type2Desc"),
      color: "rose",
      icon: Sun,
    },
    {
      title: t("types.type3Title"),
      desc: t("types.type3Desc"),
      color: "taupe",
      icon: Sparkle,
    },
    {
      title: t("types.type4Title"),
      desc: t("types.type4Desc"),
      color: "brown",
      icon: Droplets,
    },
  ];

  const goodFitItems = [
    t("whoFor.fit1"),
    t("whoFor.fit2"),
    t("whoFor.fit3"),
  ];

  const pauseItems = [
    t("whoFor.pause1"),
    t("whoFor.pause2"),
    t("whoFor.pause3"),
  ];

  const resultItems = [
    t("results.result1"),
    t("results.result2"),
    t("results.result3"),
  ];

  const downtimeItems = [
    t("results.downtime1"),
    t("results.downtime2"),
    t("results.downtime3"),
  ];

  const sideEffects = [
    t("safety.effect1"),
    t("safety.effect2"),
    t("safety.effect3"),
  ];

  const treatmentAreas = [
    t("areas.area1"),
    t("areas.area2"),
    t("areas.area3"),
    t("areas.area4"),
    t("areas.area5"),
    t("areas.area6"),
    t("areas.area7"),
    t("areas.area8"),
    t("areas.area9"),
  ];

  const faqItems = [
    { q: t("faq.q1"), a: t("faq.a1") },
    { q: t("faq.q2"), a: t("faq.a2") },
    { q: t("faq.q3"), a: t("faq.a3") },
    { q: t("faq.q4"), a: t("faq.a4") },
    { q: t("faq.q5"), a: t("faq.a5") },
  ];

  const whyNexusItems = [
    {
      icon: Clock,
      title: t("whyNexus.point1Title"),
      desc: t("whyNexus.point1Desc"),
    },
    {
      icon: MapPin,
      title: t("whyNexus.point2Title"),
      desc: t("whyNexus.point2Desc"),
    },
    {
      icon: Sparkles,
      title: t("whyNexus.point3Title"),
      desc: t("whyNexus.point3Desc"),
    },
    {
      icon: Heart,
      title: t("whyNexus.point4Title"),
      desc: t("whyNexus.point4Desc"),
    },
    {
      icon: Shield,
      title: t("whyNexus.point5Title"),
      desc: t("whyNexus.point5Desc"),
    },
    {
      icon: Star,
      title: t("whyNexus.point6Title"),
      desc: t("whyNexus.point6Desc"),
    },
  ];

    const transformations = [
    {
      id: 1,
      before: "/images/B&A-skin/B&A-pigmentation-treatment1.webp",
      after: "/images/B&A-skin/B&A-pigmentation-treatment1.webp",
    },
    {
      id: 2,
      before: "/images/B&A-skin/B&A-pigmentation-treatment2.webp",
      after: "/images/B&A-skin/B&A-pigmentation-treatment2.webp",
    },
    {
      id: 3,
      before: "/images/B&A-skin/B&A-pigmentation-treatment3.webp",
      after: "/images/B&A-skin/B&A-pigmentation-treatment3.webp",
    },
  ];

  return (
    <>
      <main className="w-full bg-light font-['Inter',sans-serif] overflow-hidden">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center">
          {/* Background Pattern */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-linear-to-br from-cream to-transparent opacity-60 rounded-bl-[100px]" />
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-linear-to-tr from-taupe to-transparent opacity-20 rounded-tr-[100px]" />
            {/* Decorative elements */}
            <div className="absolute top-20 left-10 text-wine opacity-20">
              <Sparkle size={60} />
            </div>
            <div className="absolute bottom-40 right-20 text-rose opacity-20">
              <Flower2 size={80} />
            </div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <motion.div variants={fadeInLeft} className="space-y-8">
                <div className="inline-flex items-center space-x-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full border border-cream">
                  <Shield className="w-4 h-4 text-wine" />
                  <span className="text-sm text-brown">
                    {t("hero.badge")}
                  </span>
                </div>

                <h1 className="font-['Georgia',serif] text-5xl lg:text-6xl text-brown leading-tight">
                  {t("hero.title1")}
                  <span className="block text-wine relative">
                    {t("hero.title2")}
                    <motion.span
                      className="absolute -bottom-2 left-0 w-full h-0.5 bg-taupe"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ delay: 1, duration: 1 }}
                    />
                  </span>
                  {t("hero.title3")}
                </h1>

                <p className="text-xl text-taupe leading-relaxed">
                  {t("hero.desc")}
                </p>

                <motion.div variants={scaleIn} className="flex wrap gap-4">
                  <button className="group bg-wine text-white px-8 py-4 rounded-full hover:bg-rose transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2">
                    <span>{t("hero.button")}</span>
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="border-2 border-wine text-wine px-8 py-4 rounded-full hover:bg-cream transition-all duration-300">
                    {t("hero.learnMore")}
                  </button>
                </motion.div>

                {/* Location Badge */}
                <motion.div
                  variants={fadeInUp}
                  className="flex items-center space-x-2 text-brown bg-white/50 backdrop-blur-sm p-4 rounded-2xl border border-cream"
                >
                  <MapPin className="w-5 h-5 text-wine" />
                  <span>
                    {t("hero.address")}
                  </span>
                </motion.div>
              </motion.div>

              <motion.div variants={fadeInRight} className="relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="/images/skin/pigmentation-treatment.webp"
                    alt="pigmentation treatment"
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-brown/20 to-transparent" />

                  {/* Floating Cards */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5, duration: 0.5 }}
                    className="absolute bottom-6 left-6 right-6 bg-white/70 backdrop-blur-md p-4 rounded-2xl border border-white/50"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="bg-wine rounded-full p-2">
                        <Sparkles className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-brown font-medium">
                          {t("hero.floatingTitle")}
                        </p>
                        <p className="text-xs text-taupe">
                          {t("hero.floatingDesc")}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Why Malaysia Section */}
        <section className="relative py-24 bg-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={staggerContainer}
              className="space-y-16"
            >
              <motion.div
                variants={fadeInUp}
                className="text-center max-w-3xl mx-auto"
              >
                <div className="inline-flex items-center justify-center space-x-2 mb-4">
                  <Sun className="w-6 h-6 text-wine" />
                  <span className="text-wine font-medium">
                    {t("whyMalaysia.badge")}
                  </span>
                </div>
                <h2 className="font-['Georgia',serif] text-4xl text-brown mb-4">
                  {t("whyMalaysia.title")}
                </h2>
                <p className="text-lg text-taupe">
                  {t("whyMalaysia.desc")}
                </p>
              </motion.div>

              <motion.div
                variants={staggerContainer}
                className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {causes.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={scaleIn}
                    whileHover={{ y: -5, transition: { duration: 0.3 } }}
                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-cream"
                  >
                    <div
                      className={`bg-${item.color}/10 w-14 h-14 rounded-xl flex items-center justify-center mb-4`}
                    >
                      <item.icon className={`w-7 h-7 text-${item.color}`} />
                    </div>
                    <h3 className="text-xl font-semibold text-brown mb-2">
                      {item.title}
                    </h3>
                    <p className="text-taupe">{item.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* What is Pigmentation Section */}
        <section className="relative py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={staggerContainer}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <motion.div variants={fadeInLeft} className="space-y-6">
                <h2 className="font-['Georgia',serif] text-4xl text-brown">
                  {t("whatIs.title")}
                  <span className="block text-wine text-2xl mt-2">
                    {t("whatIs.subtitle")}
                  </span>
                </h2>

                <p className="text-lg text-taupe leading-relaxed">
                  {t("whatIs.desc")}
                </p>

                <div className="bg-cream p-6 rounded-2xl border-l-4 border-wine">
                  <p className="text-brown italic">
                    {t("whatIs.quote")}
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeInRight} className="relative">
                <div className="grid grid-cols-2 gap-4">
                  {pigmentTypes.map((type, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.02 }}
                      className="bg-white p-4 rounded-xl shadow-md border border-cream"
                    >
                      <div className="w-full h-2 bg-linear-to-r from-taupe to-wine rounded-full mb-3" />
                      <p className="text-brown font-medium">{type}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Decorative */}
                <div className="absolute -z-10 -top-6 -right-6 w-32 h-32 bg-cream rounded-full opacity-50" />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Types of Pigmentation */}
        <section className="relative py-24 bg-linear-to-b from-white to-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={staggerContainer}
              className="space-y-12"
            >
              <motion.div variants={fadeInUp} className="text-center">
                <h2 className="font-['Georgia',serif] text-4xl text-brown mb-4">
                  {t("types.title")}
                </h2>
                <p className="text-lg text-taupe">
                  {t("types.desc")}
                </p>
              </motion.div>

              <motion.div
                variants={staggerContainer}
                className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {typeCards.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={scaleIn}
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
                  >
                    <div
                      className={`bg-${item.color}/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4`}
                    >
                      <item.icon className={`w-6 h-6`} />
                    </div>
                    <h3 className="text-xl font-semibold text-brown mb-2">
                      {item.title}
                    </h3>
                    <p className="text-taupe text-sm">{item.desc}</p>
                  </motion.div>
                ))}
              </motion.div>

              {/* Warning Box */}
              <motion.div
                variants={fadeInUp}
                className="bg-white p-6 rounded-2xl border-2 border-wine shadow-lg max-w-3xl mx-auto"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-wine rounded-full p-2 shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-brown mb-2">
                      {t("types.warningTitle")}
                    </h4>
                    <p className="text-taupe">
                      {t("types.warningDesc")}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Who It's For */}
        <section className="relative py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={staggerContainer}
              className="grid lg:grid-cols-2 gap-12"
            >
              {/* Good Fit */}
              <motion.div
                variants={fadeInLeft}
                className="bg-white p-8 rounded-3xl shadow-xl border border-cream"
              >
                <div className="bg-rose/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <Star className="w-8 h-8 text-rose" />
                </div>
                <h3 className="font-['Georgia',serif] text-2xl text-brown mb-4">
                  {t("whoFor.goodFitTitle")}
                </h3>
                <ul className="space-y-4">
                  {goodFitItems.map((item, index) => (
                    <motion.li
                      key={index}
                      variants={fadeInUp}
                      className="flex items-start space-x-3"
                    >
                      <ChevronRight className="w-5 h-5 text-wine shrink-0 mt-1" />
                      <span className="text-taupe">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Pause */}
              <motion.div
                variants={fadeInRight}
                className="bg-cream p-8 rounded-3xl shadow-xl border border-taupe"
              >
                <div className="bg-wine/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <Clock className="w-8 h-8 text-wine" />
                </div>
                <h3 className="font-['Georgia',serif] text-2xl text-brown mb-4">
                  {t("whoFor.pauseTitle")}
                </h3>
                <ul className="space-y-4">
                  {pauseItems.map((item, index) => (
                    <motion.li
                      key={index}
                      variants={fadeInUp}
                      className="flex items-start space-x-3"
                    >
                      <ChevronRight className="w-5 h-5 text-wine shrink-0 mt-1" />
                      <span className="text-taupe">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Treatment Options */}
        <section className="relative py-24 bg-brown text-white">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-64 h-64 bg-wine rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-rose rounded-full blur-3xl" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={staggerContainer}
              className="space-y-16"
            >
              <motion.div
                variants={fadeInUp}
                className="text-center max-w-3xl mx-auto"
              >
                <h2 className="font-['Georgia',serif] text-4xl mb-4">
                  {t("treatments.title")}
                </h2>
                <p className="text-lg text-taupe">
                  {t("treatments.desc")}
                </p>
              </motion.div>

              <motion.div
                variants={staggerContainer}
                className="grid md:grid-cols-2 gap-8"
              >
                {/* Laser */}
                <motion.div
                  variants={scaleIn}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20"
                >
                  <div className="bg-wine w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-['Georgia',serif] text-2xl mb-4">
                    {t("treatments.t1Title")}
                  </h3>
                  <p className="text-taupe mb-4">
                    {t("treatments.t1Desc")}
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2 text-sm">
                      <ChevronRight className="w-4 h-4 text-wine" />
                      <span>{t("treatments.t1Point1")}</span>
                    </li>
                    <li className="flex items-center space-x-2 text-sm">
                      <ChevronRight className="w-4 h-4 text-wine" />
                      <span>{t("treatments.t1Point2")}</span>
                    </li>
                  </ul>
                </motion.div>

                {/* Chemical Peels */}
                <motion.div
                  variants={scaleIn}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20"
                >
                  <div className="bg-rose w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                    <Droplets className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-['Georgia',serif] text-2xl mb-4">
                    {t("treatments.t2Title")}
                  </h3>
                  <p className="text-taupe mb-4">
                    {t("treatments.t2Desc")}
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2 text-sm">
                      <ChevronRight className="w-4 h-4 text-wine" />
                      <span>{t("treatments.t2Point1")}</span>
                    </li>
                    <li className="flex items-center space-x-2 text-sm">
                      <ChevronRight className="w-4 h-4 text-wine" />
                      <span>{t("treatments.t2Point2")}</span>
                    </li>
                  </ul>
                </motion.div>

                {/* Topical */}
                <motion.div
                  variants={scaleIn}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20"
                >
                  <div className="bg-taupe w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-['Georgia',serif] text-2xl mb-4">
                    {t("treatments.t3Title")}
                  </h3>
                  <p className="text-taupe mb-4">
                    {t("treatments.t3Desc")}
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2 text-sm">
                      <ChevronRight className="w-4 h-4 text-wine" />
                      <span>{t("treatments.t3Point1")}</span>
                    </li>
                    <li className="flex items-center space-x-2 text-sm">
                      <ChevronRight className="w-4 h-4 text-wine" />
                      <span>{t("treatments.t3Point2")}</span>
                    </li>
                  </ul>
                </motion.div>

                {/* Dermamelan */}
                <motion.div
                  variants={scaleIn}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20"
                >
                  <div className="bg-wine w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                    <Flower2 className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-['Georgia',serif] text-2xl mb-4">
                    {t("treatments.t4Title")}
                  </h3>
                  <p className="text-taupe mb-4">
                    {t("treatments.t4Desc")}
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2 text-sm">
                      <ChevronRight className="w-4 h-4 text-wine" />
                      <span>{t("treatments.t4Point1")}</span>
                    </li>
                    <li className="flex items-center space-x-2 text-sm">
                      <ChevronRight className="w-4 h-4 text-wine" />
                      <span>{t("treatments.t4Point2")}</span>
                    </li>
                  </ul>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Laser vs Peel */}
        <section className="relative py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={staggerContainer}
              className="space-y-12"
            >
              <motion.div variants={fadeInUp} className="text-center">
                <h2 className="font-['Georgia',serif] text-4xl text-brown mb-4">
                  {t("laserVsPeel.title")}
                </h2>
                <p className="text-lg text-taupe">
                  {t("laserVsPeel.subtitle")}
                </p>
              </motion.div>

              <motion.div
                variants={staggerContainer}
                className="grid lg:grid-cols-2 gap-8"
              >
                <motion.div
                  variants={fadeInLeft}
                  className="bg-white p-8 rounded-3xl shadow-xl border border-cream"
                >
                  <div className="bg-wine w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-brown mb-4">
                    {t("laserVsPeel.laserTitle")}
                  </h3>
                  <p className="text-taupe mb-6">
                    {t("laserVsPeel.laserDesc")}
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-wine rounded-full" />
                      <span className="text-sm text-brown">
                        {t("laserVsPeel.laserPoint1")}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-wine rounded-full" />
                      <span className="text-sm text-brown">
                        {t("laserVsPeel.laserPoint2")}
                      </span>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  variants={fadeInRight}
                  className="bg-white p-8 rounded-3xl shadow-xl border border-cream"
                >
                  <div className="bg-rose w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                    <Droplets className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-brown mb-4">
                    {t("laserVsPeel.peelTitle")}
                  </h3>
                  <p className="text-taupe mb-6">
                    {t("laserVsPeel.peelDesc")}
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-rose rounded-full" />
                      <span className="text-sm text-brown">
                        {t("laserVsPeel.peelPoint1")}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-rose rounded-full" />
                      <span className="text-sm text-brown">
                        {t("laserVsPeel.peelPoint2")}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                variants={scaleIn}
                className="bg-cream p-8 rounded-3xl text-center"
              >
                <p className="text-lg text-brown font-medium">
                  {t("laserVsPeel.comboNote")}
                </p>
                <p className="text-taupe mt-2">
                  {t("laserVsPeel.guideNote")}
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* BEFORE AFTER */}
        <SectionBeforeAfter transformations={transformations}/>

        {/* Results & Downtime */}
        <section className="relative py-24 bg-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={staggerContainer}
              className="grid lg:grid-cols-2 gap-12"
            >
              <motion.div variants={fadeInLeft} className="space-y-8">
                <h2 className="font-['Georgia',serif] text-4xl text-brown">
                  {t("results.title")}
                  <span className="block text-wine text-2xl mt-2">
                    {t("results.subtitle")}
                  </span>
                </h2>

                <div className="space-y-4">
                  {resultItems.map((item, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      className="flex items-start space-x-3"
                    >
                      <div className="bg-wine rounded-full p-1 mt-1">
                        <ChevronRight className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-taupe">{item}</p>
                    </motion.div>
                  ))}
                </div>

                <div className="bg-white p-6 rounded-2xl border-l-4 border-wine">
                  <p className="text-brown italic">
                    {t("results.melasmaNote")}
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeInRight} className="space-y-8">
                <h2 className="font-['Georgia',serif] text-4xl text-brown">
                  {t("results.downtimeTitle")}
                </h2>

                <div className="bg-white p-6 rounded-2xl shadow-lg">
                  <ul className="space-y-4">
                    {downtimeItems.map((item, index) => (
                      <motion.li
                        key={index}
                        variants={fadeInUp}
                        className="flex items-center space-x-3"
                      >
                        <Calendar className="w-5 h-5 text-wine" />
                        <span className="text-brown">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                  <p className="mt-4 text-sm text-taupe">
                    {t("results.downtimeNote")}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Safety & Risks */}
        <section className="relative py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={staggerContainer}
              className="max-w-4xl mx-auto text-center space-y-8"
            >
              <motion.div variants={fadeInUp}>
                <Shield className="w-16 h-16 text-wine mx-auto mb-4" />
                <h2 className="font-['Georgia',serif] text-4xl text-brown mb-4">
                  {t("safety.title")}
                </h2>
                <p className="text-lg text-taupe">{t("safety.subtitle")}</p>
              </motion.div>

              <motion.div
                variants={scaleIn}
                className="bg-white p-8 rounded-3xl shadow-xl border border-cream"
              >
                <p className="text-brown mb-6">
                  {t("safety.desc")}
                </p>

                <div className="grid md:grid-cols-3 gap-4 mb-8">
                  {sideEffects.map((item, index) => (
                    <div key={index} className="bg-cream p-4 rounded-xl">
                      <p className="text-sm text-brown">{item}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-wine text-white p-6 rounded-2xl">
                  <p className="font-medium">
                    {t("safety.safetyNote")}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Treatment Areas */}
        <section className="relative py-24 bg-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={staggerContainer}
              className="space-y-12"
            >
              <motion.div variants={fadeInUp} className="text-center">
                <h2 className="font-['Georgia',serif] text-4xl text-brown mb-4">
                  {t("areas.title")}
                </h2>
                <p className="text-lg text-taupe">
                  {t("areas.desc")}
                </p>
              </motion.div>

              <motion.div
                variants={staggerContainer}
                className="grid grid-cols-2 md:grid-cols-4 gap-4"
              >
                {treatmentAreas.map((area, index) => (
                  <motion.div
                    key={index}
                    variants={scaleIn}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white p-4 rounded-xl shadow-md text-center border border-taupe/20"
                  >
                    <p className="text-brown font-medium">{area}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Cost Section */}
        <section className="relative py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={staggerContainer}
              className="space-y-12"
            >
              <motion.div
                variants={fadeInUp}
                className="text-center max-w-3xl mx-auto"
              >
                <h2 className="font-['Georgia',serif] text-4xl text-brown mb-4">
                  {t("cost.title")}
                </h2>
                <p className="text-lg text-taupe">
                  {t("cost.desc")}
                </p>
              </motion.div>

              <motion.div
                variants={staggerContainer}
                className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
              >
                <motion.div
                  variants={scaleIn}
                  className="bg-white p-6 rounded-2xl shadow-lg border border-cream"
                >
                  <p className="text-2xl font-semibold text-wine mb-2">
                    {t("cost.laserPrice")}
                  </p>
                  <p className="text-taupe">{t("cost.laserLabel")}</p>
                  <p className="text-xs text-brown mt-2">
                    {t("cost.laserNote")}
                  </p>
                </motion.div>

                <motion.div
                  variants={scaleIn}
                  className="bg-white p-6 rounded-2xl shadow-lg border border-cream"
                >
                  <p className="text-2xl font-semibold text-rose mb-2">
                    {t("cost.picoPrice")}
                  </p>
                  <p className="text-taupe">{t("cost.picoLabel")}</p>
                  <p className="text-xs text-brown mt-2">
                    {t("cost.picoNote")}
                  </p>
                </motion.div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="bg-cream p-6 rounded-2xl text-center max-w-3xl mx-auto"
              >
                <p className="text-brown">
                  {t("cost.disclaimer")}
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="relative py-24 bg-brown text-white">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-64 h-64 bg-wine rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-rose rounded-full blur-3xl" />
          </div>

          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={staggerContainer}
              className="space-y-12"
            >
              <motion.div variants={fadeInUp} className="text-center">
                <MessageCircle className="w-16 h-16 text-taupe mx-auto mb-4" />
                <h2 className="font-['Georgia',serif] text-4xl mb-4">
                  {t("faq.title")}
                </h2>
                <p className="text-lg text-taupe">
                  {t("faq.desc")}
                </p>
              </motion.div>

              <motion.div variants={staggerContainer} className="space-y-4">
                {faqItems.map((faq, index) => (
                  <motion.details
                    key={index}
                    variants={fadeInUp}
                    className="group bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 cursor-pointer"
                  >
                    <summary className="flex items-center justify-between text-lg font-medium">
                      {faq.q}
                      <ChevronRight className="w-5 h-5 group-open:rotate-90 transition-transform" />
                    </summary>
                    <p className="mt-4 text-taupe">{faq.a}</p>
                  </motion.details>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Why Nexus */}
        <section className="relative py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={staggerContainer}
              className="space-y-12"
            >
              <motion.div
                variants={fadeInUp}
                className="text-center max-w-3xl mx-auto"
              >
                <Quote className="w-16 h-16 text-wine mx-auto mb-4" />
                <h2 className="font-['Georgia',serif] text-4xl text-brown mb-4">
                  {t("whyNexus.title")}
                </h2>
                <p className="text-lg text-taupe">
                  {t("whyNexus.desc")}
                </p>
              </motion.div>

              <motion.div
                variants={staggerContainer}
                className="grid md:grid-cols-3 gap-6"
              >
                {whyNexusItems.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={scaleIn}
                    whileHover={{ y: -5 }}
                    className="bg-white p-6 rounded-2xl shadow-lg border border-cream text-center"
                  >
                    <div className="bg-wine/10 w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <item.icon className="w-7 h-7 text-wine" />
                    </div>
                    <h3 className="text-lg font-semibold text-brown mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-taupe">{item.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

export default PigmentationLanding;
