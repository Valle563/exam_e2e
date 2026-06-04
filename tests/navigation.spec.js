import { test, expect } from "@playwright/test";

const URL = "https://ha-fed25-testning.github.io/exam_e2e/";

test.describe("Navigering", () => {
  test("katalog visas som startsida", async ({ page }) => {
    await page.goto(URL);
    await expect(page.getByText("Ormar på ett plan")).toBeVisible();
  });

  test("kan navigera till Lägg till bok", async ({ page }) => {
    await page.goto(URL);
    await page.click("text=Lägg till bok");
    await expect(page.getByText("Titel")).toBeVisible();
  });

  test("kan navigera till Mina böcker", async ({ page }) => {
    await page.goto(URL);
    await page.click("text=Mina böcker");
    await expect(page.getByText("favoritböcker")).toBeVisible();
  });

  test("kan navigera till Statistik", async ({ page }) => {
    await page.goto(URL);
    await page.click("text=Statistik");
    await expect(page.getByText("Listan har")).toBeVisible();
  });
});

// test för katalogknappen.
