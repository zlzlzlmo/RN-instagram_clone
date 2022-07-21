import { IValidator } from "./validatorFactory";

class PasswordValidator implements IValidator {
  constructor(private readonly password: string) {}

  isValid() {
    return this.password.length > 6;
  }
}

export default PasswordValidator;
