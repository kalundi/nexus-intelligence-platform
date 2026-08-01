import Link from "next/link";

export default function NotFound() {
  return (
    <main className="platform-state-page">
      <section className="platform-state-card">
        <span>404 - MODULE NOT FOUND</span>

        <h1>This Nexus workspace does not exist.</h1>

        <p>
          The page may have moved, or the feature may not have been
          released yet.
        </p>

        <Link href="/">Return to Executive Briefing</Link>
      </section>
    </main>
  );
}
