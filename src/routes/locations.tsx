import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, ArrowUpRight, Car, Train, Accessibility } from "lucide-react";
import { LOCATIONS } from "@/data/content";
import { PageHero } from "@/components/sections/PageHero";
import { CTABanner } from "@/components/sections/CTABanner";
import { SectionHeader } from "@/components/ui-custom/SectionHeader";
import { Reveal } from "@/components/ui-custom/Reveal";
import { ImagePlaceholder } from "@/components/ui-custom/ImagePlaceholder";

export const Route = createFileRoute("/locations")({
  head: () => ({
    meta: [
      { title: "Our Locations — Thane, Ghatkopar & Kalyan | Curamend" },
      {
        name: "description",
        content:
          "Visit Curamend at three Mumbai-region locations: Thane, Ghatkopar and Kalyan. Addresses, phone numbers and directions.",
      },
      { property: "og:title", content: "Our Locations | Curamend" },
      {
        property: "og:description",
        content: "Find your nearest Curamend healing centre across Thane, Ghatkopar and Kalyan.",
      },
    ],
  }),
  component: Locations,
});

const visiting = [
  { icon: Car, title: "Parking", text: "Convenient parking available near each centre." },
  { icon: Train, title: "Public Transit", text: "All locations are well-connected by rail and bus." },
  { icon: Accessibility, title: "Accessibility", text: "Step-free access available — let us know your needs." },
];

function Locations() {
  return (
    <>
      <PageHero
        eyebrow="Visit Us"
        title="Find Us"
        subtitle="Three centres across the Mumbai region — each a calm, welcoming space for your healing."
      />

      <section className="bg-navy py-20">
        <div className="mx-auto max-w-7xl space-y-16 px-5 sm:px-8">
          {LOCATIONS.map((loc, idx) => {
            const directions = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(loc.mapsQuery)}`;
            const embed = `https://www.google.com/maps?q=${encodeURIComponent(loc.mapsQuery)}&output=embed`;
            return (
              <Reveal key={loc.id}>
                <div className="grid items-start gap-8 lg:grid-cols-2">
                  <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="flex items-center gap-3">
                      <span className="h-px w-8 bg-gold" />
                      <h2 className="font-display text-4xl text-foreground">{loc.name}</h2>
                    </div>
                    <div className="mt-5 flex items-start gap-3 font-body text-[15px] text-platinum/80">
                      <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-cerulean" />
                      <span>{loc.address}</span>
                    </div>
                    <div className="mt-3 space-y-2">
                      {loc.phones.map((p) => (
                        <a
                          key={p}
                          href={`tel:${p.replace(/[^+\d]/g, "")}`}
                          className="flex items-center gap-3 font-ui text-sm text-platinum/80 hover:text-foreground"
                        >
                          <Phone className="h-4 w-4 shrink-0 text-cerulean" />
                          {p}
                        </a>
                      ))}
                    </div>
                    <div className="mt-5 grid grid-cols-2 gap-4">
                      <ImagePlaceholder
                        label={`${loc.name} clinic exterior`}
                        ratio="4 / 3"
                        className="border-violet/30"
                      />
                      <ImagePlaceholder
                        label={`${loc.name} clinic interior`}
                        ratio="4 / 3"
                        className="border-violet/30"
                      />
                    </div>
                    <a
                      href={directions}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center gap-1 font-ui text-sm font-semibold text-gold hover:text-amber"
                    >
                      Get Directions <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                  <div className={idx % 2 === 1 ? "lg:order-1" : ""}>
                    <iframe
                      title={`Map of Curamend ${loc.name}`}
                      src={embed}
                      className="h-80 w-full rounded-2xl border border-border"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Visiting info */}
      <section className="bg-light-surface py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHeader eyebrow="Good to Know" title="Visiting Information" light />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {visiting.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl border-t-2 border-violet bg-white p-7 shadow-[0_12px_40px_-26px_rgba(26,31,75,0.4)]">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-violet/10 text-violet">
                    <v.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-2xl text-navy">{v.title}</h3>
                  <p className="mt-2 font-body text-[15px] text-navy/70">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
