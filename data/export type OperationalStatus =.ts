export type OperationalStatus =
  | "ready"
  | "attention"
  | "critical"
  | "scheduled";

export interface FleetVehicle {
  id: string;
  name: string;
  type: "wheelchair" | "stretcher" | "ambulance";
  status: OperationalStatus;
  driver: string;
  assignment: string;
  nextInspection: string;
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
  owner: string;
  dueDate: string;
  status: OperationalStatus;
  note: string;
}

export const fleetVehicles: FleetVehicle[] = [
  {
    id: "NX-101",
    name: "Nexus Wheelchair 01",
    type: "wheelchair",
    status: "ready",
    driver: "Assigned",
    assignment: "Dialysis route",
    nextInspection: "2026-08-14",
  },
  {
    id: "NX-102",
    name: "Nexus Wheelchair 02",
    type: "wheelchair",
    status: "ready",
    driver: "Assigned",
    assignment: "Facility discharges",
    nextInspection: "2026-08-18",
  },
  {
    id: "NX-201",
    name: "Nexus Stretcher 01",
    type: "stretcher",
    status: "attention",
    driver: "Pending",
    assignment: "Available after 11:00",
    nextInspection: "2026-08-08",
  },
  {
    id: "NX-301",
    name: "Nexus Ambulance 01",
    type: "ambulance",
    status: "scheduled",
    driver: "Training assignment",
    assignment: "Readiness preparation",
    nextInspection: "2026-08-22",
  },
];

export const scheduledTrips: ScheduledTrip[] = [
  {
    id: "TRIP-2401",
    time: "07:15",
    patientReference: "Patient A",
    service: "Wheelchair",
    origin: "Silver Spring",
    destination: "Dialysis Center",
    driver: "Driver 01",
    status: "ready",
  },
  {
    id: "TRIP-2402",
    time: "08:40",
    patientReference: "Patient B",
    service: "Ambulatory",
    origin: "Rockville",
    destination: "Specialty Clinic",
    driver: "Driver 02",
    status: "ready",
  },
  {
    id: "TRIP-2403",
    time: "10:20",
    patientReference: "Patient C",
    service: "Stretcher",
    origin: "Hospital",
    destination: "Skilled Nursing Facility",
    driver: "Unassigned",
    status: "attention",
  },
  {
    id: "TRIP-2404",
    time: "13:30",
    patientReference: "Patient D",
    service: "Wheelchair",
    origin: "Bethesda",
    destination: "Rehabilitation",
    driver: "Driver 01",
    status: "scheduled",
  },
];

export const complianceItems: ComplianceItem[] = [
  {
    id: "CMP-01",
    title: "Vehicle inspection review",
    owner: "Fleet Manager",
    dueDate: "2026-08-08",
    status: "attention",
    note: "NX-201 inspection window approaching.",
  },
  {
    id: "CMP-02",
    title: "Monthly QA review",
    owner: "QA Officer",
    dueDate: "2026-08-05",
    status: "scheduled",
    note: "Review complaints, incidents, and service indicators.",
  },
  {
    id: "CMP-03",
    title: "Employee training records",
    owner: "Operations",
    dueDate: "2026-08-15",
    status: "ready",
    note: "Current files reviewed and organized.",
  },
  {
    id: "CMP-04",
    title: "Insurance document verification",
    owner: "Administration",
    dueDate: "2026-08-20",
    status: "ready",
    note: "Current certificates available.",
  },
];

export const operationalMetrics = [
  {
    label: "Fleet Ready",
    value: "2 of 4",
    note: "Two vehicles immediately deployable",
    status: "attention" as OperationalStatus,
  },
  {
    label: "Today's Trips",
    value: scheduledTrips.length.toString(),
    note: "Prototype daily schedule",
    status: "ready" as OperationalStatus,
  },
  {
    label: "Unassigned Trips",
    value: scheduledTrips
      .filter((trip) => trip.driver === "Unassigned")
      .length.toString(),
    note: "Requires dispatch action",
    status: "attention" as OperationalStatus,
  },
  {
    label: "Compliance Tasks",
    value: complianceItems.length.toString(),
    note: "Open monitoring items",
    status: "scheduled" as OperationalStatus,
  },
];