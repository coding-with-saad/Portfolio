import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Scene3D from "../three/Scene3D";
import { revealHero } from "../utils/animations";

export default function Home() {
  const eyebrow = useRef(null);
  const heading = useRef(null);
  const sub = useRef(null);
  const cta = useRef(null);

  useEffect(() => {
    const tl = revealHero({ eyebrow, heading, sub, cta });
    return () => tl.kill();
  }, []);

  return (
    <section className="relative overflow-hidden panel-grid-bg">
      <div className="mx-auto max-w-6xl px-6 pt-20 pb-28 md:pt-28 md:pb-40 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p ref={eyebrow} className="mono-tag text-[var(--color-data)]">
            Computer Science — Institute of Space Technology
          </p>

          <h1
            ref={heading}
            className="mt-5 text-4xl md:text-6xl font-semibold leading-[1.05] tracking-tight"
          >
            Malik Saad Khawar builds agentic AI, physical AI, and
            full-stack systems that hold up under real use.
          </h1>

          <p
            ref={sub}
            className="mt-6 text-lg text-[var(--color-muted)] leading-relaxed max-w-md"
          >
            From ROS 2 robotics and retrieval-grounded AI to blockchain
            primitives built from scratch — currently exploring quantum
            computing as the next frontier.
          </p>

          <div ref={cta} className="mt-9 flex flex-wrap gap-4">
            <Link
              to="/projects"
              className="mono-tag border border-[var(--color-signal)] text-[var(--color-signal)] px-6 py-3 hover:bg-[var(--color-signal)] hover:text-[var(--color-base)] transition-colors"
            >
              View projects
            </Link>
            <Link
              to="/contact"
              className="mono-tag border border-[var(--color-line)] text-[var(--color-text)] px-6 py-3 hover:border-[var(--color-text)] transition-colors"
            >
              Get in touch
            </Link>
          </div>
        </div>

        <div className="relative h-[320px] md:h-[440px]">
          <Scene3D color="#ff8a3d" className="absolute inset-0" />
        </div>
      </div>

      <div className="border-t hairline">
        <div className="mx-auto max-w-6xl px-6 py-6 flex flex-wrap gap-x-10 gap-y-3">
          {[
            "Agentic AI & RAG",
            "Physical AI / ROS 2",
            "Full-Stack Web",
            "Blockchain",
            "Quantum Computing",
          ].map((item) => (
            <span key={item} className="mono-tag text-[var(--color-dim)]">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
