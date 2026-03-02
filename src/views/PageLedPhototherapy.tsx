"use client";
import { motion } from "framer-motion";
import {
  Sparkles,
  Users,
  CheckCircle,
  Zap,
  Heart,
  Clock,
  Shield,
  Star,
  ChevronDown,
  Droplets,
  Sun,
  Leaf,
} from "lucide-react";
import {
  fadeInUp,
  staggerContainer,
  fadeInLeft,
  fadeInRight,
  scaleIn,
} from "../lib/animations";
import BeforeAfterFaceSection from "../components/BeforeAfterFace";
import FAQ from "../components/FAQ";

const PageLEDPhototherapy = () => {
  const benefits = [
    {
      icon: Zap,
      title: "Treat Acne",
      desc: "Blue light kills acne-causing bacteria for clearer skin",
    },
    {
      icon: Heart,
      title: "Easy Inflammation",
      desc: "Red light eases irritation, redness, and inflammation",
    },
    {
      icon: Clock,
      title: "Fight Aging",
      desc: "Stimulates collagen production for improved elasticity",
    },
    {
      icon: Shield,
      title: "Tighten Skin",
      desc: "Reduces fine lines and wrinkles for smoother skin",
    },
  ];

  const causes = [
    "Stress & hormonal imbalance",
    "Genetic predisposition",
    "Poor diet & nutrition",
    "Environmental factors",
    "Expired skincare products",
    "Humidity & pollutants",
  ];

  const testimonials = [
    {
      name: "Aisha Binti Rahman",
      text: "Nexus Clinic perfectly performed the LED phototherapy treatment to clear up my active acne. My scars are fading, too!",
    },
    {
      name: "Mei Ling",
      text: "LED phototherapy with Nexus team was painless and effective. I noticed a remarkable change in my acne scars.",
    },
    {
      name: "Wei Li",
      text: "I'm amazed at how my skin looks now. This LED phototherapy worked wonders. Everyone notices the shine and smoothness.",
    },
    {
      name: "Jin Ho Lee",
      text: "The treatment was superb and made my skin look glowing and smooth. Thanks to the Nexus team!",
    },
  ];

  const faqs = [
    {
      q: "What is LED phototherapy?",
      a: "LED light therapy uses specific light wavelengths to target acne scars and reduce bacteria. Blue light reduces irritation and inflammation to improve acne scars.",
    },
    {
      q: "What are LED phototherapy benefits?",
      a: "Benefits include improved skin complexion, reduced wrinkles, improved wound healing, reduced inflammation, improved sleep, and increased energy levels.",
    },
    {
      q: "Is it safe for all skin types?",
      a: "Yes, LED phototherapy benefits all skin types, including sensitive skin. The treatment involves no invasive procedures or harsh chemicals.",
    },
    {
      q: "How many sessions do I need?",
      a: "Treatment sessions vary by patient needs. Normally, results show within 4 to 6 sessions.",
    },
    {
      q: "Is there any downtime?",
      a: "LED phototherapy is gentle with minimal downtime. Patients may experience mild redness that reduces over time.",
    },
  ];

  const aftercare = [
    "Mild redness may occur and stay for a few hours",
    "Avoid rubbing or scratching the treatment area",
    "Cleanse affected area per doctor instructions",
    "Avoid harsh facial treatments for a few weeks",
  ];

  return (
    <>
      <main className="bg-cream min-h-screen font-inter">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-br from-brown via-wine to-rose opacity-90" />
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-taupe/20 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-rose/20 rounded-full blur-3xl" />
          </div>

          <motion.div
            className="container mx-auto px-6 lg:px-12 relative z-10"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="max-w-4xl mx-auto text-center">
              <motion.div variants={fadeInUp} className="mb-6">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-glass backdrop-blur-sm rounded-full text-brown text-sm font-medium">
                  <Sparkles className="w-4 h-4" />
                  Advanced Skin Treatment
                </span>
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="font-georgia text-4xl md:text-6xl lg:text-7xl text-light mb-6 leading-tight"
              >
                LED Phototherapy for
                <span className="block italic text-cream/90">
                  Smoother, Scar-Free Skin
                </span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-lg md:text-xl text-cream/80 mb-10 max-w-2xl mx-auto"
              >
                Reduce acne scars, inflammation, wrinkles & fine lines while
                brightening and tightening your skin with our advanced LED
                therapy.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <a
                  href="#book"
                  className="px-8 py-4 bg-cream text-brown font-medium rounded-full hover:bg-light transition-all duration-300 hover:shadow-xl hover:shadow-brown/20 hover:-translate-y-1"
                >
                  Book Appointment
                </a>
                <a
                  href="#learn"
                  className="px-8 py-4 bg-transparent border-2 border-cream/50 text-cream font-medium rounded-full hover:bg-cream/10 transition-all duration-300"
                >
                  Learn More
                </a>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="w-8 h-8 text-cream/60" />
          </motion.div>
        </section>

        {/* Stats Section */}
        <section className="py-8 -mt-16 relative z-20">
          <div className="container mx-auto px-6">
            <motion.div
              className="max-w-4xl mx-auto"
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="bg-linear-to-r from-wine to-rose p-8 rounded-3xl shadow-2xl shadow-wine/20">
                <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                  <div className="flex items-center gap-4">
                    <div className="p-4 bg-cream/20 rounded-2xl backdrop-blur-sm">
                      <Users className="w-8 h-8 text-cream" />
                    </div>
                    <div className="text-center md:text-left">
                      <p className="text-4xl md:text-5xl font-bold text-cream">
                        1,100+
                      </p>
                      <p className="text-cream/80">Satisfied Clients</p>
                    </div>
                  </div>
                  <div className="hidden md:block w-px h-16 bg-cream/30" />
                  <div className="flex items-center gap-4">
                    <div className="p-4 bg-cream/20 rounded-2xl backdrop-blur-sm">
                      <Star className="w-8 h-8 text-cream" />
                    </div>
                    <div className="text-center md:text-left">
                      <p className="text-4xl md:text-5xl font-bold text-cream">
                        5.0
                      </p>
                      <p className="text-cream/80">Average Rating</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="learn" className="py-24 bg-light">
          <div className="container mx-auto px-6 lg:px-12">
            <motion.div
              className="max-w-6xl mx-auto"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div variants={fadeInUp} className="text-center mb-16">
                <span className="text-wine font-medium tracking-wider uppercase text-sm">
                  The Science
                </span>
                <h2 className="font-georgia text-3xl md:text-5xl text-brown mt-3 mb-6">
                  How LED Phototherapy Works
                </h2>
                <div className="w-24 h-1 bg-linear-to-r from-wine to-rose mx-auto rounded-full" />
              </motion.div>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <motion.div variants={fadeInLeft} className="space-y-6">
                  <p className="text-taupe text-lg leading-relaxed">
                    The LED phototherapy machine stimulates the body's natural
                    healing process with infrared light. This light helps
                    accelerate the repair of damaged skin and apparent acne
                    scars, reduce inflammation, and improve complexion.
                  </p>
                  <p className="text-taupe text-lg leading-relaxed">
                    It boosts collagen within scar tissue while stimulating new
                    collagen production, gradually filling depressions and
                    improving skin texture for smoother, healthier-looking skin.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 pt-6">
                    {[
                      "Reduce inflammation",
                      "Fade acne scars",
                      "Smooth skin texture",
                      "Clear pimple marks",
                      "Boost hydration",
                      "Improve complexion",
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        className="flex items-center gap-3 p-3 bg-cream rounded-xl"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <CheckCircle className="w-5 h-5 text-wine shrink-0" />
                        <span className="text-brown">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                <motion.div variants={fadeInRight} className="relative">
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-brown/20">
                    <img
                      src="https://www.nexus-clinic.com/wp-content/uploads/2023/04/led-light-antiaging-mask-facial-skin-care-spa-slow-motion-woman-lies-couch-spec-1-copy.webp"
                      alt="LED Phototherapy Treatment"
                      className="w-full h-auto"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-brown/40 to-transparent" />
                  </div>
                  <div className="absolute -bottom-6 -left-6 p-6 bg-wine rounded-2xl text-cream shadow-xl">
                    <Sun className="w-8 h-8 mb-2" />
                    <p className="font-medium">Non-Invasive</p>
                    <p className="text-sm text-cream/80">
                      Safe for all skin types
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Causes Section */}
        <section className="py-24 bg-cream">
          <div className="container mx-auto px-6 lg:px-12">
            <motion.div
              className="max-w-6xl mx-auto"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div variants={fadeInUp} className="text-center mb-16">
                <span className="text-wine font-medium tracking-wider uppercase text-sm">
                  Understanding Your Skin
                </span>
                <h2 className="font-georgia text-3xl md:text-5xl text-brown mt-3 mb-6">
                  What Causes Acne & Breakouts?
                </h2>
                <div className="w-24 h-1 bg-linear-to-r from-wine to-rose mx-auto rounded-full" />
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {causes.map((cause, i) => (
                  <motion.div
                    key={i}
                    variants={fadeInUp}
                    className="group p-6 bg-light rounded-2xl border border-taupe/20 hover:border-wine/30 hover:shadow-xl hover:shadow-wine/10 transition-all duration-500"
                    whileHover={{ y: -5 }}
                  >
                    <div className="w-12 h-12 bg-wine/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-wine/20 transition-colors">
                      <Droplets className="w-6 h-6 text-wine" />
                    </div>
                    <p className="text-brown font-medium text-lg">{cause}</p>
                  </motion.div>
                ))}
              </div>

              <motion.p
                variants={fadeInUp}
                className="text-center text-taupe mt-12 max-w-3xl mx-auto"
              >
                Every acne and scarring experience is unique. LED phototherapy
                provides a personalized approach to treat acne scars with
                guaranteed results, improving skin clarity and appearance.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 bg-brown text-cream relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-96 h-96 bg-wine/30 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-rose/20 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <motion.div
              className="max-w-6xl mx-auto"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div variants={fadeInUp} className="text-center mb-16">
                <span className="text-rose font-medium tracking-wider uppercase text-sm">
                  Why Choose Us
                </span>
                <h2 className="font-georgia text-3xl md:text-5xl text-cream mt-3 mb-6">
                  Benefits of LED Phototherapy
                </h2>
                <div className="w-24 h-1 bg-linear-to-r from-rose to-taupe mx-auto rounded-full" />
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {benefits.map((benefit, i) => (
                  <motion.div
                    key={i}
                    variants={fadeInUp}
                    className="text-center group"
                  >
                    <motion.div
                      className="w-20 h-20 mx-auto mb-6 bg-glass backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                      whileHover={{ rotate: 5 }}
                    >
                      <benefit.icon className="w-10 h-10 text-cream" />
                    </motion.div>
                    <h3 className="font-georgia text-xl mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-cream/70">{benefit.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Aftercare Section */}
        <section className="py-24 bg-light">
          <div className="container mx-auto px-6 lg:px-12">
            <motion.div
              className="max-w-4xl mx-auto"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div variants={fadeInUp} className="text-center mb-16">
                <span className="text-wine font-medium tracking-wider uppercase text-sm">
                  Post-Treatment
                </span>
                <h2 className="font-georgia text-3xl md:text-5xl text-brown mt-3 mb-6">
                  Aftercare Instructions
                </h2>
                <div className="w-24 h-1 bg-linear-to-r from-wine to-rose mx-auto rounded-full" />
              </motion.div>

              <div className="grid md:grid-cols-2 gap-6">
                {aftercare.map((item, i) => (
                  <motion.div
                    key={i}
                    variants={fadeInUp}
                    className="flex items-start gap-4 p-6 bg-cream rounded-2xl"
                  >
                    <div className="w-10 h-10 bg-wine/10 rounded-full flex items-center justify-center shrink-0">
                      <Leaf className="w-5 h-5 text-wine" />
                    </div>
                    <p className="text-brown">{item}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <BeforeAfterFaceSection />

        {/* Testimonials Section */}
        <section className="py-24 bg-cream">
          <div className="container mx-auto px-6 lg:px-12">
            <motion.div
              className="max-w-6xl mx-auto"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div variants={fadeInUp} className="text-center mb-16">
                <span className="text-wine font-medium tracking-wider uppercase text-sm">
                  Testimonials
                </span>
                <h2 className="font-georgia text-3xl md:text-5xl text-brown mt-3 mb-6">
                  What Our Clients Say
                </h2>
                <div className="w-24 h-1 bg-linear-to-r from-wine to-rose mx-auto rounded-full" />
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8">
                {testimonials.map((testimonial, i) => (
                  <motion.div
                    key={i}
                    variants={fadeInUp}
                    className="p-8 bg-light rounded-3xl border border-taupe/10 hover:shadow-xl hover:shadow-wine/10 transition-all duration-500"
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} className="w-5 h-5 fill-wine text-wine" />
                      ))}
                    </div>
                    <p className="text-taupe text-lg mb-6 italic">
                      "{testimonial.text}"
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-linear-to-br from-wine to-rose rounded-full flex items-center justify-center text-cream font-bold">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-medium text-brown">
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-taupe">Verified Client</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQ data={faqs} />
      </main>
    </>
  );
};

export default PageLEDPhototherapy;
