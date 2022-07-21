import { IValidator } from "./validatorFactory";

class UrlValidator extends RegExp implements IValidator {
  constructor(private readonly str: string) {
    super(/^(https?|chrome):\/\/[^\s$.?#].[^\s]*$/);
  }

  isValid(): boolean {
    return this.test(this.str);
  }
}

export default UrlValidator;
