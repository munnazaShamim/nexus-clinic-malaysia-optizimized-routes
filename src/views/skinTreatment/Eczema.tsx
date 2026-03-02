"use client";

import { motion } from "framer-motion";
import {
  Droplets,
  Moon,
  Thermometer,
  Wind,
  MapPin,
  Shield,
  Sparkles,
  Heart,
  Brain,
  Sun,
  Droplet,
  AlertCircle,
  Coffee,
  ChevronRight,
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

const EczemaLandingPage = ({ locale = fallbackLng }: { locale?: string }) => {
  const { t } = useTranslation(locale, "eczema");

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
  ];
  return (
    <>
      <main className="min-h-screen bg-cream font-['Inter',sans-serif] overflow-hidden">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 right-0 w-96 h-96 bg-taupe rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-wine rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
          </div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-7xl mx-auto relative z-10"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInLeft} className="space-y-8">
                <div className="space-y-4">
                  <motion.div
                    variants={scaleIn}
                    className="inline-flex items-center px-4 py-2 bg-light rounded-full shadow-sm"
                  >
                    <MapPin className="w-4 h-4 text-wine mr-2" />
                    <span className="text-brown font-medium">
                      {t("hero.badge")}
                    </span>
                  </motion.div>

                  <h1 className="font-['Georgia',serif] text-5xl sm:text-6xl lg:text-7xl text-brown leading-tight">
                    {t("hero.title1")}
                    <span className="block text-wine">{t("hero.title2")}</span>
                  </h1>

                  <p className="text-xl text-taupe max-w-lg">
                    {t("hero.desc")}
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-light rounded-xl flex items-center justify-center shrink-0">
                      <Moon className="w-6 h-6 text-wine" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-brown">{t("hero.sleepTitle")}</h3>
                      <p className="text-taupe">
                        {t("hero.sleepDesc")}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-light rounded-xl flex items-center justify-center shrink-0">
                      <Shield className="w-6 h-6 text-wine" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-brown">
                        {t("hero.doctorTitle")}
                      </h3>
                      <p className="text-taupe">
                        {t("hero.doctorDesc")}
                      </p>
                    </div>
                  </div>
                </div>

                <motion.button
                  variants={scaleIn}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-wine text-light px-8 py-4 rounded-full font-medium hover:bg-rose transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2 group"
                >
                  <span>{t("hero.btn")}</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                className="relative hidden lg:block"
              >
                <div className="relative w-full h-150 bg-light rounded-3xl shadow-2xl overflow-hidden">
                  {/* Glass Morphism Card */}
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&q=80')] bg-cover"></div>

                  {/* Decorative Elements */}
                  <div className="absolute top-10 left-10 w-32 h-32 bg-wine rounded-full blur-2xl opacity-30"></div>
                  <div className="absolute bottom-10 right-10 w-40 h-40 bg-rose rounded-full blur-2xl opacity-30"></div>

                  {/* Content Cards */}
                  <div className="absolute top-20 left-20 right-20">
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ repeat: Infinity, duration: 4 }}
                      className="bg-light/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-white/20"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-wine/10 rounded-full flex items-center justify-center">
                          <Thermometer className="w-6 h-6 text-wine" />
                        </div>
                        <div>
                          <p className="text-sm text-taupe">
                            {t("hero.floatingLabel")}
                          </p>
                          <p className="font-semibold text-brown">
                            {t("hero.floatingValue")}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Trust Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          className="py-16 px-4 sm:px-6 lg:px-8 bg-light"
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                variants={fadeInUp}
                className="flex items-center space-x-4"
              >
                <div className="w-16 h-16 bg-cream rounded-2xl flex items-center justify-center">
                  <Shield className="w-8 h-8 text-wine" />
                </div>
                <div>
                  <h4 className="font-semibold text-brown">{t("trust.t1Title")}</h4>
                  <p className="text-taupe text-sm">
                    {t("trust.t1Desc")}
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="flex items-center space-x-4"
              >
                <div className="w-16 h-16 bg-cream rounded-2xl flex items-center justify-center">
                  <MapPin className="w-8 h-8 text-wine" />
                </div>
                <div>
                  <h4 className="font-semibold text-brown">{t("trust.t2Title")}</h4>
                  <p className="text-taupe text-sm">
                    {t("trust.t2Desc")}
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="flex items-center space-x-4"
              >
                <div className="w-16 h-16 bg-cream rounded-2xl flex items-center justify-center">
                  <Droplets className="w-8 h-8 text-wine" />
                </div>
                <div>
                  <h4 className="font-semibold text-brown">{t("trust.t3Title")}</h4>
                  <p className="text-taupe text-sm">
                    {t("trust.t3Desc")}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Why KL Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          className="py-24 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-7xl mx-auto">
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="font-['Georgia',serif] text-4xl text-brown mb-4">
                {t("whyKL.title1")}
                <span className="text-wine"> {t("whyKL.title2")}</span>
              </h2>
              <p className="text-taupe max-w-2xl mx-auto">
                {t("whyKL.desc")}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <motion.div
                variants={fadeInUp}
                className="bg-light p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all"
              >
                <Thermometer className="w-10 h-10 text-wine mb-4" />
                <h3 className="font-semibold text-brown mb-2">{t("whyKL.trigger1Title")}</h3>
                <p className="text-taupe text-sm">
                  {t("whyKL.trigger1Desc")}
                </p>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="bg-light p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all"
              >
                <Wind className="w-10 h-10 text-wine mb-4" />
                <h3 className="font-semibold text-brown mb-2">
                  {t("whyKL.trigger2Title")}
                </h3>
                <p className="text-taupe text-sm">
                  {t("whyKL.trigger2Desc")}
                </p>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="bg-light p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all"
              >
                <Droplets className="w-10 h-10 text-wine mb-4" />
                <h3 className="font-semibold text-brown mb-2">
                  {t("whyKL.trigger3Title")}
                </h3>
                <p className="text-taupe text-sm">
                  {t("whyKL.trigger3Desc")}
                </p>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="bg-light p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all"
              >
                <Brain className="w-10 h-10 text-wine mb-4" />
                <h3 className="font-semibold text-brown mb-2">
                  {t("whyKL.trigger4Title")}
                </h3>
                <p className="text-taupe text-sm">
                  {t("whyKL.trigger4Desc")}
                </p>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Symptoms Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          className="py-24 px-4 sm:px-6 lg:px-8 bg-light"
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInLeft} className="space-y-8">
                <h2 className="font-['Georgia',serif] text-4xl text-brown">
                  {t("symptoms.title1")}
                  <span className="text-wine"> {t("symptoms.title2")}</span>
                </h2>

                <div className="space-y-4">
                  {[
                    t("symptoms.s1"),
                    t("symptoms.s2"),
                    t("symptoms.s3"),
                    t("symptoms.s4"),
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <AlertCircle className="w-5 h-5 text-wine" />
                      <span className="text-brown">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={fadeInRight} className="relative">
                <div className="bg-cream p-8 rounded-3xl shadow-xl">
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: Heart, text: t("symptoms.area1") },
                      { icon: Moon, text: t("symptoms.area2") },
                      { icon: Wind, text: t("symptoms.area3") },
                      { icon: Droplet, text: t("symptoms.area4") },
                    ].map((item, index) => (
                      <div key={index} className="text-center p-4 bg-white rounded-xl">
                        <div className="w-12 h-12 bg-wine/10 rounded-full flex items-center justify-center mx-auto mb-2">
                          <item.icon className="w-6 h-6 text-wine" />
                        </div>
                        <p className="text-sm text-brown">{item.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Treatment Options */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          className="py-24 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-7xl mx-auto">
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="font-['Georgia',serif] text-4xl text-brown mb-4">
                {t("treatments.title1")}
                <span className="text-wine"> {t("treatments.title2")}</span>
              </h2>
              <p className="text-taupe max-w-2xl mx-auto">
                {t("treatments.desc")}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                variants={fadeInUp}
                className="bg-light p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all group"
              >
                <div className="w-16 h-16 bg-wine/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-wine group-hover:text-white transition-all">
                  <Droplets className="w-8 h-8 text-wine group-hover:text-white" />
                </div>
                <h3 className="font-['Georgia',serif] text-xl text-brown mb-3">
                  {t("treatments.t1Title")}
                </h3>
                <p className="text-taupe mb-4">
                  {t("treatments.t1Desc")}
                </p>
                <p className="text-sm text-wine">
                  {t("treatments.t1Note")}
                </p>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="bg-light p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all group"
              >
                <div className="w-16 h-16 bg-wine/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-wine group-hover:text-white transition-all">
                  <Sparkles className="w-8 h-8 text-wine group-hover:text-white" />
                </div>
                <h3 className="font-['Georgia',serif] text-xl text-brown mb-3">
                  {t("treatments.t2Title")}
                </h3>
                <p className="text-taupe mb-4">
                  {t("treatments.t2Desc")}
                </p>
                <p className="text-sm text-wine">
                  {t("treatments.t2Note")}
                </p>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="bg-light p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all group"
              >
                <div className="w-16 h-16 bg-wine/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-wine group-hover:text-white transition-all">
                  <Moon className="w-8 h-8 text-wine group-hover:text-white" />
                </div>
                <h3 className="font-['Georgia',serif] text-xl text-brown mb-3">
                  {t("treatments.t3Title")}
                </h3>
                <p className="text-taupe mb-4">
                  {t("treatments.t3Desc")}
                </p>
                <p className="text-sm text-wine">{t("treatments.t3Note")}</p>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Daily Routine Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          className="py-24 px-4 sm:px-6 lg:px-8 bg-light"
        >
          <div className="max-w-7xl mx-auto">
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="font-['Georgia',serif] text-4xl text-brown mb-4">
                {t("routine.title1")}
                <span className="text-wine"> {t("routine.title2")}</span>
              </h2>
              <p className="text-taupe max-w-2xl mx-auto">
                {t("routine.desc")}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div variants={fadeInUp} className="relative">
                <div className="bg-white p-8 rounded-3xl shadow-xl">
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-wine rounded-full flex items-center justify-center text-white font-bold text-xl">
                    1
                  </div>
                  <Sun className="w-8 h-8 text-wine mb-4" />
                  <h3 className="font-semibold text-brown mb-3">{t("routine.morningTitle")}</h3>
                  <ul className="space-y-2 text-taupe text-sm">
                    <li>• {t("routine.morning1")}</li>
                    <li>• {t("routine.morning2")}</li>
                    <li>• {t("routine.morning3")}</li>
                  </ul>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="relative">
                <div className="bg-white p-8 rounded-3xl shadow-xl">
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-wine rounded-full flex items-center justify-center text-white font-bold text-xl">
                    2
                  </div>
                  <Coffee className="w-8 h-8 text-wine mb-4" />
                  <h3 className="font-semibold text-brown mb-3">{t("routine.middayTitle")}</h3>
                  <ul className="space-y-2 text-taupe text-sm">
                    <li>• {t("routine.midday1")}</li>
                    <li>• {t("routine.midday2")}</li>
                    <li>• {t("routine.midday3")}</li>
                  </ul>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="relative">
                <div className="bg-white p-8 rounded-3xl shadow-xl">
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-wine rounded-full flex items-center justify-center text-white font-bold text-xl">
                    3
                  </div>
                  <Moon className="w-8 h-8 text-wine mb-4" />
                  <h3 className="font-semibold text-brown mb-3">{t("routine.nightTitle")}</h3>
                  <ul className="space-y-2 text-taupe text-sm">
                    <li>• {t("routine.night1")}</li>
                    <li>• {t("routine.night2")}</li>
                    <li>• {t("routine.night3")}</li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        <FAQ data={faqs} />

        {/* CTA Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        >
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full bg-linear-to-br from-wine to-rose opacity-90"></div>
          </div>

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.div variants={fadeInUp} className="space-y-8">
              <h2 className="font-['Georgia',serif] text-4xl text-light mb-4">
                {t("cta.title")}
              </h2>
              <p className="text-xl text-light/90 max-w-2xl mx-auto">
                {t("cta.desc")}
              </p>

              <motion.button
                variants={scaleIn}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-light text-wine px-8 py-4 rounded-full font-medium hover:bg-cream transition-all duration-300 shadow-xl hover:shadow-2xl inline-flex items-center space-x-2 group"
              >
                <MapPin className="w-5 h-5" />
                <span>{t("cta.bookBtn")}</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <p className="text-light/70 text-sm">
                {t("cta.note")}
              </p>
            </motion.div>
          </div>
        </motion.section>
      </main>
    </>
  );
};

export default EczemaLandingPage;
