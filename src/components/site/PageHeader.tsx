export function PageHeader({
  eyebrow,
  title,
  hindi,
  intro,
}: {
  eyebrow: string;
  title: string;
  hindi?: string;
  intro: string;
}) {
  return (
    <section className="mandala-veil border-b border-border bg-warm px-5 pb-16 pt-16 sm:px-8 sm:pb-20 sm:pt-20">
      <div className="mx-auto w-full max-w-4xl text-center">
        <p className="text-[0.68rem] uppercase tracking-[0.3em] text-primary">{eyebrow}</p>
        <h1 className="animate-rise mt-5 text-4xl leading-tight text-ink sm:text-5xl">{title}</h1>
        {hindi && <p className="font-deva mt-3 text-lg text-primary/85">{hindi}</p>}
        <span className="mx-auto mt-6 block h-px w-20 bg-gold/70" />
        <p className="mx-auto mt-6 max-w-2xl text-balance-pretty text-base leading-relaxed text-muted-foreground">
          {intro}
        </p>
      </div>
    </section>
  );
}
