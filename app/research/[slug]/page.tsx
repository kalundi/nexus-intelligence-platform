import Link from "next/link";
import { notFound } from "next/navigation";

import {
  evidenceCategoryLabels,
  researchPublications,
} from "../../../data/research";

type ResearchDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return researchPublications.map((publication) => ({
    slug: publication.slug,
  }));
}

export default async function ResearchDetailPage({
  params,
}: ResearchDetailPageProps) {
  const { slug } = await params;

  const publication = researchPublications.find(
    (item) => item.slug === slug,
  );

  if (!publication) {
    notFound();
  }

  return (
    <main className="research-reader-page">
      <header className="research-reader-topbar">
        <Link href="/research" className="back-link">
          ← Research Library
        </Link>

        <div>
          <Link href="/observatory" className="back-link">
            Observatory
          </Link>

          <Link href="/atlas" className="back-link">
            Atlas
          </Link>
        </div>
      </header>

      <article className="research-reader">
        <header className="research-reader-header">
          <span
            className={`evidence-tag ${publication.category}`}
          >
            {
              evidenceCategoryLabels[
                publication.category
              ]
            }
          </span>

          <h1>{publication.title}</h1>

          <h2>{publication.subtitle}</h2>

          <p>{publication.summary}</p>

          <dl>
            <div>
              <dt>Date</dt>
              <dd>{publication.date}</dd>
            </div>

            <div>
              <dt>Read time</dt>
              <dd>{publication.readTime}</dd>
            </div>

            <div>
              <dt>Status</dt>
              <dd>{publication.status}</dd>
            </div>
          </dl>
        </header>

        <section className="research-key-findings">
          <span>KEY FINDINGS</span>

          <h2>What this publication establishes</h2>

          <ol>
            {publication.keyFindings.map((finding) => (
              <li key={finding}>{finding}</li>
            ))}
          </ol>
        </section>

        <div className="research-reader-layout">
          <div className="research-reader-content">
            {publication.sections.map((section) => (
              <section key={section.heading}>
                <h2>{section.heading}</h2>

                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </section>
            ))}
          </div>

          <aside className="research-source-panel">
            <span>SOURCES & STATUS</span>

            <h2>Publication record</h2>

            <dl>
              <div>
                <dt>Evidence category</dt>
                <dd>
                  {
                    evidenceCategoryLabels[
                      publication.category
                    ]
                  }
                </dd>
              </div>

              <div>
                <dt>Topic</dt>
                <dd>
                  {publication.topic.replaceAll("-", " ")}
                </dd>
              </div>
            </dl>

            <h3>Sources</h3>

            {publication.sources.length > 0 ? (
              <ul>
                {publication.sources.map((source) => (
                  <li key={source.href}>
                    <a
                      href={source.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {source.label} ↗
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <p>
                No external source is currently attached to this
                management or future-vision publication.
              </p>
            )}
          </aside>
        </div>
      </article>
    </main>
  );
}
