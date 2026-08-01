import { EvidencePanel } from "../../components/observatory/EvidencePanel";
import { KpiCard } from "../../components/observatory/KpiCard";
import { PopulationChart } from "../../components/observatory/PopulationChart";
import { observatoryMetrics } from "../../data/healthcareMetrics";

export default function ObservatoryPage() {
  return (
    <main className="observatory-page">
      <section className="observatory-hero">
        <div>
          <span className="eyebrow">MONTGOMERY COUNTY — BETA</span>

          <h2>Understand the conditions shaping healthcare mobility.</h2>

          <p>
            Explore population, healthcare, transportation, and
            accessibility indicators through an evidence-led
            decision framework.
          </p>
        </div>

        <aside>
          <span>OBSERVATORY STATUS</span>
          <strong>PROTOTYPE</strong>
          <p>
            Initial indicators are intended to validate the interface
            and analytical structure before live-data integration.
          </p>
        </aside>
      </section>

      <nav className="observatory-tabs" aria-label="Observatory sections">
        <button className="selected">Overview</button>
        <button>Population</button>
        <button>Healthcare</button>
        <button>Transportation</button>
        <button>Accessibility</button>
        <button>Forecast</button>
      </nav>

      <section className="observatory-kpi-grid">
        {observatoryMetrics.map((metric) => (
          <KpiCard key={metric.id} metric={metric} />
        ))}
      </section>

      <section className="observatory-content-grid">
        <PopulationChart />
        <EvidencePanel />
      </section>

      <section className="observatory-next">
        <span>NEXT INTELLIGENCE LAYER</span>

        <h2>From county conditions to operating decisions.</h2>

        <p>
          Future releases will connect demographic indicators,
          healthcare-facility locations, travel-time conditions,
          service coverage, operational capacity, and expansion
          scenarios.
        </p>
      </section>
    </main>
  );
}
