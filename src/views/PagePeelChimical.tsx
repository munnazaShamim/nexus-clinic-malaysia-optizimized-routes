"use client";
import { motion } from "framer-motion";
import {
  Sparkles,
  Droplets,
  CheckCircle2,
  Star,
  ChevronDown,
  Feather,
  Shield,
  Clock,
  Heart,
  Zap,
  Users,
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

const cardHover = {
  rest: { scale: 1, y: 0 },
  hover: { scale: 1.02, y: -8, transition: { duration: 0.3 } },
};

const PagePeelChemical = () => {
  const benefits = [
    {
      icon: Sparkles,
      title: "Improved Texture",
      desc: "Smoother, more refined skin surface",
    },
    {
      icon: Feather,
      title: "Fine Line Reduction",
      desc: "Stimulates collagen production",
    },
    {
      icon: Droplets,
      title: "Even Skin Tone",
      desc: "Fades dark spots and sun damage",
    },
    {
      icon: Shield,
      title: "Minimized Pores",
      desc: "Tighter, cleaner appearance",
    },
  ];

  const peelTypes = [
    {
      title: "Mild Superficial Peels",
      desc: "Alpha-hydroxy acids (AHAs) like glycolic or lactic acid. Ideal for first-timers or sensitive skin.",
      color: "bg-rose/20",
    },
    {
      title: "Medium Peels",
      desc: "Trichloroacetic acid (TCA) addresses pigmentation, sun damage, and textural issues.",
      color: "bg-wine/20",
    },
    {
      title: "Combination Peels",
      desc: "Blend of acids to tackle multiple issues simultaneously like dullness and pigmentation.",
      color: "bg-taupe/20",
    },
  ];

  const testimonials = [
    {
      name: "Mei Hua Chen",
      text: "The treatment improved my skin texture and tone. My skin looks brighter and smoother.",
    },
    {
      name: "Aisha Binti Ahmad",
      text: "Before the chemical peel, my face looked dull. After a few weeks, it looked brighter and more radiant.",
    },
    {
      name: "Yuki Tanaka",
      text: "The chemical peel helped eliminate my acne scars. I'm very thankful for the results.",
    },
  ];

  const faqs = [
    {
      q: "Is a skin peel the same as a chemical peel?",
      a: "Yes, both terms are often used interchangeably. However, 'skin peel' often describes gentler versions suitable for frequent or mild exfoliation.",
    },
    {
      q: "Does it require downtime?",
      a: "Mild peels typically require no major downtime. Some flaking or dryness may occur for 2–3 days, but most people can resume daily activities immediately.",
    },
    {
      q: "How often should I get a peel?",
      a: "Every 3 to 4 weeks is ideal, depending on your skin concerns and goals.",
    },
    {
      q: "Can I wear makeup after a peel?",
      a: "It's best to wait at least 24 hours before applying makeup to avoid irritation and allow the skin to breathe and heal.",
    },
  ];

  return (
    <>
      <main className="bg-cream min-h-screen font-inter overflow-hidden">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center px-4 py-20">
          {/* Decorative Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute top-20 left-10 w-72 h-72 bg-wine/10 rounded-full blur-3xl"
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 8, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-20 right-10 w-96 h-96 bg-rose/10 rounded-full blur-3xl"
              animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 10, repeat: Infinity }}
            />
          </div>

          <motion.div
            className="relative z-10 max-w-5xl mx-auto text-center"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-4 py-2 bg-wine/10 rounded-full mb-8"
            >
              <Sparkles className="w-4 h-4 text-wine" />
              <span className="text-wine text-sm font-medium tracking-wide">
                Premium Skin Treatment
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="font-georgia text-4xl md:text-6xl lg:text-7xl text-brown leading-tight mb-6"
            >
              Skin Peel for <span className="text-wine italic">Radiant</span>{" "}
              Renewal
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-taupe text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
            >
              Revive dull, pigmented, and aging skin with our advanced
              exfoliating treatments. Reveal a brighter, smoother complexion
              underneath.
            </motion.p>

            {/* Stats Badge */}
            <motion.div
              variants={scaleIn}
              className="inline-flex items-center gap-4 px-8 py-4 bg-glass backdrop-blur-md rounded-2xl border border-white/50 shadow-xl"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-wine/10 rounded-full">
                <Users className="w-6 h-6 text-wine" />
              </div>
              <div className="text-left">
                <p className="text-3xl font-bold text-brown">820+</p>
                <p className="text-taupe text-sm">Happy Clients</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="w-6 h-6 text-taupe" />
          </motion.div>
        </section>

        {/* What Is Section */}
        <section className="py-20 px-4 bg-light">
          <motion.div
            className="max-w-6xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div variants={fadeInLeft}>
                <span className="text-wine font-medium tracking-widest text-sm uppercase">
                  Understanding
                </span>
                <h2 className="font-georgia text-3xl md:text-5xl text-brown mt-4 mb-6">
                  What Is a Skin Peel?
                </h2>
                <div className="space-y-4 text-taupe leading-relaxed">
                  <p>
                    A skin peel, often known as a chemical peel, is a
                    skin-resurfacing treatment that involves applying a
                    specially formulated solution to the face or other areas.
                  </p>
                  <p>
                    This solution exfoliates the outer layers of the skin,
                    triggering natural cell regeneration and revealing healthier
                    skin beneath.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeInRight} className="relative">
                <div className="absolute -inset-4 bg-linear-to-br from-wine/20 to-rose/20 rounded-3xl blur-2xl" />
                <div className="relative bg-white p-8 rounded-3xl shadow-xl">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-wine/10 rounded-xl flex items-center justify-center shrink-0">
                      <Zap className="w-6 h-6 text-wine" />
                    </div>
                    <div>
                      <h3 className="font-georgia text-xl text-brown mb-2">
                        How It Works
                      </h3>
                      <p className="text-taupe text-sm leading-relaxed">
                        The treatment begins with a deep cleanse, followed by a
                        tailored chemical solution that breaks down dead skin
                        cells, stimulating collagen production and accelerating
                        cell turnover.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-rose/10 rounded-xl flex items-center justify-center shrink-0">
                      <Clock className="w-6 h-6 text-rose" />
                    </div>
                    <div>
                      <h3 className="font-georgia text-xl text-brown mb-2">
                        Quick Recovery
                      </h3>
                      <p className="text-taupe text-sm leading-relaxed">
                        Recovery is generally fast and non-invasive, ideal for
                        busy individuals seeking noticeable improvement without
                        downtime.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Types of Peels */}
        <section className="py-20 px-4">
          <motion.div
            className="max-w-6xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <span className="text-wine font-medium tracking-widest text-sm uppercase">
                Options
              </span>
              <h2 className="font-georgia text-3xl md:text-5xl text-brown mt-4">
                Types of Peels Available
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {peelTypes.map((peel, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                >
                  <motion.div
                    variants={cardHover}
                    className={`h-full p-8 rounded-3xl ${peel.color} border border-white/50 backdrop-blur-sm`}
                  >
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mb-6 shadow-md">
                      <span className="font-georgia text-wine text-lg">
                        {index + 1}
                      </span>
                    </div>
                    <h3 className="font-georgia text-xl text-brown mb-4">
                      {peel.title}
                    </h3>
                    <p className="text-taupe leading-relaxed">{peel.desc}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-brown text-light">
          <motion.div
            className="max-w-6xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <span className="text-rose font-medium tracking-widest text-sm uppercase">
                Advantages
              </span>
              <h2 className="font-georgia text-3xl md:text-5xl text-cream mt-4">
                Benefits of Skin Peeling
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div key={index} variants={fadeInUp} className="group">
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 h-full">
                    <div className="w-14 h-14 bg-wine/20 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                      <benefit.icon className="w-7 h-7 text-rose" />
                    </div>
                    <h3 className="font-georgia text-lg text-cream mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-taupe text-sm">{benefit.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional Benefits */}
            <motion.div
              variants={fadeInUp}
              className="mt-16 grid md:grid-cols-2 gap-8"
            >
              <div className="p-8 rounded-3xl bg-linear-to-br from-wine/20 to-transparent border border-wine/30">
                <Heart className="w-8 h-8 text-rose mb-4" />
                <h3 className="font-georgia text-2xl text-cream mb-4">
                  Brightens Dull Skin
                </h3>
                <p className="text-taupe leading-relaxed">
                  A skin peel removes the dead layer of cells that mask your
                  natural glow, allowing fresher skin to emerge. Perfect for
                  combating pollution, stress, and inadequate skincare effects.
                </p>
              </div>
              <div className="p-8 rounded-3xl bg-linear-to-br from-rose/20 to-transparent border border-rose/30">
                <Shield className="w-8 h-8 text-rose mb-4" />
                <h3 className="font-georgia text-2xl text-cream mb-4">
                  Treats Mild Pigmentation
                </h3>
                <p className="text-taupe leading-relaxed">
                  Mild pigmentation issues such as freckles, melasma, and
                  post-inflammatory hyperpigmentation respond well to regular
                  skin peeling, disrupting melanin production for clearer skin.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Procedure Section */}
        <section className="py-20 px-4 bg-light">
          <motion.div
            className="max-w-4xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <span className="text-wine font-medium tracking-widest text-sm uppercase">
                Process
              </span>
              <h2 className="font-georgia text-3xl md:text-5xl text-brown mt-4">
                What to Expect
              </h2>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-white rounded-3xl p-8 md:p-12 shadow-xl"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-wine/10 rounded-2xl flex items-center justify-center">
                  <Clock className="w-8 h-8 text-wine" />
                </div>
                <div>
                  <p className="text-2xl font-georgia text-brown">
                    30-45 minutes
                  </p>
                  <p className="text-taupe">per session</p>
                </div>
              </div>

              <p className="text-taupe leading-relaxed mb-8">
                The skin is first cleansed, and a gentle prepping solution is
                applied. You may feel mild tingling or warmth which subsides
                within minutes. After, soothing post-treatment products are
                applied.
              </p>

              <h4 className="font-georgia text-xl text-brown mb-4">
                Post-Treatment Care
              </h4>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Avoid heavy makeup for 24 hours",
                  "Use sunscreen diligently",
                  "Moisturize well to support peeling",
                  "Avoid exfoliants for several days",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-wine shrink-0" />
                    <span className="text-taupe">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Testimonials */}
        <section className="py-20 px-4">
          <motion.div
            className="max-w-6xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <span className="text-wine font-medium tracking-widest text-sm uppercase">
                Testimonials
              </span>
              <h2 className="font-georgia text-3xl md:text-5xl text-brown mt-4">
                Client Reviews
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <motion.div key={index} variants={fadeInUp} className="group">
                  <div className="h-full p-8 bg-white rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-cream">
                    <Quote className="w-10 h-10 text-wine/20 mb-4" />
                    <p className="text-taupe leading-relaxed mb-6 italic">
                      "{testimonial.text}"
                    </p>
                    <div className="flex items-center justify-between">
                      <p className="font-georgia text-brown">
                        {testimonial.name}
                      </p>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-wine text-wine"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* FAQ Section */}
        <FAQ data={faqs} />

        {/* Decorative Bottom Section */}
        {/* <section className="py-16 px-4 bg-cream">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            variants={scaleIn}
            className="inline-flex items-center gap-2 px-6 py-3 bg-wine/10 rounded-full"
          >
            <Sparkles className="w-5 h-5 text-wine" />
            <span className="text-wine font-georgia text-lg">
              Reveal Your Natural Radiance
            </span>
            <Sparkles className="w-5 h-5 text-wine" />
          </motion.div>
        </motion.div>
      </section> */}
      </main>
    </>
  );
};

export default PagePeelChemical;
