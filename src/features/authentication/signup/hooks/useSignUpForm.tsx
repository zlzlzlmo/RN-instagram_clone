import { useEffect, useMemo, useState } from "react";
import ValidatorFactory from "../../../../util/validator/validatorFactory";

type SignUpInfoKeyType = "email" | "password" | "userName";

const useSignUpForm = () => {
  const [signUpInfo, setSignUpInfo] = useState<
    Record<SignUpInfoKeyType, string>
  >({
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

  const handleSignUp = () => {
    if (!isValidSignUp) return;
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
