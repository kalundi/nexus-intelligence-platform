const briefingCards = [
  { label: 'Care access coverage', value: '94.2%', trend: '+3.6% vs last month' },
  { label: 'Critical incidents', value: '12', trend: 'Down 22% week over week' },
  { label: 'Response SLA', value: '8.2 min', trend: 'Stable across regions' },
];

const focusAreas = [
  'Escalate delayed specialist handoffs',
  'Protect high-risk rural routes',
  'Prioritize urgent pediatric transfers',
];

export default function HomePage() {
  return (
    <main className="page-shell">
      <section className="hero-card">
        <div className="hero-topline">
          <p className="eyebrow">Executive briefing</p>
          <span className="status-pill">Live • 08:15 UTC</span>
        </div>

        <h1>Mission readiness is improving across every care corridor.</h1>
        <p className="hero-copy">
          Leadership teams can now review service coverage, incident pressure, and response
          performance from a single, executive-ready workspace.
        </p>

        <div className="metrics-grid">
          {briefingCards.map((card) => (
            <article key={card.label} className="metric-card">
              <p className="metric-label">{card.label}</p>
              <h2>{card.value}</h2>
              <span>{card.trend}</span>
            </article>
          ))}
        </div>

        <div className="focus-panel">
          <h3>Priority focus</h3>
          <ul>
            {focusAreas.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
