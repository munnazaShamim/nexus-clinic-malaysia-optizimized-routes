"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Sparkles,
  Sun,
  Clock,
  Heart,
  ChevronRight,
  Phone,
  MapPin,
  CheckCircle2,
  Zap,
  Feather,
  Gem,
  Sparkle,
  Award,
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

const AntiAgingLanding = ({ locale = fallbackLng }: { locale?: string }) => {
  const { t } = useTranslation(locale, "antiAging");

  const images = {
    hero: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    consultation:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    treatment:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    results: "/images/treatment/happy-patient.png",
    clinic:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    skincare:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&q=80",
    beforeAfter:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    facial:
      "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  };

  const faqs = Array.from({ length: 9 }, (_, i) => ({
    q: t(`faq.q${i + 1}`),
    a: t(`faq.a${i + 1}`),
  }));

  return (
    <>
      <main className="bg-light font-[--font-inter] overflow-hidden">
        {/* Hero Section with Image */}
        <section className="relative min-h-screen flex items-center">
          <div className="absolute inset-0 z-0">
            <img
              src={images.hero}
              alt="Luxury skincare clinic"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-r from-light via-light/90 to-transparent" />
          </div>

          <div className="absolute inset-0 opacity-20 z-0">
            <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-rose blur-3xl" />
            <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-wine blur-3xl" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <motion.div variants={fadeInLeft} className="space-y-8">
                <motion.div variants={scaleIn} className="inline-block">
                  <span className="bg-glass backdrop-blur-sm px-4 py-2 rounded-full text-wine border border-wine/20">
                    {t("hero.badge")}
                  </span>
                </motion.div>

                <h1 className="text-5xl lg:text-6xl font-[--font-georgia] leading-tight">
                  {t("hero.title1")}{" "}
                  <span className="text-wine">{t("hero.title2")}</span>
                </h1>

                <p className="text-xl text-brown/80 leading-relaxed bg-glass backdrop-blur-sm p-6 rounded-2xl">
                  {t("hero.desc")}
                </p>

                <motion.div
                  variants={fadeInUp}
                  className="flex flex-wrap gap-4"
                >
                  <button className="group bg-wine text-white px-8 py-4 rounded-full hover:bg-rose transition-all duration-300 flex items-center gap-2">
                    {t("hero.cta1")}
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="border-2 border-wine text-wine px-8 py-4 rounded-full hover:bg-wine hover:text-white transition-all duration-300">
                    {t("hero.cta2")}
                  </button>
                </motion.div>
              </motion.div>

              <motion.div variants={fadeInRight} className="relative">
                <div className="aspect-square rounded-full bg-linear-to-br from-rose to-wine opacity-20 absolute inset-0" />
                <div className="relative bg-glass backdrop-blur-md rounded-3xl p-8 border border-white/50">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <MapPin className="text-wine" />
                      <p className="text-brown">{t("hero.address")}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <Phone className="text-wine" />
                      <p className="text-brown">{t("hero.phone")}</p>
                    </div>
                    <div className="border-t border-taupe/20 pt-6">
                      <h3 className="font-[--font-georgia] text-lg mb-4">
                        {t("hero.programmeTitle")}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-white/50 px-3 py-1 rounded-full text-sm">
                          {t("hero.tag1")}
                        </span>
                        <span className="bg-white/50 px-3 py-1 rounded-full text-sm">
                          {t("hero.tag2")}
                        </span>
                        <span className="bg-white/50 px-3 py-1 rounded-full text-sm">
                          {t("hero.tag3")}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Trust Section with Images */}
        <section className="py-20 bg-cream">
          <div className="container mx-auto px-4">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              className="grid md:grid-cols-2 gap-8 mb-12"
            >
              <motion.div
                variants={fadeInLeft}
                className="relative h-96 rounded-3xl overflow-hidden"
              >
                <img
                  src={images.clinic}
                  alt="Modern clinic interior"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-brown/50 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-[--font-georgia]">
                    {t("trust.img1Title")}
                  </h3>
                  <p>{t("trust.img1Desc")}</p>
                </div>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                className="relative h-96 rounded-3xl overflow-hidden"
              >
                <img
                  src={images.consultation}
                  alt="Expert consultation"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-wine/50 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-[--font-georgia]">
                    {t("trust.img2Title")}
                  </h3>
                  <p>{t("trust.img2Desc")}</p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {[
                { icon: MapPin, key: "t1" },
                { icon: Shield, key: "t2" },
                { icon: Sparkles, key: "t3" },
                { icon: Heart, key: "t4" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all"
                >
                  <item.icon className="w-10 h-10 text-wine mb-4" />
                  <p className="text-brown">{t(`trust.${item.key}`)}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* What Anti Aging Really Means */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              className="max-w-4xl mx-auto"
            >
              <motion.h2
                variants={fadeInUp}
                className="text-4xl font-[--font-georgia] mb-8 text-center"
              >
                {t("whatIs.title1")}{" "}
                <span className="text-wine">{t("whatIs.title2")}</span>
              </motion.h2>

              <motion.p
                variants={fadeInUp}
                className="text-xl text-brown mb-12 text-center"
              >
                {t("whatIs.desc")}
              </motion.p>

              <div className="grid md:grid-cols-2 gap-8">
                <motion.div variants={fadeInLeft} className="space-y-4">
                  <h3 className="text-2xl font-[--font-georgia] mb-4">
                    {t("whatIs.concernsTitle")}
                  </h3>
                  <ul className="space-y-3">
                    {["c1", "c2", "c3", "c4", "c5", "c6"].map((key, index) => (
                      <motion.li
                        key={index}
                        variants={scaleIn}
                        className="flex items-center gap-3 text-brown"
                      >
                        <CheckCircle2 className="w-5 h-5 text-wine" />
                        {t(`whatIs.${key}`)}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div variants={fadeInRight} className="space-y-4">
                  <div className="bg-cream p-8 rounded-3xl">
                    <h3 className="text-2xl font-[--font-georgia] mb-4">
                      {t("whatIs.planTitle")}
                    </h3>
                    <div className="space-y-4">
                      <div className="bg-white p-4 rounded-xl">
                        <p className="font-semibold mb-2">
                          {t("whatIs.plan1Title")}
                        </p>
                        <p className="text-sm text-brown/70">
                          {t("whatIs.plan1Desc")}
                        </p>
                      </div>
                      <div className="bg-white p-4 rounded-xl">
                        <p className="font-semibold mb-2">
                          {t("whatIs.plan2Title")}
                        </p>
                        <p className="text-sm text-brown/70">
                          {t("whatIs.plan2Desc")}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="relative h-48 rounded-2xl overflow-hidden">
                    <img
                      src={images.skincare}
                      alt="Skincare products"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why Skin Ages Faster in Malaysia */}
        <section className="py-20 bg-wine text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <img
              src={images.facial}
              alt="Background texture"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              className="max-w-4xl mx-auto"
            >
              <motion.h2
                variants={fadeInUp}
                className="text-4xl font-[--font-georgia] mb-8"
              >
                {t("whyFaster.title")}
              </motion.h2>

              <motion.p
                variants={fadeInUp}
                className="text-xl mb-12 opacity-90"
              >
                {t("whyFaster.desc")}
              </motion.p>

              <motion.div
                variants={staggerContainer}
                className="grid md:grid-cols-2 gap-6"
              >
                {[
                  { icon: Sun, key: "f1" },
                  { icon: Clock, key: "f2" },
                  { icon: Zap, key: "f3" },
                  { icon: Feather, key: "f4" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20"
                  >
                    <item.icon className="w-8 h-8 mb-3" />
                    <p>{t(`whyFaster.${item.key}`)}</p>
                  </motion.div>
                ))}
              </motion.div>

              <motion.p variants={fadeInUp} className="mt-8 text-lg italic">
                {t("whyFaster.note")}
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Treatment Showcase */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
            >
              <motion.h2
                variants={fadeInUp}
                className="text-4xl font-[--font-georgia] mb-4 text-center"
              >
                {t("treatments.title")}
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-center mb-12 text-brown"
              >
                {t("treatments.subtitle")}
              </motion.p>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <motion.div
                  variants={fadeInLeft}
                  className="relative h-80 rounded-3xl overflow-hidden"
                >
                  <img
                    src={images.treatment}
                    alt="Luxury facial treatment"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-brown/70 to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-2xl font-[--font-georgia">
                      {t("treatments.img1Title")}
                    </h3>
                    <p>{t("treatments.img1Desc")}</p>
                  </div>
                </motion.div>

                <motion.div
                  variants={fadeInRight}
                  className="relative h-80 rounded-3xl overflow-hidden"
                >
                  <img
                    src={images.results}
                    alt="Happy client results"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-wine/70 to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-2xl font-[--font-georgia">
                      {t("treatments.img2Title")}
                    </h3>
                    <p>{t("treatments.img2Desc")}</p>
                  </div>
                </motion.div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    icon: Feather,
                    nameKey: "t1Name",
                    typeKey: "t1Type",
                    bestKey: "t1Best",
                    downtimeKey: "t1Downtime",
                  },
                  {
                    icon: Gem,
                    nameKey: "t2Name",
                    bestKey: "t2Best",
                    downtimeKey: "t2Downtime",
                    longevityKey: "t2Longevity",
                  },
                  {
                    icon: Zap,
                    nameKey: "t3Name",
                    bestKey: "t3Best",
                    downtimeKey: "t3Downtime",
                    resultsKey: "t3Results",
                  },
                  {
                    icon: Sparkle,
                    nameKey: "t4Name",
                    bestKey: "t4Best",
                    downtimeKey: "t4Downtime",
                  },
                  {
                    icon: Sun,
                    nameKey: "t5Name",
                    typeKey: "t5Type",
                    bestKey: "t5Best",
                    downtimeKey: "t5Downtime",
                  },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-taupe/10"
                    >
                      <Icon className="w-8 h-8 text-wine mb-3" />
                      <h3 className="text-xl font-[--font-georgia] mb-2 text-wine">
                        {t(`treatments.${item.nameKey}`)}
                      </h3>
                      {item.typeKey && (
                        <p className="text-sm text-taupe mb-3">
                          {t(`treatments.${item.typeKey}`)}
                        </p>
                      )}
                      <p className="text-sm mb-2">
                        <span className="font-semibold">
                          {t("treatments.bestFor")}
                        </span>{" "}
                        {t(`treatments.${item.bestKey}`)}
                      </p>
                      <p className="text-sm mb-2">
                        <span className="font-semibold">
                          {t("treatments.downtime")}
                        </span>{" "}
                        {t(`treatments.${item.downtimeKey}`)}
                      </p>
                      {item.longevityKey && (
                        <p className="text-sm">
                          <span className="font-semibold">
                            {t("treatments.longevity")}
                          </span>{" "}
                          {t(`treatments.${item.longevityKey}`)}
                        </p>
                      )}
                      {item.resultsKey && (
                        <p className="text-sm">
                          <span className="font-semibold">
                            {t("treatments.results")}
                          </span>{" "}
                          {t(`treatments.${item.resultsKey}`)}
                        </p>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Before & After Concept */}
        <section className="py-20 bg-cream">
          <div className="container mx-auto px-4">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              className="max-w-4xl mx-auto"
            >
              <motion.h2
                variants={fadeInUp}
                className="text-4xl font-[--font-georgia] mb-8 text-center"
              >
                {t("naturalResults.title")}
              </motion.h2>

              <motion.div
                variants={scaleIn}
                className="relative h-96 rounded-3xl overflow-hidden mb-8"
              >
                <img
                  src={images.beforeAfter}
                  alt="Before and after concept"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-r from-wine/30 to-rose/30 flex items-center justify-center">
                  <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl text-center">
                    <p className="text-wine font-[--font-georgia] text-xl">
                      {t("naturalResults.motto")}
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.p
                variants={fadeInUp}
                className="text-center text-brown text-lg"
              >
                {t("naturalResults.desc")}
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Consultation Section */}
        <section className="py-20 bg-wine text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <img
              src={images.consultation}
              alt="Consultation background"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              className="max-w-3xl mx-auto"
            >
              <motion.h2
                variants={fadeInUp}
                className="text-4xl font-[--font-georgia] mb-8 text-center"
              >
                {t("consultation.title")}
              </motion.h2>

              <motion.div variants={staggerContainer} className="space-y-4">
                {["s1", "s2", "s3", "s4"].map((key, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInLeft}
                    className="flex items-center gap-4 bg-white/10 backdrop-blur-sm p-4 rounded-xl"
                  >
                    <span className="w-8 h-8 rounded-full bg-white text-wine flex items-center justify-center font-bold">
                      {index + 1}
                    </span>
                    <p>{t(`consultation.${key}`)}</p>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                variants={scaleIn}
                className="mt-8 grid grid-cols-2 gap-4"
              >
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl text-center">
                  <Award className="w-8 h-8 mx-auto mb-2" />
                  <p className="text-sm">{t("consultation.badge1")}</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl text-center">
                  <Star className="w-8 h-8 mx-auto mb-2" />
                  <p className="text-sm">{t("consultation.badge2")}</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Cost Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              className="max-w-4xl mx-auto"
            >
              <motion.h2
                variants={fadeInUp}
                className="text-4xl font-[--font-georgia] mb-8 text-center"
              >
                {t("cost.title")}
              </motion.h2>

              <motion.p
                variants={fadeInUp}
                className="text-center mb-8 text-brown"
              >
                {t("cost.subtitle")}
              </motion.p>

              <motion.div
                variants={staggerContainer}
                className="grid md:grid-cols-2 gap-4"
              >
                {[
                  { tKey: "p1Treatment", rKey: "p1Range" },
                  { tKey: "p2Treatment", rKey: "p2Range" },
                  { tKey: "p3Treatment", rKey: "p3Range" },
                  { tKey: "p4Treatment", rKey: "p4Range" },
                  { tKey: "p5Treatment", rKey: "p5Range" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="flex justify-between items-center p-4 bg-cream rounded-xl"
                  >
                    <span className="font-semibold">
                      {t(`cost.${item.tKey}`)}
                    </span>
                    <span className="text-wine">{t(`cost.${item.rKey}`)}</span>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="mt-8 bg-wine text-white p-6 rounded-2xl"
              >
                <h3 className="text-xl font-[--font-georgia] mb-3">
                  {t("cost.budgetTitle")}
                </h3>
                <p>{t("cost.budgetDesc")}</p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* FAQs */}
        <FAQ data={faqs} />

        {/* Final CTA */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src={images.clinic}
              alt="Nexus Clinic"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-r from-wine to-rose opacity-90" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              className="max-w-2xl mx-auto text-center text-white"
            >
              <motion.h2
                variants={fadeInUp}
                className="text-4xl font-[--font-georgia] mb-6"
              >
                {t("cta.title")}
              </motion.h2>

              <motion.p variants={fadeInUp} className="text-xl mb-8 opacity-90">
                {t("cta.desc")}
              </motion.p>

              <motion.div variants={scaleIn} className="space-y-4">
                <p className="text-2xl font-[--font-georgia]">
                  {t("cta.clinicName")}
                </p>
                <p>{t("cta.address")}</p>
                <p className="text-3xl font-semibold">{t("cta.phone")}</p>

                <button className="mt-8 bg-white text-wine px-12 py-4 rounded-full text-lg font-semibold hover:bg-cream transition-all duration-300 transform hover:scale-105 shadow-xl">
                  {t("cta.button")}
                </button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

export default AntiAgingLanding;
