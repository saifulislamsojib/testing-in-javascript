// get user input fields
const getUserInputs = function () {
  const userIdInput = document.querySelector("input#userid");
  const titleInput = document.querySelector("input#title");
  const articleInput = document.querySelector("textarea#article");

  return {
    userIdInput,
    titleInput,
    articleInput,
  };
};

// validate input
const validateInput = function (value, required, isNumber) {
  if (!value) false;

  if (required && value.toString().trim().length === 0) return false;

  if (isNumber && isNaN(+value)) return false;

  return true;
};

// generate final result
const generateResult = function (userId, title) {
  return `User ID: ${userId} created an article titled ${title}`;
};

// check and generate
const checkAndGenerate = (
  userIdInputValue,
  titleInputValue,
  articleInputValue
) => {
  // check Validation
  const isValid = checkValidation(
    userIdInputValue,
    titleInputValue,
    articleInputValue
  );
  if (!isValid) return;

  // generate Result
  const resultText = generateResult(userIdInputValue, titleInputValue);
  return resultText;
};

// check validation
const checkValidation = function (userIdValue, titleValue, articleValue) {
  if (
    !validateInput(userIdValue, true, true) ||
    !validateInput(titleValue, true, false) ||
    !validateInput(articleValue, true, false)
  ) {
    return false;
  }
  return true;
};

// Creates a new DOM element and returns it
const createElement = function (type, text, className = null) {
  const newElement = document.createElement(type);
  if (className) newElement.classList.add(className);
  newElement.textContent = text;
  return newElement;
};

module.exports = {
  checkValidation,
  createElement,
  generateResult,
  getUserInputs,
  validateInput,
  checkAndGenerate,
};
