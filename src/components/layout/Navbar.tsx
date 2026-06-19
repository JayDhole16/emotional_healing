import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { NAV_ITEMS, BRAND } from "@/data/content";
import { ButtonLink } from "@/components/ui-custom/Button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "glass-nav py-3" : "bg-transparent py-5",
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
        <Link to="/" className="flex flex-col leading-none">
          <span className="font-display text-2xl font-semibold text-foreground">
            Sunil
          </span>
          <span className="font-ui text-[10px] uppercase tracking-[0.28em] text-gold">
            Saldanha
          </span>
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {NAV_ITEMS.map((item) => {
            const active = pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "font-ui text-sm font-medium transition-colors",
                  active ? "text-gold" : "text-platinum/80 hover:text-foreground",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden lg:block">
          <ButtonLink to="/contact" size="md">
            Contact Us
          </ButtonLink>
        </div>

        <button
          className="text-foreground lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden lg:hidden"
          >
            <div className="mx-4 mt-3 rounded-2xl border border-border bg-surface/95 p-5 backdrop-blur-xl">
              <div className="flex flex-col gap-1">
                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className={cn(
                      "rounded-lg px-3 py-2.5 font-ui text-sm font-medium transition-colors",
                      pathname === item.to
                        ? "bg-violet/15 text-gold"
                        : "text-platinum/85 hover:bg-violet/10",
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              <ButtonLink to="/contact" className="mt-4 w-full">
                Contact Us
              </ButtonLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
