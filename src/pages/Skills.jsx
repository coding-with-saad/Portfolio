import { skillGroups } from "../data/skills";
import SkillBadge from "../components/SkillBadge";

export default function Skills() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <p className="mono-tag text-[var(--color-data)]">Skills</p>
      <h1 className="mt-6 text-3xl md:text-5xl font-semibold leading-tight tracking-tight max-w-2xl">
        Technical arsenal across AI, web, and systems.
      </h1>

      <div className="mt-14 grid md:grid-cols-2 gap-x-12 gap-y-14">
        {skillGroups.map((group) => (
          <div key={group.id} className="border-t hairline pt-6">
            <h2 className="font-[var(--font-display)] text-xl font-medium">
              {group.label}
            </h2>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {group.items.map((item) => (
                <SkillBadge key={item}>{item}</SkillBadge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
