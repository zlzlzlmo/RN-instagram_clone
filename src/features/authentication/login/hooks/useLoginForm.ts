import { useState } from "react";
import Validator from "email-validator";
import EmailValidator from "../../../../lib/emailValidator";

type LoginInfoKeyType = "email" | "password";

const useLoginForm = () => {
  const [loginInfo, setLoginInfo] = useState<Record<LoginInfoKeyType, string>>({
    email: "",
    password: "",
  });

  const handleEmail = (email: string) => {
    setLoginInfo((loginInfo) => ({ ...loginInfo, email }));
  };

  const handlePassword = (password: string) => {
    setLoginInfo((loginInfo) => ({ ...loginInfo, password }));
  };

  const handleLogin = () => {
    if (!new EmailValidator(loginInfo.email).isEmail()) return;
  };

  return { loginInfo, handleEmail, handlePassword, handleLogin };
};

export default useLoginForm;
