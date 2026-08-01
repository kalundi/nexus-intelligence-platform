export type FacilityCategory =
  | "hospital"
  | "dialysis"
  | "senior-living"
  | "rehabilitation"
  | "behavioral-health";

export interface Facility {
  id: string;
  name: string;
  category: FacilityCategory;
  area: string;
  x: number;
  y: number;
  status: "core" | "growth" | "regional";
  note: string;
}

export const facilities: Facility[] = [
  {
    id: "germantown-hospital",
    name: "Germantown Hospital Area",
    category: "hospital",
    area: "Germantown",
    x: 32,
    y: 24,
    status: "core",
    note: "Illustrative hospital and recurring-care corridor.",
  },
  {
    id: "rockville-medical",
    name: "Rockville Medical Corridor",
    category: "hospital",
    area: "Rockville",
    x: 49,
    y: 48,
    status: "core",
    note: "Illustrative central county medical-services cluster.",
  },
  {
    id: "silver-spring-dialysis",
    name: "Silver Spring Dialysis Cluster",
    category: "dialysis",
    area: "Silver Spring",
    x: 67,
    y: 73,
    status: "core",
    note: "Illustrative recurring dialysis transportation market.",
  },
  {
    id: "bethesda-rehab",
    name: "Bethesda Rehabilitation Corridor",
    category: "rehabilitation",
    area: "Bethesda",
    x: 58,
    y: 69,
    status: "regional",
    note: "Illustrative rehabilitation and specialty-care corridor.",
  },
  {
    id: "gaithersburg-senior",
    name: "Gaithersburg Senior Living Cluster",
    category: "senior-living",
    area: "Gaithersburg",
    x: 41,
    y: 37,
    status: "growth",
    note: "Illustrative assisted-living and recurring-trip opportunity.",
  },
  {
    id: "takoma-behavioral",
    name: "Takoma Park Behavioral Health",
    category: "behavioral-health",
    area: "Takoma Park",
    x: 77,
    y: 79,
    status: "regional",
    note: "Illustrative behavioral-health access corridor.",
  },
];
