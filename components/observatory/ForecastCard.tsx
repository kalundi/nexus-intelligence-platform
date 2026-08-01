import type { ForecastInsight } from '../../types/observatory';

export function ForecastCard({ forecast }: { forecast: ForecastInsight[] }) {
  return (
    <section className="panel-card">
      <div className="panel-header">
        <h3>Short-term forecast</h3>
        <span>Next 30 days</span>
      </div>
      <ul className="bullet-list">
        {forecast.map((item) => (
          <li key={item.label}>
            <strong>{item.label}</strong>
            <span>{item.value}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
