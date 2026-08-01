import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Investor Decision Room",
  description:
    "Illustrative operating scenarios, capital allocation, and risk framing.",
};

export default function CapitalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
