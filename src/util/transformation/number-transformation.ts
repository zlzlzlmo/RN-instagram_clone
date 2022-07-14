class NumberTransformation {
  constructor(private readonly num: number) {}

  getWithComma() {
    return this.num.toLocaleString("en");
  }
}

export default NumberTransformation;
