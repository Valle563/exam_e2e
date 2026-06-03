import { test, expect } from "@playwright/test";

const URL = "https://ha-fed25-testning.github.io/exam_e2e/";

test.describe("Statistik", () => {
  test("visar antal böcker i listan", async ({ page }) => {
    await page.goto(URL);
    await page.click("text=Statistik");
    await expect(page.getByText("Listan har 13 böcker")).toBeVisible();
  });

  test("visar antal hjärtmarkerade böcker", async ({ page }) => {
    await page.goto(URL);
    await page.click("text=Statistik");
    await expect(page.getByText("hjärtmarkerat")).toBeVisible();
  });

  test("uppdaterar antal hjärtmarkerade efter favoritmarkering", async ({
    page,
  }) => {
    await page.goto(URL);
    await page.click(
      '[data-testid="star-Ormar på ett plan: En Python-berättelse"]',
    );
    await page.click("text=Statistik");
    await expect(page.getByText("hjärtmarkerat 1 böcker")).toBeVisible();
  });
});
