"use client";
import { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Droplets,
  ShieldCheck,
  Clock,
  ChevronDown,
  Star,
  ArrowRight,
  Users,
  Zap,
  Sun,
  MessageCircle,
  CalendarCheck,
} from "lucide-react";
import {
  fadeInLeft,
  fadeInRight,
  fadeInUp,
  scaleIn,
  staggerContainer,
} from "../lib/animations";
import FAQ from "../components/FAQ";

function useCounter(target: number, isVisible: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const duration = 1800;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start = Math.min(start + step, target);
      setCount(start);
      if (start >= target) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [isVisible, target]);
  return count;
}

function Section({ children, className = "" }: any) {
  return (
    <section className={`relative px-4 sm:px-8 lg:px-16 ${className}`}>
      {children}
    </section>
  );
}

function ElegantDivider({ light = false }) {
  return (
    <div className="flex items-center justify-center gap-4 my-2">
      <div className={`h-px w-16 ${light ? "bg-light/30" : "bg-taupe/40"}`} />
      <div
        className={`w-1.5 h-1.5 rounded-full ${light ? "bg-rose/60" : "bg-wine"}`}
      />
      <div className={`h-px w-16 ${light ? "bg-light/30" : "bg-taupe/40"}`} />
    </div>
  );
}

function PillLabel({ children, light = false }: any) {
  return (
    <span
      className={`inline-block tracking-[0.2em] text-[10px] uppercase font-medium px-4 py-1.5 rounded-full border mb-4 ${
        light ? "border-light/20 text-light/70" : "border-wine/30 text-wine"
      }`}
    >
      {children}
    </span>
  );
}

