"use client";
import { motion } from "framer-motion";
import {
  Snowflake,
  Clock,
  Shield,
  Sparkles,
  CheckCircle2,
  Target,
  Heart,
  ChevronDown,
  Star,
  Users,
  Award,
} from "lucide-react";
import {
  fadeInUp,
  staggerContainer,
  fadeInLeft,
  fadeInRight,
  scaleIn,
  containerVariants,
  rowVariants,
} from "../lib/animations";
import FAQ from "../components/FAQ";
import BeforeAfterSection from "../components/BeforeAfter";

const PageFatFreezingMalaysia = () => {
  const treatmentAreas = [
    { name: "Abdomen", icon: Target },
    { name: "Thighs", icon: Target },
    { name: "Love Handles", icon: Target },
    { name: "Arms", icon: Target },
    { name: "Double Chin", icon: Target },
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Non-Invasive",
      desc: "No surgery or needles required",
    },
    {
      icon: Clock,
      title: "Zero Downtime",
      desc: "Return to daily activities immediately",
    },
    {
      icon: Sparkles,
      title: "Natural Results",
      desc: "Gradual, natural-looking fat reduction",
    },
    {
      icon: Heart,
      title: "Safe & Proven",
      desc: "Clinically tested technology",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Consultation",
      desc: "Body analysis and personalized treatment plan",
    },
    {
      step: "02",
      title: "Preparation",
      desc: "Application of protective cooling gel pad",
    },
    {
      step: "03",
      title: "Treatment",
      desc: "40-60 minute session with Clatuu handpiece",
    },
    {
      step: "04",
      title: "Results",
      desc: "Visible fat reduction in 8-12 weeks",
    },
  ];

  const faqs = [
    {
      q: "Does Clatuu really work?",
      a: "Yes, Clatuu is clinically proven for targeted fat reduction with visible results in weeks.",
    },
    {
      q: "Is the treatment painful?",
      a: "Most patients report only mild numbness or pulling sensation during the procedure.",
    },
    {
      q: "How many sessions are needed?",
      a: "Typically 1-2 sessions per area, spaced 6-8 weeks apart for optimal results.",
    },
    {
      q: "Is there any downtime?",
      a: "No downtime required. You can return to work or gym the same day.",
    },
    {
      q: "How long do results last?",
      a: "Fat cells removed by Clatuu are permanently eliminated, but maintaining a healthy lifestyle is important.",
    },
  ];

  const treatments = [
    {
      treatment: "Clatuu",
      technology: "Cryolipolysis",
      frequency: "Every 6-8 weeks",
      bestFor: "Spot fat reduction",
    },
    {
      treatment: "CoolSculpting®",
      technology: "Cryolipolysis",
      frequency: "Every 6-8 weeks",
      bestFor: "Branded alternative",
    },
    {
      treatment: "Emsculpt",
      technology: "EMS",
      frequency: "Weekly",
      bestFor: "Fat burning & muscle toning",
    },
    {
      treatment: "Vanquish ME",
      technology: "Radiofrequency",
      frequency: "Weekly",
      bestFor: "Large-area fat loss",
    },
    {
      treatment: "TruSculpt",
      technology: "RF or RF+Heat",
      frequency: "Bi-weekly",
      bestFor: "All body types",
    },
    {
      treatment: "Evolve",
      technology: "RF + EMS",
      frequency: "Weekly",
      bestFor: "Fat burning & firming",
    },
    {
      treatment: "Venus Legacy",
      technology: "RF & Massage",
      frequency: "Weekly",
      bestFor: "Cellulite and tightening",
    },
    {
      treatment: "Exilis",
      technology: "RF + Ultrasound",
      frequency: "Weekly",
      bestFor: "Skin tightening & fat pockets",
    },
  ];

  return (
    <>
      <div className="bg-cream min-h-screen font-inter overflow-hidden">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center px-4 py-20">
          {/* Background decorative elements */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute top-20 right-10 w-72 h-72 bg-rose/10 rounded-full blur-3xl"
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 8, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-20 left-10 w-96 h-96 bg-wine/10 rounded-full blur-3xl"
              animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 10, repeat: Infinity }}
            />
          </div>

          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              className="text-center"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {/* Badge */}
              <motion.div
                variants={fadeInUp}
                className="inline-flex items-center gap-2 bg-glass backdrop-blur-sm px-5 py-2 rounded-full border border-taupe/20 mb-8"
              >
                <Snowflake className="w-4 h-4 text-wine" />
                <span className="text-brown text-sm font-medium tracking-wide">
                  Advanced Cryolipolysis Technology
                </span>
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                variants={fadeInUp}
                className="font-georgia text-4xl md:text-6xl lg:text-7xl text-brown leading-tight mb-6"
              >
                Sculpt Your Body
                <br />
                <span className="text-wine">Without Surgery</span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-taupe text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
              >
                Experience the revolutionary Clatuu fat freezing treatment.
                Target stubborn fat with precision cooling technology for a
                naturally contoured silhouette.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-wine text-light px-8 py-4 rounded-full font-medium tracking-wide shadow-lg shadow-wine/25 hover:bg-wine/90 transition-colors"
                >
                  Book Consultation
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-glass backdrop-blur-sm text-brown px-8 py-4 rounded-full font-medium tracking-wide border border-taupe/30 hover:bg-light transition-colors"
                >
                  Learn More
                </motion.button>
              </motion.div>

              {/* Stats */}
              <motion.div
                variants={fadeInUp}
                className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto"
              >
                {[
                  { value: "1000+", label: "Happy Clients" },
                  { value: "25%", label: "Fat Reduction" },
                  { value: "0", label: "Downtime" },
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="font-georgia text-3xl md:text-4xl text-wine mb-1">
                      {stat.value}
                    </div>
                    <div className="text-taupe text-sm">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="w-6 h-6 text-taupe" />
          </motion.div>
        </section>

        {/* What is Clatuu Section */}
        <section className="py-20 px-4 bg-light">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="grid lg:grid-cols-2 gap-16 items-center"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div variants={fadeInLeft}>
                <span className="text-wine font-medium tracking-widest text-sm uppercase mb-4 block">
                  The Science
                </span>
                <h2 className="font-georgia text-3xl md:text-5xl text-brown mb-6 leading-tight">
                  What is <span className="text-wine">Cryolipolysis?</span>
                </h2>
                <p className="text-taupe leading-relaxed mb-6">
                  Clatuu works by precisely freezing fat cells without damaging
                  surrounding tissues. This controlled cooling triggers fat cell
                  apoptosis (natural cell death), which your body then naturally
                  eliminates over time.
                </p>
                <p className="text-taupe leading-relaxed mb-8">
                  The result? A slimmer, more contoured you — without surgery,
                  needles, or downtime.
                </p>

                <div className="flex items-center gap-4">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-10 h-10 rounded-full bg-taupe/30 border-2 border-light"
                      />
                    ))}
                  </div>
                  <div>
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="w-4 h-4 fill-wine text-wine" />
                      ))}
                    </div>
                    <span className="text-sm text-taupe">
                      Trusted by 1000+ clients
                    </span>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeInRight} className="relative">
                <div className="relative aspect-square max-w-md mx-auto">
                  {/* Decorative ring */}
                  <motion.div
                    className="absolute inset-0 border-2 border-dashed border-wine/20 rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 30,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />

                  {/* Main circle */}
                  <div className="absolute inset-8 bg-[url('/images/cryolipolysis.png')] rounded-full flex items-center justify-center">
                    <motion.div
                      variants={scaleIn}
                      animate="animate"
                      className="overflow-hidden"
                    ></motion.div>
                  </div>

                  {/* Floating badges */}
                  {[
                    {
                      icon: Shield,
                      label: "FDA Cleared",
                      pos: "top-0 right-8",
                    },
                    {
                      icon: Award,
                      label: "Award Winning",
                      pos: "bottom-8 right-0",
                    },
                    {
                      icon: Users,
                      label: "Expert Team",
                      pos: "bottom-0 left-8",
                    },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      className={`absolute ${item.pos} bg-light p-3 rounded-2xl shadow-lg shadow-brown/10`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.2 }}
                      viewport={{ once: true }}
                    >
                      <item.icon className="w-6 h-6 text-wine mb-1" />
                      <span className="text-xs text-brown font-medium">
                        {item.label}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Treatment Areas */}
        <section className="py-20 px-4 bg-cream">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-16"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.span
                variants={fadeInUp}
                className="text-wine font-medium tracking-widest text-sm uppercase mb-4 block"
              >
                Target Areas
              </motion.span>
              <motion.h2
                variants={fadeInUp}
                className="font-georgia text-3xl md:text-5xl text-brown mb-4"
              >
                Areas We Can Treat
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-taupe max-w-xl mx-auto"
              >
                Clatuu precisely targets stubborn fat deposits in multiple body
                areas
              </motion.p>
            </motion.div>

            <motion.div
              className="grid grid-cols-2 md:grid-cols-5 gap-4"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {treatmentAreas.map((area, i) => (
                <motion.div
                  key={i}
                  variants={scaleIn}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="bg-light p-6 rounded-3xl text-center group cursor-pointer border border-transparent hover:border-wine/20 transition-all duration-300"
                >
                  <div className="w-14 h-14 mx-auto mb-4 bg-wine/10 rounded-2xl flex items-center justify-center group-hover:bg-wine/20 transition-colors">
                    <area.icon className="w-6 h-6 text-wine" />
                  </div>
                  <h3 className="text-brown font-medium">{area.name}</h3>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 px-4 bg-brown text-light">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-16"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.span
                variants={fadeInUp}
                className="text-rose font-medium tracking-widest text-sm uppercase mb-4 block"
              >
                The Process
              </motion.span>
              <motion.h2
                variants={fadeInUp}
                className="font-georgia text-3xl md:text-5xl mb-4"
              >
                Your Journey to a <span className="text-rose">New You</span>
              </motion.h2>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-4 gap-6"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {processSteps.map((step, i) => (
                <motion.div key={i} variants={fadeInUp} className="relative">
                  {i < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-12 left-1/2 w-full h-px bg-linear-to-r from-wine/50 to-transparent" />
                  )}
                  <div className="bg-brown/50 backdrop-blur-sm p-8 rounded-3xl border border-light/10 hover:border-wine/30 transition-colors relative z-10">
                    <span className="font-georgia text-5xl text-wine/30">
                      {step.step}
                    </span>
                    <h3 className="font-georgia text-xl mt-4 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-light/70 text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 px-4 bg-light">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="grid lg:grid-cols-2 gap-16 items-center"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div variants={fadeInLeft}>
                <span className="text-wine font-medium tracking-widest text-sm uppercase mb-4 block">
                  Why Choose Us
                </span>
                <h2 className="font-georgia text-3xl md:text-5xl text-brown mb-6 leading-tight">
                  Benefits of <span className="text-wine">Clatuu</span>{" "}
                  Treatment
                </h2>
                <p className="text-taupe leading-relaxed mb-8">
                  Experience the gold standard in non-surgical body contouring
                  with proven results and exceptional patient care.
                </p>

                <div className="space-y-4">
                  {[
                    "Completely non-invasive procedure",
                    "No surgery, needles, or anesthesia",
                    "Targets fat without harming skin",
                    "Noticeable results in 8-12 weeks",
                    "Long-lasting fat cell elimination",
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <CheckCircle2 className="w-5 h-5 text-wine shrink-0" />
                      <span className="text-brown">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                className="grid grid-cols-2 gap-4"
              >
                {benefits.map((benefit, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -4 }}
                    className={`p-6 rounded-3xl ${i % 2 === 0 ? "bg-cream" : "bg-wine/5"}`}
                  >
                    <div className="w-12 h-12 bg-wine/10 rounded-2xl flex items-center justify-center mb-4">
                      <benefit.icon className="w-6 h-6 text-wine" />
                    </div>
                    <h3 className="font-georgia text-lg text-brown mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-taupe text-sm">{benefit.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Before & After */}
        <BeforeAfterSection />

        {/* Comparison */}
        <section className="py-16 px-4 bg-cream">
          <div className="max-w-6xl mx-auto">
            <motion.h3
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-brown font-georgia mb-8 text-center"
            >
              Comparison with Other Technologies
            </motion.h3>

            <motion.div
              className="overflow-x-auto rounded-xl shadow-lg"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              <table className="w-full min-w-150">
                {/* Header */}
                <thead>
                  <tr className="bg-wine text-light">
                    <th className="px-6 py-4 text-left font-inter font-semibold">
                      Treatment
                    </th>
                    <th className="px-6 py-4 text-left font-inter font-semibold">
                      Technology
                    </th>
                    <th className="px-6 py-4 text-left font-inter font-semibold">
                      Frequency
                    </th>
                    <th className="px-6 py-4 text-left font-inter font-semibold">
                      Best For
                    </th>
                  </tr>
                </thead>

                {/* Body */}
                <tbody>
                  {treatments.map((item, index) => (
                    <motion.tr
                      key={index}
                      variants={rowVariants}
                      className={`
                  ${index % 2 === 0 ? "bg-light" : "bg-cream"}
                  hover:bg-taupe/20 transition-colors duration-200
                  border-b border-taupe/20
                `}
                    >
                      <td className="px-6 py-4 font-inter font-medium text-brown">
                        {item.treatment}
                      </td>
                      <td className="px-6 py-4 font-inter text-brown/80">
                        {item.technology}
                      </td>
                      <td className="px-6 py-4 font-inter text-brown/80">
                        {item.frequency}
                      </td>
                      <td className="px-6 py-4 font-inter text-rose font-medium">
                        {item.bestFor}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </motion.div>

            {/* Mobile Cards (visible on small screens) */}
            <motion.div
              className="md:hidden space-y-4 mt-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              {treatments.map((item, index) => (
                <motion.div
                  key={index}
                  variants={rowVariants}
                  className="bg-light rounded-lg p-4 shadow-md border-l-4 border-wine"
                >
                  <h4 className="font-inter font-bold text-brown text-lg mb-2">
                    {item.treatment}
                  </h4>
                  <div className="space-y-1 text-sm">
                    <p>
                      <span className="text-taupe">Technology:</span>{" "}
                      <span className="text-brown/80">{item.technology}</span>
                    </p>
                    <p>
                      <span className="text-taupe">Frequency:</span>{" "}
                      <span className="text-brown/80">{item.frequency}</span>
                    </p>
                    <p>
                      <span className="text-taupe">Best For:</span>{" "}
                      <span className="text-rose font-medium">
                        {item.bestFor}
                      </span>
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-20 px-4 bg-light">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-16"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.span
                variants={fadeInUp}
                className="text-wine font-medium tracking-widest text-sm uppercase mb-4 block"
              >
                Investment
              </motion.span>
              <motion.h2
                variants={fadeInUp}
                className="font-georgia text-3xl md:text-5xl text-brown mb-4"
              >
                Treatment Pricing
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-taupe max-w-xl mx-auto"
              >
                Transparent pricing for your body transformation journey
              </motion.p>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-2 gap-6"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                {
                  name: "Clatuu Treatment",
                  price: "RM 900 - 1,600",
                  unit: "per area/session",
                  features: [
                    "40-60 min session",
                    "No downtime",
                    "Visible results",
                    "Professional care",
                  ],
                  popular: true,
                },
                {
                  name: "CoolSculpting®",
                  price: "RM 2,500",
                  unit: "per applicator",
                  features: [
                    "Premium brand",
                    "FDA cleared",
                    "Precision cooling",
                    "Expert consultation",
                  ],
                  popular: false,
                },
              ].map((plan, i) => (
                <motion.div
                  key={i}
                  variants={scaleIn}
                  whileHover={{ y: -8 }}
                  className={`relative p-8 rounded-3xl ${plan.popular ? "bg-wine text-light" : "bg-light text-brown"}`}
                >
                  {plan.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-rose text-light text-xs px-4 py-1 rounded-full">
                      Most Popular
                    </span>
                  )}
                  <h3 className="font-georgia text-2xl mb-2">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="font-georgia text-4xl">{plan.price}</span>
                    <span
                      className={`text-sm ${plan.popular ? "text-light/70" : "text-taupe"}`}
                    >
                      {" "}
                      {plan.unit}
                    </span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-2">
                        <CheckCircle2
                          className={`w-4 h-4 ${plan.popular ? "text-rose" : "text-wine"}`}
                        />
                        <span
                          className={`text-sm ${plan.popular ? "text-light/90" : "text-brown"}`}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-3 rounded-full font-medium transition-colors ${
                      plan.popular
                        ? "bg-light text-wine hover:bg-cream"
                        : "bg-wine text-light hover:bg-wine/90"
                    }`}
                  >
                    Book Now
                  </motion.button>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* FAQ */}
        <FAQ data={faqs} />

        {/* CTA Section */}
        <section className="py-20 px-4 bg-linear-to-br from-wine to-brown">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h2
                variants={fadeInUp}
                className="font-georgia text-3xl md:text-5xl text-light mb-6"
              >
                Ready to Transform <span className="text-rose">Your Body?</span>
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-light/80 text-lg mb-10 max-w-xl mx-auto"
              >
                Book your consultation today and take the first step towards a
                more confident, sculpted you.
              </motion.p>
              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-light text-wine px-8 py-4 rounded-full font-medium shadow-lg hover:bg-cream transition-colors"
                >
                  Schedule Consultation
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-transparent text-light px-8 py-4 rounded-full font-medium border border-light/30 hover:bg-light/10 transition-colors"
                >
                  Chat on WhatsApp
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PageFatFreezingMalaysia;
