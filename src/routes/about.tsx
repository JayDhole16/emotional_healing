import { createFileRoute } from "@tanstack/react-router";
import { GraduationCap, Award, ClipboardCheck, Target, Eye, Heart } from "lucide-react";
import { BRAND } from "@/data/content";
import { PageHero } from "@/components/sections/PageHero";
import { CTABanner } from "@/components/sections/CTABanner";
import { SectionHeader } from "@/components/ui-custom/SectionHeader";
import { Reveal } from "@/components/ui-custom/Reveal";
import { ImagePlaceholder } from "@/components/ui-custom/ImagePlaceholder";
import { SacredGeometry } from "@/components/ui-custom/SacredGeometry";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Dr. Sunil Sadhana | Curamend" },
      {
        name: "description",
        content:
          "Meet Dr. Sunil Sadhana — emotional healing specialist and founder of Curamend, blending neuroscience with ancient healing wisdom.",
      },
      { property: "og:title", content: "About Dr. Sunil Sadhana | Curamend" },
      {
        property: "og:description",
        content: "The story, credentials and philosophy behind Curamend's emotional healing practice.",
      },
    ],
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
            <ImagePlaceholder
              label="Dr. Sadhana full biography photo"
              ratio="6 / 7"
              className="border-gold/40"
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
                With over eight years of clinical practice spanning conventional psychology and
                integrative healing modalities, Dr. Sadhana has developed a proprietary methodology
                that addresses emotional wounds at their root.
              </p>
              <p className="text-muted-ink">
                [Placeholder biography paragraph two — client to provide details on background,
                training and the moment that shaped this work.]
              </p>
              <p className="text-muted-ink">
                [Placeholder biography paragraph three — client to provide philosophy and the
                approach that makes Curamend distinct.]
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
              True healing happens when the mind, body and spirit are addressed as one. Dr. Sadhana's
              work refuses the false choice between science and soul — drawing on both to reach what
              neither could alone.
            </p>
            <p className="mt-4 font-body text-[15px] leading-relaxed text-muted-ink">
              [Placeholder — client to expand on the philosophy and lived principles guiding the
              practice.]
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
            {Array.from({ length: 6 }).map((_, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <ImagePlaceholder
                  label={`Gallery: Session / Clinic / Event ${i + 1}`}
                  ratio="4 / 3"
                  className="border-violet/30"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner title="Book a Session with Dr. Sadhana" ctaLabel="Book Now" />
    </>
  );
}
