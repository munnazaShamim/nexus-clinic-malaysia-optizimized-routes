"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowUpRight, Sparkles } from "lucide-react";
import {
  fadeInUp,
  staggerContainer,
  fadeInLeft,
  fadeInRight,
  scaleIn,
} from "../lib/animations";


const treatments = [
  {
    id: "acne",
    title: "Active Acne & Acne Scars",
    subtitle: "The Face",
    number: "01",
    items: [
      //   {
      //     name: "Fractional CO₂ Laser",
      //     href: "/fractional-laser-resurfacing",
      //   },
      {
        name: "LED Photomodulation Therapy",
        href: "/led-phototherapy/",
      },
      //   {
      //     name: "Dermaroller",
      //     href: "/dermaroller-microneedling-for-active-acne-acne-scar/",
      //   },
      //   { name: "Skin Peel", href: "#" },
      //   {
      //     name: "Platelet Rich Plasma (PRP)",
      //     href: "/platelet-rich-plasma-therapy-prp/",
      //   },
      {
        name: "Subcision",
        href: "/subcision/",
      },
      {
        name: "Microdermabrasion",
        href: "/microdermabrasion/",
      },
    ],
  },
  {
    id: "pigmentation",
    title: "Pigmentation & Age Spot",
    subtitle: "Clarity Restored",
    number: "02",
    items: [
      {
        name: "Medlite C6 NdYAG Laser",
        href: "/medlite/",
      },
      {
        name: "Skin Peel",
        href: "/chemical-peel/",
      },
      {
        name: "Platelet Rich Plasma (PRP)",
        href: "/prp-regenerative/",
      },
      {
        name: "Mesobrightening",
        href: "/mesobrightening/",
      },
      {
        name: "Cryocell Cold Electrophoresis",
        href: "/cryocell-cold-electrophoresis-for-pigmentation-age-spots-2/",
      },
    ],
  },
  {
    id: "wrinkles",
    title: "Wrinkles & Fine Lines",
    subtitle: "Time Reversed",
    number: "03",
    items: [
      {
        name: "Dermal Filler",
        href: "/dermal-fillers/",
      },
      //   {
      //     name: "Fractional CO₂ Laser",
      //     href: "/fractional-co2-laser-treatment-skin-resurfacing-in-malaysia/",
      //   },
      {
        name: "Mesotherapy",
        href: "/mesotherapy/",
      },
      //   {
      //     name: "Dermaroller",
      //     href: "/dermaroller-microneedling-fine-line/",
      //   },
      {
        name: "Skin Peel",
        href: "/skin-peel-led/",
      },
      {
        name: "Non-Surgical Thread Lift",
        href: "/non-surgical-thread-lift/",
      },
      {
        name: "Platelet Rich Plasma (PRP)",
        href: "/platelet-rich-plasma-prp-for-wrinkles/",
      },
    ],
  },
  {
    id: "saggy",
    title: "Saggy Skin",
    subtitle: "Lifted & Defined",
    number: "04",
    items: [
      {
        name: "Candela Gentle YAG Laser",
        href: "/hair-removal/",
      },
      {
        name: "Non-Surgical Thread Lift",
        href: "/non-surgical-thread-lift/",
      },
      {
        name: "Ultraformer (HIFU)",
        href: "/ultraformer/",
      },
      {
        name: "Ion Magnum Facelift",
        href: "/ion-magnum-facelift/",
      },
    ],
  },
  {
    id: "sculpting",
    title: "Facial Sculpting & Contouring",
    subtitle: "Art Meets Science",
    number: "05",
    items: [
      {
        name: "Dermal Filler",
        href: "/dermal-fillers-cost/",
      },
      {
        name: "Non-Surgical Thread Lift",
        href: "/non-surgical-thread-lift/",
      },
      {
        name: "Nose Augmentation",
        href: "/nose-augmentation/",
      },
      {
        name: "Lip Enhancement",
        href: "/lip-enhancement/",
      },
      {
        name: "Chin Augmentation",
        href: "/chin-augmentation-mentoplasty/",
      },
      {
        name: "Cheek Sculpting",
        href: "/cheek-augmentation/",
      },
      {
        name: "BrowLift",
        href: "/browlift/",
      },
    ],
  },
  {
    id: "eyes",
    title: "Under Eye & Eye Bags",
    subtitle: "Bright Eyes",
    number: "06",
    items: [
      {
        name: "Dermal Filler",
        href: "/dermal-fillers-under-eye/",
      },
      {
        name: "Ultraformer",
        href: "/ultraformer-eye-bag-removal/",
      },
      {
        name: "Mesotherapy",
        href: "/mesobrightening-under-eye/",
      },
      {
        name: "Platelet Rich Plasma (PRP)",
        href: "/prp-eye-rejuvenation/",
      },
      {
        name: "Carboxy Therapy",
        href: "/carboxytherapy-for-under-eye/",
      },
    ],
  },
  {
    id: "dull",
    title: "Dull Skin & Open Pores",
    subtitle: "Radiance Unlocked",
    number: "07",
    items: [
      {
        name: "Fractional CO₂ Laser",
        href: "/fractional-laser-treatment-for-pores-texture/",
      },
      {
        name: "Medlite C6 NdYAG Laser",
        href: "/medlite-c6-ndyag-laser-for-pores-texture/",
      },
      {
        name: "Dermaroller",
        href: "/dermarollermicroneedling/",
      },
      {
        name: "Platelet Rich Plasma (PRP)",
        href: "/platelet-rich-plasma-therapy-prp/",
      },
      {
        name: "Skin Peel",
        href: "/skin-peel/",
      },
      {
        name: "LED Photomodulation Therapy",
        href: "/led-phototherapy-for-pores-texture/",
      },
      {
        name: "Shinning Peel",
        href: "/shinning-peel/",
      },
      {
        name: "Cosmelan",
        href: "/cosmelan-depigmentation-for-pores-texture/",
      },
    ],
  },
  {
    id: "melasma",
    title: "Melasma",
    subtitle: "Even & Luminous",
    number: "08",
    items: [
      {
        name: "Medlite",
        href: "/medlite-c6-ndyag-laser-for-pigmentation-age-spots/",
      },
      {
        name: "Platelet Rich Plasma (PRP)",
        href: "/platelet-rich-plasma-prp-therapyfor-pigmentation-age-spots/",
      },
      {
        name: "Cosmelan",
        href: "/cosmelan-depigmentation-2/",
      },
      {
        name: "Cryocell Cold Electrophoresis",
        href: "/cryocell-cold-electrophoresis-for-pigmentation-age-spots/",
      },
    ],
  },
  {
    id: "lightening",
    title: "Skin Lightening",
    subtitle: "Your Best Glow",
    number: "09",
    items: [
      {
        name: "Medlite C6 NdYAG Laser",
        href: "/medlite-c6-ndyag-laser/",
      },
    ],
  },
  {
    id: "veins",
    title: "Spider Vein & Fine Veins Removal",
    subtitle: "Flawless Skin",
    number: "10",
    items: [
      {
        name: "Candela Gentle YAG Laser",
        href: "/hair-removal/",
      },
    ],
  },
  {
    id: "birthmark",
    title: "Birthmark",
    subtitle: "Clear Canvas",
    number: "11",
    items: [
      {
        name: "Medlite C6 NdYAG Laser",
        href: "/medlite-c6-ndyag-laser/",
      },
    ],
  },
  {
    id: "milia",
    title: "Milia, Mole & Wart Removal",
    subtitle: "Refined Texture",
    number: "12",
    items: [
      {
        name: "CO₂ Laser",
        href: "/birthmark-removal/",
      },
    ],
  },
];

