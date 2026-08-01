export type MetricTrend = "up" | "down" | "neutral";

export type EvidenceType =
  | "verified"
  | "nexus-analysis"
  | "management-strategy"
  | "future-vision";

export interface ObservatoryMetric {
  id: string;
  title: string;
  value: string;
  change: string;
  trend: MetricTrend;
  category:
    | "population"
    | "healthcare"
    | "transportation"
    | "accessibility";
  description: string;
  source: string;
  evidenceType: EvidenceType;
}

export interface TrendPoint {
  year: string;
  population: number;
  olderAdults: number;
}

export type KpiMetric = {
  label: string;
  value: string;
  trend: string;
};

export type PopulationPoint = {
  label: string;
  value: number;
};

export type NetworkNode = {
  name: string;
  status: string;
};

export type TransportationInsight = {
  label: string;
  value: string;
};

export type ForecastInsight = {
  label: string;
  value: string;
};

export type EvidenceItem = {
  title: string;
  summary: string;
};

export type ObservatoryData = {
  kpis: KpiMetric[];
  populationTrend: PopulationPoint[];
  network: NetworkNode[];
  transportation: TransportationInsight[];
  forecast: ForecastInsight[];
  evidence: EvidenceItem[];
};
