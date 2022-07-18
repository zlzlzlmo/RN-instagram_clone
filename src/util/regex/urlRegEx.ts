class UrlRegEx extends RegExp {
  constructor(private readonly str: string) {
    super(/^(https?|chrome):\/\/[^\s$.?#].[^\s]*$/);
  }

  isValid(): boolean {
    return this.test(this.str);
  }
}

export default UrlRegEx;
