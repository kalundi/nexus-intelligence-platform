import type { ObservatoryMetric } from "../../types/observatory";

const evidenceLabels = {
  verified: "Verified Evidence",
  "nexus-analysis": "Nexus Analysis",
  "management-strategy": "Management Strategy",
  "future-vision": "Future Vision",
};

export function KpiCard({
  metric,
}: {
  metric: ObservatoryMetric;
}) {
  const trendSymbol =
    metric.trend === "up"
      ? "▲"
      : metric.trend === "down"
        ? "▼"
        : "●";

  return (
    <article className="observatory-card">
      <div className="metric-heading">
        <span>{metric.title}</span>
        <em className={`trend trend-${metric.trend}`}>
          {trendSymbol}
        </em>
      </div>

      <strong className="metric-value">{metric.value}</strong>

      <small>{metric.change}</small>

      <p>{metric.description}</p>

      <footer>
        <span className={`evidence-tag ${metric.evidenceType}`}>
          {evidenceLabels[metric.evidenceType]}
        </span>

        <cite>{metric.source}</cite>
      </footer>
    </article>
  );
}
