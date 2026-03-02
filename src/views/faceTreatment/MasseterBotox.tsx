"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  Shield,
  Clock,
  Heart,
  ChevronRight,
  Droplets,
  Brain,
  Award,
  MapPin,
  CheckCircle2,
} from "lucide-react";

import {
  staggerContainer,
  fadeInLeft,
  fadeInRight,
  fadeInUp,
  scaleIn,
} from "../../lib/animations";
import FAQ from "../../components/FAQ";
import { useTranslation } from "@/src/i18n/client";
import { fallbackLng } from "@/src/i18n/settings";

const MasseterBotoxPage = ({ locale = fallbackLng }: { locale?: string }) => {
  const { t } = useTranslation(locale, "masseterBotox");

  const faqs = [
    { q: t("faq.q1"), a: t("faq.a1") },
    { q: t("faq.q2"), a: t("faq.a2") },
    { q: t("faq.q3"), a: t("faq.a3") },
    { q: t("faq.q4"), a: t("faq.a4") },
    { q: t("faq.q5"), a: t("faq.a5") },
  ];

  const trustBadges = [
    { icon: Shield, text: t("hero.trust1") },
    { icon: Heart, text: t("hero.trust2") },
    { icon: MapPin, text: t("hero.trust3") },
    { icon: Award, text: t("hero.trust4") },
  ];

  const summaryPoints = [t("summary.point1"), t("summary.point2")];

  const wideReasons = [t("summary.wide1"), t("summary.wide2"), t("summary.wide3"), t("summary.wide4")];

  const bestForCards = [
    { icon: Droplets, title: t("bestFor.card1Title"), description: t("bestFor.card1Desc"), color: "from-wine to-rose" },
    { icon: Brain, title: t("bestFor.card2Title"), description: t("bestFor.card2Desc"), color: "from-rose to-taupe" },
    { icon: Heart, title: t("bestFor.card3Title"), description: t("bestFor.card3Desc"), color: "from-taupe to-brown" },
  ];

  const timelineItems = [
    { time: t("timeline.time1"), desc: t("timeline.time1Desc") },
    { time: t("timeline.time2"), desc: t("timeline.time2Desc") },
    { time: t("timeline.time3"), desc: t("timeline.time3Desc") },
    { time: t("timeline.time4"), desc: t("timeline.time4Desc") },
  ];

  const priceItems = [
    { label: t("pricing.price1Label"), value: t("pricing.price1Value") },
    { label: t("pricing.price2Label"), value: t("pricing.price2Value") },
    { label: t("pricing.price3Label"), value: t("pricing.price3Value") },
  ];

  const comparisons = [
    { title: t("compare.comp1Title"), botox: t("compare.comp1Botox"), alt: t("compare.comp1Alt"), note: t("compare.comp1Note") },
    { title: t("compare.comp2Title"), botox: t("compare.comp2Botox"), alt: t("compare.comp2Alt"), note: t("compare.comp2Note") },
    { title: t("compare.comp3Title"), botox: t("compare.comp3Botox"), alt: t("compare.comp3Alt"), note: t("compare.comp3Note") },
    { title: t("compare.comp4Title"), botox: t("compare.comp4Botox"), alt: t("compare.comp4Alt"), note: t("compare.comp4Note") },
  ];

  return (
    <>
      <main className="bg-light font-[--font-inter] overflow-hidden">
        {/* Hero Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
          style={{
            background: `linear-linear(135deg, var(--color-cream) 0%, var(--color-light) 100%)`,
          }}
        >
          {/* Decorative Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.15, 0.1],
              }}
              transition={{ duration: 8, repeat: Infinity }}
              className="absolute -top-1/2 -right-1/2 w-full h-full rounded-full bg-rose opacity-10 blur-3xl"
            />
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{ duration: 10, repeat: Infinity }}
              className="absolute -bottom-1/2 -left-1/2 w-full h-full rounded-full bg-wine opacity-10 blur-3xl"
            />
          </div>

          <div className="relative max-w-7xl mx-auto text-center">
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-glass backdrop-blur-sm border border-taupe/20 text-brown text-sm font-medium">
                <Sparkles className="w-4 h-4 mr-2 text-wine" />
                {t("hero.badge")}
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="font-[--font-georgia] text-5xl sm:text-6xl lg:text-7xl text-brown mb-6 leading-tight"
            >
              {t("hero.title1")}
              <br />
              <span className="text-wine">{t("hero.title2")}</span>
              <br />{t("hero.title3")}
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl text-taupe max-w-2xl mx-auto mb-10"
            >
              {t("hero.desc")}
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 bg-wine text-white rounded-full font-medium text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center"
              >
                {t("hero.cta1")}
                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-glass backdrop-blur-sm border border-taupe/30 text-brown rounded-full font-medium text-lg hover:bg-white transition-all duration-300"
              >
                {t("hero.cta2")}
              </motion.button>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-16 border-t border-taupe/20"
            >
              {trustBadges.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-wine/10 flex items-center justify-center mb-3">
                    <item.icon className="w-6 h-6 text-wine" />
                  </div>
                  <p className="text-sm text-brown font-medium">{item.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Quick Summary Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="py-24 px-4 sm:px-6 lg:px-8 bg-white"
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div variants={fadeInLeft}>
                <span className="text-wine font-medium mb-4 block">
                  {t("summary.badge")}
                </span>
                <h2 className="font-[--font-georgia] text-4xl text-brown mb-6">
                  {t("summary.title")}
                </h2>
                <p className="text-lg text-taupe mb-8 leading-relaxed">
                  {t("summary.desc")}
                </p>

                <div className="space-y-6">
                  {summaryPoints.map((item, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ x: 10 }}
                      className="flex items-start gap-4"
                    >
                      <div className="w-8 h-8 rounded-full bg-wine/10 flex items-center justify-center shrink-0 mt-1">
                        <CheckCircle2 className="w-5 h-5 text-wine" />
                      </div>
                      <p className="text-brown text-lg">{item}</p>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  variants={scaleIn}
                  className="mt-10 p-6 bg-[--color-cream] rounded-2xl"
                >
                  <div className="flex items-center gap-4">
                    <Clock className="w-8 h-8 text-wine" />
                    <div>
                      <p className="font-medium text-brown">
                        {t("summary.quickTitle")}
                      </p>
                      <p className="text-taupe">
                        {t("summary.quickDesc")}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div variants={fadeInRight} className="relative">
                <div className="relative z-10 bg-linear-to-br from-wine to-rose p-1 rounded-3xl">
                  <div className="bg-white rounded-3xl p-8">
                    <h3 className="font-[--font-georgia] text-2xl text-brown mb-6">
                      {t("summary.wideTitle")}
                    </h3>
                    <div className="space-y-4">
                      {wideReasons.map((item, index) => (
                        <motion.div
                          key={index}
                          whileHover={{ scale: 1.02 }}
                          className="p-4 bg-[--color-cream] rounded-xl"
                        >
                          <p className="text-brown">{item}</p>
                        </motion.div>
                      ))}
                    </div>
                    <p className="mt-6 text-taupe text-sm italic">
                      {t("summary.wideNote")}
                    </p>
                  </div>
                </div>

                {/* Decorative Element */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-rose opacity-20 rounded-full blur-2xl" />
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Best For Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="py-24 px-4 sm:px-6 lg:px-8 bg-[--color-cream]"
        >
          <div className="max-w-7xl mx-auto">
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <span className="text-wine font-medium mb-4 block">
                {t("bestFor.badge")}
              </span>
              <h2 className="font-[--font-georgia] text-4xl text-brown mb-6">
                {t("bestFor.title")}
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {bestForCards.map((item, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={{ y: -10 }}
                  className="group relative"
                >
                  <div
                    className={`absolute inset-0 bg-linear-to-br ${item.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`}
                  />
                  <div className="relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-linear-to-br ${item.color} bg-opacity-10 flex items-center justify-center mb-6`}
                    >
                      <item.icon className="w-8 h-8 text-light" />
                    </div>
                    <h3 className="font-[--font-georgia] text-2xl text-brown mb-4">
                      {item.title}
                    </h3>
                    <p className="text-taupe leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Timeline Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="py-24 px-4 sm:px-6 lg:px-8 bg-white"
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div variants={fadeInLeft}>
                <span className="text-wine font-medium mb-4 block">
                  {t("timeline.badge")}
                </span>
                <h2 className="font-[--font-georgia] text-4xl text-brown mb-6">
                  {t("timeline.title")}
                </h2>
                <p className="text-lg text-taupe mb-8">
                  {t("timeline.desc")}
                </p>

                <div className="space-y-6">
                  {timelineItems.map((item, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ x: 10 }}
                      className="flex items-start gap-4"
                    >
                      <div className="w-12 h-12 rounded-full bg-wine flex items-center justify-center shrink-0 text-white font-medium">
                        {index + 1}
                      </div>
                      <div>
                        <p className="font-[--font-georgia] text-xl text-brown mb-1">
                          {item.time}
                        </p>
                        <p className="text-taupe">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={fadeInRight} className="relative">
                <div className="relative z-10 bg-[--color-cream] p-8 rounded-3xl">
                  <h3 className="font-[--font-georgia] text-2xl text-brown mb-6">
                    {t("timeline.expTitle")}
                  </h3>
                  <p className="text-taupe mb-6 leading-relaxed">
                    {t("timeline.expDesc")}
                  </p>
                  <div className="p-6 bg-white rounded-2xl">
                    <p className="text-brown italic">
                      {t("timeline.expQuote")}
                    </p>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-1/2 -left-6 w-24 h-24 bg-wine opacity-10 rounded-full blur-2xl" />
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-rose opacity-10 rounded-full blur-2xl" />
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Units & Pricing Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="py-24 px-4 sm:px-6 lg:px-8 bg-[--color-cream]"
        >
          <div className="max-w-7xl mx-auto">
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <span className="text-wine font-medium mb-4 block">
                {t("pricing.badge")}
              </span>
              <h2 className="font-[--font-georgia] text-4xl text-brown mb-6">
                {t("pricing.title")}
              </h2>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8">
              <motion.div
                variants={fadeInLeft}
                className="bg-white p-8 rounded-3xl shadow-lg"
              >
                <h3 className="font-[--font-georgia] text-2xl text-brown mb-6">
                  {t("pricing.unitsTitle")}
                </h3>
                <p className="text-taupe mb-6">
                  {t("pricing.unitsDesc")}
                </p>
                <div className="p-6 bg-[--color-cream] rounded-2xl">
                  <p className="text-3xl font-[--font-georgia] text-wine mb-2">
                    {t("pricing.unitsValue")}
                  </p>
                  <p className="text-taupe">
                    {t("pricing.unitsNote")}
                  </p>
                </div>
                <p className="mt-4 text-sm text-taupe italic">
                  {t("pricing.unitsDisclaimer")}
                </p>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                className="bg-white p-8 rounded-3xl shadow-lg"
              >
                <h3 className="font-[--font-georgia] text-2xl text-brown mb-6">
                  {t("pricing.priceTitle")}
                </h3>
                <p className="text-taupe mb-6">
                  {t("pricing.priceDesc")}
                </p>

                <div className="space-y-4 mb-6">
                  {priceItems.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center py-2 border-b border-taupe/10"
                    >
                      <span className="text-brown">{item.label}</span>
                      <span className="font-[--font-georgia] text-wine text-xl">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>

                <p className="text-sm text-taupe italic">
                  {t("pricing.priceNote")}
                </p>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Comparison Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="py-24 px-4 sm:px-6 lg:px-8 bg-white"
        >
          <div className="max-w-7xl mx-auto">
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <span className="text-wine font-medium mb-4 block">
                {t("compare.badge")}
              </span>
              <h2 className="font-[--font-georgia] text-4xl text-brown mb-6">
                {t("compare.title")}
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {comparisons.map((item, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={{ y: -5 }}
                  className="p-6 bg-[--color-cream] rounded-2xl"
                >
                  <h3 className="font-[--font-georgia] text-xl text-brown mb-4">
                    {item.title}
                  </h3>
                  <div className="space-y-3 mb-4">
                    <p className="flex items-start gap-2">
                      <span className="text-wine font-medium">{t("compare.botoxLabel")}</span>
                      <span className="text-taupe">{item.botox}</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="text-wine font-medium">
                        {t("compare.altLabel")}
                      </span>
                      <span className="text-taupe">{item.alt}</span>
                    </p>
                  </div>
                  <p className="text-sm text-brown italic bg-white p-3 rounded-xl">
                    {item.note}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* FAQs Section */}
        <FAQ data={faqs} />

        {/* CTA Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden"
        >
          {/* Decorative Background */}
          <div className="absolute inset-0">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 90, 0],
              }}
              transition={{ duration: 20, repeat: Infinity }}
              className="absolute -top-1/2 -right-1/2 w-full h-full bg-linear-to-br from-wine/5 to-rose/5 rounded-full"
            />
          </div>

          <div className="relative max-w-4xl mx-auto text-center">
            <motion.div variants={fadeInUp}>
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-wine/10 text-wine text-sm font-medium mb-6">
                <Heart className="w-4 h-4 mr-2" />
                {t("cta.badge")}
              </span>
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              className="font-[--font-georgia] text-4xl md:text-5xl text-brown mb-6"
            >
              {t("cta.title")}
              <br />
              <span className="text-wine">{t("cta.titleHighlight")}</span>
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-xl text-taupe mb-10">
              {t("cta.desc")}
            </motion.p>

            <motion.div variants={fadeInUp}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-10 py-5 bg-wine text-white rounded-full font-medium text-xl shadow-2xl hover:shadow-3xl transition-all duration-300 inline-flex items-center"
              >
                {t("cta.button")}
                <ChevronRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="mt-12 flex items-center justify-center gap-8 text-sm text-taupe"
            >
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-wine" />
                <span>{t("cta.location1")}</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-taupe" />
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-wine" />
                <span>{t("cta.location2")}</span>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </main>
    </>
  );
};

export default MasseterBotoxPage;
