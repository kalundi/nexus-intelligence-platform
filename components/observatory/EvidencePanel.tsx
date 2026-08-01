const evidenceTypes = [
  {
    title: "Verified Evidence",
    className: "verified",
    text:
      "Information supported by an authoritative public or peer-reviewed source.",
  },
  {
    title: "Nexus Analysis",
    className: "nexus-analysis",
    text:
      "Nexus interpretation of available evidence and the operating environment.",
  },
  {
    title: "Management Strategy",
    className: "management-strategy",
    text:
      "Current priorities, assumptions, operating choices, and forecasts.",
  },
  {
    title: "Future Vision",
    className: "future-vision",
    text:
      "Long-term aspirations that are not represented as present capabilities.",
  },
];

export function EvidencePanel() {
  return (
    <article className="observatory-panel evidence-panel">
      <header>
        <span>EVIDENCE FRAMEWORK</span>
        <h2>Know what each claim represents.</h2>
        <p>
          Nexus separates external evidence from interpretation,
          strategy, and aspiration.
        </p>
      </header>

      <div className="evidence-list">
        {evidenceTypes.map((item) => (
          <div key={item.title}>
            <span className={`evidence-tag ${item.className}`}>
              {item.title}
            </span>

            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </article>
  );
}
