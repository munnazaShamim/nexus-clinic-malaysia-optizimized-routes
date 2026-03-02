"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  Shield,
  Clock,
  Heart,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Star,
  Calendar,
  Droplets,
  Users,
  MapPin,
  Quote,
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

const NoseThreadLiftLanding = ({ locale = fallbackLng }: { locale?: string }) => {
  const { t } = useTranslation(locale, "noseThreadLift");

  const faqs = [
    { q: t("faq.q1"), a: t("faq.a1") },
    { q: t("faq.q2"), a: t("faq.a2") },
    { q: t("faq.q3"), a: t("faq.a3") },
    { q: t("faq.q4"), a: t("faq.a4") },
  ];

  const trustBadges = [
    { icon: Shield, text: t("hero.trust1") },
    { icon: Users, text: t("hero.trust2") },
    { icon: MapPin, text: t("hero.trust3") },
  ];

  const idealFor = [t("what.ideal1"), t("what.ideal2"), t("what.ideal3"), t("what.ideal4")];

  const canDo = [t("results.can1"), t("results.can2"), t("results.can3"), t("results.can4")];
  const cannotDo = [t("results.cannot1"), t("results.cannot2"), t("results.cannot3"), t("results.cannot4")];

  const timelineItems = [
    {
      day: t("timeline.day1Label"),
      title: t("timeline.day1Title"),
      description: t("timeline.day1Desc"),
      icon: Sparkles,
      align: "left" as const,
    },
    {
      day: t("timeline.day2Label"),
      title: t("timeline.day2Title"),
      description: t("timeline.day2Desc"),
      icon: Heart,
      align: "right" as const,
    },
    {
      day: t("timeline.day3Label"),
      title: t("timeline.day3Title"),
      description: t("timeline.day3Desc"),
      icon: Star,
      align: "left" as const,
    },
  ];

  return (
    <>
      <main className="bg-cream font-['Inter',sans-serif] overflow-hidden">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center">
          {/* Background Glass Pattern */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-rose/10 rounded-full blur-3xl" />
            <div className="absolute top-60 -left-40 w-80 h-80 bg-wine/10 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="space-y-8"
              >
                <motion.div variants={fadeInUp} className="space-y-4">
                  <div className="flex items-center gap-2 text-wine">
                    <Sparkles className="w-5 h-5" />
                    <span className="text-sm tracking-wider uppercase">
                      {t("hero.badge")}
                    </span>
                  </div>
                  <h1 className="font-['Georgia',serif] text-5xl md:text-6xl lg:text-7xl text-brown leading-tight">
                    {t("hero.title")}
                    <span className="block text-wine">{t("hero.titleHighlight")}</span>
                  </h1>
                  <p className="text-xl text-taupe max-w-lg">
                    {t("hero.desc")}
                  </p>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  className="flex flex-wrap gap-4"
                >
                  <button className="group bg-wine text-white px-8 py-4 rounded-full hover:bg-rose transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl">
                    {t("hero.cta1")}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="border-2 border-wine text-wine px-8 py-4 rounded-full hover:bg-wine hover:text-white transition-all duration-300">
                    {t("hero.cta2")}
                  </button>
                </motion.div>

                {/* Trust Badges */}
                <motion.div
                  variants={fadeInUp}
                  className="grid grid-cols-3 gap-4 pt-8"
                >
                  {trustBadges.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-brown"
                    >
                      <item.icon className="w-5 h-5 text-wine" />
                      <span className="text-sm">{item.text}</span>
                    </div>
                  ))}
                </motion.div>

                {/* Price Range */}
                <motion.div
                  variants={scaleIn}
                  className="bg-light backdrop-blur-sm rounded-2xl p-6 border border-white/50"
                >
                  <p className="text-taupe mb-2">{t("hero.priceLabel")}</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-wine">
                      {t("hero.priceFrom")}
                    </span>
                    <span className="text-brown">-</span>
                    <span className="text-4xl font-bold text-wine">
                      {t("hero.priceTo")}
                    </span>
                  </div>
                </motion.div>
              </motion.div>

              {/* Right Image */}
              <motion.div
                variants={fadeInRight}
                initial="hidden"
                animate="visible"
                className="relative"
              >
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&q=80"
                    alt="Nose Thread Lift Result"
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-brown/30 to-transparent" />

                  {/* Floating Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="absolute bottom-6 left-6 right-6 bg-light/90 backdrop-blur-sm rounded-xl p-4 border border-white/50"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-wine rounded-full flex items-center justify-center">
                        <Heart className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-brown font-semibold">
                          {t("hero.floatTitle")}
                        </p>
                        <p className="text-sm text-taupe">
                          {t("hero.floatDesc")}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-rose/20 rounded-full blur-2xl" />
                <div className="absolute -top-4 -left-4 w-32 h-32 bg-wine/20 rounded-full blur-2xl" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* What is Nose Thread Lift */}
        <section className="py-24 bg-light">
          <div className="container mx-auto px-4 md:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainer}
              className="grid lg:grid-cols-2 gap-16 items-center"
            >
              <motion.div variants={fadeInLeft} className="space-y-6">
                <h2 className="font-['Georgia',serif] text-4xl md:text-5xl text-brown">
                  {t("what.title")}
                  <span className="text-wine block">{t("what.titleHighlight")}</span>
                </h2>
                <p className="text-lg text-taupe leading-relaxed">
                  {t("what.desc")}
                </p>

                {/* Ideal For List */}
                <div className="space-y-4 pt-6">
                  <h3 className="text-brown font-semibold text-lg">
                    {t("what.idealTitle")}
                  </h3>
                  {idealFor.map((item, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      className="flex items-center gap-3"
                    >
                      <div className="w-6 h-6 rounded-full bg-wine/20 flex items-center justify-center">
                        <CheckCircle2 className="w-4 h-4 text-wine" />
                      </div>
                      <span className="text-brown">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                className="grid grid-cols-2 gap-4"
              >
                <div className="space-y-4">
                  <div className="bg-cream rounded-2xl p-6 aspect-square flex flex-col items-center justify-center text-center">
                    <Clock className="w-10 h-10 text-wine mb-3" />
                    <h4 className="text-brown font-semibold">{t("what.stat1Value")}</h4>
                    <p className="text-sm text-taupe">{t("what.stat1Label")}</p>
                  </div>
                  <div className="bg-cream rounded-2xl p-6 aspect-square flex flex-col items-center justify-center text-center">
                    <Calendar className="w-10 h-10 text-wine mb-3" />
                    <h4 className="text-brown font-semibold">{t("what.stat2Value")}</h4>
                    <p className="text-sm text-taupe">{t("what.stat2Label")}</p>
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="bg-cream rounded-2xl p-6 aspect-square flex flex-col items-center justify-center text-center">
                    <Droplets className="w-10 h-10 text-wine mb-3" />
                    <h4 className="text-brown font-semibold">{t("what.stat3Value")}</h4>
                    <p className="text-sm text-taupe">{t("what.stat3Label")}</p>
                  </div>
                  <div className="bg-cream rounded-2xl p-6 aspect-square flex flex-col items-center justify-center text-center">
                    <Shield className="w-10 h-10 text-wine mb-3" />
                    <h4 className="text-brown font-semibold">{t("what.stat4Value")}</h4>
                    <p className="text-sm text-taupe">{t("what.stat4Label")}</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Realistic Results Section */}
        <section className="py-24 bg-cream">
          <div className="container mx-auto px-4 md:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="font-['Georgia',serif] text-4xl md:text-5xl text-brown mb-6">
                {t("results.title")}
                <span className="text-wine block">{t("results.titleHighlight")}</span>
              </h2>
              <p className="text-lg text-taupe">
                {t("results.desc")}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* What it CAN do */}
              <motion.div
                variants={fadeInLeft}
                className="bg-light rounded-3xl p-8 shadow-xl"
              >
                <div className="w-14 h-14 bg-wine/20 rounded-2xl flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-8 h-8 text-wine" />
                </div>
                <h3 className="text-2xl font-semibold text-brown mb-4">
                  {t("results.canTitle")}
                </h3>
                <ul className="space-y-4">
                  {canDo.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <ArrowRight className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                      <span className="text-brown">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* What it CANNOT do */}
              <motion.div
                variants={fadeInRight}
                className="bg-light rounded-3xl p-8 shadow-xl"
              >
                <div className="w-14 h-14 bg-rose/20 rounded-2xl flex items-center justify-center mb-6">
                  <XCircle className="w-8 h-8 text-rose" />
                </div>
                <h3 className="text-2xl font-semibold text-brown mb-4">
                  {t("results.cannotTitle")}
                </h3>
                <ul className="space-y-4">
                  {cannotDo.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <XCircle className="w-5 h-5 text-rose shrink-0 mt-0.5" />
                      <span className="text-brown">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-24 bg-light">
          <div className="container mx-auto px-4 md:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="font-['Georgia',serif] text-4xl md:text-5xl text-brown mb-6">
                {t("timeline.title")}
                <span className="text-wine block">{t("timeline.titleHighlight")}</span>
              </h2>
              <p className="text-lg text-taupe">
                {t("timeline.desc")}
              </p>
            </motion.div>

            <div className="relative max-w-4xl mx-auto">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-linear-to-b from-wine via-rose to-taupe" />

              {timelineItems.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className={`relative mb-12 ${
                    item.align === "left"
                      ? "md:pr-12 md:text-right md:ml-0 md:mr-[50%]"
                      : "md:pl-12 md:ml-[50%]"
                  }`}
                >
                  <div
                    className={`bg-cream rounded-2xl p-6 shadow-lg ${
                      item.align === "left" ? "md:mr-8" : "md:ml-8"
                    }`}
                  >
                    <div
                      className={`flex items-center gap-4 mb-3 ${
                        item.align === "left" ? "md:flex-row-reverse" : ""
                      }`}
                    >
                      <div className="w-12 h-12 bg-wine rounded-full flex items-center justify-center shrink-0">
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <span className="text-wine font-semibold">
                          {item.day}
                        </span>
                        <h3 className="text-xl font-semibold text-brown">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-taupe">{item.description}</p>
                  </div>

                  {/* Timeline Dot */}
                  <div
                    className={`absolute top-1/2 transform -translate-y-1/2 w-4 h-4 bg-wine rounded-full border-4 border-light ${
                      item.align === "left"
                        ? "right-0 md:right-auto md:left-full"
                        : "left-0 md:right-full md:left-auto"
                    }`}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQ data={faqs} />

        {/* CTA Section */}
        <section className="py-24 bg-wine relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-96 h-96 bg-rose rounded-full blur-3xl opacity-30" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-brown rounded-full blur-3xl opacity-30" />
          </div>

          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="max-w-3xl mx-auto text-center text-white"
            >
              <motion.h2
                variants={fadeInUp}
                className="font-['Georgia',serif] text-4xl md:text-5xl mb-6"
              >
                {t("cta.title")}
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-xl text-cream mb-10"
              >
                {t("cta.desc")}
              </motion.p>

              <motion.div
                variants={scaleIn}
                className="flex flex-wrap gap-4 justify-center"
              >
                <button className="group bg-white text-wine px-10 py-5 rounded-full hover:bg-cream transition-all duration-300 flex items-center gap-2 shadow-xl text-lg font-semibold">
                  {t("cta.button1")}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border-2 border-white text-white px-10 py-5 rounded-full hover:bg-white hover:text-wine transition-all duration-300 text-lg font-semibold">
                  {t("cta.button2")}
                </button>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="mt-12 flex items-center justify-center gap-2"
              >
                <Quote className="w-5 h-5 opacity-50" />
                <p className="text-sm opacity-80">
                  {t("cta.quote")}
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

export default NoseThreadLiftLanding;
