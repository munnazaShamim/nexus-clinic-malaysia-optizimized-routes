"use client";
import { motion } from "framer-motion";
import {
  Sparkles,
  Clock,
  Shield,
  Star,
  ChevronDown,
  Users,
  Zap,
  Heart,
  CheckCircle2,
  Quote,
} from "lucide-react";
import {
  fadeInUp,
  staggerContainer,
  fadeInLeft,
  fadeInRight,
  scaleIn,
} from "../lib/animations";
import FAQ from "../components/FAQ";

const HeroSection = () => (
  <section className="relative min-h-[90vh] bg-linear-to-br from-brown to-wine overflow-hidden">
    {/* Decorative Elements */}
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-20 left-10 w-72 h-72 bg-rose rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cream rounded-full blur-3xl" />
    </div>

    <motion.div
      className="container mx-auto px-6 py-24 lg:py-64 relative z-10"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div variants={fadeInUp} className="mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-glass backdrop-blur-sm rounded-full text-cream text-sm font-inter tracking-wide">
            <Sparkles className="w-4 h-4" />
            Advanced Skin Treatment
          </span>
        </motion.div>

        <motion.h1
          variants={fadeInUp}
          className="font-georgia text-4xl md:text-5xl lg:text-6xl text-cream leading-tight mb-6"
        >
          Meso Brightening for <span className="text-rose italic">Radiant</span>{" "}
          Skin
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="font-inter text-taupe text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Experience the transformative power of micro-infusion therapy. Achieve
          even skin tone, reduce dark spots, and unveil your natural luminosity.
        </motion.p>

        <motion.div
          variants={fadeInUp}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button className="px-8 py-4 bg-cream text-brown font-inter font-medium rounded-full hover:bg-rose hover:text-cream transition-all duration-300 shadow-lg hover:shadow-xl">
            Book Consultation
          </button>
          <button className="px-8 py-4 bg-transparent border-2 border-cream text-cream font-inter font-medium rounded-full hover:bg-cream hover:text-brown transition-all duration-300">
            Learn More
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        variants={fadeInUp}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ChevronDown className="w-8 h-8 text-cream/60" />
      </motion.div>
    </motion.div>
  </section>
);

