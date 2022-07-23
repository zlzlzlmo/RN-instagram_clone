import { useMemo, useState } from "react";
import ValidatorFactory from "../../../../util/validator/validatorFactory";
import { SignUpInfoType } from "../ts/type";
import FirebaseAuthentication from "../../../../util/authentication/firebaseAuthentication";

const useSignUpForm = () => {
  const [signUpInfo, setSignUpInfo] = useState<SignUpInfoType>({
    email: "",
    userName: "",
    password: "",
  });

  const isValidSignUp = useMemo<boolean>(() => {
    const { email, userName, password } = signUpInfo;
    const result =
      ValidatorFactory.createValidator("email", email).isValid() &&
      ValidatorFactory.createValidator("userName", userName).isValid() &&
      ValidatorFactory.createValidator("password", password).isValid();

    return result;
  }, [signUpInfo]);

  const handleEmail = (email: string) => {
    setSignUpInfo((signUpInfo) => ({ ...signUpInfo, email }));
  };

  const handleUserName = (userName: string) => {
    setSignUpInfo((signUpInfo) => ({ ...signUpInfo, userName }));
  };

  const handlePassword = (password: string) => {
    setSignUpInfo((signUpInfo) => ({ ...signUpInfo, password }));
  };

  const handleSignUp = async () => {
    if (!isValidSignUp) return;
    new FirebaseAuthentication().signUp(signUpInfo);
  };

  return {
    signUpInfo,
    isValidSignUp,
    handleEmail,
    handleUserName,
    handlePassword,
    handleSignUp,
  };
};

export default useSignUpForm;
