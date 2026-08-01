import type { TransportationInsight } from '../../types/observatory';

export function TransportationCard({ transportation }: { transportation: TransportationInsight[] }) {
  return (
    <section className="panel-card">
      <div className="panel-header">
        <h3>Transportation pressure</h3>
        <span>Access risk</span>
      </div>
      <ul className="bullet-list">
        {transportation.map((item) => (
          <li key={item.label}>
            <strong>{item.label}</strong>
            <span>{item.value}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
