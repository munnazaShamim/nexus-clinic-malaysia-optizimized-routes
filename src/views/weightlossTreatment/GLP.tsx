"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Heart,
  Clock,
  Coffee,
  Apple,
  Activity,
  AlertCircle,
  CheckCircle2,
  ArrowRight,
  Calendar,
  FileText,
  Target,
  Brain,
  Award,
  Sparkles,
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

const GLP1LandingPage = ({ locale = fallbackLng }: { locale?: string }) => {
  const { t } = useTranslation(locale, "glp1");
  const faqs = [
    {
      q: "How does a GLP-1 weight loss programme work?",
      a: "A GLP-1 programme uses medication that mimics gut hormones involved in fullness. It can reduce appetite, slow stomach emptying, and help you eat less without constant hunger. It works best when paired with lifestyle support, follow-ups, and medical monitoring.",
    },
    {
      q: "How long does it take to see results?",
      a: "Many people notice appetite changes within the first few weeks. Scale changes usually follow after that. It's normal for weight loss to be faster early, then slow down. Consistency over months matters more than quick weekly drops.",
    },
    {
      q: "Do I need to diet and exercise on a GLP-1 programme?",
      a: "Yes, but it does not need to be extreme. GLP-1 medicines work best with sustainable nutrition and activity changes. Even a simple plan like higher protein meals, daily steps, and better sleep can improve results. Think 'repeatable', not 'perfect'.",
    },
    {
      q: "Is GLP-1 the same as fat freezing?",
      a: "No. GLP-1 supports appetite control and overall weight loss. Fat freezing is a body contouring treatment for local fat pockets. Many people choose GLP-1 first to reduce overall fat, then consider contouring later if needed.",
    },
  ];
  const transformations = [
    {
      id: 1,
      before: "/images/B&A-w/B&A-GLP1.webp",
      after: "/images/B&A-w/B&A-GLP1.webp",
    },
    {
      id: 2,
      before: "/images/B&A-w/B&A-GLP2.webp",
      after: "/images/B&A-w/B&A-GLP2.webp",
    },
    {
      id: 3,
      before: "/images/B&A-w/B&A-GLP3.webp",
      after: "/images/B&A-w/B&A-GLP3.webp",
    },
  ];
  return (
    <>
      <main className="min-h-screen bg-linear-to-b from-cream to-white font-['Inter'] overflow-hidden">
        {/* Hero Section */}
        <motion.section
          initial="hidden"
          animate="visible"
          className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-wine rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-rose rounded-full filter blur-3xl"></div>
          </div>

          <div className="relative max-w-7xl mx-auto text-center">
            <motion.div variants={fadeInUp} className="mb-8">
              <span className="inline-flex items-center px-4 py-2 bg-wine/10 rounded-full text-wine font-medium text-sm">
                <Sparkles className="w-4 h-4 mr-2" />
                Doctor-Monitored GLP-1 Programme
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="font-['Georgia'] text-5xl md:text-7xl font-bold text-brown mb-6 leading-tight"
            >
              Quiet the cravings,
              <br />
              <span className="text-wine">not your lifestyle</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl text-taupe max-w-3xl mx-auto mb-10"
            >
              A doctor-monitored GLP-1 weight loss programme in Kuala Lumpur
              that helps you feel fuller, eat less, and lose weight steadily.
              Built around real medical screening, safe dosing, and habits you
              can keep.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-wine text-white rounded-full font-medium hover:bg-[#7A434B] transition-colors shadow-lg hover:shadow-xl flex items-center justify-center group"
              >
                Start Your Assessment
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-brown rounded-full font-medium hover:bg-light transition-colors shadow-lg hover:shadow-xl border border-taupe/20"
              >
                Learn More
              </motion.button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
            >
              {[
                { icon: Shield, text: "Doctor-Led Care" },
                { icon: Award, text: "Genuine Medicines" },
                { icon: Heart, text: "Safety First" },
                { icon: FileText, text: "Evidence-Based" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  className="flex flex-col items-center p-4 bg-white/70 backdrop-blur-sm rounded-2xl border border-taupe/10"
                >
                  <item.icon className="w-8 h-8 text-wine mb-2" />
                  <span className="text-sm font-medium text-brown">
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Understanding Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="py-24 px-4 sm:px-6 lg:px-8 bg-white"
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div variants={fadeInLeft}>
                <span className="text-wine font-medium text-sm uppercase tracking-wider mb-4 block">
                  Understanding GLP-1
                </span>
                <h2 className="font-['Georgia'] text-4xl font-bold text-brown mb-6">
                  What is a GLP-1 weight loss programme?
                </h2>
                <div className="relative rounded-3xl my-4 overflow-hidden shadow-xl">
                  <img
                    src="/images/main/GLP-programme.webp"
                    alt="GLP-1 weight loss programme"
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-brown/40 to-transparent"></div>
                </div>

                <p className="text-taupe text-lg mb-6">
                  A GLP-1 weight loss programme is a medically supervised plan
                  that may use GLP-1 based medication to help with appetite
                  control and weight management, plus lifestyle support so
                  results can last.
                </p>
                <p className="text-taupe text-lg mb-8">
                  GLP-1 is a natural gut hormone. These medicines work on the
                  same pathway. They help your brain register fullness more
                  strongly, slow stomach emptying, and reduce hunger signals.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-wine text-white rounded-full font-medium hover:bg-[#7A434B] transition-colors inline-flex items-center"
                >
                  Discover How It Works
                  <ArrowRight className="w-4 h-4 ml-2" />
                </motion.button>
              </motion.div>

              <motion.div variants={fadeInRight} className="relative">
                <div className="absolute inset-0 bg-linear-to-br from-wine/20 to-rose/20 rounded-3xl transform rotate-3"></div>
                <div className="relative bg-white p-8 rounded-3xl shadow-2xl border border-taupe/10">
                  <h3 className="font-['Georgia'] text-2xl font-bold text-brown mb-6">
                    How GLP-1 Medicines Help
                  </h3>
                  <div className="space-y-4">
                    {[
                      { icon: Coffee, text: "Help you feel full sooner" },
                      { icon: Clock, text: "Keep you satisfied longer" },
                      {
                        icon: Brain,
                        text: "Reduce cravings and 'snack thinking'",
                      },
                      {
                        icon: Activity,
                        text: "Support better blood sugar control",
                      },
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        variants={fadeInUp}
                        className="flex items-center p-4 bg-cream rounded-xl"
                      >
                        <div className="w-10 h-10 bg-wine/10 rounded-full flex items-center justify-center mr-4">
                          <item.icon className="w-5 h-5 text-wine" />
                        </div>
                        <span className="text-brown font-medium">
                          {item.text}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Who Is It For Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="py-24 px-4 sm:px-6 lg:px-8 bg-cream"
        >
          <div className="max-w-7xl mx-auto">
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <span className="text-wine font-medium text-sm uppercase tracking-wider mb-4 block">
                Who Is It For
              </span>
              <h2 className="font-['Georgia'] text-4xl font-bold text-brown mb-6">
                Is a GLP-1 programme right for you?
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <motion.div
                variants={fadeInLeft}
                className="bg-white p-8 rounded-3xl shadow-xl border border-taupe/10"
              >
                <h3 className="font-['Georgia'] text-2xl font-bold text-brown mb-6 flex items-center">
                  <CheckCircle2 className="w-6 h-6 text-green-500 mr-3" />
                  Good Fit If:
                </h3>
                <ul className="space-y-4">
                  {[
                    "You have tried diet and exercise but your weight keeps returning",
                    "You feel strong cravings or constant hunger",
                    "You want a medical plan with monitoring, not guesswork",
                    "You have weight-related risks (blood sugar, blood pressure, etc.)",
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      variants={fadeInUp}
                      className="flex items-start text-brown"
                    >
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></span>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                className="bg-white p-8 rounded-3xl shadow-xl border border-taupe/10"
              >
                <h3 className="font-['Georgia'] text-2xl font-bold text-brown mb-6 flex items-center">
                  <AlertCircle className="w-6 h-6 text-wine mr-3" />
                  Extra Care Needed If:
                </h3>
                <ul className="space-y-4">
                  {[
                    "Pregnant, trying to conceive, or breastfeeding",
                    "History of pancreatitis or gallbladder disease",
                    "Severe reflux or frequent vomiting",
                    "Taking other medications that affect blood sugar",
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      variants={fadeInUp}
                      className="flex items-start text-brown"
                    >
                      <span className="w-2 h-2 bg-wine rounded-full mt-2 mr-3"></span>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* BMI Guidance */}
            <motion.div
              variants={scaleIn}
              className="bg-linear-to-r from-wine to-rose p-8 rounded-3xl text-white"
            >
              <h3 className="font-['Georgia'] text-2xl font-bold mb-4">
                BMI Guidance for Asian Population
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <p className="text-white/80 mb-2">Normal</p>
                  <p className="text-3xl font-bold">18.5 - 22.9</p>
                </div>
                <div>
                  <p className="text-white/80 mb-2">Overweight</p>
                  <p className="text-3xl font-bold">23.0 - 27.4</p>
                </div>
                <div>
                  <p className="text-white/80 mb-2">Obesity</p>
                  <p className="text-3xl font-bold">≥ 27.5</p>
                </div>
              </div>
              <p className="text-white/80 mt-4 text-sm">
                *Pharmacotherapy is generally positioned as an add-on to
                lifestyle change, not a standalone solution.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Before & After  */}
        <SectionBeforeAfter transformations={transformations} />

        {/* Programme Structure */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="py-24 px-4 sm:px-6 lg:px-8 bg-white"
        >
          <div className="max-w-7xl mx-auto">
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <span className="text-wine font-medium text-sm uppercase tracking-wider mb-4 block">
                Our Programme
              </span>
              <h2 className="font-['Georgia'] text-4xl font-bold text-brown mb-6">
                What's inside a doctor-monitored GLP-1 programme
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: FileText,
                  title: "Medical Assessment",
                  desc: "Review weight history, hunger patterns, health risks, and baseline measurements",
                },
                {
                  icon: Target,
                  title: "Medication Plan",
                  desc: "Personalised option based on your needs - Semaglutide, Liraglutide, or Tirzepatide",
                },
                {
                  icon: Apple,
                  title: "Food Strategy",
                  desc: "Repeatable eating habits with Malaysian food - protein, fibre, proper portions",
                },
                {
                  icon: Calendar,
                  title: "Follow-ups",
                  desc: "Regular tracking of hunger control, side effects, weight, and energy",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={{ y: -10 }}
                  className="bg-cream p-6 rounded-2xl border border-taupe/10 hover:shadow-xl transition-all"
                >
                  <div className="w-14 h-14 bg-wine/10 rounded-2xl flex items-center justify-center mb-4">
                    <item.icon className="w-7 h-7 text-wine" />
                  </div>
                  <h3 className="font-['Georgia'] text-xl font-bold text-brown mb-2">
                    {item.title}
                  </h3>
                  <p className="text-taupe text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Results & Side Effects */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="py-24 px-4 sm:px-6 lg:px-8 bg-cream"
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16">
              <motion.div variants={fadeInLeft}>
                <h2 className="font-['Georgia'] text-4xl font-bold text-brown mb-6">
                  What results can you realistically expect?
                </h2>
                <p className="text-taupe text-lg mb-8">
                  Clinical trials show meaningful average weight loss with
                  proper medication and lifestyle support.
                </p>

                <div className="space-y-6">
                  {[
                    {
                      drug: "Semaglutide 2.4 mg",
                      time: "68 weeks",
                      result: "STEP 1 trial",
                    },
                    {
                      drug: "Tirzepatide",
                      time: "72 weeks",
                      result: "SURMOUNT-1 trial",
                    },
                    {
                      drug: "Liraglutide 3.0 mg",
                      time: "56 weeks",
                      result: "Trial data",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      className="flex items-center justify-between p-4 bg-white rounded-xl border border-taupe/10"
                    >
                      <div>
                        <h4 className="font-bold text-brown">{item.drug}</h4>
                        <p className="text-sm text-taupe">{item.time}</p>
                      </div>
                      <span className="text-wine font-semibold">
                        {item.result}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={fadeInRight}>
                <div className="bg-white p-8 rounded-3xl shadow-xl border border-taupe/10">
                  <h3 className="font-['Georgia'] text-2xl font-bold text-brown mb-6 flex items-center">
                    <AlertCircle className="w-6 h-6 text-wine mr-3" />
                    Common Side Effects
                  </h3>

                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {["Nausea", "Diarrhoea", "Vomiting", "Constipation"].map(
                      (effect, index) => (
                        <motion.div
                          key={index}
                          variants={scaleIn}
                          className="p-3 bg-cream rounded-xl text-center"
                        >
                          <span className="text-brown font-medium">
                            {effect}
                          </span>
                        </motion.div>
                      ),
                    )}
                  </div>

                  <div className="bg-wine/10 p-6 rounded-xl">
                    <h4 className="font-bold text-brown mb-2">
                      How we manage side effects:
                    </h4>
                    <ul className="space-y-2">
                      {[
                        "Start low and increase gradually",
                        "Coaching on meal size and food choices",
                        "Checking hydration",
                        "Reviewing red flags",
                      ].map((item, index) => (
                        <li
                          key={index}
                          className="flex items-center text-sm text-brown"
                        >
                          <CheckCircle2 className="w-4 h-4 text-green-500 mr-2" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 p-4 bg-yellow-50 rounded-xl border border-yellow-200">
                    <h4 className="font-bold text-yellow-800 mb-2 flex items-center">
                      <AlertCircle className="w-5 h-5 mr-2" />
                      Important Safety Note:
                    </h4>
                    <p className="text-sm text-yellow-700">
                      Malaysia's NPRA published safety communication on GLP-1
                      medicines and aspiration risk during general anaesthesia
                      or deep sedation. Always inform your doctor before any
                      procedure.
                    </p>
                  </div>
                </div>
              </motion.div>
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
          className="py-24 px-4 sm:px-6 lg:px-8 bg-linear-to-r from-wine to-rose relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
          </div>

          <div className="relative max-w-4xl mx-auto text-center">
            <motion.div variants={fadeInUp}>
              <h2 className="font-['Georgia'] text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to quiet the cravings?
              </h2>
              <p className="text-white/90 text-xl mb-10">
                If you feel like your appetite is running the show, a
                doctor-monitored GLP-1 weight loss programme in Kuala Lumpur can
                give you structure and support.
              </p>
              <p className="text-white/80 text-lg mb-12">
                Start with a proper assessment at Nexus Clinic Kuala Lumpur so
                your plan fits your body, your risks, and your lifestyle.
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-white text-wine rounded-full font-bold text-lg hover:bg-light transition-colors shadow-2xl hover:shadow-3xl inline-flex items-center"
              >
                Book Your Assessment
                <ArrowRight className="w-6 h-6 ml-2" />
              </motion.button>
            </motion.div>
          </div>
        </motion.section>
      </main>
    </>
  );
};

export default GLP1LandingPage;
