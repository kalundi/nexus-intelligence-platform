import { expect, test } from "@playwright/test";

test("health endpoint reports an operational service", async ({
  request,
}) => {
  const response = await request.get("/api/health");

  expect(response.ok()).toBeTruthy();

  const body = await response.json();

  expect(body.status).toBe("ok");
  expect(body.service).toBe(
    "nexus-intelligence-platform",
  );
  expect(body.release).toBe("0.1.0-alpha");
});
