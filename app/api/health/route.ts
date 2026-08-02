import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    status: "ok",
    service: "nexus-intelligence-platform",
    release: "0.1.0-alpha",
  });
}
