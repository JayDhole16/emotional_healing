import { createFileRoute } from "@tanstack/react-router";
import { Calendar, Clock, CheckCircle2 } from "lucide-react";
import { SESSION_INCLUDES } from "@/data/content";
import { PageHero } from "@/components/sections/PageHero";
import { CTABanner } from "@/components/sections/CTABanner";
import { SectionHeader } from "@/components/ui-custom/SectionHeader";
import { Reveal } from "@/components/ui-custom/Reveal";
import { ImagePlaceholder } from "@/components/ui-custom/ImagePlaceholder";
import { ButtonLink } from "@/components/ui-custom/Button";

const SITE_URL = "https://www.sunilsaldanha.com";

const sessionsJsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  "@id": `${SITE_URL}/sessions#event`,
  name: "Saturday Emotional Healing Sessions with Sunil Saldanha",
  description:
    "Two-hour group emotional healing sessions held every Saturday, personally led by Sunil Saldanha at Curamend.",
  eventSchedule: {
    "@type": "Schedule",
    repeatFrequency: "P1W",
    byDay: "https://schema.org/Saturday",
    duration: "PT2H",
  },
  organizer: {
    "@type": "Person",
    name: "Sunil Saldanha",
    url: `${SITE_URL}/about`,
  },
  url: `${SITE_URL}/sessions`,
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Sessions", item: `${SITE_URL}/sessions` },
    ],
  },
};

export const Route = createFileRoute("/sessions")({
  head: () => ({
    meta: [
      { title: "Saturday Emotional Healing Sessions with Sunil Saldanha | Curamend" },
      {
        name: "description",
        content:
          "Join Sunil Saldanha's two-hour group emotional healing sessions every Saturday at Curamend. Limited seats — reserve your spot today.",
      },
      {
        name: "keywords",
        content:
          "Saturday healing sessions, group emotional healing, Sunil Saldanha sessions, Curamend sessions, emotional healing group, weekly healing session, trauma healing group, breathwork session",
      },
      { property: "og:title", content: "Saturday Emotional Healing Sessions — Sunil Saldanha | Curamend" },
      {
        property: "og:description",
        content:
          "Two-hour emotional healing sessions every Saturday with Sunil Saldanha. What to expect, what's included and how to reserve your spot.",
      },
      { property: "og:url", content: `${SITE_URL}/sessions` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/sessions` }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(sessionsJsonLd) }],
  }),
  component: Sessions,
});

const whatToBring = [
  "An open mind and a willingness to feel",
  "Comfortable, loose-fitting clothing",
  "A personal water bottle",
  "A journal or notebook (optional)",
  "Any questions you'd like answered",
];


function Sessions() {
  return (
    <>
      <PageHero
        eyebrow="Every Saturday · 2 Hours"
        title="Saturday Healing Sessions"
        subtitle="A protected space, once a week, to do the deep work of emotional healing — guided personally by Sunil Saldanha."
      >
        <div className="mt-8 flex justify-center">
          <ButtonLink to="/contact" size="lg">
            Reserve Your Spot
          </ButtonLink>
        </div>
      </PageHero>

      {/* Format */}
      <section className="bg-navy py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2">
          <Reveal>
            <SectionHeader eyebrow="The Format" title="What to Expect" align="left" />
            <p className="mt-6 font-body text-[15px] leading-relaxed text-platinum/80">
              Each session unfolds over two unhurried hours. You'll move through grounding,
              breathwork for nervous system regulation, guided emotional expression and cognitive
              re-processing — all within a safe, confidential group container. Healing through
              shared presence is not incidental; research consistently shows that interpersonal
              connection is central to emotional recovery.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { icon: Calendar, label: "Every Saturday" },
                { icon: Clock, label: "2 Hours" },
              ].map((f) => (
                <div key={f.label} className="rounded-xl border border-border bg-surface p-4 text-center">
                  <f.icon className="mx-auto h-6 w-6 text-gold" />
                  <p className="mt-2 font-ui text-sm font-semibold text-foreground">{f.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1} className="mx-auto w-full max-w-md">
            <img
              src="https://www.curamendhealthcare.com/assets/images/award-gallery-1/influncer-gallery/influncer-img-24.jpeg"
              alt="Session environment photo"
              className="aspect-[4/3] w-full rounded-2xl object-cover border border-violet/40"
            />
          </Reveal>
        </div>
      </section>

      {/* Schedule */}
      <section className="bg-light-surface py-24">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <SectionHeader eyebrow="Schedule" title="Weekly Rhythm" light />
          <Reveal className="mt-12">
            <div className="grid grid-cols-7 gap-2 sm:gap-3">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => {
                const isSat = d === "Sat";
                return (
                  <div
                    key={d}
                    className={`rounded-xl p-3 text-center sm:p-5 ${
                      isSat
                        ? "bg-gradient-to-br from-violet to-[#7a52d6] text-white shadow-glow"
                        : "border border-violet/15 bg-white text-navy/50"
                    }`}
                  >
                    <p className="font-ui text-xs font-semibold uppercase">{d}</p>
                    {isSat && <p className="mt-2 font-display text-lg">Session</p>}
                  </div>
                );
              })}
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-violet/15 bg-white p-5 text-center">
                <p className="font-ui text-xs uppercase tracking-wide text-navy/50">Time</p>
                <p className="mt-1 font-display text-xl text-navy">[To be confirmed]</p>
              </div>
              <div className="rounded-xl border border-violet/15 bg-white p-5 text-center">
                <p className="font-ui text-xs uppercase tracking-wide text-navy/50">Duration</p>
                <p className="mt-1 font-display text-xl text-navy">2 Hours</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Included */}
      <section className="bg-navy py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHeader eyebrow="Inclusions" title="What's Included" />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SESSION_INCLUDES.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.06}>
                <div className="flex h-full gap-4 rounded-2xl border border-border bg-surface p-6">
                  <CheckCircle2 className="h-6 w-6 shrink-0 text-gold" />
                  <div>
                    <h3 className="font-ui text-base font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-1 font-body text-sm text-platinum/70">{item.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Journey images */}
      <section className="bg-light-surface py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHeader eyebrow="The Experience" title="A Session, Step by Step" light />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <Reveal>
              <img
                src="https://www.curamendhealthcare.com/assets/images/award-gallery-1/influncer-gallery/influncer-img-18.jpeg"
                alt="Session environment photo"
                className="aspect-[4/3] w-full rounded-2xl object-cover border border-violet/30"
              />
            </Reveal>
            <Reveal delay={0.1}>
              <img
                src="https://www.curamendhealthcare.com/assets/images/award-gallery-1/influncer-gallery/influncer-img-20.jpeg"
                alt="Group activity photo"
                className="aspect-[4/3] w-full rounded-2xl object-cover border border-violet/30"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* What to bring */}
      <section className="bg-light-surface py-24">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <SectionHeader eyebrow="Prepare" title="What to Bring" light />
          <Reveal className="mt-10">
            <ul className="space-y-3">
              {whatToBring.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-violet/15 bg-white p-4 font-body text-[15px] text-navy/75"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-violet" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <p className="mt-6 text-center font-ui text-sm text-navy/50">
            Available across all Curamend sessions.
          </p>
        </div>
      </section>

      <CTABanner title="Reserve Your Saturday" ctaLabel="Contact Us" />
    </>
  );
}
