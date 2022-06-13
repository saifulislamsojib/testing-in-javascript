// jest.mock("../js/postToServer.js");

const puppeteer = require("puppeteer");

const {
  generateResult,
  checkValidation,
  validateInput,
  checkAndGenerate,
} = require("../js/lib");

test("generate result", () => {
  expect(generateResult(1, "My First Blog")).toBe(
    "User ID: 1 created an article titled My First Blog"
  );
});

test("validate input", () => {
  expect(validateInput(1, true, true)).toBeTruthy();
});

test("check validation", () => {
  expect(checkValidation(1, "My First Blog", "blg....")).toBeTruthy();
});

test("check And Generate", async () => {
  const result = await checkAndGenerate(1, "My First Blog", "blg....");
  expect(result).toBe("User ID: 1 created an article titled My First Blog");
});

test("e2e test", async () => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 80,
    args: ["--window-size=1920,1080"],
  });
  const page = await browser.newPage();
  await page.goto("http://127.0.0.1:5500/");
  await page.click("input#userid");
  await page.type("input#userid", "1");
  await page.click("input#title");
  await page.type("input#title", "My First Blog");
  await page.click("textarea#article");
  await page.type("textarea#article", "blg....");
  await page.click("#addNewPostBtn");

  await browser.close();
  return {};
}, 20000);
