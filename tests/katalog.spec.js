import { test, expect } from "@playwright/test";

const URL = "https://ha-fed25-testning.github.io/exam_e2e/";

test.describe("Katalog", () => {
  test("visar en lista med böcker", async ({ page }) => {
    await page.goto(URL);
    await expect(page.getByText("Ormar på ett plan")).toBeVisible();
  });

  test("visar flera böcker i listan", async ({ page }) => {
    await page.goto(URL);
    await expect(page.getByText("The Pragmatic Procrastinator")).toBeVisible();
    await expect(
      page.getByText("Why Your Tests Are Lying to You"),
    ).toBeVisible();
  });

  test("kan favoritmarkera en bok", async ({ page }) => {
    await page.goto(URL);
    await page.click(
      '[data-testid="star-Ormar på ett plan: En Python-berättelse"]',
    );
    await page.click("text=Mina böcker");
    await expect(page.getByText("Ormar på ett plan")).toBeVisible();
  });
});
