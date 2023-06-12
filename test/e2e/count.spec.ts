import { expect, test } from "@playwright/test";

const MAIN_ROUTE = "http://localhost:5173";
test.describe("Count Test Group ", () => {
  test("increase todo", async ({ page }) => {
    await page.goto(MAIN_ROUTE);
    await page.goto("http://localhost:5173/");
    await expect(page.getByTestId("counterBtn")).toContainText("count is 0");
    await page.getByTestId("counterBtn").click();
    await page.getByTestId("counterBtn").click();
    await page.getByTestId("counterBtn").click();
    await page.getByTestId("counterBtn").click();
    await expect(page.getByTestId("counterBtn")).toContainText("count is 4");
  });
});
