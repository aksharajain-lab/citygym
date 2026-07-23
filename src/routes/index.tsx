import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  Dumbbell,
  Users,
  UserCheck,
  Activity,
  Heart,
  Waves,
  Clock,
  Apple,
  Phone,
  MapPin,
  Instagram,
  MessageCircle,
  Menu,
  X,
  Star,
  ChevronDown,
  ArrowRight,
  Check,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { useCounter, useReveal } from "@/hooks/use-reveal";

import hero from "@/assets/hero.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";
import p1 from "@/assets/person-1.jpg";
import p2 from "@/assets/person-2.jpg";
import p3 from "@/assets/person-3.jpg";

export const Route = createFileRoute("/")({
  component: HomePage,
});

const WHATSAPP = "https://wa.me/919811013385?text=Hi%20City%20Gym%2C%20I%27d%20like%20to%20book%20a%20free%20trial.";
const PHONE = "+91 98110 13385";
const ADDRESS = "E-16, Panchsheel Garden, Naveen Shahdara, Delhi 110032";
const MAPS_EMBED =
  "https://www.google.com/maps?q=E-16+Panchsheel+Garden+Naveen+Shahdara+Delhi+110032&output=embed";
const MAPS_LINK =
  "https://www.google.com/maps/search/?api=1&query=City+Gym+Naveen+Shahdara+Delhi";

const NAV = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Membership", href: "#membership" },
  { label: "Gallery", href: "#gallery" },
  { label: "Trainers", href: "#trainers" },
  { label: "Contact", href: "#contact" },
];

