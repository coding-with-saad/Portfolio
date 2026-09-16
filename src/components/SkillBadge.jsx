export default function SkillBadge({ children }) {
  return (
    <span className="mono-tag inline-block rounded border border-[var(--color-line)] bg-[var(--color-panel)] px-3 py-1.5 text-[var(--color-text)]">
      {children}
    </span>
  );
}
