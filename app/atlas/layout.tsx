import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Montgomery Atlas",
  description:
    "Facility and corridor intelligence for healthcare mobility planning.",
};

export default function AtlasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
