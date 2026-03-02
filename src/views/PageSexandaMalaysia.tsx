"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  Phone,
  Clock,
  MapPin,
  Star,
  Syringe,
  Heart,
  Activity,
  TrendingDown,
  Shield,
  MessageCircle,
  ChevronDown,
  Award,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const PageSaxendaMalaysia = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const benefits = [
    {
      icon: TrendingDown,
      title: "Effective Weight Loss",
      description: "Proven results with 15-25kg weight reduction",
      stat: "25kg",
      statLabel: "avg. loss",
    },
    {
      icon: Heart,
      title: "Improved Health",
      description: "Better blood sugar and cardiovascular health",
      stat: "40%",
      statLabel: "health boost",
    },
    {
      icon: Activity,
      title: "Increased Energy",
      description: "Feel more energetic throughout your day",
      stat: "3x",
      statLabel: "more active",
    },
    {
      icon: Shield,
      title: "Safe & Approved",
      description: "Medically approved GLP-1 therapy",
      stat: "FDA",
      statLabel: "approved",
    },
  ];

  const howItWorks = [
    {
      step: "01",
      title: "Consultation",
      description: "Expert review of your medical history and goals",
    },
    {
      step: "02",
      title: "Custom Plan",
      description: "Tailored program with lifestyle guidance",
    },
    {
      step: "03",
      title: "Treatment",
      description: "Regular check-ins and progress monitoring",
    },
    {
      step: "04",
      title: "Results",
      description: "Sustainable weight loss and improved health",
    },
  ];

  const treatmentDetails = [
    { label: "Area", value: "Stomach, thighs, arms", icon: Syringe },
    { label: "Duration", value: "Few minutes", icon: Clock },
    { label: "Frequency", value: "Daily injection", icon: Calendar },
    { label: "Downtime", value: "None", icon: Activity },
  ];

  const testimonials = [
    {
      name: "Hana Aisya",
      role: "Lost 15kg in 3 months",
      rating: 5,
      text: "The GLP-1 treatment exceeded my expectations. I lost 15 pounds quickly and the results are lasting. Best decision I ever made.",
      avatar: "HA",
    },
    {
      name: "Liya Lee",
      role: "Lost 25kg in 6 months",
      rating: 5,
      text: "I lost 25kg which wouldn't have been possible without Nexus Clinic. The team's support made all the difference.",
      avatar: "LL",
    },
    {
      name: "Nina Patel",
      role: "Lost 18kg in 4 months",
      rating: 5,
      text: "My experience was beyond expectations. The treatment was smooth, pain-free, and the results speak for themselves.",
      avatar: "NP",
    },
  ];

  const faqs = [
    {
      question: "What is the best injection for weight loss?",
      answer:
        "GLP-1 receptor agonist injections are among the most effective options, supporting significant and sustainable weight loss.",
    },
    {
      question: "Are there any side effects?",
      answer:
        "Some may experience mild nausea or digestive discomfort initially. Our doctors will discuss all potential risks during consultation.",
    },
    {
      question: "How long until I see results?",
      answer:
        "Most patients begin noticing results within 4-6 weeks of starting treatment.",
    },
    {
      question: "How many sessions are needed?",
      answer:
        "Treatment duration varies by individual. Your doctor will create a personalized plan during your consultation.",
    },
  ];

  return (
    <>
      <div className="bg-stone-50 overflow-hidden">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center pt-20 pb-32 px-4">
          {/* Elegant Background */}
          <div className="absolute inset-0 bg-linear-to-br from-stone-100 via-stone-50 to-amber-50/30" />
          <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-rose-50/50 to-transparent" />

          {/* Decorative Elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute top-32 right-20 w-72 h-72 bg-linear-to-br from-rose-200/20 to-amber-200/20 rounded-full blur-3xl"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.3 }}
            className="absolute bottom-32 left-20 w-96 h-96 bg-linear-to-tr from-stone-200/30 to-rose-100/20 rounded-full blur-3xl"
          />

          <div className="container mx-auto max-w-7xl relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-stone-200 rounded-full shadow-sm"
                >
                  <Sparkles className="w-4 h-4 text-amber-600" />
                  <span className="text-sm font-medium text-stone-600 tracking-wide">
                    Medically Supervised Weight Loss
                  </span>
                </motion.div>

                <h1 className="text-5xl lg:text-6xl xl:text-7xl font-light text-brown leading-[1.1] tracking-tight">
                  Transform with
                  <span className="block font-serif italic text-rose-800 mt-2">
                    Saxenda
                  </span>
                </h1>

                <p className="text-lg text-stone-600 leading-relaxed max-w-lg">
                  Experience effective, medically-supervised weight management
                  with GLP-1 therapy at Nexus Clinic, Kuala Lumpur. Achieve
                  lasting results under expert guidance.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href="https://api.leadconnectorhq.com/widget/booking/jcLccLXPVMWo5FAG6cUC"
                    className="group inline-flex items-center justify-center px-8 py-4 bg-brown text-white rounded-full font-medium shadow-lg shadow-stone-900/20 hover:bg-brown transition-all"
                  >
                    Book Consultation
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </motion.a>

                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href="https://api.whatsapp.com/send/?phone=60168245699"
                    className="inline-flex items-center justify-center px-8 py-4 bg-white border border-stone-200 text-stone-700 rounded-full font-medium shadow-sm hover:shadow-md hover:border-stone-300 transition-all"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp
                  </motion.a>
                </div>

                {/* Trust Indicators */}
                <div className="flex items-center gap-8 pt-8 border-t border-stone-200">
                  <div className="text-center">
                    <p className="text-3xl font-light text-brown">1000+</p>
                    <p className="text-sm text-stone-500">Happy Patients</p>
                  </div>
                  <div className="w-px h-12 bg-stone-200" />
                  <div className="text-center">
                    <p className="text-3xl font-light text-brown">95%</p>
                    <p className="text-sm text-stone-500">Success Rate</p>
                  </div>
                  <div className="w-px h-12 bg-stone-200" />
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                    <span className="text-sm text-stone-500 ml-2">5.0</span>
                  </div>
                </div>
              </motion.div>

              {/* Right Content - Image */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="relative">
                  {/* Main Image */}
                  <motion.div
                    whileHover={{ y: -10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="relative rounded-4xl overflow-hidden shadow-2xl shadow-stone-900/10"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80"
                      alt="Weight Loss Transformation"
                      className="w-full h-150 object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-stone-900/40 via-transparent to-transparent" />
                  </motion.div>

                  {/* Floating Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl shadow-stone-900/10"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-full bg-linear-to-br from-rose-100 to-amber-100 flex items-center justify-center">
                        <Award className="w-7 h-7 text-rose-700" />
                      </div>
                      <div>
                        <p className="text-2xl font-light text-brown">
                          15-25kg
                        </p>
                        <p className="text-sm text-stone-500">
                          Average Weight Loss
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Decorative Ring */}
                  <div className="absolute -top-4 -right-4 w-32 h-32 border border-rose-200/50 rounded-full" />
                  <div className="absolute -top-8 -right-8 w-40 h-40 border border-stone-200/30 rounded-full" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Treatment Overview */}
        <section className="py-24 px-4 bg-cream">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <p className="text-sm font-medium text-rose-700 tracking-widest uppercase mb-4">
                Quick Overview
              </p>
              <h2 className="text-4xl lg:text-5xl font-light text-brown">
                What to <span className="font-serif italic">Expect</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-6">
              {treatmentDetails.map((detail, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative p-8 bg-stone-50 rounded-2xl hover:bg-linear-to-br hover:from-stone-50 hover:to-rose-50/50 transition-all duration-500"
                >
                  <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:shadow-md transition-shadow">
                    <detail.icon className="w-5 h-5 text-stone-600" />
                  </div>
                  <p className="text-sm text-stone-500 mb-1">{detail.label}</p>
                  <p className="text-lg font-medium text-brown">
                    {detail.value}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 px-4 bg-linear-to-b from-white to-stone-50">
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div>
                  <p className="text-sm font-medium text-rose-700 tracking-widest uppercase mb-4">
                    Why Saxenda
                  </p>
                  <h2 className="text-4xl lg:text-5xl font-light text-brown leading-tight">
                    A comprehensive approach to{" "}
                    <span className="font-serif text-rose italic">
                      wellness
                    </span>
                  </h2>
                </div>

                <p className="text-lg text-stone-600 leading-relaxed">
                  Saxenda offers medically-proven weight management combining
                  expert guidance with sustainable results you can maintain
                  long-term.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="p-6 bg-white rounded-2xl border border-stone-100 shadow-sm hover:shadow-md hover:border-stone-200 transition-all"
                    >
                      <div className="w-10 h-10 rounded-lg bg-stone-100 flex items-center justify-center mb-4">
                        <benefit.icon className="w-5 h-5 text-stone-700" />
                      </div>
                      <h3 className="font-medium text-brown mb-1">
                        {benefit.title}
                      </h3>
                      <p className="text-sm text-stone-500">
                        {benefit.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-linear-to-br from-brown to-brown p-10 rounded-3xl text-white">
                  <h3 className="text-2xl font-light mb-8">
                    Expected Timeline
                  </h3>
                  <div className="space-y-6">
                    {[
                      {
                        week: "Week 4-6",
                        result: "Initial weight loss begins",
                        progress: 25,
                      },
                      {
                        week: "Week 12",
                        result: "Visible body changes",
                        progress: 50,
                      },
                      {
                        week: "Week 24",
                        result: "Significant reduction",
                        progress: 75,
                      },
                      {
                        week: "Ongoing",
                        result: "Sustainable results",
                        progress: 100,
                      },
                    ].map((milestone, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-4"
                      >
                        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                          <span className="text-sm font-medium">
                            {index + 1}
                          </span>
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between mb-2">
                            <span className="text-sm font-medium">
                              {milestone.week}
                            </span>
                            <span className="text-sm text-white/60">
                              {milestone.result}
                            </span>
                          </div>
                          <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${milestone.progress}%` }}
                              viewport={{ once: true }}
                              transition={{
                                delay: 0.5 + index * 0.1,
                                duration: 0.8,
                              }}
                              className="h-full bg-linear-to-r from-rose-400 to-rose rounded-full"
                            />
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Decorative */}
                <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full bg-linear-to-br from-rose-100 to-amber-100 rounded-3xl" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 px-4 bg-white">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <p className="text-sm font-medium text-rose-700 tracking-widest uppercase mb-4">
                The Process
              </p>
              <h2 className="text-4xl lg:text-5xl font-light text-brown">
                Your journey to{" "}
                <span className="font-serif italic">wellness</span>
              </h2>
            </motion.div>

            <div className="relative">
              {/* Connection Line */}
              <div className="hidden lg:block absolute top-16 left-0 right-0 h-px bg-linear-to-r from-transparent via-stone-200 to-transparent" />

              <div className="grid md:grid-cols-4 gap-8">
                {howItWorks.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 }}
                    className="relative text-center"
                  >
                    <div className="relative inline-flex items-center justify-center w-16 h-16 bg-brown rounded-full mb-6 shadow-lg shadow-stone-900/20">
                      <span className="text-lg font-light text-white">
                        {item.step}
                      </span>
                    </div>
                    <h3 className="text-xl font-medium text-brown mb-2">
                      {item.title}
                    </h3>
                    <p className="text-stone-500">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 px-4 bg-brown text-white">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <p className="text-sm font-medium text-rose-300 tracking-widest uppercase mb-4">
                Success Stories
              </p>
              <h2 className="text-4xl lg:text-5xl font-light">
                Real <span className="font-serif italic">Transformations</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <p className="text-white/80 mb-8 leading-relaxed">
                    "{item.text}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-linear-to-br from-rose-500 to-amber-500 flex items-center justify-center text-sm font-medium">
                      {item.avatar}
                    </div>
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-white/50">{item.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 px-4 bg-stone-100">
          <div className="container mx-auto max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <p className="text-sm font-medium text-rose-700 tracking-widest uppercase mb-4">
                FAQ
              </p>
              <h2 className="text-4xl lg:text-5xl font-light text-brown">
                Common <span className="font-serif italic">Questions</span>
              </h2>
            </motion.div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-stone-50 transition-colors"
                  >
                    <span className="font-medium text-brown pr-4">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-stone-400 shrink-0 transition-transform duration-300 ${
                        openFaq === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {openFaq === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="px-8 pb-6 text-stone-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24 px-4 bg-white">
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div>
                  <p className="text-sm font-medium text-rose-700 tracking-widest uppercase mb-4">
                    Get in Touch
                  </p>
                  <h2 className="text-4xl lg:text-5xl font-light text-brown leading-tight">
                    Ready to start your{" "}
                    <span className="font-serif italic">transformation?</span>
                  </h2>
                </div>

                <p className="text-lg text-stone-600">
                  Schedule your consultation today and take the first step
                  towards a healthier, more confident you.
                </p>

                <div className="space-y-6">
                  {[
                    {
                      icon: MapPin,
                      title: "Visit Us",
                      lines: [
                        "LG 10, Wisma UOA II, Jalan Pinang",
                        "50450 Kuala Lumpur, Malaysia",
                      ],
                    },
                    {
                      icon: Phone,
                      title: "Call Us",
                      lines: ["016-7025699 / 03-21635699"],
                    },
                    {
                      icon: Clock,
                      title: "Hours",
                      lines: ["Mon - Sat: 9:00 AM - 6:00 PM"],
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="w-12 h-12 rounded-xl bg-stone-100 flex items-center justify-center shrink-0">
                        <item.icon className="w-5 h-5 text-stone-600" />
                      </div>
                      <div>
                        <p className="font-medium text-brown mb-1">
                          {item.title}
                        </p>
                        {item.lines.map((line, i) => (
                          <p key={i} className="text-stone-500">
                            {line}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex gap-4 pt-4">
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href="https://api.leadconnectorhq.com/widget/booking/jcLccLXPVMWo5FAG6cUC"
                    className="inline-flex items-center px-6 py-3 bg-brown text-white rounded-full font-medium hover:bg-brown transition-colors"
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    Book Now
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href="https://api.whatsapp.com/send/?phone=60168245699"
                    className="inline-flex items-center px-6 py-3 bg-stone-100 text-stone-700 rounded-full font-medium hover:bg-stone-200 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp
                  </motion.a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="bg-stone-50 p-10 rounded-3xl">
                  <h3 className="text-2xl font-light text-brown mb-8">
                    Send a Message
                  </h3>
                  <form className="space-y-5">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-5 py-4 bg-white rounded-xl border border-stone-200 focus:outline-none focus:border-stone-400 transition-colors"
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full px-5 py-4 bg-white rounded-xl border border-stone-200 focus:outline-none focus:border-stone-400 transition-colors"
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full px-5 py-4 bg-white rounded-xl border border-stone-200 focus:outline-none focus:border-stone-400 transition-colors"
                    />
                    <textarea
                      rows={4}
                      placeholder="Your Message"
                      className="w-full px-5 py-4 bg-white rounded-xl border border-stone-200 focus:outline-none focus:border-stone-400 transition-colors resize-none"
                    />
                    <button
                      type="submit"
                      className="w-full px-8 py-4 bg-brown text-white rounded-xl font-medium hover:bg-brown transition-colors"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PageSaxendaMalaysia;
