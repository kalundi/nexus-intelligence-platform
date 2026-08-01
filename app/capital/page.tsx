import Link from "next/link";

import { DecisionRoom } from "../../components/capital/DecisionRoom";

const investmentQuestions = [
  {
    number: "01",
    question: "Why now?",
    answer:
      "Healthcare delivery is becoming more distributed, creating additional coordination and mobility requirements.",
  },
  {
    number: "02",
    question: "Why this market?",
    answer:
      "Montgomery County combines scale, aging, diversity, healthcare activity, and regional travel complexity.",
  },
  {
    number: "03",
    question: "Why Nexus?",
    answer:
      "Nexus is building around accessible service, facility coordination, quality, compliance, technology, and intelligence.",
  },
  {
    number: "04",
    question: "What must be proven?",
    answer:
      "Demand, utilization, pricing, margins, partner concentration, operating readiness, and capital discipline.",
  },
];

export default function CapitalPage() {
  return (
    <main className="capital-page">
      <header className="capital-topbar">
        <div>
          <span>NEXUS INTELLIGENCE PLATFORM</span>
          <h1>Investor Decision Room</h1>
        </div>

        <div className="capital-topbar-actions">
          <Link href="/" className="back-link">
            Executive Briefing
          </Link>

          <Link href="/observatory" className="back-link">
            Observatory
          </Link>

          <Link href="/atlas" className="back-link">
            Atlas
          </Link>

          <Link href="/research" className="back-link">
            Research
          </Link>
        </div>
      </header>

      <section className="capital-hero">
        <div>
          <span className="eyebrow">
            NEXUS CAPITAL - BETA
          </span>

          <h2>
            Evaluate assumptions, not just aspirations.
          </h2>

          <p>
            Explore illustrative operating scenarios, capital
            priorities, risk conditions, and due-diligence
            questions through a transparent decision framework.
          </p>
        </div>

        <aside>
          <span>MODEL STATUS</span>
          <strong>ILLUSTRATIVE</strong>

          <p>
            The current Decision Room is a planning prototype and
            does not represent audited historical results or
            guaranteed future performance.
          </p>
        </aside>
      </section>

      <section className="investment-question-grid">
        {investmentQuestions.map((item) => (
          <article key={item.number}>
            <span>{item.number}</span>
            <h2>{item.question}</h2>
            <p>{item.answer}</p>
          </article>
        ))}
      </section>

      <DecisionRoom />
    </main>
  );
}