function HomePage() {
  return (
    <div className="relative min-h-screen bg-[#0f0f0f] text-white overflow-x-hidden">
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Features />
      <Programs />
      <Membership />
      <Gallery />
      <Transformations />
      <BMI />
      <Trainers />
      <Testimonials />
      <Booking />
      <FAQ />
      <MapSection />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

/* ---------------- NAV ---------------- */
function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div
          className={`flex items-center justify-between rounded-2xl px-4 sm:px-6 h-14 sm:h-16 transition-all duration-500 ${
            scrolled ? "glass shadow-soft" : "bg-transparent"
          }`}
        >
          <a href="#home" className="flex items-center gap-2 font-display text-2xl tracking-wide">
            <span className="inline-block h-2 w-2 rounded-full bg-gold" />
            <span className="text-gold-gradient">CITY</span>
            <span>GYM</span>
          </a>
          <nav className="hidden lg:flex items-center gap-8">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-sm font-medium text-white/70 hover:text-white transition-colors relative group"
              >
                {n.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#booking"
              className="rounded-full gold-gradient px-5 py-2.5 text-sm font-semibold text-black hover:shadow-gold transition-all duration-300"
            >
              Free Trial
            </a>
          </div>
          <button
            className="lg:hidden text-white p-2 rounded-lg hover:bg-white/5"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden fixed inset-0 z-[60] transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-black/80 backdrop-blur-xl" onClick={() => setOpen(false)} />
        <div
          className={`absolute right-0 top-0 h-full w-[85%] max-w-sm bg-[#111] border-l border-white/10 p-6 transition-transform duration-500 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center mb-10">
            <span className="font-display text-2xl">
              <span className="text-gold-gradient">CITY</span> GYM
            </span>
            <button onClick={() => setOpen(false)} aria-label="Close">
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="flex flex-col gap-1">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="py-4 border-b border-white/5 text-lg font-medium hover:text-gold transition-colors"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href="#booking"
            onClick={() => setOpen(false)}
            className="mt-8 block text-center rounded-full gold-gradient px-6 py-3 font-semibold text-black"
          >
            Book Free Trial
          </a>
        </div>
      </div>
    </header>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <section id="home" className="relative min-h-[100svh] flex items-center overflow-hidden grain">
      <div
        className="absolute inset-0 will-change-transform"
        style={{ transform: `translate3d(0, ${scrollY * 0.35}px, 0) scale(1.1)` }}
      >
        <img src={hero} alt="Athlete training at City Gym" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#0f0f0f]" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-32 sm:py-40 w-full">
        <div className="max-w-3xl">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 mb-8">
              <span className="h-2 w-2 rounded-full bg-gold animate-pulse" />
              <span className="text-xs sm:text-sm font-medium tracking-wide uppercase text-white/90">
                Naveen Shahdara · Delhi
              </span>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="text-[14vw] sm:text-8xl lg:text-9xl font-black">
              Stronger
              <br />
              <span className="text-gold-gradient">Every Day.</span>
            </h1>
          </Reveal>
          <Reveal delay={280}>
            <p className="mt-8 max-w-xl text-lg sm:text-xl text-white/70 leading-relaxed">
              Push your limits with expert coaching, world-class equipment, and a community that keeps
              you motivated.
            </p>
          </Reveal>
          <Reveal delay={420}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#booking"
                className="group inline-flex items-center gap-2 rounded-full gold-gradient px-8 py-4 text-base font-semibold text-black hover:shadow-gold transition-all"
              >
                Book Free Trial
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full glass px-8 py-4 text-base font-semibold text-white hover:border-white/40 transition-all"
              >
                <MessageCircle className="h-5 w-5" />
                Chat on WhatsApp
              </a>
            </div>
          </Reveal>
        </div>

        {/* stats */}
        <Reveal delay={600}>
          <StatsRow />
        </Reveal>
      </div>

      <a
        href="#about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 hover:text-gold transition"
        aria-label="Scroll"
      >
        <ChevronDown className="h-6 w-6 animate-bounce" />
      </a>
    </section>
  );
}

function StatsRow() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const stats = [
    { label: "Active Members", value: 2400, suffix: "+" },
    { label: "Certified Trainers", value: 18, suffix: "" },
    { label: "Years of Legacy", value: 12, suffix: "" },
    { label: "Success Stories", value: 850, suffix: "+" },
  ];
  return (
    <div
      ref={ref}
      className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px rounded-2xl glass overflow-hidden"
    >
      {stats.map((s) => (
        <Stat key={s.label} label={s.label} value={s.value} suffix={s.suffix} start={visible} />
      ))}
    </div>
  );
}

function Stat({ label, value, suffix, start }: { label: string; value: number; suffix: string; start: boolean }) {
  const n = useCounter(value, start);
  return (
    <div className="p-6 sm:p-8 bg-black/20">
      <div className="font-display text-4xl sm:text-5xl text-gold-gradient">
        {n}
        {suffix}
      </div>
      <div className="mt-2 text-xs sm:text-sm uppercase tracking-wider text-white/60">{label}</div>
    </div>
  );
}

/* ---------------- MARQUEE ---------------- */
function Marquee() {
  const words = ["Discipline", "Strength", "Community", "Focus", "Grit", "Progress", "Sweat", "Legacy"];
  const list = [...words, ...words];
  return (
    <div className="relative border-y border-white/10 overflow-hidden py-6 bg-black">
      <div className="marquee-track flex gap-16 whitespace-nowrap">
        {list.map((w, i) => (
          <span
            key={i}
            className="font-display text-4xl sm:text-6xl text-white/10 flex items-center gap-16"
          >
            {w}
            <span className="text-gold text-2xl">★</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ---------------- ABOUT ---------------- */
function About() {
  return (
    <section id="about" className="relative py-28 sm:py-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        <Reveal className="lg:col-span-5">
          <div className="relative">
            <div className="zoom-img rounded-3xl overflow-hidden shadow-soft aspect-[4/5]">
              <img src={g4} alt="Trainer coaching" className="h-full w-full object-cover" />
            </div>
            <div className="absolute -bottom-8 -right-4 sm:-right-8 glass-gold p-6 max-w-[200px]">
              <div className="font-display text-4xl text-gold-gradient">12+</div>
              <div className="text-xs uppercase tracking-widest text-white/80 mt-1">
                Years transforming lives
              </div>
            </div>
          </div>
        </Reveal>
        <div className="lg:col-span-7">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">About City Gym</div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black">
              Not just a gym.
              <br />
              <span className="text-gold-gradient">A movement.</span>
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-8 text-lg text-white/70 leading-relaxed max-w-xl">
              Since 2013, City Gym in Naveen Shahdara has been the neighbourhood's home for serious
              training. We combine world-class equipment, certified coaches, and a community that
              shows up — every single day.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <ul className="mt-8 grid sm:grid-cols-2 gap-3 max-w-xl">
              {[
                "Open 6 AM – 9:30 PM daily",
                "AC-cooled strength & cardio zones",
                "Personalised programs & diet plans",
                "Certified & experienced trainers",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 text-white/80">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold text-black">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FEATURES ---------------- */
function Features() {
  const items = [
    { icon: Dumbbell, title: "Modern Equipment", desc: "Latest imported strength & cardio machines." },
    { icon: UserCheck, title: "Certified Trainers", desc: "Coached by qualified fitness professionals." },
    { icon: Users, title: "Personal Training", desc: "1-on-1 programs tailored to your goals." },
    { icon: Activity, title: "Functional Fitness", desc: "Move better. Perform stronger in daily life." },
    { icon: Heart, title: "Cardio Zone", desc: "Treadmills, bikes, ellipticals — always available." },
    { icon: Waves, title: "Locker Rooms", desc: "Clean, private lockers, showers & changing area." },
    { icon: Clock, title: "Flexible Timings", desc: "Open 6 AM to 9:30 PM. Train on your schedule." },
    { icon: Apple, title: "Nutrition Guidance", desc: "Diet plans built around your body & goals." },
  ];
  return (
    <section id="programs" className="relative py-28 sm:py-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div>
            <Reveal>
              <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">What we offer</div>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black max-w-2xl">
                Everything you need to <span className="text-gold-gradient">outperform</span>.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <p className="text-white/60 max-w-md">
              Eight pillars, one obsession — helping you become the strongest version of yourself.
            </p>
          </Reveal>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 60}>
              <FeatureCard {...it} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  icon: Icon,
  title,
  desc,
}: {
  icon: typeof Dumbbell;
  title: string;
  desc: string;
}) {
  return (
    <div className="group glass p-6 h-full hover-lift hover:hover-lift-active hover:border-gold/40 transition-all duration-500">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-white/10 to-white/0 border border-white/10 group-hover:from-gold/30 group-hover:border-gold/40 transition-all">
        <Icon className="h-6 w-6 text-gold" strokeWidth={1.5} />
      </div>
      <h3 className="mt-6 text-xl font-display tracking-wide">{title}</h3>
      <p className="mt-3 text-sm text-white/60 leading-relaxed">{desc}</p>
    </div>
  );
}

/* ---------------- PROGRAMS (image band) ---------------- */
function Programs() {
  const rows = [
    { title: "Strength & Conditioning", tag: "Level 01", img: g3 },
    { title: "HIIT & Fat Burn", tag: "Level 02", img: g2 },
    { title: "Bodybuilding", tag: "Level 03", img: g4 },
  ];
  return (
    <section className="relative py-28 sm:py-40 border-y border-white/5 bg-black/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Signature Programs</div>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="text-5xl sm:text-6xl font-black max-w-3xl mb-16">
            Programs engineered for <span className="text-gold-gradient">results</span>.
          </h2>
        </Reveal>
        <div className="divide-y divide-white/10 border-y border-white/10">
          {rows.map((r, i) => (
            <Reveal key={r.title} delay={i * 80}>
              <a
                href="#booking"
                className="group flex items-center justify-between py-8 sm:py-10 relative overflow-hidden"
              >
                <div className="flex items-baseline gap-6 relative z-10">
                  <span className="text-sm text-gold font-mono">{r.tag}</span>
                  <span className="text-3xl sm:text-5xl font-display tracking-tight group-hover:text-gold transition-colors">
                    {r.title}
                  </span>
                </div>
                <div className="relative z-10 flex items-center gap-3 text-white/40 group-hover:text-gold transition-colors">
                  <span className="hidden sm:inline text-sm">Explore</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
                </div>
                <div className="absolute inset-y-0 right-1/3 w-64 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <img src={r.img} alt="" className="h-full w-full object-cover rounded-xl" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0f0f0f] via-transparent to-[#0f0f0f] rounded-xl" />
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- MEMBERSHIP ---------------- */
function Membership() {
  const plans = [
    {
      name: "Monthly",
      price: "1,999",
      period: "/ month",
      features: ["Full gym access", "Cardio & strength zones", "Locker access", "Guest pass — 1"],
    },
    {
      name: "Quarterly",
      price: "4,999",
      period: "/ 3 months",
      popular: true,
      features: [
        "Everything in Monthly",
        "Personal training — 4 sessions",
        "Diet consultation",
        "Guest passes — 3",
      ],
    },
    {
      name: "Annual",
      price: "14,999",
      period: "/ year",
      features: [
        "Everything in Quarterly",
        "Personal training — 24 sessions",
        "Quarterly body analysis",
        "Priority timing slots",
      ],
    },
  ];
  return (
    <section id="membership" className="relative py-28 sm:py-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center mb-16">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Membership</div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black">
              Invest in <span className="text-gold-gradient">yourself</span>.
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 max-w-xl mx-auto text-white/60">
              Simple, honest pricing. Cancel anytime. Every plan includes a free trial session.
            </p>
          </Reveal>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 100}>
              <div
                className={`relative h-full p-8 sm:p-10 rounded-[24px] hover-lift hover:hover-lift-active transition-all duration-500 ${
                  p.popular
                    ? "gold-gradient text-black shadow-gold"
                    : "glass hover:border-gold/40"
                }`}
              >
                {p.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-black text-gold px-4 py-1 text-xs font-bold uppercase tracking-widest">
                    Most Popular
                  </div>
                )}
                <div
                  className={`text-sm uppercase tracking-widest mb-4 ${
                    p.popular ? "text-black/70" : "text-white/60"
                  }`}
                >
                  {p.name}
                </div>
                <div className="flex items-baseline gap-2">
                  <span className={`text-2xl font-bold ${p.popular ? "text-black" : "text-white"}`}>
                    ₹
                  </span>
                  <span
                    className={`font-display text-6xl ${p.popular ? "text-black" : "text-white"}`}
                  >
                    {p.price}
                  </span>
                  <span className={p.popular ? "text-black/70" : "text-white/50"}>{p.period}</span>
                </div>
                <ul className="mt-8 space-y-3">
                  {p.features.map((f) => (
                    <li
                      key={f}
                      className={`flex items-start gap-3 ${
                        p.popular ? "text-black/85" : "text-white/80"
                      }`}
                    >
                      <span
                        className={`mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                          p.popular ? "bg-black text-gold" : "bg-gold text-black"
                        }`}
                      >
                        <Check className="h-3 w-3" strokeWidth={3} />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#booking"
                  className={`mt-10 block text-center rounded-full px-6 py-3.5 font-semibold transition-all ${
                    p.popular
                      ? "bg-black text-gold hover:bg-black/90"
                      : "gold-gradient text-black hover:shadow-gold"
                  }`}
                >
                  Get Started
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- GALLERY ---------------- */
function Gallery() {
  const imgs = [
    { src: g1, h: "row-span-2" },
    { src: g2, h: "" },
    { src: g5, h: "row-span-2" },
    { src: g6, h: "" },
    { src: g3, h: "" },
    { src: g4, h: "" },
  ];
  return (
    <section id="gallery" className="relative py-28 sm:py-40 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <Reveal>
              <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Inside The Gym</div>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="text-5xl sm:text-6xl font-black">The <span className="text-gold-gradient">Floor</span>.</h2>
            </Reveal>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 auto-rows-[180px] sm:auto-rows-[240px] gap-4">
          {imgs.map((im, i) => (
            <Reveal key={i} delay={i * 70} className={im.h}>
              <div className="zoom-img h-full rounded-2xl overflow-hidden shadow-soft group relative">
                <img src={im.src} alt="Gym" loading="lazy" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- TRANSFORMATIONS ---------------- */
function Transformations() {
  const stories = [
    { name: "Rohit S.", weeks: 16, lost: "18 kg", quote: "Coaches made every workout count. Never going back." },
    { name: "Anjali M.", weeks: 12, lost: "9 kg", quote: "The community here is unreal. I actually look forward to training." },
    { name: "Vikas K.", weeks: 24, lost: "22 kg", quote: "Best decision I made this year. Period." },
  ];
  return (
    <section className="relative py-28 sm:py-40 bg-black/40 border-y border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center mb-16">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Transformations</div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black">
              Real people. <span className="text-gold-gradient">Real results.</span>
            </h2>
          </Reveal>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {stories.map((s, i) => (
            <Reveal key={s.name} delay={i * 100}>
              <div className="glass p-8 h-full hover-lift hover:hover-lift-active hover:border-gold/40 transition-all duration-500">
                <div className="grid grid-cols-2 gap-2 mb-6">
                  <div className="relative aspect-square rounded-xl overflow-hidden">
                    <img src={g2} alt="Before" className="h-full w-full object-cover grayscale" loading="lazy" />
                    <span className="absolute top-2 left-2 text-[10px] px-2 py-0.5 rounded-full bg-black/60 uppercase tracking-widest">Before</span>
                  </div>
                  <div className="relative aspect-square rounded-xl overflow-hidden">
                    <img src={p3} alt="After" className="h-full w-full object-cover" loading="lazy" />
                    <span className="absolute top-2 left-2 text-[10px] px-2 py-0.5 rounded-full bg-gold text-black uppercase tracking-widest font-semibold">After</span>
                  </div>
                </div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-display text-xl">{s.name}</span>
                  <span className="text-gold font-mono text-sm">{s.weeks} weeks</span>
                </div>
                <div className="text-3xl font-display text-gold-gradient mb-3">-{s.lost}</div>
                <p className="text-sm text-white/60 italic">"{s.quote}"</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- BMI ---------------- */
function BMI() {
  const [h, setH] = useState("");
  const [w, setW] = useState("");
  const bmi = useMemo(() => {
    const hM = parseFloat(h) / 100;
    const wK = parseFloat(w);
    if (!hM || !wK) return null;
    return wK / (hM * hM);
  }, [h, w]);
  const cat = useMemo(() => {
    if (!bmi) return null;
    if (bmi < 18.5) return { label: "Underweight", color: "#7dd3fc" };
    if (bmi < 25) return { label: "Healthy", color: "#d4af37" };
    if (bmi < 30) return { label: "Overweight", color: "#fb923c" };
    return { label: "Obese", color: "#f87171" };
  }, [bmi]);
  return (
    <section className="relative py-28 sm:py-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <Reveal>
            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">BMI Calculator</div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="text-5xl sm:text-6xl font-black">
              Know your <span className="text-gold-gradient">number</span>.
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 text-white/60 max-w-md">
              Get a quick read on your Body Mass Index. It's the starting line, not the finish.
            </p>
          </Reveal>
        </div>
        <Reveal delay={200}>
          <div className="glass p-8 sm:p-10">
            <div className="grid grid-cols-2 gap-4">
              <label className="flex flex-col gap-2">
                <span className="text-xs uppercase tracking-widest text-white/60">Height (cm)</span>
                <input
                  type="number"
                  value={h}
                  onChange={(e) => setH(e.target.value)}
                  placeholder="175"
                  className="bg-black/40 rounded-xl px-4 py-3 text-xl font-display border border-white/10 focus:border-gold outline-none transition"
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-xs uppercase tracking-widest text-white/60">Weight (kg)</span>
                <input
                  type="number"
                  value={w}
                  onChange={(e) => setW(e.target.value)}
                  placeholder="70"
                  className="bg-black/40 rounded-xl px-4 py-3 text-xl font-display border border-white/10 focus:border-gold outline-none transition"
                />
              </label>
            </div>
            <div className="mt-8 pt-8 border-t border-white/10">
              <div className="text-xs uppercase tracking-widest text-white/60 mb-3">Your BMI</div>
              <div className="flex items-end gap-6">
                <div className="font-display text-7xl text-gold-gradient min-w-[6rem]">
                  {bmi ? bmi.toFixed(1) : "—"}
                </div>
                {cat && (
                  <div
                    className="rounded-full px-4 py-1.5 text-sm font-semibold"
                    style={{ background: cat.color, color: "#0f0f0f" }}
                  >
                    {cat.label}
                  </div>
                )}
              </div>
              <div className="mt-6 h-2 rounded-full bg-white/10 overflow-hidden relative">
                <div className="absolute inset-y-0 left-0 flex w-full">
                  <span className="flex-1 bg-sky-400/60" />
                  <span className="flex-1 bg-gold/60" />
                  <span className="flex-1 bg-orange-400/60" />
                  <span className="flex-1 bg-red-400/60" />
                </div>
                {bmi && (
                  <div
                    className="absolute top-1/2 -translate-y-1/2 h-4 w-1 bg-white rounded-full transition-all duration-500"
                    style={{ left: `${Math.max(2, Math.min(98, ((bmi - 15) / 20) * 100))}%` }}
                  />
                )}
              </div>
              <div className="mt-2 grid grid-cols-4 text-[10px] uppercase tracking-widest text-white/40">
                <span>Under</span>
                <span>Healthy</span>
                <span>Over</span>
                <span>Obese</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- TRAINERS ---------------- */
function Trainers() {
  const trainers = [
    { name: "Arjun Verma", role: "Head Coach · Strength", img: p3 },
    { name: "Priya Nair", role: "HIIT & Functional", img: p2 },
    { name: "Karan Singh", role: "Bodybuilding & Nutrition", img: p1 },
  ];
  return (
    <section id="trainers" className="relative py-28 sm:py-40 bg-black/40 border-y border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <Reveal>
              <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Meet The Coaches</div>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="text-5xl sm:text-6xl font-black">
                Trained by the <span className="text-gold-gradient">best</span>.
              </h2>
            </Reveal>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {trainers.map((t, i) => (
            <Reveal key={t.name} delay={i * 100}>
              <div className="group relative rounded-3xl overflow-hidden aspect-[3/4] hover-lift hover:hover-lift-active transition-all duration-500">
                <img src={t.img} alt={t.name} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <div className="text-xs uppercase tracking-widest text-gold mb-1">{t.role}</div>
                  <div className="font-display text-3xl">{t.name}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- TESTIMONIALS ---------------- */
function Testimonials() {
  const items = [
    {
      name: "Neha Sharma",
      role: "Member since 2022",
      img: p2,
      rating: 5,
      quote: "The trainers are patient, knowledgeable, and push you just enough. Best gym in Shahdara, hands down.",
    },
    {
      name: "Rahul Batra",
      role: "Member since 2021",
      img: p1,
      rating: 5,
      quote: "Clean, well-equipped and never overcrowded. Feels premium without the premium price tag.",
    },
    {
      name: "Sameer Khan",
      role: "Member since 2023",
      img: p3,
      rating: 5,
      quote: "Lost 15 kg in 4 months following their diet + training plan. Real coaches, real results.",
    },
  ];
  return (
    <section className="relative py-28 sm:py-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center mb-16">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Testimonials</div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black">
              Words from <span className="text-gold-gradient">the floor</span>.
            </h2>
          </Reveal>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <Reveal key={t.name} delay={i * 100}>
              <div className="glass p-8 h-full hover:border-gold/40 hover-lift hover:hover-lift-active transition-all duration-500">
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: t.rating }).map((_, k) => (
                    <Star key={k} className="h-4 w-4 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-lg text-white/85 leading-relaxed">"{t.quote}"</p>
                <div className="mt-8 flex items-center gap-3 pt-6 border-t border-white/10">
                  <img src={t.img} alt={t.name} className="h-12 w-12 rounded-full object-cover" loading="lazy" />
                  <div>
                    <div className="font-semibold">{t.name}</div>
                    <div className="text-xs text-white/50">{t.role}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- BOOKING ---------------- */
function Booking() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", time: "", goal: "" });
  const upd = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [k]: e.target.value });
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 5000);
    setForm({ name: "", phone: "", email: "", time: "", goal: "" });
  };
  return (
    <section id="booking" className="relative py-28 sm:py-40 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-5 gap-12 items-start">
        <div className="lg:col-span-2">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Free Trial</div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black">
              Try it. <br />
              <span className="text-gold-gradient">On the house.</span>
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 text-white/60 max-w-md">
              Drop your details and we'll get you set up for a free introductory session with a coach.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-8 space-y-3 text-white/70">
              <a href={`tel:${PHONE}`} className="flex items-center gap-3 hover:text-gold transition">
                <Phone className="h-4 w-4 text-gold" /> {PHONE}
              </a>
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-gold mt-0.5" /> <span>{ADDRESS}</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-4 w-4 text-gold" /> Mon – Sun · 6:00 AM – 9:30 PM
              </div>
            </div>
          </Reveal>
        </div>
        <Reveal delay={200} className="lg:col-span-3 w-full">
          <form onSubmit={submit} className="glass p-8 sm:p-10 space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Name" required value={form.name} onChange={upd("name")} placeholder="Your full name" />
              <Field label="Phone" required type="tel" value={form.phone} onChange={upd("phone")} placeholder="+91" />
            </div>
            <Field label="Email" type="email" value={form.email} onChange={upd("email")} placeholder="you@email.com" />
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <div className="text-xs uppercase tracking-widest text-white/60 mb-2">Preferred Time</div>
                <select
                  required
                  value={form.time}
                  onChange={upd("time")}
                  className="w-full bg-black/40 rounded-xl px-4 py-3.5 border border-white/10 focus:border-gold outline-none transition"
                >
                  <option value="">Select a slot</option>
                  <option>Early morning (6 – 8 AM)</option>
                  <option>Morning (8 – 11 AM)</option>
                  <option>Afternoon (12 – 4 PM)</option>
                  <option>Evening (5 – 8 PM)</option>
                  <option>Night (8 – 9:30 PM)</option>
                </select>
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-white/60 mb-2">Fitness Goal</div>
                <select
                  required
                  value={form.goal}
                  onChange={upd("goal")}
                  className="w-full bg-black/40 rounded-xl px-4 py-3.5 border border-white/10 focus:border-gold outline-none transition"
                >
                  <option value="">Pick your goal</option>
                  <option>Fat loss</option>
                  <option>Muscle gain</option>
                  <option>Strength & performance</option>
                  <option>General fitness</option>
                  <option>Post-injury rehab</option>
                </select>
              </div>
            </div>
            <button
              type="submit"
              className="w-full mt-4 gold-gradient text-black rounded-full py-4 font-semibold text-lg hover:shadow-gold transition-all"
            >
              {sent ? "✓ We'll call you shortly" : "Book Free Trial"}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label,
  ...props
}: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <div className="text-xs uppercase tracking-widest text-white/60 mb-2">{label}</div>
      <input
        {...props}
        className="w-full bg-black/40 rounded-xl px-4 py-3.5 border border-white/10 focus:border-gold outline-none transition"
      />
    </label>
  );
}

/* ---------------- FAQ ---------------- */
function FAQ() {
  const items = [
    { q: "Do you offer a free trial session?", a: "Yes. Every new visitor gets one complimentary session with a coach — no card, no commitment." },
    { q: "What are your timings?", a: "We're open every day from 6:00 AM to 9:30 PM, including weekends and most public holidays." },
    { q: "Is personal training included?", a: "PT sessions are included in Quarterly and Annual plans. Monthly members can add PT sessions on demand." },
    { q: "Do you provide diet plans?", a: "Yes. Our coaches build simple, sustainable diet plans around your goals, preferences, and budget." },
    { q: "Where exactly are you located?", a: "E-16, Panchsheel Garden, Naveen Shahdara, Delhi 110032. Easy access from GTB Nagar, Seelampur and Welcome metro stations." },
    { q: "Can I freeze my membership?", a: "Absolutely. Quarterly and Annual members can freeze memberships for up to 30 days per year." },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="relative py-28 sm:py-40 bg-black/40 border-y border-white/5">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="text-center mb-14">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">FAQ</div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="text-5xl sm:text-6xl font-black">
              Common <span className="text-gold-gradient">questions</span>.
            </h2>
          </Reveal>
        </div>
        <div className="space-y-3">
          {items.map((it, i) => (
            <Reveal key={i} delay={i * 60}>
              <div className={`glass overflow-hidden transition-all ${open === i ? "border-gold/40" : ""}`}>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between text-left p-6 gap-6"
                >
                  <span className="text-lg font-semibold">{it.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-gold transition-transform duration-300 ${
                      open === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-500 ${
                    open === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6 text-white/70 leading-relaxed">{it.a}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- MAP ---------------- */
function MapSection() {
  return (
    <section id="contact" className="relative py-28 sm:py-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          <Reveal className="lg:col-span-1 flex">
            <div className="glass p-8 sm:p-10 flex flex-col justify-between w-full">
              <div>
                <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Visit Us</div>
                <h2 className="text-4xl sm:text-5xl font-black">
                  Find the <span className="text-gold-gradient">iron</span>.
                </h2>
                <div className="mt-8 space-y-4 text-white/75">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-gold mt-0.5 shrink-0" />
                    <span>{ADDRESS}</span>
                  </div>
                  <a href={`tel:${PHONE}`} className="flex items-center gap-3 hover:text-gold transition">
                    <Phone className="h-5 w-5 text-gold" /> {PHONE}
                  </a>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-gold" /> 6:00 AM – 9:30 PM · Daily
                  </div>
                </div>
              </div>
              <a
                href={MAPS_LINK}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center justify-center gap-2 gold-gradient text-black rounded-full px-6 py-3 font-semibold hover:shadow-gold transition"
              >
                Get Directions <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
          <Reveal delay={150} className="lg:col-span-2">
            <div className="relative rounded-3xl overflow-hidden shadow-soft border border-white/10 h-[420px] lg:h-full min-h-[420px]">
              <iframe
                title="City Gym location"
                src={MAPS_EMBED}
                className="absolute inset-0 h-full w-full grayscale contrast-125 opacity-90"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-gold/20 rounded-3xl" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer() {
  return (
    <footer className="relative border-t border-white/10 pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="font-display text-4xl">
              <span className="text-gold-gradient">CITY</span> GYM
            </div>
            <p className="mt-4 text-white/60 max-w-sm">
              Naveen Shahdara's home for serious training. Stronger every day, together.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"
                 className="h-11 w-11 grid place-items-center rounded-full glass hover:border-gold/40 transition">
                <Instagram className="h-4 w-4" />
              </a>
              <a href={WHATSAPP} target="_blank" rel="noreferrer" aria-label="WhatsApp"
                 className="h-11 w-11 grid place-items-center rounded-full glass hover:border-gold/40 transition">
                <MessageCircle className="h-4 w-4" />
              </a>
              <a href={MAPS_LINK} target="_blank" rel="noreferrer" aria-label="Google Maps"
                 className="h-11 w-11 grid place-items-center rounded-full glass hover:border-gold/40 transition">
                <MapPin className="h-4 w-4" />
              </a>
            </div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-gold mb-4">Opening Hours</div>
            <ul className="space-y-2 text-white/70 text-sm">
              <li className="flex justify-between"><span>Mon – Fri</span><span>6 AM – 9:30 PM</span></li>
              <li className="flex justify-between"><span>Saturday</span><span>6 AM – 9:30 PM</span></li>
              <li className="flex justify-between"><span>Sunday</span><span>6 AM – 2 PM</span></li>
            </ul>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-gold mb-4">Contact</div>
            <ul className="space-y-3 text-white/70 text-sm">
              <li className="flex items-start gap-2"><MapPin className="h-4 w-4 text-gold mt-0.5 shrink-0" /><span>{ADDRESS}</span></li>
              <li><a href={`tel:${PHONE}`} className="flex items-center gap-2 hover:text-gold"><Phone className="h-4 w-4 text-gold" /> {PHONE}</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <div>© {new Date().getFullYear()} City Gym · Naveen Shahdara. All rights reserved.</div>
          <div>Stronger Every Day.</div>
        </div>
      </div>
    </footer>
  );
}

/* ---------------- FLOATING WHATSAPP ---------------- */
function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-40 group"
    >
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full pulse-ring">
        <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-5px_rgba(37,211,102,0.6)] group-hover:scale-110 transition-transform">
          <MessageCircle className="h-6 w-6" strokeWidth={2} />
        </span>
      </span>
    </a>
  );
}
