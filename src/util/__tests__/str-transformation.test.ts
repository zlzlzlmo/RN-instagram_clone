import StringTransformation from "../transformation/str-transformation";

test("slice string by max length with ...", () => {
  expect(new StringTransformation("abcdefg").slice(3)).toBe("abc...");
});
