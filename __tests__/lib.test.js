// jest.mock("../js/postToServer.js");

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
