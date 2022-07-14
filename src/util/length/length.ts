class Length {
  private length: number;

  constructor(private readonly array: any[]) {
    this.length = this.array.length;
  }

  IsTwoOrMore(): boolean {
    return this.length > 1;
  }
}
export default Length;
