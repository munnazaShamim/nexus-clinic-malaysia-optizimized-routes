"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  AlertCircle,
  Shield,
  Droplets,
  Pill,
  Heart,
  Award,
  Sparkles,
  ChevronRight,
  TrendingUp,
  Users,
  Target,
  ArrowRight,
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

const MinoxidilLanding = ({
  locale = fallbackLng,
}: {
  locale?: string;
}) => {
  const { t } = useTranslation(locale, "minoxidil");

  const quickAnswers = [
    { question: t("quickAnswers.q1"), answer: t("quickAnswers.a1") },
    { question: t("quickAnswers.q2"), answer: t("quickAnswers.a2") },
    { question: t("quickAnswers.q3"), answer: t("quickAnswers.a3") },
  ];

  const benefits = [
    {
      icon: <Target className="w-6 h-6" />,
      title: t("benefits.b1Title"),
      desc: t("benefits.b1Desc"),
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: t("benefits.b2Title"),
      desc: t("benefits.b2Desc"),
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: t("benefits.b3Title"),
      desc: t("benefits.b3Desc"),
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: t("benefits.b4Title"),
      desc: t("benefits.b4Desc"),
    },
  ];

  const steps = [
    {
      number: "01",
      title: t("journey.s1Title"),
      desc: t("journey.s1Desc"),
    },
    {
      number: "02",
      title: t("journey.s2Title"),
      desc: t("journey.s2Desc"),
    },
    {
      number: "03",
      title: t("journey.s3Title"),
      desc: t("journey.s3Desc"),
    },
  ];

  const faqs = [
    { q: t("faq.q1"), a: t("faq.a1") },
    { q: t("faq.q2"), a: t("faq.a2") },
    { q: t("faq.q3"), a: t("faq.a3") },
  ];

  return (
    <>
      <main className="min-h-screen bg-linear-to-b from-light to-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-wine blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-rose blur-3xl"></div>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="container mx-auto px-4 py-20 relative z-10"
          >
            <motion.div
              variants={fadeInUp}
              className="max-w-3xl mx-auto text-center"
            >
              <div className="inline-flex items-center gap-2 bg-wine/10 px-4 py-2 rounded-full mb-6">
                <Sparkles className="w-4 h-4 text-wine" />
                <span className="text-sm text-wine font-inter">
                  {t("hero.badge")}
                </span>
              </div>

              <h1 className="font-georgia text-5xl md:text-6xl text-brown mb-6 leading-tight">
                {t("hero.title1")}
                <span className="block text-wine">{t("hero.title2")}</span>
              </h1>

              <p className="text-lg text-taupe mb-8 max-w-2xl mx-auto font-inter">
                {t("hero.desc")}
              </p>

              <motion.div
                variants={scaleIn}
                className="flex flex-wrap gap-4 justify-center"
              >
                <button className="bg-wine text-white px-8 py-4 rounded-full font-inter hover:bg-rose transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 group">
                  {t("hero.consultBtn")}
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border-2 border-wine text-wine px-8 py-4 rounded-full font-inter hover:bg-wine hover:text-white transition-all duration-300">
                  {t("hero.learnBtn")}
                </button>
              </motion.div>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20"
            >
              {benefits.slice(0, 3).map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[--color-glass] backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-xl"
                >
                  <div className="text-wine mb-3">{item.icon}</div>
                  <h3 className="font-georgia text-brown mb-2">{item.title}</h3>
                  <p className="text-sm text-taupe font-inter">{item.desc}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* Quick Answers Section */}
        <section className="py-20 bg-cream">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="container mx-auto px-4"
          >
            <motion.h2
              variants={fadeInUp}
              className="font-georgia text-4xl text-brown text-center mb-4"
            >
              {t("quickAnswers.title")}
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-taupe text-center mb-12 max-w-2xl mx-auto"
            >
              {t("quickAnswers.desc")}
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {quickAnswers.map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={scaleIn}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <AlertCircle className="w-10 h-10 text-wine mb-4" />
                  <h3 className="font-georgia text-xl text-brown mb-3">
                    {item.question}
                  </h3>
                  <p className="text-taupe font-inter text-sm leading-relaxed">
                    {item.answer}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Who Is It For */}
        <section className="py-20">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="container mx-auto px-4"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInLeft}>
                <h2 className="font-georgia text-4xl text-brown mb-6">
                  {t("whoFor.title1")}
                  <br />
                  {t("whoFor.title2")}
                </h2>
                <div className="space-y-4">
                  {[
                    t("whoFor.w1"),
                    t("whoFor.w2"),
                    t("whoFor.w3"),
                    t("whoFor.w4"),
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-wine shrink-0" />
                      <span className="text-brown font-inter">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                className="grid grid-cols-2 gap-4"
              >
                <div className="bg-wine rounded-2xl p-6 text-white">
                  <Users className="w-8 h-8 mb-3 opacity-80" />
                  <p className="font-georgia text-2xl mb-1">{t("whoFor.stat1Value")}</p>
                  <p className="text-sm opacity-90">{t("whoFor.stat1Label")}</p>
                </div>
                <div className="bg-rose rounded-2xl p-6 text-white">
                  <Heart className="w-8 h-8 mb-3 opacity-80" />
                  <p className="font-georgia text-2xl mb-1">{t("whoFor.stat2Value")}</p>
                  <p className="text-sm opacity-90">{t("whoFor.stat2Label")}</p>
                </div>
                <div className="col-span-2 bg-brown rounded-2xl p-6 text-white">
                  <Award className="w-8 h-8 mb-3 opacity-80" />
                  <p className="font-georgia text-xl mb-1">
                    {t("whoFor.stat3Value")}
                  </p>
                  <p className="text-sm opacity-90">
                    {t("whoFor.stat3Desc")}
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Types Section */}
        <section className="py-20 bg-light">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="container mx-auto px-4"
          >
            <motion.h2
              variants={fadeInUp}
              className="font-georgia text-4xl text-brown text-center mb-16"
            >
              {t("types.title")}
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <motion.div
                variants={fadeInLeft}
                className="bg-white rounded-3xl p-8 shadow-xl"
              >
                <Droplets className="w-12 h-12 text-wine mb-4" />
                <h3 className="font-georgia text-2xl text-brown mb-3">
                  {t("types.topicalTitle")}
                </h3>
                <p className="text-taupe mb-4">
                  {t("types.topicalDesc")}
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-wine" />
                    <span>{t("types.topicalF1")}</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-wine" />
                    <span>{t("types.topicalF2")}</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                className="bg-white rounded-3xl p-8 shadow-xl"
              >
                <Pill className="w-12 h-12 text-wine mb-4" />
                <h3 className="font-georgia text-2xl text-brown mb-3">
                  {t("types.oralTitle")}
                </h3>
                <p className="text-taupe mb-4">{t("types.oralDesc")}</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm">
                    <AlertCircle className="w-4 h-4 text-wine" />
                    <span>{t("types.oralF1")}</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <AlertCircle className="w-4 h-4 text-wine" />
                    <span>{t("types.oralF2")}</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Timeline Section */}
        <section className="py-20">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="container mx-auto px-4"
          >
            <motion.h2
              variants={fadeInUp}
              className="font-georgia text-4xl text-brown text-center mb-4"
            >
              {t("timeline.title")}
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-taupe text-center mb-12"
            >
              {t("timeline.desc")}
            </motion.p>

            <div className="max-w-3xl mx-auto">
              {[
                {
                  time: t("timeline.t1Time"),
                  desc: t("timeline.t1Desc"),
                  color: "text-amber-600",
                  barColor: "bg-amber-400",
                  width: "30%",
                },
                {
                  time: t("timeline.t2Time"),
                  desc: t("timeline.t2Desc"),
                  color: "text-emerald-600",
                  barColor: "bg-emerald-400",
                  width: "60%",
                },
                {
                  time: t("timeline.t3Time"),
                  desc: t("timeline.t3Desc"),
                  color: "text-wine",
                  barColor: "bg-wine",
                  width: "100%",
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInLeft}
                  className="flex items-start gap-4 mb-8 last:mb-0"
                >
                  <div className="w-24 shrink-0">
                    <span className={`font-georgia text-sm ${item.color}`}>
                      {item.time}
                    </span>
                  </div>
                  <div className="flex-1 relative">
                    <div className="h-2 bg-cream rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: item.width }}
                        transition={{ duration: 1, delay: idx * 0.3 }}
                        className={`h-full rounded-full ${item.barColor}`}
                      />
                    </div>
                    <p className="mt-2 text-brown font-inter text-sm">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Steps Section */}
        <section className="py-20 bg-cream">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="container mx-auto px-4"
          >
            <motion.h2
              variants={fadeInUp}
              className="font-georgia text-4xl text-brown text-center mb-16"
            >
              {t("journey.title")}
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {steps.map((step, idx) => (
                <motion.div
                  key={idx}
                  variants={scaleIn}
                  whileHover={{ scale: 1.02 }}
                  className="relative bg-white rounded-2xl p-8 shadow-lg"
                >
                  <span className="font-georgia text-6xl text-wine/20 absolute top-4 right-4">
                    {step.number}
                  </span>
                  <ArrowRight className="w-8 h-8 text-wine mb-4" />
                  <h3 className="font-georgia text-xl text-brown mb-3">
                    {step.title}
                  </h3>
                  <p className="text-taupe text-sm">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* FAQ Section */}
        <FAQ data={faqs} />

        {/* CTA Section */}
        <section className="py-20 bg-linear-to-r from-wine to-rose">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="container mx-auto px-4 text-center"
          >
            <motion.h2
              variants={fadeInUp}
              className="font-georgia text-4xl text-white mb-6"
            >
              {t("cta.title")}
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-white/90 mb-8 max-w-2xl mx-auto"
            >
              {t("cta.desc")}
            </motion.p>
            <motion.div variants={scaleIn}>
              <button className="bg-white text-wine px-8 py-4 rounded-full font-inter hover:bg-light transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center gap-2 mx-auto">
                {t("cta.bookBtn")}
                <ChevronRight className="w-4 h-4" />
              </button>
            </motion.div>
          </motion.div>
        </section>

        {/* Pet Safety Notice */}
        <section className="py-12 bg-brown">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            className="container mx-auto px-4 text-center"
          >
            <AlertCircle className="w-8 h-8 text-amber-400 mx-auto mb-3" />
            <p className="text-white/90 text-sm max-w-2xl mx-auto font-inter">
              {t("petSafety.notice")}
            </p>
          </motion.div>
        </section>
      </main>
    </>
  );
};

export default MinoxidilLanding;
