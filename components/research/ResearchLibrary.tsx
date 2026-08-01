"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

import {
  evidenceCategoryLabels,
  type EvidenceCategory,
  type ResearchPublication,
} from "../../data/research";

const categories: Array<{
  value: "all" | EvidenceCategory;
  label: string;
}> = [
  { value: "all", label: "All Evidence Types" },
  {
    value: "verified-evidence",
    label: "Verified Evidence",
  },
  {
    value: "nexus-analysis",
    label: "Nexus Analysis",
  },
  {
    value: "management-strategy",
    label: "Management Strategy",
  },
  {
    value: "future-vision",
    label: "Future Vision",
  },
];

export function ResearchLibrary({
  publications,
}: {
  publications: ResearchPublication[];
}) {
  const [query, setQuery] = useState("");
  const [category, setCategory] =
    useState<"all" | EvidenceCategory>("all");

  const filteredPublications = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return publications.filter((publication) => {
      const matchesCategory =
        category === "all" ||
        publication.category === category;

      const searchableText = [
        publication.title,
        publication.subtitle,
        publication.summary,
        publication.topic,
        ...publication.keyFindings,
      ]
        .join(" ")
        .toLowerCase();

      const matchesQuery =
        normalizedQuery.length === 0 ||
        searchableText.includes(normalizedQuery);

      return matchesCategory && matchesQuery;
    });
  }, [category, publications, query]);

  return (
    <>
      <section className="research-controls">
        <label>
          <span>Search publications</span>
          <input
            type="search"
            value={query}
            placeholder="Search healthcare access, operations, county..."
            onChange={(event) =>
              setQuery(event.target.value)
            }
          />
        </label>

        <label>
          <span>Evidence category</span>

          <select
            value={category}
            onChange={(event) =>
              setCategory(
                event.target.value as
                  | "all"
                  | EvidenceCategory,
              )
            }
          >
            {categories.map((item) => (
              <option
                key={item.value}
                value={item.value}
              >
                {item.label}
              </option>
            ))}
          </select>
        </label>

        <div className="research-results">
          <span>RESULTS</span>
          <strong>{filteredPublications.length}</strong>
        </div>
      </section>

      {filteredPublications.length > 0 ? (
        <section className="research-card-grid">
          {filteredPublications.map((publication) => (
            <article
              className="research-publication-card"
              key={publication.slug}
            >
              <div className="research-card-meta">
                <span
                  className={`evidence-tag ${publication.category}`}
                >
                  {
                    evidenceCategoryLabels[
                      publication.category
                    ]
                  }
                </span>

                <small>{publication.status}</small>
              </div>

              <h2>{publication.title}</h2>

              <h3>{publication.subtitle}</h3>

              <p>{publication.summary}</p>

              <dl>
                <div>
                  <dt>Published</dt>
                  <dd>{publication.date}</dd>
                </div>

                <div>
                  <dt>Read time</dt>
                  <dd>{publication.readTime}</dd>
                </div>

                <div>
                  <dt>Topic</dt>
                  <dd>
                    {publication.topic.replaceAll("-", " ")}
                  </dd>
                </div>
              </dl>

              <Link
                href={`/research/${publication.slug}`}
                className="research-open-link"
              >
                Open publication →
              </Link>
            </article>
          ))}
        </section>
      ) : (
        <section className="research-empty">
          <h2>No publications found.</h2>

          <p>
            Try another search term or evidence category.
          </p>
        </section>
      )}
    </>
  );
}
