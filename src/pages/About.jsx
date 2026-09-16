export default function About() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <p className="mono-tag text-[var(--color-data)]">About</p>

      <div className="mt-6 grid md:grid-cols-[220px_1fr] gap-10 md:gap-16 items-start">
        {/*
          Photo slot: drop a square headshot at /public/photo.jpg and
          uncomment the <img> below. Keep it small and understated —
          the content should carry the page, not the photo.
        */}
        <div className="w-40 h-40 md:w-full md:aspect-square rounded-full border hairline bg-[var(--color-panel)] overflow-hidden flex items-center justify-center">
          {/* <img src="/photo.jpg" alt="Malik Saad Khawar" className="w-full h-full object-cover" /> */}
          <span className="mono-tag text-[var(--color-dim)]">MSK</span>
        </div>

        <div>
          <h1 className="text-3xl md:text-5xl font-semibold leading-tight tracking-tight max-w-2xl">
            A Computer Science undergraduate who moved from low-level
            foundations into agentic and physical AI.
          </h1>

          <div className="mt-8 space-y-5 text-[var(--color-muted)] leading-relaxed max-w-2xl">
            <p>
              I'm a Computer Science undergraduate at the{" "}
              <span className="text-[var(--color-text)]">
                Institute of Space Technology (IST)
              </span>
              , with professional experience in tech and security workflows
              at{" "}
              <span className="text-[var(--color-text)]">
                Electronic Security Company (ESCO.pk)
              </span>
              .
            </p>
            <p>
              My work began with low-level systems and algorithmic
              foundations in C++, before scaling into Python-driven
              intelligent systems, distributed architectures, and modern
              full-stack applications. Over the past several months, that
              focus has expanded into autonomous agentic workflows, physical
              AI (ROS 2 / humanoid robotics), blockchain mechanics, and
              active exploration of quantum computing.
            </p>
            <p>
              I care about spec-driven development, clean architectural
              patterns, and algorithmic rigor — building things that are
              understandable and correct, not just demoable.
            </p>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 gap-6 max-w-2xl">
            <div className="border hairline bg-[var(--color-panel)] p-5">
              <p className="mono-tag text-[var(--color-data)]">Currently building</p>
              <p className="mt-2 text-sm text-[var(--color-muted)] leading-relaxed">
                Spec-driven Physical AI learning platforms, full-stack
                distributed apps, and decentralized systems.
              </p>
            </div>
            <div className="border hairline bg-[var(--color-panel)] p-5">
              <p className="mono-tag text-[var(--color-data)]">Exploring next</p>
              <p className="mt-2 text-sm text-[var(--color-muted)] leading-relaxed">
                Quantum information and algorithms, cross-platform mobile
                frameworks, and high-performance web APIs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
