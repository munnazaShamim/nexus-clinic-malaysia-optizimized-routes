"use client";
import { motion } from "framer-motion";
import {
  Sparkles,
  Shield,
  Clock,
  CheckCircle2,
  Star,
  Zap,
  Heart,
  Award,
  Users,
} from "lucide-react";
import {
  fadeInUp,
  staggerContainer,
  fadeInLeft,
  fadeInRight,
  scaleIn,
} from "../lib/animations";
import FAQ from "../components/FAQ";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-linear-to-br from-brown via-wine to-rose overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cream rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-taupe rounded-full blur-3xl" />
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container mx-auto px-6 py-24 lg:py-32 relative z-10"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={fadeInLeft}
            className="text-center lg:text-left"
          >
            <span className="inline-block px-4 py-2 bg-glass backdrop-blur-sm rounded-full text-brown font-inter text-sm mb-6">
              Advanced Laser Technology
            </span>
            <h1 className="font-georgia text-4xl md:text-5xl lg:text-6xl text-cream leading-tight mb-6">
              Target Pigmentation
              <span className="block text-taupe">Safely & Effectively</span>
            </h1>
            <p className="text-cream/80 font-inter text-lg md:text-xl mb-8 max-w-xl mx-auto lg:mx-0">
              Experience the MedLite C6 ND:YAG Laser treatment — trusted by
              dermatologists for safe elimination of pigmentation on Asian skin
              types.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-cream text-brown font-inter font-medium rounded-full hover:bg-light transition-colors"
              >
                Book Consultation
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-cream/50 text-cream font-inter font-medium rounded-full hover:bg-cream/10 transition-colors"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>

          <motion.div variants={fadeInRight} className="relative">
            <div className="relative aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-linear-to-br from-taupe/30 to-rose/30 rounded-3xl transform rotate-6" />
              <div className="absolute inset-0 bg-cover bg-[url('https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=800&q=80')] backdrop-blur-md rounded-3xl border border-cream/20 p-8 flex items-center justify-center"></div>
            </div>
          </motion.div>
        </div>

        {/* Stats Bar */}
        <motion.div
          variants={fadeInUp}
          className="mt-16 lg:mt-24 bg-glass backdrop-blur-md rounded-2xl p-6 md:p-8 border border-cream/20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "933+", label: "Happy Clients", icon: Users },
              { number: "20+", label: "Years Experience", icon: Award },
              { number: "98%", label: "Satisfaction Rate", icon: Heart },
              { number: "15min", label: "Quick Sessions", icon: Clock },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="w-8 h-8 text-wine mx-auto mb-2" />
                <p className="text-3xl md:text-4xl font-georgia text-wine mb-1">
                  {stat.number}
                </p>
                <p className="text-wine/70 font-inter text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

