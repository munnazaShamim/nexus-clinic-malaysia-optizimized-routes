"use client";
import { motion } from "framer-motion";
import {
  Sparkles,
  ChevronDown,
  Star,
  Clock,
  Shield,
  Zap,
  Sun,
  Droplets,
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
const benefits = [
  {
    icon: Sparkles,
    label: "Radiant Glow",
    desc: "Removes dead skin cells to reveal luminous, fresh skin beneath.",
  },
  {
    icon: Zap,
    label: "Collagen Boost",
    desc: "LED wavelengths stimulate natural collagen production for lasting firmness.",
  },
  {
    icon: Shield,
    label: "Acne Clarity",
    desc: "Blue light eliminates acne-causing bacteria at the source.",
  },
  {
    icon: Sun,
    label: "Even Tone",
    desc: "Fades hyperpigmentation and sun damage for uniform radiance.",
  },
  {
    icon: Droplets,
    label: "Deep Hydration",
    desc: "Preps and seals moisture into freshly exfoliated skin layers.",
  },
  {
    icon: Clock,
    label: "Zero Downtime",
    desc: "Return to your day immediately — no recovery period required.",
  },
];

const process = [
  {
    step: "01",
    title: "Skin Consultation",
    desc: "Our doctor analyses your unique skin profile and curates a personalised treatment plan.",
  },
  {
    step: "02",
    title: "Skin Peel",
    desc: "A medical-grade peel dissolves impurities, unclogs pores, and primes the skin canvas.",
  },
  {
    step: "03",
    title: "LED Phototherapy",
    desc: "Targeted light wavelengths penetrate deeper, accelerating repair and renewal.",
  },
  {
    step: "04",
    title: "Post-Care Ritual",
    desc: "A soothing finish locks in results and protects your refreshed complexion.",
  },
];

const faqs = [
  {
    q: "What is Skin Peel?",
    a: "A medical-grade chemical exfoliation that removes dead skin cells, unclogs pores, and promotes skin renewal — improving texture, tone, and clarity.",
  },
  {
    q: "What is LED Phototherapy?",
    a: "A non-invasive treatment using calibrated light energy to stimulate the skin's natural repair process — addressing acne, fine lines, and redness without heat or discomfort.",
  },
  {
    q: "How do they work together?",
    a: "The Skin Peel preps by removing dead cells and impurities, allowing LED Phototherapy to penetrate deeper and work more effectively on targeted skin concerns.",
  },
  {
    q: "Is it suitable for all skin types?",
    a: "Yes. Both treatments are fully customisable and can be tailored for every skin type, including sensitive skin.",
  },
  {
    q: "Is there any downtime?",
    a: "Minimal to none. Some clients may experience slight redness after the Skin Peel which subsides within a few hours.",
  },
  {
    q: "How long is a session?",
    a: "A combined session typically takes 45–60 minutes, making it an ideal lunchtime treatment.",
  },
  {
    q: "How many sessions are needed?",
    a: "Many clients notice improvement after one session. A series of treatments is recommended for optimal, long-lasting results.",
  },
  {
    q: "What skin concerns are addressed?",
    a: "Acne & acne scars, hyperpigmentation, dull or uneven skin tone, fine lines & wrinkles, and redness & inflammation.",
  },
];

const ledTypes = [
  {
    color: "Red",
    hex: "#C0524A",
    benefit: "Anti-Ageing & Collagen Boost",
    desc: "Penetrates deep to stimulate fibroblasts and firm the skin.",
  },
  {
    color: "Blue",
    hex: "#4A6FA5",
    benefit: "Acne & Bacteria Control",
    desc: "Targets P. acnes bacteria to clear active breakouts.",
  },
  {
    color: "Yellow",
    hex: "#C4915A",
    benefit: "Redness & Healing",
    desc: "Reduces inflammation and promotes accelerated skin repair.",
  },
];

const testimonials = [
  {
    name: "Nicole Y.",
    handle: "@nicoleyie",
    stars: 5,
    text: "My skin has never looked this clear. The combination of skin peel and LED left me glowing — no filter needed!",
  },
  {
    name: "Kahmon C.",
    handle: "@kahmonc",
    stars: 5,
    text: "I was sceptical at first, but after my first session the results were undeniable. The redness was minimal and faded within hours.",
  },
  {
    name: "Sarah L.",
    handle: "@sarahlovesskin",
    stars: 5,
    text: "Nexus Clinic is in a league of its own. Professional, warm, and the results speak for themselves.",
  },
];

export default function PageSkinPeelLED() {
  return (
    <>
      <main className="bg-light font-['Inter',sans-serif] overflow-x-hidden">
        {/* ── HERO ──────────────────────────────────────────────────────── */}
        <section className="relative min-h-screen flex items-center overflow-hidden bg-brown">
          {/* Decorative grain overlay */}
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none z-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
              backgroundRepeat: "repeat",
            }}
          />
          {/* Warm linear wash */}
          <div className="absolute inset-0 bg-linear-to-br from-wine/40 via-transparent to-brown/80 z-0" />
          {/* Decorative circle */}
          <div className="absolute -right-32 top-1/2 -translate-y-1/2 w-150 h-150 rounded-full border border-taupe/20 z-0" />
          <div className="absolute -right-16 top-1/2 -translate-y-1/2 w-100 h-100 rounded-full border border-taupe/15 z-0" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-32 grid lg:grid-cols-2 gap-16 items-center w-full">
            {/* Left */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div
                variants={fadeInUp}
                className="flex items-center gap-2 mb-6"
              >
                <div className="h-px w-10 bg-rose" />
                <span className="text-rose uppercase tracking-[0.25em] text-xs font-medium font-['Inter',sans-serif]">
                  Nexus Clinic · KL
                </span>
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="font-['Georgia',serif] text-cream text-5xl md:text-6xl xl:text-7xl leading-[1.05] mb-6"
              >
                Skin Peel
                <br />
                <em className="text-rose">&amp; LED</em>
                <br />
                Phototherapy
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-taupe text-lg md:text-xl leading-relaxed mb-10 max-w-md"
              >
                A clinical duo that exfoliates, heals, and illuminates — in a
                single 60-minute session with zero downtime.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
                <a
                  href="https://wa.link/q64h1l"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-3 bg-wine hover:bg-rose text-light px-8 py-4 rounded-full text-sm font-medium tracking-wide transition-all duration-300 shadow-lg shadow-wine/30"
                >
                  Claim RM100 Voucher
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform duration-300"
                  />
                </a>
                <a
                  href="#process"
                  className="inline-flex items-center gap-3 border border-taupe/40 text-taupe hover:border-cream hover:text-cream px-8 py-4 rounded-full text-sm font-medium tracking-wide transition-all duration-300"
                >
                  How It Works
                  <ChevronDown size={16} />
                </a>
              </motion.div>
            </motion.div>

            {/* Right — stat cards */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { num: "10+", label: "Years of Clinical Excellence" },
                { num: "50k+", label: "Happy Patients Treated" },
                { num: "60 min", label: "Per Combined Session" },
                { num: "0", label: "Days of Downtime" },
              ].map((s, i) => (
                <motion.div
                  key={i}
                  variants={scaleIn}
                  className="bg-[rgba(255,255,255,0.07)] backdrop-blur-sm border border-taupe/20 rounded-2xl p-6 hover:border-rose/50 transition-colors duration-300"
                >
                  <p className="font-['Georgia',serif] text-4xl text-cream mb-1">
                    {s.num}
                  </p>
                  <p className="text-taupe text-xs leading-snug">{s.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Scroll cue */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 text-taupe/50"
          >
            <ChevronDown size={24} />
          </motion.div>
        </section>

        {/* ── INTRO QUOTE ──────────────────────────────────────────────── */}
        <section className="bg-cream py-20 px-6">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="font-['Georgia',serif] text-brown text-2xl md:text-3xl xl:text-4xl leading-relaxed italic">
              "Beauty is not just about looking good — it has to evoke the depth
              of human emotion
              <span className="text-wine not-italic font-normal">
                {" "}
                within and beyond.
              </span>
              "
            </p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <div className="h-px w-12 bg-taupe" />
              <span className="text-taupe text-sm tracking-widest uppercase">
                Nexus Clinic
              </span>
              <div className="h-px w-12 bg-taupe" />
            </div>
          </motion.div>
        </section>

        {/* ── BENEFITS ─────────────────────────────────────────────────── */}
        <section className="py-24 px-6 bg-light">
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="mb-16 grid md:grid-cols-2 gap-8 items-end"
            >
              <motion.div variants={fadeInLeft}>
                <span className="text-rose uppercase tracking-[0.2em] text-xs mb-3 block">
                  Why This Duo
                </span>
                <h2 className="font-['Georgia',serif] text-brown text-4xl md:text-5xl leading-tight">
                  Transformative Results,
                  <br />
                  <em className="text-wine">Scientifically Backed</em>
                </h2>
              </motion.div>
              <motion.p
                variants={fadeInRight}
                className="text-taupe text-base md:text-lg leading-relaxed"
              >
                Each treatment amplifies the other — the Peel prepares, the LED
                perfects. Together they address the full spectrum of your skin's
                needs in one visit.
              </motion.p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {benefits.map((b, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="group bg-white border border-cream rounded-2xl p-7 hover:border-wine/30 hover:shadow-xl hover:shadow-wine/5 transition-all duration-500 cursor-default"
                >
                  <div className="w-10 h-10 rounded-full bg-cream group-hover:bg-wine/10 flex items-center justify-center mb-5 transition-colors duration-300">
                    <b.icon size={18} className="text-wine" />
                  </div>
                  <h3 className="font-['Georgia',serif] text-brown text-lg mb-2">
                    {b.label}
                  </h3>
                  <p className="text-taupe text-sm leading-relaxed">{b.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── LED LIGHT TYPES ──────────────────────────────────────────── */}
        <section className="py-24 px-6 bg-brown overflow-hidden relative">
          <div className="absolute inset-0 bg-linear-to-r from-wine/20 to-transparent" />
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
            >
              <motion.div variants={fadeInUp} className="text-center mb-16">
                <span className="text-rose uppercase tracking-[0.2em] text-xs mb-3 block">
                  The Science
                </span>
                <h2 className="font-['Georgia',serif] text-cream text-4xl md:text-5xl">
                  Three Wavelengths,
                  <br />
                  <em className="text-rose">One Perfect Skin</em>
                </h2>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-6">
                {ledTypes.map((led, i) => (
                  <motion.div
                    key={i}
                    variants={scaleIn}
                    className="relative rounded-2xl overflow-hidden group"
                    style={{
                      background: `linear-linear(135deg, ${led.hex}22 0%, transparent 100%)`,
                    }}
                  >
                    <div className="border border-white/10 rounded-2xl p-8 h-full hover:border-white/20 transition-colors duration-300">
                      {/* Glow orb */}
                      <div className="w-16 h-16 rounded-full mb-6 opacity-80 group-hover:opacity-100 transition-opacity duration-300 bg-[url(https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80)] bg-cover bg-center mx-auto" />
                      <p className="text-taupe text-xs uppercase tracking-widest mb-1">
                        {led.color} Light
                      </p>
                      <h3 className="font-['Georgia',serif] text-cream text-xl mb-3">
                        {led.benefit}
                      </h3>
                      <p className="text-taupe text-sm leading-relaxed">
                        {led.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── PROCESS ──────────────────────────────────────────────────── */}
        <section id="process" className="py-24 px-6 bg-light">
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="text-center mb-16"
            >
              <span className="text-rose uppercase tracking-[0.2em] text-xs mb-3 block">
                Your Journey
              </span>
              <h2 className="font-['Georgia',serif] text-brown text-4xl md:text-5xl">
                Four Steps to
                <br />
                <em className="text-wine">Luminous Skin</em>
              </h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {process.map((p, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="relative group"
                >
                  {/* Connector line */}
                  {i < process.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-linear-to-r from-taupe/40 to-transparent z-0 -translate-x-1/2" />
                  )}
                  <div className="bg-white border border-cream rounded-2xl p-7 hover:border-wine/30 hover:shadow-xl hover:shadow-wine/5 transition-all duration-500 h-full">
                    <span className="font-['Georgia',serif] text-wine/30 text-5xl font-bold leading-none block mb-4">
                      {p.step}
                    </span>
                    <h3 className="font-['Georgia',serif] text-brown text-lg mb-3">
                      {p.title}
                    </h3>
                    <p className="text-taupe text-sm leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── TESTIMONIALS ─────────────────────────────────────────────── */}
        <section className="py-24 px-6 bg-cream">
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="text-center mb-16"
            >
              <span className="text-rose uppercase tracking-[0.2em] text-xs mb-3 block">
                Real Stories
              </span>
              <h2 className="font-['Georgia',serif] text-brown text-4xl md:text-5xl">
                Clients Who <em className="text-wine">Glow</em>
              </h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="grid md:grid-cols-3 gap-6"
            >
              {testimonials.map((t, i) => (
                <motion.div
                  key={i}
                  variants={scaleIn}
                  className="bg-white rounded-2xl p-8 border border-cream hover:border-taupe/30 hover:shadow-xl hover:shadow-wine/5 transition-all duration-500"
                >
                  <div className="flex gap-1 mb-5">
                    {Array(t.stars)
                      .fill(0)
                      .map((_, s) => (
                        <Star
                          key={s}
                          size={14}
                          className="fill-rose text-rose"
                        />
                      ))}
                  </div>
                  <p className="font-['Georgia',serif] text-brown text-base leading-relaxed mb-6 italic">
                    "{t.text}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-wine/15 flex items-center justify-center">
                      <span className="text-wine font-medium text-sm">
                        {t.name[0]}
                      </span>
                    </div>
                    <div>
                      <p className="text-brown text-sm font-medium">{t.name}</p>
                      <p className="text-taupe text-xs">{t.handle}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────────────── */}
        <FAQ data={faqs} />

        {/* ── CTA BANNER ───────────────────────────────────────────────── */}
        <section className="py-28 px-6 bg-wine relative overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-br from-brown/60 to-transparent" />
          {/* Decorative rings */}
          <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full border border-white/10" />
          <div className="absolute -left-8 top-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-white/10" />
          <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full border border-white/10" />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="relative z-10 max-w-3xl mx-auto text-center"
          >
            <motion.div variants={fadeInUp}>
              <span className="text-cream/60 uppercase tracking-[0.25em] text-xs mb-4 block">
                Limited Offer
              </span>
              <h2 className="font-['Georgia',serif] text-light text-4xl md:text-5xl xl:text-6xl leading-tight mb-4">
                Claim Your
                <br />
                <em>RM100 Voucher Today</em>
              </h2>
              <p className="text-cream/70 text-base md:text-lg leading-relaxed mb-10 max-w-xl mx-auto">
                Chat with our doctor now and take the first step toward skin
                you'll love. Your personalised skin journey starts here.
              </p>
            </motion.div>

            <motion.div variants={scaleIn}>
              <a
                href="https://wa.link/q64h1l"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-3 bg-light hover:bg-cream text-wine px-10 py-5 rounded-full font-medium text-base tracking-wide transition-all duration-300 shadow-2xl shadow-brown/40"
              >
                Chat With Us on WhatsApp
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
              </a>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="mt-10 flex flex-wrap justify-center gap-6 text-cream/50 text-xs uppercase tracking-widest"
            >
              <span>Doctor-Led</span>
              <span>·</span>
              <span>Award-Winning Clinic</span>
              <span>·</span>
              <span>Kuala Lumpur</span>
            </motion.div>
          </motion.div>
        </section>
      </main>
    </>
  );
}