type Treatment = (typeof treatments)[number];

const AccordionItem = ({
  treatment,
}: {
  treatment: Treatment;
  index: number;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      variants={fadeInUp}
      className="border-b border-taupe/25 last:border-b-0"
    >
      <button onClick={() => setIsOpen(!isOpen)} className="w-full group">
        <div className="flex items-center gap-4 py-5 px-0 text-left transition-all duration-300">
          {/* Number badge */}
          <span className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-light tracking-widest text-taupe border border-taupe/30 group-hover:bg-wine group-hover:border-wine group-hover:text-light transition-all duration-300">
            {treatment.number}
          </span>

          {/* Title block */}
          <div className="flex-1 min-w-0">
            <p className="text-[9px] tracking-[0.25em] uppercase text-taupe font-light mb-0.5 group-hover:text-wine transition-colors duration-300">
              {treatment.subtitle}
            </p>
            <h3 className="font-georgia text-brown text-base md:text-lg leading-snug group-hover:text-wine transition-colors duration-300">
              {treatment.title}
            </h3>
          </div>

          {/* Count pill */}
          <span className="hidden sm:flex shrink-0 items-center gap-1 text-[10px] tracking-widest text-taupe mr-3">
            <span className="font-light">{treatment.items.length}</span>
            <span className="uppercase font-light">treatments</span>
          </span>

          {/* Chevron */}
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="shrink-0 w-7 h-7 rounded-full border border-taupe/30 flex items-center justify-center group-hover:border-wine/50 transition-colors duration-300"
          >
            <ChevronDown
              size={13}
              className="text-taupe group-hover:text-wine transition-colors duration-300"
            />
          </motion.div>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="overflow-hidden"
          >
            <div className="pb-6 pl-12 pr-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-0">
                {treatment.items.map((item, i) => (
                  <motion.a
                    key={i}
                    href={item.href}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.055, duration: 0.3 }}
                    className="group/item flex items-center gap-2.5 py-2.5 border-b border-taupe/12 last:border-b-0 hover:pl-1 transition-all duration-250"
                  >
                    <span className="w-1 h-1 rounded-full bg-wine/40 shrink-0 group-hover/item:bg-wine group-hover/item:scale-150 transition-all duration-300" />
                    <span className="text-[13px] text-brown/75 font-light tracking-wide group-hover/item:text-wine transition-colors duration-300 flex-1">
                      {item.name}
                    </span>
                    <ArrowUpRight
                      size={12}
                      className="text-taupe/0 group-hover/item:text-wine/70 transition-all duration-300 shrink-0"
                    />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function PageActiveAcne() {
  return (
    <>
      <section className="relative min-h-screen bg-light overflow-hidden">
        {/* Subtle grain texture overlay */}
        <div
          className="pointer-events-none absolute inset-0 z-0 opacity-[0.025]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
            backgroundSize: "128px 128px",
          }}
        />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 min-h-screen">
          {/* ─── LEFT: Photo Panel ─── */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="relative overflow-hidden lg:sticky lg:top-0 lg:h-screen"
          >
            {/* Photo */}
            <div className="w-full h-72 sm:h-96 lg:h-full relative">
              <img
                src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=800&q=80"
                alt="Nexus Clinic – Natural Beauty"
                className="w-full h-full object-cover object-center"
              />

              {/* linear veil */}
              <div className="absolute inset-0 bg-linear-to-t from-brown/60 via-transparent to-brown/10" />
              <div className="absolute inset-0 bg-linear-to-r from-transparent to-light/20" />

              {/* Decorative frame lines */}
              <div className="absolute top-8 left-8 w-16 h-16 border-t border-l border-light/40" />
              <div className="absolute bottom-8 right-8 w-16 h-16 border-b border-r border-light/40" />

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.6,
                  duration: 0.7,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                viewport={{ once: true }}
                className="absolute bottom-10 left-8 right-8"
              >
                <div className="inline-flex items-center gap-2 bg-glass] backdrop-blur-md border border-light/60 rounded-full px-4 py-2 shadow-lg shadow-brown/10 mb-4">
                  <Sparkles size={12} className="text-wine" />
                  <span className="text-[10px] tracking-[0.2em] uppercase text-light font-light">
                    KL's Premier Aesthetic Clinic
                  </span>
                </div>

                <h2
                  className="font-georgia text-light text-3xl sm:text-4xl leading-tight drop-shadow-md"
                  style={{ textShadow: "0 2px 20px rgba(75,58,51,0.4)" }}
                >
                  Your skin,
                  <br />
                  <em className="not-italic text-cream/80">beautifully</em>{" "}
                  <span className="text-taupe">restored.</span>
                </h2>

                <p className="mt-3 text-light/70 text-[13px] font-light tracking-wide leading-relaxed max-w-xs">
                  Science-led treatments crafted for your unique skin journey in
                  Kuala Lumpur.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* ─── RIGHT: Treatments Panel ─── */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="flex flex-col px-6 sm:px-10 lg:px-14 py-14 lg:py-20 bg-light"
          >
            {/* Section Header */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-12"
            >
              <motion.div
                variants={fadeInUp}
                className="flex items-center gap-3 mb-4"
              >
                <div className="h-px w-8 bg-wine" />
                <span className="text-[10px] tracking-[0.35em] uppercase text-wine font-light">
                  Our Treatments
                </span>
              </motion.div>

              <motion.h2
                variants={fadeInUp}
                className="font-georgia text-brown text-3xl sm:text-4xl leading-tight"
              >
                Discover your
                <br />
                <span className="text-wine italic">treatment pathway</span>
              </motion.h2>

              <motion.p
                variants={fadeInUp}
                className="mt-4 text-brown/55 text-sm font-light leading-relaxed max-w-sm"
              >
                Explore our curated menu of aesthetic solutions — each designed
                to address your concern with precision and care.
              </motion.p>

              {/* Stats strip */}
              <motion.div
                variants={fadeInUp}
                className="mt-8 flex gap-8 pb-8 border-b border-taupe/20"
              >
                {[
                  { num: "12+", label: "Concern areas" },
                  { num: "40+", label: "Treatments" },
                  { num: "15+", label: "Years expertise" },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <p className="font-georgia text-wine text-2xl">{s.num}</p>
                    <p className="text-[10px] tracking-widest uppercase text-taupe font-light mt-0.5">
                      {s.label}
                    </p>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Accordion List */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.05 }}
              className="flex-1"
            >
              {treatments.map((treatment, index) => (
                <AccordionItem
                  key={treatment.id}
                  treatment={treatment}
                  index={index}
                />
              ))}
            </motion.div>

            {/* CTA strip */}
            <motion.div
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-12 pt-8 border-t border-taupe/20"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
                <div>
                  <p className="text-brown text-sm font-light leading-relaxed">
                    Not sure which treatment is right for you?
                  </p>
                  <p className="text-taupe text-[12px] tracking-wide font-light">
                    Book a complimentary consultation today.
                  </p>
                </div>
                <motion.a
                  href="#"
                  whileHover={{
                    scale: 1.03,
                    backgroundColor: "rgba(128, 0, 0, 0.9)",
                  }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.2 }}
                  className="shrink-0 flex items-center gap-2.5 bg-wine text-light px-6 py-3 rounded-full text-[12px] tracking-[0.15em] uppercase font-light shadow-md shadow-wine/25 hover:shadow-lg hover:shadow-brown/25 transition-shadow duration-300"
                >
                  Book Consultation
                  <ArrowUpRight size={13} />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
