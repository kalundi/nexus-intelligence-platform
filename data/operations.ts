export type OperationalStatus =
  | "ready"
  | "attention"
  | "critical"
  | "scheduled";

export interface OperationalMetric {
  label: string;
  value: string;
  note: string;
  status: OperationalStatus;
}

export interface FleetVehicle {
  id: string;
  name: string;
  type: string;
  driver: string;
  assignment: string;
  nextInspection: string;
  status: OperationalStatus;
}

export interface ScheduledTrip {
  id: string;
  time: string;
  patientReference: string;
  service: string;
  origin: string;
  destination: string;
  driver: string;
  status: OperationalStatus;
}

export interface ComplianceItem {
  id: string;
  title: string;
  note: string;
  owner: string;
  dueDate: string;
  status: OperationalStatus;
}

export const operationalMetrics: OperationalMetric[] = [
  {
    label: "Fleet readiness",
    value: "92%",
    note: "Vehicles cleared for active dispatch",
    status: "ready",
  },
  {
    label: "On-time departures",
    value: "89%",
    note: "Rolling 7-day schedule adherence",
    status: "attention",
  },
  {
    label: "Open incidents",
    value: "3",
    note: "Require supervisor follow-up",
    status: "attention",
  },
  {
    label: "Compliance completion",
    value: "97%",
    note: "Current monthly checklist completion",
    status: "ready",
  },
];

export const fleetVehicles: FleetVehicle[] = [
  {
    id: "V-101",
    name: "Nexus One",
    type: "Wheelchair",
    driver: "M. Johnson",
    assignment: "Silver Spring cluster",
    nextInspection: "2026-08-05",
    status: "ready",
  },
  {
    id: "V-108",
    name: "Nexus Eight",
    type: "Ambulatory",
    driver: "A. Rivera",
    assignment: "Rockville corridor",
    nextInspection: "2026-08-03",
    status: "attention",
  },
  {
    id: "V-112",
    name: "Nexus Twelve",
    type: "Stretcher",
    driver: "K. Brooks",
    assignment: "Regional transfer",
    nextInspection: "2026-08-11",
    status: "scheduled",
  },
  {
    id: "V-116",
    name: "Nexus Sixteen",
    type: "Wheelchair",
    driver: "S. Patel",
    assignment: "Bethesda network",
    nextInspection: "2026-08-02",
    status: "critical",
  },
  {
    id: "V-120",
    name: "Nexus Twenty",
    type: "Ambulatory",
    driver: "R. Evans",
    assignment: "Germantown zone",
    nextInspection: "2026-08-09",
    status: "ready",
  },
];

export const scheduledTrips: ScheduledTrip[] = [
  {
    id: "T-2401",
    time: "07:30",
    patientReference: "PT-1182",
    service: "Dialysis",
    origin: "Aspen Hill",
    destination: "Rockville Dialysis Center",
    driver: "M. Johnson",
    status: "ready",
  },
  {
    id: "T-2402",
    time: "08:10",
    patientReference: "PT-2034",
    service: "Rehab",
    origin: "Gaithersburg",
    destination: "Montgomery Rehab Campus",
    driver: "A. Rivera",
    status: "attention",
  },
  {
    id: "T-2403",
    time: "09:05",
    patientReference: "PT-3107",
    service: "Specialty care",
    origin: "Bethesda",
    destination: "NIH Medical Center",
    driver: "K. Brooks",
    status: "scheduled",
  },
  {
    id: "T-2404",
    time: "10:40",
    patientReference: "PT-4420",
    service: "Behavioral health",
    origin: "Silver Spring",
    destination: "Maple Behavioral Clinic",
    driver: "S. Patel",
    status: "critical",
  },
  {
    id: "T-2405",
    time: "12:15",
    patientReference: "PT-5092",
    service: "Follow-up",
    origin: "Germantown",
    destination: "Shady Grove Outpatient",
    driver: "R. Evans",
    status: "ready",
  },
];

export const complianceItems: ComplianceItem[] = [
  {
    id: "C-31",
    title: "Wheelchair securement audit",
    note: "Complete random sample review for last 20 trips.",
    owner: "QA Team",
    dueDate: "2026-08-04",
    status: "attention",
  },
  {
    id: "C-32",
    title: "Vehicle sanitation checklist",
    note: "Confirm shift-close logs and exception handling.",
    owner: "Operations",
    dueDate: "2026-08-02",
    status: "ready",
  },
  {
    id: "C-33",
    title: "Driver credential renewal",
    note: "Two expiring certifications require immediate update.",
    owner: "Compliance",
    dueDate: "2026-08-01",
    status: "critical",
  },
  {
    id: "C-34",
    title: "Incident follow-up documentation",
    note: "Finalize narrative and corrective action for open incident.",
    owner: "Safety Lead",
    dueDate: "2026-08-03",
    status: "scheduled",
  },
];
