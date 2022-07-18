import UrlRegEx from "../../regex/urlRegEx";

test("valid Url", () => {
  expect(new UrlRegEx("https://ooo.com").isValid()).toBeTruthy();
});

test("inValid Url", () => {
  expect(new UrlRegEx("ooo.com").isValid()).toBeFalsy();
});
