"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  Award,
  Syringe,
  Calendar,
  Clock,
  Shield,
  Users,
  ChevronRight,
  AlertCircle,
  Sparkles,
  Target,
  Heart,
  Feather,
  Scale,
  Camera,
  User,
  Droplets,
  Activity,
  TrendingUp,
} from "lucide-react";
import {
  staggerContainer,
  fadeInLeft,
  fadeInRight,
  fadeInUp,
  scaleIn,
} from "../../lib/animations";
import FAQ from "../../components/FAQ";
import { useTranslation } from "@/src/i18n/client";
import { fallbackLng } from "@/src/i18n/settings";

const ChinFillerLanding = ({ locale = fallbackLng }: { locale?: string }) => {
  const { t } = useTranslation(locale, "chinFiller");

  const faqs = [
    { q: t("faq.q1"), a: t("faq.a1") },
    { q: t("faq.q2"), a: t("faq.a2") },
    { q: t("faq.q3"), a: t("faq.a3") },
    { q: t("faq.q4"), a: t("faq.a4") },
    { q: t("faq.q5"), a: t("faq.a5") },
    { q: t("faq.q6"), a: t("faq.a6") },
  ];

  return (
    <>
      <main className="min-h-screen bg-light">
        {/* Hero Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-rose rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-wine rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInLeft} className="space-y-8">
                <motion.div variants={fadeInUp} className="inline-block">
                  <span className="bg-cream text-wine px-4 py-2 rounded-full text-sm font-medium">
                    {t("hero.badge")}
                  </span>
                </motion.div>

                <motion.h1
                  variants={fadeInUp}
                  className="font-georgia text-5xl lg:text-6xl leading-tight"
                  style={{ color: "var(--color-brown)" }}
                >
                  {t("hero.title")}
                  <span className="text-wine block mt-2">{t("hero.titleHighlight")}</span>
                </motion.h1>

                <motion.p variants={fadeInUp} className="text-lg text-taupe max-w-lg">
                  {t("hero.desc")}
                </motion.p>

                <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
                  <button className="bg-wine text-white px-8 py-4 rounded-full font-medium hover:bg-rose transition-all duration-300 shadow-lg hover:shadow-xl">
                    {t("hero.cta")}
                  </button>
                  <button className="border-2 border-wine text-wine px-8 py-4 rounded-full font-medium hover:bg-cream transition-all duration-300">
                    {t("hero.gallery")}
                  </button>
                </motion.div>

                <motion.div variants={fadeInUp} className="flex items-center gap-8 pt-8">
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-wine" />
                    <span className="text-sm text-brown">{t("hero.trust1")}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-wine" />
                    <span className="text-sm text-brown">{t("hero.trust2")}</span>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div variants={fadeInRight} className="relative">
                <div className="relative z-10 bg-glass backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/30">
                  <div className="space-y-6">
                    <h3 className="font-georgia text-2xl text-brown">{t("hero.glassTitle")}</h3>

                    <div className="space-y-4">
                      {[
                        { icon: Target, text: t("hero.glass1") },
                        { icon: Scale, text: t("hero.glass2") },
                        { icon: Camera, text: t("hero.glass3") },
                      ].map((item, index) => (
                        <motion.div key={index} variants={fadeInUp} className="flex items-start gap-3">
                          <item.icon className="w-5 h-5 text-wine mt-1 shrink-0" />
                          <p className="text-brown">{item.text}</p>
                        </motion.div>
                      ))}
                    </div>

                    <div className="bg-cream rounded-2xl p-4">
                      <p className="text-sm text-taupe italic">{t("hero.glassQuote")}</p>
                    </div>
                  </div>
                </div>

                <div className="absolute -top-4 -right-4 w-32 h-32 bg-rose rounded-full opacity-20 blur-2xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-wine rounded-full opacity-20 blur-2xl" />
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Understanding Chin Filler */}
        <motion.section initial="hidden" whileInView="visible" variants={staggerContainer} className="py-24 bg-cream">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div variants={fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-wine font-medium mb-4 block">{t("understanding.badge")}</span>
              <h2 className="font-georgia text-4xl text-brown mb-6">{t("understanding.title")}</h2>
              <p className="text-taupe text-lg">{t("understanding.desc")}</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Scale, title: t("understanding.card1Title"), desc: t("understanding.card1Desc") },
                { icon: Feather, title: t("understanding.card2Title"), desc: t("understanding.card2Desc") },
                { icon: TrendingUp, title: t("understanding.card3Title"), desc: t("understanding.card3Desc") },
                { icon: Heart, title: t("understanding.card4Title"), desc: t("understanding.card4Desc") },
              ].map((item, index) => (
                <motion.div key={index} variants={scaleIn} whileHover={{ y: -10 }} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 bg-wine/10 rounded-xl flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-wine" />
                  </div>
                  <h3 className="font-georgia text-xl text-brown mb-2">{item.title}</h3>
                  <p className="text-taupe text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Real Life Goals */}
        <motion.section initial="hidden" whileInView="visible" variants={staggerContainer} className="py-24 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInLeft} className="space-y-8">
                <h2 className="font-georgia text-4xl text-brown">
                  {t("goals.title")}
                  <span className="text-wine block mt-2">{t("goals.titleHighlight")}</span>
                </h2>

                <div className="space-y-4">
                  {[t("goals.concern1"), t("goals.concern2"), t("goals.concern3"), t("goals.concern4")].map((concern, index) => (
                    <motion.div key={index} variants={fadeInUp} className="flex items-center gap-3 bg-cream p-4 rounded-xl">
                      <AlertCircle className="w-5 h-5 text-wine shrink-0" />
                      <p className="text-brown">{concern}</p>
                    </motion.div>
                  ))}
                </div>

                <p className="text-taupe italic">{t("goals.note")}</p>
              </motion.div>

              <motion.div variants={fadeInRight} className="relative">
                <div className="bg-linear-to-br from-wine to-rose rounded-3xl p-8 text-white">
                  <h3 className="font-georgia text-2xl mb-6">{t("goals.whoTitle")}</h3>
                  <ul className="space-y-4">
                    {[t("goals.who1"), t("goals.who2"), t("goals.who3"), t("goals.who4"), t("goals.who5")].map((item, index) => (
                      <motion.li key={index} variants={fadeInUp} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 shrink-0" />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* The Art of Planning */}
        <motion.section initial="hidden" whileInView="visible" variants={staggerContainer} className="py-24 bg-cream">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div variants={fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="font-georgia text-4xl text-brown mb-6">{t("planning.title")}</h2>
              <p className="text-taupe">{t("planning.desc")}</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {[t("planning.point1"), t("planning.point2"), t("planning.point3"), t("planning.point4"), t("planning.point5"), t("planning.point6")].map((item, index) => (
                <motion.div key={index} variants={scaleIn} className="bg-white rounded-xl p-6 shadow-md flex items-center gap-4">
                  <div className="w-10 h-10 bg-wine rounded-full flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                  <p className="text-brown">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Premium Fillers */}
        <motion.section initial="hidden" whileInView="visible" variants={staggerContainer} className="py-24 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div variants={fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="font-georgia text-4xl text-brown mb-6">{t("fillers.title")}</h2>
              <p className="text-taupe">{t("fillers.desc")}</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: t("fillers.filler1Name"), price: t("fillers.filler1Price"), use: t("fillers.filler1Use") },
                { name: t("fillers.filler2Name"), price: t("fillers.filler2Price"), use: t("fillers.filler2Use") },
                { name: t("fillers.filler3Name"), price: t("fillers.filler3Price"), use: t("fillers.filler3Use") },
                { name: t("fillers.filler4Name"), price: t("fillers.filler4Price"), use: t("fillers.filler4Use") },
              ].map((filler, index) => (
                <motion.div key={index} variants={scaleIn} whileHover={{ scale: 1.05 }} className="bg-cream rounded-2xl p-6 text-center group cursor-pointer">
                  <Syringe className="w-12 h-12 text-wine mx-auto mb-4 group-hover:rotate-12 transition-transform" />
                  <h3 className="font-georgia text-xl text-brown mb-2">{filler.name}</h3>
                  <p className="text-wine font-bold text-2xl mb-2">{filler.price}</p>
                  <p className="text-taupe text-sm">{t("fillers.perCc")} • {filler.use}</p>
                </motion.div>
              ))}
            </div>

            <motion.p variants={fadeInUp} className="text-center text-taupe mt-8 text-sm">
              {t("fillers.priceNote")}
            </motion.p>
          </div>
        </motion.section>

        {/* How Many CC */}
        <motion.section initial="hidden" whileInView="visible" variants={staggerContainer} className="py-24 bg-wine text-white">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <motion.div variants={fadeInUp} className="max-w-3xl mx-auto">
              <Droplets className="w-16 h-16 mx-auto mb-6 opacity-80" />
              <h2 className="font-georgia text-4xl mb-6">{t("volume.title")}</h2>
              <p className="text-2xl mb-8 font-light">
                {t("volume.desc1")}{" "}
                <span className="font-bold text-4xl">{t("volume.highlight")}</span>
              </p>
              <p className="text-lg opacity-90 mb-12">{t("volume.desc2")}</p>
              <button className="bg-white text-wine px-8 py-4 rounded-full font-medium hover:bg-cream transition-all duration-300 inline-flex items-center gap-2">
                {t("volume.cta")}
                <ChevronRight className="w-5 h-5" />
              </button>
            </motion.div>
          </div>
        </motion.section>

        {/* The Process */}
        <motion.section initial="hidden" whileInView="visible" variants={staggerContainer} className="py-24 bg-cream">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.h2 variants={fadeInUp} className="font-georgia text-4xl text-brown text-center mb-16">
              {t("process.title")}
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Target, step: t("process.step1"), title: t("process.step1Title"), desc: t("process.step1Desc") },
                { icon: Feather, step: t("process.step2"), title: t("process.step2Title"), desc: t("process.step2Desc") },
                { icon: Sparkles, step: t("process.step3"), title: t("process.step3Title"), desc: t("process.step3Desc") },
                { icon: Heart, step: t("process.step4"), title: t("process.step4Title"), desc: t("process.step4Desc") },
              ].map((item, index) => (
                <motion.div key={index} variants={scaleIn} className="relative bg-white rounded-2xl p-8 shadow-lg">
                  <div className="text-6xl font-georgia text-wine/10 absolute top-4 right-4">{item.step}</div>
                  <item.icon className="w-12 h-12 text-wine mb-4" />
                  <h3 className="font-georgia text-xl text-brown mb-2">{item.title}</h3>
                  <p className="text-taupe text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.p variants={fadeInUp} className="text-center text-brown mt-8">
              {t("process.sessionNote")}
            </motion.p>
          </div>
        </motion.section>

        {/* Results & Aftercare */}
        <motion.section initial="hidden" whileInView="visible" variants={staggerContainer} className="py-24 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              <motion.div variants={fadeInLeft} className="space-y-6">
                <h2 className="font-georgia text-4xl text-brown">{t("expect.title")}</h2>

                <div className="bg-cream rounded-2xl p-6">
                  <h3 className="font-georgia text-xl text-brown mb-4">{t("expect.immediateTitle")}</h3>
                  <ul className="space-y-3">
                    {[t("expect.immediate1"), t("expect.immediate2"), t("expect.immediate3"), t("expect.immediate4")].map((item, index) => (
                      <li key={index} className="flex items-center gap-2 text-taupe">
                        <CheckCircle2 className="w-4 h-4 text-wine" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-wine text-white rounded-2xl p-6">
                  <h3 className="font-georgia text-xl mb-4">{t("expect.aftercareTitle")}</h3>
                  <p className="mb-4">{t("expect.aftercareDesc")}</p>
                  <ul className="space-y-2 text-sm">
                    <li>• {t("expect.aftercare1")}</li>
                    <li>• {t("expect.aftercare2")}</li>
                    <li>• {t("expect.aftercare3")}</li>
                    <li>• {t("expect.aftercare4")}</li>
                  </ul>
                </div>
              </motion.div>

              <motion.div variants={fadeInRight} className="space-y-6">
                <div className="bg-cream rounded-2xl p-6">
                  <h3 className="font-georgia text-xl text-brown mb-4">{t("expect.durationTitle")}</h3>
                  <p className="text-3xl font-bold text-wine mb-2">{t("expect.durationValue")}</p>
                  <p className="text-taupe">{t("expect.durationDesc")}</p>
                </div>

                <div className="border-2 border-wine rounded-2xl p-6">
                  <h3 className="font-georgia text-xl text-brown mb-4 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-wine" />
                    {t("expect.safetyTitle")}
                  </h3>
                  <p className="text-taupe mb-4">{t("expect.safetyDesc")}</p>
                  <p className="text-sm text-wine">{t("expect.safetyNote")}</p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Pros & Cons */}
        <motion.section initial="hidden" whileInView="visible" variants={staggerContainer} className="py-24 bg-cream">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <motion.div variants={fadeInLeft} className="bg-white rounded-3xl p-8 shadow-xl">
                <h3 className="font-georgia text-2xl text-brown mb-6 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-green-500" />
                  {t("prosCons.prosTitle")}
                </h3>
                <ul className="space-y-4">
                  {[t("prosCons.pro1"), t("prosCons.pro2"), t("prosCons.pro3"), t("prosCons.pro4"), t("prosCons.pro5")].map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-brown">
                      <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div variants={fadeInRight} className="bg-white rounded-3xl p-8 shadow-xl">
                <h3 className="font-georgia text-2xl text-brown mb-6 flex items-center gap-2">
                  <AlertCircle className="w-6 h-6 text-wine" />
                  {t("prosCons.consTitle")}
                </h3>
                <ul className="space-y-4">
                  {[t("prosCons.con1"), t("prosCons.con2"), t("prosCons.con3"), t("prosCons.con4")].map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-brown">
                      <AlertCircle className="w-5 h-5 text-wine shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Comparison */}
        <motion.section initial="hidden" whileInView="visible" variants={staggerContainer} className="py-24 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.h2 variants={fadeInUp} className="font-georgia text-4xl text-brown text-center mb-16">
              {t("compare.title")}
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: t("compare.option1Title"), desc: t("compare.option1Desc"), icon: Syringe },
                { title: t("compare.option2Title"), desc: t("compare.option2Desc"), icon: Activity },
                { title: t("compare.option3Title"), desc: t("compare.option3Desc"), icon: Droplets },
              ].map((item, index) => (
                <motion.div key={index} variants={scaleIn} className="bg-cream rounded-2xl p-6 text-center">
                  <item.icon className="w-12 h-12 text-wine mx-auto mb-4" />
                  <h3 className="font-georgia text-xl text-brown mb-2">{item.title}</h3>
                  <p className="text-taupe">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* FAQ */}
        <FAQ data={faqs} />

        {/* CTA */}
        <motion.section initial="hidden" whileInView="visible" variants={staggerContainer} className="py-24 bg-wine text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-rose rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
            <motion.div variants={fadeInUp} className="max-w-3xl mx-auto">
              <User className="w-16 h-16 mx-auto mb-6 opacity-80" />
              <h2 className="font-georgia text-4xl mb-6">{t("cta.title")}</h2>
              <p className="text-xl mb-12 opacity-90">{t("cta.desc")}</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <button className="bg-white text-wine px-8 py-4 rounded-full font-medium hover:bg-cream transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  {t("cta.button1")}
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-all duration-300 flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  {t("cta.button2")}
                </button>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </main>
    </>
  );
};

export default ChinFillerLanding;
