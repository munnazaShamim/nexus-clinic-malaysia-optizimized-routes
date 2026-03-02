"use client";

import { motion } from "framer-motion";
import {
  Droplets,
  Sparkles,
  Shield,
  Clock,
  MapPin,
  Heart,
  Leaf,
  ChevronRight,
  CheckCircle2,
  Calendar,
  Users,
  Award,
  Syringe,
  Wind,
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

const HairMesotherapyLanding = ({
  locale = fallbackLng,
}: {
  locale?: string;
}) => {
  const { t } = useTranslation(locale, "hairMesotherapy");

  const faqs = [
    { q: t("faq.q1"), a: t("faq.a1") },
    { q: t("faq.q2"), a: t("faq.a2") },
    { q: t("faq.q3"), a: t("faq.a3") },
    { q: t("faq.q4"), a: t("faq.a4") },
    { q: t("faq.q5"), a: t("faq.a5") },
  ];

  return (
    <>
      <main className="min-h-screen bg-linear-to-b from-light to-cream font-['Inter',sans-serif] overflow-hidden">
        {/* Hero Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
        >
          {/* Background Ornament */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              variants={fadeInLeft}
              className="absolute -top-1/2 -left-1/2 w-full h-full"
            >
              <div className="w-200 h-200 rounded-full bg-linear-to-r from-wine/5 to-rose/5 blur-3xl"></div>
            </motion.div>
            <motion.div
              variants={fadeInRight}
              className="absolute -bottom-1/2 -right-1/2 w-full h-full"
            >
              <div className="w-200 h-200 rounded-full bg-linear-to-l from-taupe/5 to-brown/5 blur-3xl"></div>
            </motion.div>
          </div>

          <div className="relative max-w-7xl mx-auto text-center">
            <motion.div
              variants={fadeInUp}
              className="mb-6 inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-taupe/20"
            >
              <Sparkles className="w-4 h-4 text-wine" />
              <span className="text-sm font-medium text-brown">
                {t("hero.badge")}
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl sm:text-6xl lg:text-7xl font-['Georgia',serif] text-brown mb-6 leading-tight"
            >
              {t("hero.title1")}
              <span className="block text-wine">{t("hero.title2")}</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl text-taupe max-w-2xl mx-auto mb-8"
            >
              {t("hero.desc")}
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-wine text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {t("hero.bookBtn")}
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-rose"
                  initial={{ x: "100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/70 backdrop-blur-sm text-brown rounded-2xl font-semibold border border-taupe/30 hover:bg-white/90 transition-all duration-300"
              >
                {t("hero.learnBtn")}
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
            >
              {[
                { icon: Users, label: t("hero.s1Label"), value: t("hero.s1Value") },
                { icon: Award, label: t("hero.s2Label"), value: t("hero.s2Value") },
                { icon: Clock, label: t("hero.s3Label"), value: t("hero.s3Value") },
                { icon: MapPin, label: t("hero.s4Label"), value: t("hero.s4Value") },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  className="text-center"
                >
                  <stat.icon className="w-6 h-6 text-wine mx-auto mb-2" />
                  <div className="text-lg font-bold text-brown">
                    {stat.value}
                  </div>
                  <div className="text-sm text-taupe">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <div className="w-6 h-10 border-2 border-wine/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-wine rounded-full mt-2"></div>
            </div>
          </motion.div>
        </motion.section>

        {/* What is Mesotherapy */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="py-24 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm"
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInLeft}>
                <motion.div
                  variants={fadeInUp}
                  className="inline-flex items-center gap-2 bg-wine/10 px-4 py-2 rounded-full mb-6"
                >
                  <Syringe className="w-4 h-4 text-wine" />
                  <span className="text-sm font-medium text-wine">
                    {t("whatIs.badge")}
                  </span>
                </motion.div>

                <motion.h2
                  variants={fadeInUp}
                  className="text-4xl font-['Georgia',serif] text-brown mb-6"
                >
                  {t("whatIs.title")}
                </motion.h2>

                <motion.p
                  variants={fadeInUp}
                  className="text-lg text-taupe mb-6"
                >
                  {t("whatIs.desc")}
                </motion.p>

                <motion.div variants={staggerContainer} className="space-y-4">
                  {[
                    t("whatIs.b1"),
                    t("whatIs.b2"),
                    t("whatIs.b3"),
                    t("whatIs.b4"),
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInRight}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-wine shrink-0 mt-1" />
                      <span className="text-brown">{item}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              <motion.div variants={fadeInRight} className="relative">
                <div className="aspect-square bg-[url(https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80)] bg-cover rounded-3xl bg-linear-to-br from-wine to-rose p-1"></div>

                {/* Floating card */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                  className="absolute -bottom-6 -left-6 bg-white/70 backdrop-blur-sm p-4 rounded-2xl shadow-xl border border-taupe/20"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-wine/20 flex items-center justify-center">
                      <Droplets className="w-5 h-5 text-wine" />
                    </div>
                    <div>
                      <div className="text-sm text-taupe">{t("whatIs.depthLabel")}</div>
                      <div className="text-lg font-bold text-brown">{t("whatIs.depthValue")}</div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Benefits Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="py-24 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={fadeInUp}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-4xl font-['Georgia',serif] text-brown mb-4">
                {t("benefits.title")}
              </h2>
              <p className="text-lg text-taupe">
                {t("benefits.desc")}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: Heart, title: t("benefits.b1Title"), description: t("benefits.b1Desc") },
                { icon: Leaf, title: t("benefits.b2Title"), description: t("benefits.b2Desc") },
                { icon: Shield, title: t("benefits.b3Title"), description: t("benefits.b3Desc") },
                { icon: Sparkles, title: t("benefits.b4Title"), description: t("benefits.b4Desc") },
                { icon: Calendar, title: t("benefits.b5Title"), description: t("benefits.b5Desc") },
                { icon: Wind, title: t("benefits.b6Title"), description: t("benefits.b6Desc") },
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={{ y: -5 }}
                  className="group bg-white/70 backdrop-blur-sm p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-taupe/10"
                >
                  <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-wine/10 to-rose/10 group-hover:from-wine group-hover:to-rose transition-all duration-300 flex items-center justify-center mb-6">
                    <benefit.icon className="w-6 h-6 text-wine group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-brown mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-taupe leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Process Timeline */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="py-24 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm"
        >
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={fadeInUp}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-4xl font-['Georgia',serif] text-brown mb-4">
                {t("journey.title")}
              </h2>
              <p className="text-lg text-taupe">
                {t("journey.desc")}
              </p>
            </motion.div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-linear-to-b from-wine via-rose to-taupe hidden lg:block"></div>

              <div className="space-y-12">
                {[
                  {
                    step: "01",
                    title: t("journey.s1Title"),
                    description: t("journey.s1Desc"),
                    icon: Users,
                    align: "left",
                  },
                  {
                    step: "02",
                    title: t("journey.s2Title"),
                    description: t("journey.s2Desc"),
                    icon: Heart,
                    align: "right",
                  },
                  {
                    step: "03",
                    title: t("journey.s3Title"),
                    description: t("journey.s3Desc"),
                    icon: Syringe,
                    align: "left",
                  },
                  {
                    step: "04",
                    title: t("journey.s4Title"),
                    description: t("journey.s4Desc"),
                    icon: Leaf,
                    align: "right",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className={`flex flex-col ${item.align === "right" ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-8 relative`}
                  >
                    <div className="flex-1 text-center lg:text-left">
                      {item.align === "left" && (
                        <>
                          <div className="text-wine font-bold mb-2">
                            {t("journey.step")} {item.step}
                          </div>
                          <h3 className="text-2xl font-bold text-brown mb-4">
                            {item.title}
                          </h3>
                          <p className="text-taupe">{item.description}</p>
                        </>
                      )}
                    </div>

                    <div className="relative z-10 w-16 h-16 rounded-full bg-linear-to-br from-wine to-rose flex items-center justify-center text-white font-bold shadow-lg">
                      <item.icon className="w-6 h-6" />
                    </div>

                    <div className="flex-1 text-center lg:text-right">
                      {item.align === "right" && (
                        <>
                          <div className="text-wine font-bold mb-2">
                            {t("journey.step")} {item.step}
                          </div>
                          <h3 className="text-2xl font-bold text-brown mb-4">
                            {item.title}
                          </h3>
                          <p className="text-taupe">{item.description}</p>
                        </>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Pricing Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="py-24 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={fadeInUp}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-4xl font-['Georgia',serif] text-brown mb-4">
                {t("pricing.title")}
              </h2>
              <p className="text-lg text-taupe">
                {t("pricing.desc")}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: t("pricing.p1Name"),
                  price: t("pricing.p1Price"),
                  description: t("pricing.p1Desc"),
                  features: [
                    t("pricing.p1F1"),
                    t("pricing.p1F2"),
                    t("pricing.p1F3"),
                    t("pricing.p1F4"),
                  ],
                },
                {
                  name: t("pricing.p2Name"),
                  price: t("pricing.p2Price"),
                  period: t("pricing.p2Period"),
                  description: t("pricing.p2Desc"),
                  features: [
                    t("pricing.p2F1"),
                    t("pricing.p2F2"),
                    t("pricing.p2F3"),
                    t("pricing.p2F4"),
                    t("pricing.p2F5"),
                  ],
                  popular: true,
                },
                {
                  name: t("pricing.p3Name"),
                  price: t("pricing.p3Price"),
                  period: t("pricing.p3Period"),
                  description: t("pricing.p3Desc"),
                  features: [
                    t("pricing.p3F1"),
                    t("pricing.p3F2"),
                    t("pricing.p3F3"),
                    t("pricing.p3F4"),
                    t("pricing.p3F5"),
                    t("pricing.p3F6"),
                  ],
                },
              ].map((plan, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={{ y: -5 }}
                  className={`relative bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg border ${
                    plan.popular
                      ? "border-wine ring-2 ring-wine/20"
                      : "border-taupe/20"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-linear-to-r from-wine to-rose text-white px-4 py-1 rounded-full text-sm font-semibold">
                        {t("pricing.popular")}
                      </div>
                    </div>
                  )}

                  <h3 className="text-2xl font-bold text-brown mb-2">
                    {plan.name}
                  </h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-wine">
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-taupe ml-2">/{plan.period}</span>
                    )}
                  </div>
                  <p className="text-taupe mb-6">{plan.description}</p>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-wine shrink-0" />
                        <span className="text-sm text-brown">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
                      plan.popular
                        ? "bg-linear-to-r from-wine to-rose text-white shadow-lg hover:shadow-xl"
                        : "bg-brown/10 text-brown hover:bg-brown/20"
                    }`}
                  >
                    {t("pricing.chooseBtn")}
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* FAQ Section */}
        <FAQ data={faqs} />

        {/* CTA Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="py-24 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-4xl mx-auto">
            <motion.div
              variants={scaleIn}
              className="relative bg-linear-to-br from-wine to-rose rounded-3xl p-12 text-center overflow-hidden"
            >
              {/* Background decoration */}
              <div className="absolute inset-0 bg-[url('data:image/svg+xml,...')] opacity-10"></div>

              <motion.div variants={staggerContainer} className="relative z-10">
                <motion.h2
                  variants={fadeInUp}
                  className="text-4xl font-['Georgia',serif] text-white mb-4"
                >
                  {t("cta.title")}
                </motion.h2>

                <motion.p
                  variants={fadeInUp}
                  className="text-lg text-white/90 mb-8"
                >
                  {t("cta.desc")}
                </motion.p>

                <motion.div
                  variants={fadeInUp}
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-white text-wine rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    {t("cta.scheduleBtn")}
                  </motion.button>

                  <motion.a
                    href="tel:016-7025699"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white rounded-2xl font-semibold border border-white/30 hover:bg-white/30 transition-all duration-300"
                  >
                    {t("cta.callBtn")}
                  </motion.a>
                </motion.div>

                <motion.p
                  variants={fadeInUp}
                  className="text-white/80 mt-6 text-sm"
                >
                  {t("cta.address")}
                </motion.p>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>
      </main>
    </>
  );
};

export default HairMesotherapyLanding;
