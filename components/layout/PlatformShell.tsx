"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navigation = [
  {
    label: "Executive Briefing",
    href: "/",
    description: "Platform overview",
  },
  {
    label: "Observatory",
    href: "/observatory",
    description: "Healthcare access intelligence",
  },
  {
    label: "Montgomery Atlas",
    href: "/atlas",
    description: "Facilities and corridors",
  },
  {
    label: "Research",
    href: "/research",
    description: "Evidence and publications",
  },
  {
    label: "Investor Room",
    href: "/capital",
    description: "Scenarios and capital",
  },
  {
    label: "Operations",
    href: "/operations",
    description: "Readiness and execution",
  },
];

export function PlatformShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  /*
   * The homepage already contains its original cinematic shell.
   * Internal modules use the shared platform shell introduced here.
   */
  if (pathname === "/") {
    return <>{children}</>;
  }

  const currentModule =
    navigation.find((item) =>
      item.href === "/"
        ? pathname === "/"
        : pathname.startsWith(item.href),
    ) ?? navigation[0];

  return (
    <div className="platform-shell">
      <a href="#platform-content" className="skip-link">
        Skip to main content
      </a>

      <aside
        className={
          mobileOpen
            ? "platform-sidebar platform-sidebar-open"
            : "platform-sidebar"
        }
      >
        <div className="platform-brand">
          <Link href="/" className="platform-brand-mark">
            N
          </Link>

          <div>
            <strong>Nexus Intelligence</strong>
            <span>Healthcare Mobility Platform</span>
          </div>
        </div>

        <nav aria-label="Platform navigation">
          {navigation.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={
                  active
                    ? "platform-nav-link active"
                    : "platform-nav-link"
                }
                onClick={() => setMobileOpen(false)}
              >
                <strong>{item.label}</strong>
                <span>{item.description}</span>
              </Link>
            );
          })}
        </nav>

        <div className="platform-sidebar-footer">
          <span>PLATFORM STATUS</span>
          <strong>Genesis Alpha</strong>
          <small>Prototype environment</small>
        </div>
      </aside>

      <section className="platform-main">
        <header className="platform-header">
          <div className="platform-header-left">
            <button
              type="button"
              className="platform-menu-button"
              aria-label="Toggle platform navigation"
              aria-expanded={mobileOpen}
              onClick={() =>
                setMobileOpen((current) => !current)
              }
            >
              {mobileOpen ? "x" : "="}
            </button>

            <div>
              <span>NEXUS MEDICAL TRANSIT LLC</span>
              <h1>{currentModule.label}</h1>
            </div>
          </div>

          <div className="platform-header-actions">
            <Link href="/research" className="platform-header-link">
              Evidence
            </Link>

            <Link href="/operations" className="platform-header-button">
              Command Center
            </Link>
          </div>
        </header>

        <div id="platform-content" className="platform-content" tabIndex={-1}>
          {children}
        </div>
      </section>

      {mobileOpen ? (
        <button
          type="button"
          aria-label="Close navigation"
          className="platform-overlay"
          onClick={() => setMobileOpen(false)}
        />
      ) : null}
    </div>
  );
}
