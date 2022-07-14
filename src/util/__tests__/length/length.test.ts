import Length from "../../length/length";

describe("IsTwoOrMore", () => {
  test("get true when an array length is two or more", () => {
    expect(new Length(["test", "test2"]).IsTwoOrMore()).toBe(true);
  });

  test("get false when an array length is one", () => {
    expect(new Length(["test"]).IsTwoOrMore()).toBe(false);
  });

  test("get false when an array length is zero", () => {
    expect(new Length([]).IsTwoOrMore()).toBe(false);
  });
});

describe("hasElement", () => {
  test("get false when there is no element in an array", () => {
    expect(new Length([]).hasElement()).toBe(false);
  });

  test("get true when there are elements in an array", () => {
    expect(new Length([1]).hasElement()).toBe(true);
  });
});
