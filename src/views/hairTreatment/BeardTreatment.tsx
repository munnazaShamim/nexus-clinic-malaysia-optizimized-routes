"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  Shield,
  Clock,
  ChevronRight,
  CheckCircle2,
  AlertCircle,
  FlaskConical,
  Scissors,
  Droplets,
  Activity,
  Award,
  Users,
  Calendar,
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

export default function BeardLanding({ locale = fallbackLng }: { locale?: string }) {
  const { t } = useTranslation(locale, "beardTransplant");

  const faqs = [
    {
      q: t("faq.q1"),
      a: t("faq.a1"),
    },
    {
      q: t("faq.q2"),
      a: t("faq.a2"),
    },
    {
      q: t("faq.q3"),
      a: t("faq.a3"),
    },
    {
      q: t("faq.q4"),
      a: t("faq.a4"),
    },
  ];
  return (
    <>
      <main className="min-h-screen bg-linear-to-b from-cream to-light font-['Inter',sans-serif]">
        {/* Hero Section */}
        <section className="relative overflow-hidden min-h-screen flex items-center">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-wine rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-rose rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-8"
              >
                <motion.div variants={fadeInUp} className="space-y-4">
                  <span className="inline-flex items-center gap-2 text-wine font-semibold tracking-wide uppercase text-sm">
                    <Sparkles className="w-4 h-4" />
                    {t("hero.badge")}
                  </span>
                  <h1 className="font-['Georgia',serif] text-5xl lg:text-6xl text-brown leading-tight">
                    {t("hero.title1")}
                    <span className="text-wine">{t("hero.title2")}</span>
                  </h1>
                  <p className="text-xl text-taupe max-w-lg">
                    {t("hero.desc")}
                  </p>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  className="flex flex-wrap gap-4"
                >
                  <button className="group bg-wine text-white px-8 py-4 rounded-full font-semibold hover:bg-rose transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl">
                    {t("hero.bookBtn")}
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="border-2 border-wine text-wine px-8 py-4 rounded-full font-semibold hover:bg-wine hover:text-white transition-all duration-300">
                    {t("hero.viewBtn")}
                  </button>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  className="flex items-center gap-8 pt-8"
                >
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-10 h-10 rounded-full bg-taupe border-2 border-white"
                      ></div>
                    ))}
                  </div>
                  <div className="text-brown">
                    <span className="font-bold text-2xl">2000+</span>
                    <span className="text-taupe ml-2">{t("hero.clients")}</span>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                variants={scaleIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-light backdrop-blur-lg bg-opacity-70 rounded-3xl p-8 shadow-2xl border border-white">
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 pb-4 border-b border-taupe border-opacity-30">
                      <Shield className="w-6 h-6 text-wine" />
                      <span className="font-semibold text-brown">
                        {t("hero.trustTitle")}
                      </span>
                    </div>
                    <div className="space-y-4">
                      {[
                        t("hero.trust1"),
                        t("hero.trust2"),
                        t("hero.trust3"),
                      ].map((item, i) => (
                        <motion.div
                          key={i}
                          variants={fadeInLeft}
                          custom={i}
                          className="flex items-center gap-3"
                        >
                          <CheckCircle2 className="w-5 h-5 text-wine" />
                          <span className="text-brown">{item}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Floating Cards */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -bottom-6 -left-6 bg-light backdrop-blur-lg bg-opacity-70 rounded-2xl p-4 shadow-xl border border-white"
                >
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-rose" />
                    <span className="text-sm font-medium text-brown">
                      {t("hero.permanent")}
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Quick Answers Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <motion.span
                variants={fadeInUp}
                className="text-wine font-semibold uppercase tracking-wide"
              >
                {t("quickAnswers.badge")}
              </motion.span>
              <motion.h2
                variants={fadeInUp}
                className="font-['Georgia',serif] text-4xl text-brown mt-2"
              >
                {t("quickAnswers.title")}
              </motion.h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {[
                {
                  icon: <Activity className="w-6 h-6" />,
                  question: t("quickAnswers.q1"),
                  answer: t("quickAnswers.a1"),
                },
                {
                  icon: <Scissors className="w-6 h-6" />,
                  question: t("quickAnswers.q2"),
                  answer: t("quickAnswers.a2"),
                },
                {
                  icon: <FlaskConical className="w-6 h-6" />,
                  question: t("quickAnswers.q3"),
                  answer: t("quickAnswers.a3"),
                },
                {
                  icon: <Droplets className="w-6 h-6" />,
                  question: t("quickAnswers.q4"),
                  answer: t("quickAnswers.a4"),
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="group bg-linear-to-br from-light to-cream p-6 rounded-2xl hover:shadow-xl transition-all duration-300 border border-taupe border-opacity-20"
                >
                  <div className="w-12 h-12 bg-wine bg-opacity-10 rounded-xl flex items-center justify-center text-cream mb-4 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="font-['Georgia',serif] text-lg font-semibold text-brown mb-2">
                    {item.question}
                  </h3>
                  <p className="text-taupe text-sm">{item.answer}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* What is Beard Treatment Section */}
        <section className="py-20 bg-linear-to-b from-light to-cream">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                variants={fadeInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-6"
              >
                <span className="text-wine font-semibold uppercase tracking-wide">
                  {t("understanding.badge")}
                </span>
                <h2 className="font-['Georgia',serif] text-4xl text-brown">
                  {t("understanding.title")}
                </h2>
                <p className="text-taupe text-lg">
                  {t("understanding.desc")}
                </p>
              </motion.div>

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid gap-4"
              >
                {[
                  {
                    title: t("understanding.g1Title"),
                    desc: t("understanding.g1Desc"),
                  },
                  {
                    title: t("understanding.g2Title"),
                    desc: t("understanding.g2Desc"),
                  },
                  {
                    title: t("understanding.g3Title"),
                    desc: t("understanding.g3Desc"),
                  },
                  {
                    title: t("understanding.g4Title"),
                    desc: t("understanding.g4Desc"),
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={fadeInRight}
                    className="bg-white backdrop-blur-lg bg-opacity-50 p-6 rounded-xl border border-taupe border-opacity-20 hover:shadow-lg transition-all"
                  >
                    <h3 className="font-['Georgia',serif] text-lg font-semibold text-brown mb-2">
                      {item.title}
                    </h3>
                    <p className="text-taupe">{item.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Causes Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <motion.span
                variants={fadeInUp}
                className="text-wine font-semibold uppercase tracking-wide"
              >
                {t("causes.badge")}
              </motion.span>
              <motion.h2
                variants={fadeInUp}
                className="font-['Georgia',serif] text-4xl text-brown mt-2"
              >
                {t("causes.title")}
              </motion.h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-5 gap-6"
            >
              {[
                {
                  icon: <Users className="w-8 h-8" />,
                  title: t("causes.c1Title"),
                  desc: t("causes.c1Desc"),
                },
                {
                  icon: <AlertCircle className="w-8 h-8" />,
                  title: t("causes.c2Title"),
                  desc: t("causes.c2Desc"),
                },
                {
                  icon: <Award className="w-8 h-8" />,
                  title: t("causes.c3Title"),
                  desc: t("causes.c3Desc"),
                },
                {
                  icon: <Scissors className="w-8 h-8" />,
                  title: t("causes.c4Title"),
                  desc: t("causes.c4Desc"),
                },
                {
                  icon: <Droplets className="w-8 h-8" />,
                  title: t("causes.c5Title"),
                  desc: t("causes.c5Desc"),
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={scaleIn}
                  className="bg-linear-to-b from-light to-cream p-6 rounded-2xl text-center group hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-wine rounded-2xl flex items-center justify-center text-white mx-auto mb-4 group-hover:rotate-6 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="font-['Georgia',serif] font-semibold text-brown mb-2">
                    {item.title}
                  </h3>
                  <p className="text-taupe text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Treatment Options Section */}
        <section className="py-20 bg-linear-to-b from-cream to-light">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <motion.span
                variants={fadeInUp}
                className="text-wine font-semibold uppercase tracking-wide"
              >
                {t("treatments.badge")}
              </motion.span>
              <motion.h2
                variants={fadeInUp}
                className="font-['Georgia',serif] text-4xl text-brown mt-2"
              >
                {t("treatments.title")}
              </motion.h2>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
              {[
                {
                  title: t("treatments.t1Title"),
                  subtitle: t("treatments.t1Sub"),
                  icon: <Activity className="w-8 h-8" />,
                  desc: t("treatments.t1Desc"),
                  color: "from-wine to-rose",
                },
                {
                  title: t("treatments.t2Title"),
                  subtitle: t("treatments.t2Sub"),
                  icon: <Droplets className="w-8 h-8" />,
                  desc: t("treatments.t2Desc"),
                  color: "from-rose to-taupe",
                },
                {
                  title: t("treatments.t3Title"),
                  subtitle: t("treatments.t3Sub"),
                  icon: <Scissors className="w-8 h-8" />,
                  desc: t("treatments.t3Desc"),
                  color: "from-brown to-wine",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                  className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
                >
                  <div
                    className={`absolute inset-0 bg-linear-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity`}
                  ></div>
                  <div className="p-8">
                    <div
                      className={`w-16 h-16 bg-linear-to-br ${item.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}
                    >
                      {item.icon}
                    </div>
                    <h3 className="font-['Georgia',serif] text-2xl font-bold text-brown mb-2">
                      {item.title}
                    </h3>
                    <p className="text-wine font-medium mb-4">
                      {item.subtitle}
                    </p>
                    <p className="text-taupe mb-6">{item.desc}</p>
                    <button className="flex items-center text-wine font-semibold group-hover:gap-2 transition-all">
                      {t("treatments.learnMore")} <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Assessment Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                variants={fadeInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-light backdrop-blur-lg bg-opacity-70 rounded-3xl p-8 border border-taupe border-opacity-30">
                  <h3 className="font-['Georgia',serif] text-3xl text-brown mb-6">
                    {t("assessment.title")}
                  </h3>
                  <div className="space-y-4">
                    {[
                      t("assessment.a1"),
                      t("assessment.a2"),
                      t("assessment.a3"),
                      t("assessment.a4"),
                      t("assessment.a5"),
                      t("assessment.a6"),
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        variants={fadeInRight}
                        custom={i}
                        className="flex items-center gap-3"
                      >
                        <CheckCircle2 className="w-5 h-5 text-wine shrink-0" />
                        <span className="text-brown">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-6"
              >
                <span className="text-wine font-semibold uppercase tracking-wide">
                  {t("assessment.badge")}
                </span>
                <h2 className="font-['Georgia',serif] text-4xl text-brown">
                  {t("assessment.approachTitle")}
                </h2>
                <p className="text-taupe text-lg">
                  {t("assessment.approachDesc")}
                </p>
                <div className="pt-6">
                  <div className="bg-cream p-6 rounded-2xl border-l-4 border-wine">
                    <p className="text-brown italic">
                      {t("assessment.quote")}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Pros & Cons Section */}
        <section className="py-20 bg-linear-to-b from-cream to-light">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <motion.span
                variants={fadeInUp}
                className="text-wine font-semibold uppercase tracking-wide"
              >
                {t("prosCons.badge")}
              </motion.span>
              <motion.h2
                variants={fadeInUp}
                className="font-['Georgia',serif] text-4xl text-brown mt-2"
              >
                {t("prosCons.title")}
              </motion.h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: t("prosCons.prp"),
                  pros: [
                    t("prosCons.prpPro1"),
                    t("prosCons.prpPro2"),
                    t("prosCons.prpPro3"),
                  ],
                  cons: [
                    t("prosCons.prpCon1"),
                    t("prosCons.prpCon2"),
                    t("prosCons.prpCon3"),
                  ],
                  color: "text-wine",
                },
                {
                  title: t("prosCons.minox"),
                  pros: [
                    t("prosCons.minoxPro1"),
                    t("prosCons.minoxPro2"),
                    t("prosCons.minoxPro3"),
                  ],
                  cons: [
                    t("prosCons.minoxCon1"),
                    t("prosCons.minoxCon2"),
                    t("prosCons.minoxCon3"),
                  ],
                  color: "text-rose",
                },
                {
                  title: t("prosCons.transplant"),
                  pros: [
                    t("prosCons.transPro1"),
                    t("prosCons.transPro2"),
                    t("prosCons.transPro3"),
                  ],
                  cons: [
                    t("prosCons.transCon1"),
                    t("prosCons.transCon2"),
                    t("prosCons.transCon3"),
                  ],
                  color: "text-brown",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={scaleIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-8 shadow-xl"
                >
                  <h3
                    className={`font-['Georgia',serif] text-2xl font-bold ${item.color} mb-6`}
                  >
                    {item.title}
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-green-600 mb-3">
                        {t("prosCons.prosLabel")}
                      </h4>
                      <ul className="space-y-2">
                        {item.pros.map((pro, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-brown"
                          >
                            <CheckCircle2 className="w-4 h-4 text-green-500 mt-1 shrink-0" />
                            <span className="text-sm">{pro}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-red-500 mb-3">{t("prosCons.consLabel")}</h4>
                      <ul className="space-y-2">
                        {item.cons.map((con, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-brown"
                          >
                            <AlertCircle className="w-4 h-4 text-red-400 mt-1 shrink-0" />
                            <span className="text-sm">{con}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Cost Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                variants={fadeInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-6"
              >
                <span className="text-wine font-semibold uppercase tracking-wide">
                  {t("cost.badge")}
                </span>
                <h2 className="font-['Georgia',serif] text-4xl text-brown">
                  {t("cost.title")}
                </h2>
                <p className="text-taupe text-lg">
                  {t("cost.desc")}
                </p>
                <div className="space-y-4">
                  {[
                    t("cost.r1"),
                    t("cost.r2"),
                    t("cost.r3"),
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-wine rounded-full"></div>
                      <span className="text-brown">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-cream p-6 rounded-2xl mt-8">
                  <p className="text-wine font-semibold">
                    {t("cost.warning")}
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-linear-to-br from-wine to-rose p-8 rounded-3xl text-white"
              >
                <h3 className="font-['Georgia',serif] text-2xl mb-6">
                  {t("cost.guideTitle")}
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-2 border-b border-white border-opacity-30">
                    <span>{t("cost.goatee")}</span>
                    <span className="font-bold">{t("cost.goateeGrafts")}</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-white border-opacity-30">
                    <span>{t("cost.jawline")}</span>
                    <span className="font-bold">{t("cost.jawlineGrafts")}</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-white border-opacity-30">
                    <span>{t("cost.fullBeard")}</span>
                    <span className="font-bold">{t("cost.fullBeardGrafts")}</span>
                  </div>
                  <div className="pt-6">
                    <p className="text-sm opacity-90">
                      {t("cost.disclaimer")}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Beard Dandruff Section */}
        <section className="py-20 bg-cream">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <motion.span
                variants={fadeInUp}
                className="text-wine font-semibold uppercase tracking-wide"
              >
                {t("dandruff.badge")}
              </motion.span>
              <motion.h2
                variants={fadeInUp}
                className="font-['Georgia',serif] text-4xl text-brown mt-2 mb-8"
              >
                {t("dandruff.title")}
              </motion.h2>
              <motion.div
                variants={fadeInUp}
                className="bg-white p-8 rounded-3xl shadow-xl"
              >
                <p className="text-brown text-xl mb-6">
                  {t("dandruff.desc")}
                </p>
                <div className="grid md:grid-cols-2 gap-6 text-left">
                  <div className="p-4 bg-light rounded-xl">
                    <h3 className="font-semibold text-wine mb-2">
                      {t("dandruff.causesTitle")}
                    </h3>
                    <ul className="space-y-2 text-taupe">
                      <li>• {t("dandruff.cause1")}</li>
                      <li>• {t("dandruff.cause2")}</li>
                      <li>• {t("dandruff.cause3")}</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-light rounded-xl">
                    <h3 className="font-semibold text-wine mb-2">
                      {t("dandruff.treatTitle")}
                    </h3>
                    <ul className="space-y-2 text-taupe">
                      <li>• {t("dandruff.treat1")}</li>
                      <li>• {t("dandruff.treat2")}</li>
                      <li>• {t("dandruff.treat3")}</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQ data={faqs} />

        {/* CTA Section */}
        <section className="py-20 bg-linear-to-r from-brown to-wine">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-white"
            >
              <motion.h2
                variants={fadeInUp}
                className="font-['Georgia',serif] text-4xl mb-6"
              >
                {t("cta.title")}
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-xl mb-8 opacity-90">
                {t("cta.desc")}
              </motion.p>
              <motion.div variants={fadeInUp}>
                <button className="bg-white text-brown px-12 py-5 rounded-full font-semibold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3 mx-auto">
                  <Calendar className="w-6 h-6" />
                  {t("cta.bookBtn")}
                </button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
