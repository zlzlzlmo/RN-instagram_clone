import NumberTransformation from "../transformation/number-transformation";

test("return string with comma from number", () => {
  expect(new NumberTransformation(3000).getWithComma()).toBe("3,000");
});
