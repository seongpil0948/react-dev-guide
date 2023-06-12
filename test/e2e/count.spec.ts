import { expect, test } from "@playwright/test";

const MAIN_ROUTE = "http://localhost:5173";
test.describe("Count Test Group ", () => {
  test("increase todo", async ({ page }) => {
    await page.goto(MAIN_ROUTE);
    await expect(page.getByTestId("counterBtn")).toContainText("count is 0");
    await page.getByTestId("counterBtn").click();
    await page.getByTestId("counterBtn").click();
    await page.getByTestId("counterBtn").click();
    await page.getByTestId("counterBtn").click();
    await expect(page.getByTestId("counterBtn")).toContainText("count is 4");
  });
  test("get list(bad)", async ({ page }) => {
    await page.goto(MAIN_ROUTE);
    const items = await page.getByRole("listitem").all();
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      const txt = await item.textContent();
      if (txt === "Product 2") {
        item.getByRole("button", { name: "Add to cart" }).click();
      }
    }
  });
  test("get list(good)", async ({ page }) => {
    await page.goto(MAIN_ROUTE);
    await page
      .getByRole("listitem")
      .filter({ hasText: /Product 2/ })
      .getByRole("button", { name: "Add to cart" })
      .click();
  });
});
