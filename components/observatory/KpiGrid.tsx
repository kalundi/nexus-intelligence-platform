import { KpiCard } from './KpiCard';
import type { ObservatoryMetric } from '../../types/observatory';

export function KpiGrid({ metrics }: { metrics: ObservatoryMetric[] }) {
  return (
    <section className="kpi-grid">
      {metrics.map((metric) => (
        <KpiCard key={metric.id} metric={metric} />
      ))}
    </section>
  );
}
