"use client";

import { motion } from "framer-motion";
import {
  HeartPulse,
  Shield,
  Brain,
  Activity,
  Sparkles,
  Pill,
  Syringe,
  Zap,
  Stethoscope,
  AlertCircle,
  CheckCircle2,
  XCircle,
  Phone,
  MapPin,
  ArrowRight,
  Heart,
  Scale,
  Moon,
  Dumbbell,
  Wine,
  TestTube,
  ShieldCheck,
  Calendar,
  Timer,
  TrendingUp,
  Users,
  Lock,
  MessageCircle,
  Target,
} from "lucide-react";
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  scaleIn,
  staggerContainer,
} from "../../lib/animations";
import { useTranslation } from "@/src/i18n/client";
import { fallbackLng } from "@/src/i18n/settings";

export default function EDTreatment({ locale = fallbackLng }: { locale?: string }) {
  const { t } = useTranslation(locale, "edTreatment");

  const images = {
    doctorConsultation:
      "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?q=80&w=2070&auto=format&fit=crop",
    modernClinic:
      "https://images.unsplash.com/photo-1631545796175-7e7c94e41a4b?q=80&w=2070&auto=format&fit=crop",
    medicalTeam:
      "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=2070&auto=format&fit=crop",
    healthyLifestyle:
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop",
    kualaLumpur:
      "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?q=80&w=2069&auto=format&fit=crop",
    consultation:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop",
  };

  return (
    <>
      <main className="min-h-screen bg-cream font-['Inter',sans-serif]">
        {/* Hero Section with Image */}
        <motion.section
          initial="hidden"
          animate="visible"
          className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
          <div className="absolute inset-0">
            <img
              src={images.modernClinic}
              alt="Modern Clinic Interior"
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(90deg, #F3EFEE 0%, rgba(243, 239, 238, 0.8) 50%, rgba(243, 239, 238, 0.4) 100%)",
              }}
            ></div>
          </div>

          <div className="container mx-auto px-4 z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInLeft} className="space-y-6">
                <motion.div
                  variants={scaleIn}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
                  style={{
                    background: "rgba(255, 255, 255, 0.7)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(172, 153, 144, 0.3)",
                  }}
                >
                  <HeartPulse className="w-4 h-4 text-wine" />
                  <span className="text-sm text-brown">
                    {t("hero.badge")}
                  </span>
                </motion.div>

                <motion.h1
                  variants={fadeInUp}
                  className="text-5xl lg:text-6xl font-serif font-bold"
                  style={{ color: "#4B3A33" }}
                >
                  {t("hero.title1")}
                  <span className="block text-wine">
                    {t("hero.title2")}
                  </span>
                </motion.h1>

                <motion.p
                  variants={fadeInUp}
                  className="text-lg text-taupe leading-relaxed max-w-lg"
                >
                  {t("hero.desc")}
                </motion.p>

                <motion.div
                  variants={fadeInUp}
                  className="flex flex-wrap gap-4"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 rounded-lg font-medium flex items-center gap-2"
                    style={{
                      background: "#8C4F58",
                      color: "#FAF8F7",
                      boxShadow: "0 10px 25px -5px rgba(140, 79, 88, 0.3)",
                    }}
                  >
                    {t("hero.cta1")}
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 rounded-lg font-medium"
                    style={{
                      background: "rgba(255, 255, 255, 0.7)",
                      backdropFilter: "blur(10px)",
                      border: "1px solid rgba(172, 153, 144, 0.3)",
                      color: "#4B3A33",
                    }}
                  >
                    {t("hero.cta2")}
                  </motion.button>
                </motion.div>

                {/* Trust badges */}
                <motion.div
                  variants={staggerContainer}
                  className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8"
                >
                  {[
                    { icon: Lock, text: t("hero.trust1") },
                    { icon: Target, text: t("hero.trust2") },
                    { icon: Shield, text: t("hero.trust3") },
                    { icon: ShieldCheck, text: t("hero.trust4") },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      className="flex items-start gap-2"
                    >
                      <item.icon className="w-4 h-4 text-wine mt-1 shrink-0" />
                      <span className="text-xs text-brown">{item.text}</span>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Location */}
                <motion.div
                  variants={fadeInUp}
                  className="flex items-center gap-2 p-4 rounded-lg"
                  style={{
                    background: "rgba(255, 255, 255, 0.5)",
                    backdropFilter: "blur(5px)",
                    border: "1px solid rgba(172, 153, 144, 0.2)",
                  }}
                >
                  <MapPin className="w-5 h-5 text-wine" />
                  <span className="text-sm text-brown">
                    {t("hero.location")}
                  </span>
                </motion.div>
              </motion.div>

              <motion.div variants={fadeInRight} className="relative">
                <div
                  className="relative rounded-2xl overflow-hidden"
                  style={{
                    background: "rgba(255, 255, 255, 0.3)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(172, 153, 144, 0.3)",
                    boxShadow: "0 20px 40px -15px rgba(75, 58, 51, 0.2)",
                  }}
                >
                  <div className="p-8 space-y-6">
                    <h3 className="text-2xl font-serif font-semibold text-brown">
                      {t("hero.realityTitle")}
                    </h3>
                    <p className="text-taupe">
                      {t("hero.realityDesc")}
                    </p>
                    <div
                      className="p-4 rounded-lg"
                      style={{ background: "rgba(140, 79, 88, 0.1)" }}
                    >
                      <p className="text-wine font-medium">
                        {t("hero.realityWarning")}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Who ED Treatment Is For - With Image */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-24 relative overflow-hidden"
          style={{ background: "#FAF8F7" }}
        >
          <div className="container mx-auto px-4">
            <motion.h2
              variants={fadeInUp}
              className="text-4xl font-serif font-bold text-center mb-16"
              style={{ color: "#4B3A33" }}
            >
              {t("whoFor.title")}
            </motion.h2>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
              <motion.div
                variants={fadeInLeft}
                className="relative h-100 rounded-2xl overflow-hidden"
              >
                <img
                  src={images.doctorConsultation}
                  alt="Doctor consulting patient"
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(45deg, rgba(140, 79, 88, 0.2) 0%, transparent 100%)",
                  }}
                ></div>
              </motion.div>

              <motion.div variants={fadeInRight}>
                <motion.div
                  variants={staggerContainer}
                  className="grid md:grid-cols-2 gap-6"
                >
                  {[
                    { icon: Activity, text: t("whoFor.item1") },
                    { icon: TrendingUp, text: t("whoFor.item2") },
                    { icon: Users, text: t("whoFor.item3") },
                    { icon: Brain, text: t("whoFor.item4") },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      whileHover={{ y: -10 }}
                      className="p-6 rounded-xl"
                      style={{
                        background: "rgba(255, 255, 255, 0.7)",
                        backdropFilter: "blur(10px)",
                        border: "1px solid rgba(172, 153, 144, 0.3)",
                        boxShadow: "0 10px 30px -10px rgba(75, 58, 51, 0.1)",
                      }}
                    >
                      <item.icon className="w-8 h-8 text-wine mb-4" />
                      <p className="text-brown">{item.text}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>

            <motion.div
              variants={fadeInUp}
              className="text-center max-w-2xl mx-auto"
            >
              <div
                className="p-6 rounded-xl"
                style={{
                  background: "rgba(140, 79, 88, 0.05)",
                  border: "1px solid rgba(140, 79, 88, 0.2)",
                }}
              >
                <p className="text-wine font-medium">
                  {t("whoFor.driversNote")}
                </p>
                <p className="text-brown mt-4">
                  {t("whoFor.ageNote")}
                </p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Why ED Happens - With Image */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-24"
          style={{ background: "#F3EFEE" }}
        >
          <div className="container mx-auto px-4">
            <motion.h2
              variants={fadeInUp}
              className="text-4xl font-serif font-bold text-center mb-8"
              style={{ color: "#4B3A33" }}
            >
              {t("whyHappens.title")}{" "}
              <span className="text-wine">{t("whyHappens.titleHighlight")}</span>
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-center text-taupe mb-16 max-w-2xl mx-auto"
            >
              {t("whyHappens.desc")}
            </motion.p>

            <div className="grid lg:grid-cols-2 gap-12">
              <motion.div variants={staggerContainer} className="space-y-6">
                {[
                  { icon: Heart, title: t("whyHappens.cause1Title"), desc: t("whyHappens.cause1Desc") },
                  { icon: Stethoscope, title: t("whyHappens.cause2Title"), desc: t("whyHappens.cause2Desc") },
                  { icon: TestTube, title: t("whyHappens.cause3Title"), desc: t("whyHappens.cause3Desc") },
                  { icon: Brain, title: t("whyHappens.cause4Title"), desc: t("whyHappens.cause4Desc") },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInRight}
                    className="flex gap-4 p-6 rounded-xl"
                    style={{
                      background: "rgba(255, 255, 255, 0.5)",
                      backdropFilter: "blur(5px)",
                      border: "1px solid rgba(172, 153, 144, 0.2)",
                    }}
                  >
                    <item.icon className="w-6 h-6 text-wine shrink-0" />
                    <div>
                      <h3 className="font-semibold text-brown mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-taupe">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div variants={fadeInLeft} className="space-y-6">
                <div className="relative h-75 rounded-2xl overflow-hidden">
                  <img
                    src={images.healthyLifestyle}
                    alt="Healthy lifestyle and exercise"
                    className="w-full h-full object-cover"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(140, 79, 88, 0.3) 0%, transparent 100%)",
                    }}
                  ></div>
                </div>

                <div
                  className="sticky top-24 p-8 rounded-2xl"
                  style={{
                    background: "rgba(140, 79, 88, 0.05)",
                    border: "1px solid rgba(140, 79, 88, 0.2)",
                  }}
                >
                  <h3 className="text-2xl font-serif font-semibold text-brown mb-6">
                    {t("whyHappens.seeDocTitle")}
                  </h3>
                  <ul className="space-y-4">
                    {[
                      t("whyHappens.seeDoc1"),
                      t("whyHappens.seeDoc2"),
                      t("whyHappens.seeDoc3"),
                      t("whyHappens.seeDoc4"),
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        variants={fadeInUp}
                        className="flex items-start gap-3"
                      >
                        <AlertCircle className="w-5 h-5 text-wine mt-0.5 shrink-0" />
                        <span className="text-brown">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                  <div
                    className="mt-6 p-4 rounded-lg"
                    style={{ background: "rgba(140, 79, 88, 0.1)" }}
                  >
                    <p className="text-sm text-wine">
                      {t("whyHappens.onlineWarning")}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Medical Team Image Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-24"
          style={{ background: "#FAF8F7" }}
        >
          <div className="container mx-auto px-4">
            <div className="relative h-75 rounded-3xl overflow-hidden">
              <img
                src={images.medicalTeam}
                alt="Professional medical team"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(75, 58, 51, 0.7) 0%, rgba(75, 58, 51, 0.3) 100%)",
                }}
              ></div>

              <div className="absolute inset-0 flex items-center">
                <div className="container mx-auto px-4">
                  <motion.div variants={fadeInLeft} className="max-w-2xl">
                    <h2 className="text-4xl font-serif font-bold text-white mb-6">
                      {t("assessment.title")}
                    </h2>
                    <p className="text-white/90 text-lg mb-8">
                      {t("assessment.desc")}
                    </p>
                    <div className="space-y-4">
                      {[
                        t("assessment.step1"),
                        t("assessment.step2"),
                        t("assessment.step3"),
                        t("assessment.step4"),
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          variants={fadeInRight}
                          className="flex items-center gap-3"
                        >
                          <CheckCircle2 className="w-5 h-5 text-cream shrink-0" />
                          <span className="text-white">{item}</span>
                        </motion.div>
                      ))}
                    </div>
                    <p className="text-white/80 text-sm mt-6">
                      {t("assessment.wholePicture")}
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>

            <motion.div
              variants={fadeInUp}
              className="mt-8 p-6 rounded-xl max-w-3xl mx-auto text-center"
              style={{ background: "rgba(140, 79, 88, 0.05)" }}
            >
              <p className="text-wine text-lg">
                {t("assessment.nexusGoal")}
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Treatment Options with Image */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-24"
          style={{ background: "#F3EFEE" }}
        >
          <div className="container mx-auto px-4">
            <motion.h2
              variants={fadeInUp}
              className="text-4xl font-serif font-bold text-center mb-16"
              style={{ color: "#4B3A33" }}
            >
              {t("treatmentOptions.title")}{" "}
              <span className="text-wine">{t("treatmentOptions.titleHighlight")}</span>
            </motion.h2>

            <div className="grid lg:grid-cols-2 gap-12 mb-12">
              <motion.div variants={fadeInLeft} className="space-y-8">
                {/* Lifestyle */}
                <motion.div
                  variants={fadeInUp}
                  className="p-8 rounded-2xl"
                  style={{
                    background: "rgba(255, 255, 255, 0.7)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(172, 153, 144, 0.3)",
                  }}
                >
                  <h3 className="text-2xl font-serif font-semibold text-brown mb-4">
                    {t("lifestyle.title")}
                  </h3>
                  <p className="text-taupe mb-6">
                    {t("lifestyle.desc")}
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: Moon, text: t("lifestyle.item1") },
                      { icon: Wine, text: t("lifestyle.item2") },
                      { icon: Dumbbell, text: t("lifestyle.item3") },
                      { icon: Scale, text: t("lifestyle.item4") },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-2 p-3 rounded-lg"
                        style={{ background: "rgba(140, 79, 88, 0.05)" }}
                      >
                        <item.icon className="w-4 h-4 text-wine mt-1 shrink-0" />
                        <span className="text-xs text-brown">{item.text}</span>
                      </div>
                    ))}
                  </div>
                  <p className="mt-4 text-wine">
                    {t("lifestyle.note")}
                  </p>
                </motion.div>

                {/* Performance Anxiety */}
                <motion.div
                  variants={fadeInUp}
                  className="p-8 rounded-2xl"
                  style={{
                    background: "rgba(255, 255, 255, 0.7)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(172, 153, 144, 0.3)",
                  }}
                >
                  <h3 className="text-2xl font-serif font-semibold text-brown mb-4">
                    {t("anxiety.title")}
                  </h3>
                  <p className="text-taupe">
                    {t("anxiety.desc")}
                  </p>
                </motion.div>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                className="relative h-75 rounded-2xl overflow-hidden"
              >
                <img
                  src={images.consultation}
                  alt="Private medical consultation"
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(140, 79, 88, 0.3) 0%, transparent 100%)",
                  }}
                ></div>
              </motion.div>
            </div>

            {/* Rest of treatment options */}
            <div className="space-y-8">
              {/* ED Tablets */}
              <motion.div
                variants={fadeInUp}
                className="p-8 rounded-2xl"
                style={{
                  background: "rgba(255, 255, 255, 0.7)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(172, 153, 144, 0.3)",
                }}
              >
                <h3 className="text-2xl font-serif font-semibold text-brown mb-4">
                  {t("tablets.title")}
                </h3>
                <p className="text-taupe mb-4">
                  {t("tablets.desc1")}
                </p>
                <p className="text-brown mb-4">
                  {t("tablets.desc2")}
                </p>

                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <h4 className="font-medium text-wine mb-2">
                      {t("tablets.useTitle")}
                    </h4>
                    <ul className="space-y-2">
                      {[t("tablets.use1"), t("tablets.use2"), t("tablets.use3")].map((item, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-brown">
                          <ArrowRight className="w-4 h-4 text-wine mt-1 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium text-wine mb-2">
                      {t("tablets.sideEffectsTitle")}
                    </h4>
                    <p className="text-sm text-taupe mb-4">
                      {t("tablets.sideEffectsDesc")}
                    </p>

                    <h4 className="font-medium text-wine mb-2">
                      {t("tablets.contraTitle")}
                    </h4>
                    <p className="text-sm text-taupe">
                      {t("tablets.contraDesc")}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Testosterone Support */}
              <motion.div
                variants={fadeInUp}
                className="p-8 rounded-2xl"
                style={{
                  background: "rgba(255, 255, 255, 0.7)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(172, 153, 144, 0.3)",
                }}
              >
                <h3 className="text-2xl font-serif font-semibold text-brown mb-4">
                  {t("testosterone.title")}
                </h3>
                <p className="text-taupe">
                  {t("testosterone.desc")}
                </p>
              </motion.div>

              {/* Vacuum Devices */}
              <motion.div
                variants={fadeInUp}
                className="p-8 rounded-2xl"
                style={{
                  background: "rgba(255, 255, 255, 0.7)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(172, 153, 144, 0.3)",
                }}
              >
                <h3 className="text-2xl font-serif font-semibold text-brown mb-4">
                  {t("vacuum.title")}
                </h3>
                <p className="text-taupe mb-4">
                  {t("vacuum.desc")}
                </p>
                <p className="text-wine font-medium mb-2">{t("vacuum.bestForTitle")}</p>
                <ul className="space-y-2">
                  {[t("vacuum.bestFor1"), t("vacuum.bestFor2"), t("vacuum.bestFor3")].map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-brown">
                      <CheckCircle2 className="w-4 h-4 text-wine mt-1 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Injections */}
              <motion.div
                variants={fadeInUp}
                className="p-8 rounded-2xl"
                style={{
                  background: "rgba(255, 255, 255, 0.7)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(172, 153, 144, 0.3)",
                }}
              >
                <h3 className="text-2xl font-serif font-semibold text-brown mb-4">
                  {t("injections.title")}
                </h3>
                <p className="text-taupe">
                  {t("injections.desc")}
                </p>
              </motion.div>

              {/* Shockwave Therapy */}
              <motion.div
                variants={fadeInUp}
                className="p-8 rounded-2xl"
                style={{
                  background: "rgba(255, 255, 255, 0.7)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(172, 153, 144, 0.3)",
                }}
              >
                <h3 className="text-2xl font-serif font-semibold text-brown mb-4">
                  {t("shockwave.title")}
                </h3>
                <p className="text-taupe mb-4">
                  {t("shockwave.desc")}
                </p>
                <p className="text-wine font-medium mb-2">
                  {t("shockwave.note")}
                </p>
                <ul className="space-y-2 mb-4">
                  {[t("shockwave.point1"), t("shockwave.point2")].map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-brown">
                      <ArrowRight className="w-4 h-4 text-wine mt-1 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div
                  className="p-4 rounded-lg"
                  style={{ background: "rgba(140, 79, 88, 0.05)" }}
                >
                  <h4 className="font-medium text-wine mb-2">
                    {t("shockwave.questionsTitle")}
                  </h4>
                  <ol className="space-y-2 list-decimal list-inside text-sm text-brown">
                    <li>{t("shockwave.q1")}</li>
                    <li>{t("shockwave.q2")}</li>
                    <li>{t("shockwave.q3")}</li>
                  </ol>
                  <p className="mt-2 text-sm text-taupe">
                    {t("shockwave.questionsNote")}
                  </p>
                </div>
              </motion.div>

              {/* PRP P-Shot */}
              <motion.div
                variants={fadeInUp}
                className="p-8 rounded-2xl"
                style={{
                  background: "rgba(255, 255, 255, 0.7)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(172, 153, 144, 0.3)",
                }}
              >
                <h3 className="text-2xl font-serif font-semibold text-brown mb-4">
                  {t("prp.title")}
                </h3>
                <p className="text-taupe mb-4">
                  {t("prp.desc")}
                </p>

                <div
                  className="p-4 rounded-lg"
                  style={{ background: "rgba(140, 79, 88, 0.05)" }}
                >
                  <h4 className="font-medium text-wine mb-2">
                    {t("prp.thinkingTitle")}
                  </h4>
                  <ul className="space-y-2">
                    {[t("prp.think1"), t("prp.think2"), t("prp.think3")].map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-brown">
                        <ArrowRight className="w-4 h-4 text-wine mt-1 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* Stem Cell */}
              <motion.div
                variants={fadeInUp}
                className="p-8 rounded-2xl"
                style={{
                  background: "rgba(255, 255, 255, 0.7)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(172, 153, 144, 0.3)",
                }}
              >
                <h3 className="text-2xl font-serif font-semibold text-brown mb-4">
                  {t("stemCell.title")}
                </h3>
                <p className="text-taupe mb-4">
                  {t("stemCell.desc")}
                </p>

                <div
                  className="p-4 rounded-lg"
                  style={{ background: "rgba(140, 79, 88, 0.05)" }}
                >
                  <h4 className="font-medium text-wine mb-2">
                    {t("stemCell.protectionTitle")}
                  </h4>
                  <ul className="space-y-2">
                    {[t("stemCell.protect1"), t("stemCell.protect2"), t("stemCell.protect3")].map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-brown">
                        <ArrowRight className="w-4 h-4 text-wine mt-1 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* Surgery */}
              <motion.div
                variants={fadeInUp}
                className="p-8 rounded-2xl"
                style={{
                  background: "rgba(255, 255, 255, 0.7)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(172, 153, 144, 0.3)",
                }}
              >
                <h3 className="text-2xl font-serif font-semibold text-brown mb-4">
                  {t("surgery.title")}
                </h3>
                <p className="text-taupe">
                  {t("surgery.desc")}
                </p>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* KL Location Image */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-12"
          style={{ background: "#FAF8F7" }}
        >
          <div className="container mx-auto px-4">
            <motion.div
              variants={scaleIn}
              className="relative h-100 rounded-3xl overflow-hidden"
            >
              <img
                src={images.kualaLumpur}
                alt="Kuala Lumpur cityscape"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(140, 79, 88, 0.3) 0%, transparent 100%)",
                }}
              ></div>

              <div
                className="absolute bottom-0 left-0 right-0 p-8"
                style={{
                  background:
                    "linear-gradient(0deg, rgba(75, 58, 51, 0.8) 0%, transparent 100%)",
                }}
              >
                <p className="text-white text-xl font-serif">
                  {t("locationBanner.text")}
                </p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Pros and Cons Comparison */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-24"
          style={{ background: "#FAF8F7" }}
        >
          <div className="container mx-auto px-4">
            <motion.h2
              variants={fadeInUp}
              className="text-4xl font-serif font-bold text-center mb-16"
              style={{ color: "#4B3A33" }}
            >
              {t("proscons.title")}{" "}
              <span className="text-wine">{t("proscons.titleHighlight")}</span>
            </motion.h2>

            <motion.div
              variants={staggerContainer}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {/* Tablets */}
              <motion.div
                variants={fadeInUp}
                className="p-6 rounded-xl"
                style={{
                  background: "rgba(255, 255, 255, 0.7)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(172, 153, 144, 0.3)",
                }}
              >
                <Pill className="w-8 h-8 text-wine mb-4" />
                <h3 className="font-serif text-xl font-semibold text-brown mb-4">
                  {t("proscons.tabletsTitle")}
                </h3>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-1 shrink-0" />
                    <span className="text-sm text-brown">{t("proscons.tabletsPros")}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-wine mt-1 shrink-0" />
                    <span className="text-sm text-brown">{t("proscons.tabletsCons")}</span>
                  </div>
                </div>
              </motion.div>

              {/* Shockwave */}
              <motion.div
                variants={fadeInUp}
                className="p-6 rounded-xl"
                style={{
                  background: "rgba(255, 255, 255, 0.7)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(172, 153, 144, 0.3)",
                }}
              >
                <Zap className="w-8 h-8 text-wine mb-4" />
                <h3 className="font-serif text-xl font-semibold text-brown mb-4">
                  {t("proscons.shockwaveTitle")}
                </h3>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-1 shrink-0" />
                    <span className="text-sm text-brown">{t("proscons.shockwavePros")}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-wine mt-1 shrink-0" />
                    <span className="text-sm text-brown">{t("proscons.shockwaveCons")}</span>
                  </div>
                </div>
              </motion.div>

              {/* Vacuum */}
              <motion.div
                variants={fadeInUp}
                className="p-6 rounded-xl"
                style={{
                  background: "rgba(255, 255, 255, 0.7)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(172, 153, 144, 0.3)",
                }}
              >
                <Activity className="w-8 h-8 text-wine mb-4" />
                <h3 className="font-serif text-xl font-semibold text-brown mb-4">
                  {t("proscons.vacuumTitle")}
                </h3>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-1 shrink-0" />
                    <span className="text-sm text-brown">{t("proscons.vacuumPros")}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-wine mt-1 shrink-0" />
                    <span className="text-sm text-brown">{t("proscons.vacuumCons")}</span>
                  </div>
                </div>
              </motion.div>

              {/* Injections */}
              <motion.div
                variants={fadeInUp}
                className="p-6 rounded-xl"
                style={{
                  background: "rgba(255, 255, 255, 0.7)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(172, 153, 144, 0.3)",
                }}
              >
                <Syringe className="w-8 h-8 text-wine mb-4" />
                <h3 className="font-serif text-xl font-semibold text-brown mb-4">
                  {t("proscons.injectionsTitle")}
                </h3>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-1 shrink-0" />
                    <span className="text-sm text-brown">{t("proscons.injectionsPros")}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-wine mt-1 shrink-0" />
                    <span className="text-sm text-brown">{t("proscons.injectionsCons")}</span>
                  </div>
                </div>
              </motion.div>

              {/* PRP/Stem Cell */}
              <motion.div
                variants={fadeInUp}
                className="p-6 rounded-xl"
                style={{
                  background: "rgba(255, 255, 255, 0.7)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(172, 153, 144, 0.3)",
                }}
              >
                <Sparkles className="w-8 h-8 text-wine mb-4" />
                <h3 className="font-serif text-xl font-semibold text-brown mb-4">
                  {t("proscons.prpStemTitle")}
                </h3>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-1 shrink-0" />
                    <span className="text-sm text-brown">{t("proscons.prpStemPros")}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-wine mt-1 shrink-0" />
                    <span className="text-sm text-brown">{t("proscons.prpStemCons")}</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Cost Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-24"
          style={{ background: "#F3EFEE" }}
        >
          <div className="container mx-auto px-4">
            <motion.h2
              variants={fadeInUp}
              className="text-4xl font-serif font-bold text-center mb-16"
              style={{ color: "#4B3A33" }}
            >
              {t("cost.title")}{" "}
              <span className="text-wine">{t("cost.titleHighlight")}</span>
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-center text-taupe mb-12 max-w-2xl mx-auto"
            >
              {t("cost.desc")}
            </motion.p>

            <motion.div
              variants={staggerContainer}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto"
            >
              {[
                { title: t("cost.consultTitle"), price: t("cost.consultPrice"), icon: Stethoscope },
                { title: t("cost.sildenafTitle"), price: t("cost.sildenafPrice"), note: t("cost.sildenafNote"), icon: Pill },
                { title: t("cost.shockwaveTitle"), price: t("cost.shockwavePrice"), note: t("cost.shockwaveNote"), icon: Zap },
                { title: t("cost.implantsTitle"), price: t("cost.implantsPrice"), note: t("cost.implantsNote"), icon: Syringe },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="p-6 rounded-xl text-center"
                  style={{
                    background: "rgba(255, 255, 255, 0.7)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(172, 153, 144, 0.3)",
                  }}
                >
                  <item.icon className="w-8 h-8 text-wine mx-auto mb-4" />
                  <h3 className="font-medium text-brown mb-2">{item.title}</h3>
                  <p className="text-2xl font-serif font-bold text-wine mb-1">
                    {item.price}
                  </p>
                  {item.note && (
                    <p className="text-xs text-taupe">{item.note}</p>
                  )}
                </motion.div>
              ))}
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="text-center text-sm text-taupe mt-8"
            >
              {t("cost.disclaimer")}
            </motion.p>
          </div>
        </motion.section>

        {/* Process */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-24"
          style={{ background: "#FAF8F7" }}
        >
          <div className="container mx-auto px-4">
            <motion.h2
              variants={fadeInUp}
              className="text-4xl font-serif font-bold text-center mb-16"
              style={{ color: "#4B3A33" }}
            >
              {t("process.title")}
            </motion.h2>

            <motion.div
              variants={staggerContainer}
              className="grid md:grid-cols-2 lg:grid-cols-5 gap-4"
            >
              {[
                { step: 1, title: t("process.step1Title"), desc: t("process.step1Desc"), icon: MessageCircle },
                { step: 2, title: t("process.step2Title"), desc: t("process.step2Desc"), icon: Activity },
                { step: 3, title: t("process.step3Title"), desc: t("process.step3Desc"), icon: TestTube },
                { step: 4, title: t("process.step4Title"), desc: t("process.step4Desc"), icon: Calendar },
                { step: 5, title: t("process.step5Title"), desc: t("process.step5Desc"), icon: Timer },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="relative p-6 rounded-xl text-center"
                  style={{
                    background: "rgba(255, 255, 255, 0.7)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(172, 153, 144, 0.3)",
                  }}
                >
                  <div className="w-10 h-10 rounded-full bg-wine text-white flex items-center justify-center mx-auto mb-4 font-bold">
                    {item.step}
                  </div>
                  <item.icon className="w-6 h-6 text-wine mx-auto mb-2" />
                  <h3 className="font-medium text-brown mb-1">{item.title}</h3>
                  <p className="text-xs text-taupe">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="text-center mt-8 text-taupe"
            >
              {t("process.privacyNote")}
            </motion.p>
          </div>
        </motion.section>

        {/* Competitor Snapshot */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-24"
          style={{ background: "#F3EFEE" }}
        >
          <div className="container mx-auto px-4">
            <motion.h2
              variants={fadeInUp}
              className="text-4xl font-serif font-bold text-center mb-8"
              style={{ color: "#4B3A33" }}
            >
              {t("competitor.title")}{" "}
              <span className="text-wine">{t("competitor.titleHighlight")}</span>
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-center text-taupe mb-12 max-w-2xl mx-auto"
            >
              {t("competitor.desc")}
            </motion.p>

            <motion.div
              variants={staggerContainer}
              className="grid md:grid-cols-3 gap-6"
            >
              {[
                t("competitor.item1"),
                t("competitor.item2"),
                t("competitor.item3"),
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="p-6 rounded-xl"
                  style={{
                    background: "rgba(255, 255, 255, 0.7)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(172, 153, 144, 0.3)",
                  }}
                >
                  <p className="text-brown text-sm">{item}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* FAQ Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-24"
          style={{ background: "#FAF8F7" }}
        >
          <div className="container mx-auto px-4">
            <motion.h2
              variants={fadeInUp}
              className="text-4xl font-serif font-bold text-center mb-16"
              style={{ color: "#4B3A33" }}
            >
              {t("faq.title")}
            </motion.h2>

            <motion.div
              variants={staggerContainer}
              className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
            >
              {Array.from({ length: 12 }, (_, i) => ({
                q: t(`faq.q${i + 1}`),
                a: t(`faq.a${i + 1}`),
              })).map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="p-6 rounded-xl"
                  style={{
                    background: "rgba(255, 255, 255, 0.7)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(172, 153, 144, 0.3)",
                  }}
                >
                  <h3 className="font-medium text-wine mb-3">{item.q}</h3>
                  <p className="text-sm text-brown">{item.a}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* CTA Section with Image Background */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-24 relative overflow-hidden"
        >
          <div className="absolute inset-0">
            <img
              src={images.modernClinic}
              alt="Nexus Clinic Modern Facility"
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg, rgba(140, 79, 88, 0.9) 0%, rgba(171, 128, 104, 0.9) 100%)",
              }}
            ></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              variants={staggerContainer}
              className="max-w-3xl mx-auto text-center"
            >
              <motion.h2
                variants={fadeInUp}
                className="text-4xl font-serif font-bold text-white mb-6"
              >
                {t("cta.title")}
              </motion.h2>

              <motion.p
                variants={fadeInUp}
                className="text-white/90 mb-8 text-lg"
              >
                {t("cta.desc")}
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="flex flex-col items-center gap-4"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-lg font-medium text-wine bg-white flex items-center gap-2"
                  style={{
                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  {t("cta.button")}
                  <ArrowRight className="w-5 h-5" />
                </motion.button>

                <div className="flex items-center gap-4 text-white">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    <span>{t("cta.phone1")}</span>
                  </div>
                  <span>|</span>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    <span>{t("cta.phone2")}</span>
                  </div>
                </div>

                <p className="text-white/80 text-sm">
                  {t("cta.address")}
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>
      </main>
    </>
  );
}
