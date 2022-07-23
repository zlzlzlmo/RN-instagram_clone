import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useMemo, useState } from "react";
import ValidatorFactory from "../../../../util/validator/validatorFactory";
import { getFirestore } from "firebase/firestore";
import firebaseApp from "../../../../../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

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

  const getRandomProfilePicture = async () => {
    const response = await fetch("https://randomuser.me/api");
    const data = await response.json();
    return data.results[0].picture.large;
  };

  const handleSignUp = async () => {
    if (!isValidSignUp) return;
    const auth = getAuth(firebaseApp);
    const authUser = await createUserWithEmailAndPassword(
      auth,
      signUpInfo.email,
      signUpInfo.password
    );

    const db = getFirestore(firebaseApp);
    await addDoc(collection(db, "users"), {
      email: authUser.user.email,
      owner_uid: authUser.user.uid,
      userName: signUpInfo.userName,
      profile_picture: await getRandomProfilePicture(),
    });
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
