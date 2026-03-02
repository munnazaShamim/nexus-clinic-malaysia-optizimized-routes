"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Users,
  Check,
  Star,
  ChevronDown,
  Clock,
  Sparkles,
  Heart,
  Zap,
  Shield,
  ArrowRight,
  Quote,
} from "lucide-react";
import {
  fadeInUp,
  staggerContainer,
  fadeInLeft,
  fadeInRight,
  scaleIn,
} from "../lib/animations";
import { ContactSection } from "../components/ContactUs";
import FAQ from "../components/FAQ";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-linear-to-br from-brown via-wine to-rose">
      <div className="absolute inset-0 overflow-hidden bg-[url('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80')] bg-cover">
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-cream/10 blur-3xl"
          animate="hidden"
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-taupe/20 blur-3xl"
          animate="hidden"
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeInUp} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-glass backdrop-blur-sm text-brown text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              Trusted by 662+ Happy Clients
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-6xl lg:text-7xl font-georgia font-bold text-cream leading-tight mb-6"
          >
            Experience A Smooth
            <span className="block text-taupe">Weight Loss Journey</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-cream/80 max-w-2xl mx-auto mb-10 font-inter"
          >
            Transform your body with our medically supervised HCG Weight Loss
            Program. Safe, effective, and tailored to your unique needs.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-cream text-brown rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-shadow flex items-center justify-center gap-2 group"
            >
              Book Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-cream/50 text-cream rounded-full font-semibold text-lg hover:bg-cream/10 transition-colors"
            >
              Learn More
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-8 h-8 text-cream/60" />
      </motion.div>
    </section>
  );
};

