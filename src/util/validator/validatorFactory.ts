import EmailValidator from "./emailValidator";
import PasswordValidator from "./passwordValidator";
import UrlValidator from "./urlValidator";
import UserNameValidator from "./userNameValidator";

export interface IValidator {
  isValid: () => boolean;
}

type ValidatoryType = "email" | "url" | "password" | "userName";

class ValidatorFactory {
  static createValidator(type: ValidatoryType, str: string): IValidator {
    switch (type) {
      case "email":
        return new EmailValidator(str);
      case "url":
        return new UrlValidator(str);
      case "password":
        return new PasswordValidator(str);
      case "userName":
        return new UserNameValidator(str);
      default:
        throw new Error("wrong validator type");
    }
  }
}

export default ValidatorFactory;
