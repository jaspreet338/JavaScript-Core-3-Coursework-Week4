let verify = require("./password-verifier");

describe("requirement 1", () => {
    test("return Password rejected if the password is less than 8 characters", function () {
        const password = "Jas";
        const result = verify(password);
        const actualOutput = "Password rejected";

        expect(result).toEqual(actualOutput);
    });
} )

describe("requirement 2", () => {
  test("return Password rejected if the password is null", function () {
    const password = "";
    const result = verify(password);
    const actualOutput = "Password rejected";

    expect(result).toEqual(actualOutput);
  });
});

describe("requirement 3", () => {
  test("return Password rejected if the password does not have at least 1 uppercase letter ", function () {
    const password = "jaspreet";
    const result = verify(password);
    const actualOutput = "Password rejected";

    expect(result).toEqual(actualOutput);
  });
});

describe("requirement 4", () => {
  test("return Password rejected if the password does not have at least 1 number", function () {
    const password = "Jaspreet";
    const result = verify(password);
    const actualOutput = "Password rejected";

    expect(result).toEqual(actualOutput);
  });
});

describe("requirement 5", () => {
  test("return Password accepted if the password meet all criteria", function () {
    const password = "Jaskaur1";
    const result = verify(password);
    const actualOutput = "Password rejected";

    expect(result).toEqual(actualOutput);
  });
});