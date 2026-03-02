"use client";

import { motion } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  fadeInLeft,
  fadeInRight,
  scaleIn,
} from "../lib/animations";
import {
  Sparkles,
  Zap,
  Target,
  Clock,
  Users,
  Check,
  ArrowRight,
  Flame,
  Heart,
  Star,
  Activity,
} from "lucide-react";
import BeforeAfterSection from "../components/BeforeAfter";
import FAQ from "../components/FAQ";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] bg-brown overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-wine/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-rose/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 border border-taupe/10 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 border border-taupe/5 rounded-full" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-24 flex flex-col items-center justify-center min-h-[90vh]">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center max-w-4xl"
        >
          <motion.span
            variants={fadeInUp}
            className="inline-block px-4 py-2 bg-wine/30 backdrop-blur-sm rounded-full text-cream/90 text-sm font-inter tracking-widest uppercase mb-6"
          >
            Advanced Body Contouring
          </motion.span>

          <motion.h1
            variants={fadeInUp}
            className="font-georgia text-4xl md:text-6xl lg:text-7xl text-cream leading-tight mb-6"
          >
            Evolve Malaysia
            <span className="block text-rose mt-2">Transform Your Body</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="font-inter text-taupe text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Slim Down, Tighten Up, and Feel Powerful Again with our
            revolutionary RF & EMS transformation technology — no surgery, no
            downtime.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="group px-8 py-4 bg-wine hover:bg-wine/90 text-cream font-inter font-medium rounded-full transition-all duration-300 flex items-center justify-center gap-2">
              Book Your Analysis
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-glass backdrop-blur-md text-cream font-inter font-medium rounded-full border border-cream/20 hover:bg-cream/10 transition-all duration-300">
              Get in Touch
            </button>
          </motion.div>
        </motion.div>

        {/* Stats Counter */}
        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <div className="flex items-center gap-4 px-8 py-4 bg-linear-to-r from-wine to-rose rounded-2xl shadow-2xl">
            <Users className="w-10 h-10 text-cream" />
            <div className="text-left">
              <span className="block text-3xl font-georgia text-cream font-bold">
                455+
              </span>
              <span className="text-cream/80 text-sm font-inter">
                Transformations Completed
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const WhatIsEvolveSection = () => {
  const technologies = [
    { icon: Flame, title: "Evolve Trim", desc: "Targets fat with RF energy" },
    { icon: Target, title: "Evolve Tite", desc: "Firms and tightens skin" },
    { icon: Zap, title: "Evolve Tone", desc: "Stimulates muscles with EMS" },
  ];

  const benefits = [
    "No surgery, needles, or downtime",
    "Adjustable settings for comfort",
    "Safe for all skin types and tones",
    "Hands-free treatment experience",
  ];

  return (
    <section className="py-24 bg-cream">
      <div className="container mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            variants={fadeInUp}
            className="inline-block px-4 py-2 bg-rose/20 rounded-full text-wine text-sm font-inter tracking-widest uppercase mb-4"
          >
            The Technology
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-3xl md:text-5xl text-brown mb-4"
          >
            What is Evolve?
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="font-inter text-taupe max-w-2xl mx-auto"
          >
            A revolutionary 3-in-1 technology that works smarter for complete
            body transformation
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Technology Cards */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                variants={fadeInLeft}
                className="group flex items-start gap-6 p-6 bg-light rounded-2xl hover:shadow-xl transition-all duration-500 border border-taupe/10"
              >
                <div className="p-4 bg-linear-to-br from-wine to-rose rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <tech.icon className="w-8 h-8 text-cream" />
                </div>
                <div>
                  <h3 className="font-georgia text-xl text-brown mb-2">
                    {tech.title}
                  </h3>
                  <p className="font-inter text-taupe">{tech.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right - Benefits */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-8 -right-8 w-64 h-64 bg-rose/10 rounded-full blur-3xl" />
            <div className="relative bg-brown rounded-3xl p-10">
              <h3 className="font-georgia text-2xl text-cream mb-8">
                Safe, Painless & Customised
              </h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-4">
                    <div className="p-1 bg-wine/30 rounded-full">
                      <Check className="w-5 h-5 text-rose" />
                    </div>
                    <span className="font-inter text-cream/90">{benefit}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 pt-8 border-t border-cream/10">
                <p className="font-inter text-taupe text-sm">
                  These modes work hands-free using multiple applicators placed
                  on your treatment areas. You simply lie back while Evolve gets
                  to work.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const WhyChooseSection = () => {
  const benefits = [
    {
      icon: Target,
      title: "Multiple Areas",
      desc: "Treats abdomen, thighs, arms, flanks & buttocks",
    },
    {
      icon: Clock,
      title: "Quick Sessions",
      desc: "30-60 mins — return to work immediately",
    },
    {
      icon: Heart,
      title: "Comfortable",
      desc: "Feels like a heated massage or intense workout",
    },
    {
      icon: Flame,
      title: "Fat Reduction",
      desc: "Effectively reduces stubborn fat deposits",
    },
    {
      icon: Activity,
      title: "Muscle Tone",
      desc: "Builds and defines muscle naturally",
    },
    {
      icon: Sparkles,
      title: "Skin Firming",
      desc: "Firms post-pregnancy or post-weight loss skin",
    },
  ];

  return (
    <section className="py-24 bg-light">
      <div className="container mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            variants={fadeInUp}
            className="inline-block px-4 py-2 bg-brown/10 rounded-full text-brown text-sm font-inter tracking-widest uppercase mb-4"
          >
            Benefits
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-3xl md:text-5xl text-brown mb-4"
          >
            Why Malaysians Choose Evolve
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="font-inter text-taupe max-w-2xl mx-auto"
          >
            Complete body transformation that fits your busy lifestyle
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="group p-8 bg-cream rounded-2xl hover:bg-brown transition-all duration-500 cursor-pointer border border-taupe/10"
            >
              <div className="p-3 bg-rose/20 group-hover:bg-wine/30 rounded-xl w-fit mb-6 transition-colors duration-300">
                <benefit.icon className="w-6 h-6 text-wine group-hover:text-cream transition-colors duration-300" />
              </div>
              <h3 className="font-georgia text-xl text-brown group-hover:text-cream mb-3 transition-colors duration-300">
                {benefit.title}
              </h3>
              <p className="font-inter text-taupe group-hover:text-cream/80 transition-colors duration-300">
                {benefit.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button className="group px-10 py-4 bg-wine hover:bg-brown text-cream font-inter font-medium rounded-full transition-all duration-300 inline-flex items-center gap-3">
            See Real Transformations
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

const IdealCandidatesSection = () => {
  const candidates = [
    "Men & women within 5-15 kg of ideal weight",
    "Those managing Diabetes Weight Management",
    "Post-Duromine or Saxenda patients needing toning",
    "Post-pregnancy body refinement seekers",
    "Anyone wanting non-surgical body sculpting",
  ];

  return (
    <section className="py-24 bg-brown relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-125 h-125 bg-wine/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-100 h-100 bg-rose/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.span
              variants={fadeInUp}
              className="inline-block px-4 py-2 bg-wine/30 backdrop-blur-sm rounded-full text-cream/90 text-sm font-inter tracking-widest uppercase mb-6"
            >
              Ideal For
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="font-georgia text-3xl md:text-5xl text-cream mb-6"
            >
              Who Should Consider Evolve?
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="font-inter text-taupe mb-10"
            >
              Unlike cryolipolysis or suction-based tech, Evolve treats all
              layers — fat, muscle, and skin — without trauma or discomfort.
            </motion.p>

            <motion.ul variants={fadeInUp} className="space-y-4 mb-10">
              {candidates.map((candidate, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="p-1 bg-rose/30 rounded-full mt-1">
                    <Check className="w-4 h-4 text-cream" />
                  </div>
                  <span className="font-inter text-cream/90">{candidate}</span>
                </li>
              ))}
            </motion.ul>

            <motion.div variants={fadeInUp}>
              <button className="group px-8 py-4 bg-cream text-brown font-inter font-medium rounded-full hover:bg-rose hover:text-cream transition-all duration-300 inline-flex items-center gap-2">
                Schedule Consultation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square bg-linear-to-br from-wine/40 to-rose/40 rounded-3xl p-1">
              <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=800&q=80')] rounded-3xl flex items-center justify-center"></div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 p-4 bg-cream rounded-2xl shadow-xl">
              <Star className="w-8 h-8 text-wine" />
            </div>
            <div className="absolute -bottom-6 -left-6 p-4 bg-rose rounded-2xl shadow-xl">
              <Heart className="w-8 h-8 text-cream" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const TreatmentJourneySection = () => {
  const steps = [
    {
      num: "01",
      title: "Consultation",
      desc: "Body composition scan and personalized assessment",
    },
    {
      num: "02",
      title: "Preparation",
      desc: "Applicators attached — no gel or incisions needed",
    },
    {
      num: "03",
      title: "Treatment",
      desc: "Gentle heating or rhythmic muscle stimulation",
    },
    {
      num: "04",
      title: "Results",
      desc: "Resume your day right after — no recovery needed",
    },
  ];

  return (
    <section className="py-24 bg-cream">
      <div className="container mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            variants={fadeInUp}
            className="inline-block px-4 py-2 bg-wine/10 rounded-full text-wine text-sm font-inter tracking-widest uppercase mb-4"
          >
            Your Journey
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-3xl md:text-5xl text-brown mb-4"
          >
            What to Expect During Treatment
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="font-inter text-taupe max-w-2xl mx-auto"
          >
            Available in KL, JB & Penang clinics
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {steps.map((step, index) => (
            <motion.div key={index} variants={fadeInUp} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-linear-to-r from-wine to-transparent z-0" />
              )}
              <div className="relative bg-light rounded-2xl p-8 border border-taupe/10 hover:border-wine/30 transition-all duration-300">
                <span className="font-georgia text-5xl text-wine/20 absolute top-4 right-4">
                  {step.num}
                </span>
                <div className="relative z-10">
                  <h3 className="font-georgia text-xl text-brown mb-3">
                    {step.title}
                  </h3>
                  <p className="font-inter text-taupe text-sm">{step.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Sessions Info */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-2 gap-8"
        >
          <div className="bg-brown rounded-2xl p-8">
            <h4 className="font-georgia text-xl text-cream mb-4">
              How Many Sessions?
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-cream/80 font-inter">
                <Check className="w-5 h-5 text-rose" />
                3-6 sessions spaced weekly
              </li>
              <li className="flex items-center gap-3 text-cream/80 font-inter">
                <Check className="w-5 h-5 text-rose" />
                Maintenance every 3-6 months
              </li>
            </ul>
          </div>
          <div className="bg-linear-to-br from-wine to-rose rounded-2xl p-8">
            <h4 className="font-georgia text-xl text-cream mb-4">
              When Will You See Results?
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-cream/90 font-inter">
                <Clock className="w-5 h-5 text-cream" />
                1-2 weeks: initial tone
              </li>
              <li className="flex items-center gap-3 text-cream/90 font-inter">
                <Sparkles className="w-5 h-5 text-cream" />
                8-12 weeks: visible contouring
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ComparisonSection = () => {
  const treatments = [
    {
      name: "Evolve",
      energy: "RF + EMS",
      focus: "Fat, muscle & skin",
      ideal: "All-in-one sculpting",
      highlight: true,
    },
    {
      name: "CoolSculpting®",
      energy: "Cryolipolysis",
      focus: "Fat freezing",
      ideal: "Localised fat bulges",
      highlight: false,
    },
    {
      name: "TruSculpt",
      energy: "Monopolar RF",
      focus: "Fat + skin",
      ideal: "Precision reshaping",
      highlight: false,
    },
    {
      name: "Emsculpt",
      energy: "EMS",
      focus: "Muscle toning",
      ideal: "Abs, glutes, arms",
      highlight: false,
    },
    {
      name: "Venus Legacy",
      energy: "RF + Massage",
      focus: "Cellulite",
      ideal: "Skin texture",
      highlight: false,
    },
  ];

  return (
    <section className="py-24 bg-light">
      <div className="container mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            variants={fadeInUp}
            className="inline-block px-4 py-2 bg-brown/10 rounded-full text-brown text-sm font-inter tracking-widest uppercase mb-4"
          >
            Comparison
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-3xl md:text-5xl text-brown mb-4"
          >
            Evolve vs Other Treatments
          </motion.h2>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="overflow-x-auto"
        >
          <table className="w-full min-w-150">
            <thead>
              <tr className="border-b-2 border-taupe/20">
                <th className="text-left py-4 px-6 font-georgia text-brown">
                  Treatment
                </th>
                <th className="text-left py-4 px-6 font-georgia text-brown">
                  Energy Type
                </th>
                <th className="text-left py-4 px-6 font-georgia text-brown">
                  Focus
                </th>
                <th className="text-left py-4 px-6 font-georgia text-brown">
                  Ideal For
                </th>
              </tr>
            </thead>
            <tbody>
              {treatments.map((treatment, index) => (
                <tr
                  key={index}
                  className={`border-b border-taupe/10 ${
                    treatment.highlight
                      ? "bg-linear-to-r from-wine to-rose text-cream"
                      : "bg-cream hover:bg-taupe/10"
                  } transition-colors duration-300`}
                >
                  <td
                    className={`py-5 px-6 font-inter font-medium ${treatment.highlight ? "text-cream" : "text-brown"}`}
                  >
                    {treatment.name}
                  </td>
                  <td
                    className={`py-5 px-6 font-inter ${treatment.highlight ? "text-cream/90" : "text-taupe"}`}
                  >
                    {treatment.energy}
                  </td>
                  <td
                    className={`py-5 px-6 font-inter ${treatment.highlight ? "text-cream/90" : "text-taupe"}`}
                  >
                    {treatment.focus}
                  </td>
                  <td
                    className={`py-5 px-6 font-inter ${treatment.highlight ? "text-cream/90" : "text-taupe"}`}
                  >
                    {treatment.ideal}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center font-inter text-taupe mt-8"
        >
          Evolve's <span className="text-wine font-medium">unique edge</span> is
          delivering fat reduction, toning and tightening — together.
        </motion.p>
      </div>
    </section>
  );
};

const PricingSection = () => {
  const locations = ["Bangsar", "KLCC", "Mont Kiara", "Penang", "Johor Bahru"];

  return (
    <section className="py-24 bg-cream">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.span
              variants={fadeInUp}
              className="inline-block px-4 py-2 bg-wine/10 rounded-full text-wine text-sm font-inter tracking-widest uppercase mb-6"
            >
              Investment
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="font-georgia text-3xl md:text-5xl text-brown mb-6"
            >
              Transparent Pricing
            </motion.h2>

            <motion.div variants={fadeInUp} className="space-y-6 mb-10">
              <div className="flex items-center justify-between p-6 bg-light rounded-2xl border border-taupe/10">
                <div>
                  <span className="block font-georgia text-lg text-brown">
                    Per Session
                  </span>
                  <span className="font-inter text-taupe text-sm">
                    Per body area
                  </span>
                </div>
                <span className="font-georgia text-2xl text-wine">
                  RM 1,200 - 1,800
                </span>
              </div>
              <div className="flex items-center justify-between p-6 bg-brown rounded-2xl">
                <div>
                  <span className="block font-georgia text-lg text-cream">
                    Package (3-6 sessions)
                  </span>
                  <span className="font-inter text-cream/70 text-sm">
                    Discounted rates
                  </span>
                </div>
                <span className="font-georgia text-2xl text-rose">
                  Save 15-20%
                </span>
              </div>
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="font-inter text-taupe text-sm"
            >
              Ensure the clinic uses authentic Evolve systems and offers a
              personalized treatment plan.
            </motion.p>
          </motion.div>

          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-linear-to-br from-brown to-wine rounded-3xl p-10"
          >
            <h3 className="font-georgia text-2xl text-cream mb-8">
              Available Locations
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {locations.map((location, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-cream/10 backdrop-blur-sm rounded-xl"
                >
                  <div className="w-2 h-2 bg-rose rounded-full" />
                  <span className="font-inter text-cream">{location}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-cream/20">
              <button className="w-full py-4 bg-cream text-brown font-inter font-medium rounded-full hover:bg-rose hover:text-cream transition-all duration-300">
                Find Nearest Clinic
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const faqs = [
  {
    q: "Is Evolve painful?",
    a: "No. You'll feel warmth or gentle muscle tightening but no discomfort.",
  },
  {
    q: "How does Evolve differ from Emsculpt?",
    a: "Evolve combines fat reduction + skin tightening + EMS toning, while Emsculpt only tones muscles.",
  },
  {
    q: "Can Evolve help after pregnancy?",
    a: "Yes. It's excellent for toning abdominal muscles and tightening skin.",
  },
  {
    q: "Are results long-term?",
    a: "Yes, with healthy lifestyle habits. Maintenance every 6 months is ideal.",
  },
  {
    q: "Can I treat multiple areas?",
    a: "Yes. Abdomen, thighs, arms, and buttocks can be treated in the same session.",
  },
  {
    q: "How fast are results visible?",
    a: "Mild improvements in 1-2 weeks; best results at 8-12 weeks.",
  },
  {
    q: "Can I combine it with Saxenda or Ozempic?",
    a: "Absolutely. It complements GLP-1 treatments beautifully.",
  },
  {
    q: "Any side effects to expect?",
    a: "Mild warmth or redness that fades quickly. No downtime.",
  },
];

const PageBodyContouring = () => {
  return (
    <>
      <main className="overflow-hidden">
        <HeroSection />
        <WhatIsEvolveSection />
        <BeforeAfterSection />
        <WhyChooseSection />
        <IdealCandidatesSection />
        <TreatmentJourneySection />
        <ComparisonSection />
        <PricingSection />
        <FAQ data={faqs} />
      </main>
    </>
  );
};

export default PageBodyContouring;
