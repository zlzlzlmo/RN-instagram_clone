import { IValidator } from "./validatorFactory";

class UserNameValidator implements IValidator {
  constructor(private readonly userName: string) {}

  isValid() {
    return this.userName.length > 2;
  }
}

export default UserNameValidator;
