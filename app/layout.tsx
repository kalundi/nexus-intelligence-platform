import type { Metadata } from "next";
import "./globals.css";

import { PlatformShell } from "../components/layout/PlatformShell";

export const metadata: Metadata = {
  title: {
    default: "Nexus Intelligence Platform",
    template: "%s | Nexus Intelligence",
  },
  description:
    "Understanding healthcare access. Building healthcare mobility.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <PlatformShell>{children}</PlatformShell>
      </body>
    </html>
  );
}
