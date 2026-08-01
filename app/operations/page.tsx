import { OperationsDashboard } from "../../components/operations/OperationsDashboard";

const leadershipQuestions = [
  {
    label: "Can we deliver today?",
    value: "Review fleet and staffing",
  },
  {
    label: "Where is attention needed?",
    value: "Unassigned trips and inspections",
  },
  {
    label: "Are quality systems current?",
    value: "Review the compliance queue",
  },
  {
    label: "What changes next?",
    value: "Move from sample data to live operations",
  },
];

export default function OperationsPage() {
  return (
    <main className="operations-page">
      <section className="operations-hero">
        <div>
          <span className="eyebrow">
            NEXUS OPERATIONS - PROTOTYPE
          </span>

          <h2>
            Turn readiness, trips, quality, and compliance into one
            operating view.
          </h2>

          <p>
            The first Command Center brings fleet status, scheduled
            activity, assignments, inspection dates, and compliance
            monitoring into a single executive workspace.
          </p>
        </div>

        <aside>
          <span>DATA STATUS</span>
          <strong>SAMPLE DATA</strong>

          <p>
            This release validates the operating workflow. It is
            not connected to live dispatch, patient, driver, or
            compliance records.
          </p>
        </aside>
      </section>

      <section className="leadership-question-grid">
        {leadershipQuestions.map((item) => (
          <article key={item.label}>
            <span>{item.label}</span>
            <strong>{item.value}</strong>
          </article>
        ))}
      </section>

      <OperationsDashboard />

      <section className="operations-next">
        <span>NEXT OPERATING LAYER</span>

        <h2>
          From prototype visibility to live operational control.
        </h2>

        <div>
          <article>
            <strong>Dispatch Integration</strong>
            <p>
              Connect scheduled rides, assignments, status updates,
              and exceptions.
            </p>
          </article>

          <article>
            <strong>Fleet Intelligence</strong>
            <p>
              Add mileage, maintenance, inspections, fuel, and
              vehicle utilization.
            </p>
          </article>

          <article>
            <strong>Quality Management</strong>
            <p>
              Track complaints, incidents, reviews, corrective
              actions, and recurring QA indicators.
            </p>
          </article>

          <article>
            <strong>Facility Portal</strong>
            <p>
              Allow approved partners to book, monitor, and manage
              recurring transportation.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
