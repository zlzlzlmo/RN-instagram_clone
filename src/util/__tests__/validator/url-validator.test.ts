import ValidatorFactory from "../../validator/validatorFactory";

describe("url validator", () => {
  const TYPE = "url";
  test("return true when it is an url", () => {
    expect(
      ValidatorFactory.createValidator(TYPE, "https://www.naver.com").isValid()
    ).toBe(true);
  });

  test("return false when it is not an url", () => {
    expect(ValidatorFactory.createValidator(TYPE, "ss").isValid()).toBe(false);
  });
});
