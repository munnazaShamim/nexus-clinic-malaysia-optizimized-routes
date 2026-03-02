"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  TrendingUp,
  AlertCircle,
  CheckCircle2,
  XCircle,
  Target,
  Calendar,
  DollarSign,
  MessageCircle,
  Award,
  FileText,
  Droplets,
  Syringe,
  CalendarClock,
  Activity,
  ShieldCheck,
  Info,
  Minus,
  Plus,
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

const ExosomeLanding = ({
  locale = fallbackLng,
}: {
  locale?: string;
}) => {
  const { t } = useTranslation(locale, "exosomeHair");

  const faqs = [
    { q: t("faq.q1"), a: t("faq.a1") },
    { q: t("faq.q2"), a: t("faq.a2") },
    { q: t("faq.q3"), a: t("faq.a3") },
    { q: t("faq.q4"), a: t("faq.a4") },
    { q: t("faq.q5"), a: t("faq.a5") },
  ];

  return (
    <>
      <main className="min-h-screen bg-linear-to-b from-light to-white">
        {/* Hero Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="relative overflow-hidden bg-linear-to-br from-cream via-white to-light"
        >
          <div className="absolute inset-0 bg-[url('/pattern-bg.png')] opacity-5" />
          <div className="container mx-auto px-4 py-20 lg:py-32">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div variants={fadeInLeft} className="space-y-8">
                <motion.div
                  variants={scaleIn}
                  className="inline-flex items-center gap-2 bg-wine/10 px-4 py-2 rounded-full"
                >
                  <Sparkles className="w-5 h-5 text-wine" />
                  <span className="text-sm font-medium text-wine font-inter">
                    {t("hero.badge")}
                  </span>
                </motion.div>

                <h1 className="font-georgia text-5xl lg:text-7xl text-brown leading-tight">
                  {t("hero.title1")}
                  <span className="block text-wine">{t("hero.title2")}</span>
                  {t("hero.title3")}
                </h1>

                <p className="text-lg text-taupe font-inter leading-relaxed">
                  {t("hero.desc")}
                </p>

                <motion.div
                  variants={fadeInUp}
                  className="flex flex-wrap gap-4"
                >
                  <button className="group relative overflow-hidden bg-wine text-white px-8 py-4 rounded-full font-inter font-medium hover:shadow-xl transition-all duration-300">
                    <span className="relative z-10">{t("hero.startBtn")}</span>
                    <div className="absolute inset-0 bg-rose transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                  </button>
                  <button className="border-2 border-wine text-wine px-8 py-4 rounded-full font-inter font-medium hover:bg-wine hover:text-white transition-all duration-300">
                    {t("hero.learnBtn")}
                  </button>
                </motion.div>
              </motion.div>

              <motion.div variants={fadeInRight} className="relative">
                <div className="relative z-10 bg-white/30 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/50">
                  <div className="flex items-center gap-3 mb-6">
                    <Award className="w-8 h-8 text-wine" />
                    <h3 className="font-georgia text-2xl text-brown">
                      {t("hero.trustTitle")}
                    </h3>
                  </div>
                  <ul className="space-y-4">
                    {[
                      t("hero.t1"),
                      t("hero.t2"),
                      t("hero.t3"),
                      t("hero.t4"),
                    ].map((item, i) => (
                      <motion.li
                        key={i}
                        variants={fadeInLeft}
                        custom={i}
                        className="flex items-center gap-3 text-brown"
                      >
                        <CheckCircle2 className="w-5 h-5 text-wine shrink-0" />
                        <span className="font-inter">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Understanding Hair Loss Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="py-24 bg-white"
        >
          <div className="container mx-auto px-4">
            <motion.div
              variants={fadeInUp}
              className="max-w-3xl mx-auto text-center mb-16"
            >
              <h2 className="font-georgia text-4xl lg:text-5xl text-brown mb-6">
                {t("understanding.title1")}
                <span className="text-wine"> {t("understanding.title2")}</span>
              </h2>
              <p className="text-lg text-taupe font-inter">
                {t("understanding.desc")}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 mt-16">
              {[
                {
                  icon: Droplets,
                  title: t("understanding.c1Title"),
                  desc: t("understanding.c1Desc"),
                },
                {
                  icon: Activity,
                  title: t("understanding.c2Title"),
                  desc: t("understanding.c2Desc"),
                },
                {
                  icon: Target,
                  title: t("understanding.c3Title"),
                  desc: t("understanding.c3Desc"),
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={scaleIn}
                  whileHover={{ y: -10 }}
                  className="group bg-linear-to-br from-cream to-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-wine/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <item.icon className="w-8 h-8 text-wine" />
                  </div>
                  <h3 className="font-georgia text-xl text-brown mb-3">
                    {item.title}
                  </h3>
                  <p className="text-taupe font-inter">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* What are Exosomes */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="py-24 bg-linear-to-br from-cream to-white"
        >
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div variants={fadeInLeft} className="space-y-6">
                <h2 className="font-georgia text-4xl lg:text-5xl text-brown">
                  {t("whatIs.title")}
                  <span className="block text-wine text-2xl mt-2">
                    {t("whatIs.subtitle")}
                  </span>
                </h2>
                <p className="text-lg text-taupe font-inter leading-relaxed">
                  {t("whatIs.desc")}
                </p>
                <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-white">
                  <h3 className="font-georgia text-brown text-xl mb-4">
                    {t("whatIs.helpTitle")}
                  </h3>
                  <ul className="space-y-3">
                    {[
                      t("whatIs.h1"),
                      t("whatIs.h2"),
                      t("whatIs.h3"),
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-brown"
                      >
                        <Plus className="w-4 h-4 text-wine" />
                        <span className="font-inter">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-start gap-3 p-4 bg-amber-50 rounded-xl">
                  <Info className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <p className="text-sm text-amber-700 font-inter">
                    {t("whatIs.notice")}
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                className="grid grid-cols-2 gap-6"
              >
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-2xl shadow-xl">
                    <ShieldCheck className="w-10 h-10 text-wine mb-3" />
                    <h4 className="font-georgia text-brown mb-2">
                      {t("whatIs.card1Title")}
                    </h4>
                    <p className="text-sm text-taupe">
                      {t("whatIs.card1Desc")}
                    </p>
                  </div>
                  <div className="bg-wine p-6 rounded-2xl shadow-xl text-white">
                    <Calendar className="w-10 h-10 mb-3" />
                    <h4 className="font-georgia mb-2">{t("whatIs.card2Title")}</h4>
                    <p className="text-sm opacity-90">
                      {t("whatIs.card2Desc")}
                    </p>
                  </div>
                </div>
                <div className="space-y-6 mt-12">
                  <div className="bg-white p-6 rounded-2xl shadow-xl">
                    <Syringe className="w-10 h-10 text-wine mb-3" />
                    <h4 className="font-georgia text-brown mb-2">
                      {t("whatIs.card3Title")}
                    </h4>
                    <p className="text-sm text-taupe">{t("whatIs.card3Desc")}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Research & Evidence */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="py-24 bg-white"
        >
          <div className="container mx-auto px-4">
            <motion.div
              variants={fadeInUp}
              className="max-w-3xl mx-auto text-center mb-16"
            >
              <h2 className="font-georgia text-4xl lg:text-5xl text-brown mb-6">
                {t("research.title1")}
                <span className="text-wine"> {t("research.title2")}</span>
              </h2>
              <p className="text-lg text-taupe font-inter">
                {t("research.desc")}
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8">
              {[
                {
                  year: t("research.r1Year"),
                  title: t("research.r1Title"),
                  desc: t("research.r1Desc"),
                  icon: FileText,
                },
                {
                  year: t("research.r2Year"),
                  title: t("research.r2Title"),
                  desc: t("research.r2Desc"),
                  icon: TrendingUp,
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeInLeft}
                  whileHover={{ scale: 1.02 }}
                  className="bg-linear-to-br from-cream to-white p-8 rounded-3xl shadow-xl"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-wine rounded-xl flex items-center justify-center shrink-0">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <span className="text-sm text-wine font-semibold">
                        {item.year}
                      </span>
                      <h3 className="font-georgia text-xl text-brown mb-2">
                        {item.title}
                      </h3>
                      <p className="text-taupe font-inter">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Safety & Regulation */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="py-24 bg-linear-to-br from-brown to-wine text-white"
        >
          <div className="container mx-auto px-4">
            <motion.div variants={fadeInUp} className="max-w-4xl mx-auto">
              <h2 className="font-georgia text-4xl lg:text-5xl mb-8">
                {t("safety.title")}
                <span className="block text-cream text-xl mt-2 font-inter">
                  {t("safety.subtitle")}
                </span>
              </h2>

              <div className="space-y-6">
                {[
                  t("safety.s1"),
                  t("safety.s2"),
                  t("safety.s3"),
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={fadeInLeft}
                    className="flex items-start gap-4 bg-white/10 backdrop-blur-sm p-6 rounded-2xl"
                  >
                    <AlertCircle className="w-6 h-6 shrink-0" />
                    <p className="font-inter">{item}</p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                variants={scaleIn}
                className="mt-8 p-6 bg-cream text-brown rounded-2xl"
              >
                <h3 className="font-georgia text-xl mb-3">
                  {t("safety.adviceTitle")}
                </h3>
                <p className="font-inter">
                  {t("safety.adviceDesc")}
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Who is it for */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="py-24 bg-white"
        >
          <div className="container mx-auto px-4">
            <motion.div
              variants={fadeInUp}
              className="max-w-3xl mx-auto text-center mb-16"
            >
              <h2 className="font-georgia text-4xl lg:text-5xl text-brown">
                {t("whoFor.title")}
              </h2>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8">
              <motion.div
                variants={fadeInLeft}
                className="bg-linear-to-br from-green-50 to-white p-8 rounded-3xl shadow-xl"
              >
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-georgia text-2xl text-brown mb-6">
                  {t("whoFor.idealTitle")}
                </h3>
                <ul className="space-y-4">
                  {[
                    t("whoFor.i1"),
                    t("whoFor.i2"),
                    t("whoFor.i3"),
                    t("whoFor.i4"),
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <Plus className="w-4 h-4 text-green-600" />
                      <span className="font-inter text-brown">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                className="bg-linear-to-br from-rose-50 to-white p-8 rounded-3xl shadow-xl"
              >
                <div className="w-12 h-12 bg-rose-500/20 rounded-xl flex items-center justify-center mb-6">
                  <XCircle className="w-6 h-6 text-rose-600" />
                </div>
                <h3 className="font-georgia text-2xl text-brown mb-6">
                  {t("whoFor.notTitle")}
                </h3>
                <ul className="space-y-4">
                  {[
                    t("whoFor.n1"),
                    t("whoFor.n2"),
                    t("whoFor.n3"),
                    t("whoFor.n4"),
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <Minus className="w-4 h-4 text-rose-600" />
                      <span className="font-inter text-brown">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Target Areas */}
            <motion.div variants={fadeInUp} className="mt-16">
              <h3 className="font-georgia text-2xl text-center text-brown mb-8">
                {t("whoFor.areasTitle")}
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  t("whoFor.a1"),
                  t("whoFor.a2"),
                  t("whoFor.a3"),
                  t("whoFor.a4"),
                ].map((area, i) => (
                  <motion.span
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="px-6 py-3 bg-cream text-brown rounded-full font-inter shadow-md hover:shadow-lg transition-all"
                  >
                    {area}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Procedure Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="py-24 bg-linear-to-br from-cream to-white"
        >
          <div className="container mx-auto px-4">
            <motion.div
              variants={fadeInUp}
              className="max-w-3xl mx-auto text-center mb-16"
            >
              <h2 className="font-georgia text-4xl lg:text-5xl text-brown mb-6">
                {t("procedure.title")}
                <span className="block text-wine text-2xl mt-2">
                  {t("procedure.subtitle")}
                </span>
              </h2>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInLeft} className="space-y-4">
                {[
                  {
                    step: "01",
                    title: t("procedure.s1Title"),
                    desc: t("procedure.s1Desc"),
                  },
                  {
                    step: "02",
                    title: t("procedure.s2Title"),
                    desc: t("procedure.s2Desc"),
                  },
                  {
                    step: "03",
                    title: t("procedure.s3Title"),
                    desc: t("procedure.s3Desc"),
                  },
                  {
                    step: "04",
                    title: t("procedure.s4Title"),
                    desc: t("procedure.s4Desc"),
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ x: 10 }}
                    className="flex items-start gap-6 bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all"
                  >
                    <span className="font-georgia text-3xl text-wine opacity-30">
                      {item.step}
                    </span>
                    <div>
                      <h3 className="font-georgia text-xl text-brown mb-1">
                        {item.title}
                      </h3>
                      <p className="text-taupe font-inter">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                variants={fadeInRight}
                className="bg-white p-8 rounded-3xl shadow-2xl"
              >
                <CalendarClock className="w-12 h-12 text-wine mb-4" />
                <h3 className="font-georgia text-2xl text-brown mb-4">
                  {t("procedure.sessionTitle")}
                </h3>
                <p className="text-lg text-taupe mb-6">
                  {t("procedure.sessionTime")}
                </p>
                <div className="space-y-4">
                  <h4 className="font-georgia text-brown">{t("procedure.deliveryTitle")}</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-wine rounded-full" />
                      <span className="font-inter">{t("procedure.d1")}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-wine rounded-full" />
                      <span className="font-inter">{t("procedure.d2")}</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Results Timeline */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="py-24 bg-white"
        >
          <div className="container mx-auto px-4">
            <motion.div
              variants={fadeInUp}
              className="max-w-3xl mx-auto text-center mb-16"
            >
              <h2 className="font-georgia text-4xl lg:text-5xl text-brown mb-6">
                {t("timeline.title")}
                <span className="block text-wine text-xl mt-2 font-inter">
                  {t("timeline.subtitle")}
                </span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  period: t("timeline.r1Period"),
                  desc: t("timeline.r1Desc"),
                  icon: Activity,
                },
                {
                  period: t("timeline.r2Period"),
                  desc: t("timeline.r2Desc"),
                  icon: TrendingUp,
                },
                {
                  period: t("timeline.r3Period"),
                  desc: t("timeline.r3Desc"),
                  icon: Sparkles,
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={scaleIn}
                  whileHover={{ y: -10 }}
                  className="text-center p-8 bg-linear-to-b from-cream to-white rounded-3xl shadow-xl"
                >
                  <div className="w-16 h-16 bg-wine/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-8 h-8 text-wine" />
                  </div>
                  <h3 className="font-georgia text-2xl text-wine mb-2">
                    {item.period}
                  </h3>
                  <p className="text-taupe font-inter">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Comparison Table */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="py-24 bg-linear-to-br from-cream to-white"
        >
          <div className="container mx-auto px-4">
            <motion.div
              variants={fadeInUp}
              className="max-w-3xl mx-auto text-center mb-16"
            >
              <h2 className="font-georgia text-4xl lg:text-5xl text-brown">
                {t("comparison.title")}
              </h2>
            </motion.div>

            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-3xl shadow-2xl overflow-hidden">
                <thead className="bg-wine text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-georgia">{t("comparison.thOption")}</th>
                    <th className="px-6 py-4 text-left font-georgia">{t("comparison.thBest")}</th>
                    <th className="px-6 py-4 text-left font-georgia">{t("comparison.thDowntime")}</th>
                    <th className="px-6 py-4 text-left font-georgia">{t("comparison.thWhat")}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-cream">
                  {[
                    [t("comparison.r1c1"), t("comparison.r1c2"), t("comparison.r1c3"), t("comparison.r1c4")],
                    [t("comparison.r2c1"), t("comparison.r2c2"), t("comparison.r2c3"), t("comparison.r2c4")],
                    [t("comparison.r3c1"), t("comparison.r3c2"), t("comparison.r3c3"), t("comparison.r3c4")],
                    [t("comparison.r4c1"), t("comparison.r4c2"), t("comparison.r4c3"), t("comparison.r4c4")],
                    [t("comparison.r5c1"), t("comparison.r5c2"), t("comparison.r5c3"), t("comparison.r5c4")],
                  ].map((row, i) => (
                    <motion.tr
                      key={i}
                      whileHover={{
                        backgroundColor: "rgba(140, 79, 88, 0.05)",
                      }}
                      className="transition-colors"
                    >
                      {row.map((cell, j) => (
                        <td key={j} className="px-6 py-4 font-inter text-brown">
                          {cell}
                        </td>
                      ))}
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.section>

        {/* Cost Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="py-24 bg-white"
        >
          <div className="container mx-auto px-4">
            <motion.div
              variants={fadeInUp}
              className="max-w-3xl mx-auto text-center mb-16"
            >
              <h2 className="font-georgia text-4xl lg:text-5xl text-brown mb-6">
                {t("cost.title")}
              </h2>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <motion.div variants={fadeInLeft} className="space-y-6">
                <div className="bg-cream p-8 rounded-3xl">
                  <DollarSign className="w-12 h-12 text-wine mb-4" />
                  <h3 className="font-georgia text-2xl text-brown mb-4">
                    {t("cost.factorsTitle")}
                  </h3>
                  <ul className="space-y-3">
                    {[
                      t("cost.f1"),
                      t("cost.f2"),
                      t("cost.f3"),
                      t("cost.f4"),
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-wine rounded-full" />
                        <span className="font-inter text-brown">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-6 border border-wine rounded-2xl">
                  <p className="text-sm text-taupe mb-2">{t("cost.startingFrom")}</p>
                  <p className="font-georgia text-4xl text-wine">
                    {t("cost.price")}
                    <span className="text-lg text-taupe">{t("cost.perSession")}</span>
                  </p>
                  <p className="text-xs text-taupe mt-2">
                    {t("cost.priceNote")}
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                className="bg-linear-to-br from-wine to-rose text-white p-8 rounded-3xl shadow-2xl"
              >
                <h3 className="font-georgia text-2xl mb-6">
                  {t("cost.approachTitle")}
                </h3>
                <p className="font-inter text-white/90 mb-6">
                  {t("cost.approachDesc")}
                </p>
                <button className="w-full bg-white text-wine py-4 rounded-xl font-inter font-semibold hover:shadow-xl transition-all">
                  {t("cost.bookBtn")}
                </button>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* FAQ Section */}
        <FAQ data={faqs} />

        {/* CTA Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="py-24 bg-linear-to-br from-brown to-wine text-white"
        >
          <div className="container mx-auto px-4 text-center">
            <motion.div variants={fadeInUp} className="max-w-3xl mx-auto">
              <MessageCircle className="w-16 h-16 mx-auto mb-8 opacity-75" />
              <h2 className="font-georgia text-4xl lg:text-5xl mb-6">
                {t("cta.title")}
              </h2>
              <p className="text-xl font-inter text-white/90 mb-8">
                {t("cta.desc")}
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-wine px-12 py-5 rounded-full font-inter font-semibold text-lg shadow-2xl hover:shadow-3xl transition-all"
              >
                {t("cta.scheduleBtn")}
              </motion.button>
            </motion.div>
          </div>
        </motion.section>
      </main>
    </>
  );
};

export default ExosomeLanding;
