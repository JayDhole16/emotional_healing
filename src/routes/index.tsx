import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronDown, ArrowRight, Calendar, Clock, MapPin, Users, Phone } from "lucide-react";
import { motion } from "framer-motion";
import {
  BRAND,
  STATS,
  VALUE_CARDS,
  TESTIMONIALS,
  LOCATIONS,
  SESSION_FACTS,
} from "@/data/content";
import { SacredGeometry } from "@/components/ui-custom/SacredGeometry";
import { Reveal } from "@/components/ui-custom/Reveal";
import { ButtonLink } from "@/components/ui-custom/Button";
import { AnimatedCounter } from "@/components/ui-custom/AnimatedCounter";
import { SectionHeader } from "@/components/ui-custom/SectionHeader";
import { ImagePlaceholder } from "@/components/ui-custom/ImagePlaceholder";
import { TestimonialCard } from "@/components/sections/TestimonialCard";
import { LocationCard } from "@/components/sections/LocationCard";
import { CTABanner } from "@/components/sections/CTABanner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Curamend — Heal What Words Cannot Reach | Dr. Sunil Sadhana" },
      {
        name: "description",
        content:
          "Emotional healing with Dr. Sunil Sadhana — neuroscience meets ancient wisdom. Group sessions every Saturday across Thane, Ghatkopar & Kalyan.",
      },
      { property: "og:title", content: "Curamend — Heal What Words Cannot Reach" },
      {
        property: "og:description",
        content: "Evidence-based, spiritually grounded emotional healing. Sessions every Saturday.",
      },
    ],
  }),
  component: Home,
});

