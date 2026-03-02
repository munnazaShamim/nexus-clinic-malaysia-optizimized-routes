"use client";

import { motion } from "framer-motion";
import {
  ThermometerSnowflake,
  Shield,
  Clock,
  Target,
  Sparkles,
  ChevronRight,
  Award,
  Users,
  Scissors,
  Heart,
  Zap,
  CheckCircle2,
  Star,
  Activity,
  Calendar,
  TrendingUp,
  Dumbbell,
  Pill,
  MapPin,
} from "lucide-react";
import {
  fadeInUp,
  staggerContainer,
  fadeInLeft,
  fadeInRight,
  scaleIn,
} from "../../lib/animations";
import FAQ from "../../components/FAQ";
import SectionBeforeAfter from "../../components/BeforeAfterCustomize";
import { useTranslation } from "@/src/i18n/client";
import { fallbackLng } from "@/src/i18n/settings";

const CoolSculptingLanding = ({
  locale = fallbackLng,
}: {
  locale?: string;
}) => {
  const { t } = useTranslation(locale, "coolsculpting");
  const benefits = [
    {
      icon: (
        <Scissors className="w-6 h-6" style={{ color: "var(--color-wine)" }} />
      ),
      title: "Non-Surgical",
      desc: "No needles, no incisions, no scars",
    },
    {
      icon: (
        <Clock className="w-6 h-6" style={{ color: "var(--color-wine)" }} />
      ),
      title: "No Downtime",
      desc: "Return to activities immediately",
    },
    {
      icon: (
        <Target className="w-6 h-6" style={{ color: "var(--color-wine)" }} />
      ),
      title: "Targeted Results",
      desc: "Up to 25% fat reduction per session",
    },
    {
      icon: (
        <Shield className="w-6 h-6" style={{ color: "var(--color-wine)" }} />
      ),
      title: "FDA-Cleared",
      desc: "Safe & clinically proven technology",
    },
  ];

  const treatmentAreas = [
    {
      name: "Abdomen",
      icon: (
        <Activity className="w-6 h-6" style={{ color: "var(--color-wine)" }} />
      ),
    },
    {
      name: "Love Handles",
      icon: (
        <Heart className="w-6 h-6" style={{ color: "var(--color-wine)" }} />
      ),
    },
    {
      name: "Thighs",
      icon: (
        <Dumbbell className="w-6 h-6" style={{ color: "var(--color-wine)" }} />
      ),
    },
    {
      name: "Arms",
      icon: <Pill className="w-6 h-6" style={{ color: "var(--color-wine)" }} />,
    },
    {
      name: "Chin & Jawline",
      icon: (
        <MapPin className="w-6 h-6" style={{ color: "var(--color-wine)" }} />
      ),
    },
    {
      name: "Back & Bra Fat",
      icon: (
        <Target className="w-6 h-6" style={{ color: "var(--color-wine)" }} />
      ),
    },
  ];

  const stats = [
    {
      value: "20-25%",
      label: "Fat Reduction",
      icon: <TrendingUp className="w-5 h-5" />,
    },
    {
      value: "30-60",
      label: "Minute Sessions",
      icon: <Clock className="w-5 h-5" />,
    },
    {
      value: "4-12",
      label: "Weeks to Results",
      icon: <Calendar className="w-5 h-5" />,
    },
    {
      value: "1M+",
      label: "Treatments Worldwide",
      icon: <Users className="w-5 h-5" />,
    },
  ];

  const faqs = [
    {
      q: "Does CoolSculpting really work?",
      a: "Yes. Clinical studies show 20-25% fat reduction in treated areas after one session. Results are permanent as fat cells are eliminated naturally.",
    },
    {
      q: "Is CoolSculpting painful?",
      a: "Most patients feel intense cold and mild pressure initially, which subsides as the area becomes numb. Many read or relax during treatment.",
    },
    {
      q: "How long do results last?",
      a: "Results are permanent - treated fat cells are gone forever. Maintaining a stable weight ensures long-lasting outcomes.",
    },
    {
      q: "When will I see results?",
      a: "Initial changes appear in 4 weeks, with full results visible at 12 weeks as the body naturally eliminates frozen fat cells.",
    },
  ];

  const transformations = [
    {
      id: 1,
      before: "/images/B&A-w/B&A-coolsculpting1.webp",
      after: "/images/B&A-w/B&A-coolsculpting1.webp",
    },
    {
      id: 2,
      before: "/images/B&A-w/B&A-coolsculpting2.webp",
      after: "/images/B&A-w/B&A-coolsculpting2.webp",
    },
    {
      id: 3,
      before: "/images/B&A-w/B&A-coolsculpting3.webp",
      after: "/images/B&A-w/B&A-coolsculpting3.webp",
    },
  ];

  const competitors = [
    {
      name: "Beverly Wilshire Clinic",
      highlight: "Premium medical aesthetics",
    },
    { name: "Clique Clinic KL", highlight: "Advanced technology focus" },
    { name: "Premier Clinic", highlight: "Comprehensive care" },
    { name: "CLEO Clinic", highlight: "Aesthetic expertise" },
    { name: "Sliq Clinic", highlight: "Modern approaches" },
  ];

  return (
    <>
      <main
        className="min-h-screen"
        style={{
          backgroundColor: "var(--color-light)",
          fontFamily: "var(--font-inter)",
        }}
      >
        {/* Hero Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, var(--color-cream) 0%, #FFFFFF 100%)",
          }}
        >
          {/* Glass morphism background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div
              className="absolute -top-40 -right-40 w-80 h-80 rounded-full"
              style={{ backgroundColor: "var(--color-rose)", opacity: 0.1 }}
            />
            <div
              className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full"
              style={{ backgroundColor: "var(--color-wine)", opacity: 0.1 }}
            />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInLeft} className="space-y-6">
                <div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
                  style={{
                    backgroundColor: "var(--color-glass)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid var(--color-taupe)",
                  }}
                >
                  <ThermometerSnowflake
                    className="w-4 h-4"
                    style={{ color: "var(--color-wine)" }}
                  />
                  <span
                    className="text-sm"
                    style={{ color: "var(--color-brown)" }}
                  >
                    Medical-Grade Fat Freezing
                  </span>
                </div>

                <h1
                  className="text-4xl md:text-3xl lg:text-5xl xl:text-6xl font-bold leading-tight"
                  style={{
                    color: "var(--color-brown)",
                    fontFamily: "var(--font-georgia)",
                  }}
                >
                  Freeze Stubborn Fat,
                  <br />
                  <span style={{ color: "var(--color-wine)" }}>
                    Reveal Your Contour
                  </span>
                </h1>

                <p
                  className="text-md xl:text-lg"
                  style={{ color: "var(--color-taupe)" }}
                >
                  At Nexus Clinic Kuala Lumpur, advanced fat freezing technology
                  helps reshape your body naturally. No needles. No downtime.
                  Just gradual and visible fat reduction.
                </p>

                <p className="text-md xl:text-lg text-taupe">
                  Some fat stays no matter how clean you eat or how often you
                  exercise. CoolSculpting offers a safe and modern way to remove
                  these stubborn fat pockets without surgery.
                </p>

                <div className="flex flex-wrap gap-4 pt-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 rounded-full text-white font-medium flex items-center gap-2"
                    style={{ backgroundColor: "var(--color-wine)" }}
                  >
                    Schedule Consultation
                    <ChevronRight className="w-5 h-5" />
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 rounded-full font-medium"
                    style={{
                      backgroundColor: "var(--color-glass)",
                      backdropFilter: "blur(10px)",
                      color: "var(--color-brown)",
                      border: "1px solid var(--color-taupe)",
                    }}
                  >
                    View Results
                  </motion.button>
                </div>

                {/* Stats */}
                <motion.div
                  variants={scaleIn}
                  className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8"
                >
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div
                        className="text-2xl font-bold"
                        style={{ color: "var(--color-wine)" }}
                      >
                        {stat.value}
                      </div>
                      <div
                        className="text-sm flex items-center justify-center gap-1"
                        style={{ color: "var(--color-taupe)" }}
                      >
                        {stat.icon}
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </motion.div>
              </motion.div>

              <motion.div variants={fadeInRight} className="relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="/images/main/coolsculpting.webp"
                    alt="Luxury clinic interior"
                    className="w-full h-auto object-cover rounded-2xl"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(45deg, var(--color-rose) 0%, transparent 100%)",
                      opacity: 0.2,
                    }}
                  />
                </div>

                {/* Floating card */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                  className="absolute -bottom-6 -left-6 p-6 rounded-2xl"
                  style={{
                    backgroundColor: "var(--color-glass)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid var(--color-taupe)",
                  }}
                >
                  <div className="flex items-center gap-3">
                    <Award
                      className="w-8 h-8"
                      style={{ color: "var(--color-wine)" }}
                    />
                    <div>
                      <div
                        className="font-semibold"
                        style={{ color: "var(--color-brown)" }}
                      >
                        Trusted by 5000+
                      </div>
                      <div
                        className="text-sm"
                        style={{ color: "var(--color-taupe)" }}
                      >
                        Patients in Malaysia
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Why Choose CoolSculpting */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20"
          style={{ backgroundColor: "white" }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeInUp}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{
                  color: "var(--color-brown)",
                  fontFamily: "var(--font-georgia)",
                }}
              >
                Why Kuala Lumpur Chooses
                <br />
                <span style={{ color: "var(--color-wine)" }}>
                  CoolSculpting
                </span>
              </h2>
              <p className="text-lg" style={{ color: "var(--color-taupe)" }}>
                Body contouring demand has increased significantly in Kuala
                Lumpur. People want visible results without surgery or long
                recovery.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={{ y: -10 }}
                  className="p-6 rounded-2xl text-center group cursor-pointer"
                  style={{ backgroundColor: "var(--color-cream)" }}
                >
                  <div
                    className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: "var(--color-glass)" }}
                  >
                    {benefit.icon}
                  </div>
                  <h3
                    className="text-xl font-semibold mb-2"
                    style={{ color: "var(--color-brown)" }}
                  >
                    {benefit.title}
                  </h3>
                  <p style={{ color: "var(--color-taupe)" }}>{benefit.desc}</p>
                </motion.div>
              ))}
            </div>
            <p className="text-lg text-taupe text-center mt-8">
              CoolSculpting can reduce fat in treated areas by up to 20 to 25
              percent after one session. This makes it ideal for people who are
              close to their ideal weight but struggle with specific fat
              pockets. At Nexus Clinic Kuala Lumpur, treatment plans are
              designed around your body goals, lifestyle, and comfort.
            </p>
          </div>
        </motion.section>

        {/* How It Works */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20 relative overflow-hidden"
          style={{ backgroundColor: "var(--color-cream)" }}
        >
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute top-0 left-0 w-64 h-64 rounded-full"
              style={{ backgroundColor: "var(--color-wine)" }}
            />
            <div
              className="absolute bottom-0 right-0 w-96 h-96 rounded-full"
              style={{ backgroundColor: "var(--color-rose)" }}
            />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeInUp}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{
                  color: "var(--color-brown)",
                  fontFamily: "var(--font-georgia)",
                }}
              >
                The Science of
                <br />
                <span style={{ color: "var(--color-wine)" }}>Fat Freezing</span>
              </h2>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInLeft} className="space-y-6">
                <p className="text-lg" style={{ color: "var(--color-taupe)" }}>
                  CoolSculpting is a fat freezing treatment based on
                  cryolipolysis - the scientific principle that fat cells are
                  more sensitive to cold than surrounding tissues.
                </p>

                <div className="space-y-4">
                  {[
                    "Controlled cooling targets fat cells without damaging skin",
                    "Fat cells crystallize and break down naturally",
                    "Body eliminates frozen fat cells through lymphatic system",
                    "Results appear gradually over 4-12 weeks",
                  ].map((step, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInLeft}
                      className="flex items-start gap-3 p-4 rounded-xl"
                      style={{ backgroundColor: "var(--color-glass)" }}
                    >
                      <CheckCircle2
                        className="w-6 h-6 shrink-0"
                        style={{ color: "var(---color-wine)" }}
                      />
                      <span style={{ color: "var(--color-brown)" }}>
                        {step}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={fadeInRight} className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div
                      className="p-6 rounded-2xl text-center"
                      style={{ backgroundColor: "white" }}
                    >
                      <ThermometerSnowflake
                        className="w-8 h-8 mx-auto mb-2"
                        style={{ color: "var(--color-wine)" }}
                      />
                      <div
                        className="text-sm"
                        style={{ color: "var(--color-brown)" }}
                      >
                        Freezing
                      </div>
                    </div>
                    <div
                      className="p-6 rounded-2xl text-center"
                      style={{ backgroundColor: "white" }}
                    >
                      <Activity
                        className="w-8 h-8 mx-auto mb-2"
                        style={{ color: "var(--color-wine)" }}
                      />
                      <div
                        className="text-sm"
                        style={{ color: "var(--color-brown)" }}
                      >
                        Crystallization
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4 mt-8">
                    <div
                      className="p-6 rounded-2xl text-center"
                      style={{ backgroundColor: "white" }}
                    >
                      <Zap
                        className="w-8 h-8 mx-auto mb-2"
                        style={{ color: "var(--color-wine)" }}
                      />
                      <div
                        className="text-sm"
                        style={{ color: "var(--color-brown)" }}
                      >
                        Elimination
                      </div>
                    </div>
                    <div
                      className="p-6 rounded-2xl text-center"
                      style={{ backgroundColor: "white" }}
                    >
                      <Sparkles
                        className="w-8 h-8 mx-auto mb-2"
                        style={{ color: "var(--color-wine)" }}
                      />
                      <div
                        className="text-sm"
                        style={{ color: "var(--color-brown)" }}
                      >
                        Results
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Treatment Areas */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20"
          style={{ backgroundColor: "white" }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeInUp}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{
                  color: "var(--color-brown)",
                  fontFamily: "var(--font-georgia)",
                }}
              >
                Target Any
                <br />
                <span style={{ color: "var(--color-wine)" }}>Problem Area</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {treatmentAreas.map((area, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={{ scale: 1.05 }}
                  className="p-6 rounded-2xl text-center cursor-pointer group"
                  style={{ backgroundColor: "var(--color-cream)" }}
                >
                  <div className="text-4xl flex justify-center mb-3 group-hover:scale-110 transition-transform">
                    {area.icon}
                  </div>
                  <h3
                    className="font-semibold"
                    style={{ color: "var(--color-brown)" }}
                  >
                    {area.name}
                  </h3>
                  <p
                    className="text-sm mt-1"
                    style={{ color: "var(--color-taupe)" }}
                  >
                    Book Consultation
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={fadeInUp}
              className="mt-12 p-8 rounded-3xl text-center"
              style={{ backgroundColor: "var(--color-rose)", color: "white" }}
            >
              <h3 className="text-2xl font-bold mb-4">
                Multiple Areas? We've Got You Covered
              </h3>
              <p className="mb-6">
                CoolSculpting can target multiple areas in one treatment plan
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-full bg-white font-semibold"
                style={{ color: "var(--color-wine)" }}
              >
                Design Your Plan
              </motion.button>
            </motion.div>
          </div>
        </motion.section>

        {/* Why Nexus Clinic */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20 relative"
          style={{ backgroundColor: "var(--color-cream)" }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInLeft} className="space-y-8">
                <h2
                  className="text-3xl md:text-4xl font-bold"
                  style={{
                    color: "var(--color-brown)",
                    fontFamily: "var(--font-georgia)",
                  }}
                >
                  Why Nexus Clinic
                  <br />
                  <span style={{ color: "var(--color-wine)" }}>
                    Is Different
                  </span>
                </h2>

                <div className="space-y-4">
                  {[
                    {
                      icon: <Heart className="w-5 h-5" />,
                      title: "Doctor-Led Assessment",
                      desc: "Every plan starts with professional medical consultation",
                    },
                    {
                      icon: <Target className="w-5 h-5" />,
                      title: "Customized Treatment Plan",
                      desc: "Designed around your body goals and lifestyle",
                    },
                    {
                      icon: <Sparkles className="w-5 h-5" />,
                      title: "Advanced Technology",
                      desc: "Modern applicators for even cooling and better results",
                    },
                    {
                      icon: <Users className="w-5 h-5" />,
                      title: "Trusted Aesthetic Experts",
                      desc: "Professional care designed to enhance confidence safely",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInLeft}
                      className="flex items-start gap-4 p-4 rounded-xl"
                      style={{ backgroundColor: "white" }}
                    >
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                        style={{
                          backgroundColor: "var(--color-rose)",
                          color: "white",
                        }}
                      >
                        {item.icon}
                      </div>
                      <div>
                        <h3
                          className="font-semibold"
                          style={{ color: "var(--color-brown)" }}
                        >
                          {item.title}
                        </h3>
                        <p style={{ color: "var(--color-taupe)" }}>
                          {item.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={fadeInRight} className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div
                      className="p-6 rounded-2xl text-center"
                      style={{ backgroundColor: "white" }}
                    >
                      <div
                        className="text-3xl font-bold"
                        style={{ color: "var(--color-wine)" }}
                      >
                        5000+
                      </div>
                      <div style={{ color: "var(--color-taupe)" }}>
                        Happy Patients
                      </div>
                    </div>
                    <div
                      className="p-6 rounded-2xl text-center"
                      style={{ backgroundColor: "white" }}
                    >
                      <div
                        className="text-3xl font-bold"
                        style={{ color: "var(--color-wine)" }}
                      >
                        15+
                      </div>
                      <div style={{ color: "var(--color-taupe)" }}>
                        Years Experience
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4 mt-8">
                    <div
                      className="p-6 rounded-2xl text-center"
                      style={{ backgroundColor: "white" }}
                    >
                      <div
                        className="text-3xl font-bold"
                        style={{ color: "var(--color-wine)" }}
                      >
                        100%
                      </div>
                      <div style={{ color: "var(--color-taupe)" }}>
                        Safe Protocols
                      </div>
                    </div>
                    <div
                      className="p-6 rounded-2xl text-center"
                      style={{ backgroundColor: "white" }}
                    >
                      <div
                        className="text-3xl font-bold"
                        style={{ color: "var(--color-wine)" }}
                      >
                        24/7
                      </div>
                      <div style={{ color: "var(--color-taupe)" }}>
                        Patient Support
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Before & After  */}
        <SectionBeforeAfter transformations={transformations} />
        {/* Process Timeline */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20"
          style={{ backgroundColor: "white" }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeInUp}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{
                  color: "var(--color-brown)",
                  fontFamily: "var(--font-georgia)",
                }}
              >
                Your Journey to
                <br />
                <span style={{ color: "var(--color-wine)" }}>a New You</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  step: "01",
                  title: "Consultation",
                  desc: "Doctor identifies treatment areas",
                },
                {
                  step: "02",
                  title: "Treatment",
                  desc: "30-60 minute cooling session",
                },
                {
                  step: "03",
                  title: "Natural Process",
                  desc: "Body eliminates fat cells",
                },
                {
                  step: "04",
                  title: "Results",
                  desc: "Visible changes in 4-12 weeks",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="relative p-6 rounded-2xl"
                  style={{ backgroundColor: "var(--color-cream)" }}
                >
                  <div
                    className="text-4xl font-bold mb-4"
                    style={{ color: "var(--color-wine)", opacity: 0.3 }}
                  >
                    {item.step}
                  </div>
                  <h3
                    className="text-xl font-semibold mb-2"
                    style={{ color: "var(--color-brown)" }}
                  >
                    {item.title}
                  </h3>
                  <p style={{ color: "var(--color-taupe)" }}>{item.desc}</p>
                  {index < 3 && (
                    <div className="hidden md:block absolute -right-3 top-1/2 transform -translate-y-1/2">
                      <ChevronRight
                        className="w-6 h-6"
                        style={{ color: "var(--color-taupe)" }}
                      />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Cost Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20"
          style={{ backgroundColor: "var(--color-cream)" }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInLeft} className="space-y-6">
                <h2
                  className="text-3xl md:text-4xl font-bold"
                  style={{
                    color: "var(--color-brown)",
                    fontFamily: "var(--font-georgia)",
                  }}
                >
                  Investment in
                  <br />
                  <span style={{ color: "var(--color-wine)" }}>
                    Your Confidence
                  </span>
                </h2>

                <div className="space-y-4">
                  <div
                    className="p-6 rounded-2xl"
                    style={{ backgroundColor: "white" }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span style={{ color: "var(--color-brown)" }}>
                        Per Treatment Area
                      </span>
                      <span
                        className="text-2xl font-bold"
                        style={{ color: "var(--color-wine)" }}
                      >
                        RM1,500 - RM3,000
                      </span>
                    </div>
                    <div
                      className="w-full h-2 rounded-full"
                      style={{ backgroundColor: "var(--color-cream)" }}
                    >
                      <div
                        className="w-3/4 h-2 rounded-full"
                        style={{ backgroundColor: "var(--color-wine)" }}
                      />
                    </div>
                  </div>

                  <div
                    className="p-6 rounded-2xl"
                    style={{ backgroundColor: "white" }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span style={{ color: "var(--color-brown)" }}>
                        Average Session
                      </span>
                      <span
                        className="text-2xl font-bold"
                        style={{ color: "var(--color-wine)" }}
                      >
                        RM2,000 - RM4,000
                      </span>
                    </div>
                    <div
                      className="w-full h-2 rounded-full"
                      style={{ backgroundColor: "var(--color-cream)" }}
                    >
                      <div
                        className="w-3/4 h-2 rounded-full"
                        style={{ backgroundColor: "var(--color-wine)" }}
                      />
                    </div>
                  </div>

                  <div
                    className="p-6 rounded-2xl"
                    style={{ backgroundColor: "white" }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span style={{ color: "var(--color-brown)" }}>
                        Advanced Plans
                      </span>
                      <span
                        className="text-2xl font-bold"
                        style={{ color: "var(--color-wine)" }}
                      >
                        RM2,500 - RM6,000
                      </span>
                    </div>
                    <div
                      className="w-full h-2 rounded-full"
                      style={{ backgroundColor: "var(--color-cream)" }}
                    >
                      <div
                        className="w-3/4 h-2 rounded-full"
                        style={{ backgroundColor: "var(--color-wine)" }}
                      />
                    </div>
                  </div>
                </div>

                <p className="text-sm" style={{ color: "var(--color-taupe)" }}>
                  *Customized plans available. Consultation helps determine
                  exact cost.
                </p>
              </motion.div>

              <motion.div variants={fadeInRight} className="relative">
                <div
                  className="p-8 rounded-3xl"
                  style={{
                    backgroundColor: "var(--color-wine)",
                    color: "white",
                  }}
                >
                  <h3 className="text-2xl font-bold mb-4">Flexible Options</h3>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5" />
                      <span>Interest-free payment plans</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5" />
                      <span>Package discounts available</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5" />
                      <span>Credit card installment options</span>
                    </li>
                  </ul>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-3 rounded-full bg-white font-semibold"
                    style={{ color: "var(--color-wine)" }}
                  >
                    Get Personalized Quote
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Competitor Analysis */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20"
          style={{ backgroundColor: "white" }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeInUp}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{
                  color: "var(--color-brown)",
                  fontFamily: "var(--font-georgia)",
                }}
              >
                Why Patients Choose
                <br />
                <span style={{ color: "var(--color-wine)" }}>Nexus Clinic</span>
              </h2>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12">
              <motion.div variants={fadeInLeft}>
                <h3
                  className="text-xl font-semibold mb-4"
                  style={{ color: "var(--color-brown)" }}
                >
                  Leading KL Clinics
                </h3>
                <div className="space-y-3">
                  {competitors.map((clinic, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-xl flex items-center justify-between"
                      style={{ backgroundColor: "var(--color-cream)" }}
                    >
                      <span style={{ color: "var(--color-brown)" }}>
                        {clinic.name}
                      </span>
                      <span
                        className="text-sm"
                        style={{ color: "var(--color-taupe)" }}
                      >
                        {clinic.highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={fadeInRight}>
                <h3
                  className="text-xl font-semibold mb-4"
                  style={{ color: "var(--color-brown)" }}
                >
                  Nexus Advantage
                </h3>
                <div
                  className="p-8 rounded-3xl"
                  style={{
                    backgroundColor: "var(--color-wine)",
                    color: "white",
                  }}
                >
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <Star className="w-5 h-5 shrink-0 mt-1" />
                      <div>
                        <strong>Personalized Medical Assessment</strong>
                        <p className="text-sm opacity-90">
                          Doctor-led consultations for every patient
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Star className="w-5 h-5 shrink-0 mt-1" />
                      <div>
                        <strong>Advanced Treatment Planning</strong>
                        <p className="text-sm opacity-90">
                          Customized plans for natural results
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Star className="w-5 h-5 shrink-0 mt-1" />
                      <div>
                        <strong>Trusted Aesthetic Expertise</strong>
                        <p className="text-sm opacity-90">
                          Years of experience in body contouring
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* FAQ Section */}
        <FAQ data={faqs} />

        {/* Final CTA */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20 relative overflow-hidden"
          style={{ backgroundColor: "var(--color-wine)" }}
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-white" />
            <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-white" />
          </div>

          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <motion.div variants={fadeInUp} className="space-y-6">
              <ThermometerSnowflake className="w-16 h-16 mx-auto opacity-75" />
              <h2
                className="text-3xl md:text-4xl font-bold"
                style={{ fontFamily: "var(--font-georgia)" }}
              >
                Start Your CoolSculpting Journey
                <br />
                at Nexus Clinic Kuala Lumpur
              </h2>
              <p className="text-lg opacity-90 max-w-2xl mx-auto">
                Your transformation begins with a consultation. Discover how
                CoolSculpting can reshape your body safely and effectively.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-4 rounded-full bg-white font-semibold text-lg inline-flex items-center gap-2 mx-auto"
                style={{ color: "var(--color-wine)" }}
              >
                Book Your Consultation
                <ChevronRight className="w-5 h-5" />
              </motion.button>
              <p className="text-sm opacity-75">
                No obligation. Just expert advice tailored to your goals.
              </p>
            </motion.div>
          </div>
        </motion.section>
      </main>
    </>
  );
};

export default CoolSculptingLanding;
