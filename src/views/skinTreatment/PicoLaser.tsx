"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  Shield,
  Clock,
  Sun,
  Droplets,
  CheckCircle2,
  AlertCircle,
  Heart,
  Target,
  Wind,
  Gem,
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

const PicoLaserLanding = ({ locale = fallbackLng }: { locale?: string }) => {
  const { t } = useTranslation(locale, "picoLaser");

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
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center overflow-hidden">
          {/* Background Decorative Elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-20 left-10 w-64 h-64 bg-taupe/5 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-80 h-80 bg-wine/5 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-8"
              >
                <motion.div variants={fadeInUp} className="inline-block">
                  <span className="px-4 py-2 bg-wine/10 text-wine rounded-full text-sm font-medium">
                    {t("hero.badge")}
                  </span>
                </motion.div>

                <motion.h1
                  variants={fadeInUp}
                  className="text-5xl lg:text-6xl xl:text-7xl font-light leading-tight"
                >
                  {t("hero.title1")}{" "}
                  <span className="font-serif italic text-wine relative">
                    {t("hero.title2")}
                    <svg
                      className="absolute -bottom-2 left-0 w-full"
                      viewBox="0 0 100 10"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M0,5 Q20,0 40,5 T80,5 T100,5"
                        stroke="rgba(128, 0, 128, 0.5)"
                        strokeWidth="2"
                        fill="none"
                        strokeDasharray="4 4"
                      />
                    </svg>
                  </span>
                  <br />
                  {t("hero.title3")}
                </motion.h1>

                <motion.p
                  variants={fadeInUp}
                  className="text-xl text-brown/70 leading-relaxed max-w-lg"
                >
                  {t("hero.desc")}
                </motion.p>

                <motion.div
                  variants={fadeInUp}
                  className="flex flex-wrap gap-4"
                >
                  <button className="group px-8 py-4 bg-wine text-white rounded-full hover:bg-rose transition-all duration-300 flex items-center gap-2 shadow-lg shadow-wine/20">
                    {t("hero.btn1")}
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="px-8 py-4 border border-taupe text-brown rounded-full hover:bg-white/50 backdrop-blur-sm transition-all duration-300">
                    {t("hero.btn2")}
                  </button>
                </motion.div>

                {/* Trust Badges */}
                <motion.div
                  variants={fadeInUp}
                  className="flex flex-wrap gap-6 pt-8"
                >
                  {[
                    { icon: Shield, text: t("hero.trust1") },
                    { icon: Heart, text: t("hero.trust2") },
                    { icon: Target, text: t("hero.trust3") },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-sm text-brown/60"
                    >
                      <item.icon className="w-4 h-4 text-wine" />
                      <span>{item.text}</span>
                    </div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Right Image/Visual */}
              <motion.div
                variants={scaleIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-[url('https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=800&q=80')] backdrop-blur-sm border border-white/50 shadow-2xl">
                  <div className="absolute inset-0 flex items-center justify-center"></div>
                  {/* Decorative Dots */}
                  <div className="absolute top-10 left-10 w-20 h-20 border-2 border-light/50 rounded-full" />
                  <div className="absolute bottom-10 right-10 w-32 h-32 border-2 border-light/70 rounded-full" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Quick Reality Check */}
        <section className="py-24 bg-white/50 backdrop-blur-sm">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <span className="text-wine font-serif italic text-lg">
                {t("realityCheck.badge")}
              </span>
              <h2 className="text-3xl md:text-4xl font-light mt-2 mb-6">
                {t("realityCheck.title")}
              </h2>
              <p className="text-lg text-brown/70 leading-relaxed">
                {t("realityCheck.desc")}
                <span className="block mt-4 font-medium text-wine">
                  {t("realityCheck.highlight")}
                </span>
              </p>
            </motion.div>
          </div>
        </section>

        {/* What is Pico Laser */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                variants={fadeInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-6"
              >
                <span className="text-wine font-serif italic text-lg">
                  {t("whatIs.badge")}
                </span>
                <h2 className="text-3xl md:text-4xl font-light">
                  {t("whatIs.title")}
                </h2>
                <p className="text-lg text-brown/70 leading-relaxed">
                  {t("whatIs.desc")}
                </p>
                <div className="pt-6 space-y-4">
                  {[
                    t("whatIs.point1"),
                    t("whatIs.point2"),
                    t("whatIs.point3"),
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-wine" />
                      <span className="text-brown/80">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-4"
              >
                {[
                  { icon: Sun, label: t("whatIs.target1") },
                  { icon: Droplets, label: t("whatIs.target2") },
                  { icon: Wind, label: t("whatIs.target3") },
                  { icon: Gem, label: t("whatIs.target4") },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="p-6 bg-white/70 backdrop-blur-sm rounded-xl border border-taupe/20 hover:border-wine/30 transition-all group"
                  >
                    <item.icon className="w-8 h-8 text-wine mb-3 group-hover:scale-110 transition-transform" />
                    <p className="font-medium text-brown">{item.label}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Popular for Malaysian Skin */}
        <section className="py-24 bg-brown text-light">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <motion.div variants={fadeInLeft} className="space-y-6">
                <span className="text-taupe font-serif italic text-lg">
                  {t("whyMalaysian.badge")}
                </span>
                <h2 className="text-3xl md:text-4xl font-light">
                  {t("whyMalaysian.title")}
                </h2>
                <p className="text-cream/80 leading-relaxed">
                  {t("whyMalaysian.desc")}
                </p>
                <div className="pt-4">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-rose/20 rounded-full">
                    <Shield className="w-4 h-4 text-rose" />
                    <span className="text-sm">
                      {t("whyMalaysian.safeBadge")}
                    </span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
              >
                <p className="text-xl font-serif italic mb-4">
                  {t("whyMalaysian.quote")}
                </p>
                <p className="text-taupe">
                  {t("whyMalaysian.quoteSource")}
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* The Nexus Approach */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="text-wine font-serif italic text-lg">
                {t("approach.badge")}
              </span>
              <h2 className="text-3xl md:text-4xl font-light mt-2">
                {t("approach.title")}
              </h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-8"
            >
              {[
                {
                  icon: Target,
                  title: t("approach.step1Title"),
                  desc: t("approach.step1Desc"),
                },
                {
                  icon: AlertCircle,
                  title: t("approach.step2Title"),
                  desc: t("approach.step2Desc"),
                },
                {
                  icon: Sun,
                  title: t("approach.step3Title"),
                  desc: t("approach.step3Desc"),
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all border border-taupe/10 group"
                >
                  <div className="w-16 h-16 rounded-full bg-wine/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <item.icon className="w-8 h-8 text-wine" />
                  </div>
                  <h3 className="text-xl font-medium text-brown mb-3">
                    {item.title}
                  </h3>
                  <p className="text-brown/70">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Treatment Areas */}
        <section className="py-24 bg-cream">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-light mb-4">
                {t("areas.title")}
              </h2>
              <p className="text-lg text-brown/70">
                {t("areas.desc")}
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              {[
                t("areas.area1"),
                t("areas.area2"),
                t("areas.area3"),
                t("areas.area4"),
                t("areas.area5"),
                t("areas.area6"),
                t("areas.area7"),
                t("areas.area8"),
              ].map((area, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  className="p-4 bg-white/70 backdrop-blur-sm rounded-lg text-center border border-taupe/20 hover:border-wine/30 transition-all"
                >
                  <p className="text-brown font-medium">{area}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Session Guide */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                variants={fadeInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-6"
              >
                <span className="text-wine font-serif italic text-lg">
                  {t("sessions.badge")}
                </span>
                <h2 className="text-3xl md:text-4xl font-light">
                  {t("sessions.title")}
                </h2>
                <p className="text-lg text-brown/70">
                  {t("sessions.desc")}
                </p>
                <div className="space-y-4">
                  {[
                    {
                      concern: t("sessions.concern1"),
                      sessions: t("sessions.sessions1"),
                    },
                    {
                      concern: t("sessions.concern2"),
                      sessions: t("sessions.sessions2"),
                    },
                    {
                      concern: t("sessions.concern3"),
                      sessions: t("sessions.sessions3"),
                    },
                    {
                      concern: t("sessions.concern4"),
                      sessions: t("sessions.sessions4"),
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center border-b border-taupe/20 pb-3"
                    >
                      <span className="text-brown">{item.concern}</span>
                      <span className="text-wine font-medium">
                        {item.sessions}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-linear-to-br from-wine/10 to-rose/10 rounded-3xl p-8 border border-white/50">
                  <Clock className="w-12 h-12 text-wine mb-4" />
                  <h3 className="text-2xl font-light mb-4">{t("sessions.downtimeTitle")}</h3>
                  <p className="text-lg text-brown/70 mb-6">
                    {t("sessions.downtimeDesc")}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-brown/60">
                    <CheckCircle2 className="w-4 h-4 text-wine" />
                    <span>{t("sessions.downtimeNote")}</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Pros & Cons */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-light text-center mb-16"
            >
              {t("prosCons.title")}
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <motion.div
                variants={fadeInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-light text-wine flex items-center gap-2">
                  <Sparkles className="w-6 h-6" /> {t("prosCons.prosTitle")}
                </h3>
                <ul className="space-y-4">
                  {[
                    t("prosCons.pro1"),
                    t("prosCons.pro2"),
                    t("prosCons.pro3"),
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-wine shrink-0 mt-1" />
                      <span className="text-brown/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-light text-rose flex items-center gap-2">
                  <AlertCircle className="w-6 h-6" /> {t("prosCons.consTitle")}
                </h3>
                <ul className="space-y-4">
                  {[
                    t("prosCons.con1"),
                    t("prosCons.con2"),
                    t("prosCons.con3"),
                    t("prosCons.con4"),
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full border-2 border-rose shrink-0 mt-1" />
                      <span className="text-brown/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQ data={faqs} />

        {/* CTA Section */}
        <section className="py-24 bg-linear-to-r from-wine to-rose text-light">
          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="container mx-auto px-4 sm:px-6 lg:px-8 text-center"
          >
            <h2 className="text-3xl md:text-5xl font-light mb-6">
              {t("cta.title")}
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              {t("cta.desc")}
            </p>
            <button className="px-12 py-4 bg-white text-wine rounded-full hover:bg-light transition-all duration-300 font-medium shadow-xl">
              {t("cta.bookBtn")}
            </button>
            <p className="mt-6 text-sm opacity-75">
              {t("cta.address")}
            </p>
          </motion.div>
        </section>
      </main>
    </>
  );
};

export default PicoLaserLanding;
