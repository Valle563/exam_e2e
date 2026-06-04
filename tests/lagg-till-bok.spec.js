import { test, expect } from "@playwright/test";

const URL = "https://ha-fed25-testning.github.io/exam_e2e/";

test.describe("Lägg till bok", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(URL);
    await page.getByRole("button", { name: "Lägg till bok" }).click();
  });

  test("formuläret visas", async ({ page }) => {
    await expect(page.getByLabel("Titel")).toBeVisible();
    await expect(page.getByLabel("Författare")).toBeVisible();
  });

  // gammal verison
  // test("kan lägga till en ny bok", async ({ page }) => {
  //   await page.fill('[data-testid="add-input-title"]', "Min testbok");
  //   await page.fill('[data-testid="add-input-author"]', "Test Författare");
  //   await page.click('[data-testid="add-submit"]');
  //   await page.getByRole("button", { name: "Katalog" }).click();
  //   await expect(page.getByText("Min testbok")).toBeVisible();
  // });

  // ny verison med getBy
  test("kan lägga till en ny bok - getBy version", async ({ page }) => {
    await page.getByLabel("Titel").fill("Min testbok getBy");
    await page.getByLabel("Författare").fill("Test Författare");
    await page.getByRole("button", { name: "Lägg till ny bok" }).click();
    await page.getByRole("button", { name: "Katalog" }).click();
    await expect(page.getByText("Min testbok getBy")).toBeVisible();
  });
});
