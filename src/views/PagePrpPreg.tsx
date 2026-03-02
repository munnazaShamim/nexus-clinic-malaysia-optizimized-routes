"use client";
import { motion } from "framer-motion";
import {
  Sparkles,
  Droplets,
  Shield,
  Heart,
  Star,
  ChevronDown,
  Syringe,
  Leaf,
  Timer,
  CheckCircle2,
  Quote,
  ArrowRight,
} from "lucide-react";
import {
  fadeInUp,
  staggerContainer,
  fadeInLeft,
  fadeInRight,
  scaleIn,
} from "../lib/animations";
import FAQ from "../components/FAQ";

const TestimonialCard = ({ name, review, rating }: any) => (
  <motion.div
    variants={scaleIn}
    className="bg-light rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-cream"
  >
    <Quote className="w-10 h-10 text-wine/20 mb-4" />
    <div className="flex gap-1 mb-4">
      {[...Array(rating)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-wine text-wine" />
      ))}
    </div>
    <p className="text-brown/80 font-inter leading-relaxed mb-6 italic">
      "{review}"
    </p>
    <div className="flex items-center gap-3">
      <div className="w-12 h-12 rounded-full bg-linear-to-br from-wine to-rose flex items-center justify-center">
        <span className="text-white font-georgia font-bold">
          {name.charAt(0)}
        </span>
      </div>
      <span className="font-georgia text-brown font-medium">{name}</span>
    </div>
  </motion.div>
);

// Feature Card Component
const FeatureCard = ({ icon: Icon, title, description }: any) => (
  <motion.div
    variants={fadeInUp}
    whileHover={{ y: -8, transition: { duration: 0.3 } }}
    className="group bg-light/80 backdrop-blur-sm rounded-3xl p-8 border border-cream hover:border-wine/30 transition-all duration-300 hover:shadow-xl"
  >
    <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-wine/10 to-rose/10 flex items-center justify-center mb-6 group-hover:from-wine/20 group-hover:to-rose/20 transition-colors">
      <Icon className="w-8 h-8 text-wine" />
    </div>
    <h3 className="font-georgia text-xl text-brown mb-3">{title}</h3>
    <p className="text-taupe font-inter leading-relaxed">{description}</p>
  </motion.div>
);

// Timeline Item Component
const TimelineItem = ({ period, title, description, index }: any) => (
  <motion.div variants={fadeInUp} className="flex gap-6">
    <div className="flex flex-col items-center">
      <div className="w-12 h-12 rounded-full bg-wine flex items-center justify-center text-white font-georgia font-bold">
        {index + 1}
      </div>
      <div className="w-0.5 h-full bg-wine/20 mt-2" />
    </div>
    <div className="pb-12">
      <span className="inline-block px-4 py-1 rounded-full bg-wine/10 text-wine text-sm font-medium mb-3">
        {period}
      </span>
      <h4 className="font-georgia text-xl text-brown mb-2">{title}</h4>
      <p className="text-taupe font-inter leading-relaxed">{description}</p>
    </div>
  </motion.div>
);

