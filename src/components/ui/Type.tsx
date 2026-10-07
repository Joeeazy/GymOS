/**
 * Landing type scale. The design computes sizes from a measured width:
 * h1 64 / 48 / 38 at 960 / 600 / 0, h2 44 / 32 at 960 / 0. These render the
 * same steps as CSS breakpoints, so there is no layout flash on first paint.
 */

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-mut font-mono text-[13px] tracking-[0.04em]">{children}</span>
  );
}

export function Display({
  children,
  className = "",
  as: Tag = "h1",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2";
}) {
  return (
    <Tag
      className={`stretch-wide m-0 text-[38px] leading-none font-black tracking-[-0.03em] md:text-[48px] dash:text-[64px] ${className}`}
    >
      {children}
    </Tag>
  );
}

export function SectionTitle({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`stretch-wide m-0 text-[32px] leading-[1.05] font-extrabold tracking-[-0.02em] dash:text-[44px] ${className}`}
    >
      {children}
    </h2>
  );
}
