"use client";

import { motion } from "framer-motion";
import {
  Thermometer,
  Moon,
  Heart,
  Droplets,
  Bone,
  Pill,
  Stethoscope,
  Shield,
  FileText,
  Sparkles,
  Activity,
  AlertCircle,
  CheckCircle2,
  ArrowRight,
  Phone,
  MapPin,
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

const MonopauseLanding = ({ locale = fallbackLng }: { locale?: string }) => {
  const { t } = useTranslation(locale, "menopause");

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

  const trustItems = [
    { icon: MapPin, text: t("hero.trust1") },
    { icon: FileText, text: t("hero.trust2") },
    { icon: Shield, text: t("hero.trust3") },
  ];

  const symptoms = [
    { icon: Thermometer, title: t("symptoms.s1Title"), desc: t("symptoms.s1Desc") },
    { icon: Moon, title: t("symptoms.s2Title"), desc: t("symptoms.s2Desc") },
    { icon: Droplets, title: t("symptoms.s3Title"), desc: t("symptoms.s3Desc") },
    { icon: Bone, title: t("symptoms.s4Title"), desc: t("symptoms.s4Desc") },
  ];

  const methods = [
    t("types.m1"),
    t("types.m2"),
    t("types.m3"),
    t("types.m4"),
  ];

  const consultSteps = [
    { num: t("consultation.s1Num"), title: t("consultation.s1Title"), desc: t("consultation.s1Desc") },
    { num: t("consultation.s2Num"), title: t("consultation.s2Title"), desc: t("consultation.s2Desc") },
    { num: t("consultation.s3Num"), title: t("consultation.s3Title"), desc: t("consultation.s3Desc") },
    { num: t("consultation.s4Num"), title: t("consultation.s4Title"), desc: t("consultation.s4Desc") },
  ];

  const goodCandidateItems = [
    t("candidate.g1"),
    t("candidate.g2"),
    t("candidate.g3"),
  ];

  const cautionItems = [
    t("candidate.c1"),
    t("candidate.c2"),
    t("candidate.c3"),
    t("candidate.c4"),
  ];

  const riskCards = [
    { title: t("risks.r1Title"), desc: t("risks.r1Desc") },
    { title: t("risks.r2Title"), desc: t("risks.r2Desc") },
    { title: t("risks.r3Title"), desc: t("risks.r3Desc") },
  ];

  const hrtBenefits = [
    t("comparison.h1"),
    t("comparison.h2"),
    t("comparison.h3"),
  ];

  const nonHrtBenefits = [
    t("comparison.nh1"),
    t("comparison.nh2"),
    t("comparison.nh3"),
    t("comparison.nh4"),
  ];

  const costFactors = [
    t("cost.c1"),
    t("cost.c2"),
    t("cost.c3"),
    t("cost.c4"),
    t("cost.c5"),
    t("cost.c6"),
  ];

  const nexusStandout = [
    t("competitor.n1"),
    t("competitor.n2"),
    t("competitor.n3"),
    t("competitor.n4"),
  ];

  return (
    <>
      <main className="bg-light font-['Inter'] overflow-hidden">
        {/* Hero Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="relative min-h-screen flex items-center"
        >
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
              alt="Confident woman in professional setting"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-r from-light via-light/90 to-transparent" />
          </div>

          <div className="container mx-auto px-4 md:px-8 py-20 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInLeft} className="space-y-8">
                <div className="inline-flex items-center gap-2 bg-wine/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Heart className="w-4 h-4 text-wine" />
                  <span className="text-sm text-brown">
                    {t("hero.badge")}
                  </span>
                </div>

                <h1 className="font-['Georgia'] text-5xl lg:text-6xl text-brown leading-tight">
                  {t("hero.title1")}
                  <span className="text-wine block mt-2">
                    {t("hero.title2")}
                  </span>
                </h1>

                <p className="text-lg text-taupe leading-relaxed bg-white/50 backdrop-blur-sm p-6 rounded-2xl">
                  {t("hero.desc")}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-wine text-white px-8 py-4 rounded-full font-medium flex items-center justify-center gap-2 hover:bg-rose transition-colors shadow-lg hover:shadow-xl"
                  >
                    {t("hero.cta1")}
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="border-2 border-wine text-brown px-8 py-4 rounded-full font-medium flex items-center justify-center gap-2 hover:bg-wine hover:text-white transition-colors bg-white/50 backdrop-blur-sm"
                  >
                    <Phone className="w-5 h-5" />
                    {t("hero.cta2")}
                  </motion.button>
                </div>
              </motion.div>

              <motion.div variants={fadeInRight} className="relative">
                <div className="absolute inset-0 bg-wine/20 rounded-3xl blur-3xl" />
                <div className="relative bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/50">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 pb-4 border-b border-cream">
                      <MapPin className="w-5 h-5 text-wine" />
                      <span className="text-brown">
                        {t("hero.address")}
                      </span>
                    </div>

                    <div className="grid gap-4">
                      {trustItems.map((item, idx) => {
                        const Icon = item.icon;
                        return (
                          <motion.div key={idx} whileHover={{ x: 5 }} className="flex items-start gap-3">
                            <Icon className="w-5 h-5 text-wine mt-1 shrink-0" />
                            <span className="text-sm text-brown">{item.text}</span>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Understanding Menopause with Image */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="py-20 bg-white"
        >
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInLeft}>
                <h2 className="font-['Georgia'] text-4xl text-brown mb-6">
                  {t("understanding.title")}{" "}
                  <span className="text-wine">{t("understanding.titleSpan")}</span>
                </h2>

                <div className="space-y-6">
                  <p className="text-lg text-brown leading-relaxed">
                    {t("understanding.p1")}
                  </p>
                  <p className="text-taupe">
                    {t("understanding.p2")}
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeInRight} className="relative">
                <div className="absolute inset-0 bg-linear-to-tr from-wine/20 to-transparent rounded-3xl" />
                <img
                  src="/images/clinic/support.png"
                  alt="Women supporting each other"
                  className="rounded-3xl shadow-2xl w-full h-100 object-cover"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl">
                  <p className="text-wine font-medium">{t("understanding.ageRange")}</p>
                  <p className="text-sm text-taupe">
                    {t("understanding.ageLabel")}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* HRT vs MHT Clarification */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="py-20 bg-cream"
        >
          <div className="container mx-auto px-4 md:px-8">
            <motion.div
              variants={fadeInUp}
              className="max-w-3xl mx-auto text-center"
            >
              <div className="inline-flex items-center justify-center gap-2 bg-rose/10 px-6 py-3 rounded-full mb-8">
                <Sparkles className="w-5 h-5 text-rose" />
                <span className="text-brown font-medium">
                  {t("hrtMht.badge")}
                </span>
              </div>

              <h2 className="font-['Georgia'] text-4xl text-brown mb-8">
                {t("hrtMht.title")}
              </h2>

              <div className="grid md:grid-cols-2 gap-8 text-left">
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white p-8 rounded-3xl shadow-xl"
                >
                  <div className="bg-wine w-12 h-12 rounded-2xl flex items-center justify-center mb-4">
                    <Pill className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-['Georgia'] text-2xl text-brown mb-2">
                    {t("hrtMht.hrtTitle")}
                  </h3>
                  <p className="text-taupe">{t("hrtMht.hrtDesc")}</p>
                </motion.div>

                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white p-8 rounded-3xl shadow-xl"
                >
                  <div className="bg-rose w-12 h-12 rounded-2xl flex items-center justify-center mb-4">
                    <Activity className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-['Georgia'] text-2xl text-brown mb-2">
                    {t("hrtMht.mhtTitle")}
                  </h3>
                  <p className="text-taupe">{t("hrtMht.mhtDesc")}</p>
                </motion.div>
              </div>

              <p className="mt-8 text-brown bg-white p-6 rounded-2xl shadow-lg">
                {t("hrtMht.explanation")}
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Common Symptoms Section with Image */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="py-20 bg-white"
        >
          <div className="container mx-auto px-4 md:px-8">
            <motion.div
              variants={fadeInUp}
              className="text-center max-w-2xl mx-auto mb-16"
            >
              <h2 className="font-['Georgia'] text-4xl text-brown mb-4">
                {t("symptoms.title")}
              </h2>
              <p className="text-xl text-wine font-medium">
                {t("symptoms.subtitle")}
              </p>
              <p className="text-taupe mt-4">
                {t("symptoms.note")}
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
              <div className="grid md:grid-cols-2 gap-6">
                {symptoms.map((symptom, idx) => {
                  const Icon = symptom.icon;
                  return (
                    <motion.div
                      key={idx}
                      variants={scaleIn}
                      whileHover={{ y: -5 }}
                      className="bg-cream p-6 rounded-2xl hover:shadow-xl transition-all h-full"
                    >
                      <div className="bg-wine w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-['Georgia'] text-xl text-brown mb-2">{symptom.title}</h3>
                      <p className="text-taupe text-sm">{symptom.desc}</p>
                    </motion.div>
                  );
                })}
              </div>

              <motion.div variants={fadeInRight} className="relative">
                <img
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Woman experiencing menopause symptoms"
                  className="rounded-3xl shadow-2xl w-full h-125 object-cover"
                />
                <div className="absolute -bottom-6 -right-6 bg-wine text-white p-6 rounded-2xl shadow-xl">
                  <p className="text-3xl font-bold">{t("symptoms.stat")}</p>
                  <p className="text-sm">{t("symptoms.statLabel")}</p>
                </div>
              </motion.div>
            </div>

            <motion.p
              variants={fadeInUp}
              className="text-center mt-8 text-taupe bg-cream p-4 rounded-2xl"
            >
              {t("symptoms.pantaiNote")}
            </motion.p>
          </div>
        </motion.section>

        {/* Types of HRT with Image */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="py-20 bg-linear-to-br from-cream to-white"
        >
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <motion.div variants={fadeInLeft}>
                <h2 className="font-['Georgia'] text-4xl text-brown mb-8">
                  {t("types.title")}
                </h2>

                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-2xl shadow-lg">
                    <h3 className="font-['Georgia'] text-xl text-wine mb-2">
                      {t("types.oestrogenTitle")}
                    </h3>
                    <p className="text-taupe">
                      {t("types.oestrogenDesc")}
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-2xl shadow-lg">
                    <h3 className="font-['Georgia'] text-xl text-rose mb-2">
                      {t("types.combinedTitle")}
                    </h3>
                    <p className="text-taupe">
                      {t("types.combinedDesc")}
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeInRight}>
                <img
                  src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="HRT medications and patches"
                  className="rounded-3xl shadow-2xl w-full h-100 object-cover"
                />
              </motion.div>
            </div>

            {/* Administration Methods */}
            <motion.div variants={fadeInUp} className="mt-16">
              <h3 className="font-['Georgia'] text-2xl text-brown mb-8 text-center">
                {t("types.methodsTitle")}
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
                {methods.map((method, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -5 }}
                    className="bg-white p-4 rounded-2xl text-center shadow-md"
                  >
                    <span className="text-wine font-medium">{method}</span>
                  </motion.div>
                ))}
              </div>

              <p className="text-center mt-6 text-taupe">
                {t("types.methodsNote")}
              </p>

              <motion.div
                variants={fadeInUp}
                className="mt-8 bg-wine/5 p-6 rounded-2xl border-l-4 border-wine max-w-3xl mx-auto"
              >
                <p className="text-brown">
                  <span className="font-bold">{t("types.safetyPoint")}</span>{" "}
                  {t("types.safetyDesc")}
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Consultation Process with Image */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="py-20 bg-white"
        >
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <motion.div variants={fadeInLeft}>
                <h2 className="font-['Georgia'] text-4xl text-brown mb-6">
                  {t("consultation.title")}
                </h2>
                <p className="text-xl text-wine mb-8">
                  {t("consultation.subtitle")}
                </p>

                <div className="space-y-4">
                  {consultSteps.map((step, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ x: 10 }}
                      className="flex items-start gap-4 bg-cream p-4 rounded-2xl"
                    >
                      <div className="bg-wine w-10 h-10 rounded-full flex items-center justify-center text-white font-bold shrink-0">
                        {step.num}
                      </div>
                      <div>
                        <h3 className="font-['Georgia'] text-lg text-brown mb-1">{step.title}</h3>
                        <p className="text-taupe text-sm">{step.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={fadeInRight} className="relative">
                <img
                  src="/images/clinic/consultation.png"
                  alt="Doctor consulting with patient"
                  className="rounded-3xl shadow-2xl w-full h-150 object-cover"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl">
                  <Stethoscope className="w-8 h-8 text-wine mb-2" />
                  <p className="text-sm text-brown">{t("consultation.personalizedCare")}</p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Candidate Selection */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="py-20 bg-cream"
        >
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <motion.div
                variants={fadeInLeft}
                className="bg-white p-8 rounded-3xl shadow-xl"
              >
                <h2 className="font-['Georgia'] text-3xl text-brown mb-6">
                  {t("candidate.goodTitle")}
                </h2>
                <p className="text-taupe mb-6">
                  {t("candidate.goodDesc")}
                </p>
                <ul className="space-y-4">
                  {goodCandidateItems.map((item, idx) => (
                    <motion.li
                      key={idx}
                      whileHover={{ x: 5 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-wine mt-1 shrink-0" />
                      <span className="text-brown">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                className="bg-white p-8 rounded-3xl shadow-xl"
              >
                <h2 className="font-['Georgia'] text-3xl text-brown mb-6">
                  {t("candidate.avoidTitle")}
                </h2>
                <p className="text-taupe mb-6">
                  {t("candidate.avoidDesc")}
                </p>
                <div className="bg-cream p-6 rounded-2xl">
                  <p className="font-medium text-brown mb-4">
                    {t("candidate.cautionTitle")}
                  </p>
                  <ul className="space-y-3">
                    {cautionItems.map((item, idx) => (
                      <motion.li
                        key={idx}
                        whileHover={{ x: 5 }}
                        className="flex items-start gap-3"
                      >
                        <AlertCircle className="w-5 h-5 text-rose mt-1 shrink-0" />
                        <span className="text-brown">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Side Effects and Risks */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="py-20 bg-white"
        >
          <div className="container mx-auto px-4 md:px-8">
            <motion.h2
              variants={fadeInUp}
              className="font-['Georgia'] text-4xl text-brown mb-4 text-center"
            >
              {t("risks.title")}
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-center text-taupe mb-12 max-w-2xl mx-auto"
            >
              {t("risks.subtitle")}
            </motion.p>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {riskCards.map((card, idx) => (
                <motion.div
                  key={idx}
                  variants={scaleIn}
                  whileHover={{ y: -5 }}
                  className="bg-cream p-6 rounded-2xl shadow-lg"
                >
                  <h3 className="font-['Georgia'] text-lg text-brown mb-3">{card.title}</h3>
                  <p className="text-taupe text-sm">{card.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* FDA Update */}
            <motion.div
              variants={fadeInUp}
              className="mt-12 max-w-3xl mx-auto bg-linear-to-r from-wine to-rose p-8 rounded-3xl shadow-xl text-white"
            >
              <h3 className="font-['Georgia'] text-2xl mb-4">
                {t("risks.fdaTitle")}
              </h3>
              <p className="text-white/90 leading-relaxed">
                {t("risks.fdaDesc")}
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* HRT vs Non-hormonal */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="py-20 bg-cream"
        >
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="font-['Georgia'] text-4xl text-brown mb-12 text-center">
              {t("comparison.title")}
            </h2>

            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <motion.div
                variants={fadeInLeft}
                className="bg-white p-8 rounded-3xl shadow-xl"
              >
                <h3 className="font-['Georgia'] text-2xl text-wine mb-4">
                  {t("comparison.hrtTitle")}
                </h3>
                <p className="text-taupe mb-4">
                  {t("comparison.hrtDesc")}
                </p>
                <div className="space-y-3">
                  {hrtBenefits.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-wine" />
                      <span className="text-sm text-brown">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                className="bg-white p-8 rounded-3xl shadow-xl"
              >
                <h3 className="font-['Georgia'] text-2xl text-rose mb-4">
                  {t("comparison.nonHrtTitle")}
                </h3>
                <p className="text-taupe mb-4">
                  {t("comparison.nonHrtDesc")}
                </p>
                <div className="space-y-3">
                  {nonHrtBenefits.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-wine" />
                      <span className="text-sm text-brown">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Cost Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="py-20 bg-white"
        >
          <div className="container mx-auto px-4 md:px-8 max-w-4xl">
            <motion.h2
              variants={fadeInUp}
              className="font-['Georgia'] text-4xl text-brown mb-8 text-center"
            >
              {t("cost.title")}
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-taupe text-center mb-8"
            >
              {t("cost.subtitle")}
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="bg-cream p-8 rounded-3xl"
            >
              <div className="grid md:grid-cols-2 gap-6">
                {costFactors.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-wine" />
                    <span className="text-brown">{item}</span>
                  </div>
                ))}
              </div>

              <p className="mt-6 text-brown border-t border-taupe/20 pt-6">
                <span className="font-bold">{t("cost.tipLabel")}</span>{" "}
                {t("cost.tipDesc")}
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Competitor Snapshot */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="py-20 bg-cream"
        >
          <div className="container mx-auto px-4 md:px-8">
            <motion.h2
              variants={fadeInUp}
              className="font-['Georgia'] text-4xl text-brown mb-4 text-center"
            >
              {t("competitor.title")}
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-center text-taupe mb-12"
            >
              {t("competitor.subtitle")}
            </motion.p>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <motion.div
                variants={scaleIn}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-2xl shadow-lg"
              >
                <h3 className="font-['Georgia'] text-xl text-wine mb-3">
                  {t("competitor.comp1Title")}
                </h3>
                <p className="text-sm text-taupe">
                  {t("competitor.comp1Desc")}
                </p>
              </motion.div>

              <motion.div
                variants={scaleIn}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-2xl shadow-lg"
              >
                <h3 className="font-['Georgia'] text-xl text-wine mb-3">
                  {t("competitor.comp2Title")}
                </h3>
                <p className="text-sm text-taupe">
                  {t("competitor.comp2Desc")}
                </p>
              </motion.div>

              <motion.div
                variants={scaleIn}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-2xl shadow-lg"
              >
                <h3 className="font-['Georgia'] text-xl text-wine mb-3">
                  {t("competitor.comp3Title")}
                </h3>
                <p className="text-sm text-taupe">
                  {t("competitor.comp3Desc")}
                </p>
              </motion.div>
            </div>

            <motion.div
              variants={fadeInUp}
              className="mt-12 bg-wine text-white p-8 rounded-3xl"
            >
              <h3 className="font-['Georgia'] text-2xl mb-4">
                {t("competitor.nexusTitle")}
              </h3>
              <ul className="grid md:grid-cols-2 gap-4">
                {nexusStandout.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-white shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.section>

        {/* FAQ Section */}
        <FAQ data={faqs} />

        {/* CTA Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="relative py-20 overflow-hidden"
        >
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
              alt="Peaceful and confident woman"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-r from-wine to-rose opacity-90" />
          </div>

          <div className="container mx-auto px-4 md:px-8 text-center relative z-10">
            <motion.h2
              variants={fadeInUp}
              className="font-['Georgia'] text-4xl text-white mb-6"
            >
              {t("cta.title")}
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-white/90 mb-8 max-w-2xl mx-auto text-lg"
            >
              {t("cta.desc")}
            </motion.p>

            <motion.div
              variants={scaleIn}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button className="bg-white text-wine px-8 py-4 rounded-full font-medium hover:shadow-xl transition-all flex items-center justify-center gap-2 text-lg">
                <Phone className="w-5 h-5" />
                {t("cta.phone")}
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-medium hover:bg-white hover:text-wine transition-all text-lg">
                {t("cta.button")}
              </button>
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="text-white/80 mt-8 flex items-center justify-center gap-2"
            >
              <MapPin className="w-5 h-5" />
              {t("cta.address")}
            </motion.p>
          </div>
        </motion.section>
      </main>
    </>
  );
};

export default MonopauseLanding;
