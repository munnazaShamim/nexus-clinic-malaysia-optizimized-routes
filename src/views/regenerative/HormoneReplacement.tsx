"use client";

import { motion } from "framer-motion";
import {
  Moon,
  Brain,
  Heart,
  Shield,
  Clock,
  MapPin,
  Activity,
  Users,
  Scale,
  ThermometerSun,
  Droplet,
  ArrowRight,
} from "lucide-react";
import {
  staggerContainer,
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  scaleIn,
} from "../../lib/animations";
import { useTranslation } from "@/src/i18n/client";
import { fallbackLng } from "@/src/i18n/settings";

const HormonReplaceLanding = ({ locale = fallbackLng }: { locale?: string }) => {
  const { t } = useTranslation(locale, "hormoneReplacement");

  const images = {
    heroWoman:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1287&q=80",
    consultation:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    clinic:
      "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?ixlib=rb-4.0.3&auto=format&fit=crop&w=1191&q=80",
    hormones:
      "https://images.unsplash.com/photo-1584362917165-526a968579e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1176&q=80",
    wellness:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1220&q=80",
  };

  return (
    <>
      <main className="min-h-screen bg-linear-to-b from-light to-cream">
        {/* Hero Section with Image */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-96 h-96 bg-wine rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-rose rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-taupe rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column */}
              <motion.div variants={fadeInLeft} className="space-y-8">
                <motion.div variants={fadeInUp} className="inline-block">
                  <span className="bg-wine/10 text-wine px-4 py-2 rounded-full text-sm font-semibold tracking-wide">
                    {t("hero.badge")}
                  </span>
                </motion.div>

                <motion.h1
                  variants={fadeInUp}
                  className="text-5xl lg:text-6xl font-bold leading-tight"
                  style={{ fontFamily: "Georgia, serif", color: "#4B3A33" }}
                >
                  {t("hero.title1")}
                  <span className="block text-wine">{t("hero.title2")}</span>
                  {t("hero.title3")}
                </motion.h1>

                <motion.p
                  variants={fadeInUp}
                  className="text-xl text-taupe leading-relaxed"
                >
                  {t("hero.desc")}
                </motion.p>

                <motion.p
                  variants={fadeInUp}
                  className="text-lg text-brown bg-cream p-6 rounded-2xl border-l-4 border-wine"
                >
                  {t("hero.highlight")}
                </motion.p>

                <motion.div
                  variants={fadeInUp}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <button className="group bg-wine text-white px-8 py-4 rounded-full font-semibold hover:bg-rose transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                    {t("hero.cta1")}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="border-2 border-taupe text-brown px-8 py-4 rounded-full font-semibold hover:bg-taupe/10 transition-all duration-300">
                    {t("hero.cta2")}
                  </button>
                </motion.div>
              </motion.div>

              {/* Right Column - Hero Image */}
              <motion.div variants={fadeInRight} className="relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl ">
                  <img
                    src={images.heroWoman}
                    alt="Woman feeling rejuvenated"
                    className="w-full aspect-4/4 object-cover "
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-wine/30 to-transparent"></div>
                </div>

                {/* Trust Badge */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5, type: "spring" }}
                  className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl flex items-center gap-3"
                >
                  <Shield className="w-8 h-8 text-wine" />
                  <div>
                    <p className="font-bold text-brown">{t("hero.trustTitle")}</p>
                    <p className="text-sm text-taupe">{t("hero.trustDesc")}</p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <div className="w-6 h-10 border-2 border-taupe rounded-full flex justify-center">
              <div className="w-1 h-3 bg-wine rounded-full mt-2"></div>
            </div>
          </motion.div>
        </section>

        {/* What is HRT Section with Image */}
        <section className="py-24 bg-white">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="container mx-auto px-4 sm:px-6 lg:px-8"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInLeft}>
                <span className="text-wine font-semibold tracking-wide">
                  {t("whatIs.badge")}
                </span>
                <h2
                  className="text-4xl md:text-5xl font-bold mt-4 mb-6"
                  style={{ fontFamily: "Georgia, serif", color: "#4B3A33" }}
                >
                  {t("whatIs.title")}
                </h2>
                <div className="w-24 h-1 bg-wine rounded-full mb-8"></div>

                <div className="space-y-6">
                  <p className="text-lg text-brown leading-relaxed">
                    {t("whatIs.desc1")}
                  </p>
                  <p className="text-lg text-brown leading-relaxed bg-cream p-6 rounded-2xl border-l-4 border-rose">
                    {t("whatIs.desc2")}
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeInRight} className="relative">
                <div className="relative rounded-3xl overflow-hidden shadow-xl">
                  <img
                    src={images.hormones}
                    alt="Hormone balance representation"
                    className="w-full h-125 object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-brown/50 to-transparent"></div>
                </div>

                {/* Stats Card */}
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-wine/10 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-wine" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-brown">{t("whatIs.statsNumber")}</p>
                      <p className="text-sm text-taupe">{t("whatIs.statsLabel")}</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Symptoms Section with Image */}
        <section className="py-24 bg-light">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="container mx-auto px-4 sm:px-6 lg:px-8"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInLeft} className="order-2 lg:order-1">
                <div className="relative">
                  <img
                    src={images.wellness}
                    alt="Women discussing wellness"
                    className="w-full h-125 object-cover rounded-3xl shadow-xl"
                  />

                  {/* Floating Cards */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 3 }}
                    className="absolute top-10 left-10 bg-white/90 backdrop-blur rounded-xl p-4 shadow-lg"
                  >
                    <div className="flex items-center gap-2">
                      <ThermometerSun className="w-5 h-5 text-wine" />
                      <span className="text-sm font-medium text-brown">
                        {t("symptoms.floatingCard1")}
                      </span>
                    </div>
                  </motion.div>

                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 3.5 }}
                    className="absolute bottom-10 right-10 bg-white/90 backdrop-blur rounded-xl p-4 shadow-lg"
                  >
                    <div className="flex items-center gap-2">
                      <Moon className="w-5 h-5 text-rose" />
                      <span className="text-sm font-medium text-brown">
                        {t("symptoms.floatingCard2")}
                      </span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div variants={fadeInRight} className="order-1 lg:order-2">
                <span className="text-wine font-semibold tracking-wide">
                  {t("symptoms.badge")}
                </span>
                <h2
                  className="text-4xl md:text-5xl font-bold mt-4 mb-6"
                  style={{ fontFamily: "Georgia, serif", color: "#4B3A33" }}
                >
                  {t("symptoms.title")}
                </h2>
                <div className="w-24 h-1 bg-wine rounded-full mb-8"></div>

                <div className="space-y-4">
                  {[
                    { icon: <Activity className="w-5 h-5" />, text: t("symptoms.s1") },
                    { icon: <Brain className="w-5 h-5" />, text: t("symptoms.s2") },
                    { icon: <ThermometerSun className="w-5 h-5" />, text: t("symptoms.s3") },
                    { icon: <Droplet className="w-5 h-5" />, text: t("symptoms.s4") },
                    { icon: <Heart className="w-5 h-5" />, text: t("symptoms.s5") },
                    { icon: <Scale className="w-5 h-5" />, text: t("symptoms.s6") },
                  ].map((quote, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow border-l-4 border-rose flex items-center gap-3"
                    >
                      <div className="text-wine">{quote.icon}</div>
                      <p className="text-brown italic">{quote.text}</p>
                    </motion.div>
                  ))}
                </div>

                <motion.p
                  variants={fadeInUp}
                  className="mt-6 text-lg text-brown bg-wine/5 p-4 rounded-xl"
                >
                  {t("symptoms.note")}
                </motion.p>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Clinic Environment Section */}
        <section className="py-24 bg-white">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="container mx-auto px-4 sm:px-6 lg:px-8"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInLeft}>
                <h2
                  className="text-4xl md:text-5xl font-bold mb-6"
                  style={{ fontFamily: "Georgia, serif", color: "#4B3A33" }}
                >
                  {t("comfort.title1")}{" "}
                  <span className="text-wine">{t("comfort.title2")}</span>
                </h2>

                <div className="space-y-6">
                  <p className="text-lg text-brown leading-relaxed">
                    {t("comfort.desc")}
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: <Shield className="w-6 h-6" />, text: t("comfort.item1") },
                      { icon: <Heart className="w-6 h-6" />, text: t("comfort.item2") },
                      { icon: <Clock className="w-6 h-6" />, text: t("comfort.item3") },
                      { icon: <Users className="w-6 h-6" />, text: t("comfort.item4") },
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        variants={fadeInUp}
                        className="bg-cream p-4 rounded-xl text-center"
                      >
                        <div className="text-wine flex justify-center mb-2">
                          {item.icon}
                        </div>
                        <p className="text-sm font-medium text-brown">
                          {item.text}
                        </p>
                      </motion.div>
                    ))}
                  </div>

                  <div className="bg-cream p-6 rounded-xl">
                    <p className="text-brown font-medium">
                      📍 {t("comfort.address")}
                    </p>
                    <p className="text-wine font-bold mt-2">
                      {t("comfort.phone")}
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeInRight} className="relative">
                <div className="relative rounded-3xl overflow-hidden shadow-xl">
                  <img
                    src={images.clinic}
                    alt="Nexus Clinic modern interior"
                    className="w-full h-125 object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent"></div>
                </div>

                {/* Location Badge */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring" }}
                  className="absolute -bottom-4 -left-4 bg-wine text-white rounded-xl p-4 shadow-xl flex items-center gap-3"
                >
                  <MapPin className="w-6 h-6" />
                  <div>
                    <p className="font-bold">{t("comfort.locationTitle")}</p>
                    <p className="text-sm opacity-90">{t("comfort.locationDesc")}</p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Consultation Section with Image */}
        <section className="py-24 bg-light">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="container mx-auto px-4 sm:px-6 lg:px-8"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInLeft} className="order-2 lg:order-1">
                <img
                  src={images.consultation}
                  alt="Doctor consultation"
                  className="w-full h-125 object-cover rounded-3xl shadow-xl"
                />
              </motion.div>

              <motion.div variants={fadeInRight} className="order-1 lg:order-2">
                <h2
                  className="text-4xl md:text-5xl font-bold mb-6"
                  style={{ fontFamily: "Georgia, serif", color: "#4B3A33" }}
                >
                  {t("consultation.title1")}{" "}
                  <span className="text-wine">{t("consultation.title2")}</span>
                </h2>

                <p className="text-lg text-brown mb-8">
                  {t("consultation.desc")}
                </p>

                <div className="space-y-6">
                  {[
                    { step: "1", title: t("consultation.step1Title"), desc: t("consultation.step1Desc") },
                    { step: "2", title: t("consultation.step2Title"), desc: t("consultation.step2Desc") },
                    { step: "3", title: t("consultation.step3Title"), desc: t("consultation.step3Desc") },
                    { step: "4", title: t("consultation.step4Title"), desc: t("consultation.step4Desc") },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      className="flex items-start gap-4"
                    >
                      <div className="w-10 h-10 bg-wine text-white rounded-full flex items-center justify-center font-bold shrink-0">
                        {item.step}
                      </div>
                      <div>
                        <h4 className="font-semibold text-brown">
                          {item.title}
                        </h4>
                        <p className="text-taupe">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Benefits Section with Image Grid */}
        <section className="py-24 bg-white">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="container mx-auto px-4 sm:px-6 lg:px-8"
          >
            <div className="text-center mb-12">
              <motion.h2
                variants={fadeInUp}
                className="text-4xl md:text-5xl font-bold mb-6"
                style={{ fontFamily: "Georgia, serif", color: "#4B3A33" }}
              >
                {t("benefits.title1")}{" "}
                <span className="text-wine">
                  {t("benefits.title2")}
                </span>
              </motion.h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInLeft} className="space-y-6">
                <p className="text-lg text-brown leading-relaxed">
                  {t("benefits.desc")}
                </p>

                <div className="space-y-4">
                  {[
                    { icon: <ThermometerSun />, text: t("benefits.b1") },
                    { icon: <Droplet />, text: t("benefits.b2") },
                    { icon: <Heart />, text: t("benefits.b3") },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      className="flex items-center gap-4 p-4 bg-cream rounded-xl"
                    >
                      <div className="w-10 h-10 bg-wine text-white rounded-full flex items-center justify-center">
                        {item.icon}
                      </div>
                      <p className="text-brown">{item.text}</p>
                    </motion.div>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="bg-linear-to-br from-wine to-rose text-white p-4 rounded-xl text-center">
                    <p className="text-3xl font-bold">{t("benefits.stat1Number")}</p>
                    <p className="text-sm">{t("benefits.stat1Label")}</p>
                  </div>
                  <div className="bg-linear-to-br from-brown to-taupe text-white p-4 rounded-xl text-center">
                    <p className="text-3xl font-bold">{t("benefits.stat2Number")}</p>
                    <p className="text-sm">{t("benefits.stat2Label")}</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                className="grid grid-cols-2 gap-4"
              >
                <div className="space-y-4">
                  <img
                    src="/images/treatment/face-filler.png"
                    alt="Peaceful sleep"
                    className="w-full h-48 object-cover rounded-2xl shadow-lg"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1516726817505-f5ed825624d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=634&q=80"
                    alt="Energy and vitality"
                    className="w-full h-64 object-cover rounded-2xl shadow-lg"
                  />
                </div>
                <div className="space-y-4 mt-8">
                  <img
                    src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=634&q=80"
                    alt="Wellness and balance"
                    className="w-full h-64 object-cover rounded-2xl shadow-lg"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&auto=format&fit=crop&w=634&q=80"
                    alt="Yoga and meditation"
                    className="w-full h-48 object-cover rounded-2xl shadow-lg"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* FAQ Section with Image */}
        <section className="py-24 bg-light">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="container mx-auto px-4 sm:px-6 lg:px-8"
          >
            <div className="grid lg:grid-cols-2 gap-12">
              <motion.div variants={fadeInLeft}>
                <h2
                  className="text-4xl md:text-5xl font-bold mb-6"
                  style={{ fontFamily: "Georgia, serif", color: "#4B3A33" }}
                >
                  {t("faq.title1")} <span className="text-wine">{t("faq.title2")}</span>
                </h2>
                <p className="text-lg text-brown mb-8">
                  {t("faq.desc")}
                </p>

                <div className="relative rounded-3xl overflow-hidden shadow-xl h-100">
                  <img
                    src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
                    alt="Medical consultation"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-brown/70 to-transparent flex items-end p-6">
                    <p className="text-white text-lg">
                      {t("faq.moreQuestions")}
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                className="space-y-4 max-h-150 overflow-y-auto pr-4"
              >
                {Array.from({ length: 5 }, (_, i) => ({
                  q: t(`faq.q${i + 1}`),
                  a: t(`faq.a${i + 1}`),
                })).map((faq, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                  >
                    <details className="group">
                      <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                        <span className="font-semibold text-brown">
                          {faq.q}
                        </span>
                        <span className="text-wine group-open:rotate-180 transition-transform">
                          ▼
                        </span>
                      </summary>
                      <div className="px-6 pb-6 text-taupe">{faq.a}</div>
                    </details>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Final CTA Section with Background Image */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
              alt="Medical background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-r from-wine to-rose mix-blend-multiply opacity-90"></div>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold mb-8 text-white"
              style={{ fontFamily: "Georgia, serif" }}
            >
              {t("cta.title")}
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-xl mb-12 max-w-2xl mx-auto text-white/90"
            >
              {t("cta.desc")}
            </motion.p>

            <motion.div
              variants={scaleIn}
              className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 max-w-lg mx-auto border border-white/20"
            >
              <h3 className="text-2xl font-bold mb-4 text-white">
                {t("cta.clinicName")}
              </h3>
              <p className="mb-2 text-white/90">
                {t("cta.address")}
              </p>
              <p className="text-2xl font-bold mt-4 text-white">
                {t("cta.phone")}
              </p>

              <button className="mt-6 bg-white text-wine px-8 py-4 rounded-full font-semibold hover:bg-cream transition-all duration-300 transform hover:scale-105 shadow-lg w-full">
                {t("cta.button")}
              </button>
            </motion.div>
          </motion.div>
        </section>
      </main>
    </>
  );
};

export default HormonReplaceLanding;
