export type DataStatus =
  | "verified"
  | "illustrative"
  | "management-assumption"
  | "future-vision";

export interface DataSource {
  id: string;
  title: string;
  publisher: string;
  url: string;
  accessedAt: string;
}

export interface DataRecord<T = string | number> {
  id: string;
  label: string;
  value: T;
  unit?: string;
  geography: string;
  period: string;
  status: DataStatus;
  sourceId?: string;
  methodology?: string;
  limitations?: string;
}
