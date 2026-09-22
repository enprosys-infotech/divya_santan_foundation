import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { Dictionary } from "@/i18n/dictionary";
import { Button } from "@/components/ui/button";
import { Section } from "./SectionHeading";

type ContactCtaCopy = Dictionary["join"]["contactCta"];

export function ContactPageButton({ label }: { label: string }) {
  return (
    <Button asChild size="lg" className="mt-8">
      <Link to="/contact">
        {label}
        <ArrowRight className="h-4 w-4" strokeWidth={1.6} />
      </Link>
    </Button>
  );
}

export function ContactCTA({ copy }: { copy: ContactCtaCopy }) {
  return (
    <Section className="pt-0">
      <div className="mandala-veil relative overflow-hidden rounded-3xl border border-primary/20 bg-warm px-6 py-12 shadow-(--shadow-soft) sm:px-10 sm:py-14">
        <div className="relative z-10">
          <p className="text-center text-[0.68rem] uppercase tracking-[0.28em] text-secondary">
            {copy.eyebrow}
          </p>
          <h2 className="mt-3 text-center text-2xl text-ink sm:text-3xl">{copy.title}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-relaxed text-muted-foreground">
            {copy.body}
          </p>
          <div className="flex justify-center">
            <ContactPageButton label={copy.action} />
          </div>
        </div>
      </div>
    </Section>
  );
}