"use client";

import { motion } from "framer-motion";
import {
  Leaf,
  Sparkles,
  Clock,
  Shield,
  Heart,
  Star,
  ChevronRight,
  CheckCircle2,
  AlertCircle,
  Calendar,
  MapPin,
  Award,
  Users,
  Scissors,
  Sparkle,
  Flower2,
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

const HairTransplantLanding = ({ locale = fallbackLng }: { locale?: string }) => {
  const { t } = useTranslation(locale, "hairTransplant");

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
  ];
  return (
    <>
      <main className="min-h-screen bg-linear-to-b from-light to-white font-['Inter',sans-serif]">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-wine blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-rose blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-125 h-125 rounded-full bg-taupe blur-3xl opacity-30"></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="max-w-4xl mx-auto text-center"
            >
              <motion.div
                variants={fadeInUp}
                className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-cream rounded-full"
              >
                <Sparkles className="w-4 h-4 text-wine" />
                <span className="text-sm font-medium text-brown">
                  {t("hero.badge")}
                </span>
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="font-['Georgia',serif] text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
              >
                <span className="text-brown">{t("hero.title1")}</span>
                <br />
                <span className="bg-linear-to-r from-wine to-rose bg-clip-text text-transparent">
                  {t("hero.title2")}
                </span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-xl text-brown mb-8 max-w-2xl mx-auto font-light"
              >
                {t("hero.desc")}
              </motion.p>

              <motion.p
                variants={fadeInUp}
                className="text-lg text-taupe mb-12 max-w-2xl mx-auto"
              >
                {t("hero.subdesc")}
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="flex flex-wrap gap-4 justify-center"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group px-8 py-4 bg-linear-to-r from-wine to-rose text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
                >
                  {t("hero.bookBtn")}
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white/80 backdrop-blur-sm border border-cream text-brown rounded-full font-semibold hover:bg-white transition-all duration-300"
                >
                  {t("hero.galleryBtn")}
                </motion.button>
              </motion.div>
            </motion.div>
          </div>

          {/* Decorative Elements */}
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-10 left-10 opacity-20"
          >
            <Flower2 className="w-24 h-24 text-wine" />
          </motion.div>

          <motion.div
            animate={{
              y: [0, 20, 0],
              rotate: [0, -5, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-20 right-10 opacity-20"
          >
            <Leaf className="w-32 h-32 text-rose" />
          </motion.div>
        </section>

        {/* Trust at a Glance Section */}
        <section className="py-20 bg-cream relative overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-r from-wine/5 to-rose/5"></div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              <motion.div
                variants={fadeInUp}
                className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50"
              >
                <div className="w-14 h-14 bg-linear-to-br from-wine to-rose rounded-xl flex items-center justify-center mb-6">
                  <MapPin className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-['Georgia',serif] text-xl font-bold text-brown mb-3">
                  {t("trust.t1Title")}
                </h3>
                <p className="text-taupe">
                  {t("trust.t1Desc")}
                </p>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50"
              >
                <div className="w-14 h-14 bg-linear-to-br from-wine to-rose rounded-xl flex items-center justify-center mb-6">
                  <Award className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-['Georgia',serif] text-xl font-bold text-brown mb-3">
                  {t("trust.t2Title")}
                </h3>
                <p className="text-taupe">
                  {t("trust.t2Desc")}
                </p>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50"
              >
                <div className="w-14 h-14 bg-linear-to-br from-wine to-rose rounded-xl flex items-center justify-center mb-6">
                  <Users className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-['Georgia',serif] text-xl font-bold text-brown mb-3">
                  {t("trust.t3Title")}
                </h3>
                <p className="text-taupe">
                  {t("trust.t3Desc")}
                </p>
              </motion.div>
            </motion.div>
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
              className="max-w-4xl mx-auto"
            >
              <motion.h2
                variants={fadeInUp}
                className="font-['Georgia',serif] text-4xl font-bold text-center text-brown mb-4"
              >
                {t("quickAnswers.title")}
              </motion.h2>

              <motion.p
                variants={fadeInUp}
                className="text-center text-taupe mb-12"
              >
                {t("quickAnswers.desc")}
              </motion.p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    icon: <Shield className="w-6 h-6 text-wine" />,
                    question: t("quickAnswers.q1"),
                    answer: t("quickAnswers.a1"),
                  },
                  {
                    icon: <Heart className="w-6 h-6 text-wine" />,
                    question: t("quickAnswers.q2"),
                    answer: t("quickAnswers.a2"),
                  },
                  {
                    icon: <Clock className="w-6 h-6 text-wine" />,
                    question: t("quickAnswers.q3"),
                    answer: t("quickAnswers.a3"),
                  },
                  {
                    icon: <Sparkle className="w-6 h-6 text-wine" />,
                    question: t("quickAnswers.q4"),
                    answer: t("quickAnswers.a4"),
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={scaleIn}
                    whileHover={{ y: -5 }}
                    className="bg-linear-to-br from-cream to-white p-6 rounded-xl border border-cream hover:border-wine/20 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-white rounded-lg shadow-sm">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-brown mb-2">
                          {item.question}
                        </h3>
                        <p className="text-taupe text-sm">{item.answer}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Methods Comparison Section */}
        <section className="py-20 bg-cream">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-6xl mx-auto"
            >
              <motion.h2
                variants={fadeInUp}
                className="font-['Georgia',serif] text-4xl font-bold text-center text-brown mb-4"
              >
                {t("methods.title")}
              </motion.h2>

              <motion.p
                variants={fadeInUp}
                className="text-center text-taupe mb-12"
              >
                {t("methods.desc")}
              </motion.p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    title: t("methods.fue"),
                    fullTitle: t("methods.fueFullTitle"),
                    description: t("methods.fueDesc"),
                    benefits: [
                      t("methods.fueBenefit1"),
                      t("methods.fueBenefit2"),
                      t("methods.fueBenefit3"),
                    ],
                    linear: "from-wine to-rose",
                  },
                  {
                    title: t("methods.fut"),
                    fullTitle: t("methods.futFullTitle"),
                    description: t("methods.futDesc"),
                    benefits: [
                      t("methods.futBenefit1"),
                      t("methods.futBenefit2"),
                      t("methods.futBenefit3"),
                    ],
                    linear: "from-brown to-taupe",
                  },
                  {
                    title: t("methods.dhi"),
                    fullTitle: t("methods.dhiFullTitle"),
                    description: t("methods.dhiDesc"),
                    benefits: [
                      t("methods.dhiBenefit1"),
                      t("methods.dhiBenefit2"),
                      t("methods.dhiBenefit3"),
                    ],
                    linear: "from-rose to-wine",
                  },
                ].map((method, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    whileHover={{ y: -10 }}
                    className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500"
                  >
                    <div
                      className={`absolute inset-0 bg-linear-to-br ${method.linear} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                    ></div>

                    <div className="p-8">
                      <h3 className="font-['Georgia',serif] text-3xl font-bold text-brown mb-2">
                        {method.title}
                      </h3>
                      <p className="text-sm font-medium text-wine mb-4">
                        {method.fullTitle}
                      </p>
                      <p className="text-taupe mb-6">{method.description}</p>

                      <div className="space-y-3">
                        {method.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <CheckCircle2 className="w-5 h-5 text-wine shrink-0" />
                            <span className="text-sm text-brown">
                              {benefit}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="px-8 pb-8">
                      <button className="text-wine font-semibold flex items-center gap-2 group/btn">
                        {t("methods.learnMore")}
                        <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.p
                variants={fadeInUp}
                className="text-center text-brown mt-8 italic"
              >
                {t("methods.note")}
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Who Is It For Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-6xl mx-auto"
            >
              <motion.h2
                variants={fadeInUp}
                className="font-['Georgia',serif] text-4xl font-bold text-center text-brown mb-4"
              >
                {t("whoFor.title")}
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
                {/* Good Candidates */}
                <motion.div variants={fadeInLeft} className="space-y-6">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 bg-linear-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-['Georgia',serif] text-2xl font-bold text-brown">
                      {t("whoFor.goodTitle")}
                    </h3>
                  </div>

                  <ul className="space-y-4">
                    {[
                      t("whoFor.good1"),
                      t("whoFor.good2"),
                      t("whoFor.good3"),
                      t("whoFor.good4"),
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        variants={fadeInUp}
                        className="flex items-start gap-3 group"
                      >
                        <div className="p-1 bg-green-100 rounded-full group-hover:scale-110 transition-transform">
                          <CheckCircle2 className="w-4 h-4 text-green-600" />
                        </div>
                        <span className="text-brown">{item}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <div className="mt-8 p-6 bg-linear-to-br from-cream to-white rounded-xl">
                    <h4 className="font-semibold text-brown mb-3">
                      {t("whoFor.reasonsTitle")}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        t("whoFor.reason1"),
                        t("whoFor.reason2"),
                        t("whoFor.reason3"),
                        t("whoFor.reason4"),
                      ].map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-white text-wine rounded-full text-sm shadow-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Should Wait */}
                <motion.div variants={fadeInRight} className="space-y-6">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 bg-linear-to-br from-wine to-rose rounded-xl flex items-center justify-center">
                      <AlertCircle className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-['Georgia',serif] text-2xl font-bold text-brown">
                      {t("whoFor.waitTitle")}
                    </h3>
                  </div>

                  <ul className="space-y-4">
                    {[
                      t("whoFor.wait1"),
                      t("whoFor.wait2"),
                      t("whoFor.wait3"),
                      t("whoFor.wait4"),
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        variants={fadeInUp}
                        className="flex items-start gap-3 group"
                      >
                        <div className="p-1 bg-cream rounded-full group-hover:scale-110 transition-transform">
                          <AlertCircle className="w-4 h-4 text-wine" />
                        </div>
                        <span className="text-brown">{item}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <motion.div
                    variants={scaleIn}
                    className="mt-8 p-6 bg-linear-to-br from-wine/5 to-rose/5 rounded-xl border border-cream"
                  >
                    <p className="text-brown italic">
                      {t("whoFor.waitNote")}
                    </p>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Areas We Treat */}
        <section className="py-20 bg-cream">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-6xl mx-auto"
            >
              <motion.h2
                variants={fadeInUp}
                className="font-['Georgia',serif] text-4xl font-bold text-center text-brown mb-4"
              >
                {t("areas.title")}
              </motion.h2>

              <motion.p
                variants={fadeInUp}
                className="text-center text-taupe mb-12"
              >
                {t("areas.desc")}
              </motion.p>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {[
                  { icon: <Scissors className="w-6 h-6" />, label: t("areas.a1") },
                  { icon: <Sparkles className="w-6 h-6" />, label: t("areas.a2") },
                  { icon: <Leaf className="w-6 h-6" />, label: t("areas.a3") },
                  { icon: <Flower2 className="w-6 h-6" />, label: t("areas.a4") },
                  { icon: <Star className="w-6 h-6" />, label: t("areas.a5") },
                  { icon: <Heart className="w-6 h-6" />, label: t("areas.a6") },
                ].map((area, index) => (
                  <motion.div
                    key={index}
                    variants={scaleIn}
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    className="group bg-white p-6 rounded-xl text-center shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
                  >
                    <div className="w-12 h-12 mx-auto mb-3 bg-linear-to-br from-wine to-rose rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                      {area.icon}
                    </div>
                    <p className="font-medium text-brown">{area.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Patient Journey */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-5xl mx-auto"
            >
              <motion.h2
                variants={fadeInUp}
                className="font-['Georgia',serif] text-4xl font-bold text-center text-brown mb-12"
              >
                {t("journey.title")}
              </motion.h2>

              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-linear-to-b from-wine via-rose to-taupe hidden md:block"></div>

                <div className="space-y-8">
                  {[
                    {
                      step: "01",
                      title: t("journey.s1Title"),
                      description: t("journey.s1Desc"),
                      icon: <Users className="w-6 h-6" />,
                    },
                    {
                      step: "02",
                      title: t("journey.s2Title"),
                      description: t("journey.s2Desc"),
                      icon: <Scissors className="w-6 h-6" />,
                    },
                    {
                      step: "03",
                      title: t("journey.s3Title"),
                      description: t("journey.s3Desc"),
                      icon: <Sparkle className="w-6 h-6" />,
                    },
                    {
                      step: "04",
                      title: t("journey.s4Title"),
                      description: t("journey.s4Desc"),
                      icon: <Calendar className="w-6 h-6" />,
                    },
                    {
                      step: "05",
                      title: t("journey.s5Title"),
                      description: t("journey.s5Desc"),
                      icon: <Heart className="w-6 h-6" />,
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInLeft}
                      whileHover={{ x: 10 }}
                      className="relative flex flex-col md:flex-row gap-4 md:gap-8 group"
                    >
                      <div className="flex items-center gap-4 md:w-48">
                        <div className="w-16 h-16 bg-linear-to-br from-wine to-rose rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform">
                          {item.step}
                        </div>
                        <div className="md:hidden">
                          <h3 className="font-semibold text-brown">
                            {item.title}
                          </h3>
                        </div>
                      </div>

                      <div className="flex-1 bg-cream p-6 rounded-xl ml-0 md:ml-4">
                        <h3 className="font-semibold text-brown mb-2 hidden md:block">
                          {item.title}
                        </h3>
                        <p className="text-taupe">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Recovery Timeline */}
        <section className="py-20 bg-cream">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h2
                variants={fadeInUp}
                className="font-['Georgia',serif] text-4xl font-bold text-center text-brown mb-4"
              >
                {t("recovery.title")}
              </motion.h2>

              <motion.p
                variants={fadeInUp}
                className="text-center text-taupe mb-12"
              >
                {t("recovery.desc")}
              </motion.p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                {[
                  {
                    period: t("recovery.r1Period"),
                    desc: t("recovery.r1Desc"),
                  },
                  {
                    period: t("recovery.r2Period"),
                    desc: t("recovery.r2Desc"),
                  },
                  {
                    period: t("recovery.r3Period"),
                    desc: t("recovery.r3Desc"),
                  },
                  {
                    period: t("recovery.r4Period"),
                    desc: t("recovery.r4Desc"),
                  },
                  {
                    period: t("recovery.r5Period"),
                    desc: t("recovery.r5Desc"),
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={scaleIn}
                    whileHover={{ y: -5 }}
                    className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 text-center"
                  >
                    <div className="w-12 h-12 mx-auto mb-4 bg-linear-to-br from-wine to-rose rounded-full flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                    <h3 className="font-semibold text-wine mb-2">
                      {item.period}
                    </h3>
                    <p className="text-sm text-brown">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Pros & Cons */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <motion.h2
                variants={fadeInUp}
                className="font-['Georgia',serif] text-4xl font-bold text-center text-brown mb-12"
              >
                {t("prosCons.title")}
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Pros */}
                <motion.div variants={fadeInLeft} className="space-y-4">
                  <h3 className="text-2xl font-semibold text-green-600 mb-6">
                    {t("prosCons.benefitsTitle")}
                  </h3>
                  {[
                    t("prosCons.pro1"),
                    t("prosCons.pro2"),
                    t("prosCons.pro3"),
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      className="flex items-start gap-3 p-4 bg-linear-to-r from-green-50 to-transparent rounded-lg"
                    >
                      <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                      <span className="text-brown">{item}</span>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Cons */}
                <motion.div variants={fadeInRight} className="space-y-4">
                  <h3 className="text-2xl font-semibold text-wine mb-6">
                    {t("prosCons.limitsTitle")}
                  </h3>
                  {[
                    t("prosCons.con1"),
                    t("prosCons.con2"),
                    t("prosCons.con3"),
                    t("prosCons.con4"),
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      className="flex items-start gap-3 p-4 bg-linear-to-r from-cream to-transparent rounded-lg"
                    >
                      <AlertCircle className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                      <span className="text-brown">{item}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              <motion.p
                variants={fadeInUp}
                className="text-center text-wine mt-8 italic font-medium"
              >
                {t("prosCons.note")}
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Cost Section */}
        <section className="py-20 bg-cream">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <motion.h2
                variants={fadeInUp}
                className="font-['Georgia',serif] text-4xl font-bold text-center text-brown mb-4"
              >
                {t("cost.title")}
              </motion.h2>

              <motion.div
                variants={scaleIn}
                className="bg-white p-8 rounded-2xl shadow-xl mb-8"
              >
                <div className="text-center mb-8">
                  <span className="text-5xl font-bold text-wine">{t("cost.low")}</span>
                  <span className="text-taupe mx-4">{t("cost.to")}</span>
                  <span className="text-5xl font-bold text-rose">
                    {t("cost.high")}
                  </span>
                </div>

                <p className="text-center text-brown mb-8">
                  {t("cost.desc")}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-4 bg-cream rounded-lg">
                    <h4 className="font-semibold text-brown mb-2">{t("cost.fueTitle")}</h4>
                    <p className="text-wine">{t("cost.fueRange")}</p>
                    <p className="text-sm text-taupe mt-1">
                      {t("cost.fueNote")}
                    </p>
                  </div>

                  <div className="p-4 bg-cream rounded-lg">
                    <h4 className="font-semibold text-brown mb-2">{t("cost.graftTitle")}</h4>
                    <p className="text-wine">{t("cost.graftRange")}</p>
                    <p className="text-sm text-taupe mt-1">
                      {t("cost.graftNote")}
                    </p>
                  </div>
                </div>

                <div className="mt-8 p-6 border border-cream rounded-xl">
                  <h4 className="font-semibold text-brown mb-4">
                    {t("cost.includesTitle")}
                  </h4>
                  <ul className="space-y-2">
                    {[
                      t("cost.inc1"),
                      t("cost.inc2"),
                      t("cost.inc3"),
                      t("cost.inc4"),
                    ].map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-taupe"
                      >
                        <CheckCircle2 className="w-4 h-4 text-wine" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQ data={faqs} />
        {/* Final Note */}
        <section className="py-20 bg-linear-to-br from-wine to-rose text-white">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="container mx-auto px-4 sm:px-6 lg:px-8 text-center"
          >
            <motion.h2
              variants={fadeInUp}
              className="font-['Georgia',serif] text-4xl font-bold mb-6"
            >
              {t("cta.title")}
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-xl mb-8 max-w-2xl mx-auto opacity-90"
            >
              {t("cta.desc")}
            </motion.p>

            <motion.p variants={fadeInUp} className="text-lg mb-12">
              <MapPin className="inline w-5 h-5 mr-2" />
              {t("cta.address")}
            </motion.p>

            <motion.div
              variants={scaleIn}
              className="flex flex-wrap gap-4 justify-center"
            >
              <button className="px-8 py-4 bg-white text-wine rounded-full font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                {t("cta.bookBtn")}
              </button>
              <button className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-wine transition-all duration-300">
                {t("cta.callBtn")}
              </button>
            </motion.div>

            <motion.p variants={fadeInUp} className="text-sm opacity-70 mt-12">
              {t("cta.disclaimer")}
            </motion.p>
          </motion.div>
        </section>
      </main>
    </>
  );
};

export default HairTransplantLanding;
