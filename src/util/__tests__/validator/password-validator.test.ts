import ValidatorFactory from "../../validator/validatorFactory";

describe("password validator", () => {
  const TYPE = "password";
  test("return true when it is an password", () => {
    expect(ValidatorFactory.createValidator(TYPE, "userTest").isValid()).toBe(
      true
    );
  });

  test("return false when it is not an password", () => {
    expect(ValidatorFactory.createValidator(TYPE, "ss").isValid()).toBe(false);
  });
});
