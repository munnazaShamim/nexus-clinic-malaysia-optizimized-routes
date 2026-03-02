"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Heart,
  Droplet,
  CheckCircle2,
  Clock,
  Syringe,
  Feather,
  Award,
  Star,
  ChevronRight,
  Target,
  Palette,
  HeartPulse,
  Flower2,
  BadgeCheck,
  Gem,
  Activity,
  Droplets,
  Sparkle,
  ShieldCheck,
  Trophy,
  Search,
  X,
  Quote,
  Eye,
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

const LipFillerLanding = ({ locale = fallbackLng }: { locale?: string }) => {
  const { t } = useTranslation(locale, "lipFiller");

  const faqs = [
    { q: t("faq.q1"), a: t("faq.a1") },
    { q: t("faq.q2"), a: t("faq.a2") },
    { q: t("faq.q3"), a: t("faq.a3") },
    { q: t("faq.q4"), a: t("faq.a4") },
    { q: t("faq.q5"), a: t("faq.a5") },
    { q: t("faq.q6"), a: t("faq.a6") },
  ];

  const resultTypes = [
    {
      icon: <Droplets className="w-6 h-6" />,
      title: t("results.type1Title"),
      description: t("results.type1Desc"),
      color: "from-blue-50 to-blue-100",
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: t("results.type2Title"),
      description: t("results.type2Desc"),
      color: "from-rose-50 to-rose-100",
    },
    {
      icon: <Feather className="w-6 h-6" />,
      title: t("results.type3Title"),
      description: t("results.type3Desc"),
      color: "from-peach-50 to-peach-100",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: t("results.type4Title"),
      description: t("results.type4Desc"),
      color: "from-wine-50 to-wine-100",
    },
  ];

  const pros = [t("prosCons.pro1"), t("prosCons.pro2"), t("prosCons.pro3"), t("prosCons.pro4")];
  const cons = [t("prosCons.con1"), t("prosCons.con2"), t("prosCons.con3"), t("prosCons.con4")];

  return (
    <>
      <main className="min-h-screen bg-cream font-['Inter',sans-serif] overflow-hidden">
        {/* Hero Section with Glass Effect */}
        <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
          <motion.div
            className="absolute top-20 right-10 w-64 h-64 rounded-full bg-rose opacity-5 blur-3xl"
            animate={{ scale: [1, 1.2, 1], x: [0, 20, 0] }}
            transition={{ duration: 15, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-wine opacity-5 blur-3xl"
            animate={{ scale: [1, 1.3, 1], y: [0, -30, 0] }}
            transition={{ duration: 20, repeat: Infinity }}
          />

          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <motion.div variants={fadeInLeft} className="space-y-8">
                <motion.div
                  variants={scaleIn}
                  className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-taupe/20"
                >
                  <Shield className="w-4 h-4 text-wine" />
                  <span className="text-sm font-medium text-brown">
                    {t("hero.badge")}
                  </span>
                </motion.div>

                <h1 className="font-['Georgia',serif] text-5xl md:text-6xl lg:text-7xl leading-tight text-brown">
                  {t("hero.title")}
                  <span className="text-wine italic block">{t("hero.titleHighlight")}</span>
                </h1>

                <p className="text-xl text-taupe max-w-lg">
                  {t("hero.desc")}
                </p>

                <motion.div
                  variants={staggerContainer}
                  className="flex flex-wrap gap-4"
                >
                  {[t("hero.trust1"), t("hero.trust2"), t("hero.trust3"), t("hero.trust4")].map((item, i) => (
                    <motion.div
                      key={i}
                      variants={scaleIn}
                      className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm border border-taupe/10"
                    >
                      <BadgeCheck className="w-4 h-4 text-wine" />
                      <span className="text-sm text-brown">{item}</span>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div variants={fadeInUp} className="flex gap-4 pt-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group bg-wine text-white px-8 py-4 rounded-full font-medium flex items-center gap-2 shadow-lg hover:shadow-xl transition-all"
                  >
                    {t("hero.cta")}
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-white/80 backdrop-blur-sm text-brown px-8 py-4 rounded-full font-medium border border-taupe/20 hover:bg-white transition-all"
                  >
                    {t("hero.gallery")}
                  </motion.button>
                </motion.div>
              </motion.div>

              <motion.div variants={fadeInRight} className="relative">
                <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/50">
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 pb-4 border-b border-taupe/20">
                      <Trophy className="w-6 h-6 text-wine" />
                      <h3 className="font-['Georgia',serif] text-xl text-brown">
                        {t("hero.glassTitle")}
                      </h3>
                    </div>

                    {[t("hero.glass1"), t("hero.glass2"), t("hero.glass3"), t("hero.glass4"), t("hero.glass5")].map((item, i) => (
                      <motion.div
                        key={i}
                        variants={fadeInUp}
                        custom={i}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle2 className="w-5 h-5 text-rose mt-0.5 shrink-0" />
                        <span className="text-brown">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -bottom-6 -right-6 w-24 h-24 bg-cream rounded-full border border-wine/20 flex items-center justify-center"
                >
                  <Sparkle className="w-8 h-8 text-wine/30" />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Quick Competitor Review */}
        <section className="py-24 px-4 bg-white relative overflow-hidden">
          <motion.div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: "radial-linear(circle at 2px 2px,wine1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />

          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <motion.span variants={fadeInUp} className="text-wine font-medium mb-4 block">
                {t("beyond.badge")}
              </motion.span>
              <motion.h2 variants={fadeInUp} className="font-['Georgia',serif] text-4xl md:text-5xl text-brown mb-6">
                {t("beyond.title")}
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-xl text-taupe max-w-3xl mx-auto">
                {t("beyond.desc")}
              </motion.p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: <HeartPulse className="w-8 h-8" />, title: t("beyond.card1Title"), desc: t("beyond.card1Desc") },
                { icon: <Droplet className="w-8 h-8" />, title: t("beyond.card2Title"), desc: t("beyond.card2Desc") },
                { icon: <Palette className="w-8 h-8" />, title: t("beyond.card3Title"), desc: t("beyond.card3Desc") },
                { icon: <Search className="w-8 h-8" />, title: t("beyond.card4Title"), desc: t("beyond.card4Desc") },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  whileHover={{ y: -8 }}
                  className="bg-light p-8 rounded-2xl border border-taupe/10 shadow-lg hover:shadow-xl transition-all group"
                >
                  <div className="w-16 h-16 bg-wine/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-wine/20 transition-colors">
                    <div className="text-wine">{item.icon}</div>
                  </div>
                  <h3 className="font-['Georgia',serif] text-xl text-brown mb-3">{item.title}</h3>
                  <p className="text-taupe">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* What is Lip Filler */}
        <section className="py-24 px-4 bg-cream relative">
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <motion.div variants={fadeInLeft} className="space-y-6">
                <span className="text-wine font-medium">{t("what.badge")}</span>
                <h2 className="font-['Georgia',serif] text-4xl md:text-5xl text-brown">
                  {t("what.title")}
                  <span className="text-wine block">{t("what.titleHighlight")}</span>
                </h2>

                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-white/70">
                  <p className="text-lg text-brown mb-6">{t("what.desc")}</p>

                  <div className="grid grid-cols-2 gap-4">
                    {[t("what.point1"), t("what.point2"), t("what.point3"), t("what.point4"), t("what.point5")].map((item, i) => (
                      <motion.div key={i} variants={scaleIn} className="flex items-center gap-2">
                        <Sparkle className="w-4 h-4 text-rose" />
                        <span className="text-brown capitalize">{item}</span>
                      </motion.div>
                    ))}
                  </div>

                  <p className="mt-6 text-taupe italic">{t("what.note")}</p>
                </div>
              </motion.div>

              <motion.div variants={fadeInRight} className="relative">
                <div className="bg-wine/5 rounded-3xl p-8 backdrop-blur-sm border border-wine/20">
                  <h3 className="font-['Georgia',serif] text-2xl text-brown mb-6 flex items-center gap-2">
                    <Heart className="w-6 h-6 text-wine" />
                    {t("what.goalsTitle")}
                  </h3>

                  <div className="space-y-4">
                    {[t("what.goal1"), t("what.goal2"), t("what.goal3"), t("what.goal4"), t("what.goal5")].map((quote, i) => (
                      <motion.div
                        key={i}
                        variants={fadeInUp}
                        custom={i}
                        className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-taupe/10"
                      >
                        <Quote className="w-4 h-4 text-rose mb-2" />
                        <p className="text-brown italic">"{quote}"</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Results Types */}
        <section className="py-24 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <motion.span variants={fadeInUp} className="text-wine font-medium mb-4 block">
                {t("results.badge")}
              </motion.span>
              <motion.h2 variants={fadeInUp} className="font-['Georgia',serif] text-4xl md:text-5xl text-brown mb-6">
                {t("results.title")}
              </motion.h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {resultTypes.map((result, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02 }}
                  className={`bg-linear-to-br ${result.color} p-8 rounded-3xl border border-taupe/10 shadow-lg relative overflow-hidden group`}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
                  <div className="relative z-10">
                    <div className="w-14 h-14 bg-white/80 backdrop-blur-sm rounded-xl flex items-center justify-center mb-6 text-wine">
                      {result.icon}
                    </div>
                    <h3 className="font-['Georgia',serif] text-2xl text-brown mb-3">{result.title}</h3>
                    <p className="text-brown/80">{result.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeInUp} className="mt-12 bg-light rounded-2xl p-6 border border-taupe/10">
              <div className="flex items-center gap-3 text-brown">
                <Clock className="w-5 h-5 text-wine" />
                <span className="font-medium">{t("results.timelineLabel")}</span>
                <span className="text-taupe">{t("results.timelineDesc")}</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Who It's For / Who Should Wait */}
        <section className="py-24 px-4 bg-cream relative">
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-8"
            >
              <motion.div variants={fadeInLeft} className="bg-white rounded-3xl p-8 shadow-xl border border-taupe/10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="font-['Georgia',serif] text-2xl text-brown">{t("who.forTitle")}</h3>
                </div>

                <ul className="space-y-4">
                  {[t("who.for1"), t("who.for2"), t("who.for3"), t("who.for4"), t("who.for5")].map((item, i) => (
                    <motion.li key={i} variants={fadeInUp} custom={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-rose mt-0.5 shrink-0" />
                      <span className="text-brown">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.div variants={fadeInRight} className="bg-white rounded-3xl p-8 shadow-xl border border-taupe/10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-rose-100 rounded-xl flex items-center justify-center">
                    <X className="w-6 h-6 text-rose-600" />
                  </div>
                  <h3 className="font-['Georgia',serif] text-2xl text-brown">{t("who.waitTitle")}</h3>
                </div>

                <ul className="space-y-4">
                  {[t("who.wait1"), t("who.wait2"), t("who.wait3")].map((item, i) => (
                    <motion.li key={i} variants={fadeInUp} custom={i} className="flex items-start gap-3">
                      <X className="w-5 h-5 text-wine mt-0.5 shrink-0" />
                      <span className="text-brown">{item}</span>
                    </motion.li>
                  ))}
                </ul>

                <p className="mt-6 text-taupe italic border-t border-taupe/20 pt-6">
                  {t("who.waitNote")}
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* The Process */}
        <section className="py-24 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <motion.span variants={fadeInUp} className="text-wine font-medium mb-4 block">
                {t("process.badge")}
              </motion.span>
              <motion.h2 variants={fadeInUp} className="font-['Georgia',serif] text-4xl md:text-5xl text-brown mb-6">
                {t("process.title")}
              </motion.h2>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-4">
              {[
                { step: t("process.step1"), title: t("process.step1Title"), desc: t("process.step1Desc"), icon: <Eye className="w-6 h-6" /> },
                { step: t("process.step2"), title: t("process.step2Title"), desc: t("process.step2Desc"), icon: <Flower2 className="w-6 h-6" /> },
                { step: t("process.step3"), title: t("process.step3Title"), desc: t("process.step3Desc"), icon: <Syringe className="w-6 h-6" /> },
                { step: t("process.step4"), title: t("process.step4Title"), desc: t("process.step4Desc"), icon: <Shield className="w-6 h-6" /> },
              ].map((step, i) => (
                <motion.div key={i} variants={fadeInUp} whileHover={{ y: -5 }} className="relative group">
                  <div className="bg-light rounded-2xl p-6 border border-taupe/10 h-full">
                    <div className="text-5xl font-['Georgia',serif] text-wine/20 mb-4">{step.step}</div>
                    <div className="w-12 h-12 bg-wine/10 rounded-xl flex items-center justify-center mb-4 text-wine group-hover:bg-wine group-hover:text-white transition-all">
                      {step.icon}
                    </div>
                    <h3 className="font-['Georgia',serif] text-xl text-brown mb-2">{step.title}</h3>
                    <p className="text-taupe text-sm">{step.desc}</p>
                  </div>
                  {i < 3 && (
                    <div className="hidden lg:block absolute top-1/2 -right-2 text-wine/30">
                      <ChevronRight className="w-6 h-6" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pros & Cons + Duration */}
        <section className="py-24 px-4 bg-cream">
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid lg:grid-cols-3 gap-8"
            >
              <motion.div variants={scaleIn} className="lg:col-span-1 bg-linear-to-br from-wine to-rose rounded-3xl p-8 text-white">
                <Clock className="w-12 h-12 mb-6 opacity-80" />
                <h3 className="font-['Georgia',serif] text-3xl mb-4">{t("prosCons.durationTitle")}</h3>
                <p className="text-2xl font-light mb-4">{t("prosCons.durationValue")}</p>
                <p className="opacity-80">{t("prosCons.durationDesc")}</p>
              </motion.div>

              <motion.div variants={fadeInUp} className="bg-white rounded-3xl p-8 shadow-xl">
                <h3 className="font-['Georgia',serif] text-2xl text-brown mb-6 flex items-center gap-2">
                  <Award className="w-6 h-6 text-green-600" />
                  {t("prosCons.prosTitle")}
                </h3>
                <ul className="space-y-3">
                  {pros.map((item, i) => (
                    <motion.li key={i} variants={fadeInUp} custom={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                      <span className="text-brown">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.div variants={fadeInUp} className="bg-white rounded-3xl p-8 shadow-xl">
                <h3 className="font-['Georgia',serif] text-2xl text-brown mb-6 flex items-center gap-2">
                  <X className="w-6 h-6 text-wine" />
                  {t("prosCons.consTitle")}
                </h3>
                <ul className="space-y-3">
                  {cons.map((item, i) => (
                    <motion.li key={i} variants={fadeInUp} custom={i} className="flex items-start gap-2">
                      <X className="w-5 h-5 text-wine mt-0.5 shrink-0" />
                      <span className="text-brown">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Cost & Volume Guide */}
        <section className="py-24 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-12 items-center mb-20"
            >
              <motion.div variants={fadeInLeft} className="space-y-6">
                <span className="text-wine font-medium">{t("cost.badge")}</span>
                <h2 className="font-['Georgia',serif] text-4xl md:text-5xl text-brown">
                  {t("cost.title")}
                </h2>
                <p className="text-xl text-taupe">{t("cost.desc")}</p>

                <div className="bg-light rounded-2xl p-6 space-y-4">
                  <div className="flex justify-between items-center pb-2 border-b border-taupe/20">
                    <span className="text-brown">{t("cost.range1Label")}</span>
                    <span className="font-['Georgia',serif] text-2xl text-wine">{t("cost.range1Value")}</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-taupe/20">
                    <span className="text-brown">{t("cost.range2Label")}</span>
                    <span className="font-['Georgia',serif] text-2xl text-wine">{t("cost.range2Value")}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-brown">{t("cost.range3Label")}</span>
                    <span className="font-['Georgia',serif] text-2xl text-wine">{t("cost.range3Value")}</span>
                  </div>
                </div>

                <p className="text-taupe italic">{t("cost.advice")}</p>
              </motion.div>

              <motion.div variants={fadeInRight} className="relative">
                <div className="bg-linear-to-br from-wine/10 to-rose/10 rounded-3xl p-8 border border-wine/20">
                  <h3 className="font-['Georgia',serif] text-2xl text-brown mb-6">{t("cost.volumeTitle")}</h3>

                  <div className="space-y-6">
                    {[
                      { ml: t("cost.vol1"), desc: t("cost.vol1Desc") },
                      { ml: t("cost.vol2"), desc: t("cost.vol2Desc") },
                      { ml: t("cost.vol3"), desc: t("cost.vol3Desc") },
                    ].map((item, i) => (
                      <motion.div key={i} variants={fadeInUp} className="flex items-start gap-4">
                        <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center text-wine font-['Georgia',serif] text-xl font-bold shadow-sm">
                          {item.ml}
                        </div>
                        <p className="text-brown flex-1 pt-2">{item.desc}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Lip Flip Comparison */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-8 mt-20"
            >
              <motion.div variants={fadeInLeft} className="bg-light rounded-3xl p-8 border border-taupe/10">
                <h3 className="font-['Georgia',serif] text-2xl text-brown mb-4">{t("cost.compareFillerTitle")}</h3>
                <p className="text-lg text-brown mb-4">{t("cost.compareFillerDesc")}</p>
                <div className="w-16 h-1 bg-wine rounded-full" />
              </motion.div>

              <motion.div variants={fadeInRight} className="bg-light rounded-3xl p-8 border border-taupe/10">
                <h3 className="font-['Georgia',serif] text-2xl text-brown mb-4">{t("cost.compareFlipTitle")}</h3>
                <p className="text-lg text-brown mb-4">{t("cost.compareFlipDesc")}</p>
                <div className="w-16 h-1 bg-rose rounded-full" />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQ data={faqs} />

        {/* CTA Section */}
        <section className="py-32 px-4 bg-white relative overflow-hidden">
          <motion.div
            className="absolute inset-0"
            style={{
              background: "radial-linear(circle at 30% 50%, rgba(140,79,88,0.03) 0%, transparent 50%)",
            }}
          />

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div
                variants={scaleIn}
                className="inline-flex items-center gap-2 bg-wine/10 px-4 py-2 rounded-full mb-8"
              >
                <Gem className="w-4 h-4 text-wine" />
                <span className="text-sm font-medium text-brown">{t("cta.badge")}</span>
              </motion.div>

              <motion.h2
                variants={fadeInUp}
                className="font-['Georgia',serif] text-5xl md:text-6xl text-brown mb-8"
              >
                {t("cta.title")}
                <span className="text-wine block">{t("cta.titleHighlight")}</span>
              </motion.h2>

              <motion.p variants={fadeInUp} className="text-xl text-taupe mb-12 max-w-2xl mx-auto">
                {t("cta.desc")}
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group bg-wine text-white px-10 py-5 rounded-full font-medium text-lg flex items-center gap-3 shadow-xl hover:shadow-2xl transition-all"
                >
                  {t("cta.button")}
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </motion.div>

              <motion.div variants={fadeInUp} className="mt-12 flex flex-wrap gap-8 justify-center text-sm text-taupe">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4" /> {t("cta.trust1")}
                </span>
                <span className="flex items-center gap-1">
                  <Activity className="w-4 h-4" /> {t("cta.trust2")}
                </span>
                <span className="flex items-center gap-1">
                  <Star className="w-4 h-4" /> {t("cta.trust3")}
                </span>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

export default LipFillerLanding;
