"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Clock,
  Droplets,
  AlertCircle,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Calendar,
  MapPin,
  Users,
  Sparkles,
  Target,
  Brain,
  Heart,
  Activity,
  Pill,
  FlaskConical,
  Scale,
  Gem,
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

const FinasterideLanding = ({
  locale = fallbackLng,
}: {
  locale?: string;
}) => {
  const { t } = useTranslation(locale, "finasteride");

  const faqs = [
    { q: t("faq.q1"), a: t("faq.a1") },
    { q: t("faq.q2"), a: t("faq.a2") },
    { q: t("faq.q3"), a: t("faq.a3") },
    { q: t("faq.q4"), a: t("faq.a4") },
    { q: t("faq.q5"), a: t("faq.a5") },
  ];

  return (
    <>
      <main className="min-h-screen bg-cream font-[--font-inter] overflow-hidden">
        {/* Hero Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="relative min-h-screen flex items-center"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-72 h-72 bg-wine rounded-full filter blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-rose rounded-full filter blur-3xl" />
          </div>

          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInLeft} className="space-y-8">
                <div className="inline-flex items-center gap-2 bg-glass backdrop-blur-sm px-4 py-2 rounded-full border border-taupe/20">
                  <Gem className="w-4 h-4 text-wine" />
                  <span className="text-sm text-brown">
                    {t("hero.badge")}
                  </span>
                </div>

                <h1 className="font-[--font-georgia] text-5xl md:text-7xl text-brown leading-tight">
                  {t("hero.title1")}
                  <span className="block text-wine">{t("hero.title2")}</span>
                </h1>

                <p className="text-xl text-taupe max-w-lg">
                  {t("hero.desc")}
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group bg-wine text-white px-8 py-4 rounded-full text-lg font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-shadow"
                  >
                    {t("hero.bookBtn")}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-wine text-wine px-8 py-4 rounded-full text-lg font-semibold hover:bg-wine hover:text-white transition-colors"
                  >
                    {t("hero.learnBtn")}
                  </motion.button>
                </div>

                {/* Trust Indicators */}
                <div className="grid grid-cols-3 gap-4 pt-8">
                  {[
                    { icon: Shield, text: t("hero.trust1") },
                    { icon: MapPin, text: t("hero.trust2") },
                    { icon: Users, text: t("hero.trust3") },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      variants={scaleIn}
                      className="flex flex-col items-center text-center space-y-2"
                    >
                      <item.icon className="w-6 h-6 text-rose" />
                      <span className="text-sm text-brown">{item.text}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                className="relative hidden lg:block"
              >
                <div className="relative w-full h-150 rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80"
                    alt="Nexus Clinic KL Interior"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-brown/50 to-transparent" />
                </div>

                {/* Floating Card */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                  className="absolute -bottom-10 -left-10 bg-glass backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/20"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-wine rounded-full flex items-center justify-center">
                      <Pill className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-brown">{t("hero.startingFrom")}</p>
                      <p className="text-2xl font-bold text-wine">
                        {t("hero.price")}
                        <span className="text-sm font-normal text-taupe">
                          {t("hero.perMonth")}
                        </span>
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* How Finasteride Works */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="py-24 bg-[--color-light] relative"
        >
          <div className="container mx-auto px-4 md:px-8">
            <motion.div
              variants={fadeInUp}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="font-[--font-georgia] text-4xl md:text-5xl text-brown mb-6">
                {t("howItWorks.title")}
              </h2>
              <p className="text-xl text-taupe">
                {t("howItWorks.desc")}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Droplets,
                  title: t("howItWorks.h1Title"),
                  description: t("howItWorks.h1Desc"),
                },
                {
                  icon: Target,
                  title: t("howItWorks.h2Title"),
                  description: t("howItWorks.h2Desc"),
                },
                {
                  icon: Sparkles,
                  title: t("howItWorks.h3Title"),
                  description: t("howItWorks.h3Desc"),
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={{ y: -10 }}
                  className="bg-white/50 backdrop-blur-sm p-8 rounded-3xl border border-taupe/10 hover:border-wine/30 transition-all"
                >
                  <div className="w-16 h-16 bg-wine/10 rounded-2xl flex items-center justify-center mb-6">
                    <item.icon className="w-8 h-8 text-wine" />
                  </div>
                  <h3 className="text-2xl font-[--font-georgia] text-brown mb-3">
                    {item.title}
                  </h3>
                  <p className="text-taupe">{item.description}</p>
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
          className="py-24 bg-cream"
        >
          <div className="container mx-auto px-4 md:px-8">
            <motion.div
              variants={fadeInUp}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="font-[--font-georgia] text-4xl md:text-5xl text-brown mb-6">
                {t("timeline.title")}
              </h2>
              <p className="text-xl text-taupe">
                {t("timeline.desc")}
              </p>
            </motion.div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-linear-to-b from-wine to-rose hidden lg:block" />

              <div className="space-y-12 lg:space-y-0">
                {[
                  {
                    time: t("timeline.t1Time"),
                    title: t("timeline.t1Title"),
                    description: t("timeline.t1Desc"),
                    icon: Clock,
                    position: "left",
                  },
                  {
                    time: t("timeline.t2Time"),
                    title: t("timeline.t2Title"),
                    description: t("timeline.t2Desc"),
                    icon: Activity,
                    position: "right",
                  },
                  {
                    time: t("timeline.t3Time"),
                    title: t("timeline.t3Title"),
                    description: t("timeline.t3Desc"),
                    icon: Calendar,
                    position: "left",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className={`flex flex-col ${item.position === "right" ? "lg:items-end" : ""}`}
                  >
                    <div
                      className={`lg:w-1/2 ${item.position === "right" ? "lg:ml-auto" : ""}`}
                    >
                      <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow relative">
                        {/* Timeline Dot */}
                        <div
                          className="absolute top-1/2 -translate-y-1/2 hidden lg:block w-4 h-4 bg-wine rounded-full
                        ${item.position === 'left' ? '-right-8' : '-left-8'}"
                        />

                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 bg-wine/10 rounded-xl flex items-center justify-center">
                            <item.icon className="w-6 h-6 text-wine" />
                          </div>
                          <span className="text-sm font-semibold text-wine">
                            {item.time}
                          </span>
                        </div>
                        <h3 className="text-2xl font-[--font-georgia] text-brown mb-2">
                          {item.title}
                        </h3>
                        <p className="text-taupe">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Good Fit / Not Good Fit */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="py-24 bg-[--color-light]"
        >
          <div className="container mx-auto px-4 md:px-8">
            <motion.div
              variants={fadeInUp}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="font-[--font-georgia] text-4xl md:text-5xl text-brown mb-6">
                {t("fit.title")}
              </h2>
              <p className="text-xl text-taupe">
                {t("fit.desc")}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Good Fit */}
              <motion.div
                variants={scaleIn}
                whileHover={{ scale: 1.02 }}
                className="bg-white p-8 rounded-3xl shadow-lg border-2 border-green-100"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-[--font-georgia] text-brown">
                    {t("fit.goodTitle")}
                  </h3>
                </div>
                <ul className="space-y-4">
                  {[
                    t("fit.g1"),
                    t("fit.g2"),
                    t("fit.g3"),
                    t("fit.g4"),
                  ].map((text, index) => (
                    <motion.li
                      key={index}
                      variants={fadeInLeft}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-1" />
                      <span className="text-brown">{text}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Not Good Fit */}
              <motion.div
                variants={scaleIn}
                whileHover={{ scale: 1.02 }}
                className="bg-white p-8 rounded-3xl shadow-lg border-2 border-red-100"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <XCircle className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="text-2xl font-[--font-georgia] text-brown">
                    {t("fit.notTitle")}
                  </h3>
                </div>
                <ul className="space-y-4">
                  {[
                    t("fit.n1"),
                    t("fit.n2"),
                    t("fit.n3"),
                    t("fit.n4"),
                  ].map((text, index) => (
                    <motion.li
                      key={index}
                      variants={fadeInRight}
                      className="flex items-start gap-3"
                    >
                      <XCircle className="w-5 h-5 text-red-600 shrink-0 mt-1" />
                      <span className="text-brown">{text}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Side Effects & Safety */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="py-24 bg-cream"
        >
          <div className="container mx-auto px-4 md:px-8">
            <motion.div
              variants={fadeInUp}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <div className="inline-flex items-center gap-2 bg-wine/10 px-4 py-2 rounded-full mb-4">
                <Heart className="w-4 h-4 text-wine" />
                <span className="text-sm text-brown">{t("safety.badge")}</span>
              </div>
              <h2 className="font-[--font-georgia] text-4xl md:text-5xl text-brown mb-6">
                {t("safety.title")}
              </h2>
              <p className="text-xl text-taupe">
                {t("safety.desc")}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  icon: Activity,
                  title: t("safety.se1Title"),
                  description: t("safety.se1Desc"),
                },
                {
                  icon: Brain,
                  title: t("safety.se2Title"),
                  description: t("safety.se2Desc"),
                },
                {
                  icon: FlaskConical,
                  title: t("safety.se3Title"),
                  description: t("safety.se3Desc"),
                },
                {
                  icon: AlertCircle,
                  title: t("safety.se4Title"),
                  description: t("safety.se4Desc"),
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={{ y: -5 }}
                  className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl border border-taupe/20"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-wine/10 rounded-xl flex items-center justify-center shrink-0">
                      <item.icon className="w-6 h-6 text-wine" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-brown mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-taupe">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={fadeInUp}
              className="mt-8 p-6 bg-glass backdrop-blur-sm rounded-2xl border border-wine/20 max-w-4xl mx-auto"
            >
              <div className="flex items-start gap-4">
                <Scale className="w-6 h-6 text-wine shrink-0 mt-1" />
                <p className="text-sm text-brown">
                  <span className="font-semibold">{t("safety.noteLabel")}</span>{" "}
                  {t("safety.noteText")}
                </p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Cost Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="py-24 bg-[--color-light]"
        >
          <div className="container mx-auto px-4 md:px-8">
            <motion.div
              variants={fadeInUp}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="font-[--font-georgia] text-4xl md:text-5xl text-brown mb-6">
                {t("cost.title")}
              </h2>
              <p className="text-xl text-taupe">{t("cost.desc")}</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                {
                  title: t("cost.p1Title"),
                  price: t("cost.p1Price"),
                  period: t("cost.p1Period"),
                  features: [
                    t("cost.p1F1"),
                    t("cost.p1F2"),
                    t("cost.p1F3"),
                  ],
                  popular: false,
                },
                {
                  title: t("cost.p2Title"),
                  price: t("cost.p2Price"),
                  period: t("cost.p2Period"),
                  features: [
                    t("cost.p2F1"),
                    t("cost.p2F2"),
                    t("cost.p2F3"),
                  ],
                  popular: true,
                },
                {
                  title: t("cost.p3Title"),
                  price: t("cost.p3Price"),
                  period: t("cost.p3Period"),
                  features: [
                    t("cost.p3F1"),
                    t("cost.p3F2"),
                    t("cost.p3F3"),
                  ],
                  popular: false,
                },
              ].map((plan, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={{ y: -10 }}
                  className={`relative bg-white rounded-3xl p-8 shadow-lg ${
                    plan.popular
                      ? "border-2 border-wine scale-105"
                      : "border border-taupe/20"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-wine text-white px-4 py-1 rounded-full text-sm">
                      {t("cost.popular")}
                    </div>
                  )}
                  <h3 className="text-xl font-[--font-georgia] text-brown mb-4">
                    {plan.title}
                  </h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-wine">
                      {plan.price}
                    </span>
                    <span className="text-taupe">/{plan.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-rose" />
                        <span className="text-sm text-brown">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-3 rounded-full font-semibold transition-colors ${
                      plan.popular
                        ? "bg-wine text-white hover:bg-rose"
                        : "border-2 border-wine text-wine hover:bg-wine hover:text-white"
                    }`}
                  >
                    {t("cost.selectBtn")}
                  </motion.button>
                </motion.div>
              ))}
            </div>

            <motion.p
              variants={fadeInUp}
              className="text-center text-sm text-taupe mt-8"
            >
              {t("cost.priceNote")}
            </motion.p>
          </div>
        </motion.section>

        {/* FAQ Section */}
        <FAQ data={faqs} />

        {/* CTA Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="py-24 bg-linear-to-br from-wine to-rose relative overflow-hidden"
        >
          {/* Decorative Elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full filter blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full filter blur-3xl" />
          </div>

          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <motion.div
              variants={fadeInUp}
              className="text-center max-w-3xl mx-auto text-white"
            >
              <h2 className="font-[--font-georgia] text-4xl md:text-5xl mb-6">
                {t("cta.title")}
              </h2>
              <p className="text-xl mb-8 text-white/90">
                {t("cta.desc")}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-wine px-8 py-4 rounded-full text-lg font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-shadow"
                >
                  {t("cta.bookBtn")}
                  <ArrowRight className="w-5 h-5" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-wine transition-colors"
                >
                  {t("cta.locationBtn")}
                </motion.button>
              </div>

              <div className="mt-12 flex items-center justify-center gap-2 text-white/80">
                <MapPin className="w-5 h-5" />
                <span>{t("cta.address")}</span>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </main>
    </>
  );
};

export default FinasterideLanding;
