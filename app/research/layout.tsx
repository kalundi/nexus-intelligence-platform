import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research Library",
  description:
    "Evidence, analysis, strategy, and future-vision publications.",
};

export default function ResearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
