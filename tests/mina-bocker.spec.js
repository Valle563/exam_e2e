import { test, expect } from "@playwright/test";

const URL = "https://ha-fed25-testning.github.io/exam_e2e/";

test.describe("Mina böcker", () => {
  test("visar meddelande när inga böcker är valda", async ({ page }) => {
    await page.goto(URL);
    await page.click("text=Mina böcker");
    await expect(page.getByText("favoritböcker")).toBeVisible();
  });

  test("visar bok efter favoritmarkering", async ({ page }) => {
    await page.goto(URL);
    await page.click(
      '[data-testid="star-Ormar på ett plan: En Python-berättelse"]',
    );
    await page.click("text=Mina böcker");
    await expect(page.getByText("Ormar på ett plan")).toBeVisible();
  });

  test("kan favoritmarkera flera böcker", async ({ page }) => {
    await page.goto(URL);
    await page.click(
      '[data-testid="star-Ormar på ett plan: En Python-berättelse"]',
    );
    await page.click('[data-testid="star-The Pragmatic Procrastinator"]');
    await page.click("text=Mina böcker");
    await expect(page.getByText("Ormar på ett plan")).toBeVisible();
    await expect(page.getByText("The Pragmatic Procrastinator")).toBeVisible();
  });

  test("kan av-favoritmarkera en bok", async ({ page }) => {
    await page.goto(URL);
    await page.click(
      '[data-testid="star-Ormar på ett plan: En Python-berättelse"]',
    );
    await page.click(
      '[data-testid="star-Ormar på ett plan: En Python-berättelse"]',
    );
    await page.click("text=Mina böcker");
    await expect(page.getByText("Ormar på ett plan")).not.toBeVisible();
  });
});
