"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Shield,
  Clock,
  Users,
  ChevronDown,
  Phone,
  MessageCircle,
  Star,
  Zap,
  Droplets,
  Eye,
  Smile,
  ArrowRight,
  Check,
} from "lucide-react";
import {
  fadeInLeft,
  fadeInRight,
  fadeInUp,
  staggerContainer,
} from "../lib/animations";
import FAQ from "../components/FAQ";

function AnimatedCounter({ target, suffix = "" }: any) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const step = Math.ceil(target / 80);
          const timer = setInterval(() => {
            start += step;
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else setCount(start);
          }, 16);
        }
      },
      { threshold: 0.5 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);
  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

function FillerCard({ icon: Icon, title, desc }: any) {
  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
      className="group relative bg-light border border-taupe/20 rounded-2xl p-6 hover:border-wine/40 hover:shadow-[0_16px_48px_rgba(140,79,88,0.12)] transition-all duration-400"
    >
      <div className="w-11 h-11 rounded-xl bg-wine/10 flex items-center justify-center mb-4 group-hover:bg-wine/20 transition-colors duration-300">
        <Icon size={20} className="text-wine" />
      </div>
      <h3 className="font-['Georgia',serif] text-brown text-lg mb-2">
        {title}
      </h3>
      <p className="text-brown/65 text-sm leading-relaxed">{desc}</p>
    </motion.div>
  );
}

