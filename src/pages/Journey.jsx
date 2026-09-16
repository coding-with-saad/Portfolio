import { journey } from "../data/skills";

export default function Journey() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <p className="mono-tag text-[var(--color-data)]">Journey</p>
      <h1 className="mt-6 text-3xl md:text-5xl font-semibold leading-tight tracking-tight max-w-2xl">
        How the focus has evolved, stage by stage.
      </h1>

      <div className="mt-16 relative">
        <div className="absolute left-[15px] top-2 bottom-2 w-px bg-[var(--color-line)] md:left-[19px]" />

        <ol className="space-y-10">
          {journey.map((step, i) => (
            <li key={step.stage} className="relative pl-12 md:pl-14">
              <span
                className={`absolute left-0 top-0.5 flex h-8 w-8 md:h-10 md:w-10 items-center justify-center rounded-full border mono-tag text-sm ${
                  i === journey.length - 1
                    ? "border-[var(--color-signal)] text-[var(--color-signal)] bg-[var(--color-signal-dim)]"
                    : "border-[var(--color-line)] text-[var(--color-dim)] bg-[var(--color-panel)]"
                }`}
              >
                {i + 1}
              </span>
              <h2 className="font-[var(--font-display)] text-xl md:text-2xl font-medium">
                {step.stage}
              </h2>
              <p className="mt-2 text-[var(--color-muted)] leading-relaxed max-w-xl">
                {step.detail}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
