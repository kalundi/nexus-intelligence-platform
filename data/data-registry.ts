import type {
  DataRecord,
  DataSource,
} from "../types/data-registry";

export const dataSources: DataSource[] = [
  {
    id: "census-montgomery-quickfacts",
    title: "Montgomery County QuickFacts",
    publisher: "U.S. Census Bureau",
    url: "https://www.census.gov/quickfacts/fact/table/montgomerycountymaryland",
    accessedAt: "2026-08-01",
  },
  {
    id: "cms-nemt",
    title: "Non-Emergency Medical Transportation",
    publisher: "Centers for Medicare & Medicaid Services",
    url: "https://www.cms.gov/medicare/medicaid-coordination/states/non-emergency-medical-transportation",
    accessedAt: "2026-08-01",
  },
];

export const countyData: DataRecord[] = [
  {
    id: "montgomery-population",
    label: "County Population",
    value: 1082273,
    unit: "residents",
    geography: "Montgomery County, Maryland",
    period: "2024 estimate",
    status: "verified",
    sourceId: "census-montgomery-quickfacts",
    limitations:
      "Confirm the displayed estimate and vintage before external publication.",
  },
  {
    id: "montgomery-age-65",
    label: "Residents Age 65+",
    value: 18,
    unit: "%",
    geography: "Montgomery County, Maryland",
    period: "Current planning baseline",
    status: "verified",
    sourceId: "census-montgomery-quickfacts",
    limitations:
      "The exact survey vintage must accompany published use.",
  },
  {
    id: "mobility-opportunity",
    label: "Healthcare Mobility Opportunity",
    value: "Strategic",
    geography: "Montgomery County, Maryland",
    period: "Genesis Alpha",
    status: "management-assumption",
    methodology:
      "Nexus interpretation of population, care distribution, accessibility, and regional travel conditions.",
  },
];
