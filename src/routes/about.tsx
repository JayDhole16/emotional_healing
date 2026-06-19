import { createFileRoute } from "@tanstack/react-router";
import { GraduationCap, Award, ClipboardCheck, Target, Eye, Heart } from "lucide-react";
import { BRAND } from "@/data/content";
import { PageHero } from "@/components/sections/PageHero";
import { CTABanner } from "@/components/sections/CTABanner";
import { SectionHeader } from "@/components/ui-custom/SectionHeader";
import { Reveal } from "@/components/ui-custom/Reveal";
import { ImagePlaceholder } from "@/components/ui-custom/ImagePlaceholder";
import { SacredGeometry } from "@/components/ui-custom/SacredGeometry";

const SITE_URL = "https://www.sunilsaldanha.com";

const aboutJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${SITE_URL}/about#webpage`,
  url: `${SITE_URL}/about`,
  name: "About Sunil Saldanha | Emotional Healing Specialist — Curamend",
  mainEntity: {
    "@type": "Person",
    name: "Sunil Saldanha",
    jobTitle: "Emotional Healing Specialist",
    description:
      "Sunil Saldanha has over 8 years of clinical practice in emotional healing, integrating cognitive neuroscience, trauma therapy, breathwork and energy psychology.",
    worksFor: { "@type": "Organization", name: "Curamend" },
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "About", item: `${SITE_URL}/about` },
    ],
  },
};

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Sunil Saldanha | Emotional Healing Specialist — Curamend" },
      {
        name: "description",
        content:
          "Meet Sunil Saldanha — emotional healing specialist and founder of Curamend. 8+ years blending neuroscience, trauma therapy, breathwork and ancient healing wisdom.",
      },
      {
        name: "keywords",
        content:
          "Sunil Saldanha, about Sunil Saldanha, emotional healing specialist, Curamend founder, trauma therapist, neuroscience healer, breathwork expert, energy psychology",
      },
      { property: "og:title", content: "About Sunil Saldanha | Emotional Healing Specialist — Curamend" },
      {
        property: "og:description",
        content:
          "The story, credentials and healing philosophy of Sunil Saldanha — founder of Curamend's emotional healing practice.",
      },
      { property: "og:url", content: `${SITE_URL}/about` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/about` }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(aboutJsonLd) }],
  }),
  component: About,
});

const credentials = [
  { icon: GraduationCap, label: "Educational Qualification — [Client to provide]" },
  { icon: Award, label: "Professional Certification — [Client to provide]" },
  { icon: ClipboardCheck, label: "Registration / License — [Client to provide]" },
  { icon: GraduationCap, label: "Specialised Training — [Client to provide]" },
  { icon: Award, label: "Affiliations — [Client to provide]" },
  { icon: ClipboardCheck, label: "Continuing Education — [Client to provide]" },
];

const vision = [
  {
    icon: Target,
    title: "Mission",
    text: "To make profound emotional healing accessible — grounded in science, delivered with compassion.",
  },
  {
    icon: Eye,
    title: "Vision",
    text: "A world where emotional wellbeing is treated with the same rigour and dignity as physical health.",
  },
  {
    icon: Heart,
    title: "Values",
    text: "Integrity, evidence, presence, and an unwavering respect for each person's inner journey.",
  },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="Meet Your Healer"
        title={<>About {BRAND.doctor}</>}
        subtitle="Emotional Healing Specialist & Founder of Curamend — where ancient wisdom and modern neuroscience meet."
      />

      {/* Story */}
      <section className="bg-navy py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="mx-auto w-full max-w-md">
            <img
              src="/about-portrait.jpg"
              alt="Sunil Saldanha full biography photo"
              className="aspect-[6/7] w-full object-cover object-[center_20%] rounded-2xl border border-gold/40"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <SectionHeader
              eyebrow="The Story"
              title="A Lifetime Devoted to Healing"
              align="left"
            />
            <div className="mt-6 space-y-4 font-body text-[15px] leading-relaxed text-platinum/80">
              <p>
                Emotional healing is the process of recovering from emotional wounds inflicted by
                negative life experiences. Stressors threatening survival — violence, accidents,
                disease — and those threatening reproduction — breakups, divorce, miscarriage —
                can all leave unresolved trauma in the body and mind.
              </p>
              <p>
                With over eight years of clinical practice spanning conventional psychology and
                integrative healing modalities, Sunil Saldanha has developed a methodology that
                works at the neurological root of emotional wounds. When a threat is not resolved,
                the mind re-plays it — searching for completion. His work provides that completion.
              </p>
              <p>
                Trauma activates defensive responses — fight, flight, freeze, collapse — that
                protected us then but can prevent us from being functional now. Sunil Saldanha's
                approach safely processes these stored responses, guiding clients through expression,
                cognitive re-processing, and interpersonal healing in a supported group environment.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Credentials */}
      <section className="bg-light-surface py-24">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <SectionHeader
            eyebrow="Qualifications"
            title="Credentials & Training"
            light
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {credentials.map((c, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <div className="flex items-center gap-4 rounded-xl border border-violet/15 bg-white p-5">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-violet/10 text-violet">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <span className="font-body text-sm text-navy/75">{c.label}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="relative overflow-hidden bg-navy py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2">
          <Reveal>
            <SectionHeader
              eyebrow="Philosophy"
              title="Healing the Whole Person"
              align="left"
            />
            <p className="mt-6 font-body text-[15px] leading-relaxed text-platinum/80">
              True healing happens when the mind, body and spirit are addressed together. Emotional
              wounds stem from unresolved threat responses stored in the nervous system. Sunil
              Saldanha's work refuses the false choice between science and soul — drawing on
              neuroplasticity research, trauma-informed care, breathwork and energy psychology to
              reach what neither could alone.
            </p>
            <p className="mt-4 font-body text-[15px] leading-relaxed text-platinum/80">
              Most people who go through trauma can be positively transformed. Re-processing
              traumatic experience causes major cognitive shifts — changing how people see themselves,
              their relationships and the world. That transformation is what this practice exists
              to guide.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="relative mx-auto flex h-72 w-full max-w-md items-center justify-center">
            <div className="h-72 w-72 text-violet opacity-50">
              <SacredGeometry className="h-full w-full" />
            </div>
            <div className="absolute h-44 w-44 text-gold opacity-40">
              <SacredGeometry className="h-full w-full" reverse />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Vision */}
      <section className="bg-light-surface py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHeader eyebrow="The Curamend Vision" title="What Drives Us" light />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {vision.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.1}>
                <div className="h-full rounded-2xl border-t-2 border-gold bg-white p-7 shadow-[0_12px_40px_-26px_rgba(26,31,75,0.4)]">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-gold/15 text-gold">
                    <v.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-2xl text-navy">{v.title}</h3>
                  <p className="mt-2 font-body text-[15px] leading-relaxed text-navy/70">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-navy py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHeader eyebrow="Gallery" title="Inside Curamend" />
          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3">
            {[
              "https://www.curamendhealthcare.com/assets/images/award-gallery-1/influncer-gallery/influncer-img-17.jpeg",
              "https://www.curamendhealthcare.com/assets/images/award-gallery-1/influncer-gallery/influncer-img-22.jpeg",
              "https://www.curamendhealthcare.com/assets/images/award-gallery-1/influncer-gallery/influncer-img-24.jpeg",
              "https://www.curamendhealthcare.com/assets/images/award-gallery-1/influncer-gallery/influncer-img-20.jpeg",
              "https://www.curamendhealthcare.com/assets/images/award-gallery-1/influncer-gallery/influncer-img-15.jpeg",
              "https://www.curamendhealthcare.com/assets/images/award-gallery-1/influncer-gallery/influncer-img-1.jpeg",
            ].map((src, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <img
                  src={src}
                  alt={`Inside Curamend Gallery ${i + 1}`}
                  className="aspect-[4/3] w-full rounded-2xl object-cover border border-violet/30"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner title="Contact Us with Sunil Saldanha" ctaLabel="Contact Us" />
    </>
  );
}
