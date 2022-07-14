import Length from "../../length/length";

test("get true when an array length is two or more", () => {
  expect(new Length(["test", "test2"]).IsTwoOrMore()).toBe(true);
});

test("get false when an array length is one", () => {
  expect(new Length(["test"]).IsTwoOrMore()).toBe(false);
});

test("get false when an array length is zero", () => {
  expect(new Length([]).IsTwoOrMore()).toBe(false);
});
