"use client";

import { motion } from "framer-motion";
import {
  Activity,
  Droplet,
  Shield,
  Clock,
  Coffee,
  Moon,
  Apple,
  Heart,
  AlertCircle,
  CheckCircle2,
  ChevronRight,
  Sparkles,
  Syringe,
  Pill,
  Scale,
  Droplets,
  Users,
  HeartPulse,
  MapPin,
  DollarSign,
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

const HypothyroidLanding = ({ locale = fallbackLng }: { locale?: string }) => {
  const { t } = useTranslation(locale, "hypothyroidism");

  const realLifeItems = [
    { icon: Activity, key: "r1" },
    { icon: Scale, key: "r2" },
    { icon: Droplets, key: "r3" },
    { icon: Heart, key: "r4" },
    { icon: Users, key: "r5" },
  ];

  const faqs = Array.from({ length: 12 }, (_, i) => ({
    q: t(`faq.q${i + 1}`),
    a: t(`faq.a${i + 1}`),
  }));

  return (
    <>
      <main className="min-h-screen bg-light font-['Inter']">
        {/* Hero Section with Image */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop"
              alt="Medical professional consulting with patient about thyroid health"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-r from-light via-light/90 to-transparent"></div>
          </div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInLeft}>
                <span className="inline-flex items-center gap-2 bg-wine/10 text-wine px-4 py-2 rounded-full text-sm mb-6 backdrop-blur-sm">
                  <HeartPulse className="w-4 h-4" />
                  {t("hero.badge")}
                </span>
                <h1 className="font-['Georgia'] text-4xl lg:text-5xl xl:text-6xl font-bold text-brown leading-tight mb-6">
                  {t("hero.title")}
                </h1>
                <p className="text-xl text-taupe mb-8">
                  {t("hero.desc")}
                </p>
                <p className="text-lg text-rose mb-8">
                  {t("hero.highlight")}
                </p>
                <div className="flex flex-wrap gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-wine text-white px-8 py-4 rounded-full font-semibold hover:bg-rose transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
                  >
                    {t("hero.cta1")} <ChevronRight className="w-4 h-4" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-wine text-wine px-8 py-4 rounded-full font-semibold hover:bg-wine hover:text-white transition-all duration-300 bg-white/50 backdrop-blur-sm"
                  >
                    {t("hero.cta2")}
                  </motion.button>
                </div>
              </motion.div>
              <motion.div variants={fadeInRight} className="relative">
                <div className="relative bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/50">
                  <div className="absolute -top-4 -right-4 bg-wine text-white px-4 py-2 rounded-full text-sm font-semibold">
                    {t("hero.trustBadge")}
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-wine shrink-0 mt-1" />
                      <p className="text-brown">{t("hero.trust1")}</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="w-6 h-6 text-wine shrink-0 mt-1" />
                      <p className="text-brown">{t("hero.trust2")}</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-wine shrink-0 mt-1" />
                      <p className="text-brown">{t("hero.trust3")}</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Heart className="w-6 h-6 text-wine shrink-0 mt-1" />
                      <p className="text-brown">{t("hero.trust4")}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* What Is Hypothyroidism with Image */}
        <section className="py-20 bg-white">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
              <motion.div variants={fadeInLeft}>
                <span className="inline-block bg-cream text-wine px-4 py-2 rounded-full text-sm mb-4">
                  {t("whatIs.badge")}
                </span>
                <h2 className="font-['Georgia'] text-4xl font-bold text-brown mb-4">
                  {t("whatIs.title")}
                </h2>
                <p className="text-xl text-taupe mb-6">
                  {t("whatIs.desc")}
                </p>
                <p className="text-lg text-brown">
                  {t("whatIs.realLife")}
                </p>
              </motion.div>
              <motion.div
                variants={fadeInRight}
                className="relative h-100 rounded-2xl overflow-hidden shadow-xl"
              >
                <img
                  src="https://images.unsplash.com/photo-1666214280557-f1b5022eb634?q=80&w=2070&auto=format&fit=crop"
                  alt="Thyroid gland anatomy illustration"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-wine/20 to-transparent"></div>
              </motion.div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {realLifeItems.map((item, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={{ y: -5 }}
                  className="bg-cream p-6 rounded-xl text-center"
                >
                  <div className="w-12 h-12 bg-wine/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-wine" />
                  </div>
                  <p className="text-brown">{t(`whatIs.${item.key}`)}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Common Symptoms with Image */}
        <section className="py-20 bg-cream">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
              <motion.div variants={fadeInLeft} className="order-2 lg:order-1">
                <img
                  src="https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?q=80&w=2080&auto=format&fit=crop"
                  alt="Woman experiencing fatigue and brain fog"
                  className="w-full h-125 object-cover rounded-2xl shadow-xl"
                />
              </motion.div>
              <motion.div variants={fadeInRight} className="order-1 lg:order-2">
                <span className="inline-block bg-white text-wine px-4 py-2 rounded-full text-sm mb-4">
                  {t("symptoms.badge")}
                </span>
                <h2 className="font-['Georgia'] text-4xl font-bold text-brown mb-4">
                  {t("symptoms.title")}
                </h2>
                <p className="text-xl text-taupe mb-6">
                  {t("symptoms.desc")}
                </p>
              </motion.div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {["s1", "s2", "s3", "s4", "s5", "s6", "s7", "s8", "s9"].map((key, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm"
                >
                  <div className="w-2 h-2 bg-wine rounded-full"></div>
                  <p className="text-brown">{t(`symptoms.${key}`)}</p>
                </motion.div>
              ))}
            </div>
            <motion.p
              variants={fadeInUp}
              className="text-center mt-8 text-lg text-rose font-semibold"
            >
              {t("symptoms.bottomNote")}
            </motion.p>
          </motion.div>
        </section>

        {/* Causes with Image */}
        <section className="py-20 bg-white">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            <motion.h2
              variants={fadeInUp}
              className="font-['Georgia'] text-4xl font-bold text-brown text-center mb-12"
            >
              {t("causes.title")}
            </motion.h2>

            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              <motion.div
                variants={scaleIn}
                className="bg-cream p-8 rounded-xl"
              >
                <div className="w-16 h-16 bg-wine/10 rounded-full flex items-center justify-center mb-6">
                  <Shield className="w-8 h-8 text-wine" />
                </div>
                <h3 className="font-['Georgia'] text-2xl font-bold text-brown mb-4">
                  {t("causes.c1Title")}
                </h3>
                <p className="text-taupe">{t("causes.c1Desc")}</p>
              </motion.div>

              <motion.div
                variants={scaleIn}
                className="bg-cream p-8 rounded-xl"
              >
                <div className="w-16 h-16 bg-wine/10 rounded-full flex items-center justify-center mb-6">
                  <Syringe className="w-8 h-8 text-wine" />
                </div>
                <h3 className="font-['Georgia'] text-2xl font-bold text-brown mb-4">
                  {t("causes.c2Title")}
                </h3>
                <p className="text-taupe">{t("causes.c2Desc")}</p>
              </motion.div>

              <motion.div
                variants={scaleIn}
                className="bg-cream p-8 rounded-xl"
              >
                <div className="w-16 h-16 bg-wine/10 rounded-full flex items-center justify-center mb-6">
                  <Pill className="w-8 h-8 text-wine" />
                </div>
                <h3 className="font-['Georgia'] text-2xl font-bold text-brown mb-4">
                  {t("causes.c3Title")}
                </h3>
                <p className="text-taupe">{t("causes.c3Desc")}</p>
              </motion.div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <motion.div variants={fadeInLeft}>
                <div className="bg-wine/5 p-8 rounded-xl h-full">
                  <h3 className="font-['Georgia'] text-2xl font-bold text-brown mb-4">
                    {t("causes.vsTitle")}
                  </h3>
                  <p className="text-taupe text-lg">{t("causes.vsDesc")}</p>
                </div>
              </motion.div>
              <motion.div
                variants={fadeInRight}
                className="relative h-75 rounded-xl overflow-hidden"
              >
                <img
                  src="https://images.unsplash.com/photo-1638202993928-7267aad84c31?q=80&w=1974&auto=format&fit=crop"
                  alt="Blood test for thyroid function"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Diagnosis Section with Image */}
        <section className="py-20 bg-cream">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <h2 className="font-['Georgia'] text-4xl font-bold text-brown mb-4">
                {t("diagnosis.title")}
              </h2>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12">
              <motion.div variants={fadeInLeft}>
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <h3 className="font-['Georgia'] text-2xl font-bold text-brown mb-6">
                    {t("diagnosis.testsTitle")}
                  </h3>
                  <p className="text-taupe mb-4">{t("diagnosis.testsDesc")}</p>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3">
                      <Droplet className="w-5 h-5 text-wine" />
                      <span className="text-brown">{t("diagnosis.test1")}</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Droplet className="w-5 h-5 text-wine" />
                      <span className="text-brown">{t("diagnosis.test2")}</span>
                    </li>
                  </ul>
                  <p className="text-taupe mt-4">{t("diagnosis.testsExplain")}</p>
                  <div className="mt-6 p-4 bg-cream rounded-lg">
                    <h4 className="font-semibold text-wine mb-2">
                      {t("diagnosis.alsoNeedTitle")}
                    </h4>
                    <p className="text-brown">{t("diagnosis.alsoNeed1")}</p>
                    <p className="text-brown mt-2">{t("diagnosis.alsoNeed2")}</p>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeInRight}>
                <div className="bg-white p-8 rounded-xl shadow-lg mb-6">
                  <h3 className="font-['Georgia'] text-2xl font-bold text-brown mb-6">
                    {t("diagnosis.subTitle")}
                  </h3>
                  <p className="text-taupe mb-4">{t("diagnosis.subSubtitle")}</p>
                  <p className="text-brown mb-4">{t("diagnosis.subDesc1")}</p>
                  <p className="text-brown">{t("diagnosis.subDesc2")}</p>
                </div>
                <div className="relative h-50 rounded-xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&q=80"
                    alt="Doctor explaining test results"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Treatment Section with Image */}
        <section className="py-20 bg-white">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            <motion.h2
              variants={fadeInUp}
              className="font-['Georgia'] text-4xl font-bold text-brown text-center mb-12"
            >
              {t("treatment.title")}
            </motion.h2>

            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              <motion.div
                variants={fadeInLeft}
                className="bg-cream p-8 rounded-xl"
              >
                <h3 className="font-['Georgia'] text-2xl font-bold text-brown mb-4">
                  {t("treatment.mainTitle")}
                </h3>
                <p className="text-taupe mb-4">{t("treatment.mainDesc1")}</p>
                <p className="text-taupe">{t("treatment.mainDesc2")}</p>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                className="relative h-75 rounded-xl overflow-hidden"
              >
                <img
                  src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=2030&auto=format&fit=crop"
                  alt="Levothyroxine medication"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              <motion.div
                variants={fadeInLeft}
                className="bg-cream p-8 rounded-xl"
              >
                <h3 className="font-['Georgia'] text-2xl font-bold text-brown mb-4">
                  {t("treatment.goalsTitle")}
                </h3>
                <p className="text-taupe">{t("treatment.goalsDesc")}</p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center gap-2 text-brown">
                    <CheckCircle2 className="w-4 h-4 text-wine" />
                    {t("treatment.goal1")}
                  </li>
                  <li className="flex items-center gap-2 text-brown">
                    <CheckCircle2 className="w-4 h-4 text-wine" />
                    {t("treatment.goal2")}
                  </li>
                  <li className="flex items-center gap-2 text-brown">
                    <CheckCircle2 className="w-4 h-4 text-wine" />
                    {t("treatment.goal3")}
                  </li>
                </ul>
              </motion.div>

              <motion.div variants={fadeInRight}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-cream rounded-xl">
                    <Clock className="w-8 h-8 text-wine mx-auto mb-2" />
                    <h4 className="font-semibold text-brown text-sm mb-1">
                      {t("treatment.timeTitle")}
                    </h4>
                    <p className="text-xs text-taupe">{t("treatment.timeDesc")}</p>
                  </div>
                  <div className="text-center p-4 bg-cream rounded-xl">
                    <AlertCircle className="w-8 h-8 text-wine mx-auto mb-2" />
                    <h4 className="font-semibold text-brown text-sm mb-1">
                      {t("treatment.hiddenTitle")}
                    </h4>
                    <p className="text-xs text-taupe">{t("treatment.hiddenDesc")}</p>
                  </div>
                  <div className="text-center p-4 bg-cream rounded-xl col-span-2">
                    <Coffee className="w-8 h-8 text-wine mx-auto mb-2" />
                    <h4 className="font-semibold text-brown text-sm mb-1">
                      {t("treatment.klTitle")}
                    </h4>
                    <p className="text-xs text-taupe">{t("treatment.klDesc")}</p>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              variants={fadeInUp}
              className="bg-wine text-white p-8 rounded-xl mb-12"
            >
              <h3 className="font-['Georgia'] text-2xl font-bold mb-4">
                {t("treatment.bestTitle")}
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                  <span>{t("treatment.best1")}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                  <span>{t("treatment.best2")}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Moon className="w-5 h-5 shrink-0 mt-0.5" />
                  <span>{t("treatment.best3")}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                  <span>{t("treatment.best4")}</span>
                </li>
              </ul>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-cream p-8 rounded-xl">
              <h3 className="font-['Georgia'] text-2xl font-bold text-brown mb-4">
                {t("treatment.monitorTitle")}
              </h3>
              <p className="text-taupe mb-2">{t("treatment.monitorDesc1")}</p>
              <p className="text-taupe mb-2">{t("treatment.monitorDesc2")}</p>
              <p className="text-taupe">{t("treatment.monitorDesc3")}</p>
            </motion.div>
          </motion.div>
        </section>

        {/* Diet and Lifestyle with Image */}
        <section className="py-20 bg-cream">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            <motion.h2
              variants={fadeInUp}
              className="font-['Georgia'] text-4xl font-bold text-brown text-center mb-12"
            >
              {t("diet.title")}
            </motion.h2>

            <div className="grid lg:grid-cols-2 gap-12">
              <motion.div
                variants={fadeInLeft}
                className="relative h-100 rounded-xl overflow-hidden"
              >
                <img
                  src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2053&auto=format&fit=crop"
                  alt="Healthy diet for thyroid health"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div variants={fadeInRight}>
                <div className="bg-white p-8 rounded-xl mb-6">
                  <h3 className="font-['Georgia'] text-2xl font-bold text-brown mb-4">
                    {t("diet.dietTitle")}
                  </h3>
                  <p className="text-taupe mb-4">{t("diet.dietDesc1")}</p>
                  <p className="text-taupe">{t("diet.dietDesc2")}</p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center gap-2 text-brown">
                      <Moon className="w-4 h-4 text-wine" />
                      {t("diet.d1")}
                    </li>
                    <li className="flex items-center gap-2 text-brown">
                      <Activity className="w-4 h-4 text-wine" />
                      {t("diet.d2")}
                    </li>
                    <li className="flex items-center gap-2 text-brown">
                      <Apple className="w-4 h-4 text-wine" />
                      {t("diet.d3")}
                    </li>
                    <li className="flex items-center gap-2 text-brown">
                      <Droplets className="w-4 h-4 text-wine" />
                      {t("diet.d4")}
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-8 rounded-xl">
                  <h3 className="font-['Georgia'] text-2xl font-bold text-brown mb-4">
                    {t("diet.suppTitle")}
                  </h3>
                  <p className="text-taupe">{t("diet.suppDesc")}</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Cost Section */}
        <section className="py-20 bg-white">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            <motion.h2
              variants={fadeInUp}
              className="font-['Georgia'] text-4xl font-bold text-brown text-center mb-12"
            >
              {t("cost.title")}
            </motion.h2>

            <div className="grid lg:grid-cols-3 gap-8 mb-8">
              <motion.div
                variants={scaleIn}
                className="bg-cream p-6 rounded-xl"
              >
                <DollarSign className="w-12 h-12 text-wine mb-4" />
                <h3 className="font-semibold text-brown mb-2">{t("cost.c1Title")}</h3>
                <p className="text-taupe">{t("cost.c1Desc")}</p>
              </motion.div>

              <motion.div
                variants={scaleIn}
                className="bg-cream p-6 rounded-xl"
              >
                <DollarSign className="w-12 h-12 text-wine mb-4" />
                <h3 className="font-semibold text-brown mb-2">{t("cost.c2Title")}</h3>
                <p className="text-taupe">{t("cost.c2Desc")}</p>
              </motion.div>

              <motion.div
                variants={scaleIn}
                className="bg-cream p-6 rounded-xl"
              >
                <Pill className="w-12 h-12 text-wine mb-4" />
                <h3 className="font-semibold text-brown mb-2">{t("cost.c3Title")}</h3>
                <p className="text-taupe">{t("cost.c3Desc")}</p>
              </motion.div>
            </div>

            <motion.p
              variants={fadeInUp}
              className="text-center text-rose font-semibold"
            >
              {t("cost.bottomNote1")}
            </motion.p>
            <motion.p
              variants={fadeInUp}
              className="text-center text-brown mt-4"
            >
              {t("cost.bottomNote2")}
            </motion.p>
          </motion.div>
        </section>

        {/* Competitors */}
        <section className="py-20 bg-cream">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            <motion.h2
              variants={fadeInUp}
              className="font-['Georgia'] text-4xl font-bold text-brown text-center mb-4"
            >
              {t("competitor.title")}
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-center text-taupe mb-12"
            >
              {t("competitor.subtitle")}
            </motion.p>

            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              <motion.div
                variants={fadeInLeft}
                className="bg-white p-6 rounded-xl"
              >
                <h3 className="font-semibold text-wine mb-2">{t("competitor.comp1Title")}</h3>
                <p className="text-brown">{t("competitor.comp1Desc")}</p>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                className="bg-white p-6 rounded-xl"
              >
                <h3 className="font-semibold text-wine mb-2">{t("competitor.comp2Title")}</h3>
                <p className="text-brown">{t("competitor.comp2Desc")}</p>
              </motion.div>

              <motion.div
                variants={fadeInLeft}
                className="bg-white p-6 rounded-xl"
              >
                <h3 className="font-semibold text-wine mb-2">{t("competitor.comp3Title")}</h3>
                <p className="text-brown">{t("competitor.comp3Desc")}</p>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                className="bg-white p-6 rounded-xl"
              >
                <h3 className="font-semibold text-wine mb-2">{t("competitor.comp4Title")}</h3>
                <p className="text-brown">{t("competitor.comp4Desc")}</p>
              </motion.div>
            </div>

            <motion.div
              variants={fadeInUp}
              className="bg-wine text-white p-8 rounded-xl"
            >
              <h3 className="font-['Georgia'] text-2xl font-bold mb-4">
                {t("competitor.nexusTitle")}
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 shrink-0 mt-0.5" />
                  <span>{t("competitor.nexus1")}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 shrink-0 mt-0.5" />
                  <span>{t("competitor.nexus2")}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 shrink-0 mt-0.5" />
                  <span>{t("competitor.nexus3")}</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </section>

        {/* FAQ */}
        <FAQ data={faqs} />

        {/* CTA with Background Image */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop"
              alt="Modern medical clinic in Kuala Lumpur"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-brown/70 backdrop-blur-sm"></div>
          </div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          >
            <motion.h2
              variants={fadeInUp}
              className="font-['Georgia'] text-4xl font-bold text-white mb-6"
            >
              {t("cta.title")}
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-cream mb-8">
              {t("cta.desc")}
            </motion.p>
            <motion.div variants={scaleIn}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-wine text-white px-12 py-4 rounded-full font-semibold hover:bg-rose transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
              >
                {t("cta.button")}
              </motion.button>
            </motion.div>
            <motion.div variants={fadeInUp} className="mt-8 text-white">
              <p className="font-semibold text-xl">{t("cta.clinicName")}</p>
              <p className="mt-2">{t("cta.address")}</p>
              <p className="mt-2">{t("cta.phone")}</p>
            </motion.div>
          </motion.div>
        </section>
      </main>
    </>
  );
};

export default HypothyroidLanding;
