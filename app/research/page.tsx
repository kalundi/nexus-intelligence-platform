import Link from "next/link";

import { ResearchLibrary } from "../../components/research/ResearchLibrary";
import { researchPublications } from "../../data/research";

const publicationMetrics = [
  {
    label: "Published Briefings",
    value: researchPublications
      .filter(
        (publication) =>
          publication.status === "published",
      )
      .length.toString(),
    note: "Current digital publications",
  },
  {
    label: "Evidence Categories",
    value: "4",
    note: "Clear content classification",
  },
  {
    label: "Featured Reports",
    value: researchPublications
      .filter((publication) => publication.featured)
      .length.toString(),
    note: "Priority investor reading",
  },
  {
    label: "Research Status",
    value: "Beta",
    note: "Content library in development",
  },
];

export default function ResearchPage() {
  return (
    <main className="research-page">
      <header className="research-topbar">
        <div>
          <span>NEXUS INTELLIGENCE PLATFORM</span>
          <h1>Research Library</h1>
        </div>

        <div className="research-topbar-actions">
          <Link href="/" className="back-link">
            Executive Briefing
          </Link>

          <Link href="/observatory" className="back-link">
            Observatory
          </Link>

          <Link href="/atlas" className="back-link">
            Atlas
          </Link>
        </div>
      </header>

      <section className="research-hero">
        <div>
          <span className="eyebrow">
            NEXUS RESEARCH - BETA
          </span>

          <h2>
            Evidence, analysis, strategy, and vision-clearly
            separated.
          </h2>

          <p>
            Explore digital publications designed to help
            healthcare partners, county leaders, and investors
            understand healthcare mobility.
          </p>
        </div>

        <aside>
          <span>EDITORIAL STANDARD</span>
          <strong>EVIDENCE FIRST</strong>

          <p>
            Every publication identifies whether a statement is
            externally verified, Nexus analysis, management
            strategy, or future vision.
          </p>
        </aside>
      </section>

      <section className="research-metric-grid">
        {publicationMetrics.map((metric) => (
          <article
            className="research-metric"
            key={metric.label}
          >
            <span>{metric.label}</span>
            <strong>{metric.value}</strong>
            <small>{metric.note}</small>
          </article>
        ))}
      </section>

      <ResearchLibrary
        publications={researchPublications}
      />
    </main>
  );
}
