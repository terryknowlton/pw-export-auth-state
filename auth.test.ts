import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://app-dev.mabl.com/login");
  await page.getByLabel("Email").click();
  await page.getByLabel("Email").fill("terry+local@mabl.com");
  await page.getByLabel("Password", { exact: true }).click();
  await page.getByLabel("Password", { exact: true }).fill("myLocalDevUser1");
  await page.getByRole("button", { name: "Log in" }).click();
  await page.getByRole("button", { name: "TK Sandbox" }).click();

  await page.context().storageState({ path: "authFile.json" });
});
