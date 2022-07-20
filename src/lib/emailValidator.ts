import Validator from "email-validator";

class EmailValidator {
  constructor(
    private readonly email: string,
    private readonly validator = Validator
  ) {}

  isEmail(): boolean {
    return this.validator.validate(this.email);
  }
}

export default EmailValidator;
