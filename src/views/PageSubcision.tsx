"use client";
import { motion } from "framer-motion";
import {
  Sparkles,
  Clock,
  CalendarDays,
  Timer,
  Users,
  Star,
  Award,
  Shield,
  Heart,
  Zap,
  Phone,
} from "lucide-react";
import {
  fadeInUp,
  staggerContainer,
  fadeInLeft,
  fadeInRight,
  scaleIn,
} from "../lib/animations";
import FAQ from "../components/FAQ";

const PageSubcision = () => {
  const treatmentStats = [
    { icon: Users, label: "Treated Area", value: "Face" },
    { icon: Clock, label: "Duration", value: "30 minutes" },
    { icon: CalendarDays, label: "Frequency", value: "1 session/month" },
    { icon: Timer, label: "Downtime", value: "Minimal" },
  ];

  const benefits = [
    {
      icon: Award,
      title: "Experienced Doctors",
      desc: "Professional aesthetic physicians with years of expertise",
    },
    {
      icon: Zap,
      title: "Advanced Technology",
      desc: "Latest dermatology and aesthetic medicine equipment",
    },
    {
      icon: Heart,
      title: "Personalized Care",
      desc: "Customized treatment plans for your unique needs",
    },
    {
      icon: Shield,
      title: "Safe & Trusted",
      desc: "Proven track record with highest safety standards",
    },
  ];

  const testimonials = [
    {
      name: "Amina Lee",
      text: "My scars are much less visible now thanks to Nexus' subcision treatment. I am so happy!",
      rating: 5,
    },
    {
      name: "Lily Tan",
      text: "I'm amazed with the results as my skin looks so good and smooth. All my acne scars are fading now.",
      rating: 5,
    },
    {
      name: "Siti Nur Aisyah",
      text: "The treatment is pain-free, just a little bit of discomfort. Highly recommended!",
      rating: 5,
    },
  ];

  const faqs = [
    {
      q: "What type of acne scars can subcision treat?",
      a: "Effective for rolling and boxcar scars, not ice-pick scars.",
    },
    {
      q: "Is the treatment painful?",
      a: "Minimal discomfort with local anesthesia. Soreness may occur after.",
    },
    {
      q: "How many sessions will I need?",
      a: "Typically 1 to 3 sessions spaced months apart.",
    },
    {
      q: "Can subcision be combined with other treatments?",
      a: "Yes, commonly with PRP, lasers, or microneedling for enhanced results.",
    },
    {
      q: "How long does the treatment take?",
      a: "Each session typically lasts between 30 to 60 minutes depending on the number of scars.",
    },
  ];

  return (
    <>
      <main className="bg-cream font-inter overflow-hidden">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-linear-to-br from-wine/10 via-cream to-rose/10" />
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-20 w-72 h-72 bg-wine rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-rose rounded-full blur-3xl" />
          </div>

          {/* Floating Decorative Elements */}
          <motion.div
            variants={scaleIn}
            initial="initial"
            animate="animate"
            className="absolute top-32 right-[15%] w-20 h-20 bg-wine/10 rounded-full backdrop-blur-sm"
          />
          <motion.div
            variants={scaleIn}
            initial="initial"
            animate="animate"
            style={{ animationDelay: "2s" }}
            className="absolute bottom-40 left-[10%] w-16 h-16 bg-rose/20 rounded-full backdrop-blur-sm"
          />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center max-w-4xl mx-auto"
            >
              {/* Badge */}
              <motion.div
                variants={fadeInUp}
                className="inline-flex items-center gap-2 bg-wine/10 border border-wine/20 rounded-full px-5 py-2 mb-8"
              >
                <Sparkles className="w-4 h-4 text-wine" />
                <span className="text-sm font-medium text-brown">
                  Premium Aesthetic Treatment
                </span>
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                variants={fadeInUp}
                className="font-georgia text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-brown leading-tight mb-6"
              >
                Subcision Treatment
                <span className="block text-wine mt-2">for Acne Scars</span>
              </motion.h1>

              {/* Subheading */}
              <motion.p
                variants={fadeInUp}
                className="text-taupe text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
              >
                Transform your skin with our revolutionary subcision treatment.
                Release tethered scars and reveal smoother, more confident you.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-wine text-light rounded-full font-medium text-lg shadow-lg shadow-wine/30 hover:shadow-xl hover:shadow-wine/40 transition-all duration-300"
                >
                  Book Appointment
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-glass border-2 border-wine/30 text-wine rounded-full font-medium text-lg hover:bg-wine/5 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Get in Touch
                </motion.button>
              </motion.div>

              {/* Stats Counter */}
              <motion.div
                variants={scaleIn}
                className="mt-16 inline-flex items-center gap-4 bg-linear-to-r from-wine to-rose p-1 rounded-2xl"
              >
                <div className="bg-cream/95 backdrop-blur-sm rounded-xl px-8 py-4 flex items-center gap-4">
                  <div className="w-12 h-12 bg-wine/10 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-wine" />
                  </div>
                  <div className="text-left">
                    <p className="text-3xl font-bold text-wine">431+</p>
                    <p className="text-sm text-taupe">Satisfied Clients</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-8 h-12 border-2 border-wine/30 rounded-full flex justify-center pt-2"
            >
              <div className="w-1.5 h-3 bg-wine/50 rounded-full" />
            </motion.div>
          </motion.div>
        </section>

        {/* What is Subcision Section */}
        <section className="py-20 lg:py-32 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.span
                  variants={fadeInUp}
                  className="text-wine font-medium tracking-wider uppercase text-sm"
                >
                  Understanding the Treatment
                </motion.span>
                <motion.h2
                  variants={fadeInUp}
                  className="font-georgia text-3xl sm:text-4xl lg:text-5xl text-brown mt-4 mb-6"
                >
                  What Is Subcision for Acne Scars?
                </motion.h2>
                <motion.div
                  variants={fadeInUp}
                  className="space-y-4 text-taupe leading-relaxed"
                >
                  <p>
                    Subcision is a minor, in-clinic surgical procedure designed
                    to improve the appearance of indented acne scars by breaking
                    the fibrous bands tethering the skin down.
                  </p>
                  <p>
                    These bands create the characteristic dips and depressions
                    of{" "}
                    <span className="text-wine font-medium">
                      rolling and boxcar scars
                    </span>
                    . Using a fine needle, our specialists release these
                    fibrotic strands, allowing the skin to rise and form new
                    collagen.
                  </p>
                  <p>
                    This process leads to progressive improvement in scar depth
                    and skin texture over time, offering long-term enhancement
                    in skin appearance.
                  </p>
                </motion.div>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative">
                  <div className="absolute -inset-4 bg-linear-to-br from-wine/20 to-rose/20 rounded-3xl blur-2xl" />
                  <div className="relative bg-light rounded-3xl p-8 lg:p-12 shadow-xl">
                    <div className="grid grid-cols-2 gap-6">
                      {treatmentStats.map((stat, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="text-center p-4 bg-cream rounded-2xl"
                        >
                          <div className="w-14 h-14 bg-wine/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                            <stat.icon className="w-7 h-7 text-wine" />
                          </div>
                          <p className="text-sm text-taupe mb-1">
                            {stat.label}
                          </p>
                          <p className="font-semibold text-brown">
                            {stat.value}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 lg:py-32 bg-light relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-rose/5 to-transparent" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <motion.span
                variants={fadeInUp}
                className="text-wine font-medium tracking-wider uppercase text-sm"
              >
                The Process
              </motion.span>
              <motion.h2
                variants={fadeInUp}
                className="font-georgia text-3xl sm:text-4xl lg:text-5xl text-brown mt-4 mb-6"
              >
                How Subcision Works
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-taupe leading-relaxed"
              >
                A carefully designed procedure that targets the root cause of
                depressed scars
              </motion.p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Preparation",
                  desc: "Local anaesthetic is applied to ensure your comfort throughout the procedure.",
                },
                {
                  step: "02",
                  title: "Treatment",
                  desc: "A specialized needle releases the fibrous tissue pulling your scar downward.",
                },
                {
                  step: "03",
                  title: "Healing",
                  desc: "Your body's natural healing activates collagen production for lasting results.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="group"
                >
                  <div className="bg-cream rounded-3xl p-8 h-full border border-taupe/10 hover:border-wine/30 transition-all duration-500 hover:shadow-xl hover:shadow-wine/10">
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-6xl font-georgia text-wine/20 group-hover:text-wine/40 transition-colors duration-500">
                        {item.step}
                      </span>
                      <div className="flex-1 h-px bg-linear-to-r from-wine/20 to-transparent" />
                    </div>
                    <h3 className="font-georgia text-2xl text-brown mb-4">
                      {item.title}
                    </h3>
                    <p className="text-taupe leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Scar Types Section */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <motion.span
                variants={fadeInUp}
                className="text-wine font-medium tracking-wider uppercase text-sm"
              >
                Treatment Scope
              </motion.span>
              <motion.h2
                variants={fadeInUp}
                className="font-georgia text-3xl sm:text-4xl lg:text-5xl text-brown mt-4 mb-6"
              >
                Types of Acne Scars Treated
              </motion.h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <motion.div
                variants={fadeInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-linear-to-br from-wine/5 to-rose/5 rounded-3xl p-8 lg:p-10 border border-wine/10"
              >
                <div className="w-16 h-16 bg-wine/10 rounded-2xl flex items-center justify-center mb-6">
                  <div
                    className="w-8 h-8 rounded-full bg-wine/30"
                    style={{
                      clipPath: "polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)",
                    }}
                  />
                </div>
                <h3 className="font-georgia text-2xl text-brown mb-4">
                  Rolling Scars
                </h3>
                <p className="text-taupe leading-relaxed mb-4">
                  These scars develop a rippled feel at the surface because of
                  bands of fibrous tissue below. Subcision deactivates these
                  bands so the skin becomes smooth over time.
                </p>
                <p className="text-sm text-wine font-medium">
                  Often combined with PRP therapy for enhanced results
                </p>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-linear-to-br from-rose/5 to-taupe/5 rounded-3xl p-8 lg:p-10 border border-rose/10"
              >
                <div className="w-16 h-16 bg-rose/10 rounded-2xl flex items-center justify-center mb-6">
                  <div className="w-8 h-8 bg-rose/30 rounded-sm" />
                </div>
                <h3 className="font-georgia text-2xl text-brown mb-4">
                  Boxcar Scars
                </h3>
                <p className="text-taupe leading-relaxed mb-4">
                  Boxcar scars appear as broad, angular depressions with
                  well-defined edges. Because they're often tethered to
                  underlying tissue, subcision is highly effective.
                </p>
                <p className="text-sm text-rose font-medium">
                  May benefit from chemical peels post-treatment
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 lg:py-32 bg-brown relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-linear(circle_at_30%_20%, var(--color-wine)_0%,_transparent_50%)]" />
            <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-linear(circle_at_70%_80%,var(--color-rose)_0%,transparent_50%)]" />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <motion.span
                variants={fadeInUp}
                className="text-rose font-medium tracking-wider uppercase text-sm"
              >
                Excellence in Care
              </motion.span>
              <motion.h2
                variants={fadeInUp}
                className="font-georgia text-3xl sm:text-4xl lg:text-5xl text-light mt-4 mb-6"
              >
                Why Choose Nexus Clinic?
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-cream/70 leading-relaxed"
              >
                Malaysia's leading provider of advanced skin care treatments,
                known for expertise, modern technology, and personalized patient
                care.
              </motion.p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="bg-light/10 backdrop-blur-sm rounded-2xl p-6 border border-light/10 hover:border-wine/30 transition-all duration-500 group"
                >
                  <div className="w-14 h-14 bg-wine/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-wine/30 transition-colors duration-500">
                    <benefit.icon className="w-7 h-7 text-light" />
                  </div>
                  <h3 className="font-semibold text-light text-lg mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-cream/60 text-sm leading-relaxed">
                    {benefit.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <motion.span
                variants={fadeInUp}
                className="text-wine font-medium tracking-wider uppercase text-sm"
              >
                Client Stories
              </motion.span>
              <motion.h2
                variants={fadeInUp}
                className="font-georgia text-3xl sm:text-4xl lg:text-5xl text-brown mt-4 mb-6"
              >
                What Our Clients Say
              </motion.h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="bg-light rounded-3xl p-8 border border-taupe/10 hover:shadow-xl hover:shadow-wine/5 transition-all duration-500"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-wine text-wine" />
                    ))}
                  </div>
                  <p className="text-taupe leading-relaxed mb-6 italic">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-linear-to-br from-wine to-rose rounded-full flex items-center justify-center text-light font-semibold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-brown">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-taupe">Verified Client</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQ data={faqs} />
      </main>
    </>
  );
};

export default PageSubcision;
