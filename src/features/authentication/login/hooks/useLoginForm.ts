import { useState } from "react";
import Validator from "email-validator";
import ValidatorFactory from "../../../../util/validator/validatorFactory";
import { Alert } from "react-native";
import firebaseApp from "../../../../../firebaseConfig";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { LoginInfoType } from "../ts/type";
import FirebaseAuthentication from "../../../../util/authentication/firebaseAuthentication";

const useLoginForm = () => {
  const [loginInfo, setLoginInfo] = useState<LoginInfoType>({
    email: "",
    password: "",
  });

  const handleEmail = (email: string) => {
    setLoginInfo((loginInfo) => ({ ...loginInfo, email }));
  };

  const handlePassword = (password: string) => {
    setLoginInfo((loginInfo) => ({ ...loginInfo, password }));
  };

  const handleLogin = async () => {
    if (!ValidatorFactory.createValidator("email", loginInfo.email).isValid())
      return;

    new FirebaseAuthentication().login(loginInfo);
  };

  return { loginInfo, handleEmail, handlePassword, handleLogin };
};

export default useLoginForm;
