import { createFileRoute } from "@tanstack/react-router";
import { Play, Star } from "lucide-react";
import { TESTIMONIALS } from "@/data/content";
import { PageHero } from "@/components/sections/PageHero";
import { CTABanner } from "@/components/sections/CTABanner";
import { SectionHeader } from "@/components/ui-custom/SectionHeader";
import { Reveal } from "@/components/ui-custom/Reveal";
import { ImagePlaceholder } from "@/components/ui-custom/ImagePlaceholder";
import { TestimonialCard } from "@/components/sections/TestimonialCard";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Testimonials — Voices of Transformation | Curamend" },
      {
        name: "description",
        content:
          "Real stories of emotional healing from Curamend clients across Mumbai, Thane and Kalyan, guided by Dr. Sunil Sadhana.",
      },
      { property: "og:title", content: "Voices of Transformation | Curamend" },
      {
        property: "og:description",
        content: "Client testimonials, case studies and stories of lasting emotional healing.",
      },
    ],
  }),
  component: Testimonials,
});

function Testimonials() {
  return (
    <>
      <PageHero
        eyebrow="Testimonials"
        title="Voices of Transformation"
        subtitle="Healing is personal — but its echoes are unmistakable. Here are the words of those who walked the journey."
      />

      {/* Grid */}
      <section className="bg-light-surface py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="columns-1 gap-6 sm:columns-2 lg:columns-3 [&>*]:mb-6">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name + i} delay={(i % 3) * 0.08} className="break-inside-avoid">
                <TestimonialCard t={t} withMeta />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Video testimonials */}
      <section className="bg-navy py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHeader eyebrow="In Their Words" title="Video Testimonials" />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <Reveal key={i} delay={(i % 3) * 0.08}>
                <div className="group relative flex aspect-video items-center justify-center overflow-hidden rounded-2xl border border-border bg-surface">
                  <span className="grid h-16 w-16 place-items-center rounded-full bg-gradient-to-br from-violet to-[#7a52d6] text-white shadow-glow transition-transform duration-300 group-hover:scale-110">
                    <Play className="h-7 w-7 translate-x-0.5" fill="currentColor" />
                  </span>
                  <span className="absolute bottom-3 left-4 font-ui text-xs text-muted-ink">
                    Video testimonial {i + 1} — [embed URL]
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Case studies */}
      <section className="bg-light-surface py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHeader eyebrow="In Depth" title="Before & After Stories" light />
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {[1, 2].map((n) => (
              <Reveal key={n} delay={n * 0.08}>
                <div className="flex h-full flex-col rounded-2xl border-l-2 border-gold bg-white p-7 shadow-[0_12px_40px_-26px_rgba(26,31,75,0.4)]">
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} className="h-4 w-4 fill-gold text-gold" />
                    ))}
                  </div>
                  <h3 className="mt-4 font-display text-2xl text-navy">
                    Client Journey {n}
                  </h3>
                  <p className="mt-1 font-ui text-sm text-navy/50">
                    [Name] · [Duration] · [Outcome]
                  </p>
                  <p className="mt-4 flex-1 font-body text-[15px] leading-relaxed text-navy/70">
                    [Detailed case study placeholder — describe the client's starting point, the
                    healing journey through Curamend's sessions, and the transformation achieved.
                    To be provided by client.]
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Press */}
      <section className="bg-navy py-20">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <SectionHeader eyebrow="Recognition" title="Media Coverage" />
          <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <ImagePlaceholder
                  label={`Press logo ${i + 1}`}
                  ratio="3 / 1"
                  className="border-platinum/20 bg-platinum/[0.03]"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