const PagePRPTreatment = () => {
  const benefits = [
    {
      icon: Leaf,
      title: "100% Natural",
      description:
        "Uses your own blood plasma, eliminating risk of allergic reactions or rejection.",
    },
    {
      icon: Timer,
      title: "Gradual Results",
      description:
        "Natural-looking improvements that develop over weeks, not artificial instant changes.",
    },
    {
      icon: Shield,
      title: "Safe & Proven",
      description:
        "Clinically tested procedure with minimal side effects and no synthetic chemicals.",
    },
    {
      icon: Heart,
      title: "Holistic Healing",
      description:
        "Improves overall skin health including circulation, hydration, and cellular turnover.",
    },
    {
      icon: Sparkles,
      title: "Long-Lasting",
      description:
        "Results continue to improve for months with proper maintenance sessions.",
    },
    {
      icon: Droplets,
      title: "Minimal Downtime",
      description:
        "Most patients resume normal activities within 24 hours after treatment.",
    },
  ];

  const treatmentAreas = [
    {
      area: "Forehead Lines",
      desc: "Smooth horizontal lines caused by aging and repeated expressions",
    },
    {
      area: "Crow's Feet",
      desc: "Fine lines radiating from the outer corners of the eyes",
    },
    {
      area: "Under-Eye Hollows",
      desc: "Address thinning skin and volume loss under the eyes",
    },
    {
      area: "Nasolabial Folds",
      desc: "Reduce smile lines that deepen with time",
    },
    {
      area: "Neck & Décolletage",
      desc: "Rejuvenate often-overlooked areas prone to sagging",
    },
  ];

  const timeline = [
    {
      period: "Day 1-2",
      title: "Immediate Recovery",
      description:
        "Mild redness and swelling are common. Skin may feel tighter or slightly tender.",
    },
    {
      period: "Week 1-2",
      title: "Initial Results",
      description:
        "First signs of glow and skin tightening become visible as healing progresses.",
    },
    {
      period: "Session 2-3",
      title: "Visible Improvement",
      description:
        "Noticeable reduction in fine lines, improved texture, and firmer skin.",
    },
    {
      period: "Month 6+",
      title: "Maintenance",
      description:
        "Follow-up sessions every 6 months help sustain long-term results.",
    },
  ];

  const testimonials = [
    {
      name: "Kumar Nathan",
      review:
        "My first experience with PRP treatment was amazing. This treatment targets my specific skin areas, reducing wrinkles and acne scars effectively.",
      rating: 5,
    },
    {
      name: "Aisyah Li",
      review:
        "The PRP treatment is a game-changer for my depressed acne scars. The procedure was pain-free and had minimal downtime.",
      rating: 5,
    },
    {
      name: "Lim Wei Tan",
      review:
        "The staff and doctors were all professional and well-trained. The procedure was super fast and gave me immediate results.",
      rating: 5,
    },
    {
      name: "Sara Riaz",
      review:
        "The PRP is the best treatment that targets various skin issues. I highly recommend it to everyone seeking natural rejuvenation.",
      rating: 5,
    },
  ];

  const faqs = [
    {
      q: "Can PRP reduce fine lines and wrinkles?",
      a: "Yes, PRP naturally stimulates collagen production and significantly improves skin texture, reducing the appearance of fine lines and wrinkles over time.",
    },
    {
      q: "How many sessions are required?",
      a: "Ideally, 3 to 4 sessions spaced a month apart offer optimal results. Maintenance sessions every 6 months help sustain the improvements.",
    },
    {
      q: "Are results instant?",
      a: "No. Improvements develop gradually over several weeks as your body produces new collagen. This creates more natural-looking results.",
    },
    {
      q: "Can PRP be combined with fillers?",
      a: "Yes, PRP works beautifully with dermal fillers for enhanced facial rejuvenation, providing both volume and skin quality improvements.",
    },
    {
      q: "Is the procedure painful?",
      a: "Most patients experience minimal discomfort. A topical numbing cream is applied before treatment to ensure comfort during the procedure.",
    },
  ];

  return (
    <>
      <main className="bg-cream font-inter overflow-x-hidden">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-linear-to-br from-brown via-wine/90 to-rose/80" />
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-cream blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-light blur-3xl" />
          </div>

          {/* Floating Elements */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-[10%] w-20 h-20 rounded-full bg-glass backdrop-blur-sm hidden lg:block"
          />
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-1/3 right-[15%] w-16 h-16 rounded-full bg-glass backdrop-blur-sm hidden lg:block"
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative z-10 max-w-5xl mx-auto px-6 text-center py-20"
          >
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-glass backdrop-blur-sm text-cream text-sm font-medium">
                <Sparkles className="w-4 h-4" />
                Natural Skin Rejuvenation
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="font-georgia text-4xl md:text-6xl lg:text-7xl text-light leading-tight mb-8"
            >
              PRP Therapy for{" "}
              <span className="text-cream/90 italic">Timeless</span> Beauty
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-cream/80 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed"
            >
              Harness your body's natural healing power to smooth wrinkles,
              restore firmness, and reveal radiant skin without synthetic
              injectables or invasive procedures.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-light text-wine font-medium rounded-full hover:bg-cream transition-colors shadow-lg"
              >
                Book Consultation
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#learn-more"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-cream/50 text-cream font-medium rounded-full hover:bg-cream/10 transition-colors"
              >
                Learn More
              </motion.a>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
              <ChevronDown className="w-8 h-8 text-cream/60" />
            </motion.div>
          </motion.div>
        </section>

        {/* What is PRP Section */}
        <section id="learn-more" className="py-24 lg:py-32 bg-light">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid lg:grid-cols-2 gap-16 items-center"
            >
              <motion.div variants={fadeInLeft}>
                <span className="inline-block px-4 py-2 rounded-full bg-wine/10 text-wine text-sm font-medium mb-6">
                  Understanding PRP
                </span>
                <h2 className="font-georgia text-4xl md:text-5xl text-brown mb-6 leading-tight">
                  What is PRP for <span className="text-wine">Anti-Aging?</span>
                </h2>
                <p className="text-taupe text-lg leading-relaxed mb-6">
                  Platelet-Rich Plasma (PRP) therapy leverages your body's
                  innate healing ability. A small amount of your blood is drawn
                  and processed in a centrifuge to separate the plasma rich in
                  growth factors and platelets.
                </p>
                <p className="text-taupe text-lg leading-relaxed mb-8">
                  This plasma is then injected or micro-needled into targeted
                  areas, stimulating natural collagen production and tissue
                  regeneration—restoring youthful texture without artificial
                  substances.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-brown">
                    <CheckCircle2 className="w-5 h-5 text-wine" />
                    <span>FDA Approved Technology</span>
                  </div>
                  <div className="flex items-center gap-2 text-brown">
                    <CheckCircle2 className="w-5 h-5 text-wine" />
                    <span>100% Autologous</span>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeInRight} className="relative">
                <div className="relative rounded-3xl overflow-hidden bg-linear-to-br from-wine/5 to-rose/10 p-8 lg:p-12">
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      { icon: Droplets, label: "Blood Draw", step: "01" },
                      { icon: Syringe, label: "Centrifuge", step: "02" },
                      { icon: Sparkles, label: "Extract PRP", step: "03" },
                      { icon: Heart, label: "Treatment", step: "04" },
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ scale: 1.05 }}
                        className="bg-light rounded-2xl p-6 text-center shadow-md"
                      >
                        <span className="text-wine/40 text-sm font-bold">
                          {item.step}
                        </span>
                        <div className="w-14 h-14 rounded-full bg-wine/10 flex items-center justify-center mx-auto my-4">
                          <item.icon className="w-7 h-7 text-wine" />
                        </div>
                        <span className="text-brown font-medium">
                          {item.label}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
                {/* Decorative Element */}
                <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-wine/10 -z-10" />
                <div className="absolute -top-6 -left-6 w-16 h-16 rounded-full bg-rose/10 -z-10" />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Mechanism Section */}
        <section className="py-24 lg:py-32 bg-cream">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-16"
            >
              <motion.span
                variants={fadeInUp}
                className="inline-block px-4 py-2 rounded-full bg-wine/10 text-wine text-sm font-medium mb-6"
              >
                The Science
              </motion.span>
              <motion.h2
                variants={fadeInUp}
                className="font-georgia text-4xl md:text-5xl text-brown mb-6"
              >
                How PRP <span className="text-wine">Transforms</span> Your Skin
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-taupe text-lg max-w-3xl mx-auto leading-relaxed"
              >
                Once injected, PRP activates powerful growth factors that
                trigger your skin's natural regeneration process.
              </motion.p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid md:grid-cols-3 gap-8"
            >
              {[
                {
                  title: "TGF (Transforming Growth Factor)",
                  desc: "Stimulates fibroblast activity and collagen synthesis for skin structure",
                },
                {
                  title: "VEGF (Vascular Endothelial)",
                  desc: "Promotes new blood vessel formation, improving skin circulation and nutrition",
                },
                {
                  title: "EGF (Epidermal Growth Factor)",
                  desc: "Accelerates cell turnover and wound healing for smoother texture",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  whileHover={{ y: -8 }}
                  className="bg-light rounded-3xl p-8 border border-taupe/20 hover:border-wine/30 transition-all"
                >
                  <div className="w-12 h-12 rounded-2xl bg-linear-to-br from-wine to-rose flex items-center justify-center text-light font-georgia font-bold text-xl mb-6">
                    {i + 1}
                  </div>
                  <h3 className="font-georgia text-xl text-brown mb-4">
                    {item.title}
                  </h3>
                  <p className="text-taupe leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Collagen Boost Section */}
        <section className="py-24 lg:py-32 bg-linear-to-br from-brown via-wine/90 to-rose/80 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-linear(circle_at_30%_50%,white_0%,transparent_50%)]" />
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid lg:grid-cols-2 gap-16 items-center"
            >
              <motion.div variants={fadeInLeft}>
                <span className="inline-block px-4 py-2 rounded-full bg-glass backdrop-blur-sm text-cream text-sm font-medium mb-6">
                  Collagen Regeneration
                </span>
                <h2 className="font-georgia text-4xl md:text-5xl text-light mb-6 leading-tight">
                  Rebuild Your Skin's{" "}
                  <span className="text-cream italic">Foundation</span>
                </h2>
                <p className="text-cream/80 text-lg leading-relaxed mb-6">
                  Collagen is the vital protein that gives skin its firmness and
                  structure. As we age, collagen production slows, leading to
                  sagging, wrinkles, and volume loss.
                </p>
                <p className="text-cream/80 text-lg leading-relaxed mb-8">
                  PRP directly addresses this by reinvigorating fibroblasts and
                  encouraging the regeneration of collagen from within—not just
                  filling wrinkles, but restoring your skin's foundation.
                </p>

                <div className="space-y-4">
                  {[
                    "Stimulates natural collagen production",
                    "Restores skin elasticity and firmness",
                    "Creates long-lasting structural improvement",
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      variants={fadeInUp}
                      className="flex items-center gap-3"
                    >
                      <div className="w-6 h-6 rounded-full bg-cream/20 flex items-center justify-center">
                        <CheckCircle2 className="w-4 h-4 text-cream" />
                      </div>
                      <span className="text-cream">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={fadeInRight} className="relative">
                <div className="bg-glass backdrop-blur-md rounded-3xl p-8 lg:p-10 border border-cream/20">
                  <h3 className="font-georgia text-2xl text-wine mb-6">
                    Areas Treated
                  </h3>
                  <div className="space-y-4">
                    {treatmentAreas.map((item, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ x: 8 }}
                        className="flex items-start gap-4 p-4 rounded-2xl bg-cream/5 hover:bg-cream/10 transition-colors"
                      >
                        <div className="w-10 h-10 rounded-xl bg-cream/20 flex items-center justify-center shrink-0">
                          <Sparkles className="w-5 h-5 text-wine" />
                        </div>
                        <div>
                          <h4 className="text-wine font-medium mb-1">
                            {item.area}
                          </h4>
                          <p className="text-wine/60 text-sm">{item.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 lg:py-32 bg-light">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-16"
            >
              <motion.span
                variants={fadeInUp}
                className="inline-block px-4 py-2 rounded-full bg-wine/10 text-wine text-sm font-medium mb-6"
              >
                Why Choose PRP
              </motion.span>
              <motion.h2
                variants={fadeInUp}
                className="font-georgia text-4xl md:text-5xl text-brown mb-6"
              >
                Benefits Over <span className="text-wine">Synthetic</span>{" "}
                Injectables
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-taupe text-lg max-w-3xl mx-auto"
              >
                PRP stands out for being entirely natural and biocompatible,
                offering advantages that synthetic treatments simply cannot
                match.
              </motion.p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {benefits.map((benefit, i) => (
                <FeatureCard key={i} {...benefit} />
              ))}
            </motion.div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-24 lg:py-32 bg-cream">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid lg:grid-cols-2 gap-16"
            >
              <div>
                <motion.span
                  variants={fadeInUp}
                  className="inline-block px-4 py-2 rounded-full bg-wine/10 text-wine text-sm font-medium mb-6"
                >
                  Treatment Journey
                </motion.span>
                <motion.h2
                  variants={fadeInUp}
                  className="font-georgia text-4xl md:text-5xl text-brown mb-6"
                >
                  Your Path to <span className="text-wine">Radiant</span> Skin
                </motion.h2>
                <motion.p
                  variants={fadeInUp}
                  className="text-taupe text-lg leading-relaxed mb-8"
                >
                  Each PRP session typically takes 45-60 minutes. After applying
                  a topical numbing cream, the PRP solution is carefully
                  administered to target areas.
                </motion.p>

                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="space-y-0"
                >
                  {timeline.map((item, i) => (
                    <TimelineItem key={i} {...item} index={i} />
                  ))}
                </motion.div>
              </div>

              <motion.div
                variants={fadeInRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="lg:sticky lg:top-32 h-fit"
              >
                <div className="bg-light rounded-3xl p-8 lg:p-10 border border-taupe/20">
                  <h3 className="font-georgia text-2xl text-brown mb-6">
                    Aftercare Essentials
                  </h3>
                  <div className="space-y-4 mb-8">
                    {[
                      "Avoid heavy makeup for 24 hours",
                      "Apply broad-spectrum sunscreen daily",
                      "Keep skin moisturized and hydrated",
                      "Skip exfoliating products for a few days",
                      "Stay well-hydrated to support healing",
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-wine/10 flex items-center justify-center shrink-0">
                          <CheckCircle2 className="w-4 h-4 text-wine" />
                        </div>
                        <span className="text-brown">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-linear-to-br from-wine/5 to-rose/5 rounded-2xl p-6 border border-wine/10">
                    <div className="flex items-start gap-4">
                      <Shield className="w-8 h-8 text-wine shrink-0" />
                      <div>
                        <h4 className="font-georgia text-lg text-brown mb-2">
                          Minimal Risk
                        </h4>
                        <p className="text-taupe text-sm leading-relaxed">
                          Since PRP uses your own blood, chances of infection or
                          allergic reactions are minimal.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-24 lg:py-32 bg-linear-to-b from-light to-cream">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-16"
            >
              <motion.span
                variants={fadeInUp}
                className="inline-block px-4 py-2 rounded-full bg-wine/10 text-wine text-sm font-medium mb-6"
              >
                Client Stories
              </motion.span>
              <motion.h2
                variants={fadeInUp}
                className="font-georgia text-4xl md:text-5xl text-brown mb-6"
              >
                Real Results, <span className="text-wine">Real People</span>
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-taupe text-lg max-w-2xl mx-auto"
              >
                Discover how PRP therapy has transformed the skin and confidence
                of our clients.
              </motion.p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid md:grid-cols-2 gap-8"
            >
              {testimonials.map((testimonial, i) => (
                <TestimonialCard key={i} {...testimonial} />
              ))}
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQ data={faqs} />
      </main>
    </>
  );
};

export default PagePRPTreatment;
