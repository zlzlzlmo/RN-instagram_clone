class UrlRegEx extends RegExp {
  constructor(private readonly str: string) {
    super(/^(https?|chrome):\/\/[^\s$.?#].[^\s]*$/);
  }

  isValid(): boolean {
    return this.test(this.str);
  }
}

export default UrlRegEx;

// 이메일,url, username, password
// isvalid
// 조건이 다르다.
// 클래스에서 조건 선언
// 팩토리?
// new VlidationFactory('email').isValid()