const StatsSection = () => {
  const stats = [
    { icon: Users, value: "523+", label: "Satisfied Clients" },
    { icon: Star, value: "4.9", label: "Average Rating" },
    { icon: Clock, value: "30-45", label: "Minutes Per Session" },
    { icon: Shield, value: "100%", label: "Safe & Certified" },
  ];

  return (
    <section className="py-16 bg-light">
      <motion.div
        className="container mx-auto px-6"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-cream rounded-2xl mb-4 group-hover:bg-wine transition-colors duration-300">
                <stat.icon className="w-7 h-7 text-wine group-hover:text-cream transition-colors duration-300" />
              </div>
              <h3 className="font-georgia text-3xl md:text-4xl text-brown mb-1">
                {stat.value}
              </h3>
              <p className="font-inter text-taupe text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

const AboutSection = () => (
  <section className="py-20 lg:py-28 bg-cream">
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.span
            variants={fadeInLeft}
            className="inline-block px-4 py-1 bg-wine/10 text-wine font-inter text-sm rounded-full mb-4"
          >
            About The Treatment
          </motion.span>

          <motion.h2
            variants={fadeInLeft}
            className="font-georgia text-3xl md:text-4xl lg:text-5xl text-brown mb-6 leading-tight"
          >
            What Is <span className="text-wine italic">Meso Brightening</span>?
          </motion.h2>

          <motion.p
            variants={fadeInLeft}
            className="font-inter text-taupe leading-relaxed mb-6"
          >
            Meso Brightening is a non-surgical skin rejuvenation treatment that
            uses micro-injections to deliver powerful antioxidants like Vitamin
            C and glutathione deep into the dermis.
          </motion.p>

          <motion.p
            variants={fadeInLeft}
            className="font-inter text-taupe leading-relaxed mb-8"
          >
            Unlike surface treatments, this advanced therapy works from within,
            effectively combating pigmentation and oxidative damage to reveal
            brighter, clearer, and smoother skin over time.
          </motion.p>

          <motion.div variants={fadeInLeft} className="flex flex-wrap gap-3">
            {["Non-Invasive", "Quick Results", "Minimal Downtime"].map(
              (tag, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-white rounded-full text-brown font-inter text-sm shadow-sm"
                >
                  {tag}
                </span>
              ),
            )}
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-5/5 bg-[url('https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80')] bg-cover bg-center rounded-3xl overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center"></div>
          </div>

          {/* Floating Card */}
          <motion.div
            className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl max-w-xs"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-2">
              <Zap className="w-5 h-5 text-wine" />
              <span className="font-inter font-medium text-brown">
                Quick Treatment
              </span>
            </div>
            <p className="font-inter text-sm text-taupe">
              Results visible after 2-3 sessions
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  </section>
);

const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      title: "Consultation",
      description: "Thorough skin analysis and customized treatment plan",
    },
    {
      number: "02",
      title: "Preparation",
      description: "Gentle cleansing and numbing cream application",
    },
    {
      number: "03",
      title: "Treatment",
      description: "Micro-infusion of brightening serum into the dermis",
    },
    {
      number: "04",
      title: "Recovery",
      description: "Minimal redness that subsides within 24 hours",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-brown">
      <motion.div
        className="container mx-auto px-6"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="text-center mb-16">
          <motion.span
            variants={fadeInUp}
            className="inline-block px-4 py-1 bg-cream/10 text-cream font-inter text-sm rounded-full mb-4"
          >
            How It Works
          </motion.span>

          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-3xl md:text-4xl lg:text-5xl text-cream mb-4"
          >
            The <span className="text-rose italic">Treatment</span> Process
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="font-inter text-taupe max-w-2xl mx-auto"
          >
            A carefully designed four-step journey to transform your skin
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="relative group"
            >
              <div className="bg-wine/30 backdrop-blur-sm rounded-3xl p-8 h-full border border-wine/20 hover:bg-wine/50 transition-all duration-300">
                <span className="font-georgia text-5xl text-cream/20 group-hover:text-rose/40 transition-colors duration-300">
                  {step.number}
                </span>
                <h3 className="font-georgia text-xl text-cream mt-4 mb-3">
                  {step.title}
                </h3>
                <p className="font-inter text-taupe text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-wine/40" />
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Sparkles,
      title: "Brightened Skin Tone",
      description: "Achieve a more luminous and even complexion",
    },
    {
      icon: Heart,
      title: "Pigmentation Reduction",
      description: "Fade age spots and dark patches effectively",
    },
    {
      icon: Shield,
      title: "Improved Texture",
      description: "Smoother, refined skin with tighter pores",
    },
    {
      icon: Zap,
      title: "Enhanced Hydration",
      description: "Deep nourishment for lasting elasticity",
    },
    {
      icon: Clock,
      title: "Minimal Downtime",
      description: "Return to daily activities immediately",
    },
    {
      icon: CheckCircle2,
      title: "Long-lasting Results",
      description: "Sustained improvement with maintenance",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-light">
      <motion.div
        className="container mx-auto px-6"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="text-center mb-16">
          <motion.span
            variants={fadeInUp}
            className="inline-block px-4 py-1 bg-wine/10 text-wine font-inter text-sm rounded-full mb-4"
          >
            Why Choose Meso Brightening
          </motion.span>

          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-3xl md:text-4xl lg:text-5xl text-brown mb-4"
          >
            Transformative <span className="text-wine italic">Benefits</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-cream hover:border-wine/20"
            >
              <div className="w-14 h-14 bg-cream rounded-2xl flex items-center justify-center mb-5 group-hover:bg-wine transition-colors duration-300">
                <benefit.icon className="w-6 h-6 text-wine group-hover:text-cream transition-colors duration-300" />
              </div>
              <h3 className="font-georgia text-xl text-brown mb-3">
                {benefit.title}
              </h3>
              <p className="font-inter text-taupe text-sm leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

const IngredientsSection = () => {
  const ingredients = [
    {
      name: "Vitamin C",
      benefit: "Powerful antioxidant for brightening",
      percentage: "15%",
    },
    {
      name: "Glutathione",
      benefit: "Master detoxifier for even tone",
      percentage: "10%",
    },
    {
      name: "Hyaluronic Acid",
      benefit: "Deep hydration and plumping",
      percentage: "20%",
    },
    {
      name: "Niacinamide",
      benefit: "Pore refinement and clarity",
      percentage: "12%",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-cream">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="grid grid-cols-2 gap-4">
              {ingredients.map((ingredient, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  <span className="font-georgia text-3xl text-wine/30">
                    {ingredient.percentage}
                  </span>
                  <h4 className="font-georgia text-lg text-brown mt-2 mb-1">
                    {ingredient.name}
                  </h4>
                  <p className="font-inter text-taupe text-sm">
                    {ingredient.benefit}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <motion.span
              variants={fadeInRight}
              className="inline-block px-4 py-1 bg-wine/10 text-wine font-inter text-sm rounded-full mb-4"
            >
              Premium Formula
            </motion.span>

            <motion.h2
              variants={fadeInRight}
              className="font-georgia text-3xl md:text-4xl lg:text-5xl text-brown mb-6 leading-tight"
            >
              Key <span className="text-wine italic">Ingredients</span>
            </motion.h2>

            <motion.p
              variants={fadeInRight}
              className="font-inter text-taupe leading-relaxed mb-6"
            >
              Our carefully formulated serum combines the most effective
              brightening agents, each chosen for its proven ability to
              transform skin at the cellular level.
            </motion.p>

            <motion.p
              variants={fadeInRight}
              className="font-inter text-taupe leading-relaxed"
            >
              These powerful antioxidants work synergistically to combat
              pigmentation, neutralize free radicals, and restore your skin's
              natural radiance.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Siti Nur Aisyah",
      content:
        "The treatment is 100% safe and effective. My pigmentation issues are all gone and my skin tone has become even and smooth.",
      rating: 5,
    },
    {
      name: "Farah Azmi",
      content:
        "This treatment works like magic on my dull complexion. Thanks Nexus Clinic for giving my skin a new life.",
      rating: 5,
    },
    {
      name: "Lily Tan",
      content:
        "I noticed a big change in my skin's texture and tone. My skin looks much younger and better than before.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-wine">
      <motion.div
        className="container mx-auto px-6"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="text-center mb-16">
          <motion.span
            variants={fadeInUp}
            className="inline-block px-4 py-1 bg-cream/10 text-cream font-inter text-sm rounded-full mb-4"
          >
            Client Stories
          </motion.span>

          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-3xl md:text-4xl lg:text-5xl text-cream mb-4"
          >
            What Our <span className="text-rose italic">Clients</span> Say
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-brown/50 backdrop-blur-sm rounded-3xl p-8 border border-brown/30"
            >
              <Quote className="w-10 h-10 text-rose/40 mb-4" />

              <p className="font-inter text-cream/90 leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              <div className="flex items-center justify-between">
                <span className="font-georgia text-cream">
                  {testimonial.name}
                </span>
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-rose fill-rose" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

const AftercareSection = () => {
  const tips = [
    "Avoid direct sun exposure for 24-48 hours",
    "Apply high SPF sunscreen daily",
    "Use gentle, hydrating products for 48 hours",
    "Avoid harsh exfoliants temporarily",
  ];

  return (
    <section className="py-20 lg:py-28 bg-cream">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.span
              variants={fadeInUp}
              className="inline-block px-4 py-1 bg-wine/10 text-wine font-inter text-sm rounded-full mb-4"
            >
              Post-Treatment Care
            </motion.span>

            <motion.h2
              variants={fadeInUp}
              className="font-georgia text-3xl md:text-4xl text-brown mb-4"
            >
              Aftercare <span className="text-wine italic">Instructions</span>
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="font-inter text-taupe max-w-2xl mx-auto"
            >
              Protect your investment and maximize results with these simple
              care guidelines
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {tips.map((tip, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="flex items-center gap-4 bg-white rounded-xl p-5 shadow-sm"
              >
                <div className="w-10 h-10 bg-wine/10 rounded-full flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-wine" />
                </div>
                <p className="font-inter text-brown">{tip}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const faqs = [
  {
    q: "How soon can I see results from Meso Brightening?",
    a: "Improvements are often visible after 2 to 3 sessions. The full benefits become more apparent as you complete the recommended treatment course.",
  },
  {
    q: "Is this treatment painful?",
    a: "You may experience mild discomfort due to microneedling, but numbing cream is applied beforehand to ensure your comfort throughout the procedure.",
  },
  {
    q: "How many sessions are recommended?",
    a: "4 to 6 sessions spaced two weeks apart are typically recommended for optimal results. Maintenance sessions every 2-3 months help sustain the benefits.",
  },
  {
    q: "Is Meso Brightening safe for all skin types?",
    a: "Yes, the treatment is suitable for most skin types, including sensitive and acne-prone skin. A consultation helps determine the best approach for you.",
  },
  {
    q: "Can I apply makeup after treatment?",
    a: "We recommend waiting 24 hours before applying makeup to allow your skin to recover properly and maximize the absorption of active ingredients.",
  },
];

const PageMesoBrightening = () => {
  return (
    <>
      <div className="font-inter bg-light">
        <HeroSection />
        <StatsSection />
        <AboutSection />
        <ProcessSection />
        <BenefitsSection />
        <IngredientsSection />
        <TestimonialsSection />
        <FAQ data={faqs} />
        <AftercareSection />
      </div>
    </>
  );
};

export default PageMesoBrightening;
