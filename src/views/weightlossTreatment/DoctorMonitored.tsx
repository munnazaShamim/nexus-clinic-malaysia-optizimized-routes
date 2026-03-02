"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Heart,
  Calendar,
  MapPin,
  Activity,
  Droplet,
  ChevronRight,
  Sparkles,
  Scale,
  Apple,
  AlertCircle,
  CheckCircle2,
  Clock,
  Target,
  UserCheck,
  FileText,
  Ruler,
  TrendingUp,
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

export default function DoctorMonitoredLanding({
  locale = fallbackLng,
}: {
  locale?: string;
}) {
  const { t } = useTranslation(locale, "doctorMonitored");
  const faqs = [
    {
      q: "What is doctor monitored weight loss?",
      a: "A medically supervised plan where a doctor checks health risks, tracks progress, and adjusts your plan over time.",
    },
    {
      q: "Who qualifies in Malaysia?",
      a: "Using Asian BMI cut-offs: overweight at 23, obesity at 27.5, plus health risks assessment.",
    },
    {
      q: "Are weight loss injections safe?",
      a: "When prescribed and monitored by a doctor, yes. Never self-source or self-dose.",
    },
    {
      q: "How soon will I see results?",
      a: "Appetite changes first, weight loss starts within weeks and improves over months.",
    },
  ];
  return (
    <>
      <main className="min-h-screen bg-linear-to-b from-cream to-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden px-4 py-20 md:py-28">
          <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] opacity-5" />
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            className="container mx-auto max-w-7xl relative z-10"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInLeft} className="space-y-8">
                <div className="inline-flex items-center gap-2 bg-wine/10 px-4 py-2 rounded-full">
                  <Shield className="w-4 h-4 text-wine" />
                  <span className="text-sm font-medium text-wine">
                    Medically Supervised in KL
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-brown leading-tight">
                  Lose weight with a plan that's built around
                  <span className="text-wine block">
                    your body, not guesswork
                  </span>
                </h1>

                <p className="text-lg text-taupe max-w-lg">
                  Doctor monitored weight loss combining medical checks,
                  realistic habits, and safe options when you qualify.
                </p>

                <div className="flex flex-wrap gap-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-wine text-white px-8 py-4 rounded-full font-medium hover:bg-rose transition-all shadow-lg shadow-wine/20"
                  >
                    Book Your Consultation
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="border-2 border-wine text-wine px-8 py-4 rounded-full font-medium hover:bg-wine/5 transition-all"
                  >
                    Learn More
                  </motion.button>
                </div>

                {/* Trust Bar */}
                <motion.div
                  variants={fadeInUp}
                  className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8"
                >
                  {[
                    { icon: UserCheck, text: "Doctor Supervised" },
                    { icon: FileText, text: "Personalised Plan" },
                    { icon: Activity, text: "Ongoing Monitoring" },
                    { icon: MapPin, text: "Jalan Pinang, KL" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="bg-white/70 backdrop-blur-sm p-2 rounded-lg">
                        <item.icon className="w-4 h-4 text-wine" />
                      </div>
                      <span className="text-sm text-brown">{item.text}</span>
                    </div>
                  ))}
                </motion.div>
              </motion.div>

              <motion.div variants={fadeInRight} className="relative">
                <div className="relative z-10 bg-light rounded-3xl p-8 shadow-2xl">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-serif text-brown">
                      Your Journey Starts Here
                    </h3>
                    <div className="space-y-4">
                      {[
                        {
                          step: "01",
                          title: "Medical Screening",
                          desc: "BMI & health risk assessment",
                        },
                        {
                          step: "02",
                          title: "Body Analysis",
                          desc: "Comprehensive measurements",
                        },
                        {
                          step: "03",
                          title: "Personalised Plan",
                          desc: "Tailored strategy",
                        },
                        {
                          step: "04",
                          title: "Regular Follow-ups",
                          desc: "Ongoing adjustments",
                        },
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          whileHover={{ x: 5 }}
                          className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-taupe/20"
                        >
                          <div className="w-10 h-10 bg-wine/10 rounded-full flex items-center justify-center text-wine font-bold">
                            {item.step}
                          </div>
                          <div>
                            <h4 className="font-medium text-brown">
                              {item.title}
                            </h4>
                            <p className="text-sm text-taupe">{item.desc}</p>
                          </div>
                          <ChevronRight className="w-5 h-5 text-wine ml-auto" />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-wine/10 rounded-full blur-2xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-rose/10 rounded-full blur-2xl" />
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* What is Doctor Monitored Section */}
        <section className="px-4 py-20 bg-white">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            className="container mx-auto max-w-7xl"
          >
            <motion.div
              variants={fadeInUp}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-serif text-brown mb-6">
                What "doctor monitored weight loss" really means
              </h2>
              <p className="text-lg text-taupe">
                Not a crash diet, detox, or a one-time injection. It's a
                medically supervised plan where a doctor checks your health
                risks, tracks progress, and adjusts strategy.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Scale,
                  title: "Asian BMI Guidelines",
                  desc: "Overweight at BMI 23, Obesity at BMI 27.5",
                  stat: "23+",
                },
                {
                  icon: Heart,
                  title: "Health Risk Screening",
                  desc: "Blood pressure, cholesterol, and metabolic markers",
                  stat: "100%",
                },
                {
                  icon: Target,
                  title: "Sustainable Results",
                  desc: "Focus on fat loss, not just scale weight",
                  stat: "14.9%",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={{ y: -10 }}
                  className="bg-light rounded-3xl p-8 border border-taupe/20 relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-wine/5 rounded-bl-full group-hover:scale-150 transition-transform" />
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-wine/10 rounded-2xl flex items-center justify-center mb-6">
                      <item.icon className="w-8 h-8 text-wine" />
                    </div>
                    <div className="text-3xl font-bold text-wine mb-2">
                      {item.stat}
                    </div>
                    <h3 className="text-xl font-medium text-brown mb-3">
                      {item.title}
                    </h3>
                    <p className="text-taupe">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Why KL Section */}
        <section className="px-4 py-20 bg-cream">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            className="container mx-auto max-w-7xl"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInLeft} className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-serif text-brown">
                  Why many people in Kuala Lumpur choose medical help
                </h2>
                <div className="space-y-4">
                  {[
                    "Long workdays and late dinners",
                    "Grab food and stress eating",
                    "Poor sleep affecting metabolism",
                    "Hormonal challenges (PCOS, thyroid)",
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      className="flex items-center gap-3"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-wine" />
                      <span className="text-brown">{item}</span>
                    </motion.div>
                  ))}
                </div>
                <motion.div variants={fadeInRight}>
                  <div className="relative rounded-3xl overflow-hidden shadow-xl">
                    <img
                      src="/images/main/doctor-monitored-malaysia.webp"
                      alt="Doctor Monitored Malaysia"
                      className="w-full h-auto"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-brown/40 to-transparent"></div>
                  </div>
                </motion.div>

                <p className="text-taupe text-lg">
                  Weight gain isn't just about willpower. Hormones, insulin
                  resistance, medications, and stress can push appetite and
                  cravings higher.
                </p>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                className="bg-white rounded-3xl p-8 shadow-xl"
              >
                <h3 className="text-2xl font-serif text-brown mb-6">
                  Is this for you?
                </h3>
                <div className="space-y-4">
                  {[
                    "BMI 27.5+ (Asian obesity cut-off)",
                    "BMI 23+ with health risks",
                    "Struggle with intense hunger or cravings",
                    "PCOS, thyroid, or insulin resistance",
                    "Repeated weight regain cycles",
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-3 p-3 bg-cream rounded-xl"
                    >
                      <CheckCircle2 className="w-5 h-5 text-wine" />
                      <span className="text-brown">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Step by Step Process */}
        <section className="px-4 py-20 bg-white">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            className="container mx-auto max-w-7xl"
          >
            <motion.div
              variants={fadeInUp}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-serif text-brown mb-6">
                What happens at Nexus Clinic Kuala Lumpur
              </h2>
              <p className="text-lg text-taupe">
                Step by step, with no guesswork
              </p>
            </motion.div>

            <div className="grid md:grid-cols-5 gap-4">
              {[
                {
                  icon: FileText,
                  step: "01",
                  title: "Consultation",
                  desc: "Talk through your history",
                },
                {
                  icon: Ruler,
                  step: "02",
                  title: "Measurements",
                  desc: "BMI & waist analysis",
                },
                {
                  icon: Droplet,
                  step: "03",
                  title: "Risk Check",
                  desc: "Lab tests if needed",
                },
                {
                  icon: Sparkles,
                  step: "04",
                  title: "Build Plan",
                  desc: "Food, movement, support",
                },
                {
                  icon: Calendar,
                  step: "05",
                  title: "Follow-ups",
                  desc: "Adjust & optimize",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={{ y: -5 }}
                  className="text-center group"
                >
                  <div className="relative mb-4">
                    <div className="w-20 h-20 mx-auto bg-light rounded-2xl flex items-center justify-center group-hover:bg-wine transition-colors">
                      <item.icon className="w-8 h-8 text-wine group-hover:text-white transition-colors" />
                    </div>
                    {index < 4 && (
                      <div className="hidden md:block absolute top-1/2 left-[60%] w-[80%] h-0.5 bg-taupe/20" />
                    )}
                  </div>
                  <div className="text-sm text-wine font-medium mb-2">
                    {item.step}
                  </div>
                  <h3 className="font-medium text-brown mb-1">{item.title}</h3>
                  <p className="text-sm text-taupe">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Treatment Options */}
        <section className="px-4 py-20 bg-cream">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            className="container mx-auto max-w-7xl"
          >
            <motion.div
              variants={fadeInUp}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-serif text-brown mb-6">
                Treatment options inside your plan
              </h2>
              <p className="text-lg text-taupe">
                Not everyone needs medication. When appropriate, it makes the
                first phase easier.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Lifestyle Based",
                  icon: Apple,
                  color: "from-green-500/20",
                  items: [
                    "Calorie strategy",
                    "Protein targets",
                    "Fibre focus",
                    "Movement planning",
                  ],
                },
                {
                  title: "Prescription Support",
                  icon: Droplet,
                  color: "from-wine/20",
                  items: [
                    "GLP-1 medications",
                    "Appetite control",
                    "Metabolic support",
                    "Regular monitoring",
                  ],
                  highlight: true,
                },
                {
                  title: "Body Contouring",
                  icon: Sparkles,
                  color: "from-purple-500/20",
                  items: [
                    "Fat freezing",
                    "Waist shaping",
                    "Stubborn pockets",
                    "Non-surgical",
                  ],
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className={`bg-white rounded-3xl p-8 shadow-xl border-2 ${
                    item.highlight ? "border-wine" : "border-transparent"
                  } relative overflow-hidden group`}
                >
                  {item.highlight && (
                    <div className="absolute top-0 right-0 bg-wine text-white px-4 py-1 rounded-bl-2xl text-sm">
                      Most Popular
                    </div>
                  )}
                  <div
                    className={`absolute top-0 left-0 w-32 h-32 bg-linear-to-br ${item.color} to-transparent rounded-br-full opacity-50`}
                  />
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-wine/10 rounded-2xl flex items-center justify-center mb-6">
                      <item.icon className="w-8 h-8 text-wine" />
                    </div>
                    <h3 className="text-2xl font-serif text-brown mb-4">
                      {item.title}
                    </h3>
                    <ul className="space-y-3">
                      {item.items.map((listItem, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2 text-brown"
                        >
                          <CheckCircle2 className="w-4 h-4 text-wine" />
                          {listItem}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={fadeInUp}
              className="mt-8 p-6 bg-wine/5 rounded-2xl border border-wine/20"
            >
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                <p className="text-sm text-brown">
                  <span className="font-semibold">Important:</span> These
                  medicines require a medical assessment and prescription. They
                  are not "quick fixes." Always disclose GLP-1 use before any
                  surgery due to aspiration risks under anesthesia.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Results Section */}
        <section className="px-4 py-20 bg-white">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            className="container mx-auto max-w-7xl"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInLeft} className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-serif text-brown">
                  What results can you expect?
                </h2>
                <p className="text-lg text-taupe">
                  Weight loss is gradual. Clinical trials show average loss
                  around 14.9% at 68 weeks with semaglutide and lifestyle
                  changes.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "Starting BMI", value: "30+", icon: Scale },
                    { label: "Avg. Loss", value: "14.9%", icon: TrendingUp },
                    { label: "Timeframe", value: "68 weeks", icon: Clock },
                    { label: "Maintenance", value: "Ongoing", icon: Heart },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className="bg-light p-4 rounded-xl"
                    >
                      <item.icon className="w-5 h-5 text-wine mb-2" />
                      <div className="text-2xl font-bold text-brown">
                        {item.value}
                      </div>
                      <div className="text-sm text-taupe">{item.label}</div>
                    </motion.div>
                  ))}
                </div>

                <div className="bg-cream p-6 rounded-2xl">
                  <h4 className="font-medium text-brown mb-3">
                    Your outcome depends on:
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      "Starting weight",
                      "Sleep & stress",
                      "Food consistency",
                      "Medication tolerance",
                      "Follow-up quality",
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 text-sm text-brown"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-wine" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeInRight} className="relative">
                <div className="bg-linear-to-br from-wine to-rose rounded-3xl p-8 text-white">
                  <h3 className="text-2xl font-serif mb-6">
                    Pros & Cons (clear and honest)
                  </h3>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-medium mb-3 flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5" /> Benefits
                      </h4>
                      <ul className="space-y-2 text-white/80">
                        <li>• Safer with medical screening</li>
                        <li>• Personalised plan</li>
                        <li>• Support through plateaus</li>
                        <li>• Options beyond diet alone</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-medium mb-3 flex items-center gap-2">
                        <AlertCircle className="w-5 h-5" /> Downsides
                      </h4>
                      <ul className="space-y-2 text-white/80">
                        <li>• Costs more than DIY dieting</li>
                        <li>• Requires check-ins</li>
                        <li>• Possible side effects</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-wine/10 rounded-full blur-3xl" />
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Comparison Section */}
        <section className="px-4 py-20 bg-cream">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            className="container mx-auto max-w-7xl"
          >
            <motion.div
              variants={fadeInUp}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-serif text-brown mb-6">
                Choose your path
              </h2>
              <p className="text-lg text-taupe">
                Medical weight loss vs other options
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Doctor Monitored",
                  desc: "Overall fat loss, appetite control, metabolic health",
                  icon: Heart,
                  for: "Whole body transformation",
                },
                {
                  title: "Fat Freezing",
                  desc: "Stubborn pockets and shaping",
                  icon: Sparkles,
                  for: "Stable weight, specific areas",
                },
                {
                  title: "Bariatric Surgery",
                  desc: "Severe obesity, complex health risks",
                  icon: Activity,
                  for: "Serious medical cases",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-2xl p-6 shadow-lg"
                >
                  <div className="w-12 h-12 bg-wine/10 rounded-xl flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-wine" />
                  </div>
                  <h3 className="text-xl font-serif text-brown mb-2">
                    {item.title}
                  </h3>
                  <p className="text-taupe text-sm mb-3">{item.desc}</p>
                  <p className="text-xs text-wine font-medium">
                    Best for: {item.for}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Why Nexus Section */}
        <section className="px-4 py-20 bg-white">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            className="container mx-auto max-w-4xl text-center"
          >
            <motion.div variants={fadeInUp} className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif text-brown">
                Why Nexus Clinic Kuala Lumpur
              </h2>
              <p className="text-lg text-taupe max-w-2xl mx-auto">
                A doctor monitored program, not an influencer plan. Clear steps
                from assessment to maintenance.
              </p>

              <div className="grid md:grid-cols-2 gap-6 text-left mt-12">
                {[
                  "Medical supervision, not shortcuts",
                  "Multiple evidence-based options",
                  "KL location (Jalan Pinang area)",
                  "Regular follow-ups & adjustments",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3 p-4 bg-light rounded-xl"
                  >
                    <CheckCircle2 className="w-5 h-5 text-wine" />
                    <span className="text-brown">{item}</span>
                  </motion.div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 bg-wine text-white px-12 py-4 rounded-full font-medium text-lg shadow-xl shadow-wine/20 inline-flex items-center gap-2"
              >
                Book a consultation at Nexus Clinic
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </motion.div>
        </section>

        {/* FAQ Section */}
        <FAQ data={faqs} />

        {/* CTA Section */}
        <section className="px-4 py-20 bg-linear-to-r from-wine to-rose text-white">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            className="container mx-auto max-w-3xl text-center"
          >
            <motion.div variants={scaleIn} className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif">
                Ready for a weight loss plan that's monitored, realistic, and
                safe?
              </h2>
              <p className="text-white/80 text-lg">
                Start with a proper assessment, then follow a plan designed for
                your body and lifestyle.
              </p>
              <motion.button
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "white",
                  color: "var(--color-wine)",
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-wine px-12 py-4 rounded-full font-medium text-lg shadow-xl inline-flex items-center gap-2 transition-all"
              >
                Book Your Consultation Today
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </motion.div>
        </section>
      </main>
    </>
  );
}
