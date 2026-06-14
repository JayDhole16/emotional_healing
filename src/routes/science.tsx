import { createFileRoute } from "@tanstack/react-router";
import { SCIENCE_PRINCIPLES, METHODOLOGY_STEPS } from "@/data/content";
import { PageHero } from "@/components/sections/PageHero";
import { CTABanner } from "@/components/sections/CTABanner";
import { SectionHeader } from "@/components/ui-custom/SectionHeader";
import { Reveal } from "@/components/ui-custom/Reveal";
import { ImagePlaceholder } from "@/components/ui-custom/ImagePlaceholder";
import { AnimatedCounter } from "@/components/ui-custom/AnimatedCounter";
import { ArrowRight, FileText } from "lucide-react";

export const Route = createFileRoute("/science")({
  head: () => ({
    meta: [
      { title: "The Science of Emotional Healing | Curamend" },
      {
        name: "description",
        content:
          "Peer-reviewed, evidence-informed and clinically validated. Discover the neuroscience behind Curamend's emotional healing methodology.",
      },
      { property: "og:title", content: "The Science of Emotional Healing | Curamend" },
      {
        property: "og:description",
        content: "Neuroplasticity, trauma-informed care and energy psychology — the science behind the healing.",
      },
    ],
  }),
  component: Science,
});

const outcomes = [
  { value: 92, suffix: "%", label: "Report reduced emotional distress" },
  { value: 87, suffix: "%", label: "Notice change within 4 sessions" },
  { value: 4.9, suffix: "", label: "Average client rating", decimal: true },
  { value: 500, suffix: "+", label: "Healing journeys guided" },
];

function Science() {
  return (
    <>
      <PageHero
        eyebrow="Evidence-Informed Healing"
        title="The Science of Emotional Healing"
        subtitle="Peer-reviewed. Evidence-informed. Clinically validated. Healing you can trust — and understand."
      />

      {/* Research foundation */}
      <section className="bg-navy py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2">
          <Reveal>
            <SectionHeader
              eyebrow="Research Foundation"
              title="Built on Decades of Evidence"
              align="left"
            />
            <p className="mt-6 font-body text-[15px] leading-relaxed text-platinum/80">
              Curamend's methodology synthesises findings from cognitive neuroscience, trauma
              research, psychosomatic medicine and contemplative science. We translate rigorous
              research into a practice you can feel.
            </p>
            <p className="mt-4 font-mono text-sm leading-relaxed text-muted-ink">
              [Citation placeholder — key research underpinning the methodology, to be provided.]
            </p>
          </Reveal>
          <Reveal delay={0.1} className="mx-auto w-full max-w-md">
            <ImagePlaceholder
              label="Research visual / brain scan imagery"
              ratio="4 / 3"
              className="border-cerulean/40"
            />
          </Reveal>
        </div>
      </section>

      {/* Principles */}
      <section className="bg-light-surface py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHeader eyebrow="Core Principles" title="The Four Scientific Pillars" light />
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {SCIENCE_PRINCIPLES.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <div className="flex h-full gap-5 rounded-2xl border border-violet/15 bg-white p-7">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-cerulean/10 text-cerulean">
                    <p.icon className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="font-display text-2xl text-navy">{p.title}</h3>
                    <p className="mt-2 font-body text-[15px] leading-relaxed text-navy/70">
                      {p.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology flow */}
      <section className="bg-navy py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHeader eyebrow="The Process" title="The Curamend Methodology" />
          <div className="mt-14 flex flex-col items-stretch gap-3 lg:flex-row lg:items-center">
            {METHODOLOGY_STEPS.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.08} className="flex flex-1 items-center gap-3">
                <div className="flex-1 rounded-2xl border border-border bg-surface p-5 text-center">
                  <p className="font-mono text-xs text-gold">STEP {i + 1}</p>
                  <h3 className="mt-1.5 font-ui text-base font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 font-body text-xs leading-relaxed text-platinum/70">
                    {step.text}
                  </p>
                </div>
                {i < METHODOLOGY_STEPS.length - 1 && (
                  <ArrowRight className="hidden h-5 w-5 shrink-0 text-violet lg:block" />
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Research & references */}
      <section className="bg-light-surface py-24">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <SectionHeader eyebrow="References" title="Research & Publications" light />
          <div className="mt-10 space-y-4">
            {[1, 2, 3].map((n) => (
              <Reveal key={n} delay={n * 0.06}>
                <div className="flex items-start gap-4 rounded-xl border border-violet/15 bg-white p-5">
                  <FileText className="mt-0.5 h-5 w-5 shrink-0 text-cerulean" />
                  <p className="font-mono text-sm text-navy/70">
                    [Publication / citation placeholder {n} — Dr. Sadhana's published works and
                    research references to be added by client.]
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why both */}
      <section className="relative overflow-hidden bg-gradient-spotlight py-24">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <Reveal>
            <h2 className="font-display text-4xl text-white sm:text-5xl">
              Why Both Science <span className="text-gradient-gold">and</span> Spirit?
            </h2>
            <p className="mx-auto mt-5 font-body text-lg leading-relaxed text-platinum/90">
              Science explains the mechanism; spirit supplies the meaning. Addressing only one
              leaves healing incomplete. Together, they reach the places talk alone cannot —
              producing change that is both measurable and profound.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Outcomes */}
      <section className="bg-navy py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHeader eyebrow="Outcomes" title="Results That Speak" />
          <div className="mt-14 grid grid-cols-2 gap-8 lg:grid-cols-4">
            {outcomes.map((o, i) => (
              <Reveal key={o.label} delay={i * 0.08} className="text-center">
                <div className="font-display text-5xl text-gold sm:text-6xl">
                  {o.decimal ? (
                    <span>{o.value}</span>
                  ) : (
                    <AnimatedCounter value={o.value} suffix={o.suffix} />
                  )}
                </div>
                <p className="mt-2 font-ui text-sm text-muted-ink">{o.label}</p>
              </Reveal>
            ))}
          </div>
          <p className="mt-8 text-center font-mono text-xs text-muted-ink">
            [Outcome statistics are illustrative placeholders — replace with practice data.]
          </p>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
