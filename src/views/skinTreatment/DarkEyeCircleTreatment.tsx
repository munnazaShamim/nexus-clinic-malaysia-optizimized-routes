"use client";

import { motion } from "framer-motion";
import {
  Eye,
  Sparkles,
  Droplet,
  Sun,
  ChevronRight,
  CheckCircle2,
  AlertCircle,
  Heart,
  Activity,
  Layers,
  UserCheck,
  ShieldCheck,
  Zap,
  Flower2,
  Waves,
  Sparkle,
  BadgeCheck,
} from "lucide-react";
import {
  fadeInUp,
  staggerContainer,
  fadeInLeft,
  fadeInRight,
  scaleIn,
} from "../../lib/animations";
import BeforeAfterFaceSection from "../../components/BeforeAfterFace";
import FAQ from "../../components/FAQ";
import { useTranslation } from "@/src/i18n/client";
import { fallbackLng } from "@/src/i18n/settings";

const DarkEyeCircleLanding = ({ locale = fallbackLng }: { locale?: string }) => {
  const { t } = useTranslation(locale, "darkEyeCircle");

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
      <main className="min-h-screen bg-linear-to-b from-light to-cream font-['Inter',sans-serif]">
        {/* Hero Section with Glass Effect */}
        <section className="relative min-h-screen flex items-center overflow-hidden px-4 sm:px-6 lg:px-8">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-wine filter blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-rose filter blur-3xl"></div>
          </div>

          <div className="max-w-7xl mx-auto w-full relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left lg:flex lg:items-center lg:gap-12"
            >
              <div className="lg:w-1/2">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-2 bg-wine/10 px-4 py-2 rounded-full mb-6"
                >
                  <BadgeCheck className="w-5 h-5 text-wine" />
                  <span className="text-brown font-medium">
                    {t("hero.badge")}
                  </span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-4xl lg:text-6xl font-bold mb-6 font-['Georgia',serif]"
                >
                  <span className="text-brown">{t("hero.title1")} </span>
                  <br />
                  <span className="text-wine">{t("hero.title2")}</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-lg text-taupe mb-8 max-w-lg mx-auto lg:mx-0"
                >
                  {t("hero.desc")}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                >
                  <button className="group bg-wine text-white px-8 py-4 rounded-full font-medium hover:bg-brown transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl">
                    {t("hero.btn1")}
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="border-2 border-taupe text-brown px-8 py-4 rounded-full font-medium hover:border-wine hover:text-wine transition-all duration-300">
                    {t("hero.btn2")}
                  </button>
                </motion.div>

                {/* Trust Badges */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex flex-wrap gap-6 mt-12 justify-center lg:justify-start"
                >
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-rose" />
                    <span className="text-sm text-brown">
                      {t("hero.trust1")}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Eye className="w-5 h-5 text-rose" />
                    <span className="text-sm text-brown">
                      {t("hero.trust2")}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Heart className="w-5 h-5 text-rose" />
                    <span className="text-sm text-brown">{t("hero.trust3")}</span>
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="lg:w-1/2 mt-12 lg:mt-0"
              >
                <div className="relative">
                  {/* Glass Card */}
                  <div className="bg-glass backdrop-blur-lg rounded-3xl p-8 shadow-2xl">
                    <h3 className="text-2xl font-['Georgia',serif] text-brown mb-6">
                      {t("hero.selfCheckTitle")}
                    </h3>
                    <div className="space-y-4">
                      {[
                        {
                          icon: Sun,
                          text: t("hero.check1"),
                          color: "wine",
                        },
                        {
                          icon: Droplet,
                          text: t("hero.check2"),
                          color: "rose",
                        },
                        {
                          icon: Layers,
                          text: t("hero.check3"),
                          color: "taupe",
                        },
                        {
                          icon: Activity,
                          text: t("hero.check4"),
                          color: "brown",
                        },
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.7 + index * 0.1 }}
                          className="flex items-center gap-3 p-3 rounded-xl bg-white/50"
                        >
                          <div
                            className={`p-2 rounded-full bg-${item.color}20`}
                          >
                            <item.icon
                              className="w-5 h-5"
                              style={{ color: item.color }}
                            />
                          </div>
                          <span className="text-brown">{item.text}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Types Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={staggerContainer}
              className="text-center mb-16"
            >
              <motion.h2
                variants={fadeInUp}
                className="text-3xl lg:text-4xl font-['Georgia',serif] text-brown mb-4"
              >
                {t("types.title")}
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-taupe max-w-2xl mx-auto"
              >
                {t("types.desc")}
              </motion.p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: t("types.type1Title"),
                  desc: t("types.type1Desc"),
                  icon: Sun,
                  color: "wine",
                },
                {
                  title: t("types.type2Title"),
                  desc: t("types.type2Desc"),
                  icon: Droplet,
                  color: "rose",
                },
                {
                  title: t("types.type3Title"),
                  desc: t("types.type3Desc"),
                  icon: Layers,
                  color: "brown",
                },
                {
                  title: t("types.type4Title"),
                  desc: t("types.type4Desc"),
                  icon: Eye,
                  color: "taupe",
                },
              ].map((type, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-cream p-6 rounded-2xl hover:shadow-xl transition-all duration-300"
                >
                  <div
                    className={`p-3 rounded-xl w-fit mb-4 bg-${type.color}20`}
                  >
                    <type.icon
                      className="w-6 h-6"
                      style={{ color: type.color }}
                    />
                  </div>
                  <h3 className="text-xl font-['Georgia',serif] text-brown mb-2">
                    {type.title}
                  </h3>
                  <p className="text-taupe">{type.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Treatment Options */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-cream to-light">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={staggerContainer}
              className="text-center mb-16"
            >
              <motion.h2
                variants={fadeInUp}
                className="text-3xl lg:text-4xl font-['Georgia',serif] text-brown mb-4"
              >
                {t("treatments.title")}
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-taupe max-w-2xl mx-auto"
              >
                {t("treatments.desc")}
              </motion.p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: t("treatments.t1Title"),
                  price: t("treatments.t1Price"),
                  icon: Droplet,
                  color: "wine",
                  best: t("treatments.t1Best"),
                  desc: t("treatments.t1Desc"),
                },
                {
                  title: t("treatments.t2Title"),
                  price: t("treatments.t2Price"),
                  icon: Zap,
                  color: "rose",
                  best: t("treatments.t2Best"),
                  desc: t("treatments.t2Desc"),
                },
                {
                  title: t("treatments.t3Title"),
                  price: t("treatments.t3Price"),
                  icon: Flower2,
                  color: "brown",
                  best: t("treatments.t3Best"),
                  desc: t("treatments.t3Desc"),
                },
                {
                  title: t("treatments.t4Title"),
                  price: t("treatments.t4Price"),
                  icon: Sparkles,
                  color: "taupe",
                  best: t("treatments.t4Best"),
                  desc: t("treatments.t4Desc"),
                },
                {
                  title: t("treatments.t5Title"),
                  price: t("treatments.t5Price"),
                  icon: Waves,
                  color: "wine",
                  best: t("treatments.t5Best"),
                  desc: t("treatments.t5Desc"),
                },
                {
                  title: t("treatments.t6Title"),
                  price: t("treatments.t6Price"),
                  icon: Sparkle,
                  color: "rose",
                  best: t("treatments.t6Best"),
                  desc: t("treatments.t6Desc"),
                },
              ].map((treatment, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-taupe/20"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-${treatment.color}20`}>
                      <treatment.icon
                        className="w-6 h-6"
                        style={{ color: treatment.color }}
                      />
                    </div>
                    <span
                      className="text-sm font-semibold"
                      style={{ color: treatment.color }}
                    >
                      {treatment.price}
                    </span>
                  </div>
                  <h3 className="text-xl font-['Georgia',serif] text-brown mb-2">
                    {treatment.title}
                  </h3>
                  <p className="text-sm font-medium text-wine mb-2">
                    {treatment.best}
                  </p>
                  <p className="text-taupe text-sm">{treatment.desc}</p>

                  <motion.button
                    whileHover={{ x: 5 }}
                    className="mt-4 flex items-center gap-1 text-brown hover:text-wine transition-colors"
                  >
                    {t("treatments.learnMore")} <ChevronRight className="w-4 h-4" />
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Safety & Expertise Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brown text-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={staggerContainer}
              >
                <motion.div
                  variants={fadeInLeft}
                  className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-6"
                >
                  <ShieldCheck className="w-5 h-5 text-cream" />
                  <span className="text-sm">{t("safety.badge")}</span>
                </motion.div>

                <motion.h2
                  variants={fadeInLeft}
                  className="text-3xl lg:text-4xl font-['Georgia',serif] mb-6"
                >
                  {t("safety.title")}
                </motion.h2>

                <motion.p variants={fadeInLeft} className="text-cream/80 mb-8">
                  {t("safety.desc")}
                </motion.p>

                <motion.div variants={fadeInLeft} className="space-y-4">
                  {[
                    t("safety.point1"),
                    t("safety.point2"),
                    t("safety.point3"),
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-rose shrink-0" />
                      <span className="text-cream">{item}</span>
                    </div>
                  ))}
                </motion.div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={fadeInRight}
                className="relative"
              >
                <div className="bg-[rgba(255,255,255,0.1)] backdrop-blur-lg rounded-3xl p-8">
                  <h3 className="text-2xl font-['Georgia',serif] mb-6">
                    {t("safety.riskTitle")}
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3 p-4 bg-white/5 rounded-xl">
                      <AlertCircle className="w-5 h-5 text-rose mt-1" />
                      <p className="text-sm text-cream">
                        {t("safety.risk1")}
                      </p>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-white/5 rounded-xl">
                      <UserCheck className="w-5 h-5 text-rose mt-1" />
                      <p className="text-sm text-cream">
                        {t("safety.risk2")}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-rose/20 rounded-full blur-2xl"></div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Before & After Grid - Visual Showcase */}
        <BeforeAfterFaceSection />

        {/* FAQ Section */}
        <FAQ data={faqs} />

        {/* Pricing Summary */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={staggerContainer}
              className="text-center mb-12"
            >
              <motion.h2
                variants={fadeInUp}
                className="text-3xl lg:text-4xl font-['Georgia',serif] text-brown mb-4"
              >
                {t("pricing.title")}
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-taupe max-w-2xl mx-auto"
              >
                {t("pricing.desc")}
              </motion.p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  treatment: t("pricing.p1Treatment"),
                  range: t("pricing.p1Range"),
                  note: t("pricing.p1Note"),
                },
                {
                  treatment: t("pricing.p2Treatment"),
                  range: t("pricing.p2Range"),
                  note: t("pricing.p2Note"),
                },
                {
                  treatment: t("pricing.p3Treatment"),
                  range: t("pricing.p3Range"),
                  note: t("pricing.p3Note"),
                },
                {
                  treatment: t("pricing.p4Treatment"),
                  range: t("pricing.p4Range"),
                  note: t("pricing.p4Note"),
                },
              ].map((price, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-6 rounded-xl border border-taupe/20 hover:border-wine transition-all duration-300"
                >
                  <p className="text-taupe mb-2">{price.treatment}</p>
                  <p className="text-2xl font-['Georgia',serif] text-brown font-bold">
                    {price.range}
                  </p>
                  <p className="text-sm text-wine mt-2">{price.note}</p>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-center text-sm text-taupe mt-8"
            >
              {t("pricing.disclaimer")}
            </motion.p>
          </div>
        </section>

        {/* Competitor Context - Brief */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-cream">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={staggerContainer}
              className="text-center"
            >
              <motion.h2
                variants={fadeInUp}
                className="text-2xl font-['Georgia',serif] text-brown mb-8"
              >
                {t("whyNexus.title")}
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-taupe max-w-3xl mx-auto mb-8"
              >
                {t("whyNexus.desc")}
              </motion.p>
              <motion.div
                variants={fadeInUp}
                className="flex flex-wrap justify-center gap-4"
              >
                {[
                  t("whyNexus.tag1"),
                  t("whyNexus.tag2"),
                  t("whyNexus.tag3"),
                  t("whyNexus.tag4"),
                ].map((item, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-white rounded-full text-brown text-sm shadow-sm"
                  >
                    {item}
                  </span>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-r from-wine to-rose text-white">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl lg:text-4xl font-['Georgia',serif] mb-6"
            >
              {t("cta.title")}
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-cream mb-8">
              {t("cta.desc")}
            </motion.p>
            <motion.button
              variants={scaleIn}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-brown px-10 py-5 rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300 inline-flex items-center gap-2 group"
            >
              {t("cta.bookBtn")}
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.p
              variants={fadeInUp}
              className="text-sm text-cream/80 mt-6"
            >
              {t("cta.address")}
            </motion.p>
          </motion.div>
        </section>
      </main>
    </>
  );
};

export default DarkEyeCircleLanding;
