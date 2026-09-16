import ContactForm from "../components/ContactForm";

const channels = [
  { label: "Email", value: "saadkhawar169@gmail.com", href: "mailto:saadkhawar169@gmail.com" },
  {
    label: "LinkedIn",
    value: "malik-saad-khawar",
    href: "https://www.linkedin.com/in/malik-saad-khawar-649647280/",
  },
  { label: "GitHub", value: "coding-with-saad", href: "https://github.com/coding-with-saad" },
];

export default function Contact() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <p className="mono-tag text-[var(--color-data)]">Contact</p>
      <h1 className="mt-6 text-3xl md:text-5xl font-semibold leading-tight tracking-tight max-w-2xl">
        Open to collaborations, roles, and interesting problems.
      </h1>

      <div className="mt-14 grid md:grid-cols-[1fr_320px] gap-16">
        <ContactForm />

        <div className="border-t hairline pt-8 md:border-t-0 md:pt-0">
          <p className="mono-tag text-[var(--color-dim)]">Direct channels</p>
          <div className="mt-5 flex flex-col gap-5">
            {channels.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="group block"
              >
                <p className="mono-tag text-[var(--color-muted)]">{c.label}</p>
                <p className="mt-1 text-[var(--color-text)] group-hover:text-[var(--color-signal)] transition-colors">
                  {c.value}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
