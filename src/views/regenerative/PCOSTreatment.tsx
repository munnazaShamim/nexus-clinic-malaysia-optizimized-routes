"use client";

import { motion } from "framer-motion";
import {
  Calendar,
  Droplets,
  Weight,
  Heart,
  Shield,
  Star,
  ChevronRight,
  Sparkles,
  Moon,
  Sun,
  Users,
  MapPin,
  Award,
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

const PCOSPage = ({ locale = fallbackLng }: { locale?: string }) => {
  const { t } = useTranslation(locale, "pcosTreatment");

  const symptoms = [
    { icon: Calendar, key: "s1" },
    { icon: Droplets, key: "s2" },
    { icon: Sparkles, key: "s3" },
    { icon: Weight, key: "s4" },
    { icon: Sun, key: "s5" },
    { icon: Moon, key: "s6" },
    { icon: Heart, key: "s7" },
  ];

  const treatmentSteps = [
    {
      phaseKey: "phase1",
      descKey: "phase1Desc",
    },
    {
      phaseKey: "phase2",
      descKey: "phase2Desc",
      optionKeys: ["phase2Opt1", "phase2Opt2", "phase2Opt3", "phase2Opt4", "phase2Opt5"],
    },
    {
      phaseKey: "phase3",
      descKey: "phase3Desc",
    },
  ];

  const faqs = Array.from({ length: 14 }, (_, i) => ({
    q: t(`faq.q${i + 1}`),
    a: t(`faq.a${i + 1}`),
  }));

  return (
    <>
      <main className="bg-light min-h-screen font-['Inter',sans-serif]">
        {/* Hero Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="relative min-h-screen flex items-center justify-center overflow-hidden"
          style={{ backgroundColor: "#F3EFEE" }}
        >
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop"
              alt="Peaceful woman practicing self-care"
              className="w-full h-full object-cover opacity-20"
            />
          </div>
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-wine filter blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-rose filter blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div variants={fadeInUp} className="mb-6">
                <span className="inline-block px-4 py-2 bg-wine text-light rounded-full text-sm font-medium tracking-wide">
                  {t("hero.badge")}
                </span>
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
                style={{ color: "#4B3A33", fontFamily: "Georgia, serif" }}
              >
                {t("hero.title1")}
                <span className="block text-wine">{t("hero.title2")}</span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
                style={{ color: "#AC9990" }}
              >
                {t("hero.desc")}
              </motion.p>

              <motion.p
                variants={fadeInUp}
                className="text-lg mb-12 max-w-3xl mx-auto"
                style={{ color: "#4B3A33" }}
              >
                {t("hero.longDesc")}
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <button
                  className="px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1"
                  style={{ backgroundColor: "#8C4F58", color: "#FAF8F7" }}
                >
                  {t("hero.cta1")}
                </button>
                <button
                  className="px-8 py-4 rounded-full text-lg font-medium border-2 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1"
                  style={{ borderColor: "#8C4F58", color: "#8C4F58" }}
                >
                  {t("hero.cta2")}
                </button>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Trust Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="py-20"
          style={{ backgroundColor: "#FAF8F7" }}
        >
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Shield,
                  title: t("trust.t1Title"),
                  desc: t("trust.t1Desc"),
                },
                {
                  icon: Users,
                  title: t("trust.t2Title"),
                  desc: t("trust.t2Desc"),
                },
                {
                  icon: Award,
                  title: t("trust.t3Title"),
                  desc: t("trust.t3Desc"),
                },
                {
                  icon: MapPin,
                  title: t("trust.t4Title"),
                  desc: t("trust.t4Desc"),
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  className="p-6 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:shadow-xl"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.7)",
                    border: "1px solid rgba(172, 153, 144, 0.2)",
                  }}
                >
                  <item.icon
                    className="w-12 h-12 mb-4"
                    style={{ color: "#8C4F58" }}
                  />
                  <h3
                    className="text-xl font-bold mb-2"
                    style={{ color: "#4B3A33" }}
                  >
                    {item.title}
                  </h3>
                  <p style={{ color: "#AC9990" }}>{item.desc}</p>
                  {index === 3 && (
                    <p className="mt-2 text-sm" style={{ color: "#8C4F58" }}>
                      {t("trust.phone")}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* What Is PCOS Section with Image */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="py-20 relative overflow-hidden"
          style={{ backgroundColor: "#F3EFEE" }}
        >
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInLeft}>
                <h2
                  className="text-4xl md:text-5xl font-bold mb-6"
                  style={{ color: "#4B3A33", fontFamily: "Georgia, serif" }}
                >
                  {t("whatIs.title")}
                  <span className="block text-wine">{t("whatIs.titleHighlight")}</span>
                </h2>

                <p className="text-lg mb-4" style={{ color: "#4B3A33" }}>
                  {t("whatIs.desc1")}
                </p>

                <p className="text-lg italic" style={{ color: "#AC9990" }}>
                  {t("whatIs.desc2")}
                </p>

                <p className="text-lg mt-4" style={{ color: "#8C4F58" }}>
                  {t("whatIs.stat")}
                </p>
              </motion.div>

              <motion.div variants={fadeInRight} className="relative">
                <div className="absolute inset-0 bg-linear-to-r from-wine to-rose rounded-3xl opacity-20 blur-2xl"></div>
                <img
                  src="/images/treatment/face-scan.png"
                  alt="Medical consultation for women's health"
                  className="relative rounded-3xl shadow-2xl w-full h-100 object-cover"
                />
                <div
                  className="absolute bottom-4 left-4 right-4 p-4 rounded-xl backdrop-blur-md"
                  style={{ backgroundColor: "rgba(255, 255, 255, 0.9)" }}
                >
                  <p
                    className="text-sm font-medium"
                    style={{ color: "#4B3A33" }}
                  >
                    {t("whatIs.imageCaption")}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Symptoms and Signs with Image */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="py-20"
          style={{ backgroundColor: "#FAF8F7" }}
        >
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInLeft} className="order-2 lg:order-1">
                <div className="relative">
                  <div className="absolute inset-0 bg-linear-to-r from-wine to-rose rounded-3xl opacity-20 blur-2xl"></div>
                  <img
                    src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80"
                    alt="Woman experiencing PCOS symptoms"
                    className="relative rounded-3xl shadow-2xl w-full h-125 object-cover"
                  />
                  <div className="absolute top-4 left-4 p-3 rounded-full bg-white/90 backdrop-blur-sm">
                    <Heart className="w-6 h-6" style={{ color: "#8C4F58" }} />
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeInRight} className="order-1 lg:order-2">
                <h2
                  className="text-4xl md:text-5xl font-bold mb-6"
                  style={{ color: "#4B3A33", fontFamily: "Georgia, serif" }}
                >
                  {t("symptoms.title")}
                  <span className="block text-wine text-2xl mt-2">
                    {t("symptoms.subtitle")}
                  </span>
                </h2>

                <p className="mb-6 text-lg" style={{ color: "#AC9990" }}>
                  {t("symptoms.desc")}
                </p>

                <div className="space-y-4">
                  {symptoms.map((symptom, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-3 rounded-xl transition-all duration-300 hover:bg-white/50"
                    >
                      <symptom.icon
                        className="w-6 h-6 mt-1 shrink-0"
                        style={{ color: "#8C4F58" }}
                      />
                      <span style={{ color: "#4B3A33" }}>{t(`symptoms.${symptom.key}`)}</span>
                    </div>
                  ))}
                </div>

                <p
                  className="mt-6 italic p-4 rounded-xl"
                  style={{ backgroundColor: "#F3EFEE", color: "#AC9990" }}
                >
                  {t("symptoms.mentalNote")}
                </p>

                <p
                  className="mt-4 font-medium text-lg"
                  style={{ color: "#8C4F58" }}
                >
                  {t("symptoms.empathy")}
                </p>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Lifestyle Section with Image */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="py-20 relative overflow-hidden"
          style={{ backgroundColor: "#F3EFEE" }}
        >
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div variants={fadeInLeft}>
                <h2
                  className="text-4xl md:text-5xl font-bold mb-6"
                  style={{ color: "#4B3A33", fontFamily: "Georgia, serif" }}
                >
                  {t("lifestyle.title")}
                  <span className="block text-wine text-2xl mt-2">
                    {t("lifestyle.subtitle")}
                  </span>
                </h2>

                <p className="text-lg mb-4" style={{ color: "#4B3A33" }}>
                  {t("lifestyle.desc")}
                </p>

                <p className="mb-6" style={{ color: "#AC9990" }}>
                  {t("lifestyle.evidence")}
                </p>

                <h3
                  className="text-2xl font-bold mb-4"
                  style={{ color: "#4B3A33" }}
                >
                  {t("lifestyle.habitsTitle")}
                </h3>

                <div className="space-y-4">
                  {["h1", "h2", "h3", "h4", "h5"].map((key, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 rounded-xl bg-white/30 backdrop-blur-sm"
                    >
                      <div className="w-8 h-8 rounded-full bg-wine/20 flex items-center justify-center">
                        <ChevronRight
                          className="w-5 h-5"
                          style={{ color: "#8C4F58" }}
                        />
                      </div>
                      <span style={{ color: "#4B3A33" }}>{t(`lifestyle.${key}`)}</span>
                    </div>
                  ))}
                </div>

                <p
                  className="mt-6 italic font-medium"
                  style={{ color: "#8C4F58" }}
                >
                  {t("lifestyle.note")}
                </p>
              </motion.div>

              <motion.div variants={fadeInRight} className="space-y-6">
                <div className="relative h-64 rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop"
                    alt="Woman exercising outdoors in KL"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-brown to-transparent opacity-60"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-lg font-bold">{t("lifestyle.imageTitle")}</p>
                    <p className="text-sm">{t("lifestyle.imageDesc")}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div
                    className="p-4 rounded-xl backdrop-blur-sm"
                    style={{ backgroundColor: "rgba(255, 255, 255, 0.7)" }}
                  >
                    <h4 className="font-bold mb-2" style={{ color: "#4B3A33" }}>
                      {t("lifestyle.step2Title")}
                    </h4>
                    <p className="text-sm" style={{ color: "#AC9990" }}>
                      {t("lifestyle.step2Desc")}
                    </p>
                  </div>
                  <div
                    className="p-4 rounded-xl backdrop-blur-sm"
                    style={{ backgroundColor: "rgba(255, 255, 255, 0.7)" }}
                  >
                    <h4 className="font-bold mb-2" style={{ color: "#4B3A33" }}>
                      {t("lifestyle.step3Title")}
                    </h4>
                    <p className="text-sm" style={{ color: "#AC9990" }}>
                      {t("lifestyle.step3Desc")}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Hair and Insulin Sections with Image */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="py-20"
          style={{ backgroundColor: "#FAF8F7" }}
        >
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div variants={fadeInLeft} className="space-y-6">
                <div
                  className="p-8 rounded-2xl"
                  style={{ backgroundColor: "#F3EFEE" }}
                >
                  <h3
                    className="text-3xl font-bold mb-4"
                    style={{ color: "#4B3A33", fontFamily: "Georgia, serif" }}
                  >
                    {t("hair.title")}
                    <span className="block text-xl text-wine mt-1">
                      {t("hair.subtitle")}
                    </span>
                  </h3>

                  <p className="mb-4" style={{ color: "#AC9990" }}>
                    {t("hair.desc")}
                  </p>

                  <div className="relative h-48 rounded-xl overflow-hidden mb-4">
                    <img
                      src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2070&auto=format&fit=crop"
                      alt="Laser hair removal treatment"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <p className="font-medium mb-2" style={{ color: "#4B3A33" }}>
                    {t("hair.optionsTitle")}
                  </p>
                  <ul className="list-disc list-inside space-y-2">
                    <li style={{ color: "#4B3A33" }}>{t("hair.opt1")}</li>
                    <li style={{ color: "#4B3A33" }}>{t("hair.opt2")}</li>
                    <li style={{ color: "#4B3A33" }}>{t("hair.opt3")}</li>
                  </ul>
                </div>
              </motion.div>

              <motion.div variants={fadeInRight} className="space-y-6">
                <div
                  className="p-8 rounded-2xl"
                  style={{ backgroundColor: "#F3EFEE" }}
                >
                  <h3
                    className="text-3xl font-bold mb-4"
                    style={{ color: "#4B3A33", fontFamily: "Georgia, serif" }}
                  >
                    {t("insulin.title")}
                  </h3>

                  <p className="mb-4" style={{ color: "#AC9990" }}>
                    {t("insulin.desc")}
                  </p>

                  <div className="relative h-48 rounded-xl overflow-hidden mb-4">
                    <img
                      src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2070&auto=format&fit=crop"
                      alt="Healthy balanced meal for PCOS"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="mb-4">
                    <p
                      className="font-medium mb-2"
                      style={{ color: "#4B3A33" }}
                    >
                      {t("insulin.metforminTitle")}
                    </p>
                    <p style={{ color: "#AC9990" }}>
                      {t("insulin.metforminDesc")}
                    </p>
                  </div>

                  <div>
                    <p
                      className="font-medium mb-2"
                      style={{ color: "#4B3A33" }}
                    >
                      {t("insulin.glp1Title")}
                    </p>
                    <p style={{ color: "#AC9990" }}>
                      {t("insulin.glp1Desc")}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Fertility Section with Image */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="py-20 relative overflow-hidden"
          style={{ backgroundColor: "#F3EFEE" }}
        >
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInLeft}>
                <h2
                  className="text-4xl md:text-5xl font-bold mb-6"
                  style={{ color: "#4B3A33", fontFamily: "Georgia, serif" }}
                >
                  {t("fertility.title")}
                  <span className="block text-wine text-2xl">
                    {t("fertility.subtitle")}
                  </span>
                </h2>

                <p className="text-lg mb-4" style={{ color: "#4B3A33" }}>
                  {t("fertility.desc")}
                </p>

                <div
                  className="p-6 rounded-xl backdrop-blur-sm mb-4"
                  style={{ backgroundColor: "rgba(255, 255, 255, 0.7)" }}
                >
                  <p
                    className="font-bold text-lg mb-2"
                    style={{ color: "#8C4F58" }}
                  >
                    {t("fertility.ovulationTitle")}
                  </p>
                  <p>
                    {t("fertility.ovulationDesc")}
                  </p>
                </div>

                <p className="font-medium mb-2" style={{ color: "#4B3A33" }}>
                  {t("fertility.planTitle")}
                </p>
                <ul className="list-disc list-inside space-y-1">
                  <li style={{ color: "#4B3A33" }}>{t("fertility.plan1")}</li>
                  <li style={{ color: "#4B3A33" }}>{t("fertility.plan2")}</li>
                  <li style={{ color: "#4B3A33" }}>{t("fertility.plan3")}</li>
                </ul>
              </motion.div>

              <motion.div variants={fadeInRight} className="relative">
                <div className="absolute inset-0 bg-linear-to-r from-wine to-rose rounded-3xl opacity-20 blur-2xl"></div>
                <img
                  src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=800&q=80"
                  alt="Happy couple expecting a baby"
                  className="relative rounded-3xl shadow-2xl w-full h-100 object-cover"
                />
                <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-wine flex items-center justify-center text-white text-2xl font-bold">
                  {t("fertility.hopeBadge")}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Cost Section with Image */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="py-20"
          style={{ backgroundColor: "#FAF8F7" }}
        >
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                variants={fadeInLeft}
                className="relative order-2 lg:order-1"
              >
                <img
                  src="https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=2070&auto=format&fit=crop"
                  alt="Medical consultation at Nexus Clinic"
                  className="rounded-3xl shadow-2xl w-full h-100 object-cover"
                />
                <div className="absolute -top-4 -left-4 p-4 rounded-xl bg-white shadow-xl">
                  <p
                    className="text-sm font-medium"
                    style={{ color: "#8C4F58" }}
                  >
                    {t("cost.transparentBadge")}
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeInRight} className="order-1 lg:order-2">
                <h2
                  className="text-4xl md:text-5xl font-bold mb-6"
                  style={{ color: "#4B3A33", fontFamily: "Georgia, serif" }}
                >
                  {t("cost.title")}
                  <span className="block text-wine text-2xl">
                    {t("cost.subtitle")}
                  </span>
                </h2>

                <p className="text-lg mb-6" style={{ color: "#AC9990" }}>
                  {t("cost.desc")}
                </p>

                <div
                  className="p-6 rounded-xl mb-4"
                  style={{ backgroundColor: "#F3EFEE" }}
                >
                  <p className="font-bold mb-3" style={{ color: "#4B3A33" }}>
                    {t("cost.driversTitle")}
                  </p>
                  <ul className="space-y-2">
                    {["d1", "d2", "d3", "d4", "d5"].map((key, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-wine"></div>
                        <span style={{ color: "#4B3A33" }}>{t(`cost.${key}`)}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-3 gap-3 mb-4">
                  <div className="p-3 text-center rounded-xl bg-white">
                    <p className="text-xs text-taupe">{t("cost.price1Label")}</p>
                    <p className="text-lg font-bold text-wine">{t("cost.price1Value")}</p>
                  </div>
                  <div className="p-3 text-center rounded-xl bg-white">
                    <p className="text-xs text-taupe">{t("cost.price2Label")}</p>
                    <p className="text-lg font-bold text-wine">{t("cost.price2Value")}</p>
                  </div>
                  <div className="p-3 text-center rounded-xl bg-white">
                    <p className="text-xs text-taupe">{t("cost.price3Label")}</p>
                    <p className="text-lg font-bold text-wine">{t("cost.price3Value")}</p>
                  </div>
                </div>

                <p className="text-sm italic" style={{ color: "#8C4F58" }}>
                  {t("cost.disclaimer")}
                </p>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Treatment Phases */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="py-20 relative overflow-hidden"
          style={{ backgroundColor: "#F3EFEE" }}
        >
          <div className="container mx-auto px-4">
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold text-center mb-12"
              style={{ color: "#4B3A33", fontFamily: "Georgia, serif" }}
            >
              {t("phases.title")}
              <span className="block text-wine">
                {t("phases.titleHighlight")}
              </span>
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-center text-lg mb-12"
              style={{ color: "#AC9990" }}
            >
              {t("phases.desc")}
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {treatmentSteps.map((step, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  className="p-8 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:shadow-xl"
                  style={{ backgroundColor: "rgba(255, 255, 255, 0.7)" }}
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                    style={{ backgroundColor: "#8C4F58" }}
                  >
                    <span className="text-white font-bold text-xl">
                      {index + 1}
                    </span>
                  </div>

                  <h3
                    className="text-xl font-bold mb-3"
                    style={{ color: "#4B3A33" }}
                  >
                    {t(`phases.${step.phaseKey}`)}
                  </h3>

                  {step.optionKeys && (
                    <div className="mb-3">
                      <p
                        className="font-medium mb-2"
                        style={{ color: "#8C4F58" }}
                      >
                        {t("phases.phase2Goals")}
                      </p>
                      <ul className="list-disc list-inside space-y-1">
                        {step.optionKeys.map((key, i) => (
                          <li key={i} style={{ color: "#AC9990" }}>
                            {t(`phases.${key}`)}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <p style={{ color: "#4B3A33" }}>{t(`phases.${step.descKey}`)}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Competitor Snapshot */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="py-20"
          style={{ backgroundColor: "#FAF8F7" }}
        >
          <div className="container mx-auto px-4">
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold text-center mb-12"
              style={{ color: "#4B3A33", fontFamily: "Georgia, serif" }}
            >
              {t("competitor.title")}
            </motion.h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <motion.div
                variants={fadeInLeft}
                className="p-6 rounded-2xl"
                style={{ backgroundColor: "#F3EFEE" }}
              >
                <h3
                  className="text-2xl font-bold mb-4"
                  style={{ color: "#8C4F58" }}
                >
                  {t("competitor.card1Title")}
                </h3>
                <ul className="space-y-3">
                  {["c1Item1", "c1Item2", "c1Item3", "c1Item4", "c1Item5"].map((key, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <ChevronRight
                        className="w-5 h-5 mt-1 shrink-0"
                        style={{ color: "#AC9990" }}
                      />
                      <span style={{ color: "#4B3A33" }}>{t(`competitor.${key}`)}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                className="p-6 rounded-2xl"
                style={{ backgroundColor: "#F3EFEE" }}
              >
                <h3
                  className="text-2xl font-bold mb-4"
                  style={{ color: "#8C4F58" }}
                >
                  {t("competitor.card2Title")}
                </h3>
                <ul className="space-y-3">
                  {["c2Item1", "c2Item2", "c2Item3", "c2Item4"].map((key, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Star
                        className="w-5 h-5 mt-1 shrink-0"
                        style={{ color: "#8C4F58" }}
                      />
                      <span style={{ color: "#4B3A33" }}>{t(`competitor.${key}`)}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* FAQ Section */}
        <FAQ data={faqs} />

        {/* CTA Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="py-20 relative overflow-hidden"
          style={{ backgroundColor: "#8C4F58" }}
        >
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop"
              alt="Peaceful moment of self-care"
              className="w-full h-full object-cover opacity-20"
            />
          </div>
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-white filter blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-white filter blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <motion.h2
                variants={fadeInUp}
                className="text-4xl md:text-5xl font-bold mb-6 text-white"
                style={{ fontFamily: "Georgia, serif" }}
              >
                {t("cta.title1")}
                <span className="block text-cream">{t("cta.title2")}</span>
              </motion.h2>

              <motion.p
                variants={fadeInUp}
                className="text-xl mb-8 text-white/90"
              >
                {t("cta.desc")}
              </motion.p>

              <motion.div variants={fadeInUp}>
                <button
                  className="px-10 py-5 rounded-full text-lg font-bold transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1"
                  style={{ backgroundColor: "#FAF8F7", color: "#8C4F58" }}
                >
                  {t("cta.button")}
                </button>
              </motion.div>

              <motion.p variants={fadeInUp} className="mt-6 text-white/80">
                {t("cta.address")}
              </motion.p>
              <motion.p variants={fadeInUp} className="text-white/80">
                {t("cta.phone")}
              </motion.p>
            </div>
          </div>
        </motion.section>
      </main>
    </>
  );
};

export default PCOSPage;
