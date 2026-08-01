import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Operations Command Center",
  description:
    "Fleet readiness, scheduled trips, and compliance monitoring.",
};

export default function OperationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
