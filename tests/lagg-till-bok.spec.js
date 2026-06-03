import { test, expect } from "@playwright/test";

const URL = "https://ha-fed25-testning.github.io/exam_e2e/";

test.describe("Lägg till bok", () => {
  test("formuläret visas", async ({ page }) => {
    await page.goto(URL);
    await page.click("text=Lägg till bok");
    await expect(page.getByLabel("Titel")).toBeVisible();
    await expect(page.getByLabel("Författare")).toBeVisible();
  });

  test("kan lägga till en ny bok", async ({ page }) => {
    await page.goto(URL);
    await page.click("text=Lägg till bok");
    await page.fill('[data-testid="add-input-title"]', "Min testbok");
    await page.fill('[data-testid="add-input-author"]', "Test Författare");
    await page.click('[data-testid="add-submit"]');
    await page.click("text=Katalog");
    await expect(page.getByText("Min testbok")).toBeVisible();
  });
});
