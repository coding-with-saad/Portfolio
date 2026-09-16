const links = [
  { label: "Email", href: "mailto:saadkhawar169@gmail.com" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/malik-saad-khawar-649647280/" },
  { label: "GitHub", href: "https://github.com/coding-with-saad" },
];

export default function Footer() {
  return (
    <footer className="border-t hairline mt-24">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <p className="font-[var(--font-display)] text-base font-medium">
            Malik Saad Khawar
          </p>
          <p className="mono-tag text-[var(--color-dim)] mt-1">
            Institute of Space Technology — Computer Science
          </p>
        </div>

        <div className="flex gap-6">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="mono-tag text-[var(--color-muted)] hover:text-[var(--color-signal)] transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
