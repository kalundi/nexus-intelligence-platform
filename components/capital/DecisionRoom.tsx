"use client";

import { useMemo, useState } from "react";

type AllocationKey =
  | "fleet"
  | "technology"
  | "people"
  | "compliance"
  | "workingCapital";

const money = (value: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);

export function DecisionRoom() {
  const [fleet, setFleet] = useState(5);
  const [utilization, setUtilization] = useState(68);
  const [tripsPerVehicleDay, setTripsPerVehicleDay] =
    useState(4.2);
  const [averageTripRevenue, setAverageTripRevenue] =
    useState(170);
  const [facilityRelationships, setFacilityRelationships] =
    useState(8);
  const [capitalRaise, setCapitalRaise] = useState(1500000);

  const [allocation, setAllocation] = useState<
    Record<AllocationKey, number>
  >({
    fleet: 42,
    technology: 18,
    people: 16,
    compliance: 8,
    workingCapital: 16,
  });

  const model = useMemo(() => {
    const annualTrips =
      fleet *
      tripsPerVehicleDay *
      300 *
      (utilization / 100);

    const tripRevenue =
      annualTrips * averageTripRevenue;

    const facilityRevenue =
      facilityRelationships * 36000;

    const annualRevenue =
      tripRevenue + facilityRevenue;

    const driverPayroll =
      fleet * 2 * 45500;

    const fleetExpense =
      fleet * 28000;

    const insuranceCompliance =
      fleet * 14500;

    const technology =
      annualRevenue * 0.05;

    const administration =
      annualRevenue * 0.12;

    const totalOperatingCost =
      driverPayroll +
      fleetExpense +
      insuranceCompliance +
      technology +
      administration;

    const operatingSurplus = Math.max(
      0,
      annualRevenue - totalOperatingCost,
    );

    const operatingMargin =
      annualRevenue > 0
        ? operatingSurplus / annualRevenue
        : 0;

    const revenuePerVehicle =
      fleet > 0 ? annualRevenue / fleet : 0;

    return {
      annualTrips,
      annualRevenue,
      operatingSurplus,
      operatingMargin,
      revenuePerVehicle,
      totalOperatingCost,
    };
  }, [
    fleet,
    utilization,
    tripsPerVehicleDay,
    averageTripRevenue,
    facilityRelationships,
  ]);

  const totalAllocation = Object.values(allocation).reduce(
    (total, value) => total + value,
    0,
  );

  function updateAllocation(
    key: AllocationKey,
    value: number,
  ) {
    setAllocation((current) => ({
      ...current,
      [key]: value,
    }));
  }

  const allocationLabels: Record<
    AllocationKey,
    string
  > = {
    fleet: "Fleet acquisition and upfit",
    technology: "Technology and data systems",
    people: "Recruitment and training",
    compliance: "Compliance and quality systems",
    workingCapital: "Working capital",
  };

  const riskItems = [
    {
      title: "Utilization risk",
      level:
        utilization < 55
          ? "High"
          : utilization < 70
            ? "Moderate"
            : "Controlled",
      note:
        "Low utilization reduces revenue efficiency and increases fixed-cost pressure.",
    },
    {
      title: "Facility concentration",
      level:
        facilityRelationships < 5
          ? "High"
          : facilityRelationships < 10
            ? "Moderate"
            : "Controlled",
      note:
        "A broader facility base may reduce dependence on a small number of referral partners.",
    },
    {
      title: "Fleet concentration",
      level:
        fleet < 4
          ? "High"
          : fleet < 8
            ? "Moderate"
            : "Controlled",
      note:
        "A smaller fleet can be more vulnerable to maintenance events and scheduling disruption.",
    },
    {
      title: "Capital discipline",
      level:
        totalAllocation === 100
          ? "Controlled"
          : "Review",
      note:
        "Capital-allocation percentages should equal 100% before the scenario is treated as internally complete.",
    },
  ];

  return (
    <>
      <section className="decision-room-grid">
        <article className="capital-panel assumptions-panel">
          <header>
            <span>OPERATING ASSUMPTIONS</span>
            <h2>Test the business model</h2>
            <p>
              Adjust the main operating assumptions and review
              the illustrative output.
            </p>
          </header>

          <RangeControl
            label="Revenue-producing vehicles"
            value={fleet}
            min={2}
            max={30}
            step={1}
            onChange={setFleet}
          />

          <RangeControl
            label="Fleet utilization"
            value={utilization}
            min={35}
            max={95}
            step={1}
            suffix="%"
            onChange={setUtilization}
          />

          <RangeControl
            label="Trips per vehicle per day"
            value={tripsPerVehicleDay}
            min={2}
            max={8}
            step={0.1}
            onChange={setTripsPerVehicleDay}
          />

          <RangeControl
            label="Average revenue per trip"
            value={averageTripRevenue}
            min={75}
            max={500}
            step={5}
            prefix="$"
            onChange={setAverageTripRevenue}
          />

          <RangeControl
            label="Facility relationships"
            value={facilityRelationships}
            min={1}
            max={40}
            step={1}
            onChange={setFacilityRelationships}
          />

          <div className="capital-disclaimer">
            Illustrative planning model only. These figures are
            not audited financial statements, projections,
            guarantees, valuations, or an offer of securities.
          </div>
        </article>

        <section className="scenario-output-grid">
          <ScenarioCard
            label="Illustrative Annual Revenue"
            value={money(model.annualRevenue)}
            note="Trip and facility assumptions"
          />

          <ScenarioCard
            label="Illustrative Annual Trips"
            value={Math.round(
              model.annualTrips,
            ).toLocaleString()}
            note="Utilization and vehicle capacity"
          />

          <ScenarioCard
            label="Illustrative Operating Surplus"
            value={money(model.operatingSurplus)}
            note="Before financing, tax, and capital spending"
          />

          <ScenarioCard
            label="Illustrative Operating Margin"
            value={`${(
              model.operatingMargin * 100
            ).toFixed(1)}%`}
            note="Scenario output"
          />

          <ScenarioCard
            label="Revenue per Vehicle"
            value={money(model.revenuePerVehicle)}
            note="Annual illustrative productivity"
          />

          <ScenarioCard
            label="Operating Cost"
            value={money(model.totalOperatingCost)}
            note="Illustrative annual operating expense"
          />
        </section>
      </section>

      <section className="capital-lower-grid">
        <article className="capital-panel allocation-panel">
          <header>
            <span>CAPITAL ALLOCATION</span>
            <h2>How could capital be deployed?</h2>
            <p>
              Set a hypothetical raise and adjust the percentage
              allocated to each priority.
            </p>
          </header>

          <RangeControl
            label="Illustrative capital raise"
            value={capitalRaise}
            min={250000}
            max={5000000}
            step={50000}
            prefix="$"
            formatValue={money}
            onChange={setCapitalRaise}
          />

          <div className="allocation-list">
            {(
              Object.keys(
                allocation,
              ) as AllocationKey[]
            ).map((key) => (
              <label key={key}>
                <div>
                  <span>{allocationLabels[key]}</span>
                  <strong>{allocation[key]}%</strong>
                </div>

                <input
                  type="range"
                  min={0}
                  max={100}
                  value={allocation[key]}
                  onChange={(event) =>
                    updateAllocation(
                      key,
                      Number(event.target.value),
                    )
                  }
                />

                <small>
                  {money(
                    capitalRaise *
                      (allocation[key] / 100),
                  )}
                </small>
              </label>
            ))}
          </div>

          <div
            className={
              totalAllocation === 100
                ? "allocation-total valid"
                : "allocation-total invalid"
            }
          >
            <span>TOTAL ALLOCATION</span>
            <strong>{totalAllocation}%</strong>
          </div>
        </article>

        <article className="capital-panel risk-panel">
          <header>
            <span>RISK FRAMEWORK</span>
            <h2>What requires management attention?</h2>
            <p>
              The current prototype converts selected assumptions
              into a simple risk-review framework.
            </p>
          </header>

          <div className="risk-list">
            {riskItems.map((risk) => (
              <article key={risk.title}>
                <div>
                  <strong>{risk.title}</strong>

                  <span
                    className={`risk-level risk-${risk.level
                      .toLowerCase()
                      .replaceAll(" ", "-")}`}
                  >
                    {risk.level}
                  </span>
                </div>

                <p>{risk.note}</p>
              </article>
            ))}
          </div>
        </article>
      </section>

      <section className="capital-governance">
        <span>INVESTOR DUE DILIGENCE</span>

        <h2>
          Capital should follow evidence, governance, and
          operating discipline.
        </h2>

        <div>
          <article>
            <strong>Market Evidence</strong>
            <p>
              Validate population, healthcare-facility, travel,
              referral, and competitive conditions.
            </p>
          </article>

          <article>
            <strong>Operating Readiness</strong>
            <p>
              Review fleet, staffing, training, maintenance,
              quality, compliance, and facility workflows.
            </p>
          </article>

          <article>
            <strong>Financial Discipline</strong>
            <p>
              Separate historical performance from illustrative
              planning scenarios and management forecasts.
            </p>
          </article>

          <article>
            <strong>Governance</strong>
            <p>
              Define reporting, decision rights, risk oversight,
              investor communication, and capital controls.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}

function ScenarioCard({
  label,
  value,
  note,
}: {
  label: string;
  value: string;
  note: string;
}) {
  return (
    <article className="scenario-card">
      <span>{label}</span>
      <strong>{value}</strong>
      <small>{note}</small>
    </article>
  );
}

function RangeControl({
  label,
  value,
  min,
  max,
  step,
  onChange,
  prefix = "",
  suffix = "",
  formatValue,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (value: number) => void;
  prefix?: string;
  suffix?: string;
  formatValue?: (value: number) => string;
}) {
  const displayedValue = formatValue
    ? formatValue(value)
    : `${prefix}${value}${suffix}`;

  return (
    <label className="capital-range">
      <div>
        <span>{label}</span>
        <strong>{displayedValue}</strong>
      </div>

      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) =>
          onChange(Number(event.target.value))
        }
      />
    </label>
  );
}