const OverviewSection = () => {
  return (
    <section className="py-24 bg-light">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container mx-auto px-6"
      >
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-taupe/20 rounded-full text-wine font-inter text-sm mb-4">
            About The Treatment
          </span>
          <h2 className="font-georgia text-3xl md:text-4xl lg:text-5xl text-brown mb-6">
            Overview of MedLite C6 ND:YAG Laser
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-wine to-rose mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={fadeInLeft}>
            <p className="text-brown/80 font-inter text-lg leading-relaxed mb-6">
              The MedLite C6 ND:YAG Laser is a non-ablative laser equipment
              famous for treating various pigmentation issues safely and
              effectively. The light is non-thermal high-energy light, sent in
              short bursts, selectively targeting melanin in the skin and
              fragmenting pigment particles without damage to surrounding
              tissue.
            </p>
            <p className="text-brown/80 font-inter text-lg leading-relaxed mb-8">
              This is an excellent anti-aging treatment for those who desire
              younger-looking skin. It assists in collagen growth and leaves the
              skin feeling much better overall.
            </p>

            <div className="flex flex-wrap gap-4">
              {["Non-Invasive", "Quick Recovery", "All Skin Types"].map(
                (tag, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-cream rounded-full text-brown font-inter text-sm border border-taupe/30"
                  >
                    {tag}
                  </span>
                ),
              )}
            </div>
          </motion.div>

          <motion.div variants={fadeInRight} className="grid grid-cols-2 gap-4">
            {[
              {
                icon: Zap,
                title: "Q-Switched Technology",
                desc: "Nanosecond energy pulses for precision",
              },
              {
                icon: Shield,
                title: "Safe for Asian Skin",
                desc: "Minimal risk of hyperpigmentation",
              },
              {
                icon: Clock,
                title: "Quick Sessions",
                desc: "15-30 minutes per treatment",
              },
              {
                icon: CheckCircle2,
                title: "Proven Results",
                desc: "Visible improvement in 2-3 sessions",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-cream p-6 rounded-2xl border border-taupe/20 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-wine/10 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-wine" />
                </div>
                <h3 className="font-georgia text-lg text-brown mb-2">
                  {item.title}
                </h3>
                <p className="text-brown/60 font-inter text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

const AdvantagesSection = () => {
  const advantages = [
    {
      title: "Precise Targeting",
      description:
        "Selectively targets melanin without affecting surrounding tissue for safer, more effective treatment.",
      icon: Sparkles,
    },
    {
      title: "Zero Downtime",
      description:
        "Return to your daily activities immediately after treatment with minimal redness.",
      icon: Clock,
    },
    {
      title: "Suitable for All Skin Tones",
      description:
        "Safe and effective for darker skin types with lower risk of post-inflammatory hyperpigmentation.",
      icon: Shield,
    },
    {
      title: "Collagen Stimulation",
      description:
        "Promotes natural collagen production for improved skin texture and tone.",
      icon: Heart,
    },
  ];

  return (
    <section className="py-24 bg-cream">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container mx-auto px-6"
      >
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-wine/10 rounded-full text-wine font-inter text-sm mb-4">
            Why Choose Us
          </span>
          <h2 className="font-georgia text-3xl md:text-4xl lg:text-5xl text-brown mb-6">
            Advantages Over Other Lasers
          </h2>
          <p className="text-brown/70 font-inter text-lg max-w-2xl mx-auto">
            MedLite C6 outperforms IPL and fractional lasers with precise
            targeting and minimal recovery time.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group bg-light p-8 rounded-3xl border border-taupe/20 hover:bg-white hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-linear-to-br from-wine to-rose rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <advantage.icon className="w-8 h-8 text-cream" />
              </div>
              <h3 className="font-georgia text-xl text-brown mb-3">
                {advantage.title}
              </h3>
              <p className="text-brown/60 font-inter">
                {advantage.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div variants={fadeInUp} className="text-center mt-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-wine text-cream font-inter font-medium rounded-full hover:bg-brown transition-colors"
          >
            Book an Appointment
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

const TreatmentsSection = () => {
  const treatments = [
    {
      category: "Sun Damage & Age Spots",
      description:
        "Destroy accumulated melanin for clearer, lighter skin appearance.",
      benefits: ["Freckle removal", "Even skin tone", "Long-lasting results"],
    },
    {
      category: "Hormonal Pigmentation (Melasma)",
      description: "Safe treatment for dark spots caused by hormonal changes.",
      benefits: [
        "Gentle approach",
        "Minimal irritation",
        "Progressive improvement",
      ],
    },
    {
      category: "Post-Inflammatory Hyperpigmentation",
      description:
        "Address dark marks left by acne, injuries, or other skin conditions.",
      benefits: ["Scar lightening", "Skin rejuvenation", "Boosted confidence"],
    },
  ];

  return (
    <section className="py-24 bg-linear-to-b from-light to-cream">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container mx-auto px-6"
      >
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-rose/20 rounded-full text-wine font-inter text-sm mb-4">
            Treatment Areas
          </span>
          <h2 className="font-georgia text-3xl md:text-4xl lg:text-5xl text-brown mb-6">
            Skin Concerns We Treat
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {treatments.map((treatment, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="h-3 bg-linear-to-r from-wine via-rose to-taupe" />
              <div className="p-8">
                <h3 className="font-georgia text-2xl text-brown mb-4">
                  {treatment.category}
                </h3>
                <p className="text-brown/70 font-inter mb-6">
                  {treatment.description}
                </p>
                <ul className="space-y-3">
                  {treatment.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-wine shrink-0" />
                      <span className="text-brown/80 font-inter">
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Mei Lin",
      text: "The treatment gently removed my pigmentation and age spots. My skin feels brighter now, and all the spots are gone!",
      rating: 5,
    },
    {
      name: "Rajesh Kaur",
      text: "I had very rough pigmentation, but after the MedLite C6 laser treatment, my skin feels rejuvenated. Highly recommended!",
      rating: 5,
    },
    {
      name: "Kenji Sato",
      text: "The MedLite C6 laser worked wonders on my skin. It has become more even, smooth, and clear now.",
      rating: 5,
    },
    {
      name: "Siti Mariam",
      text: "I am thankful to the entire team for treating my old age spots in just a few sessions. Highly recommended!",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 bg-brown">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container mx-auto px-6"
      >
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-cream/20 rounded-full text-cream font-inter text-sm mb-4">
            Testimonials
          </span>
          <h2 className="font-georgia text-3xl md:text-4xl lg:text-5xl text-cream mb-6">
            What Our Clients Say
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-glass backdrop-blur-md rounded-3xl p-6 border border-cream/20"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-taupe fill-taupe" />
                ))}
              </div>
              <p className="text-cream/90 font-inter mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-wine rounded-full flex items-center justify-center">
                  <span className="text-cream font-georgia">
                    {testimonial.name[0]}
                  </span>
                </div>
                <span className="text-cream font-inter font-medium">
                  {testimonial.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div variants={fadeInUp} className="text-center mt-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-cream text-brown font-inter font-medium rounded-full hover:bg-light transition-colors"
          >
            Book Your Session
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};
const CTASection = () => {
  return (
    <section className="py-24 bg-linear-to-br from-wine via-rose to-taupe">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container mx-auto px-6"
      >
        <motion.div
          variants={scaleIn}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="font-georgia text-3xl md:text-4xl lg:text-5xl text-cream mb-6">
            Ready to Transform Your Skin?
          </h2>
          <p className="text-cream/80 font-inter text-lg mb-8 max-w-2xl mx-auto">
            Book your consultation today and take the first step towards
            radiant, pigmentation-free skin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-cream text-brown font-inter font-medium rounded-full hover:bg-light transition-colors"
            >
              Get Free Consultation
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-cream text-cream font-inter font-medium rounded-full hover:bg-cream/10 transition-colors"
            >
              Call Us Now
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

const faqs = [
  {
    q: "Is MedLite C6 painful?",
    a: "The treatment feels like a warm snapping sensation and is usually well tolerated by most patients. Numbing cream can be applied for those with sensitive skin.",
  },
  {
    q: "How many sessions will I need?",
    a: "Typically, 4 to 6 sessions are recommended for optimal pigmentation treatment results. The exact number depends on your specific skin concerns.",
  },
  {
    q: "Can I go back to work immediately?",
    a: "Yes! There's minimal to no downtime. You can resume your daily activities right after the treatment.",
  },
  {
    q: "Is the treatment permanent?",
    a: "Results are long-lasting, but maintenance may be needed due to sun exposure or hormonal triggers. Proper skincare and sun protection help maintain results.",
  },
  {
    q: "How soon can I see results?",
    a: "Visible improvements usually appear after 2-3 sessions. Full results continue to develop over the course of your treatment plan.",
  },
  {
    q: "Is MedLite C6 suitable for all skin types?",
    a: "Yes, it's safe and effective for all skin tones, including darker skin. The technology is specifically designed to minimize risks for Asian skin types.",
  },
];

const PageMidlite = () => {
  return (
    <>
      <main className="overflow-hidden">
        <HeroSection />
        <OverviewSection />
        <AdvantagesSection />
        <TreatmentsSection />
        <TestimonialsSection />
        <FAQ data={faqs} />
        <CTASection />
      </main>
    </>
  );
};

export default PageMidlite;