export default function PageDermalFiler() {
  const faqs = [
    {
      q: "How do dermal fillers work?",
      a: "Dermal fillers are injected beneath the skin to restore lost volume, smooth lines, and refine facial contours. They plump the skin naturally, acting as structural support where collagen and fat have diminished.",
    },
    {
      q: "Is the treatment painful?",
      a: "The procedure is minimally uncomfortable. Most fillers contain lidocaine for added comfort, and topical numbing cream is applied beforehand. Clients typically describe it as a mild pinch.",
    },
    {
      q: "What areas can dermal fillers treat?",
      a: "Fillers effectively treat cheeks, lips, under-eyes (tear trough), jawline, chin, nasolabial folds, and temples—providing volume restoration, definition, and wrinkle reduction.",
    },
    {
      q: "Who is not suitable for the treatment?",
      a: "Pregnant or breastfeeding women, those with severe allergies, active skin infections, or certain autoimmune conditions should consult their doctor before treatment.",
    },
    {
      q: "How long do results last?",
      a: "Effects typically last 9–18 months depending on the filler type, area treated, and individual metabolism. Annual maintenance is generally recommended for optimal results.",
    },
    {
      q: "What is the recovery time?",
      a: "There is minimal downtime. Mild swelling or bruising may occur for 24–48 hours. Most clients resume normal activities the same day. Results are visible immediately and improve over a week.",
    },
    {
      q: "What are the side effects?",
      a: "Common, temporary side effects include mild bruising, swelling, or tenderness at the injection site. Serious complications are rare when performed by trained medical professionals.",
    },
    {
      q: "How do I choose the right filler?",
      a: "During your consultation, our licensed doctors assess your facial anatomy and goals to recommend the most suitable filler type and placement for natural, harmonious results.",
    },
  ];

  const treatments = [
    {
      icon: Smile,
      title: "Lip Enhancement",
      desc: "Add definition, volume, and hydration for naturally fuller lips with precise, symmetrical results.",
    },
    {
      icon: Star,
      title: "Cheek Contouring",
      desc: "Restore youthful cheekbone definition and lift mid-face volume for a refreshed appearance.",
    },
    {
      icon: Eye,
      title: "Under-Eye Hollows",
      desc: "Gently fill tear trough depressions to reduce dark circles and a tired appearance.",
    },
    {
      icon: Sparkles,
      title: "Jawline Definition",
      desc: "Sharpen and define the jawline for improved facial balance and a sculpted profile.",
    },
    {
      icon: Droplets,
      title: "Nasolabial Folds",
      desc: "Soften deep smile lines and parenthesis lines for a smoother, more youthful expression.",
    },
    {
      icon: Zap,
      title: "Temple Rejuvenation",
      desc: "Restore volume to hollow temples for improved facial framing and a natural, rested look.",
    },
  ];

  const fillerTypes = [
    {
      title: "Hyaluronic Acid (HA)",
      desc: "Most popular—naturally found in the body, fully reversible, retains moisture for a plump, hydrated result. Ideal for lips, cheeks, and fine lines.",
      icon: Droplets,
    },
    {
      title: "Calcium Hydroxylapatite",
      desc: "Stimulates collagen production for deeper volume correction. Longer-lasting with a natural feel in mid-face and cheek areas.",
      icon: Shield,
    },
    {
      title: "Poly-L-Lactic Acid",
      desc: "Biodegradable synthetic filler that gradually rebuilds collagen over several months, delivering subtle, progressive results.",
      icon: Zap,
    },
    {
      title: "PMMA Microspheres",
      desc: "Semi-permanent filler used for deeper wrinkles and acne scars, providing structural support for long-lasting correction.",
      icon: Star,
    },
  ];

  const aftercare = [
    "Avoid strenuous exercise and alcohol for 24 hours",
    "Do not touch or massage treated areas",
    "Apply cold compresses gently for any swelling",
    "Use gentle skincare products and SPF daily",
    "Attend your follow-up review after 2 weeks",
  ];

  return (
    <>
      <main className="min-h-screen bg-wine">
        <section
          className="relative min-h-screen flex col items-center justify-center overflow-hidden px-5"
          style={{
            background: "linear-gradient(160deg,brown0%,wine55%,rose100%)",
          }}
        >
          {/* Decorative grain overlay */}
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
              backgroundSize: "200px",
            }}
          />
          {/* Large decorative circle */}
          <div className="absolute top-[-18%] right-[-12%] w-162.5 h-162.5 rounded-full bg-rose/20 blur-3xl pointer-events-none" />
          <div className="absolute bottom-[-20%] left-[-10%] w-125 h-125 rounded-full bg-wine/20 blur-3xl pointer-events-none" />

          {/* Announcement bar */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="absolute top-6 left-1/2 -translate-x-1/2 w-full max-w-xl"
          ></motion.div>

          {/* Hero text */}
          <div className="relative z-10 max-w-4xl mx-auto text-center pt-24 pb-12">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="uppercase tracking-[0.28em] text-taupe text-xs mb-6"
            >
              Nexus Clinic · Kuala Lumpur
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.55,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="font-['Georgia',serif] text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[1.08] tracking-tight mb-8"
            >
              Dermal Fillers for
              <br />
              <em className="not-italic text-cream/70">Volume, Contour</em>
              <br />
              <span className="relative inline-block">
                & Youthful Radiance
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{
                    delay: 1.2,
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="absolute bottom-0 left-0 w-full h-0.75 bg-taupe/70 origin-left rounded"
                />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.7 }}
              className="text-white/70 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-12"
            >
              One of Malaysia's most sought-after non-surgical aesthetic
              treatments. Instant, natural-looking results with minimal
              downtime—performed by experienced aesthetic practitioners.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="flex col sm:row gap-4 justify-center"
            >
              <a
                href="https://api.leadconnectorhq.com/widget/booking/jcLccLXPVMWo5FAG6cUC"
                className="group inline-flex items-center justify-center gap-2.5 bg-cream text-brown hover:bg-white px-7 py-4 rounded-full font-medium text-sm transition-all duration-300 hover:shadow-[0_8px_32px_rgba(0,0,0,0.25)]"
              >
                Book an Appointment
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
              </a>
              <a
                href="https://api.whatsapp.com/send/?phone=60168245699"
                className="inline-flex items-center justify-center gap-2.5 bg-white/10 backdrop-blur-md border border-white/30 text-white hover:bg-white/20 px-7 py-4 rounded-full font-medium text-sm transition-all duration-300"
              >
                <MessageCircle size={16} />
                WhatsApp Us
              </a>
            </motion.div>
          </div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.7 }}
            className="relative z-10 w-full max-w-2xl mx-auto"
          >
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-8 py-6 grid grid-cols-3 gap-6">
              {[
                {
                  val: <AnimatedCounter target={1125} />,
                  label: "Clients Treated",
                },
                { val: "9–18", label: "Months Duration" },
                { val: "RM 1,200", label: "Starting From" },
              ].map(({ val, label }) => (
                <div key={label} className="text-center">
                  <div className="text-white text-2xl md:text-3xl font-['Georgia',serif] mb-1">
                    {val}
                  </div>
                  <div className="text-white/55 text-[11px] uppercase tracking-widest">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Scroll cue */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex col items-center gap-2"
          >
            <span className="text-white/40 text-[10px] uppercase tracking-[0.2em]">
              Scroll
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                repeat: Infinity,
                duration: 1.6,
                ease: "easeInOut",
              }}
            >
              <ChevronDown size={18} className="text-white/40" />
            </motion.div>
          </motion.div>
        </section>

        <section className="py-24 px-5" style={{ backgroundColor: "#f5f5f5" }}>
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={fadeInLeft}
              >
                <p className="text-taupe uppercase tracking-[0.22em] text-xs mb-4">
                  Understanding the Treatment
                </p>
                <h2 className="font-['Georgia',serif] text-3xl md:text-4xl text-brown leading-tight mb-6">
                  What Are Dermal Fillers?
                </h2>
                <p className="text-brown/70 leading-relaxed mb-5">
                  Dermal fillers are gel-like substances injected beneath the
                  skin to restore lost volume, smooth out lines, and refine
                  facial contours. Unlike surgical facelifts, fillers offer a
                  quick, non-invasive solution with no anesthesia or long
                  recovery periods.
                </p>
                <p className="text-brown/70 leading-relaxed mb-8">
                  As we age, the skin gradually loses collagen, elastin, and
                  fat—leading to sagging, hollowing, and wrinkle formation.
                  Dermal fillers act as structural support, replenishing volume
                  and rejuvenating facial features naturally.
                </p>
                <div className="space-y-3">
                  {[
                    "Instant, visible results",
                    "No general anaesthesia required",
                    "Minimal downtime — resume activities same day",
                    "Reversible with hyaluronidase (HA fillers)",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-wine/15 flex items-center justify-center shrink-0">
                        <Check size={11} className="text-wine" />
                      </div>
                      <span className="text-brown/75 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={fadeInRight}
                className="relative"
              >
                {/* Decorative card stack */}
                <div className="relative h-105">
                  <div className="absolute top-8 right-0 w-[85%] h-full rounded-2xl bg-wine/8 border border-wine/15" />
                  <div className="absolute top-0 left-0 w-[90%] h-[95%] rounded-2xl overflow-hidden bg-brown">
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(135deg,wine0%,brown60%,rose100%)",
                        opacity: 0.9,
                      }}
                    />
                    <div className="relative z-10 h-full flex col justify-between p-8">
                      <div>
                        <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center mb-6">
                          <Sparkles size={18} className="text-cream" />
                        </div>
                        <p className="font-['Georgia',serif] text-white/90 text-2xl leading-snug mb-4">
                          "Science and artistry combined to deliver youthful,
                          natural-looking results."
                        </p>
                        <p className="text-white/50 text-sm">
                          Nexus Clinic Aesthetic Philosophy
                        </p>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        {[
                          { n: "10+", l: "Years Experience" },
                          { n: "100%", l: "Certified Doctors" },
                        ].map(({ n, l }) => (
                          <div key={l} className="bg-white/10 rounded-xl p-4">
                            <div className="font-['Georgia',serif] text-white text-2xl">
                              {n}
                            </div>
                            <div className="text-white/55 text-xs mt-1">
                              {l}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-24 px-5" style={{ backgroundColor: "#f5f5f5" }}>
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeInUp}
              className="text-center mb-16"
            >
              <p className="text-taupe uppercase tracking-[0.22em] text-xs mb-4">
                Where We Treat
              </p>
              <h2 className="font-['Georgia',serif] text-3xl md:text-4xl text-brown">
                Treatment Areas
              </h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={staggerContainer}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {treatments.map((t) => (
                <FillerCard key={t.title} {...t} />
              ))}
            </motion.div>
          </div>
        </section>

        <section className="py-24 px-5 bg-cream">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeInUp}
              className="text-center mb-16"
            >
              <p className="text-taupe uppercase tracking-[0.22em] text-xs mb-4">
                Our Range
              </p>
              <h2 className="font-['Georgia',serif] text-3xl md:text-4xl text-brown mb-4">
                Types of Dermal Fillers
              </h2>
              <p className="text-brown/60 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
                Our medical team selects the optimal filler based on your facial
                anatomy, skin condition, and desired outcome during your
                personalised consultation.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={staggerContainer}
              className="grid sm:grid-cols-2 gap-5"
            >
              {fillerTypes.map((f) => (
                <motion.div
                  key={f.title}
                  variants={fadeInUp}
                  whileHover={{ y: -4 }}
                  className="group flex gap-5 bg-cream border border-taupe/20 rounded-2xl p-6 hover:border-wine/40 hover:shadow-[0_12px_40px_rgba(140,79,88,0.1)] transition-all duration-350"
                >
                  <div className="w-12 h-12 rounded-xl bg-wine/12 flex items-center justify-center shrink-0 group-hover:bg-wine/22 transition-colors duration-300">
                    <f.icon size={20} className="text-wine" />
                  </div>
                  <div>
                    <h3 className="font-['Georgia',serif] text-brown text-lg mb-2">
                      {f.title}
                    </h3>
                    <p className="text-brown/65 text-sm leading-relaxed">
                      {f.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── PRICING & WHO IT'S FOR ────────────────────────────────────────── */}
        <section
          className="py-24 px-5 relative overflow-hidden"
          style={{ background: "linear-gradient(145deg,brownwine" }}
        >
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
              backgroundSize: "200px",
            }}
          />

          <div className="max-w-6xl mx-auto relative z-10">
            <div className="grid md:grid-cols-2 gap-16 items-start">
              {/* Pricing */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeInLeft}
              >
                <p className="text-taupe uppercase tracking-[0.22em] text-xs mb-4">
                  Transparent Pricing
                </p>
                <h2 className="font-['Georgia',serif] text-3xl md:text-4xl text-white leading-tight mb-8">
                  Pricing & Packages
                </h2>
                <div className="space-y-4">
                  {[
                    {
                      label: "Single Syringe (HA Filler)",
                      price: "From RM 1,200",
                      note: "Per syringe — medica-grade approved brands",
                    },
                    {
                      label: "Custom Multi-Area Package",
                      price: "Custom Quote",
                      note: "Lips + cheeks + under-eye combinations",
                    },
                    {
                      label: "PRP Combination Package",
                      price: "Special Rate",
                      note: "Fillers paired with PRP for enhanced results",
                    },
                  ].map(({ label, price, note }) => (
                    <div
                      key={label}
                      className="bg-white/10 backdrop-blur border border-white/15 rounded-2xl px-6 py-5 flex items-center justify-between gap-4"
                    >
                      <div>
                        <div className="text-white font-medium text-sm mb-1">
                          {label}
                        </div>
                        <div className="text-white/50 text-xs">{note}</div>
                      </div>
                      <div className="text-cream font-['Georgia',serif] text-lg shrink-0">
                        {price}
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-white/45 text-xs mt-4 leading-relaxed">
                  Final pricing determined after personalised consultation. All
                  treatments performed by licensed aesthetic doctors.
                </p>
              </motion.div>

              {/* Who it's for */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeInRight}
              >
                <p className="text-taupe uppercase tracking-[0.22em] text-xs mb-4">
                  Ideal Candidates
                </p>
                <h2 className="font-['Georgia',serif] text-3xl md:text-4xl text-white leading-tight mb-8">
                  Who Should Consider Dermal Fillers?
                </h2>
                <p className="text-white/65 mb-6 leading-relaxed text-sm md:text-base">
                  Dermal fillers are ideal for those seeking non-surgical facial
                  enhancement, from subtle refinement to more noticeable
                  rejuvenation.
                </p>
                <div className="space-y-3">
                  {[
                    "Individuals in their late 20s to early 60s",
                    "Those with mild to moderate facial volume loss",
                    "Anyone seeking to enhance features without surgery",
                    "Clients looking to delay the need for invasive procedures",
                    "People wanting to maintain a natural, refreshed appearance",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-taupe/30 flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={10} className="text-cream" />
                      </div>
                      <span className="text-white/75 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── AFTERCARE ──────── */}
        <section className="py-24 px-5 bg-cream">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeInLeft}
              >
                <p className="text-taupe uppercase tracking-[0.22em] text-xs mb-4">
                  Post-Treatment
                </p>
                <h2 className="font-['Georgia',serif] text-3xl md:text-4xl text-brown leading-tight mb-6">
                  Aftercare & Recovery
                </h2>
                <p className="text-brown/70 leading-relaxed mb-8">
                  Though the treatment requires virtually no downtime, following
                  basic aftercare guidelines ensures the best possible results.
                  Results are visible immediately and improve further over the
                  following days as any minor swelling subsides.
                </p>
                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="space-y-3"
                >
                  {aftercare.map((item, i) => (
                    <motion.div
                      key={item}
                      variants={fadeInUp}
                      className="flex items-center gap-4"
                    >
                      <div className="w-7 h-7 rounded-full border border-wine/30 flex items-center justify-center shrink-0 text-wine font-['Georgia',serif] text-sm">
                        {i + 1}
                      </div>
                      <span className="text-brown/75 text-sm">{item}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeInRight}
              >
                <div className="bg-light border border-taupe/20 rounded-3xl p-8 md:p-10">
                  <div className="flex items-start gap-4 mb-8">
                    <div className="w-12 h-12 rounded-xl bg-wine/10 flex items-center justify-center shrink-0">
                      <Shield size={20} className="text-wine" />
                    </div>
                    <div>
                      <h3 className="font-['Georgia',serif] text-brown text-xl mb-2">
                        Why Choose Nexus Clinic?
                      </h3>
                      <p className="text-brown/65 text-sm leading-relaxed">
                        Nexus Clinic in Kuala Lumpur is a renowned name in
                        aesthetic medicine—combining science and artistry for
                        natural, personalised results.
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: Users, label: "Licensed Aesthetic Doctors" },
                      { icon: Shield, label: "KKM-Approved Filler Brands" },
                      { icon: Star, label: "Advanced Filler Techniques" },
                      { icon: Clock, label: "45–60 Min Procedure" },
                    ].map(({ icon: Icon, label }) => (
                      <div
                        key={label}
                        className="bg-cream rounded-xl p-4 flex items-start gap-3"
                      >
                        <Icon size={16} className="text-wine mt-0.5 shrink-0" />
                        <span className="text-brown/75 text-xs leading-snug">
                          {label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── FAQ ────────────── */}
        <FAQ data={faqs} />

        {/* ── CTA BANNER ─────── */}
        <section
          className="py-20 px-5 relative overflow-hidden"
          style={{
            background: "linear-gradient(125deg,wine0%,brown100%)",
          }}
        >
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-rose/20 blur-3xl pointer-events-none" />
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.p
                variants={fadeInUp}
                className="text-taupe uppercase tracking-[0.22em] text-xs mb-4"
              >
                Start Your Journey
              </motion.p>
              <motion.h2
                variants={fadeInUp}
                className="font-['Georgia',serif] text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-6"
              >
                Restore Youthful Radiance.
                <br />
                <span className="text-cream/70">Without Surgery.</span>
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-white/60 max-w-lg mx-auto mb-10 leading-relaxed text-sm md:text-base"
              >
                Schedule a personalised consultation with our aesthetic doctors
                and take the first step toward natural, confident results.
              </motion.p>
              <motion.div
                variants={fadeInUp}
                className="flex col sm:row gap-4 justify-center"
              >
                <a
                  href="https://api.leadconnectorhq.com/widget/booking/jcLccLXPVMWo5FAG6cUC"
                  className="group inline-flex items-center justify-center gap-2.5 bg-cream text-brown hover:bg-white px-7 py-4 rounded-full font-medium text-sm transition-all duration-300 hover:shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
                >
                  Book an Appointment
                  <ArrowRight
                    size={15}
                    className="group-hover:translate-x-1 transition-transform duration-300"
                  />
                </a>
                <a
                  href="tel:0321635699"
                  className="inline-flex items-center justify-center gap-2.5 bg-white/10 border border-white/25 text-white hover:bg-white/20 px-7 py-4 rounded-full font-medium text-sm transition-all duration-300"
                >
                  <Phone size={15} />
                  03-2163 5699
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
