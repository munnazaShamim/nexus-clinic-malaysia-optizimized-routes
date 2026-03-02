"use client";

import { motion } from "framer-motion";
import {
  Activity,
  Droplets,
  Heart,
  Brain,
  Moon,
  Dumbbell,
  Shield,
  Calendar,
  Clock,
  CheckCircle,
  FlaskRound as Flask,
  Syringe,
  Pill,
  AlertTriangle,
  Phone,
  MapPin,
  HeartPulse,
  Zap,
  Scale,
  Sparkles,
  BarChart3,
  Thermometer,
  Briefcase,
  Award,
  Star,
} from "lucide-react";
import {
  staggerContainer,
  fadeInUp,
  fadeInRight,
  scaleIn,
  fadeInLeft,
} from "../../lib/animations";
import React from "react";
import FAQ from "../../components/FAQ";
import { useTranslation } from "@/src/i18n/client";
import { fallbackLng } from "@/src/i18n/settings";

const TestosteroneLanding = ({ locale = fallbackLng }: { locale?: string }) => {
  const { t } = useTranslation(locale, "testosterone");

  const images = {
    doctorConsultation:
      "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    labTesting:
      "https://images.unsplash.com/photo-1579154204601-01588f351e67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    clinicInterior:
      "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2091&q=80",
    patientCare: "/images/treatment/happy-patient.png",
  };

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

  const symptoms = [
    { icon: <Zap />, text: t("symptoms.s1") },
    { icon: <Heart />, text: t("symptoms.s2") },
    { icon: <Activity />, text: t("symptoms.s3") },
    { icon: <Brain />, text: t("symptoms.s4") },
    { icon: <Sparkles />, text: t("symptoms.s5") },
    { icon: <Scale />, text: t("symptoms.s6") },
    { icon: <Dumbbell />, text: t("symptoms.s7") },
    { icon: <Moon />, text: t("symptoms.s8") },
  ];

  const diagnosisSteps = [
    { icon: <Clock />, text: t("diagnosis.step1") },
    { icon: <Calendar />, text: t("diagnosis.step2") },
    { icon: <BarChart3 />, text: t("diagnosis.step3") },
  ];

  const treatmentOptions = [
    {
      icon: <Syringe />,
      title: t("treatment.opt1Title"),
      desc: t("treatment.opt1Desc"),
      price: t("treatment.opt1Price"),
      image:
        "https://images.unsplash.com/photo-1584362917165-526a968579e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      icon: <Droplets />,
      title: t("treatment.opt2Title"),
      desc: t("treatment.opt2Desc"),
      price: t("treatment.opt2Price"),
      image:
        "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      icon: <Pill />,
      title: t("treatment.opt3Title"),
      desc: t("treatment.opt3Desc"),
      price: t("treatment.opt3Price"),
      image:
        "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      icon: <Briefcase />,
      title: t("treatment.opt4Title"),
      desc: t("treatment.opt4Desc"),
      price: t("treatment.opt4Price"),
      image:
        "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
  ];

  const benefits = [
    { icon: <Zap />, text: t("benefits.b1") },
    { icon: <Heart />, text: t("benefits.b2") },
    { icon: <Brain />, text: t("benefits.b3") },
    { icon: <Dumbbell />, text: t("benefits.b4") },
    { icon: <Scale />, text: t("benefits.b5") },
    { icon: <Activity />, text: t("benefits.b6") },
  ];

  const risks = [
    { icon: <Thermometer />, text: t("risks.r1") },
    { icon: <Droplets />, text: t("risks.r2") },
    { icon: <Heart />, text: t("risks.r3") },
    { icon: <Moon />, text: t("risks.r4") },
    { icon: <Activity />, text: t("risks.r5") },
    { icon: <HeartPulse />, text: t("risks.r6") },
  ];

  const timelineItems = [
    { time: t("timeline.time1"), desc: t("timeline.time1Desc") },
    { time: t("timeline.time2"), desc: t("timeline.time2Desc") },
    { time: t("timeline.time3"), desc: t("timeline.time3Desc") },
  ];

  return (
    <>
      <main className="bg-color-light font-inter overflow-hidden">
        {/* Hero Section with Image Background */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20"
          style={{ backgroundColor: "var(--color-cream)" }}
        >
          <div className="absolute inset-0 overflow-hidden">
            <img
              src={images.clinicInterior}
              alt="Nexus Clinic Modern Interior"
              className="w-full h-full object-cover opacity-20"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg, var(--color-cream) 0%, rgba(243, 239, 238, 0.9) 50%, var(--color-cream) 100%)",
              }}
            />
          </div>

          <div className="relative max-w-7xl mx-auto text-center z-10">
            <motion.div
              variants={fadeInUp}
              className="inline-block p-4 mb-6 rounded-2xl"
              style={{
                backgroundColor: "var(--color-glass)",
                backdropFilter: "blur(10px)",
                border: "1px solid var(--color-taupe)",
              }}
            >
              <HeartPulse
                className="w-8 h-8"
                style={{ color: "var(--color-wine)" }}
              />
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-georgia mb-6 leading-tight"
              style={{ color: "var(--color-brown)" }}
            >
              {t("hero.title1")}
              <br />
              <span style={{ color: "var(--color-wine)" }}>
                {t("hero.title2")}
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
              style={{ color: "var(--color-taupe)" }}
            >
              {t("hero.desc")}
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-xl text-white font-semibold text-lg"
                style={{ backgroundColor: "var(--color-wine)" }}
              >
                {t("hero.cta1")}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-xl font-semibold text-lg"
                style={{
                  backgroundColor: "var(--color-glass)",
                  backdropFilter: "blur(10px)",
                  color: "var(--color-brown)",
                  border: "1px solid var(--color-taupe)",
                }}
              >
                {t("hero.cta2")}
              </motion.button>
            </motion.div>
          </div>
        </motion.section>

        {/* Trust Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20 px-4 sm:px-6 lg:px-8"
          style={{ backgroundColor: "var(--color-brown)" }}
        >
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {[
                { icon: <Award />, text: t("trust.trust1") },
                { icon: <Flask />, text: t("trust.trust2") },
                { icon: <MapPin />, text: t("trust.trust3") },
                { icon: <Shield />, text: t("trust.trust4") },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                  className="p-6 rounded-2xl"
                  style={{
                    backgroundColor: "var(--color-glass)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <div className="mb-4" style={{ color: "var(--color-wine)" }}>
                    {item.icon}
                  </div>
                  <p className="text-white">{item.text}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="mt-8 p-6 rounded-2xl text-center"
              style={{ backgroundColor: "var(--color-wine)", opacity: 0.9 }}
            >
              <p className="text-white italic">
                {t("trust.quickNote")}
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* What is TRT Section with Image */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20 px-4 sm:px-6 lg:px-8"
          style={{ backgroundColor: "var(--color-light)" }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInLeft}>
                <h2
                  className="text-4xl md:text-5xl font-georgia mb-6"
                  style={{ color: "var(--color-brown)" }}
                >
                  {t("whatIs.title")}
                </h2>
                <p
                  className="text-lg mb-4"
                  style={{ color: "var(--color-taupe)" }}
                >
                  {t("whatIs.desc")}
                </p>
                <ul className="space-y-3">
                  {[t("whatIs.criteria1"), t("whatIs.criteria2")].map((item, index) => (
                    <motion.li
                      key={index}
                      variants={fadeInUp}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle
                        className="w-5 h-5"
                        style={{ color: "var(--color-wine)" }}
                      />
                      <span style={{ color: "var(--color-brown)" }}>
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </ul>
                <p
                  className="mt-6 text-lg"
                  style={{ color: "var(--color-taupe)" }}
                >
                  {t("whatIs.explanation")}
                </p>
              </motion.div>
              <motion.div
                variants={fadeInRight}
                className="relative h-96 rounded-3xl overflow-hidden group"
              >
                <img
                  src={images.doctorConsultation}
                  alt="Doctor consultation at Nexus Clinic"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(45deg, var(--color-wine) 0%, transparent 70%)",
                    opacity: 0.2,
                  }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-linear-to-t from-black/50 to-transparent">
                  <p className="text-white font-semibold">
                    {t("whatIs.imageCaption")}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Symptoms Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20 px-4 sm:px-6 lg:px-8"
          style={{ backgroundColor: "var(--color-cream)" }}
        >
          <div className="max-w-7xl mx-auto">
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-georgia mb-12 text-center"
              style={{ color: "var(--color-brown)" }}
            >
              {t("symptoms.title")}
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-xl text-center mb-12 max-w-3xl mx-auto italic"
              style={{ color: "var(--color-taupe)" }}
            >
              {t("symptoms.quote")}
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {symptoms.map((symptom, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02 }}
                  className="p-6 rounded-xl flex items-start gap-4"
                  style={{
                    backgroundColor: "var(--color-glass)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <div
                    className="p-2 rounded-lg"
                    style={{ backgroundColor: "var(--color-wine)" }}
                  >
                    {React.cloneElement(symptom.icon, {
                      className: "w-5 h-5 text-white",
                    })}
                  </div>
                  <p style={{ color: "var(--color-brown)" }}>{symptom.text}</p>
                </motion.div>
              ))}
            </div>

            <motion.p
              variants={fadeInUp}
              className="mt-8 p-6 rounded-xl text-center"
              style={{ backgroundColor: "var(--color-rose)", color: "white" }}
            >
              {t("symptoms.importantNote")}
            </motion.p>
          </div>
        </motion.section>

        {/* Diagnosis Section with Image */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20 px-4 sm:px-6 lg:px-8"
          style={{ backgroundColor: "var(--color-light)" }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                variants={fadeInLeft}
                className="relative h-96 rounded-3xl overflow-hidden order-2 lg:order-1 group"
              >
                <img
                  src={images.labTesting}
                  alt="Advanced laboratory testing at Nexus Clinic"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(45deg, var(--color-brown) 0%, transparent 70%)",
                    opacity: 0.2,
                  }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-linear-to-t from-black/50 to-transparent">
                  <p className="text-white font-semibold">
                    {t("diagnosis.imageCaption")}
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeInRight} className="order-1 lg:order-2">
                <h2
                  className="text-4xl md:text-5xl font-georgia mb-6"
                  style={{ color: "var(--color-brown)" }}
                >
                  {t("diagnosis.title")}
                  <span
                    className="block text-xl mt-2"
                    style={{ color: "var(--color-taupe)" }}
                  >
                    {t("diagnosis.subtitle")}
                  </span>
                </h2>

                <motion.p
                  variants={fadeInUp}
                  className="text-lg mb-8"
                  style={{ color: "var(--color-brown)" }}
                >
                  {t("diagnosis.desc")}
                </motion.p>

                <div className="space-y-4">
                  {diagnosisSteps.map((item, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      className="flex items-start gap-4 p-4 rounded-xl"
                      style={{ backgroundColor: "var(--color-cream)" }}
                    >
                      <div
                        className="p-2 rounded-lg shrink-0"
                        style={{ backgroundColor: "var(--color-wine)" }}
                      >
                        {React.cloneElement(item.icon, {
                          className: "w-5 h-5 text-white",
                        })}
                      </div>
                      <p style={{ color: "var(--color-brown)" }}>{item.text}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Treatment Options Section with Image Cards */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20 px-4 sm:px-6 lg:px-8"
          style={{ backgroundColor: "var(--color-cream)" }}
        >
          <div className="max-w-7xl mx-auto">
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-georgia mb-12 text-center"
              style={{ color: "var(--color-brown)" }}
            >
              {t("treatment.title")}
              <span
                className="block text-xl mt-2"
                style={{ color: "var(--color-taupe)" }}
              >
                {t("treatment.subtitle")}
              </span>
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {treatmentOptions.map((option, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={{ y: -10 }}
                  className="rounded-2xl overflow-hidden group cursor-pointer"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={option.image}
                      alt={option.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(to top, var(--color-brown) 0%, transparent 100%)",
                        opacity: 0.5,
                      }}
                    />
                  </div>
                  <div
                    className="p-6"
                    style={{ backgroundColor: "var(--color-light)" }}
                  >
                    <div
                      className="mb-3"
                      style={{ color: "var(--color-wine)" }}
                    >
                      {option.icon}
                    </div>
                    <h3
                      className="text-xl font-georgia mb-2"
                      style={{ color: "var(--color-brown)" }}
                    >
                      {option.title}
                    </h3>
                    <p
                      className="mb-4 text-sm"
                      style={{ color: "var(--color-taupe)" }}
                    >
                      {option.desc}
                    </p>
                    <p
                      className="font-semibold"
                      style={{ color: "var(--color-wine)" }}
                    >
                      {option.price}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Patient Care Image Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20 px-4 sm:px-6 lg:px-8"
          style={{ backgroundColor: "var(--color-brown)" }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInLeft} className="text-white">
                <h2 className="text-4xl md:text-5xl font-georgia mb-6">
                  {t("patientCare.title")}
                </h2>
                <p className="text-xl mb-6 opacity-90">
                  {t("patientCare.desc")}
                </p>
                <ul className="space-y-4">
                  {[
                    t("patientCare.item1"),
                    t("patientCare.item2"),
                    t("patientCare.item3"),
                    t("patientCare.item4"),
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      variants={fadeInUp}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle
                        className="w-5 h-5 shrink-0"
                        style={{ color: "var(--color-rose)" }}
                      />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
              <motion.div
                variants={fadeInRight}
                className="relative h-96 rounded-3xl overflow-hidden group"
              >
                <img
                  src={images.patientCare}
                  alt="Private patient consultation at Nexus Clinic"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(45deg, var(--color-wine) 0%, transparent 70%)",
                    opacity: 0.2,
                  }}
                />
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Results Timeline Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20 px-4 sm:px-6 lg:px-8"
          style={{ backgroundColor: "var(--color-light)" }}
        >
          <div className="max-w-7xl mx-auto">
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-georgia mb-12 text-center"
              style={{ color: "var(--color-brown)" }}
            >
              {t("timeline.title")}
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-center mb-12 italic"
              style={{ color: "var(--color-taupe)" }}
            >
              {t("timeline.desc")}
            </motion.p>

            <div className="relative">
              <div
                className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5"
                style={{ backgroundColor: "var(--color-rose)" }}
              />

              {timelineItems.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className={`relative flex items-center mb-8 ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
                >
                  <div
                    className={`w-5/12 p-6 rounded-2xl ${index % 2 === 0 ? "text-right" : "text-left"}`}
                    style={{
                      backgroundColor: "var(--color-glass)",
                      backdropFilter: "blur(10px)",
                    }}
                  >
                    <h3
                      className="text-2xl font-georgia mb-2"
                      style={{ color: "var(--color-wine)" }}
                    >
                      {item.time}
                    </h3>
                    <p style={{ color: "var(--color-brown)" }}>{item.desc}</p>
                  </div>
                  <div
                    className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full"
                    style={{ backgroundColor: "var(--color-wine)" }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Benefits Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20 px-4 sm:px-6 lg:px-8"
          style={{ backgroundColor: "var(--color-cream)" }}
        >
          <div className="max-w-7xl mx-auto text-center">
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-georgia mb-12"
              style={{ color: "var(--color-brown)" }}
            >
              {t("benefits.title")}
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={{ scale: 1.05 }}
                  className="p-6 rounded-xl"
                  style={{
                    backgroundColor: "var(--color-glass)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <div className="flex justify-center mb-4">
                    <div
                      className="p-3 rounded-full"
                      style={{ backgroundColor: "var(--color-wine)" }}
                    >
                      {React.cloneElement(benefit.icon, {
                        className: "w-6 h-6 text-white",
                      })}
                    </div>
                  </div>
                  <p style={{ color: "var(--color-brown)" }}>{benefit.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Risks Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20 px-4 sm:px-6 lg:px-8"
          style={{ backgroundColor: "var(--color-light)" }}
        >
          <div className="max-w-7xl mx-auto">
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-georgia mb-12 text-center"
              style={{ color: "var(--color-brown)" }}
            >
              {t("risks.title")}
              <span
                className="block text-xl mt-2"
                style={{ color: "var(--color-taupe)" }}
              >
                {t("risks.subtitle")}
              </span>
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-center mb-12 max-w-3xl mx-auto"
              style={{ color: "var(--color-brown)" }}
            >
              {t("risks.desc")}
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {risks.map((risk, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="p-6 rounded-xl flex items-start gap-4"
                  style={{ backgroundColor: "var(--color-cream)" }}
                >
                  <AlertTriangle
                    className="w-5 h-5 mt-1 shrink-0"
                    style={{ color: "var(--color-wine)" }}
                  />
                  <p style={{ color: "var(--color-brown)" }}>{risk.text}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={fadeInUp}
              className="mt-8 p-6 rounded-xl"
              style={{ backgroundColor: "var(--color-cream)" }}
            >
              <p style={{ color: "var(--color-brown)" }}>
                {t("risks.fdaNote")}
              </p>
              <p
                className="mt-4 font-semibold"
                style={{ color: "var(--color-wine)" }}
              >
                {t("risks.bottomLine")}
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Fertility Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20 px-4 sm:px-6 lg:px-8"
          style={{ backgroundColor: "var(--color-cream)" }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInLeft}>
                <h2
                  className="text-4xl md:text-5xl font-georgia mb-6"
                  style={{ color: "var(--color-brown)" }}
                >
                  {t("fertility.title")}
                  <span
                    className="block text-lg mt-2"
                    style={{ color: "var(--color-wine)" }}
                  >
                    {t("fertility.subtitle")}
                  </span>
                </h2>
                <p
                  className="text-lg mb-4"
                  style={{ color: "var(--color-brown)" }}
                >
                  {t("fertility.intro")}
                </p>
                <p className="mb-4" style={{ color: "var(--color-taupe)" }}>
                  {t("fertility.desc")}
                </p>
                <p
                  className="font-semibold"
                  style={{ color: "var(--color-wine)" }}
                >
                  {t("fertility.warning")}
                </p>
              </motion.div>
              <motion.div
                variants={fadeInRight}
                className="p-8 rounded-3xl"
                style={{
                  backgroundColor: "var(--color-glass)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <Heart
                  className="w-16 h-16 mb-4"
                  style={{ color: "var(--color-wine)" }}
                />
                <p style={{ color: "var(--color-brown)" }}>
                  {t("fertility.preserving")}
                </p>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* TRT vs Others Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20 px-4 sm:px-6 lg:px-8"
          style={{ backgroundColor: "var(--color-light)" }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                variants={fadeInLeft}
                className="p-8 rounded-3xl"
                style={{ backgroundColor: "var(--color-cream)" }}
              >
                <h3
                  className="text-2xl font-georgia mb-4"
                  style={{ color: "var(--color-wine)" }}
                >
                  {t("trtVs.card1Title")}
                </h3>
                <p className="mb-4" style={{ color: "var(--color-brown)" }}>
                  {t("trtVs.card1P1")}
                </p>
                <p className="mb-4" style={{ color: "var(--color-taupe)" }}>
                  {t("trtVs.card1P2")}
                </p>
                <p style={{ color: "var(--color-brown)" }}>
                  {t("trtVs.card1P3")}
                </p>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                className="p-8 rounded-3xl"
                style={{ backgroundColor: "var(--color-cream)" }}
              >
                <h3
                  className="text-2xl font-georgia mb-4"
                  style={{ color: "var(--color-wine)" }}
                >
                  {t("trtVs.card2Title")}
                </h3>
                <p className="mb-4" style={{ color: "var(--color-brown)" }}>
                  {t("trtVs.card2P1")}
                </p>
                <p style={{ color: "var(--color-taupe)" }}>
                  {t("trtVs.card2P2")}
                </p>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Cost Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20 px-4 sm:px-6 lg:px-8"
          style={{ backgroundColor: "var(--color-cream)" }}
        >
          <div className="max-w-7xl mx-auto">
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-georgia mb-12 text-center"
              style={{ color: "var(--color-brown)" }}
            >
              {t("cost.title")}
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-center mb-12 max-w-3xl mx-auto"
              style={{ color: "var(--color-taupe)" }}
            >
              {t("cost.desc")}
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <motion.div
                variants={scaleIn}
                className="p-8 rounded-3xl"
                style={{
                  backgroundColor: "var(--color-glass)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <h3
                  className="text-2xl font-georgia mb-4"
                  style={{ color: "var(--color-wine)" }}
                >
                  {t("cost.injectionsTitle")}
                </h3>
                <p
                  className="text-3xl font-bold mb-2"
                  style={{ color: "var(--color-brown)" }}
                >
                  {t("cost.injectionsPrice")}
                </p>
                <p style={{ color: "var(--color-taupe)" }}>
                  {t("cost.injectionsNote")}
                </p>
              </motion.div>

              <motion.div
                variants={scaleIn}
                className="p-8 rounded-3xl"
                style={{
                  backgroundColor: "var(--color-glass)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <h3
                  className="text-2xl font-georgia mb-4"
                  style={{ color: "var(--color-wine)" }}
                >
                  {t("cost.gelsTitle")}
                </h3>
                <p
                  className="text-3xl font-bold mb-2"
                  style={{ color: "var(--color-brown)" }}
                >
                  {t("cost.gelsPrice")}
                </p>
                <p style={{ color: "var(--color-taupe)" }}>
                  {t("cost.gelsNote")}
                </p>
              </motion.div>
            </div>

            <motion.div
              variants={fadeInUp}
              className="p-6 rounded-xl"
              style={{ backgroundColor: "var(--color-brown)" }}
            >
              <p className="text-white text-center">
                {t("cost.tip")}
              </p>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-4">
                {[
                  t("cost.tipItem1"),
                  t("cost.tipItem2"),
                  t("cost.tipItem3"),
                  t("cost.tipItem4"),
                ].map((item, index) => (
                  <div
                    key={index}
                    className="text-center p-2 rounded"
                    style={{ backgroundColor: "var(--color-rose)" }}
                  >
                    <p className="text-white text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Competitor Analysis */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20 px-4 sm:px-6 lg:px-8"
          style={{ backgroundColor: "var(--color-light)" }}
        >
          <div className="max-w-7xl mx-auto">
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-georgia mb-12 text-center"
              style={{ color: "var(--color-brown)" }}
            >
              {t("competitor.title")}
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                variants={fadeInLeft}
                className="p-8 rounded-3xl"
                style={{ backgroundColor: "var(--color-cream)" }}
              >
                <h3
                  className="text-2xl font-georgia mb-4"
                  style={{ color: "var(--color-wine)" }}
                >
                  {t("competitor.card1Title")}
                </h3>
                <ul className="space-y-3">
                  {[
                    t("competitor.card1Item1"),
                    t("competitor.card1Item2"),
                    t("competitor.card1Item3"),
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-wine">•</span>
                      <span style={{ color: "var(--color-brown)" }}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                className="p-8 rounded-3xl"
                style={{ backgroundColor: "var(--color-wine)" }}
              >
                <h3 className="text-2xl font-georgia mb-4 text-white">
                  {t("competitor.card2Title")}
                </h3>
                <ul className="space-y-3">
                  {[
                    t("competitor.card2Item1"),
                    t("competitor.card2Item2"),
                    t("competitor.card2Item3"),
                    t("competitor.card2Item4"),
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Star className="w-4 h-4 text-white mt-1 shrink-0" />
                      <span className="text-white">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Why Nexus Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20 px-4 sm:px-6 lg:px-8"
          style={{ backgroundColor: "var(--color-cream)" }}
        >
          <div className="max-w-7xl mx-auto text-center">
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-georgia mb-12"
              style={{ color: "var(--color-brown)" }}
            >
              {t("whyNexus.title")}
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-xl mb-12 max-w-4xl mx-auto"
              style={{ color: "var(--color-taupe)" }}
            >
              {t("whyNexus.desc")}
            </motion.p>

            <motion.div
              variants={scaleIn}
              className="p-8 rounded-3xl max-w-3xl mx-auto"
              style={{
                backgroundColor: "var(--color-glass)",
                backdropFilter: "blur(10px)",
              }}
            >
              <MapPin
                className="w-12 h-12 mx-auto mb-4"
                style={{ color: "var(--color-wine)" }}
              />
              <p
                className="mb-2 font-semibold"
                style={{ color: "var(--color-brown)" }}
              >
                {t("whyNexus.clinicName")}
              </p>
              <p className="mb-4" style={{ color: "var(--color-taupe)" }}>
                {t("whyNexus.address")}
              </p>
              <div className="flex justify-center gap-4">
                <span
                  className="flex items-center gap-1"
                  style={{ color: "var(--color-wine)" }}
                >
                  <Phone className="w-4 h-4" /> {t("whyNexus.phone1")}
                </span>
                <span
                  className="flex items-center gap-1"
                  style={{ color: "var(--color-wine)" }}
                >
                  <Phone className="w-4 h-4" /> {t("whyNexus.phone2")}
                </span>
              </div>
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
          viewport={{ once: true }}
          className="py-20 px-4 sm:px-6 lg:px-8"
          style={{ backgroundColor: "var(--color-brown)" }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-georgia mb-6 text-white"
            >
              {t("cta.title")}
              <span
                className="block text-2xl mt-2"
                style={{ color: "var(--color-rose)" }}
              >
                {t("cta.titleHighlight")}
              </span>
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-xl mb-8 text-white opacity-90"
            >
              {t("cta.desc")}
            </motion.p>

            <motion.button
              variants={scaleIn}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-4 rounded-xl text-lg font-semibold"
              style={{ backgroundColor: "var(--color-wine)", color: "white" }}
            >
              {t("cta.button")}
            </motion.button>

            <motion.p
              variants={fadeInUp}
              className="mt-6 text-white opacity-75"
            >
              {t("cta.address")}
            </motion.p>
          </div>
        </motion.section>
      </main>
    </>
  );
};

export default TestosteroneLanding;
