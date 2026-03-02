"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Clock,
  Target,
  Heart,
  Activity,
  Droplets,
  Zap,
  Scale,
  TrendingDown,
  Award,
  ChevronRight,
  Sparkles,
  AlertCircle,
  CheckCircle2,
  MessageCircle,
  Calendar,
  Syringe,
  Brain,
  UtensilsCrossed,
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

const MounjaroLanding = ({ locale = fallbackLng }: { locale?: string }) => {
  const { t } = useTranslation(locale, "mounjaro");
  const faqs = [
    {
      q: "Is Mounjaro approved for weight loss?",
      a: "In the US, Mounjaro is approved for type 2 diabetes, while tirzepatide is approved for chronic weight management under the brand Zepbound. Local indications can differ by country, so your KL doctor should guide you.",
    },
    {
      q: "How much weight can you lose on Mounjaro?",
      a: "In obesity trials with tirzepatide, many people lost a meaningful percentage of body weight over about 72 weeks. Your result depends on dose tolerance, lifestyle, and health factors.",
    },
    {
      q: "How fast does Mounjaro start working for weight loss?",
      a: "Many people notice appetite changes in the first few weeks. Visible body changes often take 8 to 12 weeks, and keep building with time and consistency.",
    },
    {
      q: "What happens when you stop Mounjaro?",
      a: "Many people regain some weight if lifestyle habits are not supported. That is why a long-term plan matters, including nutrition, activity, sleep, and follow-up.",
    },
    {
      q: "How much does Mounjaro cost in Malaysia?",
      a: "Cost depends on dose and clinic support. Some Malaysia listings show around RM 1,150 for certain strengths, while other providers list higher ranges. Your total cost may include consults, labs, and follow-ups.",
    },
  ];

  const transformations = [
    {
      id: 1,
      before: "/images/B&A-w/B&A-mounjaro1.webp",
      after: "/images/B&A-w/B&A-mounjaro1.webp",
    },
    {
      id: 2,
      before: "/images/B&A-w/B&A-mounjaro2.webp",
      after: "/images/B&A-w/B&A-mounjaro2.webp",
    },
    {
      id: 3,
      before: "/images/B&A-w/B&A-mounjaro3.webp",
      after: "/images/B&A-w/B&A-mounjaro3.webp",
    },
  ];
  return (
    <>
      <main className="min-h-screen bg-light font-[--font-inter]">
        {/* Hero Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="relative min-h-screen flex items-center overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-96 h-96 bg-wine rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-rose rounded-full filter blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInLeft} className="space-y-8">
                <div className="space-y-4">
                  <motion.div
                    variants={scaleIn}
                    className="inline-flex items-center gap-2 bg-cream px-4 py-2 rounded-full"
                  >
                    <Sparkles className="w-4 h-4 text-wine" />
                    <span className="text-sm text-brown">
                      Dual-Action GIP/GLP-1 Treatment
                    </span>
                  </motion.div>

                  <h1 className="text-5xl lg:text-6xl font-serif font-bold text-brown leading-tight">
                    Quiet the cravings.
                    <span className="block text-wine">
                      Reset your momentum.
                    </span>
                  </h1>

                  <p className="text-lg text-taupe max-w-lg">
                    Mounjaro helps reduce appetite and "food noise" over time.
                    Get a doctor-guided plan that fits your body and your
                    lifestyle.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-wine text-white px-8 py-4 rounded-full font-medium flex items-center gap-2 hover:bg-opacity-90 transition-all"
                  >
                    Book Your Consultation
                    <ChevronRight className="w-5 h-5" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-wine text-wine px-8 py-4 rounded-full font-medium hover:bg-wine hover:text-white transition-all"
                  >
                    Learn More
                  </motion.button>
                </div>

                {/* Trust Badges */}
                <motion.div
                  variants={staggerContainer}
                  className="flex items-center gap-6 pt-8"
                >
                  {[
                    { icon: Shield, text: "Doctor Supervised" },
                    { icon: Clock, text: "Weekly Injection" },
                    { icon: Target, text: "Personalized Plan" },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      className="flex items-center gap-2"
                    >
                      <item.icon className="w-5 h-5 text-rose" />
                      <span className="text-sm text-brown">{item.text}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              <motion.div variants={fadeInRight} className="relative">
                <div className="bg-[--color-glass] backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-xl">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 pb-6 border-b border-cream">
                      <Syringe className="w-8 h-8 text-wine" />
                      <div>
                        <h3 className="font-serif text-xl text-brown">
                          Quick Overview
                        </h3>
                        <p className="text-taupe">Once-weekly injection</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-wine mt-1" />
                        <div>
                          <p className="text-brown font-medium">
                            Dual-action formula
                          </p>
                          <p className="text-sm text-taupe">
                            GIP + GLP-1 pathways
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-wine mt-1" />
                        <div>
                          <p className="text-brown font-medium">
                            Clinical results
                          </p>
                          <p className="text-sm text-taupe">
                            Significant weight loss over 72 weeks
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-wine mt-1" />
                        <div>
                          <p className="text-brown font-medium">
                            Medical supervision
                          </p>
                          <p className="text-sm text-taupe">
                            Regular check-ins & support
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* How It Works Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="py-24 bg-cream"
        >
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              variants={fadeInUp}
              className="text-center max-w-2xl mx-auto mb-16"
            >
              <h2 className="text-4xl font-serif font-bold text-brown mb-4">
                How Mounjaro Supports
                <span className="text-wine"> Weight Loss</span>
              </h2>
              <p className="text-taupe">
                Dual-hormone targeting to help you achieve sustainable results
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Brain,
                  title: "Quiet Food Noise",
                  description:
                    "Reduces constant thoughts about food and cravings",
                  color: "from-wine to-rose",
                },
                {
                  icon: UtensilsCrossed,
                  title: "Feel Full Sooner",
                  description: "Slows stomach emptying for longer satiety",
                  color: "from-rose to-taupe",
                },
                {
                  icon: Zap,
                  title: "Metabolic Control",
                  description:
                    "Dual GIP and GLP-1 activation for better results",
                  color: "from-taupe to-wine",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
                >
                  <div
                    className={`w-16 h-16 rounded-xl bg-linear-to-br ${item.color} flex items-center justify-center mb-6`}
                  >
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-brown mb-3">
                    {item.title}
                  </h3>
                  <p className="text-taupe">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Eligibility Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="py-24 bg-white"
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInLeft} className="space-y-6">
                <h2 className="text-4xl font-serif font-bold text-brown">
                  Who Mounjaro May Be
                  <span className="block text-wine">Suitable For</span>
                </h2>

                <div className="space-y-4">
                  {[
                    {
                      icon: Scale,
                      text: "BMI 30+",
                      subtext: "or BMI 27+ with weight-related conditions",
                    },
                    {
                      icon: Heart,
                      text: "Weight affecting health",
                      subtext: "Blood pressure, glucose, insulin resistance",
                    },
                    {
                      icon: Activity,
                      text: "Progress stalled",
                      subtext: "Despite serious effort and lifestyle changes",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      className="flex items-start gap-4 p-4 bg-cream rounded-xl"
                    >
                      <div className="bg-wine bg-opacity-10 p-3 rounded-lg">
                        <item.icon className="w-6 h-6 text-light" />
                      </div>
                      <div>
                        <p className="font-medium text-brown">{item.text}</p>
                        <p className="text-sm text-taupe">{item.subtext}</p>
                      </div>
                    </motion.div>
                  ))}
                  <div className="bg-wine bg-opacity-5 rounded-3xl p-8 border border-wine border-opacity-20">
                    <h3 className="text-2xl font-serif font-bold text-cream/80 mb-6 flex items-center gap-2">
                      <AlertCircle className="w-6 h-6 text-cream/80" />
                      Important Contraindications
                    </h3>

                    <div className="space-y-4">
                      {[
                        "Personal or family history of medullary thyroid carcinoma (MTC)",
                        "MEN 2 (multiple endocrine neoplasia type 2)",
                        "Pregnancy or trying to conceive",
                        "Past pancreatitis or gallbladder disease",
                      ].map((text, index) => (
                        <motion.div
                          key={index}
                          variants={fadeInUp}
                          className="flex items-start gap-3"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-wine mt-2"></div>
                          <p className="text-light/70">{text}</p>
                        </motion.div>
                      ))}
                    </div>

                    <p className="mt-6 text-sm text-cream italic">
                      Your plan should always be doctor-led. No shortcuts.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeInRight} className="space-y-6">
                <div className="relative rounded-3xl overflow-hidden shadow-xl">
                  <img
                    src="/images/main/mounjaro.webp"
                    alt="Mounjaro"
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-brown/40 to-transparent"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Journey Timeline */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="py-24 bg-cream"
        >
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              variants={fadeInUp}
              className="text-center max-w-2xl mx-auto mb-16"
            >
              <h2 className="text-4xl font-serif font-bold text-brown mb-4">
                Your Weight Loss
                <span className="text-wine"> Journey</span>
              </h2>
              <p className="text-taupe">
                What to expect at each stage of your treatment
              </p>
            </motion.div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-rose bg-opacity-30"></div>

              <div className="space-y-12">
                {[
                  {
                    week: "Week 1-4",
                    title: "Early Changes",
                    description:
                      "Subtle appetite changes, reduced mindless snacking",
                    icon: Clock,
                  },
                  {
                    week: "Week 8-12",
                    title: "Visible Results",
                    description:
                      "Noticeable body changes, smaller portions feel enough",
                    icon: TrendingDown,
                  },
                  {
                    week: "Month 6-12",
                    title: "Sustainable Progress",
                    description:
                      "Significant weight loss, better health markers",
                    icon: Award,
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className={`relative flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                  >
                    <div className="w-1/2"></div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white rounded-full border-4 border-wine flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-wine" />
                    </div>
                    <div className="w-1/2 pl-8">
                      <div className="bg-white p-6 rounded-2xl shadow-lg">
                        <span className="text-sm text-wine font-semibold">
                          {item.week}
                        </span>
                        <h3 className="text-xl font-serif font-bold text-brown mt-2">
                          {item.title}
                        </h3>
                        <p className="text-taupe mt-2">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Before & After */}
        <SectionBeforeAfter transformations={transformations} />

        {/* Side Effects & Safety */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="py-24 bg-white"
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12">
              <motion.div variants={fadeInLeft} className="space-y-6">
                <h2 className="text-4xl font-serif font-bold text-brown">
                  Common
                  <span className="text-[--color-wine"> Side Effects</span>
                </h2>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Droplets, text: "Nausea" },
                    { icon: Activity, text: "Constipation" },
                    { icon: Droplets, text: "Diarrhea" },
                    { icon: Activity, text: "Bloating" },
                    { icon: Droplets, text: "Reflux" },
                    { icon: Activity, text: "Reduced appetite" },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      className="bg-cream p-4 rounded-xl flex items-center gap-3"
                    >
                      <item.icon className="w-5 h-5 text-wine" />
                      <span className="text-brown">{item.text}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="bg-wine bg-opacity-5 p-6 rounded-2xl">
                  <h3 className="font-serif text-xl text-cream mb-3">
                    Tips to minimize discomfort:
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "Smaller, more frequent meals",
                      "Eat slowly and chew thoroughly",
                      "Increase water and fiber intake",
                      "Prioritize protein early in the day",
                      "Avoid greasy foods initially",
                    ].map((tip, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-wine mt-1" />
                        <span className="text-light/90">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              <motion.div variants={fadeInRight} className="space-y-6">
                <div className="bg-brown bg-opacity-5 rounded-3xl p-8">
                  <h3 className="text-2xl font-serif font-bold text-brown mb-4 flex items-center gap-2">
                    <AlertCircle className="w-6 h-6 text-wine" />
                    Important Safety Note
                  </h3>

                  <div className="space-y-4">
                    <p className="text-taupe">
                      GLP-1 medicines can slow stomach emptying. Regulators
                      highlight aspiration risk during general anesthesia or
                      deep sedation.
                    </p>

                    <div className="bg-white p-4 rounded-xl">
                      <p className="font-medium text-brown mb-2">
                        If you have a procedure coming up:
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <ChevronRight className="w-4 h-4 text-wine mt-1" />
                          <span className="text-taupe">
                            Tell your doctor and anesthetist early
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="w-4 h-4 text-wine mt-1" />
                          <span className="text-taupe">
                            Follow medical instructions on pausing or prep
                          </span>
                        </li>
                      </ul>
                    </div>

                    <p className="text-sm text-taupe italic">
                      If vomiting is severe, pain is strong, or symptoms feel
                      scary, do not "push through." Contact your clinician.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Comparison Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="py-24 bg-cream"
        >
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              variants={fadeInUp}
              className="text-center max-w-2xl mx-auto mb-16"
            >
              <h2 className="text-4xl font-serif font-bold text-brown mb-4">
                Mounjaro vs Alternatives
              </h2>
              <p className="text-taupe">
                Understanding the differences in GLP-1 treatments
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: "Ozempic",
                  type: "Semaglutide",
                  action: "GLP-1 only",
                  use: "Diabetes (sometimes off-label for weight loss)",
                  color: "from-taupe to-rose",
                },
                {
                  name: "Wegovy",
                  type: "Semaglutide",
                  action: "GLP-1 only",
                  use: "Chronic weight management",
                  color: "from-rose to-wine",
                },
                {
                  name: "Mounjaro",
                  type: "Tirzepatide",
                  action: "Dual GIP + GLP-1",
                  use: "Stronger weight-loss outcomes",
                  color: "from-wine to-brown",
                  featured: true,
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -10 }}
                  className={`bg-white rounded-2xl p-6 shadow-lg relative ${
                    item.featured ? "ring-2 ring-wine" : ""
                  }`}
                >
                  {item.featured && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-wine text-white px-4 py-1 rounded-full text-sm">
                      Featured
                    </div>
                  )}

                  <h3 className="text-xl font-serif font-bold text-brown">
                    {item.name}
                  </h3>
                  <p className="text-sm text-wine mb-3">{item.type}</p>
                  <div className="space-y-2">
                    <p className="text-sm text-brown">
                      <span className="font-medium">Action:</span> {item.action}
                    </p>
                    <p className="text-sm text-taupe">{item.use}</p>
                  </div>
                </motion.div>
              ))}
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
          className="py-24 bg-brown relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-wine rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-rose rounded-full filter blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <motion.div
              variants={fadeInUp}
              className="max-w-3xl mx-auto text-center text-white"
            >
              <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6">
                Begin Your Journey at
                <span className="text-cream"> Nexus Clinic Kuala Lumpur</span>
              </h2>
              <p className="text-lg text-cream mb-10 opacity-90">
                The safest first step is a proper medical consult. We'll help
                you understand eligibility, expected results, side effects, and
                a plan you can actually follow.
              </p>

              <div className="flex flex-wrap gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-wine text-white px-10 py-5 rounded-full font-medium flex items-center gap-2 hover:bg-opacity-90 transition-all text-lg"
                >
                  <Calendar className="w-5 h-5" />
                  Book Your Consultation
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent border-2 border-white text-white px-10 py-5 rounded-full font-medium hover:bg-white hover:text-brown transition-all text-lg"
                >
                  <MessageCircle className="w-5 h-5 inline mr-2" />
                  Chat with Our Team
                </motion.button>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </main>
    </>
  );
};

export default MounjaroLanding;
