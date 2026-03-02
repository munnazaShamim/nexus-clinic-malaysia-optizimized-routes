"use client";

import { motion } from "framer-motion";
import {
  Shield,
  ArrowRight,
  MapPin,
  Activity,
  Zap,
  AlertCircle,
  Scissors,
  Flame,
  Droplets,
  Syringe,
  Gem,
  Leaf,
  Calendar,
  Users,
  Phone,
  Mail,
  HeartPulse,
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

const HairLossTreatment = ({ locale = fallbackLng }: { locale?: string }) => {
  const { t } = useTranslation(locale, "hairLoss");

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
    {
      q: t("faq.q6"),
      a: t("faq.a6"),
    },
  ];
  return (
    <>
      <main className="min-h-screen bg-light font-[--font-inter]">
        {/* Hero Section */}
        <motion.section
          initial="initial"
          whileInView="visible"
          variants={staggerContainer}
          className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cream"
        >
          {/* Decorative Elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-wine filter blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-rose filter blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInLeft} className="space-y-8">
                <div className="inline-flex items-center space-x-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Shield className="w-4 h-4 text-wine" />
                  <span className="text-sm font-medium text-brown">
                    {t("hero.badge")}
                  </span>
                </div>

                <h1 className="font-[--font-georgia] text-5xl lg:text-7xl font-bold leading-tight">
                  {t("hero.title1")}
                  <span className="block text-wine">{t("hero.title2")}</span>
                  <span className="block text-3xl lg:text-4xl text-taupe mt-4">
                    {t("hero.title3")}
                  </span>
                </h1>

                <p className="text-xl text-brown max-w-lg leading-relaxed">
                  {t("hero.desc")}
                </p>

                <div className="flex flex-wrap gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-wine text-white px-8 py-4 rounded-full font-medium flex items-center space-x-2 hover:bg-rose transition-colors"
                  >
                    <span>{t("hero.startBtn")}</span>
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white/70 backdrop-blur-sm text-brown px-8 py-4 rounded-full font-medium border border-taupe/20 hover:bg-white transition-all"
                  >
                    {t("hero.storiesBtn")}
                  </motion.button>
                </div>
              </motion.div>

              <motion.div variants={fadeInRight} className="relative">
                <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/50">
                  <h3 className="text-2xl font-[--font-georgia] font-bold text-brown mb-6">
                    {t("hero.qaTitle")}
                  </h3>
                  <div className="space-y-6">
                    {[
                      {
                        q: t("hero.qa1Q"),
                        a: t("hero.qa1A"),
                      },
                      {
                        q: t("hero.qa2Q"),
                        a: t("hero.qa2A"),
                      },
                      {
                        q: t("hero.qa3Q"),
                        a: t("hero.qa3A"),
                      },
                    ].map((item, idx) => (
                      <motion.div
                        key={idx}
                        variants={scaleIn}
                        className="space-y-2"
                      >
                        <h4 className="font-semibold text-wine flex items-center space-x-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-wine"></span>
                          <span>{item.q}</span>
                        </h4>
                        <p className="text-brown pl-4">{item.a}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Trust Badges */}
                <div className="absolute -bottom-8 -left-8 bg-brown text-white p-6 rounded-2xl shadow-xl">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-cream" />
                    <span className="text-sm">{t("hero.location")}</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Trust Section */}
        <motion.section
          initial="initial"
          whileInView="visible"
          variants={staggerContainer}
          className="py-24 bg-white"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeInUp}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-[--font-georgia] font-bold text-brown mb-6">
                {t("trust.title")}
              </h2>
              <p className="text-xl text-taupe">
                {t("trust.desc")}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Calendar,
                  label: t("trust.t1Label"),
                  value: t("trust.t1Value"),
                  color: "text-wine",
                },
                {
                  icon: Users,
                  label: t("trust.t2Label"),
                  value: t("trust.t2Value"),
                  color: "text-rose",
                },
                {
                  icon: Shield,
                  label: t("trust.t3Label"),
                  value: t("trust.t3Value"),
                  color: "text-brown",
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={scaleIn}
                  whileHover={{ y: -10 }}
                  className="bg-cream p-8 rounded-3xl text-center group hover:shadow-2xl transition-all"
                >
                  <div
                    className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-white flex items-center justify-center ${item.color} group-hover:scale-110 transition-transform`}
                  >
                    <item.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-[--font-georgia] font-bold text-brown mb-2">
                    {item.label}
                  </h3>
                  <p className="text-xl text-taupe">{item.value}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={fadeInUp}
              className="mt-12 bg-brown text-white p-8 rounded-3xl"
            >
              <div className="flex flex-wrap items-center justify-between gap-6">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-6 h-6 text-cream" />
                  <span className="text-lg">
                    {t("trust.address")}
                  </span>
                </div>
                <div className="flex items-center space-x-6">
                  <Phone className="w-5 h-5 text-cream" />
                  <Mail className="w-5 h-5 text-cream" />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Causes Section */}
        <motion.section
          initial="initial"
          whileInView="visible"
          variants={staggerContainer}
          className="py-24"
          style={{ backgroundColor: "var(--color-cream)" }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div variants={fadeInLeft} className="max-w-3xl mb-16">
              <span className="text-wine font-semibold tracking-wider text-sm uppercase">
                {t("causes.badge")}
              </span>
              <h2 className="text-4xl lg:text-5xl font-[--font-georgia] font-bold text-brown mt-4 mb-6">
                {t("causes.title1")}
                <br />
                {t("causes.title2")}
              </h2>
              <p className="text-xl text-taupe">
                {t("causes.desc")}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Activity,
                  title: t("causes.c1Title"),
                  desc: t("causes.c1Desc"),
                  color: "from-wine to-rose",
                },
                {
                  icon: Zap,
                  title: t("causes.c2Title"),
                  desc: t("causes.c2Desc"),
                  color: "from-rose to-taupe",
                },
                {
                  icon: AlertCircle,
                  title: t("causes.c3Title"),
                  desc: t("causes.c3Desc"),
                  color: "from-taupe to-brown",
                },
                {
                  icon: Scissors,
                  title: t("causes.c4Title"),
                  desc: t("causes.c4Desc"),
                  color: "from-wine to-brown",
                },
                {
                  icon: Flame,
                  title: t("causes.c5Title"),
                  desc: t("causes.c5Desc"),
                  color: "from-rose to-brown",
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={scaleIn}
                  whileHover={{ scale: 1.02, rotateY: 5 }}
                  className={`bg-linear-to-br ${item.color} p-8 rounded-3xl text-white backdrop-blur-sm bg-opacity-90`}
                >
                  <item.icon className="w-10 h-10 mb-4 opacity-80" />
                  <h3 className="text-2xl font-[--font-georgia] font-bold mb-2">
                    {item.title}
                  </h3>
                  <p className="opacity-90">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Treatments Section */}
        <motion.section
          initial="initial"
          whileInView="visible"
          variants={staggerContainer}
          className="py-24 bg-white"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeInUp}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-[--font-georgia] font-bold text-brown mb-6">
                {t("treatments.title")}
              </h2>
              <p className="text-xl text-taupe">
                {t("treatments.desc")}
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8">
              {[
                {
                  icon: Droplets,
                  title: t("treatments.tr1Title"),
                  desc: t("treatments.tr1Desc"),
                  price: t("treatments.tr1Price"),
                },
                {
                  icon: Syringe,
                  title: t("treatments.tr2Title"),
                  desc: t("treatments.tr2Desc"),
                  price: t("treatments.tr2Price"),
                },
                {
                  icon: Zap,
                  title: t("treatments.tr3Title"),
                  desc: t("treatments.tr3Desc"),
                  price: t("treatments.tr3Price"),
                },
                {
                  icon: Gem,
                  title: t("treatments.tr4Title"),
                  desc: t("treatments.tr4Desc"),
                  price: t("treatments.tr4Price"),
                },
                {
                  icon: Scissors,
                  title: t("treatments.tr5Title"),
                  desc: t("treatments.tr5Desc"),
                  price: t("treatments.tr5Price"),
                },
                {
                  icon: Leaf,
                  title: t("treatments.tr6Title"),
                  desc: t("treatments.tr6Desc"),
                  price: t("treatments.tr6Price"),
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInLeft}
                  whileHover={{ x: 10 }}
                  className="bg-cream p-8 rounded-3xl flex items-start space-x-6 group"
                >
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-wine group-hover:scale-110 transition-transform">
                    <item.icon className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-[--font-georgia] font-bold text-brown mb-2">
                      {item.title}
                    </h3>
                    <p className="text-taupe mb-3">{item.desc}</p>
                    <p className="text-wine font-semibold">{item.price}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Timeline */}
            <motion.div
              variants={fadeInUp}
              className="mt-16 bg-linear-to-r from-wine to-rose p-12 rounded-3xl text-white"
            >
              <h3 className="text-3xl font-[--font-georgia] font-bold mb-8 text-center">
                {t("treatments.timelineTitle")}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { month: 1, desc: t("treatments.m1Desc") },
                  { month: 2, desc: t("treatments.m2Desc") },
                  { month: 3, desc: t("treatments.m3Desc") },
                  { month: 9, desc: t("treatments.m9Desc") },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.05 }}
                    className="text-center"
                  >
                    <div className="text-4xl font-bold mb-2">
                      {t("treatments.month")} {item.month}
                    </div>
                    <p className="opacity-90">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Cost Section */}
        <motion.section
          initial="initial"
          whileInView="visible"
          variants={staggerContainer}
          className="py-24"
          style={{ backgroundColor: "var(--color-cream)" }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeInRight}
              className="max-w-3xl mx-auto text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-[--font-georgia] font-bold text-brown mb-6">
                {t("cost.title")}
              </h2>
              <p className="text-xl text-taupe">
                {t("cost.desc")}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                {
                  title: t("cost.c1Title"),
                  range: t("cost.c1Range"),
                  per: t("cost.c1Per"),
                  icon: Droplets,
                },
                {
                  title: t("cost.c2Title"),
                  range: t("cost.c2Range"),
                  per: t("cost.c2Per"),
                  icon: Scissors,
                },
                {
                  title: t("cost.c3Title"),
                  range: t("cost.c3Range"),
                  per: t("cost.c3Per"),
                  icon: HeartPulse,
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={scaleIn}
                  whileHover={{ y: -10 }}
                  className="bg-white p-8 rounded-3xl text-center shadow-xl"
                >
                  <item.icon className="w-12 h-12 mx-auto mb-4 text-wine" />
                  <h3 className="text-2xl font-[--font-georgia] font-bold text-brown mb-2">
                    {item.title}
                  </h3>
                  <p className="text-3xl font-bold text-wine mb-1">
                    {item.range}
                  </p>
                  <p className="text-taupe">{item.per}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* FAQ Section */}
        <FAQ data={faqs} />

        {/* CTA Section */}
        <motion.section
          initial="initial"
          whileInView="visible"
          variants={staggerContainer}
          className="py-24 relative overflow-hidden"
          style={{ backgroundColor: "var(--color-brown)" }}
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-linear-to-r from-wine to-rose"></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              variants={fadeInUp}
              className="max-w-3xl mx-auto text-center text-white"
            >
              <h2 className="text-4xl lg:text-5xl font-[--font-georgia] font-bold mb-6">
                {t("cta.title")}
              </h2>
              <p className="text-xl mb-8 opacity-90">
                {t("cta.desc")}
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-brown px-10 py-5 rounded-full text-lg font-semibold inline-flex items-center space-x-3 hover:bg-cream transition-colors"
              >
                <span>{t("cta.bookBtn")}</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>

              <div className="mt-12 flex items-center justify-center space-x-8">
                <div className="flex items-center space-x-2">
                  <Phone className="w-5 h-5" />
                  <span>{t("cta.phone")}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-5 h-5" />
                  <span>{t("cta.email")}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Floating Contact Button */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1 }}
          className="fixed bottom-8 right-8 z-50"
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-wine text-white p-4 rounded-full shadow-2xl flex items-center space-x-3 hover:bg-rose transition-colors"
          >
            <Phone className="w-6 h-6" />
            <span className="font-medium pr-2">{t("cta.floatingBtn")}</span>
          </motion.button>
        </motion.div>
      </main>
    </>
  );
};

export default HairLossTreatment;
