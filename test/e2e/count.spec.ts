import { expect, test } from "@playwright/test";

const MAIN_ROUTE = "http://localhost:5173";
test.describe("Count Test Group ", () => {
  test("increase todo", async ({ page }) => {
    await page.goto(MAIN_ROUTE);
  });
});
