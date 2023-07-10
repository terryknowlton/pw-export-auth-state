import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://app-dev.mabl.com");
  await page.getByRole("button", { name: "TK Sandbox" }).click();
});
