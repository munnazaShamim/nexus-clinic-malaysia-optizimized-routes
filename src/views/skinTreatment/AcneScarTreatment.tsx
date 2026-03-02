"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  Clock,
  Shield,
  Heart,
  MapPin,
  Star,
  CheckCircle2,
  AlertCircle,
  Calendar,
  Sun,
  Droplets,
  ChevronRight,
  Layers,
  Target,
  Feather,
  Wind,
  Flower2,
  Gem,
  Microscope,
  Stethoscope,
} from "lucide-react";
import {
  fadeInUp,
  staggerContainer,
  fadeInLeft,
  fadeInRight,
  scaleIn,
} from "../../lib/animations";
import { useTranslation } from "@/src/i18n/client";
import { fallbackLng } from "@/src/i18n/settings";
import SectionBeforeAfter from "@/src/components/BeforeAfterCustomize";

const AcneScarLanding = ({ locale = fallbackLng }: { locale?: string }) => {
  const { t } = useTranslation(locale, "acneScarTreatment");

  const scarTypes = [
    {
      icon: <Target className="w-6 h-6" />,
      title: t("scarTypes.type1Title"),
      description: t("scarTypes.type1Desc"),
      color: "from-rose/20 to-wine/20",
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: t("scarTypes.type2Title"),
      description: t("scarTypes.type2Desc"),
      color: "from-taupe/20 to-brown/20",
    },
    {
      icon: <Wind className="w-6 h-6" />,
      title: t("scarTypes.type3Title"),
      description: t("scarTypes.type3Desc"),
      color: "from-wine/20 to-rose/20",
    },
    {
      icon: <Gem className="w-6 h-6" />,
      title: t("scarTypes.type4Title"),
      description: t("scarTypes.type4Desc"),
      color: "from-brown/20 to-taupe/20",
    },
  ];

  const treatments = [
    {
      icon: <Microscope className="w-8 h-8" />,
      title: t("treatments.t1Title"),
      description: t("treatments.t1Desc"),
      time: t("treatments.t1Time"),
      sessions: t("treatments.t1Sessions"),
      downtime: t("treatments.t1Downtime"),
      color: "from-wine to-rose",
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: t("treatments.t2Title"),
      description: t("treatments.t2Desc"),
      time: t("treatments.t2Time"),
      sessions: t("treatments.t2Sessions"),
      downtime: t("treatments.t2Downtime"),
      color: "from-brown to-taupe",
    },
    {
      icon: <Feather className="w-8 h-8" />,
      title: t("treatments.t3Title"),
      description: t("treatments.t3Desc"),
      time: t("treatments.t3Time"),
      sessions: t("treatments.t3Sessions"),
      downtime: t("treatments.t3Downtime"),
      color: "from-rose to-wine",
    },
    {
      icon: <Flower2 className="w-8 h-8" />,
      title: t("treatments.t4Title"),
      description: t("treatments.t4Desc"),
      time: t("treatments.t4Time"),
      sessions: t("treatments.t4Sessions"),
      downtime: t("treatments.t4Downtime"),
      color: "from-taupe to-brown",
    },
  ];

  const benefits = [
    {
      icon: <Heart className="w-6 h-6" />,
      text: t("benefits.pro1"),
    },
    {
      icon: <CheckCircle2 className="w-6 h-6" />,
      text: t("benefits.pro2"),
    },
    {
      icon: <Star className="w-6 h-6" />,
      text: t("benefits.pro3"),
    },
    {
      icon: <Wind className="w-6 h-6" />,
      text: t("benefits.pro4"),
    },
  ];

  const considerations = [
    {
      icon: <Calendar className="w-6 h-6" />,
      text: t("whoFor.wait1"),
    },
    {
      icon: <Heart className="w-6 h-6" />,
      text: t("whoFor.wait2"),
    },
    {
      icon: <Shield className="w-6 h-6" />,
      text: t("whoFor.wait3"),
    },
    {
      icon: <Sun className="w-6 h-6" />,
      text: t("whoFor.wait4"),
    },
  ];

  const stats = [
    {
      value: t("hero.stat1Value"),
      label: t("hero.stat1Label"),
      icon: <Calendar className="w-5 h-5" />,
    },
    {
      value: t("hero.stat2Value"),
      label: t("hero.stat2Label"),
      icon: <Star className="w-5 h-5" />,
    },
    {
      value: t("hero.stat3Value"),
      label: t("hero.stat3Label"),
      icon: <Heart className="w-5 h-5" />,
    },
    {
      value: t("hero.stat4Value"),
      label: t("hero.stat4Label"),
      icon: <Clock className="w-5 h-5" />,
    },
  ];

  const goodFitItems = [
    t("whoFor.fit1"),
    t("whoFor.fit2"),
    t("whoFor.fit3"),
    t("whoFor.fit4"),
  ];

  const scarMappingSteps = [
    {
      step: t("scarMapping.step1Num"),
      title: t("scarMapping.step1Title"),
      desc: t("scarMapping.step1Desc"),
    },
    {
      step: t("scarMapping.step2Num"),
      title: t("scarMapping.step2Title"),
      desc: t("scarMapping.step2Desc"),
    },
    {
      step: t("scarMapping.step3Num"),
      title: t("scarMapping.step3Title"),
      desc: t("scarMapping.step3Desc"),
    },
  ];

  const cons = [
    t("benefits.con1"),
    t("benefits.con2"),
    t("benefits.con3"),
  ];

  const sideEffectsList = [
    t("sideEffects.effect1"),
    t("sideEffects.effect2"),
    t("sideEffects.effect3"),
    t("sideEffects.effect4"),
  ];

  const costItems = [
    {
      treatment: t("cost.item1Treatment"),
      price: t("cost.item1Price"),
      clinic: t("cost.item1Clinic"),
    },
    {
      treatment: t("cost.item2Treatment"),
      price: t("cost.item2Price"),
      clinic: t("cost.item2Clinic"),
    },
    {
      treatment: t("cost.item3Treatment"),
      price: t("cost.item3Price"),
      clinic: t("cost.item3Clinic"),
    },
  ];

  const faqItems = [
    { q: t("faq.q1"), a: t("faq.a1") },
    { q: t("faq.q2"), a: t("faq.a2") },
    { q: t("faq.q3"), a: t("faq.a3") },
    { q: t("faq.q4"), a: t("faq.a4") },
  ];

  const whyNexusPoints = [
    t("whyNexus.point1"),
    t("whyNexus.point2"),
    t("whyNexus.point3"),
    t("whyNexus.point4"),
  ];

    const transformations = [
    {
      id: 1,
      before: "/images/B&A-skin/B&A-acne-scar-treatment1.webp",
      after: "/images/B&A-skin/B&A-acne-scar-treatment1.webp",
    },
    {
      id: 2,
      before: "/images/B&A-skin/B&A-acne-scar-treatment2.webp",
      after: "/images/B&A-skin/B&A-acne-scar-treatment2.webp",
    },
    {
      id: 3,
      before: "/images/B&A-skin/B&A-acne-scar-treatment3.webp",
      after: "/images/B&A-skin/B&A-acne-scar-treatment3.webp",
    },
  ];

  return (
    <>
      <main className="min-h-screen bg-cream">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-72 h-72 bg-wine rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-rose rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-taupe rounded-full blur-3xl opacity-20" />
          </div>

          <div className="container mx-auto px-4 relative z-10 my-8 lg:my-0">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="grid lg:grid-cols-2 gap-16 items-center"
            >
              <motion.div variants={fadeInLeft} className="space-y-8">
                <motion.div
                  variants={scaleIn}
                  className="inline-flex items-center space-x-2 bg-glass backdrop-blur-sm px-4 py-2 rounded-full border border-white/30"
                >
                  <MapPin className="w-4 h-4 text-wine" />
                  <span className="text-sm font-inter text-brown">
                    {t("hero.badge")}
                  </span>
                </motion.div>

                <motion.h1
                  variants={fadeInUp}
                  className="font-georgia text-5xl lg:text-6xl text-brown leading-tight"
                >
                  {t("hero.title1")}
                  <span className="text-wine block italic">{t("hero.title2")}</span>
                  <span className="text-rose block">{t("hero.title3")}</span>
                </motion.h1>

                <motion.p
                  variants={fadeInUp}
                  className="text-lg text-taupe font-inter leading-relaxed max-w-lg"
                >
                  {t("hero.desc")}
                </motion.p>

                <motion.div variants={fadeInUp} className="flex wrap gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-wine text-light font-inter rounded-full shadow-lg hover:shadow-xl transition-all flex items-center space-x-2 group"
                  >
                    <span>{t("hero.button")}</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 border-2 border-wine/30 text-brown font-inter rounded-full hover:bg-glass transition-all"
                  >
                    {t("hero.learnMore")}
                  </motion.button>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  className="grid grid-cols-2 gap-6 -mt-24 lg:-mt-16"
                >
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ y: -5 }}
                      className="flex items-center space-x-3"
                    >
                      <div className="p-2 bg-glass rounded-lg">{stat.icon}</div>
                      <div>
                        <div className="font-georgia text-xl text-brown">
                          {stat.value}
                        </div>
                        <div className="text-sm text-taupe">{stat.label}</div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              <motion.div variants={fadeInRight} className="relative">
                <div className="relative z-10 bg-glass backdrop-blur-sm p-8 rounded-3xl border border-white/30 shadow-2xl">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-2 text-wine">
                      <AlertCircle className="w-5 h-5" />
                      <span className="font-inter text-sm uppercase tracking-wider">
                        {t("hero.honestNote")}
                      </span>
                    </div>
                <div className="relative rounded-3xl overflow-hidden shadow-xl">
                 <img
                   src="/images/skin/acne-scar-treatment.webp"
                   alt="acne scar treatment"
                   className="w-full h-full object-cover"
                 />
                 <div className="absolute inset-0 bg-linear-to-t from-brown/40 to-transparent"></div>
               </div>
                    <p className="font-georgia text-brown text-xl italic">
                      {t("hero.honestQuote")}
                    </p>
                    <div className="h-1 w-20 bg-rose rounded-full" />
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-wine/10 rounded-full blur-2xl" />
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-rose/10 rounded-full blur-2xl" />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Why Scars Are Stubborn */}
        <section className="py-24 bg-light relative overflow-hidden">
          <div className="container mx-auto px-4">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center space-y-8"
            >
              <motion.div
                variants={scaleIn}
                className="inline-flex items-center space-x-2 bg-glass px-4 py-2 rounded-full"
              >
                <Stethoscope className="w-4 h-4 text-wine" />
                <span className="text-sm text-brown">
                  {t("whyStubborn.badge")}
                </span>
              </motion.div>

              <motion.h2
                variants={fadeInUp}
                className="font-georgia text-4xl lg:text-5xl text-brown"
              >
                {t("whyStubborn.title")}
                <span className="text-wine block text-2xl mt-4">
                  {t("whyStubborn.subtitle")}
                </span>
              </motion.h2>

              <motion.p
                variants={fadeInUp}
                className="text-lg text-taupe font-inter leading-relaxed"
              >
                {t("whyStubborn.desc")}
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="grid md:grid-cols-2 gap-8 pt-12"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-cream p-8 rounded-3xl shadow-lg border border-white/50"
                >
                  <h3 className="font-georgia text-2xl text-wine mb-4">
                    {t("whyStubborn.goodNewsTitle")}
                  </h3>
                  <p className="text-brown font-inter">
                    {t("whyStubborn.goodNewsDesc")}
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-cream p-8 rounded-3xl shadow-lg border border-white/50"
                >
                  <h3 className="font-georgia text-2xl text-rose mb-4">
                    {t("whyStubborn.realityTitle")}
                  </h3>
                  <p className="text-brown font-inter">
                    {t("whyStubborn.realityDesc")}
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Scar Types */}
        <section className="py-24 bg-cream">
          <div className="container mx-auto px-4">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center space-y-4 mb-16"
            >
              <motion.span
                variants={fadeInUp}
                className="text-wine font-inter tracking-wider text-sm uppercase"
              >
                {t("scarTypes.badge")}
              </motion.span>
              <motion.h2
                variants={fadeInUp}
                className="font-georgia text-4xl lg:text-5xl text-brown"
              >
                {t("scarTypes.title")}
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-taupe font-inter max-w-2xl mx-auto"
              >
                {t("scarTypes.desc")}
              </motion.p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {scarTypes.map((scar, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -10 }}
                  className={`relative group cursor-pointer`}
                >
                  <div
                    className={`absolute inset-0 bg-linear-to-br ${scar.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity`}
                  />
                  <div className="relative bg-light p-8 rounded-3xl shadow-lg border border-white/50 h-full">
                    <div className="text-wine mb-4">{scar.icon}</div>
                    <h3 className="font-georgia text-xl text-brown mb-3">
                      {scar.title}
                    </h3>
                    <p className="text-taupe font-inter text-sm leading-relaxed">
                      {scar.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Post-acne marks note */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 p-6 bg-rose/10 rounded-2xl border border-rose/20"
            >
              <p className="text-brown font-inter text-center">
                <span className="font-bold text-rose">
                  {t("scarTypes.postAcneLabel")}
                </span>{" "}
                {t("scarTypes.postAcneDesc")}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Before & After */}
        <SectionBeforeAfter transformations={transformations} />

        {/* Who It's For */}
        <section className="py-24 bg-light">
          <div className="container mx-auto px-4">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-12"
            >
              <motion.div variants={fadeInLeft} className="space-y-8">
                <div className="inline-flex items-center space-x-2 bg-glass px-4 py-2 rounded-full">
                  <Heart className="w-4 h-4 text-wine" />
                  <span className="text-sm text-brown">{t("whoFor.goodFitBadge")}</span>
                </div>

                <h2 className="font-georgia text-4xl text-brown">
                  {t("whoFor.goodFitTitle")}
                </h2>

                <ul className="space-y-4">
                  {goodFitItems.map((item, index) => (
                    <motion.li
                      key={index}
                      variants={fadeInUp}
                      className="flex items-start space-x-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-wine shrink-0 mt-1" />
                      <span className="text-brown font-inter">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.div variants={fadeInRight} className="space-y-8">
                <div className="inline-flex items-center space-x-2 bg-glass px-4 py-2 rounded-full">
                  <Clock className="w-4 h-4 text-rose" />
                  <span className="text-sm text-brown">{t("whoFor.waitBadge")}</span>
                </div>

                <h2 className="font-georgia text-4xl text-brown">
                  {t("whoFor.waitTitle")}
                </h2>

                <div className="grid grid-cols-2 gap-4">
                  {considerations.map((item, index) => (
                    <motion.div
                      key={index}
                      variants={scaleIn}
                      whileHover={{ scale: 1.05 }}
                      className="bg-cream p-4 rounded-xl border border-white/50"
                    >
                      <div className="text-rose mb-2">{item.icon}</div>
                      <p className="text-sm text-brown font-inter">
                        {item.text}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Scar Mapping Approach */}
        <section className="py-24 bg-cream relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-20 w-64 h-64 bg-wine rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-20 w-64 h-64 bg-rose rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center space-y-8"
            >
              <motion.div
                variants={scaleIn}
                className="inline-flex items-center space-x-2 bg-glass px-4 py-2 rounded-full"
              >
                <MapPin className="w-4 h-4 text-wine" />
                <span className="text-sm text-brown">
                  {t("scarMapping.badge")}
                </span>
              </motion.div>

              <motion.h2
                variants={fadeInUp}
                className="font-georgia text-4xl lg:text-5xl text-brown"
              >
                {t("scarMapping.title")}
              </motion.h2>

              <motion.p
                variants={fadeInUp}
                className="text-lg text-taupe font-inter"
              >
                {t("scarMapping.desc")}
              </motion.p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-8 mt-16"
            >
              {scarMappingSteps.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -10 }}
                  className="relative"
                >
                  <div className="absolute -top-4 -left-4 w-16 h-16 bg-wine/10 rounded-full blur-2xl" />
                  <div className="relative bg-light p-8 rounded-3xl shadow-xl border border-white/50">
                    <div className="text-6xl font-georgia text-wine/20 mb-4">
                      {item.step}
                    </div>
                    <h3 className="font-georgia text-2xl text-brown mb-4">
                      {item.title}
                    </h3>
                    <p className="text-taupe font-inter">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Treatments */}
        <section className="py-24 bg-light">
          <div className="container mx-auto px-4">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center space-y-4 mb-16"
            >
              <motion.span
                variants={fadeInUp}
                className="text-wine font-inter tracking-wider text-sm uppercase"
              >
                {t("treatments.badge")}
              </motion.span>
              <motion.h2
                variants={fadeInUp}
                className="font-georgia text-4xl lg:text-5xl text-brown"
              >
                {t("treatments.title")}
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-taupe font-inter max-w-2xl mx-auto"
              >
                {t("treatments.desc")}
              </motion.p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {treatments.map((treatment, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group relative"
                >
                  <div
                    className={`absolute inset-0 bg-linear-to-br ${treatment.color} rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity`}
                  />
                  <div className="relative bg-cream p-6 rounded-3xl shadow-lg border border-white/50 h-full">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-linear-to-br ${treatment.color} text-light flex items-center justify-center mb-4`}
                    >
                      {treatment.icon}
                    </div>

                    <h3 className="font-georgia text-xl text-brown mb-3">
                      {treatment.title}
                    </h3>
                    <p className="text-taupe font-inter text-sm mb-4">
                      {treatment.description}
                    </p>

                    <div className="space-y-2 pt-4 border-t border-white/50">
                      <div className="flex justify-between text-sm">
                        <span className="text-brown font-inter">{t("treatments.durationLabel")}</span>
                        <span className="text-wine">{treatment.time}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-brown font-inter">{t("treatments.sessionsLabel")}</span>
                        <span className="text-rose">{treatment.sessions}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-brown font-inter">{t("treatments.downtimeLabel")}</span>
                        <span className="text-taupe">{treatment.downtime}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Benefits & Considerations */}
        <section className="py-24 bg-cream">
          <div className="container mx-auto px-4">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-12"
            >
              <motion.div variants={fadeInLeft} className="space-y-6">
                <div className="inline-flex items-center space-x-2 bg-glass px-4 py-2 rounded-full">
                  <Heart className="w-4 h-4 text-wine" />
                  <span className="text-sm text-brown">{t("benefits.prosBadge")}</span>
                </div>

                <h2 className="font-georgia text-4xl text-brown">
                  {t("benefits.prosTitle")}
                </h2>

                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      whileHover={{ x: 10 }}
                      className="flex items-center space-x-3 bg-light p-4 rounded-xl"
                    >
                      <div className="text-wine">{benefit.icon}</div>
                      <span className="text-brown font-inter">
                        {benefit.text}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={fadeInRight} className="space-y-6">
                <div className="inline-flex items-center space-x-2 bg-glass px-4 py-2 rounded-full">
                  <AlertCircle className="w-4 h-4 text-rose" />
                  <span className="text-sm text-brown">
                    {t("benefits.consBadge")}
                  </span>
                </div>

                <h2 className="font-georgia text-4xl text-brown">{t("benefits.consTitle")}</h2>

                <div className="space-y-4">
                  {cons.map((item, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      whileHover={{ x: 10 }}
                      className="flex items-center space-x-3 bg-light p-4 rounded-xl"
                    >
                      <div className="text-rose">
                        <Clock className="w-5 h-5" />
                      </div>
                      <span className="text-brown font-inter">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Side Effects & Safety */}
        <section className="py-24 bg-light">
          <div className="container mx-auto px-4">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <motion.div
                variants={scaleIn}
                className="inline-flex items-center space-x-2 bg-glass px-4 py-2 rounded-full mb-8"
              >
                <Shield className="w-4 h-4 text-wine" />
                <span className="text-sm text-brown">{t("sideEffects.badge")}</span>
              </motion.div>

              <motion.h2
                variants={fadeInUp}
                className="font-georgia text-4xl lg:text-5xl text-brown mb-8"
              >
                {t("sideEffects.title")}
                <span className="text-wine block text-2xl mt-4">
                  {t("sideEffects.subtitle")}
                </span>
              </motion.h2>

              <motion.p
                variants={fadeInUp}
                className="text-lg text-taupe font-inter mb-8"
              >
                {t("sideEffects.desc")}
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="grid sm:grid-cols-2 gap-4 mb-8"
              >
                {sideEffectsList.map((item, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-wine mt-2" />
                    <span className="text-brown font-inter text-sm">
                      {item}
                    </span>
                  </div>
                ))}
              </motion.div>

              <motion.div
                variants={scaleIn}
                className="bg-rose/10 p-6 rounded-2xl border border-rose/20"
              >
                <p className="text-brown font-inter italic">
                  {t("sideEffects.safetyQuote")}
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Cost Section */}
        <section className="py-24 bg-cream">
          <div className="container mx-auto px-4">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <motion.h2
                variants={fadeInUp}
                className="font-georgia text-4xl lg:text-5xl text-brown mb-6"
              >
                {t("cost.title")}
                <span className="text-wine block text-2xl">
                  {t("cost.subtitle")}
                </span>
              </motion.h2>

              <motion.p
                variants={fadeInUp}
                className="text-lg text-taupe font-inter mb-8"
              >
                {t("cost.desc")}
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="grid md:grid-cols-3 gap-6 mb-8"
              >
                {costItems.map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="bg-light p-6 rounded-2xl shadow-lg text-center"
                  >
                    <div className="text-sm text-taupe mb-2">{item.clinic}</div>
                    <div className="font-georgia text-xl text-brown mb-1">
                      {item.treatment}
                    </div>
                    <div className="text-2xl font-bold text-wine">
                      {item.price}
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.p
                variants={fadeInUp}
                className="text-center text-brown font-inter italic"
              >
                {t("cost.note")}
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Aftercare */}
        <section className="py-24 bg-light">
          <div className="container mx-auto px-4">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <motion.div variants={fadeInLeft} className="space-y-6">
                <div className="inline-flex items-center space-x-2 bg-glass px-4 py-2 rounded-full">
                  <Droplets className="w-4 h-4 text-wine" />
                  <span className="text-sm text-brown">
                    {t("aftercare.badge")}
                  </span>
                </div>

                <h2 className="font-georgia text-4xl lg:text-5xl text-brown">
                  {t("aftercare.title")}
                </h2>

                <p className="text-lg text-taupe font-inter">
                  {t("aftercare.desc")}
                </p>

                <div className="space-y-4">
                  <motion.div
                    variants={fadeInUp}
                    className="bg-cream p-6 rounded-2xl"
                  >
                    <h3 className="font-georgia text-xl text-wine mb-3">
                      {t("aftercare.first48Title")}
                    </h3>
                    <ul className="space-y-2 text-brown font-inter">
                      <li className="flex items-start space-x-2">
                        <span className="text-wine">•</span>
                        <span>{t("aftercare.first48Item1")}</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-wine">•</span>
                        <span>{t("aftercare.first48Item2")}</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-wine">•</span>
                        <span>{t("aftercare.first48Item3")}</span>
                      </li>
                    </ul>
                  </motion.div>

                  <motion.div
                    variants={fadeInUp}
                    className="bg-cream p-6 rounded-2xl"
                  >
                    <h3 className="font-georgia text-xl text-rose mb-3">
                      {t("aftercare.firstWeekTitle")}
                    </h3>
                    <ul className="space-y-2 text-brown font-inter">
                      <li className="flex items-start space-x-2">
                        <span className="text-rose">•</span>
                        <span>{t("aftercare.firstWeekItem1")}</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-rose">•</span>
                        <span>{t("aftercare.firstWeekItem2")}</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-rose">•</span>
                        <span>{t("aftercare.firstWeekItem3")}</span>
                      </li>
                    </ul>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div variants={fadeInRight} className="relative">
                <div className="absolute inset-0 bg-linear-to-br from-wine/20 to-rose/20 rounded-3xl blur-3xl" />
                <div className="relative bg-glass backdrop-blur-sm p-8 rounded-3xl border border-white/30">
                  <h3 className="font-georgia text-2xl text-brown mb-4">
                    {t("aftercare.betweenTitle")}
                  </h3>
                  <p className="text-brown font-inter mb-6">
                    {t("aftercare.betweenDesc")}
                  </p>
                  <div className="h-1 w-20 bg-wine rounded-full" />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-cream">
          <div className="container mx-auto px-4">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <motion.div
                variants={scaleIn}
                className="inline-flex items-center space-x-2 bg-glass px-4 py-2 rounded-full mb-8"
              >
                <span className="text-sm text-brown">{t("faq.badge")}</span>
              </motion.div>

              <motion.h2
                variants={fadeInUp}
                className="font-georgia text-4xl lg:text-5xl text-brown mb-12"
              >
                {t("faq.title")}
              </motion.h2>

              <div className="space-y-4">
                {faqItems.map((faq, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    whileHover={{ x: 10 }}
                    className="bg-light p-6 rounded-2xl cursor-pointer group"
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="font-georgia text-lg text-brown group-hover:text-wine transition-colors">
                        {faq.q}
                      </h3>
                      <ChevronRight className="w-5 h-5 text-wine opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why Nexus */}
        <section className="py-24 bg-light">
          <div className="container mx-auto px-4">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center space-y-8"
            >
              <motion.div
                variants={scaleIn}
                className="inline-flex items-center space-x-2 bg-glass px-4 py-2 rounded-full"
              >
                <MapPin className="w-4 h-4 text-wine" />
                <span className="text-sm text-brown">{t("whyNexus.badge")}</span>
              </motion.div>

              <motion.h2
                variants={fadeInUp}
                className="font-georgia text-4xl lg:text-5xl text-brown"
              >
                {t("whyNexus.title")}
              </motion.h2>

              <motion.p
                variants={fadeInUp}
                className="text-lg text-taupe font-inter"
              >
                {t("whyNexus.desc")}
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="grid md:grid-cols-2 gap-6 pt-8"
              >
                {whyNexusPoints.map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-start space-x-3 bg-cream p-4 rounded-xl"
                  >
                    <CheckCircle2 className="w-5 h-5 text-wine shrink-0" />
                    <span className="text-brown font-inter text-left">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div variants={scaleIn} className="pt-12">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-12 py-5 bg-linear-to-r from-wine to-rose text-light font-inter rounded-full shadow-xl hover:shadow-2xl transition-all inline-flex items-center space-x-3 group"
                >
                  <span className="text-lg">{t("whyNexus.button")}</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

export default AcneScarLanding;
