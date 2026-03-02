"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  Shield,
  Clock,
  Heart,
  Droplets,
  Award,
  Sun,
  Moon,
  ChevronRight,
  CheckCircle2,
  User,
  AlertCircle,
  Zap,
  Feather,
  Gem,
  Flower2,
  Sparkle,
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

const DermalFillersLanding = ({ locale = fallbackLng }: { locale?: string }) => {
  const { t } = useTranslation(locale, "dermalFiller");

  const faqs = [
    { q: t("faq.q1"), a: t("faq.a1") },
    { q: t("faq.q2"), a: t("faq.a2") },
    { q: t("faq.q3"), a: t("faq.a3") },
    { q: t("faq.q4"), a: t("faq.a4") },
    { q: t("faq.q5"), a: t("faq.a5") },
    { q: t("faq.q6"), a: t("faq.a6") },
  ];

  const trustBadges = [
    { icon: Shield, text: t("hero.trust1") },
    { icon: Award, text: t("hero.trust2") },
    { icon: Heart, text: t("hero.trust3") },
    { icon: Clock, text: t("hero.trust4") },
  ];

  const stats = [
    { value: t("stats.value1"), label: t("stats.label1"), icon: User },
    { value: t("stats.value2"), label: t("stats.label2"), icon: Sparkle },
    { value: t("stats.value3"), label: t("stats.label3"), icon: Award },
    { value: t("stats.value4"), label: t("stats.label4"), icon: Heart },
  ];

  const whatPoints = [t("what.point1"), t("what.point2"), t("what.point3")];

  const goals = [t("what.goal1"), t("what.goal2"), t("what.goal3")];

  const areas = [
    { area: t("areas.area1"), desc: t("areas.area1Desc"), icon: Droplets },
    { area: t("areas.area2"), desc: t("areas.area2Desc"), icon: Sun },
    { area: t("areas.area3"), desc: t("areas.area3Desc"), icon: Moon },
    { area: t("areas.area4"), desc: t("areas.area4Desc"), icon: Zap },
    { area: t("areas.area5"), desc: t("areas.area5Desc"), icon: Gem },
    { area: t("areas.area6"), desc: t("areas.area6Desc"), icon: Feather },
    { area: t("areas.area7"), desc: t("areas.area7Desc"), icon: Flower2 },
    { area: t("areas.area8"), desc: t("areas.area8Desc"), icon: Sparkles },
  ];

  const fearPoints = [
    t("fear.point1"),
    t("fear.point2"),
    t("fear.point3"),
    t("fear.point4"),
  ];

  const steps = [
    { step: t("process.step1"), title: t("process.step1Title"), desc: t("process.step1Desc") },
    { step: t("process.step2"), title: t("process.step2Title"), desc: t("process.step2Desc") },
    { step: t("process.step3"), title: t("process.step3Title"), desc: t("process.step3Desc") },
    { step: t("process.step4"), title: t("process.step4Title"), desc: t("process.step4Desc") },
  ];

  const costBadges = [
    { label: t("cost.badge1"), icon: User },
    { label: t("cost.badge2"), icon: Award },
    { label: t("cost.badge3"), icon: Heart },
    { label: t("cost.badge4"), icon: Shield },
  ];

  return (
    <>
      <main className="bg-light min-h-screen font-inter">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-br from-cream via-light to-cream opacity-50" />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-linear(circle at 30% 40%, rgba(172, 153, 144, 0.05) 0%, transparent 30%)",
            }}
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInLeft} className="space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-glass backdrop-blur-sm rounded-full border border-taupe/20">
                  <Sparkles className="w-4 h-4 text-wine" />
                  <span className="text-sm text-brown font-medium">
                    {t("hero.badge")}
                  </span>
                </div>

                <h1 className="font-georgia text-5xl md:text-6xl lg:text-7xl text-brown leading-tight">
                  {t("hero.title1")}
                  <span className="text-wine relative">
                    {t("hero.titleHighlight")}
                    <motion.span
                      className="absolute -bottom-2 left-0 w-full h-0.5 bg-rose/30"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 0.5, duration: 0.8 }}
                    />
                  </span>
                  {t("hero.title2")}
                </h1>

                <p className="text-lg text-taupe leading-relaxed max-w-lg">
                  {t("hero.desc")}
                </p>

                <div className="flex flex-wrap gap-4">
                  {trustBadges.map((item, index) => (
                    <motion.div
                      key={index}
                      variants={scaleIn}
                      whileHover={{ y: -2 }}
                      className="flex items-center gap-2 px-4 py-2 bg-white/50 backdrop-blur-sm rounded-lg border border-rose/10"
                    >
                      <item.icon className="w-4 h-4 text-wine" />
                      <span className="text-sm text-brown">{item.text}</span>
                    </motion.div>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative overflow-hidden px-8 py-4 bg-wine text-light rounded-full font-medium inline-flex items-center gap-2"
                >
                  <span className="relative z-10">{t("hero.cta")}</span>
                  <ChevronRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  <motion.div
                    className="absolute inset-0 bg-rose"
                    initial={{ x: "100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                className="relative h-125 hidden lg:block"
              >
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80')] rounded-3xl" />
                <div className="absolute top-20 right-20 w-64 h-64 bg-rose/10 rounded-full blur-3xl" />

                {[
                  { Icon: Feather, delay: 0, bottom: "33%", left: "5%" },
                  { Icon: Flower2, delay: 0.2, bottom: "5%", left: "5%" },
                  { Icon: Gem, delay: 0.4, top: "70%", left: "5%" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="absolute"
                    style={{
                      top: item.top,
                      left: item.left,
                      bottom: item.bottom,
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: item.delay, duration: 0.5 }}
                  >
                    <div className="p-4 bg-glass backdrop-blur-sm rounded-2xl border border-taupe/20">
                      <item.Icon className="w-6 h-6 text-wine" />
                    </div>
                  </motion.div>
                ))}

                <motion.div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80"
                  animate={{
                    scale: [1, 1.05, 1],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <div className="w-full h-full rounded-full border-2 border-rose/20 border-dashed" />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Quick Stats Section */}
        <section className="py-16 bg-cream/50">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                  className="text-center"
                >
                  <div className="inline-flex p-3 bg-white rounded-2xl shadow-sm mb-4">
                    <stat.icon className="w-6 h-6 text-wine" />
                  </div>
                  <div className="font-georgia text-3xl text-brown mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-taupe">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* What Are Dermal Fillers */}
        <section className="py-20">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div variants={fadeInLeft} className="space-y-6">
                <h2 className="font-georgia text-4xl text-brown">
                  {t("what.title1")}
                  <span className="text-wine">{t("what.titleHighlight")}</span>
                  {t("what.title2")}
                </h2>
                <p className="text-taupe leading-relaxed">
                  {t("what.desc")}
                </p>

                <div className="space-y-4">
                  {whatPoints.map((item, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-wine mt-1 shrink-0" />
                      <span className="text-brown">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={fadeInRight} className="relative">
                <div className="aspect-square rounded-3xl bg-linear-to-br from-rose/10 to-wine/10 p-8">
                  <div className="relative h-full">
                    <div className="absolute inset-0 bg-white/50 backdrop-blur-sm rounded-2xl" />
                    <div className="relative p-6 space-y-4">
                      <h3 className="font-georgia text-xl text-brown">
                        {t("what.goalsTitle")}
                      </h3>
                      {goals.map((quote, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="p-4 bg-white rounded-xl shadow-sm border border-taupe/10"
                        >
                          <p className="text-brown italic">"{quote}"</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Treatment Areas */}
        <section className="py-20 bg-linear-to-b from-cream/30 to-light">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            <motion.div
              variants={fadeInUp}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="font-georgia text-4xl text-brown mb-4">
                {t("areas.title1")}
                <span className="text-wine">{t("areas.titleHighlight")}</span>
              </h2>
              <p className="text-taupe">{t("areas.subtitle")}</p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {areas.map((item, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={{ y: -5 }}
                  className="group relative p-6 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-taupe/10 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-linear-to-br from-wine/5 to-rose/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative z-10">
                    <div className="inline-flex p-3 bg-cream rounded-xl mb-4 group-hover:bg-wine/10 transition-colors">
                      <item.icon className="w-5 h-5 text-wine" />
                    </div>
                    <h3 className="font-georgia text-lg text-brown mb-1">
                      {item.area}
                    </h3>
                    <p className="text-xs text-taupe">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* The Overfilled Fear */}
        <section className="py-20">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            <div className="relative bg-linear-to-r from-wine to-rose rounded-3xl overflow-hidden p-12">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml,...')] opacity-10" />

              <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  variants={fadeInLeft}
                  className="text-light space-y-6"
                >
                  <h2 className="font-georgia text-4xl">
                    {t("fear.title1")}
                    <span className="italic">{t("fear.titleHighlight")}</span>
                    {t("fear.title2")}
                  </h2>
                  <p className="text-light/90 leading-relaxed">
                    {t("fear.desc")}
                  </p>

                  <div className="space-y-4">
                    {fearPoints.map((item, index) => (
                      <motion.div
                        key={index}
                        variants={fadeInUp}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle2 className="w-5 h-5 text-light shrink-0" />
                        <span className="text-light/90">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                <motion.div variants={fadeInRight} className="relative h-64">
                  <div className="absolute inset-0 bg-light/10 backdrop-blur-sm rounded-2xl p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <AlertCircle className="w-8 h-8 text-light" />
                      <span className="text-light font-medium">
                        {t("fear.hearLabel")}
                      </span>
                    </div>
                    <p className="text-light/90 text-lg italic">
                      {t("fear.quote")}
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* The Appointment Process */}
        <section className="py-20 bg-cream/30">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            <motion.div
              variants={fadeInUp}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="font-georgia text-4xl text-brown mb-4">
                {t("process.title1")}
                <span className="text-wine">{t("process.titleHighlight")}</span>
                {t("process.title2")}
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-6">
              {steps.map((item, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  className="relative p-8 bg-white rounded-2xl shadow-sm border border-taupe/10"
                >
                  <div className="text-6xl font-georgia text-wine/20 mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-georgia text-xl text-brown mb-2">
                    {item.title}
                  </h3>
                  <p className="text-taupe text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* FAQ Section */}
        <FAQ data={faqs} />

        {/* Cost Section */}
        <section className="py-20 bg-cream/50">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInLeft} className="space-y-6">
                <h2 className="font-georgia text-4xl text-brown">
                  {t("cost.title1")}
                  <span className="text-wine">{t("cost.titleHighlight")}</span>
                  {t("cost.title2")}
                </h2>

                <div className="p-6 bg-white rounded-2xl shadow-sm">
                  <p className="text-taupe mb-4">{t("cost.rangeLabel")}</p>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-3xl font-georgia text-wine">
                      {t("cost.min")}
                    </span>
                    <span className="text-brown">{t("cost.to")}</span>
                    <span className="text-3xl font-georgia text-wine">
                      {t("cost.max")}
                    </span>
                  </div>
                  <p className="text-sm text-taupe">
                    {t("cost.note")}
                  </p>

                  <div className="mt-6 pt-6 border-t border-taupe/20">
                    <p className="text-brown font-medium mb-3">
                      {t("cost.juvedermLabel")}
                    </p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-georgia text-rose">
                        {t("cost.juvedermMin")}
                      </span>
                      <span className="text-brown">{t("cost.to")}</span>
                      <span className="text-2xl font-georgia text-rose">
                        {t("cost.juvedermMax")}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-taupe italic">
                  {t("cost.advice")}
                </p>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                className="grid grid-cols-2 gap-4"
              >
                {costBadges.map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="p-4 bg-white rounded-xl shadow-sm text-center"
                  >
                    <item.icon className="w-6 h-6 text-wine mx-auto mb-2" />
                    <span className="text-xs text-brown">{item.label}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          >
            <motion.div
              variants={scaleIn}
              className="inline-flex p-3 bg-wine/10 rounded-full mb-6"
            >
              <Heart className="w-6 h-6 text-wine" />
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              className="font-georgia text-4xl md:text-5xl text-brown mb-6"
            >
              {t("cta.title1")}
              <span className="text-wine">{t("cta.titleHighlight")}</span>
              {t("cta.title2")}
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-taupe text-lg mb-8 max-w-2xl mx-auto"
            >
              {t("cta.desc")}
            </motion.p>

            <motion.button
              variants={scaleIn}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-wine text-light rounded-full font-medium inline-flex items-center gap-2 shadow-lg shadow-wine/20"
            >
              {t("cta.button")}
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </section>
      </main>
    </>
  );
};

export default DermalFillersLanding;
