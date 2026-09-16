export default function ProjectCard({ project }) {
  return (
    <article className="border hairline bg-[var(--color-panel)] p-6 md:p-8 flex flex-col gap-4">
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-[var(--font-display)] text-xl md:text-2xl font-medium leading-snug">
          {project.title}
        </h3>
        {project.featured && (
          <span className="mono-tag shrink-0 rounded-full border border-[var(--color-signal)] px-2.5 py-1 text-[var(--color-signal)]">
            featured
          </span>
        )}
      </div>

      <p className="text-[var(--color-muted)] leading-relaxed">{project.focus}</p>
      <p className="text-[var(--color-muted)] leading-relaxed text-sm">{project.detail}</p>

      <div className="flex flex-wrap gap-2 pt-1">
        {project.tech.map((t) => (
          <span
            key={t}
            className="mono-tag rounded border border-[var(--color-line)] px-2 py-1 text-[var(--color-data)]"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="flex gap-6 pt-2 mt-auto">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="mono-tag text-[var(--color-text)] border-b border-[var(--color-line)] hover:border-[var(--color-signal)] hover:text-[var(--color-signal)] pb-0.5 transition-colors"
        >
          View code
        </a>
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="mono-tag text-[var(--color-text)] border-b border-[var(--color-line)] hover:border-[var(--color-signal)] hover:text-[var(--color-signal)] pb-0.5 transition-colors"
          >
            Live demo
          </a>
        )}
      </div>
    </article>
  );
}
