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

  const handleLogin = async () => {
    if (!ValidatorFactory.createValidator("email", loginInfo.email).isValid())
      return;

    try {
      const auth = getAuth(firebaseApp);
      const authUser = await signInWithEmailAndPassword(
        auth,
        loginInfo.email,
        loginInfo.password
      );
    } catch (error: any) {
      Alert.alert("Not Allowed", error.message);
    }
  };

  return { loginInfo, handleEmail, handlePassword, handleLogin };
};

export default useLoginForm;
