"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  Shield,
  Clock,
  Heart,
  TrendingUp,
  ChevronRight,
  CheckCircle2,
  AlertCircle,
  Calendar,
  Target,
  Award,
} from "lucide-react";
import {
  staggerContainer,
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  scaleIn,
} from "../../lib/animations";
import FAQ from "../../components/FAQ";
import SectionBeforeAfter from "../../components/BeforeAfterCustomize";
import { useTranslation } from "@/src/i18n/client";
import { fallbackLng } from "@/src/i18n/settings";

const SimaglutideLanding = ({ locale = fallbackLng }: { locale?: string }) => {
  const { t } = useTranslation(locale, "semaglutide");
  const faqs = [
    {
      q: "How does semaglutide help with weight loss?",
      a: "It mimics GLP-1, a hormone that helps regulate appetite and fullness, reducing hunger and slowing digestion.",
    },
    {
      q: "How long to see weight loss results?",
      a: "Appetite changes within first month, visible loss around 4-8 weeks, stronger results over 6-12 months.",
    },
    {
      q: "What are common side effects?",
      a: "Digestive issues like nausea, diarrhea, constipation. Most improve over time with gradual dose increase.",
    },
    {
      q: "Is semaglutide same as Wegovy or Ozempic?",
      a: "Same active ingredient but different indications. Wegovy for weight management, Ozempic primarily for diabetes.",
    },
    {
      q: "Will I regain weight if I stop?",
      a: "Weight regain can happen. Maintenance planning and habit support are crucial for long-term success.",
    },
    {
      q: "Do I still need diet and exercise?",
      a: "Yes. Wegovy is indicated with reduced-calorie diet and increased physical activity for best results.",
    },
  ];

  const transformations = [
    {
      id: 1,
      before: "/images/B&A-w/B&A-semaglutide1.webp",
      after: "/images/B&A-w/B&A-semaglutide1.webp",
    },
    {
      id: 2,
      before: "/images/B&A-w/B&A-semaglutide2.webp",
      after: "/images/B&A-w/B&A-semaglutide2.webp",
    },
    {
      id: 3,
      before: "/images/B&A-w/B&A-semaglutide3.webp",
      after: "/images/B&A-w/B&A-semaglutide3.webp",
    },
  ];
  return (
    <>
      <main className="min-h-screen bg-linear-to-b from-light to-white">
        {/* Hero Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative overflow-hidden bg-linear-to-br from-cream via-white to-rose/5 pt-20 pb-24"
        >
          {/* Decorative Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-wine/5 rounded-full blur-3xl" />
            <div className="absolute top-60 -left-40 w-80 h-80 bg-rose/5 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInLeft} className="space-y-6">
                <motion.div
                  variants={fadeInUp}
                  className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-wine/10"
                >
                  <Sparkles className="w-4 h-4 text-wine" />
                  <span className="text-sm font-medium text-brown">
                    Nexus Clinic Kuala Lumpur
                  </span>
                </motion.div>

                <motion.h1
                  variants={fadeInUp}
                  className="text-4xl lg:text-5xl xl:text-6xl font-serif text-brown leading-tight"
                  style={{ fontFamily: "var(--font-georgia)" }}
                >
                  Quiet the cravings,
                  <span className="block text-wine">not your lifestyle</span>
                </motion.h1>

                <motion.p
                  variants={fadeInUp}
                  className="text-lg text-taupe max-w-lg"
                >
                  Lose weight with doctor-monitored semaglutide in Kuala Lumpur.
                </motion.p>

                <motion.p
                  variants={fadeInUp}
                  className="text-brown font-medium italic border-l-4 border-rose pl-4 bg-white/50 p-4 rounded-r-lg"
                >
                  "Feel fuller sooner. Eat with control again. A medical plan
                  that fits real life in Malaysia."
                </motion.p>

                {/* Trust Badges */}
                <motion.div
                  variants={fadeInUp}
                  className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4"
                >
                  {[
                    { icon: Shield, text: "Doctor-monitored" },
                    { icon: Clock, text: "Weekly follow-ups" },
                    { icon: Heart, text: "Safety screened" },
                    { icon: TrendingUp, text: "Real results" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 bg-white/70 backdrop-blur-sm p-2 rounded-lg"
                    >
                      <item.icon className="w-4 h-4 text-wine" />
                      <span className="text-xs text-brown">{item.text}</span>
                    </div>
                  ))}
                </motion.div>

                <motion.div variants={fadeInUp} className="flex gap-4 pt-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-wine text-white px-8 py-3 rounded-full font-medium hover:bg-rose transition-colors shadow-lg shadow-wine/20"
                  >
                    Start Your Journey
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border border-taupe text-brown px-8 py-3 rounded-full font-medium hover:bg-white transition-colors"
                  >
                    Learn More
                  </motion.button>
                </motion.div>
              </motion.div>

              <motion.div variants={fadeInRight} className="relative">
                <div className="bg-white/70 backdrop-blur-md rounded-3xl p-8 border border-wine/10 shadow-2xl">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 pb-4 border-b border-cream">
                      <div className="w-12 h-12 bg-wine/10 rounded-full flex items-center justify-center">
                        <Award className="w-6 h-6 text-wine" />
                      </div>
                      <div>
                        <h3 className="font-serif text-brown text-lg">
                          Medical Safety First
                        </h3>
                        <p className="text-sm text-taupe">
                          Right patient, right plan
                        </p>
                      </div>
                    </div>

                    {[
                      "Doctor-monitored weight loss assessment",
                      "Prescription-only with safety screening",
                      "Clear expectations, no hype",
                      "Lifestyle support for KL routines",
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <CheckCircle2 className="w-5 h-5 text-rose" />
                        <span className="text-brown">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Glass Card Decoration */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-wine/10 rounded-full blur-2xl -z-10" />
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Quick Note Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-12 bg-brown/5"
        >
          <div className="container mx-auto px-4">
            <motion.div
              variants={fadeInUp}
              className="max-w-3xl mx-auto bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-wine/20"
            >
              <div className="flex items-start gap-4">
                <AlertCircle className="w-6 h-6 text-wine shrink-0 mt-1" />
                <div>
                  <h3 className="font-serif text-brown text-lg mb-2">
                    A quick note before we start
                  </h3>
                  <p className="text-taupe text-sm leading-relaxed">
                    Semaglutide is a prescription medicine. It is not for
                    everyone, and it is not a quick fix. You should always use
                    it under medical supervision. This page is for education and
                    to help you make an informed decision.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* What is Semaglutide */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20"
        >
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInLeft} className="space-y-6">
                <h2 className="font-serif text-3xl lg:text-4xl text-brown">
                  What is a semaglutide injection
                  <span className="block text-wine">for weight loss?</span>
                </h2>

                <p className="text-taupe leading-relaxed">
                  Semaglutide is a medicine that works on appetite and fullness
                  signals in your body. For weight management, the well-known
                  brand name is Wegovy.
                </p>
                <div className="relative rounded-3xl overflow-hidden shadow-xl">
                  <img
                    src="/images/main/semaglutide.webp"
                    alt="Semaglutide injection"
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-brown/40 to-transparent"></div>
                </div>
              </motion.div>

              <motion.div variants={fadeInRight} className="relative">
                <div className="bg-brown/5 rounded-3xl p-8">
                  <h3 className="font-serif text-xl text-brown mb-6">
                    Wegovy vs Ozempic
                  </h3>

                  <div className="space-y-4">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-white p-5 rounded-xl shadow-sm border-l-4 border-wine"
                    >
                      <h4 className="font-medium text-wine mb-1">Wegovy</h4>
                      <p className="text-sm text-taupe">
                        Made and dosed for chronic weight management
                      </p>
                    </motion.div>

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-white p-5 rounded-xl shadow-sm border-l-4 border-rose"
                    >
                      <h4 className="font-medium text-rose mb-1">Ozempic</h4>
                      <p className="text-sm text-taupe">
                        Primarily for type 2 diabetes, may be used off-label
                      </p>
                    </motion.div>
                  </div>

                  <p className="text-xs text-taupe mt-4 italic">
                    Off-label prescribing must be decided by a qualified doctor
                    based on your health profile.
                  </p>
                </div>
                <motion.div
                  variants={scaleIn}
                  className="bg-linear-to-br from-cream to-white p-6 mt-4 rounded-2xl border border-wine/10"
                >
                  <p className="text-brown italic">
                    "Many people describe the change like this: You still enjoy
                    food, but the 'food noise' becomes quieter. Portions feel
                    easier. Snacking becomes less automatic."
                  </p>
                </motion.div>

                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="bg-white p-4 rounded-xl border border-cream">
                    <div className="w-10 h-10 bg-rose/10 rounded-full flex items-center justify-center mb-2">
                      <Calendar className="w-5 h-5 text-rose" />
                    </div>
                    <h4 className="font-medium text-brown">Once-weekly</h4>
                    <p className="text-xs text-taupe">Subcutaneous injection</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-cream">
                    <div className="w-10 h-10 bg-wine/10 rounded-full flex items-center justify-center mb-2">
                      <Target className="w-5 h-5 text-wine" />
                    </div>
                    <h4 className="font-medium text-brown">
                      4 injection sites
                    </h4>
                    <p className="text-xs text-taupe">
                      Abdomen, thigh, upper arm
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* How It Works */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20 bg-linear-to-b from-white to-cream"
        >
          <div className="container mx-auto px-4">
            <motion.div
              variants={fadeInUp}
              className="text-center max-w-2xl mx-auto mb-12"
            >
              <h2 className="font-serif text-3xl lg:text-4xl text-brown mb-4">
                How semaglutide helps
                <span className="block text-wine">with weight loss</span>
              </h2>
              <p className="text-taupe">
                Semaglutide mimics a hormone called GLP-1 that is involved in
                hunger, fullness, and digestion.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Heart,
                  title: "Reduce appetite",
                  desc: "Helps quiet the constant food thoughts",
                },
                {
                  icon: Clock,
                  title: "Feel full longer",
                  desc: "Extended satisfaction after meals",
                },
                {
                  icon: TrendingUp,
                  title: "Slow digestion",
                  desc: "Feel satisfied with smaller portions",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={{ y: -5 }}
                  className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-wine/10 shadow-lg hover:shadow-xl transition-all"
                >
                  <div className="w-14 h-14 bg-wine/10 rounded-xl flex items-center justify-center mb-4">
                    <item.icon className="w-7 h-7 text-wine" />
                  </div>
                  <h3 className="font-serif text-lg text-brown mb-2">
                    {item.title}
                  </h3>
                  <p className="text-taupe text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Who It's For */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20"
        >
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              <motion.div variants={fadeInLeft} className="space-y-6">
                <h2 className="font-serif text-3xl lg:text-4xl text-brown">
                  Who semaglutide weight loss
                  <span className="block text-wine">injections are for</span>
                </h2>

                <p className="text-taupe">
                  Generally used for adults with obesity, or overweight with
                  weight-related health risks.
                </p>

                <div className="space-y-4">
                  {[
                    "Diet and exercise alone have not worked long-term",
                    "Appetite and cravings keep undoing progress",
                    "Weight affecting energy, confidence, or health markers",
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-rose" />
                      <span className="text-brown">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={fadeInRight} className="space-y-6">
                <div className="bg-wine/5 p-6 rounded-2xl border border-wine/20">
                  <h3 className="font-serif text-xl text-wine mb-4 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5" />
                    Who should not use semaglutide
                  </h3>

                  <ul className="space-y-3">
                    {[
                      "Personal or family history of medullary thyroid carcinoma",
                      "History of pancreatitis or gallbladder disease",
                      "Kidney problems related to dehydration risk",
                      "Pregnancy or planning pregnancy",
                    ].map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-sm text-brown"
                      >
                        <span className="text-wine font-bold">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-cream">
                  <h4 className="font-medium text-brown mb-2">
                    Extra care needed if you have:
                  </h4>
                  <p className="text-sm text-taupe">
                    Significant gastrointestinal conditions, or if you're
                    breastfeeding. Stop well before planned pregnancy due to
                    long half-life.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Results Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20 bg-brown/5"
        >
          <div className="container mx-auto px-4">
            <motion.div
              variants={fadeInUp}
              className="text-center max-w-2xl mx-auto mb-12"
            >
              <h2 className="font-serif text-3xl lg:text-4xl text-brown mb-4">
                What results can you
                <span className="block text-wine">realistically expect?</span>
              </h2>
              <p className="text-taupe">Let's keep it honest.</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  stat: "68 weeks",
                  label: "Clinical trial duration",
                  desc: "STEP 1 trial with significant average weight loss",
                },
                {
                  stat: "4-8 weeks",
                  label: "Initial changes",
                  desc: "Noticeable appetite changes begin",
                },
                {
                  stat: "6-12 months",
                  label: "Peak results",
                  desc: "Strongest weight loss results",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  className="bg-white p-6 rounded-2xl shadow-lg text-center"
                >
                  <div className="text-2xl font-serif text-wine mb-2">
                    {item.stat}
                  </div>
                  <div className="font-medium text-brown mb-2">
                    {item.label}
                  </div>
                  <p className="text-sm text-taupe">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={fadeInUp}
              className="mt-8 p-6 bg-white rounded-2xl border border-wine/20"
            >
              <p className="text-brown italic">
                Many people notice changes earlier than the "scale moment": less
                urge to snack at night, better control around rice, roti,
                sweets, and late dinners, fewer cravings between meals.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Before After  */}
        <SectionBeforeAfter transformations={transformations} />

        {/* What Happens If You Stop */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20"
        >
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <motion.div
                variants={fadeInUp}
                className="bg-linear-to-br from-wine to-rose text-white p-8 rounded-3xl"
              >
                <h2 className="font-serif text-2xl lg:text-3xl mb-4">
                  What happens if you stop?
                </h2>
                <p className="mb-4 text-white/90">
                  In the STEP 1 extension, after stopping semaglutide,
                  participants regained a significant portion of weight loss
                  over the following year, even with lifestyle advice.
                </p>
                <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
                  <p className="text-sm italic">
                    This supports the idea that obesity is chronic and
                    maintenance planning is important.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Nexus Approach */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20 bg-cream"
        >
          <div className="container mx-auto px-4">
            <motion.div
              variants={fadeInUp}
              className="text-center max-w-2xl mx-auto mb-12"
            >
              <h2 className="font-serif text-3xl lg:text-4xl text-brown mb-4">
                The Nexus Clinic Kuala Lumpur approach
              </h2>
              <p className="text-taupe">
                Doctor-monitored weight loss, not just "a jab"
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  step: "01",
                  title: "Real suitability check",
                  desc: "Goals, history, current meds, past diet patterns, and risk factors",
                },
                {
                  step: "02",
                  title: "Plan for KL life",
                  desc: "Busy workdays, family dinners, social weekends - real routines",
                },
                {
                  step: "03",
                  title: "Follow-up & adjustments",
                  desc: "Side effects, plateaus, travel weeks, stress eating - we monitor",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={{ y: -5 }}
                  className="bg-white p-6 rounded-2xl shadow-lg relative"
                >
                  <div className="text-5xl font-serif text-wine/20 absolute top-4 right-4">
                    {item.step}
                  </div>
                  <h3 className="font-serif text-xl text-brown mb-2 relative">
                    {item.title}
                  </h3>
                  <p className="text-taupe text-sm relative">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Pros & Cons */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20"
        >
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                variants={fadeInLeft}
                className="bg-linear-to-br from-green-50 to-white p-8 rounded-3xl border border-green-200"
              >
                <h3 className="font-serif text-2xl text-green-700 mb-6 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6" />
                  Pros
                </h3>
                <ul className="space-y-4">
                  {[
                    "Strong evidence for meaningful weight loss",
                    "Helps appetite control without constant willpower",
                    "May improve weight-related health markers",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                      <span className="text-brown">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                className="bg-linear-to-br from-orange-50 to-white p-8 rounded-3xl border border-orange-200"
              >
                <h3 className="font-serif text-2xl text-orange-700 mb-6 flex items-center gap-2">
                  <AlertCircle className="w-6 h-6" />
                  Cons
                </h3>
                <ul className="space-y-4">
                  {[
                    "Gastrointestinal side effects possible",
                    "Results take months, not days",
                    "Weight regain possible without maintenance",
                    "Prescription medicine, not for everyone",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                      <span className="text-brown">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* FAQs Section */}
        <FAQ data={faqs} />

        {/* CTA Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20 bg-linear-to-br from-wine to-rose text-white"
        >
          <div className="container mx-auto px-4 text-center">
            <motion.div variants={scaleIn} className="max-w-2xl mx-auto">
              <h2 className="font-serif text-3xl lg:text-4xl mb-4">
                Ready to explore semaglutide in Kuala Lumpur?
              </h2>
              <p className="text-white/90 mb-8">
                If you want a plan that feels safe, structured, and realistic
                for life in Malaysia, Nexus Clinic Kuala Lumpur can guide you
                through every step.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-wine px-8 py-3 rounded-full font-medium hover:bg-cream transition-colors shadow-lg inline-flex items-center gap-2"
              >
                Schedule Your Consultation
                <ChevronRight className="w-4 h-4" />
              </motion.button>
            </motion.div>
          </div>
        </motion.section>
      </main>
    </>
  );
};

export default SimaglutideLanding;
