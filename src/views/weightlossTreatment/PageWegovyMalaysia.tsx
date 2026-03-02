"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  Shield,
  Clock,
  AlertCircle,
  CheckCircle2,
  XCircle,
  Apple,
  Droplets,
  Heart,
  Zap,
  Award,
  Leaf,
  Scale,
  MapPin,
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
import SectionBeforeAfter from "../../components/BeforeAfterCustomize";
import { useTranslation } from "@/src/i18n/client";
import { fallbackLng } from "@/src/i18n/settings";

export default function PageWegovyMalaysia({
  locale = fallbackLng,
}: {
  locale?: string;
}) {
  const { t } = useTranslation(locale, "wegovy");
  const faqs = [
    {
      q: "How much weight can I lose with Wegovy?",
      a: "In clinical trials, average weight loss around 68 weeks was about 14.9% with semaglutide 2.4 mg alongside lifestyle intervention, but real results vary.",
    },
    {
      q: "How fast does Wegovy start working?",
      a: "Many people feel appetite changes early, but visible body changes usually build over several weeks. Longer studies show weight loss can plateau later, which is normal.",
    },
    {
      q: "Is Wegovy safe?",
      a: "Wegovy has well-documented benefits and risks. It also has important warnings, including serious side effects to discuss with a clinician. It must be prescribed and monitored.",
    },
    {
      q: "Is Wegovy approved and available in Malaysia?",
      a: "Wegovy has launched in Malaysia, and NPRA materials discuss Wegovy under GLP-1 medicines and reference product registration sources.",
    },
    {
      q: "What are the most common side effects?",
      a: "Nausea, vomiting, diarrhoea, constipation, and abdominal discomfort are commonly listed. These often improve as your body adjusts.",
    },
    {
      q: "Do you gain weight back after stopping Wegovy?",
      a: "Many people regain weight after stopping. A published extension analysis showed substantial regain after withdrawal, which is why long-term planning matters.",
    },
    {
      q: "Is Wegovy the same as Ozempic?",
      a: "They share the same active ingredient (semaglutide), but they are used at different doses and for different labelled purposes.",
    },
    {
      q: "Where do you inject Wegovy?",
      a: "It is given as a subcutaneous injection. Your prescribing clinic will teach correct technique and safe injection habits.",
    },
    {
      q: "What foods should I avoid on Wegovy?",
      a: "There is no single 'banned' food list, but many people feel worse with oily, heavy, very sweet foods, especially during dose increases. A personalised plan helps.",
    },
    {
      q: "Can I drink alcohol while on Wegovy?",
      a: "Alcohol can worsen nausea for some people and adds empty calories. If you drink, keep it moderate and discuss your risks with your doctor, especially if you have liver or pancreas concerns.",
    },
    {
      q: "Can I take Wegovy if I have surgery planned?",
      a: "Tell your doctors. NPRA has highlighted aspiration risk with GLP-1 medicines during general anaesthesia or deep sedation. Your care team will advise what to do before procedures.",
    },
    {
      q: "How much does Wegovy cost in Malaysia?",
      a: "Costs vary by dose and provider. Some Malaysia-based listings show dose-based pen pricing in RM, and some clinics advertise promos. The most accurate quote comes after a medical consult.",
    },
    {
      q: "Do I need to exercise for Wegovy to work?",
      a: "Wegovy is intended to be used with diet and increased physical activity. Even small, consistent movement helps outcomes and helps maintain results.",
    },
    {
      q: "Who should not use Wegovy?",
      a: "People with certain thyroid cancer risks (MTC/MEN2) and other contraindications should not use it. A clinician will screen you properly.",
    },
  ];

  const transformations = [
    {
      id: 1,
      before: "/images/B&A-w/B&A-wegovy1.webp",
      after: "/images/B&A-w/B&A-wegovy1.webp",
    },
    {
      id: 2,
      before: "/images/B&A-w/B&A-wegovy2.webp",
      after: "/images/B&A-w/B&A-wegovy2.webp",
    },
    {
      id: 3,
      before: "/images/B&A-w/B&A-wegovy3.webp",
      after: "/images/B&A-w/B&A-wegovy3.webp",
    },
  ];
  return (
    <>
      <main className="min-h-screen bg-light overflow-hidden">
        {/* Hero Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="relative min-h-[90vh] flex items-center"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-linear-to-br from-cream via-light to-cream/50" />

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <motion.div variants={fadeInLeft} className="space-y-8">
                <div className="inline-flex items-center gap-2 bg-wine/10 px-4 py-2 rounded-full">
                  <Sparkles className="w-4 h-4 text-wine" />
                  <span className="text-wine font-inter text-sm font-medium">
                    Now Available in Kuala Lumpur
                  </span>
                </div>

                <h1 className="font-['Georgia',serif] text-5xl lg:text-5xl text-brown leading-tight">
                  Feel lighter, eat with control, and lose weight safely with
                  <span className="text-wine text-4xl block mt-2">
                    Wegovy in Kuala Lumpur
                  </span>
                </h1>

                <p className="text-taupe font-inter text-lg leading-relaxed max-w-lg">
                  If dieting feels like a daily fight, you are not alone. Wegovy
                  supports appetite control so your plan finally feels doable.
                </p>

                <div className="flex flex-wrap gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-wine text-light px-8 py-4 rounded-full font-inter font-medium hover:bg-rose transition-colors shadow-lg shadow-wine/20"
                  >
                    Book Your Consultation
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-brown/20 text-brown px-8 py-4 rounded-full font-inter font-medium hover:border-wine hover:text-wine transition-colors"
                  >
                    Learn More
                  </motion.button>
                </div>

                {/* Trust Indicators */}
                <div className="grid grid-cols-3 gap-4 pt-8">
                  {[
                    { icon: Shield, text: "Doctor-supervised" },
                    { icon: Clock, text: "Ongoing follow-ups" },
                    { icon: MapPin, text: "KLCC Location" },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ y: -5 }}
                      className="flex items-center gap-2"
                    >
                      <div className="bg-cream p-2 rounded-full">
                        <item.icon className="w-4 h-4 text-wine" />
                      </div>
                      <span className="text-sm text-brown font-inter">
                        {item.text}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Right Image */}
              <motion.div
                variants={fadeInRight}
                className="relative h-150 rounded-3xl overflow-hidden shadow-2xl"
              >
                <div className="absolute inset-0 bg-linear-to-tr from-wine/20 to-transparent z-10" />
                <img
                  src="/images/main/wegovy.webp"
                  alt="Wegovy weight loss treatment in Kuala Lumpur"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-6 left-6 right-6 bg-glass backdrop-blur-md p-6 rounded-2xl z-20">
                  <p className="text-brown font-inter text-sm">
                    Get a doctor-led, monitored Wegovy weight loss programme at
                    Nexus Clinic Kuala Lumpur, built around your body, your
                    habits, and your health.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* What is Wegovy Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="py-24 bg-cream"
        >
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              variants={fadeInUp}
              className="max-w-3xl mx-auto text-center mb-16"
            >
              <h2 className="font-georgia text-4xl md:text-5xl text-brown mb-6">
                What is Wegovy, and why is everyone talking about it?
              </h2>
              <p className="text-taupe font-inter text-lg">
                Wegovy is a GLP-1 receptor agonist. In simple words, it works
                like a natural gut hormone that talks to your brain and
                digestion.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Heart, text: "feel full sooner" },
                { icon: Clock, text: "stay full longer" },
                { icon: Zap, text: "think about food less often" },
                {
                  icon: Scale,
                  text: "manage portions without feeling punished",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={{ y: -10 }}
                  className="bg-light p-8 rounded-3xl shadow-lg"
                >
                  <div className="bg-wine/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-4">
                    <item.icon className="w-8 h-8 text-wine" />
                  </div>
                  <p className="text-brown font-georgia text-xl">{item.text}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={fadeInUp}
              className="mt-12 p-8 bg-white/50 rounded-3xl"
            >
              <p className="text-brown font-inter">
                Wegovy is prescription-only, and it is designed for long-term
                weight management, not spot slimming. Wegovy has launched in
                Malaysia and is being discussed widely by clinics and local
                coverage. NPRA safety communications also list Wegovy among
                GLP-1 medicines and reference the Malaysian product registration
                database (QUEST), which supports that it is regulated as a
                prescription medicine.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Who Wegovy is For */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="py-24 bg-light"
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInLeft} className="space-y-6">
                <h2 className="font-georgia text-4xl md:text-5xl text-brown">
                  Who Wegovy is for{" "}
                  <span className="text-wine">(and who should avoid it)</span>
                </h2>

                <div className="space-y-4">
                  <h3 className="font-georgia text-2xl text-brown">
                    Wegovy may be considered if you:
                  </h3>
                  <div className="bg-cream p-6 rounded-2xl">
                    <p className="text-brown font-inter mb-4">
                      Wegovy is commonly used for adults with:
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-wine shrink-0" />
                        <span className="text-brown font-inter">
                          BMI 30+ (obesity)
                        </span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-wine shrink-0" />
                        <span className="text-brown font-inter">
                          BMI 27+ (overweight) with weight-related health
                          problems
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-rose/10 p-6 rounded-2xl border-l-4 border-wine">
                  <h3 className="font-georgia text-2xl text-brown mb-4 flex items-center gap-2">
                    <AlertCircle className="w-6 h-6 text-wine" />
                    Wegovy is not for everyone
                  </h3>
                  <p className="text-brown font-inter">
                    You should not self-start Wegovy. It requires a medical
                    assessment. Wegovy has important warnings and
                    contraindications, including a warning about thyroid C-cell
                    tumors (seen in rodents) and avoidance in people with
                    certain thyroid cancer risks (like medullary thyroid
                    carcinoma or MEN2). If you are pregnant, planning pregnancy,
                    or breastfeeding, you should discuss safer alternatives with
                    your doctor.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeInRight} className="relative">
                <div className="bg-linear-to-br from-wine to-rose p-1 rounded-3xl">
                  <div className="bg-light p-8 rounded-3xl">
                    <h3 className="font-georgia text-2xl text-brown mb-6">
                      Quick Eligibility Check
                    </h3>
                    <div className="space-y-4">
                      {[
                        "BMI assessment required",
                        "Medical history review",
                        "Current medications check",
                        "Thyroid health screening",
                        "Pregnancy planning discussion",
                      ].map((item, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-wine rounded-full" />
                          <span className="text-brown font-inter">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
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
          className="py-24 bg-cream"
        >
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              variants={fadeInUp}
              className="max-w-3xl mx-auto text-center mb-16"
            >
              <h2 className="font-georgia text-4xl md:text-5xl text-brown mb-6">
                What results can you realistically expect?
              </h2>
              <p className="text-taupe font-inter text-lg">
                Here is the honest answer: results vary, and the "wow" stories
                online are not the standard.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
              <motion.div
                variants={scaleIn}
                className="bg-light p-8 rounded-3xl shadow-lg"
              >
                <div className="text-5xl font-georgia text-wine mb-4">
                  14.9%
                </div>
                <p className="text-brown font-inter">
                  Average weight loss at 68 weeks with semaglutide in STEP 1
                  clinical trial
                </p>
                <div className="mt-4 text-sm text-taupe">
                  vs 2.4% with placebo
                </div>
              </motion.div>

              <motion.div
                variants={scaleIn}
                className="bg-light p-8 rounded-3xl shadow-lg"
              >
                <h3 className="font-georgia text-2xl text-brown mb-4">
                  When do people start noticing changes?
                </h3>
                <p className="text-brown font-inter">
                  Many people notice appetite changes early. Visible weight
                  changes often show up gradually over weeks, not days. A common
                  pattern is steady loss, then a slower phase, then a plateau.
                  Longer studies show weight loss tends to level off over time,
                  which is normal.
                </p>
              </motion.div>

              <motion.div
                variants={scaleIn}
                className="bg-light p-8 rounded-3xl shadow-lg"
              >
                <h3 className="font-georgia text-2xl text-brown mb-4">
                  What happens if you stop Wegovy?
                </h3>
                <p className="text-brown font-inter">
                  Stopping often leads to weight regain for many people. In a
                  well-known extension analysis, participants regained a
                  significant portion of lost weight after stopping semaglutide.
                  That does not mean you can never stop. It means weight care
                  should be planned like long-term health care, not a short
                  "challenge".
                </p>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Your Journey at Nexus Clinic */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="py-24 bg-light"
        >
          <div className="container mx-auto px-4 md:px-6">
            <motion.div variants={fadeInUp} className="max-w-3xl mb-16">
              <h2 className="font-georgia text-4xl md:text-5xl text-brown mb-6">
                Wegovy at Nexus Clinic Kuala Lumpur: what your journey can look
                like
              </h2>
              <p className="text-taupe font-inter text-lg">
                At Nexus Clinic KL, the goal is simple: help you lose weight
                safely while protecting your health.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                {[
                  {
                    step: "Step 1",
                    title: "A real consultation, not a sales pitch",
                    desc: "We start with your story. Not just your weight. Sleep, stress, cravings, work routine, past diets, medical history and current meds. Because the right plan is the one you can actually follow.",
                  },
                  {
                    step: "Step 2",
                    title: "Safety screening and suitability checks",
                    desc: "Wegovy is a prescription medicine, so we focus on safety first. You may be advised on baseline checks depending on your risks and history.",
                  },
                  {
                    step: "Step 3",
                    title: "A doctor-led dosing plan (slow and steady)",
                    desc: "Wegovy is typically started at a low dose and increased gradually. Many guides describe stepping up about every 4 weeks until a maintenance dose is reached, based on response and tolerance.",
                  },
                  {
                    step: "Step 4",
                    title: "Follow-ups that keep you consistent",
                    desc: "Most people do better with structure. Follow-ups help you manage side effects, adjust habits, and keep momentum when motivation dips.",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInLeft}
                    className="bg-cream p-6 rounded-2xl hover:shadow-xl transition-shadow"
                  >
                    <div className="flex items-start gap-4">
                      <div className="bg-wine text-light w-10 h-10 rounded-full flex items-center justify-center font-bold font-inter">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="font-georgia text-xl text-brown mb-2">
                          {item.title}
                        </h3>
                        <p className="text-brown font-inter text-sm">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div variants={fadeInRight} className="space-y-6">
                <div className="bg-rose/5 p-8 rounded-3xl">
                  <h3 className="font-georgia text-2xl text-brown mb-4 flex items-center gap-2">
                    <Heart className="w-6 h-6 text-wine" />
                    Areas we assess
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      "Sleep",
                      "Stress",
                      "Cravings",
                      "Work routine",
                      "Past diets",
                      "Medical history",
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-wine rounded-full" />
                        <span className="text-brown font-inter text-sm">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Before & After Section */}
        <SectionBeforeAfter transformations={transformations} />

        {/* Side Effects Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="py-24 bg-cream"
        >
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              variants={fadeInUp}
              className="max-w-3xl mx-auto text-center mb-16"
            >
              <h2 className="font-georgia text-4xl md:text-5xl text-brown mb-6">
                Side effects: what's common, what's serious, what to do
              </h2>
              <p className="text-taupe font-inter">
                Most side effects are digestive and often improve over time.
                Commonly reported effects include nausea, vomiting, diarrhea,
                constipation, and stomach discomfort.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12">
              <motion.div variants={fadeInLeft} className="space-y-6">
                <h3 className="font-georgia text-2xl text-brown mb-4">
                  Simple ways doctors often reduce side effects
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Apple, text: "Slower eating" },
                    { icon: Scale, text: "Smaller meals" },
                    { icon: Leaf, text: "Higher protein and fibre" },
                    { icon: Droplets, text: "Better hydration" },
                    {
                      icon: XCircle,
                      text: "Avoid greasy, heavy meals during dose increases",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className="bg-light p-4 rounded-2xl flex items-center gap-3"
                    >
                      <item.icon className="w-5 h-5 text-wine" />
                      <span className="text-brown font-inter text-sm">
                        {item.text}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={fadeInRight} className="space-y-6">
                <div className="bg-rose/10 p-6 rounded-2xl border-l-4 border-wine">
                  <h3 className="font-georgia text-xl text-brown mb-3">
                    When to get medical help urgently
                  </h3>
                  <p className="text-brown font-inter">
                    Seek urgent medical care if you have severe symptoms that
                    could suggest serious issues (your doctor will explain what
                    to watch for). Wegovy prescribing safety information
                    highlights serious risks and warning signs to discuss with a
                    clinician.
                  </p>
                </div>

                <div className="bg-wine/5 p-6 rounded-2xl">
                  <h3 className="font-georgia text-xl text-brown mb-3">
                    Extra Malaysia-specific safety note (important)
                  </h3>
                  <p className="text-brown font-inter">
                    NPRA has published safety alerts discussing GLP-1 medicines
                    (including semaglutide and tirzepatide) and the risk of
                    aspiration during general anaesthesia or deep sedation. If
                    you are planning surgery or sedation, tell your doctor and
                    your anaesthetist.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Cost Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="py-24 bg-light"
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInLeft} className="space-y-6">
                <h2 className="font-georgia text-4xl md:text-5xl text-brown">
                  Wegovy cost in Malaysia:{" "}
                  <span className="text-wine">what affects the price?</span>
                </h2>

                <p className="text-brown font-inter">
                  Wegovy pricing can vary based on:
                </p>

                <ul className="space-y-3">
                  {[
                    "dose stage (starter vs maintenance)",
                    "supply and availability",
                    "clinic support (monitoring, follow-ups, bundled programmes)",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <ChevronRight className="w-5 h-5 text-wine" />
                      <span className="text-brown font-inter">{item}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-brown font-inter">
                  Online pharmacy listings in Malaysia show different prices by
                  strength and packaging. For example, one Malaysia-based
                  listing shows Wegovy pens at different RM price points
                  depending on dose. Nexus Clinic Kuala Lumpur has also promoted
                  Wegovy pricing on social posts (example: per-pen pricing and
                  limited-time promos). If you want a "true cost" estimate, the
                  best approach is a consultation because your dose and timeline
                  depend on your tolerance and goals.
                </p>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                className="bg-cream p-8 rounded-3xl"
              >
                <h3 className="font-georgia text-2xl text-brown mb-6">
                  Price Range Estimate
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-4 border-b border-taupe/20">
                    <span className="text-brown font-inter">Starter dose</span>
                    <span className="text-wine font-georgia text-xl">
                      RM X,XXX
                    </span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-taupe/20">
                    <span className="text-brown font-inter">
                      Maintenance dose
                    </span>
                    <span className="text-wine font-georgia text-xl">
                      RM X,XXX
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-brown font-inter">
                      Bundled programme
                    </span>
                    <span className="text-wine font-georgia text-xl">
                      Contact clinic
                    </span>
                  </div>
                </div>
                <p className="text-sm text-taupe mt-6">
                  *Prices are estimates. Actual cost depends on your specific
                  treatment plan.
                </p>
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
              className="max-w-3xl mx-auto text-center mb-16"
            >
              <h2 className="font-georgia text-4xl md:text-5xl text-brown mb-6">
                Wegovy vs Ozempic vs Mounjaro: what is the difference?
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Wegovy vs Ozempic",
                  content:
                    "Both use semaglutide, but they are not the same product or purpose. Ozempic is commonly associated with type 2 diabetes management, while Wegovy is designed and dosed for chronic weight management.",
                },
                {
                  title: "Wegovy vs Mounjaro",
                  content:
                    "Mounjaro (tirzepatide) works on two hormone pathways (GIP and GLP-1), while Wegovy targets GLP-1. Some trials show higher average weight loss with tirzepatide, but suitability, side effects, cost, and availability matter.",
                },
                {
                  title: "Wegovy vs 'fat freezing'",
                  content:
                    "If your main issue is stubborn pockets (lower belly pooch, love handles, bra bulge), fat freezing may be a better fit. If your issue is overall appetite, portion control, and steady weight gain, Wegovy may be more relevant. Many people do best with a combined plan: medical weight management first, then contouring for shape.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  className="bg-light p-8 rounded-3xl shadow-lg"
                >
                  <h3 className="font-georgia text-2xl text-brown mb-4">
                    {item.title}
                  </h3>
                  <p className="text-brown font-inter">{item.content}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={fadeInUp}
              className="mt-12 p-8 bg-white/50 rounded-3xl"
            >
              <h3 className="font-georgia text-2xl text-brown mb-4">
                Areas people commonly want help with
              </h3>
              <p className="text-brown font-inter mb-4">
                Wegovy supports whole-body weight loss. That said, in real life,
                people often ask about: belly fat and waistline, thighs, upper
                arms, back fat, face changes.
              </p>
              <p className="text-brown font-inter">
                Your body decides where it loses fat first. A doctor can help
                you plan for realistic body composition changes over time.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Competitor Analysis Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="py-24 bg-light"
        >
          <div className="container mx-auto px-4 md:px-6">
            <motion.div variants={fadeInUp} className="max-w-4xl mx-auto">
              <h2 className="font-georgia text-4xl md:text-5xl text-brown mb-8 text-center">
                "Top competitors" on Google in Malaysia: what they do well (and
                where they fall short)
              </h2>

              <div className="bg-cream p-8 rounded-3xl mb-8">
                <p className="text-brown font-inter mb-4">
                  Based on commonly surfaced pages for queries like "Wegovy
                  Malaysia" and "Wegovy Kuala Lumpur", you will see clinics and
                  platforms such as:
                </p>
                <ul className="grid grid-cols-2 gap-3 mb-6">
                  {[
                    "CLEO Clinic",
                    "Alainn Clinic",
                    "PULSE Clinic",
                    "Klinik Sentosa",
                    "Online pharmacy listings",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-wine rounded-full" />
                      <span className="text-brown font-inter">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-rose/5 p-6 rounded-2xl">
                  <h3 className="font-georgia text-xl text-brown mb-4 flex items-center gap-2">
                    <XCircle className="w-5 h-5 text-wine" />
                    What most competitor pages miss
                  </h3>
                  <ul className="space-y-2">
                    <li className="text-brown font-inter text-sm">
                      • talk about benefits, but skip clear "who it is for"
                      safety screening
                    </li>
                    <li className="text-brown font-inter text-sm">
                      • mention results, but do not explain plateaus or regain
                      risks
                    </li>
                    <li className="text-brown font-inter text-sm">
                      • do not clearly address Malaysia safety alerts and
                      sedation planning
                    </li>
                    <li className="text-brown font-inter text-sm">
                      • do not explain what happens if side effects hit at
                      higher doses
                    </li>
                  </ul>
                </div>

                <div className="bg-wine/5 p-6 rounded-2xl">
                  <h3 className="font-georgia text-xl text-brown mb-4 flex items-center gap-2">
                    <Award className="w-5 h-5 text-wine" />
                    How Nexus Clinic KL positions differently
                  </h3>
                  <ul className="space-y-2">
                    <li className="text-brown font-inter text-sm">
                      ✓ doctor-led safety and patient selection
                    </li>
                    <li className="text-brown font-inter text-sm">
                      ✓ structured follow-ups and habit support
                    </li>
                    <li className="text-brown font-inter text-sm">
                      ✓ realistic expectations backed by clinical evidence
                    </li>
                    <li className="text-brown font-inter text-sm">
                      ✓ clear guidance around NPRA safety alerts and surgery
                      planning
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* FAQ Section */}
        <FAQ data={faqs} />

        {/* Final CTA Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="py-24 bg-linear-to-br from-wine to-rose relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] opacity-10 mix-blend-overlay" />

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <motion.div
              variants={fadeInUp}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="font-georgia text-4xl md:text-5xl text-light mb-6">
                Ready to make weight loss feel more manageable?
              </h2>
              <p className="text-cream font-inter text-lg mb-8">
                If you want a medically supervised Wegovy weight loss plan in
                Kuala Lumpur, book a consultation with Nexus Clinic KL and get a
                personalised roadmap that prioritises safety, consistency, and
                real-life routines.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-light text-wine px-10 py-5 rounded-full font-inter font-medium text-lg hover:bg-cream transition-colors shadow-2xl"
              >
                Book Your Consultation Today
              </motion.button>
            </motion.div>
          </div>
        </motion.section>
      </main>
    </>
  );
}
