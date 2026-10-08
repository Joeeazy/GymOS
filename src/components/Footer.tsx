import Link from "next/link";
import { NAV } from "@/lib/nav";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  return (
    <footer className="border-line bg-sur border-t">
      <div className="mx-auto grid max-w-[1240px] grid-cols-[repeat(auto-fit,minmax(min(100%,180px),1fr))] gap-6 px-6 py-10">
        <div className="flex flex-col gap-2.5">
          <Logo size={22} />
          <span className="text-small text-mut">Gym management for Kenya. Nairobi.</span>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} className="text-mut hover:text-ink no-underline">
              {n.label}
            </Link>
          ))}
        </div>
        <div className="text-mut flex flex-col gap-2 text-sm">
          <span>hello@gymos.co.ke</span>
          <span className="font-mono">254700000000</span>
          <span>Terms · Privacy</span>
        </div>
      </div>
    </footer>
  );
}
