import ValidatorFactory from "../../validator/validatorFactory";

describe("username validator", () => {
  const TYPE = "userName";
  test("return true when it is an username", () => {
    expect(ValidatorFactory.createValidator(TYPE, "userTest").isValid()).toBe(
      true
    );
  });

  test("return false when it is not an username", () => {
    expect(ValidatorFactory.createValidator(TYPE, "ss").isValid()).toBe(false);
  });
});
