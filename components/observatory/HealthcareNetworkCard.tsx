import type { NetworkNode } from '../../types/observatory';

export function HealthcareNetworkCard({ network }: { network: NetworkNode[] }) {
  return (
    <section className="panel-card">
      <div className="panel-header">
        <h3>Network stability</h3>
        <span>Hotspots</span>
      </div>
      <ul className="bullet-list">
        {network.map((node) => (
          <li key={node.name}>
            <strong>{node.name}</strong>
            <span>{node.status}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
