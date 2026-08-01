import { KpiCard } from './KpiCard';
import type { KpiMetric } from '../../types/observatory';

export function KpiGrid({ metrics }: { metrics: KpiMetric[] }) {
  return (
    <section className="kpi-grid">
      {metrics.map((metric) => (
        <KpiCard key={metric.label} metric={metric} />
      ))}
    </section>
  );
}