const factIcons = { calendar: Calendar, clock: Clock, pin: MapPin, users: Users } as const;

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-screen items-center overflow-hidden bg-gradient-cosmic pt-28">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[820px] w-[820px] -translate-x-1/2 -translate-y-1/2 text-violet opacity-[0.08]">
          <SacredGeometry className="h-full w-full" />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(45,156,219,0.12),transparent_45%)]" />

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-5 pb-16 sm:px-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="text-center lg:text-left">
            <Reveal>
              <p className="font-ui text-xs font-semibold uppercase tracking-[0.3em] text-cerulean">
                {BRAND.legal}
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-5 font-display text-5xl font-light leading-[1.02] text-foreground sm:text-6xl md:text-7xl lg:text-[5.2rem]">
                Heal What Words
                <span className="block animate-pulse-glow text-gradient-violet">
                  Cannot Reach.
                </span>
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mx-auto mt-6 max-w-xl font-body text-lg text-platinum/80 lg:mx-0">
                {BRAND.doctor} bridges the wisdom of ancient healing traditions with the rigor of
                modern neuroscience — guiding you to emotional freedom, one Saturday at a time.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-9 flex flex-wrap justify-center gap-4 lg:justify-start">
                <ButtonLink to="/contact" size="lg">
                  Book Your Session
                </ButtonLink>
                <ButtonLink to="/science" variant="outline" size="lg">
                  Discover the Science
                </ButtonLink>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2} className="mx-auto w-full max-w-md">
            <div className="relative">
              <div className="absolute -inset-3 rounded-[28px] bg-gradient-to-br from-violet/30 to-gold/20 blur-xl" />
              <ImagePlaceholder
                label="Doctor's Portrait Photo"
                ratio="4 / 5"
                rounded="rounded-3xl"
                className="relative border-violet/50 bg-surface/60"
              />
            </div>
          </Reveal>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gold"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
        >
          <ChevronDown className="h-7 w-7" />
        </motion.div>
      </section>

      {/* Stats bar */}
      <section className="border-y border-border bg-surface">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-10 px-5 py-14 sm:px-8 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 0.08}
              className="relative flex flex-col items-center text-center lg:border-r lg:border-violet/20 lg:last:border-r-0"
            >
              <s.icon className="h-6 w-6 text-cerulean" />
              <div className="mt-3 font-display text-5xl text-gold sm:text-6xl">
                <AnimatedCounter value={s.value} suffix={s.suffix} />
              </div>
              <p className="mt-1 font-ui text-sm uppercase tracking-wide text-muted-ink">
                {s.label}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Why Curamend */}
      <section className="bg-light-surface py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHeader
            eyebrow="The Curamend Difference"
            title="Where Science and Spirit Converge"
            light
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {VALUE_CARDS.map((card, i) => (
              <Reveal
                key={card.title}
                delay={i * 0.1}
                className={i === 1 ? "md:-mt-6" : ""}
              >
                <div className="group flex h-full flex-col rounded-2xl border-t-2 border-violet bg-white p-7 shadow-[0_12px_40px_-26px_rgba(26,31,75,0.4)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_-30px_rgba(91,79,207,0.45)]">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-violet/10 text-violet">
                    <card.icon className="h-6 w-6" />
                  </span>
                  <p className="mt-5 font-ui text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                    {card.eyebrow}
                  </p>
                  <h3 className="mt-1.5 font-display text-2xl text-navy">{card.title}</h3>
                  <p className="mt-3 flex-1 font-body text-[15px] leading-relaxed text-navy/70">
                    {card.text}
                  </p>
                  <ImagePlaceholder
                    label={card.imageLabel}
                    ratio="3 / 2"
                    className="mt-6 border-violet/30 bg-violet/[0.04]"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* About teaser */}
      <section className="relative overflow-hidden bg-navy py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2">
          <Reveal className="relative mx-auto w-full max-w-md">
            <ImagePlaceholder
              label="Dr. Sunil Sadhana — Professional Photo"
              ratio="6 / 7"
              rounded="rounded-2xl"
              className="border-gold/40"
            />
            <div className="absolute bottom-4 left-4 rounded-full bg-gradient-to-r from-violet to-[#7a52d6] px-5 py-2 font-ui text-sm font-semibold text-white shadow-glow">
              8+ Years · 500+ Clients
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="font-ui text-xs font-semibold uppercase tracking-[0.28em] text-cerulean">
              Meet Your Healer
            </p>
            <h2 className="mt-3 font-display text-4xl text-foreground sm:text-5xl">
              {BRAND.doctor}
            </h2>
            <p className="mt-2 font-ui text-sm text-gold">
              Emotional Healing Specialist &amp; Founder, Curamend
            </p>
            <div className="mt-5 space-y-4 font-body text-[15px] leading-relaxed text-platinum/80">
              <p>
                With over eight years of clinical practice spanning conventional psychology and
                integrative healing modalities, Dr. Sadhana has developed a proprietary methodology
                that addresses emotional wounds at their root — not merely their symptoms.
              </p>
              <p className="text-muted-ink">
                [Placeholder biography — to be replaced by client. Add credentials, philosophy and
                professional background here.]
              </p>
            </div>
            <Link
              to="/about"
              className="mt-6 inline-flex items-center gap-1 font-ui text-sm font-semibold text-gold hover:text-amber"
            >
              Dr. Sadhana's Full Story <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Session spotlight */}
      <section className="relative overflow-hidden bg-gradient-spotlight py-24">
        <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
          <Reveal>
            <p className="font-ui text-xs font-semibold uppercase tracking-[0.28em] text-platinum">
              Join Us Every Saturday
            </p>
            <h2 className="mt-3 font-display text-4xl text-white sm:text-5xl">
              Two Hours That Can Change Everything
            </h2>
            <p className="mx-auto mt-4 max-w-2xl font-body text-lg text-platinum/90">
              Our group emotional healing sessions run every Saturday, two hours each, across all
              three Curamend locations. Limited seats. Transformative results.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {SESSION_FACTS.map((f) => {
                const Icon = factIcons[f.icon as keyof typeof factIcons];
                return (
                  <div
                    key={f.label}
                    className="rounded-2xl border border-white/15 bg-white/10 px-4 py-5 backdrop-blur-sm"
                  >
                    <Icon className="mx-auto h-6 w-6 text-gold" />
                    <p className="mt-2 font-ui text-sm font-semibold text-white">{f.label}</p>
                  </div>
                );
              })}
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-9 flex flex-col items-center gap-4">
              <ButtonLink to="/sessions" variant="gold" size="lg">
                Reserve Your Spot
              </ButtonLink>
              <a
                href={`tel:${BRAND.whatsapp}`}
                className="inline-flex items-center gap-2 font-ui text-sm text-platinum/90 hover:text-white"
              >
                <Phone className="h-4 w-4" /> Questions about sessions? Call {BRAND.primaryPhone}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Testimonials preview */}
      <section className="bg-light-surface py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHeader eyebrow="Testimonials" title="Voices of Transformation" light />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.slice(0, 3).map((t, i) => (
              <Reveal key={t.name} delay={i * 0.1}>
                <TestimonialCard t={t} />
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/testimonials"
              className="inline-flex items-center gap-1 font-ui text-sm font-semibold text-violet hover:text-[#7a52d6]"
            >
              Read All Testimonials <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Locations preview */}
      <section className="bg-navy py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHeader eyebrow="Visit Us" title="Find Us Near You" />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {LOCATIONS.map((loc, i) => (
              <Reveal key={loc.id} delay={i * 0.1}>
                <LocationCard loc={loc} />
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/locations"
              className="inline-flex items-center gap-1 font-ui text-sm font-semibold text-gold hover:text-amber"
            >
              View All Locations <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
