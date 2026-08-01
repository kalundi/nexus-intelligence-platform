export type EvidenceCategory =
  | "verified-evidence"
  | "nexus-analysis"
  | "management-strategy"
  | "future-vision";

export interface ResearchPublication {
  slug: string;
  title: string;
  subtitle: string;
  summary: string;
  category: EvidenceCategory;
  topic:
    | "healthcare-access"
    | "montgomery-county"
    | "operations"
    | "capital"
    | "compliance";
  date: string;
  readTime: string;
  status: "published" | "draft" | "planned";
  featured: boolean;
  keyFindings: string[];
  sections: {
    heading: string;
    paragraphs: string[];
  }[];
  sources: {
    label: string;
    href: string;
  }[];
}

export const researchPublications: ResearchPublication[] = [
  {
    slug: "why-healthcare-mobility-matters",
    title: "Why Healthcare Mobility Matters",
    subtitle:
      "Understanding the connections between people, facilities, and access to care.",
    summary:
      "A foundational Nexus briefing explaining why transportation and coordination should be understood as part of healthcare access infrastructure.",
    category: "nexus-analysis",
    topic: "healthcare-access",
    date: "2026-08-01",
    readTime: "8 min",
    status: "published",
    featured: true,
    keyFindings: [
      "Healthcare increasingly occurs across multiple care settings rather than one hospital campus.",
      "Transportation barriers can contribute to delayed or missed care.",
      "Mobility providers must coordinate accessibility, scheduling, communication, and regional travel.",
    ],
    sections: [
      {
        heading: "Healthcare is becoming more distributed",
        paragraphs: [
          "Patients increasingly move among hospitals, outpatient clinics, dialysis centers, rehabilitation facilities, behavioral health providers, senior living communities, and home-based services.",
          "Each additional point of care creates another connection that must function reliably for the healthcare journey to work.",
        ],
      },
      {
        heading: "Mobility is part of the access equation",
        paragraphs: [
          "Nexus does not claim transportation alone determines health outcomes. The narrower and more supportable conclusion is that transportation can be a barrier to care and that targeted transportation interventions can reduce missed appointments.",
          "This makes healthcare mobility a practical operating issue for patients, providers, facilities, and communities.",
        ],
      },
      {
        heading: "The Nexus response",
        paragraphs: [
          "Nexus is developing an operating model that combines accessible service, facility coordination, quality assurance, compliance, technology, and regional intelligence.",
        ],
      },
    ],
    sources: [
      {
        label: "CMS - Non-Emergency Medical Transportation",
        href: "https://www.cms.gov/medicare/medicaid-coordination/states/non-emergency-medical-transportation",
      },
      {
        label: "Systematic Review of NEMT Interventions",
        href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9026972/",
      },
    ],
  },
  {
    slug: "why-montgomery-county",
    title: "Why Montgomery County",
    subtitle:
      "A strategic launch market for healthcare mobility operations.",
    summary:
      "A county-focused assessment of scale, aging, diversity, congestion, and regional healthcare connectivity.",
    category: "nexus-analysis",
    topic: "montgomery-county",
    date: "2026-08-01",
    readTime: "7 min",
    status: "published",
    featured: true,
    keyFindings: [
      "Montgomery County has more than one million residents.",
      "The county has a substantial older-adult population.",
      "Regional congestion and cross-jurisdiction travel increase operating complexity.",
    ],
    sections: [
      {
        heading: "Scale and diversity",
        paragraphs: [
          "Montgomery County is Maryland's most populous county and forms part of the wider Washington metropolitan healthcare market.",
          "Its diversity makes cultural competence, language access, accessibility, and adaptable service models operationally important.",
        ],
      },
      {
        heading: "Aging and recurring care",
        paragraphs: [
          "A significant older-adult population supports demand for recurring appointments, rehabilitation, dialysis, specialty care, and assisted transportation.",
        ],
      },
      {
        heading: "A proving ground",
        paragraphs: [
          "Nexus views Montgomery County as a demanding operating environment in which to refine a repeatable healthcare mobility model before broader regional expansion.",
        ],
      },
    ],
    sources: [
      {
        label: "U.S. Census Bureau - Montgomery County QuickFacts",
        href: "https://www.census.gov/quickfacts/fact/table/montgomerycountymaryland/PST045225",
      },
      {
        label: "Montgomery Planning - 2024 ACS Findings",
        href: "https://montgomeryplanning.org/blog-design/2025/09/findings-from-the-2024-american-community-survey-montgomery-county-maryland-and-the-united-states/",
      },
    ],
  },
  {
    slug: "nexus-operating-model",
    title: "The Nexus Operating Model",
    subtitle:
      "How quality, compliance, technology, and facility coordination work together.",
    summary:
      "A management-strategy briefing describing the operational disciplines Nexus intends to build around healthcare mobility.",
    category: "management-strategy",
    topic: "operations",
    date: "2026-08-01",
    readTime: "6 min",
    status: "published",
    featured: false,
    keyFindings: [
      "Accessible service alone is not enough.",
      "Quality assurance and compliance support partner trust.",
      "Facility-centered workflows can reduce operational friction.",
    ],
    sections: [
      {
        heading: "Accessible service platform",
        paragraphs: [
          "The Nexus model includes ambulatory, wheelchair, stretcher, recurring facility transport, and future ambulance capabilities.",
        ],
      },
      {
        heading: "Facility-centered coordination",
        paragraphs: [
          "The operating vision includes booking, recurring ride management, trip-status visibility, communication, documentation, and account-level reporting.",
        ],
      },
      {
        heading: "Operational discipline",
        paragraphs: [
          "Quality assurance, compliance, training, inspections, complaint handling, and documentation are treated as core operating systems rather than administrative afterthoughts.",
        ],
      },
    ],
    sources: [],
  },
  {
    slug: "healthcare-access-index-methodology",
    title: "Healthcare Access Index - Methodology Concept",
    subtitle:
      "A transparent framework for comparing healthcare mobility conditions.",
    summary:
      "A future-vision publication outlining how Nexus may develop a documented regional access index.",
    category: "future-vision",
    topic: "healthcare-access",
    date: "2026-08-01",
    readTime: "5 min",
    status: "draft",
    featured: false,
    keyFindings: [
      "The framework should publish all inputs and weights.",
      "Measured data must be separated from modeled estimates.",
      "Scores should explain limitations rather than imply false precision.",
    ],
    sections: [
      {
        heading: "Potential dimensions",
        paragraphs: [
          "Possible dimensions include population vulnerability, healthcare facility availability, transportation availability, travel-time reliability, accessibility, regional growth, and service connectivity.",
        ],
      },
      {
        heading: "Transparency requirements",
        paragraphs: [
          "Every score should disclose its source data, collection date, weighting method, geographic coverage, assumptions, and known limitations.",
        ],
      },
    ],
    sources: [],
  },
];

export const evidenceCategoryLabels: Record<
  EvidenceCategory,
  string
> = {
  "verified-evidence": "Verified Evidence",
  "nexus-analysis": "Nexus Analysis",
  "management-strategy": "Management Strategy",
  "future-vision": "Future Vision",
};