function CTAButton({
  children,
  href = "#",
  variant = "primary",
  icon,
}: {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "light" | "outline";
  icon?: React.ReactNode;
}) {
  const base =
    "inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium tracking-wide transition-all duration-300 group";
  const styles = {
    primary: "bg-wine text-light hover:bg-brown shadow-lg shadow-wine/20",
    secondary: "border border-wine text-wine hover:bg-wine hover:text-light",
    light:
      "bg-light/10 backdrop-blur-sm border border-light/20 text-light hover:bg-light/20",
    outline: "border border-light/30 text-light hover:border-light/60",
  };
  return (
    <a
      href={href}
      className={`${base} ${styles[variant]}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
      {icon && (
        <span className="transition-transform duration-300 group-hover:translate-x-1">
          {icon}
        </span>
      )}
    </a>
  );
}

function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex col items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(160deg,brown0%,wine45%,taupe100%)",
      }}
    >
      {/* Grain overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px",
        }}
      />

      {/* Decorative circles */}
      <div className="absolute top-[-10%] right-[-5%] w-130 h-130 rounded-full border border-light/8 pointer-events-none" />
      <div className="absolute top-[5%] right-[0%] w-95 h-95 rounded-full border border-light/5 pointer-events-none" />
      <div className="absolute bottom-[-15%] left-[-8%] w-115 h-115 rounded-full border border-light/6 pointer-events-none" />
      <motion.div
        className="absolute top-[20%] right-[12%] w-3 h-3 rounded-full bg-rose/50"
        animate={{ y: [0, -18, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[30%] left-[10%] w-2 h-2 rounded-full bg-cream/40"
        animate={{ y: [0, 14, 0], opacity: [0.4, 0.9, 0.4] }}
        transition={{
          duration: 5.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Hero content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp}>
            <PillLabel light>Nexus Clinic · Kuala Lumpur</PillLabel>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-light mb-6"
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "clamp(2.4rem, 6vw, 5rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              fontWeight: 400,
            }}
          >
            Rediscover Your
            <br />
            <em className="font-semibold text-cream/85 italic">
              Skin's Radiance
            </em>
          </motion.h1>

          <ElegantDivider light />

          <motion.p
            variants={fadeInUp}
            className="text-cream/70 max-w-xl mx-auto mt-6 leading-relaxed"
            style={{ fontFamily: "Georgia, serif", fontSize: "1.05rem" }}
          >
            Mesotherapy at Nexus Clinic delivers a bespoke infusion of vitamins,
            hyaluronic acid &amp; amino acids directly into the dermis — for
            skin that glows, firms, and flourishes.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex wrap gap-4 justify-center mt-10"
          >
            <CTAButton
              href="https://api.leadconnectorhq.com/widget/booking/jcLccLXPVMWo5FAG6cUC"
              icon={<CalendarCheck size={16} />}
            >
              Book an Appointment
            </CTAButton>
            <CTAButton
              href="https://api.whatsapp.com/send/?phone=60168245699"
              variant="outline"
              icon={<MessageCircle size={16} />}
            >
              Chat with Our Doctor
            </CTAButton>
          </motion.div>

          {/* Stat pill */}
          <motion.div variants={scaleIn} className="mt-14 flex justify-center">
            <div
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full"
              style={{
                background: "rgba(255,255,255,0.08)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.14)",
              }}
            >
              <Users size={16} className="text-rose" />
              <span className="text-light/80 text-sm">
                <strong className="text-light font-semibold">1,048+</strong>{" "}
                satisfied clients and counting
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown size={22} className="text-light/30" />
      </motion.div>
    </section>
  );
}

function WhatIsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <Section className="py-24 bg-light">
      <div ref={ref} className="max-w-6xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Text */}
          <motion.div variants={fadeInLeft}>
            <PillLabel>What Is Mesotherapy</PillLabel>
            <h2
              className="text-brown mb-5"
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)",
                lineHeight: 1.2,
                fontWeight: 400,
              }}
            >
              A Non-Surgical Path to{" "}
              <em className="text-wine">Luminous Skin</em>
            </h2>
            <ElegantDivider />
            <p className="text-brown/70 mt-5 leading-relaxed text-[0.97rem]">
              Mesotherapy is a minimally invasive procedure that delivers a
              precisely formulated cocktail of vitamins, enzymes, amino acids
              and hyaluronic acid directly into the dermis — the skin's middle
              layer.
            </p>
            <p className="text-brown/70 mt-4 leading-relaxed text-[0.97rem]">
              By stimulating collagen production and accelerating cellular
              metabolism, it addresses dullness, pigmentation, dryness and early
              signs of aging without surgery or extended downtime.
            </p>
            <p className="text-brown/70 mt-4 leading-relaxed text-[0.97rem]">
              At Nexus Clinic, every Mesotherapy plan is tailored to your unique
              skin — ensuring the most efficient results with the shortest
              possible downtime.
            </p>
            <div className="mt-8">
              <CTAButton
                href="https://api.leadconnectorhq.com/widget/booking/jcLccLXPVMWo5FAG6cUC"
                variant="secondary"
                icon={<ArrowRight size={15} />}
              >
                Start Your Journey
              </CTAButton>
            </div>
          </motion.div>

          {/* Visual card */}
          <motion.div variants={fadeInRight} className="relative">
            <div
              className="rounded-3xl p-8 relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg,brown0%,wine100%)",
              }}
            >
              {/* bg dot pattern */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    "radial-gradient(circle,light1px, transparent 1px)",
                  backgroundSize: "24px 24px",
                }}
              />
              <div className="relative z-10 space-y-6">
                {[
                  {
                    icon: <Sparkles size={20} />,
                    title: "Vitamins & Antioxidants",
                    desc: "Fights free radicals and restores skin luminosity.",
                  },
                  {
                    icon: <Droplets size={20} />,
                    title: "Hyaluronic Acid",
                    desc: "Deep hydration that plumps and firms the skin.",
                  },
                  {
                    icon: <Zap size={20} />,
                    title: "Amino Acids & Peptides",
                    desc: "Rebuilds collagen and reverses aging at a cellular level.",
                  },
                  {
                    icon: <Sun size={20} />,
                    title: "Brightening Complex",
                    desc: "Reduces pigmentation and uneven skin tone.",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={fadeInUp}
                    className="flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-full bg-light/12 flex items-center justify-center text-rose shrink-0 mt-0.5">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-light font-medium text-sm">
                        {item.title}
                      </p>
                      <p className="text-light/55 text-[0.82rem] mt-0.5">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            {/* Floating accent */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-2xl border border-taupe/30 bg-cream" />
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
}

function StatsBanner() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const clients = useCounter(1048, inView);

  const stats = [
    { value: `${clients}+`, label: "Satisfied Clients" },
    { value: "4–6", label: "Sessions Typical" },
    { value: "24h", label: "Recovery Time" },
    { value: "100%", label: "Non-Surgical" },
  ];

  return (
    <div ref={ref} className="py-14 px-4 bg-brown">
      <motion.div
        className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8"
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {stats.map((s, i) => (
          <motion.div key={i} variants={scaleIn} className="text-center">
            <p
              className="text-light mb-1"
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "clamp(2rem, 4vw, 2.8rem)",
                fontWeight: 400,
              }}
            >
              {s.value}
            </p>
            <p className="text-taupe text-xs tracking-widest uppercase">
              {s.label}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

function ConditionsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const conditions = [
    {
      icon: <Sparkles size={22} />,
      title: "Hydration & Firming",
      desc: "Deep hyaluronic acid hydration restores elasticity, especially around eyes and cheeks — no surgery required.",
    },
    {
      icon: <Sun size={22} />,
      title: "Pigmentation & Dull Skin",
      desc: "Targets melanin deposits to clarify uneven tone caused by UV damage, inflammation or aging.",
    },
    {
      icon: <Zap size={22} />,
      title: "Fine Lines & Anti-Aging",
      desc: "Peptides and antioxidants injected into the deep dermis tighten skin and visibly reduce wrinkles over time.",
    },
    {
      icon: <Droplets size={22} />,
      title: "Dryness & Texture",
      desc: "Vitamins and enzymes revive dehydrated skin, smoothing texture and restoring a healthy glow.",
    },
    {
      icon: <ShieldCheck size={22} />,
      title: "Sagging & Large Pores",
      desc: "Collagen stimulation firms loose skin and minimises pore appearance without invasive procedures.",
    },
    {
      icon: <Clock size={22} />,
      title: "Minimal Downtime",
      desc: "Mild redness resolves within 24 hours. Return to your day immediately — life doesn't pause for beauty.",
    },
  ];

  return (
    <Section className="py-24 bg-cream">
      <div ref={ref} className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-14"
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={fadeInUp}>
            <PillLabel>Conditions Treated</PillLabel>
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="text-brown"
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
              fontWeight: 400,
              lineHeight: 1.25,
            }}
          >
            What Mesotherapy Can <em className="text-wine">Transform</em>
          </motion.h2>
          <ElegantDivider />
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {conditions.map((c, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="group bg-light rounded-2xl p-7 border border-taupe/20 cursor-default"
              style={{ transition: "box-shadow 0.3s" }}
            >
              <div
                className="w-11 h-11 rounded-xl mb-5 flex items-center justify-center text-wine group-hover:bg-wine group-hover:text-light transition-all duration-300"
                style={{ background: "rgba(140,79,88,0.09)" }}
              >
                {c.icon}
              </div>
              <h3
                className="text-brown mb-2 font-medium"
                style={{ fontFamily: "Georgia, serif", fontSize: "1.05rem" }}
              >
                {c.title}
              </h3>
              <p className="text-brown/60 text-sm leading-relaxed">{c.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}

function ProcessSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const steps = [
    {
      num: "01",
      title: "Skin Analysis",
      desc: "A thorough consultation assesses your skin type, concerns and goals before any treatment begins.",
    },
    {
      num: "02",
      title: "Numbing",
      desc: "A topical numbing cream is applied to ensure maximum comfort throughout the session.",
    },
    {
      num: "03",
      title: "Micro-Injections",
      desc: "Using a mesogun or ultra-fine needles, your bespoke serum is delivered into the dermis.",
    },
    {
      num: "04",
      title: "Aftercare Guidance",
      desc: "Personalised aftercare — sunscreen, gentle skincare, and avoidance of alcohol for 24 hours.",
    },
  ];

  return (
    <Section
      className="py-24"
      style={{
        background: "linear-gradient(160deg,brown0%,wine100%)",
      }}
    >
      <div ref={ref} className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-14"
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={fadeInUp}>
            <PillLabel light>Treatment Process</PillLabel>
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="text-light"
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
              fontWeight: 400,
              lineHeight: 1.25,
            }}
          >
            Your Journey to <em className="text-cream/75">Radiant Skin</em>
          </motion.h2>
          <ElegantDivider light />
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {steps.map((s, i) => (
            <motion.div
              key={i}
              variants={scaleIn}
              className="relative p-6 rounded-2xl"
              style={{
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.1)",
                backdropFilter: "blur(8px)",
              }}
            >
              <p
                className="text-rose/60 mb-4"
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "2.4rem",
                  fontWeight: 400,
                  lineHeight: 1,
                }}
              >
                {s.num}
              </p>
              <h3 className="text-light font-medium mb-2 text-[0.95rem]">
                {s.title}
              </h3>
              <p className="text-light/50 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-12"
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <CTAButton
            href="https://api.leadconnectorhq.com/widget/booking/jcLccLXPVMWo5FAG6cUC"
            variant="light"
            icon={<CalendarCheck size={16} />}
          >
            Reserve Your Session
          </CTAButton>
        </motion.div>
      </div>
    </Section>
  );
}

const testimonials = [
  {
    name: "Rajhan Nathan",
    text: "Mesotherapy for the face is a very effective and safe treatment for various skin issues such as acne or hyperpigmentation. It is noninvasive, so it is safe for everyone.",
    rating: 5,
  },
  {
    name: "Siti Aminah",
    text: "The results were mindblowing. There was minimal downtime and recovery was fast. I am so happy with my new smooth and clean skin. Everyone must try this at least once.",
    rating: 5,
  },
  {
    name: "Chen Wei Lin",
    text: "I was skeptical at first but after 4 sessions my pigmentation has visibly faded and my skin looks years younger. The doctors at Nexus are truly professional.",
    rating: 5,
  },
];

function TestimonialsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setActive((p) => (p + 1) % testimonials.length),
      5000,
    );
    return () => clearInterval(t);
  }, []);

  return (
    <Section className="py-24 bg-light">
      <div ref={ref} className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-12"
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={fadeInUp}>
            <PillLabel>Client Reviews</PillLabel>
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="text-brown"
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
              fontWeight: 400,
            }}
          >
            Voices of <em className="text-wine">Real Transformation</em>
          </motion.h2>
          <ElegantDivider />
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-3xl p-10 relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg,brown0%,wine100%)",
            }}
          >
            <div
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage:
                  "radial-gradient(circle,light1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            />
            <div className="relative z-10">
              <div className="flex mb-4">
                {Array.from({ length: testimonials[active].rating }).map(
                  (_, i) => (
                    <Star
                      key={i}
                      size={16}
                      fill="currentColor"
                      className="text-rose"
                    />
                  ),
                )}
              </div>
              <blockquote
                className="text-light/85 leading-relaxed mb-6"
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "1.1rem",
                  fontStyle: "italic",
                }}
              >
                "{testimonials[active].text}"
              </blockquote>
              <p className="text-taupe text-sm font-medium tracking-wide">
                — {testimonials[active].name}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={` ${i === active ? "bg-rose" : "bg-taupe"} transition-all duration-300 rounded-full`}
              style={{
                width: i === active ? "28px" : "8px",
                height: "8px",
                opacity: i === active ? 1 : 0.4,
              }}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}

const faqs = [
  {
    q: "Is mesotherapy painful?",
    a: "A numbing cream is applied prior to treatment. Most patients feel only a mild pricking or tingling sensation during the micro-injections.",
  },
  {
    q: "How many sessions are needed?",
    a: "Typically 4 to 6 sessions spaced 2–3 weeks apart are recommended. Visible improvements usually begin after the second session.",
  },
  {
    q: "What is the downtime?",
    a: "Mild swelling or redness subsides within 24 hours. You can resume daily activities immediately after your appointment.",
  },
  {
    q: "Can mesotherapy treat pigmentation?",
    a: "Yes. Mesotherapy effectively targets melanin deposits — especially when combined with complementary therapies like cold electrophoresis.",
  },
  {
    q: "How many sessions are needed for pigmentation?",
    a: "Most patients require 4 to 6 sessions spaced 2–3 weeks apart for optimal pigmentation results, with maintenance sessions every few months.",
  },
];

function CTABanner() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <Section className="py-20 bg-light">
      <motion.div
        ref={ref}
        className="max-w-4xl mx-auto rounded-3xl p-14 text-center relative overflow-hidden"
        style={{
          background: "linear-gradient(145deg,brown0%,wine60%,rose100%)",
        }}
        variants={scaleIn}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle,light1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />
        <div className="relative z-10">
          <PillLabel light>Limited Offer</PillLabel>
          <h2
            className="text-light mb-3"
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
              fontWeight: 400,
            }}
          >
            Begin Your Skin Transformation
          </h2>
          <p className="text-light/60 mb-8 text-sm">
            Chat with our doctor today and claim your{" "}
            <strong className="text-light/80">RM100 voucher</strong> —
            exclusively for new patients.
          </p>
          <div className="flex wrap gap-4 justify-center">
            <CTAButton
              href="https://api.leadconnectorhq.com/widget/booking/jcLccLXPVMWo5FAG6cUC"
              icon={<CalendarCheck size={16} />}
            >
              Book an Appointment
            </CTAButton>
            <CTAButton
              href="https://api.whatsapp.com/send/?phone=60168245699"
              variant="outline"
              icon={<MessageCircle size={16} />}
            >
              WhatsApp Our Doctor
            </CTAButton>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}

export default function MesotherapyPage() {
  return (
    <>
      <main
        style={{ fontFamily: "Inter, system-ui, sans-serif" }}
        className="bg-light"
      >
        <HeroSection />
        <WhatIsSection />
        <StatsBanner />
        <ConditionsSection />
        <ProcessSection />
        <TestimonialsSection />
        <FAQ data={faqs} />
        <CTABanner />
      </main>
    </>
  );
}
