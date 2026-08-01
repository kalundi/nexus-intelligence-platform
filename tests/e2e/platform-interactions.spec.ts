import { expect, test } from "@playwright/test";

test("shared navigation opens every internal module", async ({
  page,
}) => {
  await page.goto("/observatory");

  await page.getByRole("link", { name: /Montgomery Atlas/i }).click();
  await expect(page).toHaveURL(/\/atlas$/);

  await page.getByRole("link", { name: /^Research/i }).click();
  await expect(page).toHaveURL(/\/research$/);

  await page.getByRole("link", { name: /Investor Room/i }).click();
  await expect(page).toHaveURL(/\/capital$/);

  await page.getByRole("link", { name: /^Operations/i }).click();
  await expect(page).toHaveURL(/\/operations$/);
});

test("research search filters publications", async ({ page }) => {
  await page.goto("/research");

  const search = page.getByRole("searchbox", {
    name: /Search publications/i,
  });

  await search.fill("Montgomery");

  await expect(
    page.getByRole("heading", {
      name: "Why Montgomery County",
    }),
  ).toBeVisible();

  await expect(
    page.getByRole("heading", {
      name: "The Nexus Operating Model",
    }),
  ).not.toBeVisible();
});

test("investor controls update scenario output", async ({
  page,
}) => {
  await page.goto("/capital");

  const vehicleSlider = page.getByRole("slider", {
    name: /Revenue-producing vehicles/i,
  });

  await vehicleSlider.fill("12");

  await expect(vehicleSlider).toHaveValue("12");
});

test("operations tabs switch views", async ({ page }) => {
  await page.goto("/operations");

  await page.getByRole("button", { name: "Fleet" }).click();
  await expect(
    page.getByRole("heading", { name: "Vehicle status" }),
  ).toBeVisible();

  await page.getByRole("button", { name: "Compliance" }).click();
  await expect(
    page.getByRole("heading", { name: "Monitoring queue" }),
  ).toBeVisible();
});
