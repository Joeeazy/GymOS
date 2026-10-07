import Link from "next/link";

const BASE =
  "inline-flex items-center justify-center whitespace-nowrap cursor-pointer transition-[filter,background-color] duration-150";

/** 54px tall, radius 12 — the large CTA used on every page of the design. */
export const CTA_ACC = `${BASE} h-[54px] rounded-xl bg-acc text-onacc text-base font-extrabold border-0 hover:brightness-95`;

export const CTA_SECONDARY = `${BASE} h-[54px] rounded-xl border border-line bg-sur text-ink text-base font-semibold hover:bg-sur2`;

export function CtaLink({
  href,
  variant = "acc",
  className = "",
  children,
}: {
  href: string;
  variant?: "acc" | "secondary";
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`${variant === "acc" ? CTA_ACC : CTA_SECONDARY} px-[22px] ${className}`}
    >
      {children}
    </Link>
  );
}
