'use client';

import Link from 'next/link';
import { useState } from 'react';

const navigation = [
  { label: 'Executive Briefing', href: '/' },
  { label: 'Observatory', href: '/observatory' },
  { label: 'Montgomery County', href: '/atlas' },
  { label: 'Research', href: '/research' },
  { label: 'Investor Room', href: '/capital' },
  { label: 'Operations', href: '/operations' },
];

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
  const [, setSidebarOpen] = useState(false);

  return (
    <main className="page-shell">
      <section className="hero-card">
        <div className="hero-topline">
          <p className="eyebrow">Executive briefing</p>
          <span className="status-pill">Live • 08:15 UTC</span>
        </div>

        <nav aria-label="Primary navigation" className="nav-list">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="nav-item"
              onClick={() => setSidebarOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>

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

        <article className="platform-card">
          <span>01</span>
          <h3>Healthcare Access Observatory</h3>
          <p>
            Explore demographic, healthcare, transportation, and accessibility indicators
            through an evidence-led decision framework.
          </p>
          <Link href="/observatory" className="platform-link">
            Open Observatory →
          </Link>
        </article>
      </section>
    </main>
  );
}
