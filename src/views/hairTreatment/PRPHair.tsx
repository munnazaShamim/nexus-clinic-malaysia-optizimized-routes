"use client";

import { motion } from "framer-motion";
import {
  Droplets,
  Sparkles,
  Clock,
  MapPin,
  Phone,
  Mail,
  Shield,
  Heart,
  Activity,
  Zap,
  Calendar,
  Award,
  Users,
  ChevronRight,
  Target,
  Leaf,
  Star,
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

const PRPLandingPage = ({ locale = fallbackLng }: { locale?: string }) => {
  const { t } = useTranslation(locale, "prpHair");

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
      <main className="min-h-screen bg-linear-to-b from-light to-cream">
        {/* Hero Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="relative overflow-hidden bg-linear-to-br from-cream via-light to-white pt-20 pb-16 px-4"
        >
          {/* Decorative Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-rose opacity-5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-wine opacity-5 rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-7xl mx-auto relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInLeft} className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-taupe/20">
                  <Leaf className="w-4 h-4 text-wine" />
                  <span className="text-sm font-inter text-brown">
                    {t("hero.badge")}
                  </span>
                </div>

                <h1 className="font-georgia text-5xl lg:text-6xl text-brown leading-tight">
                  {t("hero.title1")}
                  <span className="block text-wine mt-2">
                    {t("hero.title2")}
                  </span>
                </h1>

                <p className="text-lg text-taupe font-inter max-w-lg">
                  {t("hero.desc")}
                </p>

                <div className="flex flex-wrap gap-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-wine text-white px-8 py-4 rounded-full font-inter text-sm hover:bg-rose transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 group"
                  >
                    {t("hero.scheduleBtn")}
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-white/80 backdrop-blur-sm border border-taupe/30 text-brown px-8 py-4 rounded-full font-inter text-sm hover:bg-white transition-all duration-300"
                  >
                    {t("hero.learnBtn")}
                  </motion.button>
                </div>

                {/* Trust Indicators */}
                <div className="grid grid-cols-3 gap-4 pt-8">
                  {[
                    {
                      icon: MapPin,
                      text: t("hero.t1Text"),
                      sub: t("hero.t1Sub"),
                    },
                    {
                      icon: Award,
                      text: t("hero.t2Text"),
                      sub: t("hero.t2Sub"),
                    },
                    {
                      icon: Users,
                      text: t("hero.t3Text"),
                      sub: t("hero.t3Sub"),
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      variants={scaleIn}
                      className="flex items-start gap-2"
                    >
                      <item.icon className="w-5 h-5 text-wine mt-1 shrink-0" />
                      <div>
                        <p className="font-inter text-sm text-brown font-medium">
                          {item.text}
                        </p>
                        <p className="font-inter text-xs text-taupe">
                          {item.sub}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={fadeInRight} className="relative">
                <div className="relative rounded-3xl overflow-hidden bg-linear-to-br from-rose/10 to-wine/10 p-8">
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 space-y-6 border border-white/50">
                    <h3 className="font-georgia text-2xl text-brown">
                      {t("hero.qaTitle")}
                    </h3>

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
                      {
                        q: t("hero.qa4Q"),
                        a: t("hero.qa4A"),
                      },
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        variants={fadeInUp}
                        className="space-y-1 border-b border-taupe/10 last:border-0 pb-3 last:pb-0"
                      >
                        <p className="font-inter text-sm font-medium text-wine">
                          {item.q}
                        </p>
                        <p className="font-inter text-sm text-brown">
                          {item.a}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* What is PRP Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="py-20 px-4 bg-white/50 backdrop-blur-sm"
        >
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={fadeInUp}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <div className="inline-flex items-center gap-2 bg-wine/10 px-4 py-2 rounded-full mb-4">
                <Heart className="w-4 h-4 text-wine" />
                <span className="text-sm font-inter text-brown">
                  {t("whatIs.badge")}
                </span>
              </div>
              <h2 className="font-georgia text-4xl text-brown mb-4">
                {t("whatIs.title")}
              </h2>
              <p className="text-lg text-taupe font-inter">
                {t("whatIs.desc")}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Droplets,
                  title: t("whatIs.s1Title"),
                  desc: t("whatIs.s1Desc"),
                  color: "wine",
                },
                {
                  icon: Zap,
                  title: t("whatIs.s2Title"),
                  desc: t("whatIs.s2Desc"),
                  color: "rose",
                },
                {
                  icon: Target,
                  title: t("whatIs.s3Title"),
                  desc: t("whatIs.s3Desc"),
                  color: "brown",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-taupe/10 group"
                >
                  <div className="w-16 h-16 bg-linear-to-br from-cream to-taupe/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <item.icon className={`text-${item.color} w-8 h-8`} />
                  </div>
                  <h3 className="font-georgia text-xl text-brown mb-3">
                    {item.title}
                  </h3>
                  <p className="font-inter text-taupe">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Who It's For Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="py-20 px-4 bg-linear-to-br from-wine/5 to-rose/5"
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div variants={fadeInLeft} className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-taupe/20">
                  <Users className="w-4 h-4 text-wine" />
                  <span className="text-sm font-inter text-brown">
                    {t("whoFor.badge")}
                  </span>
                </div>

                <h2 className="font-georgia text-4xl text-brown">
                  {t("whoFor.title")}
                </h2>

                <div className="space-y-4">
                  {[
                    t("whoFor.w1"),
                    t("whoFor.w2"),
                    t("whoFor.w3"),
                    t("whoFor.w4"),
                    t("whoFor.w5"),
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      className="flex items-center gap-3 bg-white/70 backdrop-blur-sm rounded-xl p-4 border border-taupe/10"
                    >
                      <div className="w-5 h-5 rounded-full bg-wine/20 flex items-center justify-center shrink-0">
                        <div className="w-2 h-2 rounded-full bg-wine"></div>
                      </div>
                      <p className="font-inter text-brown">{item}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white"
              >
                <h3 className="font-georgia text-2xl text-brown mb-6">
                  {t("whoFor.considTitle")}
                </h3>
                <p className="font-inter text-taupe mb-6">
                  {t("whoFor.considDesc")}
                </p>
                <ul className="space-y-4">
                  {[
                    t("whoFor.c1"),
                    t("whoFor.c2"),
                    t("whoFor.c3"),
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      variants={fadeInUp}
                      className="flex items-start gap-2 text-brown"
                    >
                      <span className="text-wine">•</span>
                      <span className="font-inter text-sm">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Timeline Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="py-20 px-4 bg-white"
        >
          <div className="max-w-5xl mx-auto">
            <motion.div
              variants={fadeInUp}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <div className="inline-flex items-center gap-2 bg-rose/10 px-4 py-2 rounded-full mb-4">
                <Clock className="w-4 h-4 text-rose" />
                <span className="text-sm font-inter text-brown">
                  {t("timeline.badge")}
                </span>
              </div>
              <h2 className="font-georgia text-4xl text-brown mb-4">
                {t("timeline.title")}
              </h2>
              <p className="text-lg text-taupe font-inter">
                {t("timeline.desc")}
              </p>
            </motion.div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-linear-to-b from-wine via-rose to-taupe rounded-full hidden md:block"></div>

              <div className="space-y-12">
                {[
                  {
                    time: t("timeline.t1Time"),
                    desc: t("timeline.t1Desc"),
                    icon: Activity,
                    position: "left",
                  },
                  {
                    time: t("timeline.t2Time"),
                    desc: t("timeline.t2Desc"),
                    icon: Sparkles,
                    position: "right",
                  },
                  {
                    time: t("timeline.t3Time"),
                    desc: t("timeline.t3Desc"),
                    icon: Star,
                    position: "left",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className={`flex flex-col md:flex-row ${item.position === "right" ? "md:justify-end" : ""}`}
                  >
                    <div
                      className={`md:w-1/2 ${item.position === "right" ? "md:pl-12" : "md:pr-12"}`}
                    >
                      <div className="bg-linear-to-br from-cream to-white rounded-2xl p-6 shadow-lg border border-taupe/10 hover:shadow-xl transition-all">
                        <div className="flex items-center gap-4 mb-3">
                          <div className="w-12 h-12 bg-wine/10 rounded-full flex items-center justify-center">
                            <item.icon className="w-6 h-6 text-wine" />
                          </div>
                          <span className="font-georgia text-xl text-wine">
                            {item.time}
                          </span>
                        </div>
                        <p className="font-inter text-brown pl-16">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Session & Cost Info */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="py-20 px-4 bg-linear-to-br from-brown/5 to-wine/5"
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                variants={fadeInLeft}
                className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl"
              >
                <div className="w-16 h-16 bg-wine/10 rounded-2xl flex items-center justify-center mb-6">
                  <Calendar className="w-8 h-8 text-wine" />
                </div>
                <h3 className="font-georgia text-2xl text-brown mb-4">
                  {t("sessions.sessionsTitle")}
                </h3>
                <p className="font-inter text-taupe mb-4">
                  {t("sessions.sessionsDesc")}
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-wine"></div>
                    <p className="font-inter text-brown">
                      {t("sessions.s1")}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-rose"></div>
                    <p className="font-inter text-brown">
                      {t("sessions.s2")}
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl"
              >
                <div className="w-16 h-16 bg-rose/10 rounded-2xl flex items-center justify-center mb-6">
                  <Shield className="w-8 h-8 text-rose" />
                </div>
                <h3 className="font-georgia text-2xl text-brown mb-4">
                  {t("sessions.costTitle")}
                </h3>
                <p className="font-inter text-taupe mb-4">
                  {t("sessions.costDesc")}
                </p>
                <p className="font-georgia text-3xl text-wine mb-2">
                  {t("sessions.costRange")}
                </p>
                <p className="font-inter text-sm text-taupe">
                  {t("sessions.costNote")}
                </p>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* FAQ Section */}
        <FAQ data={faqs} />

        {/* CTA Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="py-20 px-4 bg-linear-to-br from-wine to-rose text-white"
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              variants={fadeInUp}
              className="font-georgia text-4xl md:text-5xl mb-6"
            >
              {t("cta.title")}
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-xl mb-12 text-white/90"
            >
              {t("cta.desc")}
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20"
            >
              <div className="grid md:grid-cols-2 gap-8 text-left">
                <div>
                  <h3 className="font-georgia text-xl mb-4">{t("cta.visitTitle")}</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-white/80" />
                      <p className="font-inter text-sm">
                        {t("cta.address")}
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-white/80" />
                      <p className="font-inter text-sm">
                        {t("cta.phone")}
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-white/80" />
                      <p className="font-inter text-sm">
                        {t("cta.email")}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center md:justify-end">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-wine px-8 py-4 rounded-full font-inter text-sm font-medium hover:bg-cream transition-all duration-300 shadow-lg flex items-center gap-2 group"
                  >
                    {t("cta.bookBtn")}
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </main>
    </>
  );
};

export default PRPLandingPage;
