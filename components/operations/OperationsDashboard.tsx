"use client";

import { useMemo, useState } from "react";

import {
  complianceItems,
  fleetVehicles,
  operationalMetrics,
  scheduledTrips,
  type OperationalStatus,
} from "../../data/operations";

const statusLabels: Record<OperationalStatus, string> = {
  ready: "Ready",
  attention: "Attention",
  critical: "Critical",
  scheduled: "Scheduled",
};

export function OperationsDashboard() {
  const [activeView, setActiveView] = useState<
    "overview" | "fleet" | "trips" | "compliance"
  >("overview");

  const [tripFilter, setTripFilter] = useState<
    "all" | OperationalStatus
  >("all");

  const visibleTrips = useMemo(
    () =>
      tripFilter === "all"
        ? scheduledTrips
        : scheduledTrips.filter(
            (trip) => trip.status === tripFilter,
          ),
    [tripFilter],
  );

  return (
    <>
      <nav
        className="operations-tabs"
        aria-label="Operations sections"
      >
        {[
          ["overview", "Overview"],
          ["fleet", "Fleet"],
          ["trips", "Trips"],
          ["compliance", "Compliance"],
        ].map(([value, label]) => (
          <button
            key={value}
            type="button"
            className={
              activeView === value ? "selected" : ""
            }
            onClick={() =>
              setActiveView(
                value as
                  | "overview"
                  | "fleet"
                  | "trips"
                  | "compliance",
              )
            }
          >
            {label}
          </button>
        ))}
      </nav>

      {activeView === "overview" && (
        <>
          <section className="operations-metric-grid">
            {operationalMetrics.map((metric) => (
              <article
                className="operations-metric"
                key={metric.label}
              >
                <div>
                  <span>{metric.label}</span>

                  <em
                    className={`status-dot status-${metric.status}`}
                  />
                </div>

                <strong>{metric.value}</strong>
                <small>{metric.note}</small>
              </article>
            ))}
          </section>

          <section className="operations-overview-grid">
            <FleetPanel compact />
            <TripPanel trips={scheduledTrips.slice(0, 3)} />
            <CompliancePanel compact />
          </section>
        </>
      )}

      {activeView === "fleet" && <FleetPanel />}

      {activeView === "trips" && (
        <section className="operations-panel">
          <header className="operations-panel-header">
            <div>
              <span>TRIP CONTROL</span>
              <h2>Today&apos;s scheduled activity</h2>
              <p>
                Prototype dispatch view using sample operational
                records.
              </p>
            </div>

            <label className="trip-filter">
              <span>Filter</span>

              <select
                value={tripFilter}
                onChange={(event) =>
                  setTripFilter(
                    event.target.value as
                      | "all"
                      | OperationalStatus,
                  )
                }
              >
                <option value="all">All trips</option>
                <option value="ready">Ready</option>
                <option value="attention">
                  Attention
                </option>
                <option value="scheduled">
                  Scheduled
                </option>
              </select>
            </label>
          </header>

          <TripTable trips={visibleTrips} />
        </section>
      )}

      {activeView === "compliance" && <CompliancePanel />}
    </>
  );
}

function FleetPanel({
  compact = false,
}: {
  compact?: boolean;
}) {
  const vehicles = compact
    ? fleetVehicles.slice(0, 3)
    : fleetVehicles;

  return (
    <section className="operations-panel">
      <header className="operations-panel-header">
        <div>
          <span>FLEET READINESS</span>
          <h2>Vehicle status</h2>
          <p>
            Operational readiness, assignment, and inspection
            monitoring.
          </p>
        </div>
      </header>

      <div className="fleet-list">
        {vehicles.map((vehicle) => (
          <article key={vehicle.id}>
            <div className="fleet-identity">
              <span>{vehicle.id}</span>
              <strong>{vehicle.name}</strong>
              <small>{vehicle.type}</small>
            </div>

            <div>
              <span>Driver</span>
              <strong>{vehicle.driver}</strong>
            </div>

            <div>
              <span>Assignment</span>
              <strong>{vehicle.assignment}</strong>
            </div>

            <div>
              <span>Inspection</span>
              <strong>{vehicle.nextInspection}</strong>
            </div>

            <StatusBadge status={vehicle.status} />
          </article>
        ))}
      </div>
    </section>
  );
}

function TripPanel({
  trips,
}: {
  trips: typeof scheduledTrips;
}) {
  return (
    <section className="operations-panel">
      <header className="operations-panel-header">
        <div>
          <span>TRIP ACTIVITY</span>
          <h2>Upcoming trips</h2>
          <p>
            Current sample schedule and dispatch condition.
          </p>
        </div>
      </header>

      <TripTable trips={trips} />
    </section>
  );
}

function TripTable({
  trips,
}: {
  trips: typeof scheduledTrips;
}) {
  return (
    <div className="operations-table-wrapper">
      <table className="operations-table">
        <thead>
          <tr>
            <th>Time</th>
            <th>Patient</th>
            <th>Service</th>
            <th>Route</th>
            <th>Driver</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {trips.map((trip) => (
            <tr key={trip.id}>
              <td>{trip.time}</td>
              <td>{trip.patientReference}</td>
              <td>{trip.service}</td>
              <td>
                <strong>{trip.origin}</strong>
                <span>-&gt; {trip.destination}</span>
              </td>
              <td>{trip.driver}</td>
              <td>
                <StatusBadge status={trip.status} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function CompliancePanel({
  compact = false,
}: {
  compact?: boolean;
}) {
  const items = compact
    ? complianceItems.slice(0, 3)
    : complianceItems;

  return (
    <section className="operations-panel">
      <header className="operations-panel-header">
        <div>
          <span>QUALITY & COMPLIANCE</span>
          <h2>Monitoring queue</h2>
          <p>
            Track recurring reviews, owners, due dates, and
            operational follow-up.
          </p>
        </div>
      </header>

      <div className="compliance-list">
        {items.map((item) => (
          <article key={item.id}>
            <div>
              <span>{item.id}</span>
              <strong>{item.title}</strong>
              <p>{item.note}</p>
            </div>

            <dl>
              <div>
                <dt>Owner</dt>
                <dd>{item.owner}</dd>
              </div>

              <div>
                <dt>Due</dt>
                <dd>{item.dueDate}</dd>
              </div>
            </dl>

            <StatusBadge status={item.status} />
          </article>
        ))}
      </div>
    </section>
  );
}

function StatusBadge({
  status,
}: {
  status: OperationalStatus;
}) {
  return (
    <span className={`operations-status status-${status}`}>
      {statusLabels[status]}
    </span>
  );
}
