import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { SignedInStack, SignedOutStack } from ".";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import firebaseApp from "../firebaseConfig";

const AuthNavigation = () => {
  const [currentUser, setCurrentUser] = useState(false);

  useEffect(() => {
    const auth = getAuth(firebaseApp);
    onAuthStateChanged(auth, (user) => {
      if (!user) return;
      console.log("user : ", user);
      setCurrentUser(true);
    });
  }, []);
  return <>{currentUser ? <SignedInStack /> : <SignedOutStack />}</>;
};

export default AuthNavigation;

const styles = StyleSheet.create({});
