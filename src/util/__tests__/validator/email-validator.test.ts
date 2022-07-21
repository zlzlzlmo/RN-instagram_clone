import ValidatorFactory from "../../validator/validatorFactory";

describe("email validator", () => {
  const TYPE = "email";

  test("return true when it is an email", () => {
    expect(
      ValidatorFactory.createValidator(TYPE, "sh.shin3827@daum.net").isValid()
    ).toBe(true);
  });

  test("return false when it is not an email", () => {
    expect(
      ValidatorFactory.createValidator(TYPE, "sh.shin3827daum.net").isValid()
    ).toBe(false);
  });
});