const StatsSection = () => {
  const stats = [
    { icon: Users, value: "662", suffix: "+", label: "Happy Clients" },
    { icon: Star, value: "4.9", suffix: "", label: "Average Rating" },
    { icon: Clock, value: "20", suffix: "+", label: "Years Experience" },
    { icon: Shield, value: "100", suffix: "%", label: "Safe & Natural" },
  ];

  return (
    <section className="py-20 bg-light relative -mt-20">
      <div className="container mx-auto px-6">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              className="bg-glass backdrop-blur-sm rounded-3xl p-6 text-center shadow-lg border border-taupe/10 hover:shadow-xl transition-shadow"
            >
              <stat.icon className="w-8 h-8 text-wine mx-auto mb-4" />
              <div className="text-3xl md:text-4xl font-georgia font-bold text-brown mb-2">
                {stat.value}
                {stat.suffix}
              </div>
              <div className="text-taupe font-inter text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const AboutSection = () => {
  const benefits = [
    {
      icon: Zap,
      title: "Fast Results",
      desc: "Visible changes within one week",
    },
    {
      icon: Heart,
      title: "Preserve Muscle",
      desc: "Burns fat while keeping muscle mass",
    },
    { icon: Shield, title: "100% Safe", desc: "Medically supervised program" },
  ];

  return (
    <section className="py-24 bg-cream">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="text-wine font-medium tracking-wider uppercase text-sm">
              About The Program
            </span>
            <h2 className="text-4xl md:text-5xl font-georgia font-bold text-brown mt-4 mb-6">
              What Is The <span className="text-wine">HCG Diet?</span>
            </h2>
            <div className="space-y-4 text-taupe leading-relaxed font-inter">
              <p>
                The HCG weight loss program helps individuals manage their
                weight and provides long-term strategies for maintaining a
                healthy lifestyle.
              </p>
              <p>
                Unlike most diets, HCG allows the body to use fat storage as
                fuel while preserving muscle mass, minimizing hunger and mood
                swings.
              </p>
            </div>

            <div className="mt-10 space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-light hover:shadow-md transition-shadow"
                  whileHover={{ x: 5 }}
                >
                  <div className="p-3 rounded-xl bg-wine/10">
                    <benefit.icon className="w-6 h-6 text-wine" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-brown">
                      {benefit.title}
                    </h4>
                    <p className="text-taupe text-sm">{benefit.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80"
                alt="Wellness consultation"
                className="w-full h-125 object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-brown/40 to-transparent" />
            </div>

            {/* Floating Card */}
            <motion.div
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl"
              variants={scaleIn}
              animate="animate"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-wine/10">
                  <Check className="w-6 h-6 text-wine" />
                </div>
                <div>
                  <div className="font-bold text-brown text-xl">15+ kg</div>
                  <div className="text-taupe text-sm">Average Weight Loss</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const PricingSection = () => {
  const plans = [
    {
      name: "10 Day Trial",
      price: "RM 888",
      desc: "Perfect for trying the HCG program",
      features: [
        "Initial consultation",
        "HCG supplies",
        "Diet guidance",
        "Progress tracking",
      ],
      popular: false,
    },
    {
      name: "30 Day Package",
      price: "RM 3,600",
      desc: "Comprehensive weight loss program",
      features: [
        "Full consultation",
        "Complete HCG supplies",
        "Personalized diet plan",
        "Weekly check-ins",
        "Metabolism reset",
        "24/7 Support",
      ],
      popular: true,
    },
  ];

  return (
    <section className="py-24 bg-linear-to-b from-light to-cream">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <span className="text-wine font-medium tracking-wider uppercase text-sm">
            Pricing Plans
          </span>
          <h2 className="text-4xl md:text-5xl font-georgia font-bold text-brown mt-4">
            Choose Your <span className="text-wine">Journey</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className={`relative rounded-3xl p-8 ${
                plan.popular
                  ? "bg-wine text-cream shadow-2xl scale-105"
                  : "bg-white text-brown shadow-xl"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-rose rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}

              <h3 className="text-2xl font-georgia font-bold mb-2">
                {plan.name}
              </h3>
              <p className={plan.popular ? "text-cream/70" : "text-taupe"}>
                {plan.desc}
              </p>

              <div className="my-8">
                <span className="text-5xl font-georgia font-bold">
                  {plan.price}
                </span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check
                      className={`w-5 h-5 ${plan.popular ? "text-cream" : "text-wine"}`}
                    />
                    <span
                      className={plan.popular ? "text-cream/90" : "text-taupe"}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-4 rounded-full font-semibold transition-colors ${
                  plan.popular
                    ? "bg-cream text-wine hover:bg-light"
                    : "bg-wine text-cream hover:bg-brown"
                }`}
              >
                Get Started
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialsSection = () => {
  const [active, setActive] = useState(0);

  const testimonials = [
    {
      name: "Aisyah Lim",
      text: "My journey to lose weight with Nexus's team is totally satisfying and happy. I highly recommend their HCG weight loss program in Malaysia.",
      rating: 5,
    },
    {
      name: "Kumar Nathan",
      text: "The HCG program has been life-changing. I feel healthier and more energetic than ever before.",
      rating: 5,
    },
    {
      name: "Li Wei Tan",
      text: "The HCG weight loss program is highly effective for people like me who wasted years trying to lose weight. This program is very helpful.",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 bg-brown/80 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage:
              "radial-linear(circle, #F3EFEE 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <span className="text-rose font-medium tracking-wider uppercase text-sm">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-georgia font-bold text-cream mt-4">
            What Our <span className="text-taupe">Clients Say</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-glass backdrop-blur-sm rounded-3xl p-8 md:p-12 text-center"
          >
            <Quote className="w-12 h-12 text-wine mx-auto mb-6 opacity-50" />
            <p className="text-xl md:text-2xl text-brown font-georgia italic mb-8 leading-relaxed">
              "{testimonials[active].text}"
            </p>

            <div className="flex justify-center gap-1 mb-4">
              {[...Array(testimonials[active].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-wine fill-wine" />
              ))}
            </div>

            <div className="font-semibold text-brown">
              {testimonials[active].name}
            </div>
          </motion.div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActive(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  active === index
                    ? "bg-cream w-8"
                    : "bg-cream/30 hover:bg-cream/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const faqs = [
  {
    q: "How much time does it take to visible results?",
    a: "You can expect to see a reduction in body weight within just one week of starting the program.",
  },
  {
    q: "Is it safe to use the HCG Weight Loss Program?",
    a: "Yes, because it follows the natural diet program, ensuring safety and effectiveness under medical supervision.",
  },
  {
    q: "What is the HCG Diet?",
    a: "The HCG diet involves daily injections of human chorionic gonadotropin along with a carefully managed calorie intake.",
  },
  {
    q: "Does the treatment cause pain?",
    a: "No, there is no significant pain. Some patients may feel mild discomfort during injections.",
  },
  {
    q: "How long will the results last?",
    a: "Results can last for years if you continue following the doctor's recommendations and maintain a healthy lifestyle.",
  },
];

const PageHCGMalaysia = () => {
  return (
    <div className="font-inter bg-cream overflow-x-hidden">
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <PricingSection />
      <TestimonialsSection />
      <FAQ data={faqs} />
      <ContactSection />
    </div>
  );
};

export default PageHCGMalaysia;
