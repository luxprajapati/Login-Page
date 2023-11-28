const userName = document.getElementById("username");
const password = document.getElementById("password");
const form = document.getElementById("login-form");
const error = document.getElementById("error");

// Funcition to cnt the lowerCase
function containLowerCase(str) {
  let lowerCaseCnt = 0;
  for (let s of str) {
    if (s == s.toLowerCase()) {
      lowerCaseCnt++;
    }
  }
  return lowerCaseCnt;
}

// Functiont to cnt the upperCase
function containUpperCase(str) {
  let upperCaseCnt = 0;
  for (let s of str) {
    if (s == s.toUpperCase()) {
      upperCaseCnt++;
    }
  }
  return upperCaseCnt;
}

const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// Function to cnt digit
function containDigits(str) {
  let digitCnt = 0;
  for (let s of str) {
    if (digits.includes(Number(s))) {
      digitCnt++;
    }
  }
  return digitCnt;
}

const symbols = '~!@#$%^&*()_-+={[]}|:;"<,>.?/';
// Function to cnt the numbers of symbols
function containSymbol(str) {
  let symbolCnt = 0;
  for (let s of str) {
    if (symbols.includes(s)) {
      symbolCnt++;
    }
  }
  return symbolCnt;
}

// Function to validate the username
const userNameValidator = (userName) => {
  const lowerCaseTest = containLowerCase(userName.value);
  const upperCaseTest = containUpperCase(userName.value);
  const digitTest = containDigits(userName.value);

  if (!lowerCaseTest || !upperCaseTest || !digitTest) {
    const lowerCase = lowerCaseTest ? "" : "Lowercase";
    const upperCase = upperCaseTest ? "" : "Uppercase";
    const digit = digitTest ? "" : "Digit";

    error.innerHTML = `Username must be a ${upperCase + ","} ${
      lowerCase + ","
    } ${digit} `;
    setTimeout(() => {
      error.innerHTML = "";
    }, 3000);
  } else {
    return true;
  }
};

// Function to vaidate the password
const passwordValidator = (password) => {
  const lowerCaseTest = containLowerCase(password.value);
  const upperCaseTest = containUpperCase(password.value);
  const digitTest = containDigits(password.value);
  const symbolTest = containSymbol(password.value);

  if (!lowerCaseTest || !upperCaseTest || !digitTest || !symbolTest) {
    const lowerCase = lowerCaseTest ? "" : "Lowercase";
    const upperCase = upperCaseTest ? "" : "Uppercase";
    const digit = digitTest ? "" : "Digit";
    const symbol = symbolTest ? "" : "Symbol";

    const length =
      password.value.length <= 10 ? "Length must be more than 10" : "";

    // error.innerHTML = `Password must be a ${upperCase}"," ${lowerCase}"," ${digit} "," ${symbol}`;

    alert(
      `${`Password must be a ${upperCase}"," ${lowerCase}"," ${digit} "," ${symbol}`}`
    );

    // setTimeout(() => {
    //   error.innerHTML = "";
    // }, 3000);
  } else {
    return true;
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (userNameValidator(userName) && passwordValidator(password)) {
    userName.value = "";
    password.value = "";
    alert("We're on break for 24 hours");
  }
});
