"use client";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, scaleIn } from "../lib/animations";
import {
  Sparkles,
  Clock,
  Shield,
  Star,
  Droplets,
  Zap,
  Heart,
  Users,
} from "lucide-react";
import FAQ from "../components/FAQ";

const PageMicroderMabrasion = () => {
  const benefits = [
    {
      icon: Droplets,
      title: "Deep Exfoliation",
      desc: "Removes dead skin cells and unclogs pores for clearer skin",
    },
    {
      icon: Zap,
      title: "Skin Regeneration",
      desc: "Stimulates collagen production for firmer, youthful appearance",
    },
    {
      icon: Heart,
      title: "Gentle Treatment",
      desc: "Non-invasive procedure suitable for all skin types",
    },
    {
      icon: Sparkles,
      title: "Instant Glow",
      desc: "Immediate visible results with smoother skin texture",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Consultation",
      desc: "Our specialist examines your skin and discusses your goals",
    },
    {
      step: "02",
      title: "Preparation",
      desc: "Gentle cleansing to prepare your skin for treatment",
    },
    {
      step: "03",
      title: "Treatment",
      desc: "Diamond-tip exfoliation with vacuum suction",
    },
    {
      step: "04",
      title: "Aftercare",
      desc: "Hydrating serum application and sun protection advice",
    },
  ];

  const testimonials = [
    {
      name: "Aisha Binti Rahman",
      text: "I am very satisfied with the results. The treatment was almost pain-free, and I noticed results in just a few days.",
      rating: 5,
    },
    {
      name: "Mei Ling",
      text: "All the doctors and surgeons at Nexus Clinic are trained and highly professional. They gave me the best treatment ever.",
      rating: 5,
    },
    {
      name: "Siti Nur Aisyah",
      text: "My skin tone has become better now. My scars are reduced and I now have clearer and smoother skin.",
      rating: 5,
    },
  ];

  const faqs = [
    {
      q: "Is microdermabrasion suitable for active acne?",
      a: "Yes, particularly effective when inflammation is minimal.",
    },
    {
      q: "How often should I get microdermabrasion?",
      a: "4 to 6 sessions spaced 2–3 weeks apart for optimal results.",
    },
    {
      q: "Does it hurt or cause peeling?",
      a: "It's painless. Some mild flaking may occur within 24-48 hours.",
    },
    {
      q: "Can it be combined with other treatments?",
      a: "Yes, often combined with chemical peels or LED light therapy.",
    },
    {
      q: "When will I see results?",
      a: "Most people notice smoother, glowing skin after the first session.",
    },
  ];

  return (
    <>
      <main className="bg-cream min-h-screen font-inter overflow-hidden">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center">
          <div className="absolute inset-0 bg-linear-to-br from-wine/10 via-transparent to-rose/10" />
          <div className="absolute top-20 right-20 w-96 h-96 bg-rose/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-wine/10 rounded-full blur-3xl" />

          <div className="container mx-auto px-6 lg:px-20 relative z-10">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <div>
                <motion.span
                  variants={fadeInUp}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-wine/10 text-wine rounded-full text-sm font-medium mb-6"
                >
                  <Sparkles className="w-4 h-4" />
                  Premium Skin Treatment
                </motion.span>

                <motion.h1
                  variants={fadeInUp}
                  className="font-georgia text-5xl lg:text-7xl text-brown leading-tight mb-6"
                >
                  Reveal Your
                  <span className="block text-wine italic">Radiant Skin</span>
                </motion.h1>

                <motion.p
                  variants={fadeInUp}
                  className="text-taupe text-lg lg:text-xl leading-relaxed mb-8 max-w-lg"
                >
                  Experience the transformative power of microdermabrasion. A
                  gentle, non-invasive treatment that unveils your skin's
                  natural luminosity.
                </motion.p>

                <motion.div
                  variants={fadeInUp}
                  className="flex flex-wrap gap-4"
                >
                  <button className="px-8 py-4 bg-wine text-light rounded-full font-medium hover:bg-brown transition-all duration-300 shadow-lg shadow-wine/25 hover:shadow-xl hover:shadow-wine/30 hover:-translate-y-1">
                    Book Consultation
                  </button>
                  <button className="px-8 py-4 border-2 border-wine/30 text-wine rounded-full font-medium hover:bg-wine/5 transition-all duration-300">
                    Learn More
                  </button>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  className="flex items-center gap-8 mt-12"
                >
                  <div className="text-center">
                    <p className="text-3xl font-georgia text-wine">1,087+</p>
                    <p className="text-sm text-taupe">Happy Clients</p>
                  </div>
                  <div className="w-px h-12 bg-taupe/30" />
                  <div className="text-center">
                    <p className="text-3xl font-georgia text-wine">20+</p>
                    <p className="text-sm text-taupe">Years Experience</p>
                  </div>
                  <div className="w-px h-12 bg-taupe/30" />
                  <div className="text-center">
                    <p className="text-3xl font-georgia text-wine">5★</p>
                    <p className="text-sm text-taupe">Rating</p>
                  </div>
                </motion.div>
              </div>

              <motion.div variants={scaleIn} className="relative">
                <div className="relative rounded-[3rem] overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&q=80"
                    alt="Microdermabrasion Treatment"
                    className="w-full h-150 object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-brown/40 via-transparent to-transparent" />
                </div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="absolute -left-8 top-1/4 bg-glass backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white/20"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-wine/20 rounded-full flex items-center justify-center">
                      <Shield className="w-6 h-6 text-wine" />
                    </div>
                    <div>
                      <p className="font-medium text-brown">Safe & Gentle</p>
                      <p className="text-sm text-taupe">FDA Approved</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 }}
                  className="absolute -right-8 bottom-1/4 bg-glass backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white/20"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-rose/20 rounded-full flex items-center justify-center">
                      <Clock className="w-6 h-6 text-rose" />
                    </div>
                    <div>
                      <p className="font-medium text-brown">30-45 mins</p>
                      <p className="text-sm text-taupe">Per Session</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* What Is Section */}
        <section className="py-24 bg-light">
          <div className="container mx-auto px-6 lg:px-20">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <motion.span
                variants={fadeInUp}
                className="text-wine font-medium tracking-wider uppercase text-sm"
              >
                The Treatment
              </motion.span>
              <motion.h2
                variants={fadeInUp}
                className="font-georgia text-4xl lg:text-5xl text-brown mt-4 mb-8"
              >
                What is Microdermabrasion?
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-taupe text-lg leading-relaxed"
              >
                Microdermabrasion is a non-invasive cosmetic procedure that uses
                fine crystals or a diamond-tipped wand to gently exfoliate the
                skin's surface. This treatment removes dead skin cells, unclogs
                pores, and promotes cell turnover, revealing fresher, more
                radiant skin beneath. It's the perfect solution for those
                seeking clearer skin without invasive procedures.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 bg-cream relative">
          <div className="absolute top-0 left-0 w-full h-32 bg-linear-to-b from-light to-transparent" />

          <div className="container mx-auto px-6 lg:px-20">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <motion.span
                variants={fadeInUp}
                className="text-wine font-medium tracking-wider uppercase text-sm"
              >
                Why Choose Us
              </motion.span>
              <motion.h2
                variants={fadeInUp}
                className="font-georgia text-4xl lg:text-5xl text-brown mt-4"
              >
                Treatment Benefits
              </motion.h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -10 }}
                  className="group bg-light rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-transparent hover:border-wine/10"
                >
                  <div className="w-16 h-16 bg-wine/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-wine group-hover:scale-110 transition-all duration-500">
                    <benefit.icon className="w-8 h-8 text-wine group-hover:text-light transition-colors duration-500" />
                  </div>
                  <h3 className="font-georgia text-xl text-brown mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-taupe leading-relaxed">{benefit.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 bg-brown text-light relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-wine/20 blur-3xl" />

          <div className="container mx-auto px-6 lg:px-20 relative z-10">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <motion.span
                variants={fadeInUp}
                className="text-rose font-medium tracking-wider uppercase text-sm"
              >
                The Journey
              </motion.span>
              <motion.h2
                variants={fadeInUp}
                className="font-georgia text-4xl lg:text-5xl mt-4"
              >
                Treatment Process
              </motion.h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {process.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="relative"
                >
                  <div className="text-7xl font-georgia text-wine/30 mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-georgia text-2xl mb-3">{item.title}</h3>
                  <p className="text-cream/70 leading-relaxed">{item.desc}</p>
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-8 right-0 w-1/2 h-px bg-linear-to-r from-wine/50 to-transparent" />
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-24 bg-light">
          <div className="container mx-auto px-6 lg:px-20">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <motion.span
                variants={fadeInUp}
                className="text-wine font-medium tracking-wider uppercase text-sm"
              >
                Testimonials
              </motion.span>
              <motion.h2
                variants={fadeInUp}
                className="font-georgia text-4xl lg:text-5xl text-brown mt-4"
              >
                What Our Clients Say
              </motion.h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-8"
            >
              {testimonials.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                  className="bg-cream rounded-3xl p-8 shadow-sm border border-wine/5"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-wine text-wine" />
                    ))}
                  </div>
                  <p className="text-taupe leading-relaxed mb-6 italic">
                    "{item.text}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-wine/20 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-wine" />
                    </div>
                    <div>
                      <p className="font-medium text-brown">{item.name}</p>
                      <p className="text-sm text-taupe">Verified Client</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQ data={faqs} />

        {/* CTA Section */}
        <section className="py-24 bg-wine relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-40 h-40 border border-light rounded-full" />
            <div className="absolute bottom-10 right-10 w-60 h-60 border border-light rounded-full" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-light rounded-full" />
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="container mx-auto px-6 lg:px-20 text-center relative z-10"
          >
            <motion.h2
              variants={fadeInUp}
              className="font-georgia text-4xl lg:text-6xl text-light mb-6"
            >
              Ready to Transform
              <br />
              Your Skin?
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-cream/80 text-lg max-w-2xl mx-auto mb-10"
            >
              Book your consultation today and take the first step towards
              radiant, healthy-looking skin.
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap justify-center gap-4"
            >
              <button className="px-10 py-4 bg-light text-wine rounded-full font-medium hover:bg-cream transition-all duration-300 shadow-lg hover:-translate-y-1">
                Book Appointment
              </button>
              <button className="px-10 py-4 border-2 border-light/30 text-light rounded-full font-medium hover:bg-light/10 transition-all duration-300">
                Contact Us
              </button>
            </motion.div>
          </motion.div>
        </section>
      </main>
    </>
  );
};

export default PageMicroderMabrasion;
