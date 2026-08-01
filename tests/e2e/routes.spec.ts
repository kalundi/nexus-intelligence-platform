import { expect, test } from "@playwright/test";

const routes = [
  {
    path: "/",
    heading: /Healthcare Access Outlook|Nexus Intelligence/i,
  },
  {
    path: "/observatory",
    heading: /Healthcare Access Observatory/i,
  },
  {
    path: "/atlas",
    heading: /Montgomery County Healthcare Atlas/i,
  },
  {
    path: "/research",
    heading: /Research Library/i,
  },
  {
    path: "/capital",
    heading: /Investor Decision Room/i,
  },
  {
    path: "/operations",
    heading: /Operations Command Center/i,
  },
];

for (const route of routes) {
  test(`${route.path} loads successfully`, async ({ page }) => {
    const response = await page.goto(route.path);

    expect(response?.ok()).toBeTruthy();
    await expect(
      page.getByRole("heading", {
        name: route.heading,
      }).first(),
    ).toBeVisible();
  });
}
