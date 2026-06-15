import { createFileRoute } from "@tanstack/react-router";
import { SERVICES, PROCESS_STEPS, FAQS } from "@/data/content";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PageHero } from "@/components/sections/PageHero";
import { CTABanner } from "@/components/sections/CTABanner";
import { SectionHeader } from "@/components/ui-custom/SectionHeader";
import { Reveal } from "@/components/ui-custom/Reveal";
import { ImagePlaceholder } from "@/components/ui-custom/ImagePlaceholder";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Our Services | Curamend Emotional Healing" },
      {
        name: "description",
        content:
          "Explore Curamend's healing services — group emotional healing, individual consultations, trauma release, breathwork and more, led by Dr. Sunil Saldanha.",
      },
      { property: "og:title", content: "Our Services | Curamend" },
      {
        property: "og:description",
        content: "Evidence-based, spiritually grounded healing services for lasting emotional freedom.",
      },
    ],
  }),
  component: Services,
});

function Services() {
  return (
    <>
      <PageHero
        eyebrow="What We Offer"
        title="Our Services"
        subtitle="A spectrum of healing modalities, each rooted in science and delivered with spiritual depth — all personally guided by Dr. Saldhana."
      />

      {/* Overview */}
      <section className="bg-navy py-20">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <Reveal>
            <p className="font-body text-lg leading-relaxed text-platinum/80">
              At Curamend, healing is never one-size-fits-all. Every service is designed to meet you
              where you are — gently, intelligently, and with measurable results.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Service grid */}
      <section className="bg-light-surface py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHeader eyebrow="Healing Modalities" title="How We Help You Heal" light />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.08}>
                <div className="group flex h-full flex-col rounded-2xl border-t-2 border-violet bg-white p-7 shadow-[0_12px_40px_-26px_rgba(26,31,75,0.4)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_-30px_rgba(91,79,207,0.45)]">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-violet/10 text-violet">
                    <s.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-2xl text-navy">{s.title}</h3>
                  <p className="mt-2 flex-1 font-body text-[15px] leading-relaxed text-navy/70">
                    {s.description}
                  </p>
                  <img
                    src={s.imageUrl}
                    alt={s.title}
                    className="mt-6 aspect-[3/2] w-full rounded-xl object-cover border border-violet/15"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process timeline */}
      <section className="bg-navy py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHeader eyebrow="The Journey" title="How Healing Works" />
          <div className="mt-14 grid gap-6 md:grid-cols-5">
            {PROCESS_STEPS.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.08}>
                <div className="relative h-full rounded-2xl border border-border bg-surface p-6">
                  <span className="font-display text-4xl text-gold">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-3 font-ui text-base font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-2 font-body text-sm leading-relaxed text-platinum/70">
                    {step.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-light-surface py-24">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <SectionHeader eyebrow="Questions" title="Frequently Asked" light />
          <Reveal className="mt-10">
            <Accordion type="single" collapsible className="w-full">
              {FAQS.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="border-b border-violet/15"
                >
                  <AccordionTrigger className="text-left font-ui text-base font-semibold text-navy hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="font-body text-[15px] leading-relaxed text-navy/70">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
