"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Heart,
  Sparkles,
  Zap,
  Thermometer,
  Scissors,
  AlertCircle,
  CheckCircle2,
  XCircle,
  ChevronRight,
  MapPin,
  Activity,
  Eye,
  Leaf,
  Flower2,
  Gem,
  Target,
  ShieldCheck,
  ChevronDown,
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

const MoleRemovalLanding = ({ locale = fallbackLng }: { locale?: string }) => {
  const { t } = useTranslation(locale, "moleRemoval");

  const heroMethods = [
    t("hero.method1"),
    t("hero.method2"),
    t("hero.method3"),
    t("hero.method4"),
  ];

  const peaceReasons = [
    { icon: AlertCircle, text: t("peaceOfMind.reason1") },
    { icon: Eye, text: t("peaceOfMind.reason2") },
    { icon: Heart, text: t("peaceOfMind.reason3") },
  ];

  const moleFeatures = [
    t("understanding.feature1"),
    t("understanding.feature2"),
    t("understanding.feature3"),
    t("understanding.feature4"),
  ];

  const removalReasons = [
    t("understanding.removal1"),
    t("understanding.removal2"),
    t("understanding.removal3"),
    t("understanding.removal4"),
  ];

  const abcdeItems = [
    { letter: t("abcde.aLetter"), text: t("abcde.aText") },
    { letter: t("abcde.bLetter"), text: t("abcde.bText"), desc: t("abcde.bDesc") },
    { letter: t("abcde.cLetter"), text: t("abcde.cText"), desc: t("abcde.cDesc") },
    { letter: t("abcde.dLetter"), text: t("abcde.dText"), desc: t("abcde.dDesc") },
    { letter: t("abcde.eLetter"), text: t("abcde.eText"), desc: t("abcde.eDesc") },
  ];

  const processSteps = [
    { step: 1, title: t("process.step1Title"), icon: Eye, desc: t("process.step1Desc") },
    { step: 2, title: t("process.step2Title"), icon: Target, desc: t("process.step2Desc") },
    { step: 3, title: t("process.step3Title"), icon: Shield, desc: t("process.step3Desc") },
    { step: 4, title: t("process.step4Title"), icon: Flower2, desc: t("process.step4Desc") },
  ];

  const methods = [
    { method: t("methods.m1Title"), icon: Sparkles, desc: t("methods.m1Desc") },
    { method: t("methods.m2Title"), icon: Zap, desc: t("methods.m2Desc") },
    { method: t("methods.m3Title"), icon: Activity, desc: t("methods.m3Desc") },
    { method: t("methods.m4Title"), icon: Thermometer, desc: t("methods.m4Desc") },
    { method: t("methods.m5Title"), icon: Scissors, desc: t("methods.m5Desc") },
  ];

  const healingPhases = [
    { day: t("methods.day1Value"), desc: t("methods.day1Desc") },
    { day: t("methods.day2Value"), desc: t("methods.day2Desc") },
    { day: t("methods.day3Value"), desc: t("methods.day3Desc") },
    { day: t("methods.day4Value"), desc: t("methods.day4Desc") },
  ];

  const pros = [
    t("prosCons.pro1"),
    t("prosCons.pro2"),
    t("prosCons.pro3"),
    t("prosCons.pro4"),
  ];

  const cons = [
    t("prosCons.con1"),
    t("prosCons.con2"),
    t("prosCons.con3"),
    t("prosCons.con4"),
  ];

  const faqItems = [
    { q: t("faq.q1"), a: t("faq.a1") },
    { q: t("faq.q2"), a: t("faq.a2") },
    { q: t("faq.q3"), a: t("faq.a3") },
    { q: t("faq.q4"), a: t("faq.a4") },
    { q: t("faq.q5"), a: t("faq.a5") },
  ];

  return (
    <>
      <main className="min-h-screen bg-linear-to-b from-cream via-white to-light">
        {/* Hero Section with Glassmorphism */}
        <section className="relative min-h-screen flex items-center overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 left-10 w-72 h-72 bg-rose rounded-full filter blur-[100px] opacity-20"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-wine rounded-full filter blur-[120px] opacity-20"></div>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="container mx-auto px-4 md:px-8 relative z-10"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column */}
              <motion.div variants={fadeInLeft} className="space-y-6">
                <div className="flex items-center gap-2 text-wine">
                  <Gem className="w-5 h-5" />
                  <span className="text-sm tracking-[0.2em] uppercase font-light">
                    {t("hero.badge")}
                  </span>
                </div>

                <h1 className="font-georgia text-4xl md:text-5xl lg:text-6xl leading-tight text-brown">
                  {t("hero.title1")}{" "}
                  <span className="text-wine italic">{t("hero.title2")}</span>{" "}
                  {t("hero.title3")}
                </h1>

                <p className="text-lg text-taupe font-light leading-relaxed max-w-lg">
                  {t("hero.desc")}
                </p>

                <p className="text-rose font-medium border-l-4 border-wine pl-4 py-2 bg-white/50 backdrop-blur-sm rounded-r-lg">
                  {t("hero.highlight")}
                </p>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group bg-wine text-white px-8 py-4 rounded-full font-medium hover:bg-rose transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
                >
                  {t("hero.button")}
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>

                {/* Trust Strip */}
                <motion.div
                  variants={fadeInUp}
                  className="bg-light backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/60"
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-wine" />
                      <span className="text-sm text-brown">
                        {t("hero.trust1")}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Zap className="w-5 h-5 text-wine" />
                      <span className="text-sm text-brown">
                        {t("hero.trust2")}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <ShieldCheck className="w-5 h-5 text-wine" />
                      <span className="text-sm text-brown">
                        {t("hero.trust3")}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Right Column - Visual Elements */}
              <motion.div variants={fadeInRight} className="relative">
                <div className="relative aspect-square max-w-md mx-auto">
                  <div className="absolute inset-0 bg-linear-to-tr from-wine/20 to-rose/20 rounded-full animate-pulse"></div>
                  <div className="relative bg-white/70 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 border-b border-cream pb-4">
                        <Flower2 className="w-8 h-8 text-wine" />
                        <div>
                          <h3 className="font-georgia text-brown">
                            {t("hero.glassTitle")}
                          </h3>
                          <p className="text-sm text-taupe">
                            {t("hero.glassDesc")}
                          </p>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        {heroMethods.map((method, i) => (
                          <div
                            key={i}
                            className="bg-cream rounded-xl p-3 text-center"
                          >
                            <span className="text-sm text-brown">{method}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <ChevronDown className="w-6 h-6 text-wine" />
          </motion.div>
        </section>

        {/* Peace of Mind Section */}
        <section className="py-20 bg-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cream rounded-full filter blur-[80px]"></div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="container mx-auto px-4 md:px-8"
          >
            <motion.div
              variants={fadeInUp}
              className="max-w-3xl mx-auto text-center mb-16"
            >
              <Leaf className="w-12 h-12 text-wine mx-auto mb-6" />
              <h2 className="font-georgia text-3xl md:text-4xl text-brown mb-6">
                {t("peaceOfMind.title1")}
                <br />
                <span className="text-wine italic">
                  {t("peaceOfMind.title2")}
                </span>
              </h2>
              <p className="text-taupe text-lg leading-relaxed">
                {t("peaceOfMind.desc")}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {peaceReasons.map((item, i) => (
                <motion.div
                  key={i}
                  variants={scaleIn}
                  whileHover={{ y: -5 }}
                  className="bg-light rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all"
                >
                  <item.icon className="w-8 h-8 text-rose mx-auto mb-4" />
                  <p className="text-brown">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Understanding Moles Section */}
        <section className="py-20 bg-light">
          <div className="container mx-auto px-4 md:px-8">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <motion.div variants={fadeInLeft} className="space-y-6">
                <h2 className="font-georgia text-3xl md:text-4xl text-brown">
                  {t("understanding.title1")}{" "}
                  <span className="text-wine italic">{t("understanding.title2")}</span>
                </h2>
                <p className="text-taupe">
                  {t("understanding.desc")}
                </p>

                <div className="grid grid-cols-2 gap-4">
                  {moleFeatures.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-wine" />
                      <span className="text-brown text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg border border-cream">
                  <h3 className="font-georgia text-brown mb-4">
                    {t("understanding.comparisonTitle")}
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-wine mt-2"></span>
                      <p className="text-sm text-taupe">
                        <span className="font-medium text-brown">{t("understanding.moleLabel")}</span>{" "}
                        {t("understanding.moleDesc")}
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-rose mt-2"></span>
                      <p className="text-sm text-taupe">
                        <span className="font-medium text-brown">
                          {t("understanding.skinTagLabel")}
                        </span>{" "}
                        {t("understanding.skinTagDesc")}
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-taupe mt-2"></span>
                      <p className="text-sm text-taupe">
                        <span className="font-medium text-brown">{t("understanding.wartLabel")}</span>{" "}
                        {t("understanding.wartDesc")}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeInRight} className="relative">
                <div className="bg-wine/5 rounded-3xl p-8">
                  <h3 className="font-georgia text-2xl text-brown mb-6">
                    {t("understanding.removalTitle")}
                  </h3>
                  <div className="space-y-4">
                    {removalReasons.map((reason, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm"
                      >
                        <div className="w-8 h-8 rounded-full bg-cream flex items-center justify-center text-wine">
                          {i + 1}
                        </div>
                        <p className="text-brown">{reason}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ABCDE Rule Section */}
        <section className="py-20 bg-wine relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full filter blur-[80px]"></div>
          </div>

          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              className="max-w-4xl mx-auto"
            >
              <motion.h2
                variants={fadeInUp}
                className="font-georgia text-3xl md:text-4xl text-white mb-4 text-center"
              >
                {t("abcde.title")}
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-cream text-center mb-12"
              >
                {t("abcde.desc")}
              </motion.p>

              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {abcdeItems.map((item, i) => (
                  <motion.div
                    key={i}
                    variants={scaleIn}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20"
                  >
                    <div className="w-12 h-12 rounded-full bg-white text-wine text-2xl font-bold flex items-center justify-center mx-auto mb-3">
                      {item.letter}
                    </div>
                    <p className="text-white font-medium">{item.text}</p>
                    {item.desc && (
                      <p className="text-cream text-sm">{item.desc}</p>
                    )}
                  </motion.div>
                ))}
              </div>

              <motion.div variants={fadeInUp} className="mt-12 text-center">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
                  <AlertCircle className="w-5 h-5 text-white" />
                  <span className="text-white">
                    {t("abcde.warning")}
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              className="text-center max-w-2xl mx-auto mb-16"
            >
              <motion.h2
                variants={fadeInUp}
                className="font-georgia text-3xl md:text-4xl text-brown mb-4"
              >
                {t("process.title1")}{" "}
                <span className="text-wine">{t("process.title2")}</span>
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-taupe">
                {t("process.desc")}
              </motion.p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-6">
              {processSteps.map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                  className="relative"
                >
                  <div className="bg-light rounded-2xl p-6 text-center h-full shadow-lg hover:shadow-xl transition-all">
                    <div className="w-12 h-12 rounded-full bg-wine text-white flex items-center justify-center mx-auto mb-4">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-rose text-white flex items-center justify-center text-sm font-bold">
                      {item.step}
                    </div>
                    <h3 className="font-georgia text-brown mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-taupe">{item.desc}</p>
                  </div>
                  {i < 3 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                      <ChevronRight className="w-6 h-6 text-wine" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Methods Section */}
        <section className="py-20 bg-light">
          <div className="container mx-auto px-4 md:px-8">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <motion.div variants={fadeInLeft} className="space-y-6">
                <h2 className="font-georgia text-3xl md:text-4xl text-brown">
                  {t("methods.title1")} <span className="text-wine">{t("methods.title2")}</span>
                </h2>
                <p className="text-taupe">
                  {t("methods.desc")}
                </p>

                <div className="space-y-4">
                  {methods.map((item, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ x: 5 }}
                      className="flex items-start gap-4 bg-white rounded-xl p-4 shadow-sm"
                    >
                      <div className="w-10 h-10 rounded-full bg-cream flex items-center justify-center text-wine">
                        <item.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-medium text-brown">
                          {item.method}
                        </h4>
                        <p className="text-sm text-taupe">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={fadeInRight} className="relative">
                <div className="bg-wine/5 rounded-3xl p-8">
                  <h3 className="font-georgia text-2xl text-brown mb-6">
                    {t("methods.healingTitle")}
                  </h3>
                  <div className="space-y-6">
                    {healingPhases.map((phase, i) => (
                      <div key={i} className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-full bg-white flex flex-col items-center justify-center shadow-md">
                          <span className="text-xs text-taupe">{t("methods.day1Label")}</span>
                          <span className="font-bold text-wine">
                            {phase.day}
                          </span>
                        </div>
                        <p className="text-brown flex-1">{phase.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 bg-white rounded-xl p-4">
                    <p className="text-sm text-taupe">
                      <span className="font-medium text-brown">
                        {t("methods.scarQuestion")}
                      </span>{" "}
                      {t("methods.scarAnswer")}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Pros & Cons */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
            >
              <motion.div
                variants={fadeInLeft}
                className="bg-cream rounded-3xl p-8"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="font-georgia text-2xl text-brown">{t("prosCons.prosTitle")}</h3>
                </div>
                <ul className="space-y-4">
                  {pros.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                      <span className="text-brown">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                className="bg-cream rounded-3xl p-8"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
                    <XCircle className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="font-georgia text-2xl text-brown">{t("prosCons.consTitle")}</h3>
                </div>
                <ul className="space-y-4">
                  {cons.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <XCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                      <span className="text-brown">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-light">
          <div className="container mx-auto px-4 md:px-8">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              className="max-w-3xl mx-auto"
            >
              <motion.h2
                variants={fadeInUp}
                className="font-georgia text-3xl md:text-4xl text-brown text-center mb-12"
              >
                {t("faq.title")}
              </motion.h2>

              <div className="space-y-4">
                {faqItems.map((faq, i) => (
                  <motion.div
                    key={i}
                    variants={fadeInUp}
                    className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all"
                  >
                    <details className="group">
                      <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                        <span className="font-medium text-brown">{faq.q}</span>
                        <ChevronDown className="w-5 h-5 text-wine group-open:rotate-180 transition-transform" />
                      </summary>
                      <div className="px-6 pb-6 text-taupe">{faq.a}</div>
                    </details>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-wine relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full filter blur-[100px]"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-brown/20 rounded-full filter blur-[100px]"></div>
          </div>

          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              className="max-w-3xl mx-auto text-center"
            >
              <motion.h2
                variants={fadeInUp}
                className="font-georgia text-3xl md:text-4xl text-white mb-6"
              >
                {t("cta.title1")}
                <br />
                <span className="italic">
                  {t("cta.title2")}
                </span>
              </motion.h2>

              <motion.p variants={fadeInUp} className="text-cream mb-8 text-lg">
                {t("cta.desc")}
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-wine px-8 py-4 rounded-full font-medium hover:bg-cream transition-all shadow-lg hover:shadow-xl"
                >
                  {t("cta.bookBtn")}
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-all"
                >
                  {t("cta.learnMore")}
                </motion.button>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="mt-8 text-white/80 text-sm"
              >
                <MapPin className="w-4 h-4 inline mr-2" />
                {t("cta.address")}
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

export default MoleRemovalLanding;
