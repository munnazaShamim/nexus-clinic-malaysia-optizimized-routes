"use client";

// HydraFacialLandingPage.jsx
import { motion } from "framer-motion";
import {
  Sparkles,
  Droplets,
  Shield,
  Clock,
  MapPin,
  ChevronRight,
  Sun,
  Wind,
  Thermometer,
  Heart,
  Star,
  CheckCircle2,
  AlertCircle,
  User,
  Airplay,
  Leaf,
  Sparkle,
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

const HydraFacialLandingPage = ({ locale = fallbackLng }: { locale?: string }) => {
  const { t } = useTranslation(locale, "hydrafacial");

  return (
    <>
      <main className="w-full overflow-hidden bg-light">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 right-0 w-96 h-96 bg-rose/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-wine/10 rounded-full blur-3xl" />
          </div>

          <div className="relative max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                className="space-y-8"
              >
                <motion.div variants={fadeInUp} className="space-y-4">
                  <span className="inline-flex items-center gap-2 text-wine font-inter text-sm tracking-wider">
                    <Sparkles size={18} />
                    {t("hero.badge")}
                  </span>

                  <h1 className="font-georgia text-5xl lg:text-6xl text-brown leading-tight">
                    {t("hero.title1")}
                    <span className="text-wine">
                      {" "}
                      {t("hero.title2")}
                    </span>
                  </h1>

                  <p className="text-xl text-taupe font-inter leading-relaxed">
                    {t("hero.desc")}
                  </p>
                </motion.div>

                {/* Trust Strip */}
                <motion.div
                  variants={fadeInUp}
                  className="bg-cream rounded-2xl p-6 border border-rose/20 backdrop-blur-sm"
                  style={{ backgroundColor: "var(--color-glass)" }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-wine/10 flex items-center justify-center">
                        <Shield className="text-wine" size={20} />
                      </div>
                      <span className="text-sm text-brown font-inter">
                        {t("hero.trust1")}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-wine/10 flex items-center justify-center">
                        <MapPin className="text-wine" size={20} />
                      </div>
                      <span className="text-sm text-brown font-inter">
                        {t("hero.trust2")}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-wine/10 flex items-center justify-center">
                        <Clock className="text-wine" size={20} />
                      </div>
                      <span className="text-sm text-brown font-inter">
                        {t("hero.trust3")}
                      </span>
                    </div>
                  </div>
                </motion.div>

                <motion.div variants={fadeInUp} className="flex wrap gap-4">
                  <button className="group bg-wine text-white px-8 py-4 rounded-full font-inter text-sm hover:bg-brown transition-all duration-300 flex items-center gap-2">
                    {t("hero.bookBtn")}
                    <ChevronRight
                      size={18}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </button>
                  <button className="border border-taupe text-brown px-8 py-4 rounded-full font-inter text-sm hover:bg-cream transition-all">
                    {t("hero.priceBtn")}
                  </button>
                </motion.div>
              </motion.div>

              {/* Right Image/Visual */}
              <motion.div
                variants={fadeInRight}
                initial="hidden"
                whileInView="visible"
                className="relative"
              >
                <div className="relative rounded-3xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=800&q=80"
                    alt="HydraFacial treatment"
                    className="w-full h-auto rounded-3xl"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-brown/20 to-transparent" />

                  {/* Floating Cards */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute top-8 left-8 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl"
                  >
                    <div className="flex items-center gap-2">
                      <Thermometer className="text-wine" size={20} />
                      <span className="text-sm font-inter text-brown">
                        {t("hero.floatingCard1")}
                      </span>
                    </div>
                  </motion.div>

                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 4.5, repeat: Infinity }}
                    className="absolute bottom-8 right-8 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl"
                  >
                    <div className="flex items-center gap-2">
                      <Droplets className="text-wine" size={20} />
                      <span className="text-sm font-inter text-brown">
                        {t("hero.floatingCard2")}
                      </span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* If Your Skin Could Talk Section */}
        <section className="py-24 px-4 bg-cream">
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              className="grid lg:grid-cols-2 gap-16 items-center"
            >
              <motion.div variants={fadeInLeft} className="relative">
                <div className="absolute -top-10 -left-10 w-32 h-32 bg-rose/20 rounded-full blur-2xl" />
                <h2 className="font-georgia text-4xl lg:text-5xl text-brown mb-6 relative">
                  {t("skinTalk.title1")}
                  <br />
                  <span className="text-wine">{t("skinTalk.title2")}</span>
                </h2>

                <div className="space-y-6">
                  {[
                    {
                      icon: Sun,
                      text: t("skinTalk.issue1"),
                    },
                    { icon: Wind, text: t("skinTalk.issue2") },
                    {
                      icon: Droplets,
                      text: t("skinTalk.issue3"),
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      className="flex items-start gap-4"
                    >
                      <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center">
                        <item.icon className="text-wine" size={24} />
                      </div>
                      <p className="text-taupe font-inter text-lg">
                        {item.text}
                      </p>
                    </motion.div>
                  ))}
                </div>

                <motion.p
                  variants={fadeInUp}
                  className="mt-8 text-brown font-inter text-lg leading-relaxed"
                >
                  {t("skinTalk.desc")}
                </motion.p>
              </motion.div>

              <motion.div variants={fadeInRight} className="relative">
                <div className="bg-white rounded-3xl p-8 shadow-2xl">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full bg-wine/10 flex items-center justify-center">
                      <Heart className="text-wine" size={32} />
                    </div>
                    <div>
                      <h3 className="font-georgia text-2xl text-brown">
                        {t("skinTalk.doctorTitle")}
                      </h3>
                      <p className="text-taupe">{t("skinTalk.doctorSubtitle")}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {[
                      t("skinTalk.doctorPoint1"),
                      t("skinTalk.doctorPoint2"),
                      t("skinTalk.doctorPoint3"),
                    ].map((text, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle2 className="text-wine" size={20} />
                        <span className="text-brown font-inter">{text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* What Is HydraFacial Section */}
        <section className="py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              className="text-center mb-16"
            >
              <motion.span
                variants={fadeInUp}
                className="text-wine font-inter text-sm tracking-wider mb-4 block"
              >
                {t("whatIs.badge")}
              </motion.span>
              <motion.h2
                variants={fadeInUp}
                className="font-georgia text-4xl lg:text-5xl text-brown mb-6"
              >
                {t("whatIs.title")}
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-xl text-taupe max-w-3xl mx-auto"
              >
                {t("whatIs.desc")}
              </motion.p>
            </motion.div>

            <div className="grid lg:grid-cols-4 gap-6">
              {[
                {
                  step: t("whatIs.step1Num"),
                  title: t("whatIs.step1Title"),
                  desc: t("whatIs.step1Desc"),
                  color: "wine",
                },
                {
                  step: t("whatIs.step2Num"),
                  title: t("whatIs.step2Title"),
                  desc: t("whatIs.step2Desc"),
                  color: "rose",
                },
                {
                  step: t("whatIs.step3Num"),
                  title: t("whatIs.step3Title"),
                  desc: t("whatIs.step3Desc"),
                  color: "taupe",
                },
                {
                  step: t("whatIs.step4Num"),
                  title: t("whatIs.step4Title"),
                  desc: t("whatIs.step4Desc"),
                  color: "brown",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={{ y: -10 }}
                  className="group relative bg-light rounded-2xl p-8 border border-rose/20 hover:border-wine transition-all"
                >
                  <div
                    className={` text-${item.color} absolute top-4 right-4 text-6xl font-georgia opacity-10 group-hover:opacity-20 transition-opacity`}
                  >
                    {item.step}
                  </div>
                  <h3 className="font-georgia text-2xl text-brown mb-3">
                    {item.title}
                  </h3>
                  <p className="text-taupe font-inter">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={fadeInUp}
              className="mt-12 bg-cream rounded-3xl p-8 text-center"
            >
              <p className="text-brown font-inter text-lg italic">
                {t("whatIs.quote")}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Why It's Popular in KL Section */}
        <section className="py-24 px-4 bg-cream">
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <motion.div variants={fadeInLeft}>
                <h2 className="font-georgia text-4xl lg:text-5xl text-brown mb-6">
                  {t("whyKL.title1")}
                  <br />
                  <span className="text-wine">{t("whyKL.title2")}</span>
                </h2>

                <div className="space-y-6">
                  {[
                    t("whyKL.reason1"),
                    t("whyKL.reason2"),
                    t("whyKL.reason3"),
                    t("whyKL.reason4"),
                  ].map((text, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      className="flex items-center gap-4"
                    >
                      <div className="w-8 h-8 rounded-full bg-wine flex items-center justify-center text-white text-sm">
                        {index + 1}
                      </div>
                      <p className="text-brown font-inter text-lg">{text}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={fadeInRight} className="relative">
                <div className="bg-white rounded-3xl p-8 shadow-xl">
                  <h3 className="font-georgia text-2xl text-brown mb-6">
                    {t("whyKL.helpsTitle")}
                  </h3>
                  <div className="space-y-4">
                    {[
                      t("whyKL.helps1"),
                      t("whyKL.helps2"),
                      t("whyKL.helps3"),
                      t("whyKL.helps4"),
                      t("whyKL.helps5"),
                      t("whyKL.helps6"),
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        variants={fadeInUp}
                        className="flex items-center gap-3 p-3 rounded-xl hover:bg-cream transition-all"
                      >
                        <Star className="text-wine" size={16} />
                        <span className="text-brown font-inter">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Who It's For Section */}
        <section className="py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              className="text-center mb-16"
            >
              <motion.h2
                variants={fadeInUp}
                className="font-georgia text-4xl lg:text-5xl text-brown mb-6"
              >
                {t("whoFor.title")}
              </motion.h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: <User className="text-wine" size={24} />,
                  title: t("whoFor.person1Title"),
                  desc: t("whoFor.person1Desc"),
                },
                {
                  icon: <Heart className="text-wine" size={24} />,
                  title: t("whoFor.person2Title"),
                  desc: t("whoFor.person2Desc"),
                },
                {
                  icon: <User className="text-wine" size={24} />,
                  title: t("whoFor.person3Title"),
                  desc: t("whoFor.person3Desc"),
                },
                {
                  icon: <Airplay className="text-wine" size={24} />,
                  title: t("whoFor.person4Title"),
                  desc: t("whoFor.person4Desc"),
                },
                {
                  icon: <Leaf className="text-wine" size={24} />,
                  title: t("whoFor.person5Title"),
                  desc: t("whoFor.person5Desc"),
                },
                {
                  icon: <Sparkle className="text-wine" size={24} />,
                  title: t("whoFor.person6Title"),
                  desc: t("whoFor.person6Desc"),
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={{ scale: 1.02 }}
                  className="bg-light rounded-2xl p-8 border border-rose/10 hover:border-wine/30 transition-all"
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="font-georgia text-xl text-brown mb-2">
                    {item.title}
                  </h3>
                  <p className="text-taupe font-inter">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Pause Section */}
            <motion.div
              variants={fadeInUp}
              className="mt-12 bg-wine/5 rounded-3xl p-8 border border-wine/20"
            >
              <div className="flex items-start gap-4">
                <AlertCircle className="text-wine shrink-0" size={24} />
                <div>
                  <h4 className="font-georgia text-xl text-brown mb-3">
                    {t("whoFor.pauseTitle")}
                  </h4>
                  <ul className="grid md:grid-cols-2 gap-3">
                    {[
                      t("whoFor.pause1"),
                      t("whoFor.pause2"),
                      t("whoFor.pause3"),
                      t("whoFor.pause4"),
                    ].map((item, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-2 text-taupe font-inter"
                      >
                        <span className="w-1 h-1 rounded-full bg-wine" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Results & Timeline Section */}
        <section className="py-24 px-4 bg-cream">
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <motion.div variants={fadeInLeft}>
                <h2 className="font-georgia text-4xl lg:text-5xl text-brown mb-6">
                  {t("results.title")}
                </h2>

                <div className="space-y-6">
                  <motion.div
                    variants={fadeInUp}
                    className="bg-white rounded-2xl p-6"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-wine/10 flex items-center justify-center">
                        <Sparkles className="text-wine" size={20} />
                      </div>
                      <h3 className="font-georgia text-xl text-brown">
                        {t("results.immediateTitle")}
                      </h3>
                    </div>
                    <p className="text-taupe font-inter ml-12">
                      {t("results.immediateDesc")}
                    </p>
                  </motion.div>

                  <motion.div
                    variants={fadeInUp}
                    className="bg-white rounded-2xl p-6"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-wine/10 flex items-center justify-center">
                        <Clock className="text-wine" size={20} />
                      </div>
                      <h3 className="font-georgia text-xl text-brown">
                        {t("results.lastTitle")}
                      </h3>
                    </div>
                    <p className="text-taupe font-inter ml-12">
                      {t("results.lastDesc")}
                    </p>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div variants={fadeInRight} className="relative">
                <div className="bg-wine rounded-3xl p-8 text-white">
                  <h3 className="font-georgia text-2xl mb-6">{t("results.rhythmTitle")}</h3>
                  <div className="space-y-4">
                    {[
                      t("results.rhythm1"),
                      t("results.rhythm2"),
                      t("results.rhythm3"),
                    ].map((text, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                          {index + 1}
                        </div>
                        <span className="font-inter">{text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Pros & Cons Section */}
        <section className="py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              className="text-center mb-16"
            >
              <motion.h2
                variants={fadeInUp}
                className="font-georgia text-4xl lg:text-5xl text-brown mb-6"
              >
                {t("prosCons.title")}
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-taupe text-lg">
                {t("prosCons.desc")}
              </motion.p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Pros */}
              <motion.div variants={fadeInLeft} className="space-y-4">
                <h3 className="font-georgia text-2xl text-wine mb-6">{t("prosCons.prosTitle")}</h3>
                {[
                  t("prosCons.pro1"),
                  t("prosCons.pro2"),
                  t("prosCons.pro3"),
                  t("prosCons.pro4"),
                  t("prosCons.pro5"),
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="flex items-start gap-3 p-4 bg-cream rounded-xl"
                  >
                    <CheckCircle2 className="text-wine shrink-0" size={20} />
                    <span className="text-brown font-inter">{item}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* Cons */}
              <motion.div variants={fadeInRight} className="space-y-4">
                <h3 className="font-georgia text-2xl text-brown mb-6">{t("prosCons.consTitle")}</h3>
                {[
                  t("prosCons.con1"),
                  t("prosCons.con2"),
                  t("prosCons.con3"),
                  t("prosCons.con4"),
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="flex items-start gap-3 p-4 bg-cream rounded-xl"
                  >
                    <AlertCircle className="text-taupe shrink-0" size={20} />
                    <span className="text-brown font-inter">{item}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Side Effects Section */}
        <section className="py-24 px-4 bg-cream">
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              className="max-w-3xl mx-auto text-center mb-12"
            >
              <motion.h2
                variants={fadeInUp}
                className="font-georgia text-4xl lg:text-5xl text-brown mb-6"
              >
                {t("sideEffects.title")}
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-taupe text-lg">
                {t("sideEffects.desc")}
              </motion.p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <motion.div
                variants={fadeInLeft}
                className="bg-white rounded-2xl p-8"
              >
                <h3 className="font-georgia text-xl text-wine mb-4">
                  {t("sideEffects.commonTitle")}
                </h3>
                <ul className="space-y-3">
                  {[
                    t("sideEffects.common1"),
                    t("sideEffects.common2"),
                    t("sideEffects.common3"),
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 text-brown"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-wine" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                className="bg-white rounded-2xl p-8"
              >
                <h3 className="font-georgia text-xl text-brown mb-4">
                  {t("sideEffects.lessCommonTitle")}
                </h3>
                <ul className="space-y-3">
                  {[
                    t("sideEffects.lessCommon1"),
                    t("sideEffects.lessCommon2"),
                    t("sideEffects.lessCommon3"),
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 text-brown"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-taupe" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Cost Section */}
        <section className="py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <motion.div variants={fadeInLeft}>
                <h2 className="font-georgia text-4xl lg:text-5xl text-brown mb-6">
                  {t("cost.title1")}
                  <br />
                  <span className="text-wine">{t("cost.title2")}</span>
                </h2>

                <div className="space-y-6">
                  <motion.div
                    variants={fadeInUp}
                    className="bg-cream rounded-2xl p-8"
                  >
                    <div className="text-3xl font-georgia text-wine mb-2">
                      {t("cost.price")}
                    </div>
                    <p className="text-taupe font-inter">
                      {t("cost.priceDesc")}
                    </p>
                    <p className="text-sm text-brown mt-2">
                      {t("cost.priceNote")}
                    </p>
                  </motion.div>

                  <motion.p
                    variants={fadeInUp}
                    className="text-taupe font-inter"
                  >
                    {t("cost.marketRange")}
                  </motion.p>
                </div>
              </motion.div>

              <motion.div variants={fadeInRight} className="relative">
                <div className="bg-brown rounded-3xl p-8 text-white">
                  <h3 className="font-georgia text-2xl mb-4">
                    {t("cost.affectsTitle")}
                  </h3>
                  <ul className="space-y-3">
                    {[
                      t("cost.affects1"),
                      t("cost.affects2"),
                      t("cost.affects3"),
                      t("cost.affects4"),
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <ChevronRight size={16} />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 text-sm opacity-80">
                    {t("cost.affectsNote")}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="py-24 px-4 bg-cream">
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              className="text-center mb-16"
            >
              <motion.h2
                variants={fadeInUp}
                className="font-georgia text-4xl lg:text-5xl text-brown mb-6"
              >
                {t("comparison.title")}
              </motion.h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: t("comparison.comp1Title"),
                  points: [
                    t("comparison.comp1Point1"),
                    t("comparison.comp1Point2"),
                    t("comparison.comp1Point3"),
                  ],
                },
                {
                  title: t("comparison.comp2Title"),
                  points: [
                    t("comparison.comp2Point1"),
                    t("comparison.comp2Point2"),
                    t("comparison.comp2Point3"),
                  ],
                },
                {
                  title: t("comparison.comp3Title"),
                  points: [
                    t("comparison.comp3Point1"),
                    t("comparison.comp3Point2"),
                    t("comparison.comp3Point3"),
                  ],
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  className="bg-white rounded-2xl p-8 shadow-lg"
                >
                  <h3 className="font-georgia text-2xl text-wine mb-6">
                    {item.title}
                  </h3>
                  <ul className="space-y-3">
                    {item.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2 text-brown">
                        <span className="text-wine">•</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Preparation & Aftercare */}
        <section className="py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              className="grid lg:grid-cols-2 gap-8"
            >
              <motion.div
                variants={fadeInLeft}
                className="bg-cream rounded-3xl p-8"
              >
                <h3 className="font-georgia text-3xl text-brown mb-6">
                  {t("prepAftercare.prepTitle")}
                </h3>
                <ul className="space-y-4">
                  {[
                    t("prepAftercare.prep1"),
                    t("prepAftercare.prep2"),
                    t("prepAftercare.prep3"),
                    t("prepAftercare.prep4"),
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="text-wine shrink-0" size={20} />
                      <span className="text-brown font-inter">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                className="bg-wine rounded-3xl p-8 text-white"
              >
                <h3 className="font-georgia text-3xl mb-6">
                  {t("prepAftercare.afterTitle")}
                </h3>
                <ul className="space-y-4">
                  {[
                    t("prepAftercare.after1"),
                    t("prepAftercare.after2"),
                    t("prepAftercare.after3"),
                    t("prepAftercare.after4"),
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2
                        className="text-white/80 shrink-0"
                        size={20}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-sm opacity-80">
                  {t("prepAftercare.afterNote")}
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 px-4 bg-cream">
          <div className="max-w-4xl mx-auto">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              className="text-center mb-12"
            >
              <motion.h2
                variants={fadeInUp}
                className="font-georgia text-4xl lg:text-5xl text-brown mb-6"
              >
                {t("faq.title")}
              </motion.h2>
            </motion.div>

            <div className="space-y-4">
              {[
                { q: t("faq.q1"), a: t("faq.a1") },
                { q: t("faq.q2"), a: t("faq.a2") },
                { q: t("faq.q3"), a: t("faq.a3") },
                { q: t("faq.q4"), a: t("faq.a4") },
                { q: t("faq.q5"), a: t("faq.a5") },
                { q: t("faq.q6"), a: t("faq.a6") },
                { q: t("faq.q7"), a: t("faq.a7") },
                { q: t("faq.q8"), a: t("faq.a8") },
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-white rounded-2xl overflow-hidden"
                >
                  <details className="group">
                    <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
                      <span className="font-georgia text-lg text-brown">
                        {faq.q}
                      </span>
                      <ChevronRight
                        className="text-wine group-open:rotate-90 transition-transform"
                        size={20}
                      />
                    </summary>
                    <div className="px-6 pb-6">
                      <p className="text-taupe font-inter">{faq.a}</p>
                    </div>
                  </details>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 px-4">
          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-georgia text-4xl lg:text-5xl text-brown mb-6">
              {t("cta.title1")}
              <br />
              <span className="text-wine">{t("cta.title2")}</span>
            </h2>

            <p className="text-xl text-taupe font-inter mb-8">
              {t("cta.desc1")}
              <br />{t("cta.desc2")}
            </p>

            <button className="group bg-wine text-white px-12 py-5 rounded-full font-inter text-lg hover:bg-brown transition-all duration-300 inline-flex items-center gap-3">
              {t("cta.bookBtn")}
              <ChevronRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>

            <p className="mt-6 text-sm text-taupe">
              {t("cta.address")}
            </p>
          </motion.div>
        </section>
      </main>
    </>
  );
};

export default HydraFacialLandingPage;
