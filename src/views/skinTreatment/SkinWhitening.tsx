"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  Sun,
  Droplets,
  Shield,
  Heart,
  Award,
  MapPin,
  ChevronRight,
  Leaf,
  Flower2,
  Sparkle,
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

const SkinWhiteningLanding = ({ locale = fallbackLng }: { locale?: string }) => {
  const { t } = useTranslation(locale, "skinWhitening");

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
    {
      q: t("faq.q4"),
      a: t("faq.a4"),
    },
    {
      q: t("faq.q5"),
      a: t("faq.a5"),
    },
  ];
  return (
    <>
      <main className="min-h-screen bg-light font-['Inter',sans-serif] overflow-hidden">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-96 h-96 bg-rose rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-wine rounded-full filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="max-w-5xl mx-auto"
            >
              {/* Tag */}
              <motion.div
                variants={fadeInUp}
                className="flex justify-center mb-8"
              >
                <span className="inline-flex items-center gap-2 bg-cream text-brown px-4 py-2 rounded-full text-sm font-medium border border-taupe/20">
                  <Sparkle className="w-4 h-4 text-rose" />
                  {t("hero.badge")}
                  <Sparkle className="w-4 h-4 text-rose" />
                </span>
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                variants={fadeInUp}
                className="text-4xl sm:text-5xl lg:text-7xl font-['Georgia',serif] text-center mb-6"
              >
                <span className="text-brown">{t("hero.title1")}</span>
                <br />
                <span className="text-wine italic">{t("hero.title2")}</span>
              </motion.h1>

              {/* Supporting Text */}
              <motion.p
                variants={fadeInUp}
                className="text-lg sm:text-xl text-taupe text-center max-w-2xl mx-auto mb-12 leading-relaxed"
              >
                {t("hero.desc")}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
              >
                <button className="group relative px-8 py-4 bg-wine text-white rounded-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-wine/20">
                  <span className="relative z-10 flex items-center justify-center gap-2 font-medium">
                    {t("hero.btn1")}
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-rose transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                </button>
                <button className="px-8 py-4 border-2 border-taupe text-brown rounded-full hover:bg-cream transition-all duration-300 font-medium backdrop-blur-sm bg-white/30">
                  {t("hero.btn2")}
                </button>
              </motion.div>

              {/* Trust Bar */}
              <motion.div
                variants={scaleIn}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12"
              >
                {[
                  { icon: MapPin, text: t("hero.trust1") },
                  { icon: Award, text: t("hero.trust2") },
                  { icon: Shield, text: t("hero.trust3") },
                  { icon: Sparkles, text: t("hero.trust4") },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 bg-white/70 backdrop-blur-sm rounded-xl border border-cream hover:border-rose transition-all duration-300 group"
                  >
                    <div className="p-2 bg-cream rounded-full group-hover:bg-rose group-hover:text-white transition-all duration-300">
                      <item.icon className="w-4 h-4 text-brown group-hover:text-white" />
                    </div>
                    <span className="text-sm text-brown font-medium">
                      {item.text}
                    </span>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-taupe rounded-full flex justify-center">
              <div className="w-1 h-2 bg-wine rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </section>

        {/* Understanding Section */}
        <section className="py-24 bg-cream relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={staggerContainer}
              className="max-w-4xl mx-auto"
            >
              <motion.div variants={fadeInUp} className="text-center mb-16">
                <span className="text-wine font-medium mb-4 block">
                  {t("understanding.badge")}
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-['Georgia',serif] text-brown mb-6">
                  {t("understanding.title")}
                </h2>
                <p className="text-taupe text-lg">
                  {t("understanding.desc")}
                </p>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                {[
                  t("understanding.concern1"),
                  t("understanding.concern2"),
                  t("understanding.concern3"),
                  t("understanding.concern4"),
                  t("understanding.concern5"),
                  t("understanding.concern6"),
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 bg-white rounded-xl border border-taupe/10 hover:border-rose transition-all duration-300 group"
                  >
                    <div className="w-2 h-2 bg-wine rounded-full group-hover:scale-150 transition-transform"></div>
                    <span className="text-brown">{item}</span>
                  </div>
                ))}
              </motion.div>

              <motion.p
                variants={fadeInUp}
                className="mt-12 text-center text-brown italic bg-white p-8 rounded-2xl border-l-4 border-wine"
              >
                {t("understanding.quote")}
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Treatments Section */}
        <section className="py-24 bg-light">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={staggerContainer}
              className="max-w-6xl mx-auto"
            >
              <motion.div variants={fadeInUp} className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-['Georgia',serif] text-brown mb-4">
                  {t("treatments.title")}
                </h2>
                <p className="text-taupe text-lg max-w-2xl mx-auto">
                  {t("treatments.desc")}
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    icon: Sun,
                    title: t("treatments.t1Title"),
                    description: t("treatments.t1Desc"),
                    bestFor: t("treatments.t1Best"),
                    color: "from-rose to-wine",
                  },
                  {
                    icon: Droplets,
                    title: t("treatments.t2Title"),
                    description: t("treatments.t2Desc"),
                    bestFor: t("treatments.t2Best"),
                    color: "from-wine to-rose",
                  },
                  {
                    icon: Flower2,
                    title: t("treatments.t3Title"),
                    description: t("treatments.t3Desc"),
                    bestFor: t("treatments.t3Best"),
                    color: "from-rose to-brown",
                  },
                  {
                    icon: Leaf,
                    title: t("treatments.t4Title"),
                    description: t("treatments.t4Desc"),
                    bestFor: t("treatments.t4Best"),
                    color: "from-brown to-wine",
                  },
                  {
                    icon: Shield,
                    title: t("treatments.t5Title"),
                    description: t("treatments.t5Desc"),
                    bestFor: t("treatments.t5Best"),
                    color: "from-wine to-taupe",
                  },
                  {
                    icon: Heart,
                    title: t("treatments.t6Title"),
                    description: t("treatments.t6Desc"),
                    bestFor: t("treatments.t6Best"),
                    color: "from-taupe to-rose",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={scaleIn}
                    whileHover={{ y: -10 }}
                    className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                  >
                    <div
                      className={`absolute inset-0 bg-linear-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                    ></div>
                    <div className="p-8">
                      <div className="w-16 h-16 bg-cream rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <item.icon className="w-8 h-8 text-wine" />
                      </div>
                      <h3 className="text-xl font-['Georgia',serif] text-brown mb-3">
                        {item.title}
                      </h3>
                      <p className="text-taupe mb-4">{item.description}</p>
                      <p className="text-sm text-wine font-medium">
                        {t("treatments.bestForLabel")} {item.bestFor}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why KL Section */}
        <section className="py-24 bg-cream relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-64 h-64 bg-rose rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-64 h-64 bg-wine rounded-full filter blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={staggerContainer}
              className="max-w-6xl mx-auto"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div variants={fadeInLeft}>
                  <span className="text-wine font-medium mb-4 block">
                    {t("whyKL.badge")}
                  </span>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-['Georgia',serif] text-brown mb-6">
                    {t("whyKL.title")}
                  </h2>
                  <p className="text-taupe text-lg mb-8">
                    {t("whyKL.desc")}
                  </p>

                  <div className="space-y-4">
                    {[
                      t("whyKL.cause1"),
                      t("whyKL.cause2"),
                      t("whyKL.cause3"),
                      t("whyKL.cause4"),
                      t("whyKL.cause5"),
                      t("whyKL.cause6"),
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        variants={fadeInRight}
                        className="flex items-center gap-3 p-3 bg-white/50 backdrop-blur-sm rounded-lg border border-taupe/10"
                      >
                        <div className="w-1.5 h-1.5 bg-wine rounded-full"></div>
                        <span className="text-brown">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                <motion.div variants={fadeInRight} className="relative">
                  <div className="absolute inset-0 bg-linear-to-r from-rose to-wine rounded-3xl transform rotate-3 opacity-20"></div>
                  <div className="relative bg-white p-8 rounded-3xl shadow-2xl">
                    <h3 className="text-2xl font-['Georgia',serif] text-brown mb-6">
                      {t("whyKL.perfectForTitle")}
                    </h3>
                    <div className="space-y-4">
                      {[
                        t("whyKL.perfect1"),
                        t("whyKL.perfect2"),
                        t("whyKL.perfect3"),
                        t("whyKL.perfect4"),
                        t("whyKL.perfect5"),
                        t("whyKL.perfect6"),
                      ].map((item, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-cream rounded-full flex items-center justify-center">
                            <span className="text-wine font-bold">
                              {index + 1}
                            </span>
                          </div>
                          <span className="text-brown">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Price Comparison */}
        <section className="py-24 bg-light">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={staggerContainer}
              className="max-w-5xl mx-auto"
            >
              <motion.div variants={fadeInUp} className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-['Georgia',serif] text-brown mb-4">
                  {t("pricing.title")}
                </h2>
                <p className="text-taupe text-lg">
                  {t("pricing.desc")}
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    name: t("pricing.p1Name"),
                    price: t("pricing.p1Price"),
                    icon: Droplets,
                    per: t("pricing.p1Per"),
                    features: [
                      t("pricing.p1F1"),
                      t("pricing.p1F2"),
                      t("pricing.p1F3"),
                    ],
                  },
                  {
                    name: t("pricing.p2Name"),
                    price: t("pricing.p2Price"),
                    icon: Sun,
                    per: t("pricing.p2Per"),
                    features: [
                      t("pricing.p2F1"),
                      t("pricing.p2F2"),
                      t("pricing.p2F3"),
                    ],
                    popular: true,
                  },
                  {
                    name: t("pricing.p3Name"),
                    price: t("pricing.p3Price"),
                    icon: Leaf,
                    per: t("pricing.p3Per"),
                    features: [
                      t("pricing.p3F1"),
                      t("pricing.p3F2"),
                      t("pricing.p3F3"),
                    ],
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={scaleIn}
                    whileHover={{ y: -10 }}
                    className={`relative bg-white rounded-2xl overflow-hidden shadow-xl ${
                      item.popular ? "ring-2 ring-wine" : ""
                    }`}
                  >
                    {item.popular && (
                      <div className="absolute top-5 right-5 bg-wine text-white px-3 py-1 rounded-full text-xs font-medium">
                        {t("pricing.p2Popular")}
                      </div>
                    )}
                    <div className="p-8">
                      <div className="w-16 h-16 bg-cream rounded-2xl flex items-center justify-center mb-6">
                        <item.icon className="w-8 h-8 text-wine" />
                      </div>
                      <h3 className="text-xl font-['Georgia',serif] text-brown mb-2">
                        {item.name}
                      </h3>
                      <div className="mb-4">
                        <span className="text-3xl font-bold text-wine">
                          {item.price}
                        </span>
                        <span className="text-taupe text-sm ml-1">
                          /{item.per}
                        </span>
                      </div>
                      <ul className="space-y-3">
                        {item.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-center gap-2 text-brown"
                          >
                            <div className="w-1.5 h-1.5 bg-rose rounded-full"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.p
                variants={fadeInUp}
                className="text-center mt-8 text-taupe text-sm"
              >
                {t("pricing.disclaimer")}
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQ data={faqs} />

        {/* Final CTA */}
        <section className="py-24 bg-linear-to-br from-wine to-rose relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl opacity-10"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-brown rounded-full filter blur-3xl opacity-10"></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={staggerContainer}
              className="max-w-3xl mx-auto text-center"
            >
              <motion.div variants={scaleIn} className="mb-8">
                <div className="inline-flex p-3 bg-white/20 rounded-full backdrop-blur-sm">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
              </motion.div>

              <motion.h2
                variants={fadeInUp}
                className="text-3xl sm:text-4xl lg:text-5xl font-['Georgia',serif] text-white mb-6"
              >
                {t("cta.title")}
              </motion.h2>

              <motion.p
                variants={fadeInUp}
                className="text-xl text-white/90 mb-10"
              >
                {t("cta.desc")}
              </motion.p>

              <motion.div variants={fadeInUp}>
                <button className="group relative px-12 py-5 bg-white text-wine rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 font-medium text-lg">
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {t("cta.bookBtn")}
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-cream transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                </button>
              </motion.div>

              <motion.p
                variants={fadeInUp}
                className="mt-6 text-white/70 text-sm"
              >
                {t("cta.address")}
              </motion.p>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

export default SkinWhiteningLanding;
