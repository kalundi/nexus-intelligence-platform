import type {
  ObservatoryMetric,
  TrendPoint,
} from "../types/observatory";

export const observatoryMetrics: ObservatoryMetric[] = [
  {
    id: "county-population",
    title: "County Population",
    value: "1.08M",
    change: "Large regional market",
    trend: "up",
    category: "population",
    description:
      "Montgomery County provides a substantial population base within the Washington metropolitan healthcare market.",
    source: "Montgomery Planning / ACS",
    evidenceType: "verified",
  },
  {
    id: "older-adults",
    title: "Residents Age 65+",
    value: "18.0%",
    change: "Recurring-care relevance",
    trend: "up",
    category: "population",
    description:
      "Older adults may require recurring treatment, mobility assistance, rehabilitation, and coordinated transportation.",
    source: "Montgomery Planning / ACS",
    evidenceType: "verified",
  },
  {
    id: "distributed-care",
    title: "Distributed Care",
    value: "Expanding",
    change: "More points of care",
    trend: "up",
    category: "healthcare",
    description:
      "Care increasingly occurs across hospitals, dialysis centers, outpatient facilities, rehabilitation, and home-based settings.",
    source: "Nexus synthesis of healthcare delivery trends",
    evidenceType: "nexus-analysis",
  },
  {
    id: "transport-complexity",
    title: "Transportation Complexity",
    value: "High",
    change: "Regional and cross-county",
    trend: "up",
    category: "transportation",
    description:
      "Congestion, appointment timing, accessibility needs, and cross-jurisdiction travel increase operating complexity.",
    source: "MWCOG and Nexus analysis",
    evidenceType: "nexus-analysis",
  },
  {
    id: "foreign-born",
    title: "Foreign-Born Residents",
    value: "33.6%",
    change: "Communication matters",
    trend: "neutral",
    category: "accessibility",
    description:
      "Language access and cultural competence are important considerations when designing patient-centered mobility services.",
    source: "U.S. Census Bureau QuickFacts",
    evidenceType: "verified",
  },
  {
    id: "mobility-opportunity",
    title: "Mobility Opportunity",
    value: "Strategic",
    change: "Nexus assessment",
    trend: "up",
    category: "transportation",
    description:
      "Nexus views Montgomery County as a strong market in which to develop a repeatable healthcare mobility model.",
    source: "Nexus management strategy",
    evidenceType: "management-strategy",
  },
];

export const populationTrend: TrendPoint[] = [
  { year: "2020", population: 1062, olderAdults: 165 },
  { year: "2021", population: 1068, olderAdults: 170 },
  { year: "2022", population: 1073, olderAdults: 178 },
  { year: "2023", population: 1078, olderAdults: 187 },
  { year: "2024", population: 1082, olderAdults: 195 },
];
