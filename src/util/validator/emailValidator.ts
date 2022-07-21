import Validator from "email-validator";
import { IValidator } from "./validatorFactory";

class EmailValidator implements IValidator {
  constructor(
    private readonly email: string,
    private readonly validator = Validator
  ) {}

  isValid(): boolean {
    return this.validator.validate(this.email);
  }
}

export default EmailValidator;
