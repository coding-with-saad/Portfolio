import gsap from "gsap";

/**
 * One orchestrated entrance for a page's hero block, run once on mount.
 * Deliberately not applied per-card/per-section — a single considered
 * reveal reads as intentional; fade-up-everything reads as templated.
 *
 * @param {object} refs - refs to animate, in order: { eyebrow, heading, sub, cta }
 */
export function revealHero(refs) {
  const { eyebrow, heading, sub, cta } = refs;
  const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

  if (eyebrow?.current) {
    tl.from(eyebrow.current, { opacity: 0, y: 12, duration: 0.5 });
  }
  if (heading?.current) {
    tl.from(
      heading.current,
      { opacity: 0, y: 24, duration: 0.7 },
      eyebrow?.current ? "-=0.25" : 0
    );
  }
  if (sub?.current) {
    tl.from(sub.current, { opacity: 0, y: 16, duration: 0.6 }, "-=0.35");
  }
  if (cta?.current) {
    tl.from(cta.current, { opacity: 0, y: 12, duration: 0.5 }, "-=0.3");
  }

  return tl;
}

export default { revealHero };
