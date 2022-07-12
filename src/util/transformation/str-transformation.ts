class StringTransformation {
  constructor(private readonly str: string) {}

  slice(maxLength: number) {
    return this.str.length > maxLength + 1
      ? this.str.slice(0, maxLength) + "..."
      : this.str;
  }
}

export default StringTransformation;
