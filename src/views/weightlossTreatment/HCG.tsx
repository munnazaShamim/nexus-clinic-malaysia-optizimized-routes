"use client";

import { motion } from "framer-motion";
import {
  AlertCircle,
  Shield,
  FileText,
  Sparkles,
  Calendar,
  Droplets,
  Pill,
  Apple,
  Dumbbell,
  ChevronRight,
  XCircle,
  Info,
  Target,
  Activity,
  FileWarning,
  MapPin,
} from "lucide-react";
import {
  staggerContainer,
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  scaleIn,
} from "../../lib/animations";
import FAQ from "../../components/FAQ";
import { useTranslation } from "@/src/i18n/client";
import { fallbackLng } from "@/src/i18n/settings";

const HCGWeightLossLanding = ({
  locale = fallbackLng,
}: {
  locale?: string;
}) => {
  const { t } = useTranslation(locale, "hcg");
  const trustPoints = [
    { icon: Shield, text: "Doctor-led medical screening & personalised plans" },
    { icon: Target, text: "Safety-first with realistic targets" },
    { icon: MapPin, text: "Discreet KL clinic with clear guidance" },
  ];

  const risks = [
    {
      title: "Hormonal Imbalance",
      desc: "Unpredictable effects from unapproved hormone use",
    },
    {
      title: "Gallstones Risk",
      desc: "Very low-calorie diets increase gallstone formation",
    },
    {
      title: "Electrolyte Issues",
      desc: "Can lead to dangerous heart rhythm problems",
    },
    {
      title: "Malnutrition",
      desc: "Extreme restriction causes nutrient deficiencies",
    },
  ];

  const exclusions = [
    "Pregnant, trying to conceive, or breastfeeding",
    "Hormone-sensitive cancer risk or history",
    "Heart rhythm problems or clotting history",
    "Severe depression or eating disorder history",
  ];

  const saferApproach = [
    { icon: Apple, text: "Realistic calorie deficit, not extreme starvation" },
    { icon: Dumbbell, text: "Protein and strength training to protect muscle" },
    { icon: Activity, text: "Sleep and stress support" },
    { icon: Calendar, text: "Medical options only when appropriate" },
  ];

  const faqs = [
    {
      q: "Is the HCG diet safe?",
      a: "Major medical sources say the HCG diet is not safe, mainly due to the very low-calorie diet and unapproved weight loss claims.",
    },
    {
      q: "Does HCG help lose weight without dieting?",
      a: "No strong evidence shows HCG causes weight loss alone. Weight change comes from calorie restriction.",
    },
    {
      q: "Are HCG drops or sprays real?",
      a: "Many 'homeopathic HCG' products are unapproved for weight loss and not evaluated for safety or effectiveness.",
    },
    {
      q: "Is HCG approved for weight loss?",
      a: "In Malaysia, HCG is listed for fertility indications in the MOH formulary, not as a slimming drug.",
    },
    {
      q: "What's a safer alternative to HCG?",
      a: "A doctor-monitored program with health screening, realistic targets, and proper follow-up is safer and more sustainable.",
    },
  ];

  return (
    <>
      <main className="min-h-screen bg-linear-to-b from-cream via-white to-light">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          {/* Background Decorative Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-rose/5 rounded-full blur-3xl" />
            <div className="absolute top-60 -left-40 w-80 h-80 bg-wine/5 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 py-20 relative z-10">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="max-w-5xl mx-auto"
            >
              <motion.div variants={fadeInUp} className="text-center mb-8">
                <h1 className="font-georgia text-5xl md:text-6xl lg:text-7xl text-brown mb-6 leading-tight">
                  HCG Weight Loss Treatment
                  <span className="block text-2xl md:text-3xl text-wine mt-4 font-inter font-light">
                    in Kuala Lumpur, Malaysia
                  </span>
                </h1>

                <div className="inline-block bg-cream px-8 py-4 rounded-full border border-taupe/20">
                  <p className="text-brown font-georgia text-xl italic">
                    The honest guide to what it is, what research says, and
                    safer doctor monitored options
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={scaleIn}
                className="bg-light backdrop-blur-sm bg-opacity-70 rounded-3xl p-8 md:p-12 shadow-xl border border-white/50 mt-12"
              >
                <div className="flex items-start gap-4 mb-8">
                  <FileWarning className="w-8 h-8 text-wine shrink-0 mt-1" />
                  <div>
                    <h2 className="font-georgia text-2xl text-brown mb-3">
                      Thinking about the HCG diet in Malaysia? Read this before
                      you commit.
                    </h2>
                    <p className="text-brown/80 text-lg leading-relaxed">
                      If you have tried dieting and workouts but the scale
                      barely moves, it is normal to feel frustrated. At Nexus
                      Clinic Kuala Lumpur, we help you understand what is hype,
                      what is evidence, and what is actually safe.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  {trustPoints.map((point, index) => {
                    const Icon = point.icon;
                    return (
                      <motion.div
                        key={index}
                        variants={fadeInUp}
                        whileHover={{ scale: 1.02 }}
                        className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm border border-taupe/10"
                      >
                        <div className="bg-wine/10 p-2 rounded-full">
                          <Icon className="w-5 h-5 text-wine" />
                        </div>
                        <span className="text-brown text-sm font-medium">
                          {point.text}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Truth Section */}
        <section className="py-20 bg-white/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={staggerContainer}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <motion.div variants={fadeInUp} className="text-center mb-12">
                <span className="text-wine font-georgia italic text-lg">
                  First, a quick truth
                </span>
                <h2 className="font-georgia text-4xl text-brown mt-2">
                  Because you deserve it
                </h2>
              </motion.div>

              <motion.div
                variants={fadeInLeft}
                className="bg-cream rounded-3xl p-8 md:p-10"
              >
                <p className="text-brown text-lg leading-relaxed mb-6">
                  HCG is a real hormone with real medical uses. But most medical
                  sources agree that HCG is not approved for weight loss and the
                  classic "HCG diet" often involves a very low-calorie diet that
                  can be risky.
                </p>
                <p className="text-wine font-georgia text-xl italic">
                  So if you are searching "HCG weight loss Malaysia" or "HCG
                  injection for slimming in KL", the key question is not "can it
                  make me lose weight fast?"
                  <span className="block mt-2 font-inter not-italic text-brown">
                    The better question is: is it safe, and will it last?
                  </span>
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* What is HCG */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={staggerContainer}
              viewport={{ once: true }}
              className="max-w-5xl mx-auto"
            >
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div variants={fadeInLeft}>
                  <h2 className="font-georgia text-4xl text-brown mb-6">
                    What is HCG?
                  </h2>
                  <div className="space-y-4 text-brown/80 leading-relaxed">
                    <p>
                      HCG stands for human chorionic gonadotropin. Your body
                      makes it during pregnancy. Doctors also use lab-made HCG
                      for specific medical reasons, mainly related to fertility
                      and certain hormone conditions.
                    </p>
                    <div className="bg-cream p-6 rounded-xl border-l-4 border-wine">
                      <p className="font-medium text-brown">
                        In Malaysia, the Ministry of Health formulary lists HCG
                        injections for fertility-related indications such as
                        ovulation induction and luteal support, not as a weight
                        loss drug.
                      </p>
                    </div>
                    <div className="relative rounded-3xl overflow-hidden shadow-xl">
                      <img
                        src="/images/main/HCG-weight-loss-treatment.webp"
                        alt="HCG weight loss treatment"
                        className="w-full h-auto"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-brown/40 to-transparent"></div>
                    </div>
                  </div>
                </motion.div>

                <motion.div variants={fadeInRight} className="space-y-6">
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-taupe/10">
                    <h3 className="font-georgia text-xl text-wine mb-3 flex items-center gap-2">
                      <Sparkles className="w-5 h-5" />
                      What people mean by "HCG weight loss"
                    </h3>
                    <p className="text-brown/80 mb-4">
                      A plan that combines HCG products with a very low-calorie
                      diet (often 500-800 calories a day).
                    </p>
                    <div className="bg-cream p-4 rounded-lg">
                      <p className="text-sm text-brown">
                        <span className="font-bold">Promised benefits:</span>{" "}
                        faster fat loss, less hunger, keeping muscle while
                        losing weight. The problem? The evidence doesn't support
                        it.
                      </p>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-taupe/10">
                    <h3 className="font-georgia text-xl text-wine mb-3 flex items-center gap-2">
                      <FileText className="w-5 h-5" />
                      Does HCG actually cause weight loss?
                    </h3>
                    <p className="text-brown/80">
                      Most high-quality reviews say no. If you cut calories to
                      extremely low levels, you will likely lose weight. But
                      studies show HCG itself does not add meaningful weight
                      loss beyond the calorie restriction.
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Safety Section */}
        <section className="py-20 bg-brown text-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={staggerContainer}
              viewport={{ once: true }}
              className="max-w-5xl mx-auto"
            >
              <motion.div variants={fadeInUp} className="text-center mb-12">
                <h2 className="font-georgia text-4xl mb-4">
                  Safety: The Biggest Concern
                </h2>
                <p className="text-taupe text-lg">
                  Two risks usually show up together
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                  variants={fadeInLeft}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-8"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-wine p-3 rounded-full">
                      <AlertCircle className="w-6 h-6" />
                    </div>
                    <h3 className="font-georgia text-2xl">
                      The Hormone Problem
                    </h3>
                  </div>
                  <p className="text-taupe leading-relaxed">
                    Using hormones without a strong medical reason can cause
                    unpredictable effects. Even when HCG is used correctly for
                    approved indications, it has known side effects.
                  </p>
                </motion.div>

                <motion.div
                  variants={fadeInRight}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-8"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-wine p-3 rounded-full">
                      <Droplets className="w-6 h-6" />
                    </div>
                    <h3 className="font-georgia text-2xl">The VLCD Problem</h3>
                  </div>
                  <p className="text-taupe leading-relaxed">
                    Very low-calorie diets increase risk for gallstones,
                    electrolyte imbalance, heart rhythm problems, fatigue,
                    dehydration, and malnutrition.
                  </p>
                </motion.div>
              </div>

              <motion.div
                variants={scaleIn}
                className="mt-12 bg-wine/20 rounded-2xl p-8 border border-wine/30"
              >
                <h4 className="font-georgia text-xl mb-4 flex items-center gap-2">
                  <Info className="w-5 h-5" />
                  FDA Warning
                </h4>
                <p className="text-taupe">
                  The FDA has warned that "HCG diet" instructions tied to very
                  low-calorie diets increase risk for serious side effects.
                  Cleveland Clinic also highlights extreme restriction can lead
                  to fatigue, dehydration, headaches, malnutrition, anemia, and
                  hypoglycemia.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Risks Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={staggerContainer}
              viewport={{ once: true }}
              className="max-w-6xl mx-auto"
            >
              <motion.h2
                variants={fadeInUp}
                className="font-georgia text-4xl text-brown text-center mb-12"
              >
                Understanding the Risks
              </motion.h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {risks.map((risk, index) => (
                  <motion.div
                    key={index}
                    variants={scaleIn}
                    whileHover={{ y: -5 }}
                    className="bg-cream rounded-xl p-6"
                  >
                    <div className="bg-wine/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                      <XCircle className="w-6 h-6 text-wine" />
                    </div>
                    <h3 className="font-georgia text-lg text-brown mb-2">
                      {risk.title}
                    </h3>
                    <p className="text-brown/70 text-sm">{risk.desc}</p>
                  </motion.div>
                ))}
              </div>

              {/* Drops Warning */}
              <motion.div
                variants={fadeInUp}
                className="mt-12 bg-linear-to-r from-rose to-wine rounded-2xl p-8 text-white"
              >
                <h3 className="font-georgia text-2xl mb-4 flex items-center gap-2">
                  <Pill className="w-6 h-6" />
                  "Drops", "pellets", "sprays": what you should know
                </h3>
                <p className="text-white/90 leading-relaxed">
                  Many "homeopathic HCG" products are marketed online. The FDA
                  notes these products are sold as drops, pellets, and sprays,
                  and they are not evaluated for safety or effectiveness for
                  weight loss. If you are in Malaysia and considering anything
                  bought online, be extra cautious.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Who Should Avoid */}
        <section className="py-20 bg-cream">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={staggerContainer}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <motion.div variants={fadeInUp} className="text-center mb-10">
                <h2 className="font-georgia text-4xl text-brown mb-4">
                  Who is NOT a good candidate?
                </h2>
                <p className="text-brown/70">
                  Even clinics that market HCG often list these exclusions
                </p>
              </motion.div>

              <motion.div
                variants={fadeInLeft}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <div className="grid md:grid-cols-2 gap-4">
                  {exclusions.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <XCircle className="w-5 h-5 text-wine shrink-0 mt-1" />
                      <span className="text-brown">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-cream rounded-lg">
                  <p className="text-brown italic">
                    If you feel desperate enough to try extreme restriction,
                    take that as a sign to seek a safer medical plan with
                    support.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Safer Approach */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={staggerContainer}
              viewport={{ once: true }}
              className="max-w-5xl mx-auto"
            >
              <motion.div variants={fadeInUp} className="text-center mb-12">
                <span className="text-wine font-georgia italic text-lg">
                  Safer Alternative
                </span>
                <h2 className="font-georgia text-4xl text-brown mt-2">
                  Doctor Monitored Weight Loss in KL
                </h2>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8">
                <motion.div variants={fadeInLeft} className="space-y-4">
                  {saferApproach.slice(0, 2).map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={index}
                        className="flex items-center gap-4 bg-cream rounded-xl p-4"
                      >
                        <div className="bg-wine p-2 rounded-full">
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-brown">{item.text}</span>
                      </div>
                    );
                  })}
                </motion.div>

                <motion.div variants={fadeInRight} className="space-y-4">
                  {saferApproach.slice(2, 4).map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={index}
                        className="flex items-center gap-4 bg-cream rounded-xl p-4"
                      >
                        <div className="bg-wine p-2 rounded-full">
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-brown">{item.text}</span>
                      </div>
                    );
                  })}
                </motion.div>
              </div>

              <motion.div
                variants={scaleIn}
                className="mt-8 bg-brown text-white rounded-2xl p-8 text-center"
              >
                <p className="text-2xl font-georgia mb-2">A common safe pace</p>
                <p className="text-4xl font-bold text-taupe">
                  0.5 to 1 kg per week
                </p>
                <p className="text-lg mt-2 text-white/80">not "a kilo a day"</p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQ data={faqs} />

        {/* CTA Section */}
        <section className="py-20 bg-linear-to-r from-wine to-rose text-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={staggerContainer}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <motion.h2
                variants={fadeInUp}
                className="font-georgia text-4xl md:text-5xl mb-6"
              >
                Ready for a Safer Approach?
              </motion.h2>

              <motion.p
                variants={fadeInUp}
                className="text-xl text-white/90 mb-8 leading-relaxed"
              >
                If you are considering HCG weight loss in Malaysia, do not guess
                your way through it. Book a consultation at Nexus Clinic Kuala
                Lumpur and let a doctor review your goals, your health, and your
                safest path forward.
              </motion.p>

              <motion.div variants={scaleIn} whileHover={{ scale: 1.05 }}>
                <button className="bg-white text-wine px-10 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-2 mx-auto">
                  Book Your Consultation
                  <ChevronRight className="w-5 h-5" />
                </button>
              </motion.div>

              <motion.p
                variants={fadeInUp}
                className="mt-6 text-white/70 text-sm"
              >
                You will leave with a plan you can follow, not a quick fix you
                fear.
              </motion.p>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

export default HCGWeightLossLanding;
