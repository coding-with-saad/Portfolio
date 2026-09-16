import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const other = projects.filter((p) => !p.featured);

  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <p className="mono-tag text-[var(--color-data)]">Projects</p>
      <h1 className="mt-6 text-3xl md:text-5xl font-semibold leading-tight tracking-tight max-w-2xl">
        Selected work across AI, robotics, and full-stack systems.
      </h1>

      <div className="mt-14 grid md:grid-cols-2 gap-6">
        {featured.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {other.length > 0 && (
        <>
          <p className="mono-tag text-[var(--color-dim)] mt-16">More</p>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            {other.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </>
      )}

      <div className="mt-16 border-t hairline pt-8">
        <a
          href="https://github.com/coding-with-saad"
          target="_blank"
          rel="noreferrer"
          className="mono-tag text-[var(--color-text)] border-b border-[var(--color-line)] hover:border-[var(--color-signal)] hover:text-[var(--color-signal)] pb-0.5 transition-colors"
        >
          See everything on GitHub
        </a>
      </div>
    </section>
  );
}
