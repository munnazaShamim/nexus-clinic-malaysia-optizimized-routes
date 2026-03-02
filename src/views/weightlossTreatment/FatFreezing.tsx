"use client";

import { motion } from "framer-motion";
import {
  ThermometerSnowflake,
  CheckCircle2,
  XCircle,
  Clock,
  Target,
  Shield,
  Heart,
  Sparkles,
  TrendingUp,
  Calendar,
  Droplets,
  Users,
  Award,
  Activity,
  Scissors,
  Wind,
  Sun,
  Star,
} from "lucide-react";
import {
  fadeInUp,
  staggerContainer,
  fadeInLeft,
  fadeInRight,
  scaleIn,
} from "../../lib/animations";
import FAQ from "../../components/FAQ";
import SectionBeforeAfter from "../../components/BeforeAfterCustomize";
import { useTranslation } from "@/src/i18n/client";
import { fallbackLng } from "@/src/i18n/settings";

const FatFreezingLanding = ({ locale = fallbackLng }: { locale?: string }) => {
  const { t } = useTranslation(locale, "fatFreezing");
  const faqs = [
    {
      q: "Does fat freezing really work?",
      a: "Yes, for the right person and fat type. Clinical research reports 20-25% reduction in fat layer thickness in treated areas.",
    },
    {
      q: "Is it painful?",
      a: "Most feel cold and suction at start, then numbness. Afterward, tingling or sensitivity. Generally well-tolerated.",
    },
    {
      q: "How many sessions do I need?",
      a: "Many see changes after 1 session, but 2-3 sessions are often recommended depending on your goals.",
    },
    {
      q: "Are results permanent?",
      a: "Treated fat cells are reduced long-term. But if you gain weight, remaining cells can expand.",
    },
    {
      q: "What's the rare risk?",
      a: "Paradoxical Adipose Hyperplasia (PAH) is rare but possible. We discuss all risks during consultation.",
    },
  ];

  const transformations = [
    {
      id: 1,
      before: "/images/B&A-w/B&A-fat-freezing1.webp",
      after: "/images/B&A-w/B&A-fat-freezing1.webp",
    },
    {
      id: 2,
      before: "/images/B&A-w/B&A-fat-freezing2.webp",
      after: "/images/B&A-w/B&A-fat-freezing2.webp",
    },
    {
      id: 3,
      before: "/images/B&A-w/B&A-fat-freezing3.webp",
      after: "/images/B&A-w/B&A-fat-freezing3.webp",
    },
  ];
  return (
    <>
      <main className="min-h-screen bg-linear-to-b from-light to-cream">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-20 pb-32 px-4">
          {/* Background Decorative Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-rose/5 blur-3xl" />
            <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-wine/5 blur-3xl" />
          </div>

          <div className="max-w-7xl mx-auto relative">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              className="grid lg:grid-cols-2 gap-16 items-center"
            >
              <motion.div variants={fadeInLeft} className="space-y-8">
                <div className="inline-flex items-center gap-2 bg-wine/10 px-4 py-2 rounded-full">
                  <Sparkles className="w-4 h-4 text-wine" />
                  <span className="text-sm font-inter text-brown">
                    Doctor-Led Fat Freezing in Kuala Lumpur
                  </span>
                </div>

                <h1 className="font-georgia text-5xl lg:text-6xl text-brown leading-tight">
                  Freeze stubborn fat.
                  <br />
                  <span className="text-wine">Shape your body.</span>
                </h1>

                <p className="font-inter text-lg text-taupe max-w-lg">
                  Some fat just refuses to move. Target those "last mile" fat
                  areas without surgery. Natural-looking results with minimal
                  downtime.
                </p>
                <p className="font-inter text-lg text-taupe max-w-lg">
                  At Nexus Clinic Kuala Lumpur, we plan fat freezing like a body
                  contouring project. We map the area, pick the right
                  applicator, and guide you through realistic results.
                </p>

                <div className="flex flex-wrap gap-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-wine text-white px-8 py-4 rounded-full font-inter text-lg hover:bg-rose transition-all shadow-lg shadow-wine/20"
                  >
                    Book Your Consultation
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="border-2 border-wine text-wine px-8 py-4 rounded-full font-inter text-lg hover:bg-wine/5 transition-all"
                  >
                    View Pricing
                  </motion.button>
                </div>

                <div className="flex items-center gap-8 pt-8">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-rose/10 flex items-center justify-center">
                      <Shield className="w-6 h-6 text-rose" />
                    </div>
                    <div>
                      <div className="font-georgia text-xl text-brown">
                        FDA-Cleared
                      </div>
                      <div className="font-inter text-sm text-taupe">
                        Technology
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-rose/10 flex items-center justify-center">
                      <Users className="w-6 h-6 text-rose" />
                    </div>
                    <div>
                      <div className="font-georgia text-xl text-brown">
                        5000+
                      </div>
                      <div className="font-inter text-sm text-taupe">
                        Happy Clients
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeInRight} className="relative">
                <div className="relative bg-linear-to-br from-rose to-wine rounded-3xl p-1 shadow-2xl">
                  <div className="bg-light rounded-3xl p-8">
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <h3 className="font-georgia text-2xl text-brown">
                          Trust at a glance
                        </h3>
                        <ThermometerSnowflake className="w-8 h-8 text-wine" />
                      </div>
                      <div className="space-y-4">
                        {[
                          "Doctor-led consultation & screening",
                          "FDA-cleared cryolipolysis technology",
                          "Personalised plan for your body",
                          "Minimal downtime, natural results",
                        ].map((item, index) => (
                          <motion.div
                            key={index}
                            variants={fadeInUp}
                            className="flex items-center gap-3"
                          >
                            <CheckCircle2 className="w-5 h-5 text-rose" />
                            <span className="font-inter text-brown">
                              {item}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                      <div className="pt-4 border-t border-taupe/20">
                        <p className="font-inter text-sm text-taupe">
                          *Results may vary. Consultation required for
                          suitability.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Card */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -bottom-8 -left-8 bg-white/80 backdrop-blur-lg rounded-2xl p-4 shadow-xl border border-white/50"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-rose/20 flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-rose" />
                    </div>
                    <div>
                      <div className="font-georgia text-lg text-brown">
                        20-25%
                      </div>
                      <div className="font-inter text-xs text-taupe">
                        Average fat reduction
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className="py-24 px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={fadeInLeft} className="space-y-6">
              <h2 className="font-georgia text-4xl text-brown">
                First, a quick truth about “weight loss”
              </h2>

              <p className="text-lg text-taupe font-inter leading-relaxed">
                People search “fat freezing weight loss treatment” because they
                want a slimmer look fast. Fair. But medically, fat freezing is
                mainly for fat reduction and body contouring, not scale weight
                loss. You may lose a little weight, but the real win is shape
                and fit. The FDA also describes cryolipolysis as a non-invasive
                method to reduce visible fat bulges, not a general weight-loss
                solution.
              </p>

              <div className="bg-cream p-8 rounded-3xl border border-taupe/10">
                <p className="font-inter text-brown italic">
                  <span className="font-bold text-wine">Important note:</span>{" "}
                  If your goal is “drop 10 to 15 kg,” we usually combine
                  lifestyle support and other medical options. If your goal is
                  “flatten this belly area” or “reduce love handles,” fat
                  freezing can be a strong choice.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeInRight}>
              <div className="relative rounded-3xl overflow-hidden shadow-xl">
                <img
                  src="/images/main/fat-freezing.webp"
                  alt="Fat Freezing"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-linear-to-t from-brown/40 to-transparent"></div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Understanding Fat Freezing Section */}
        <section className="py-24 px-4 bg-white/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <motion.div
                variants={fadeInUp}
                className="inline-flex items-center gap-2 bg-wine/10 px-4 py-2 rounded-full mb-6"
              >
                <ThermometerSnowflake className="w-4 h-4 text-wine" />
                <span className="text-sm font-inter text-brown">
                  Cryolipolysis Explained
                </span>
              </motion.div>

              <motion.h2
                variants={fadeInUp}
                className="font-georgia text-4xl lg:text-5xl text-brown mb-6"
              >
                What is fat freezing
                <span className="text-wine"> (cryolipolysis)?</span>
              </motion.h2>

              <motion.p
                variants={fadeInUp}
                className="font-inter text-lg text-taupe"
              >
                It uses controlled cold to target fat cells under the skin. Fat
                cells are more sensitive to cold than skin, so the aim is to
                damage fat cells while keeping the skin safe.
              </motion.p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Clock className="w-8 h-8" />,
                  title: "60 Minutes",
                  desc: "Treatment time per area",
                },
                {
                  icon: <Droplets className="w-8 h-8" />,
                  title: "Gradual Process",
                  desc: "Body clears fat cells over weeks",
                },
                {
                  icon: <Target className="w-8 h-8" />,
                  title: "Precise Targeting",
                  desc: "Only affects treated fat cells",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={{ y: -5 }}
                  className="bg-light p-8 rounded-3xl border border-taupe/10 shadow-lg hover:shadow-xl transition-all"
                >
                  <div className="w-16 h-16 rounded-full bg-rose/10 flex items-center justify-center text-rose mb-6">
                    {item.icon}
                  </div>
                  <h3 className="font-georgia text-2xl text-brown mb-3">
                    {item.title}
                  </h3>
                  <p className="font-inter text-taupe">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Can and Cannot Do Section */}
        <section className="py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <motion.h2
                variants={fadeInUp}
                className="font-georgia text-4xl lg:text-5xl text-brown mb-6"
              >
                What fat freezing
                <span className="text-wine"> can and cannot do</span>
              </motion.h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Can Do */}
              <motion.div
                variants={fadeInLeft}
                className="bg-linear-to-br from-rose/10 to-transparent p-8 rounded-3xl border border-rose/20"
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-full bg-rose/20 flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-rose" />
                  </div>
                  <h3 className="font-georgia text-2xl text-brown">
                    It can help with:
                  </h3>
                </div>
                <div className="space-y-4">
                  {[
                    "Lower belly pouch that stays after dieting",
                    "Love handles that don't tone up",
                    "Inner thighs rubbing",
                    "Back or bra bulge",
                    "Upper arms",
                    "Double chin in suitable cases",
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      className="flex items-center gap-3"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-rose" />
                      <span className="font-inter text-brown">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Cannot Do */}
              <motion.div
                variants={fadeInRight}
                className="bg-brown/5 p-8 rounded-3xl border border-brown/10"
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-full bg-brown/10 flex items-center justify-center">
                    <XCircle className="w-6 h-6 text-brown" />
                  </div>
                  <h3 className="font-georgia text-2xl text-brown">
                    It cannot:
                  </h3>
                </div>
                <div className="space-y-4">
                  {[
                    "Replace exercise and diet",
                    "Treat obesity as a primary solution",
                    "Fix major loose skin by itself",
                    'Give "instant" results the next day',
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      className="flex items-center gap-3"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-brown" />
                      <span className="font-inter text-brown">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Before & after */}
        <SectionBeforeAfter transformations={transformations} />

        {/* Treatment Areas */}
        <section className="py-24 px-4 bg-wine/5">
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <motion.h2
                variants={fadeInUp}
                className="font-georgia text-4xl lg:text-5xl text-brown mb-6"
              >
                Areas we treat in
                <span className="text-wine"> Kuala Lumpur</span>
              </motion.h2>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { area: "Abdomen", icon: <Activity /> },
                { area: "Love Handles", icon: <Wind /> },
                { area: "Back Bulge", icon: <Scissors /> },
                { area: "Upper Arms", icon: <Heart /> },
                { area: "Inner Thighs", icon: <Users /> },
                { area: "Outer Thighs", icon: <Users /> },
                { area: "Double Chin", icon: <Award /> },
                { area: "Bra Bulge", icon: <Heart /> },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl text-center border border-taupe/20 shadow-lg hover:shadow-xl transition-all"
                >
                  <div className="w-12 h-12 rounded-full bg-rose/10 flex items-center justify-center text-rose mx-auto mb-3">
                    {item.icon}
                  </div>
                  <span className="font-inter text-brown font-medium">
                    {item.area}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Treatment Process */}
        <section className="py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <motion.h2
                variants={fadeInUp}
                className="font-georgia text-4xl lg:text-5xl text-brown mb-6"
              >
                Your treatment
                <span className="text-wine"> journey</span>
              </motion.h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Consultation & Body Mapping",
                  desc: "We map the area, pick the right applicator, and guide you through realistic results.",
                  icon: <Users />,
                },
                {
                  step: "02",
                  title: "Treatment Day",
                  desc: "Applicator placement with controlled cooling. Most feel numbness after a few minutes.",
                  icon: <ThermometerSnowflake />,
                },
                {
                  step: "03",
                  title: "Recovery & Results",
                  desc: "Return to normal activity same day. Results visible in 4-12 weeks.",
                  icon: <Sun />,
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="relative"
                >
                  <div className="bg-white p-8 rounded-3xl border border-taupe/10 shadow-xl">
                    <div className="text-6xl font-georgia text-wine/20 mb-4">
                      {item.step}
                    </div>
                    <div className="w-14 h-14 rounded-full bg-rose/10 flex items-center justify-center text-rose mb-6">
                      {item.icon}
                    </div>
                    <h3 className="font-georgia text-2xl text-brown mb-3">
                      {item.title}
                    </h3>
                    <p className="font-inter text-taupe">{item.desc}</p>
                  </div>
                  {index < 2 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 text-wine/30">
                      <Sparkles className="w-6 h-6" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Results Timeline */}
        <section className="py-24 px-4 bg-white/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <motion.h2
                variants={fadeInUp}
                className="font-georgia text-4xl lg:text-5xl text-brown mb-6"
              >
                When will you
                <span className="text-wine"> see results?</span>
              </motion.h2>
              <motion.p variants={fadeInUp} className="font-inter text-taupe">
                Fat freezing is not instant. It is gradual. Here's what to
                expect:
              </motion.p>
            </motion.div>

            <div className="relative">
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-rose/20 hidden md:block" />
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    week: "2-4",
                    title: "Early Changes",
                    desc: "Subtle improvements begin",
                    icon: <Calendar />,
                  },
                  {
                    week: "6-8",
                    title: "Noticeable Results",
                    desc: "More visible contour change",
                    icon: <TrendingUp />,
                  },
                  {
                    week: "12",
                    title: "Final Look",
                    desc: "Full results for that session",
                    icon: <Star />,
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={scaleIn}
                    className="relative bg-white p-8 rounded-3xl border border-taupe/10 shadow-lg text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-wine/10 flex items-center justify-center text-wine mx-auto mb-4">
                      {item.icon}
                    </div>
                    <div className="font-georgia text-3xl text-wine mb-2">
                      Week {item.week}
                    </div>
                    <h3 className="font-georgia text-xl text-brown mb-2">
                      {item.title}
                    </h3>
                    <p className="font-inter text-taupe">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-24 px-4 bg-light">
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <motion.h2
                variants={fadeInUp}
                className="font-georgia text-4xl lg:text-5xl text-brown mb-6"
              >
                Transparent
                <span className="text-wine"> pricing in KL</span>
              </motion.h2>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <motion.div
                variants={scaleIn}
                className="bg-linear-to-br from-wine to-rose rounded-3xl p-1 shadow-2xl"
              >
                <div className="bg-white rounded-3xl p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <h3 className="font-georgia text-2xl text-brown">
                        Per Session Pricing
                      </h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between pb-4 border-b border-taupe/20">
                          <span className="font-inter text-brown">
                            Single Area
                          </span>
                          <span className="font-georgia text-2xl text-wine">
                            RM2,500
                          </span>
                        </div>
                        <div className="flex items-center justify-between pb-4 border-b border-taupe/20">
                          <span className="font-inter text-brown">
                            Multiple Areas
                          </span>
                          <span className="font-georgia text-2xl text-wine">
                            RM2,000 - RM4,000
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="font-inter text-brown">
                            Package Deals
                          </span>
                          <span className="font-georgia text-2xl text-wine">
                            Contact Us
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-cream p-6 rounded-2xl">
                      <h4 className="font-georgia text-xl text-brown mb-4">
                        Price Includes:
                      </h4>
                      <div className="space-y-3">
                        {[
                          "Doctor consultation",
                          "FDA-cleared technology",
                          "Post-treatment care",
                          "Follow-up assessment",
                        ].map((item, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-rose" />
                            <span className="font-inter text-sm text-brown">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                      <p className="font-inter text-xs text-taupe mt-4">
                        *Prices are estimates. Final quote after consultation.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQ data={faqs} />

        {/* CTA Section */}
        <section className="py-24 px-4 bg-light">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              className="bg-linear-to-br from-wine to-rose rounded-3xl p-1 shadow-2xl"
            >
              <div className="bg-light rounded-3xl p-12">
                <h2 className="font-georgia text-4xl lg:text-5xl text-brown mb-6">
                  Ready to slim a stubborn area?
                </h2>
                <p className="font-inter text-taupe mb-8 max-w-2xl mx-auto">
                  If you're tired of fighting the same pocket of fat, fat
                  freezing may be your next smart move. Safe screening, clear
                  expectations, natural-looking results.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-wine text-white px-10 py-5 rounded-full font-inter text-lg hover:bg-rose transition-all shadow-xl shadow-wine/30"
                >
                  Schedule Your Consultation
                </motion.button>
                <p className="font-inter text-xs text-taupe mt-4">
                  *Doctor-led screening ensures you're a suitable candidate
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

export default FatFreezingLanding;
