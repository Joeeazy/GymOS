"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV, START_HREF } from "@/lib/nav";
import { Icon } from "@/components/ui/Icon";
import { Logo } from "@/components/ui/Logo";
import { toggleTheme } from "@/lib/theme";

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="bg-bg border-line sticky top-0 z-30 border-b">
      <div className="mx-auto flex max-w-[1240px] items-center gap-3 px-6 py-[14px] wide:gap-6">
        <Link href="/" aria-label="GymOS home" onClick={() => setMenuOpen(false)}>
          <Logo size={24} />
        </Link>

        {/* Inline nav from 1040px up; a menu button below that. */}
        <nav className="hidden flex-1 gap-1 wide:flex">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className={`hover:bg-sur2 rounded-lg px-3 py-2 text-sm whitespace-nowrap transition-colors duration-150 ${
                isActive(n.href) ? "bg-sur2 font-bold" : "font-medium"
              }`}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex-1 wide:hidden" />

        <button
          type="button"
          onClick={toggleTheme}
          title="Dark mode"
          aria-label="Toggle dark mode"
          className="border-line bg-sur text-ink rounded-ctl h-10 w-10 shrink-0 cursor-pointer border"
        >
          <Icon name="contrast" />
        </button>

        <Link
          href={START_HREF}
          onClick={() => setMenuOpen(false)}
          className="bg-pri text-onpri rounded-ctl flex h-[42px] shrink-0 items-center px-4 text-sm font-bold whitespace-nowrap transition-[filter] duration-150 hover:brightness-110"
        >
          Start free trial
        </Link>

        <button
          type="button"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Menu"
          aria-expanded={menuOpen}
          className="border-line bg-sur text-ink rounded-ctl h-10 w-10 shrink-0 cursor-pointer border wide:hidden"
        >
          <Icon name={menuOpen ? "close" : "menu"} />
        </button>
      </div>

      {menuOpen && (
        <div className="border-line flex flex-col gap-0.5 border-t px-4 pt-2 pb-4 wide:hidden">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              onClick={() => setMenuOpen(false)}
              className={`rounded-lg p-3 text-base ${
                isActive(n.href) ? "font-bold" : "font-medium"
              }`}
            >
              {n.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
