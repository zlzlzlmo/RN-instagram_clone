import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Input, { OInputType } from "../../../components/atoms/input";
import Button from "../components/Button";
import Label from "../components/Label";
import useSignUpForm from "./hooks/useSignUpForm";
import { RootTabScreenProps } from "../../../../navigation/types";

const SignUpForm = ({
  navigation,
}: Partial<RootTabScreenProps<"SignUpScreen">>) => {
  const {
    signUpInfo,
    isValidSignUp,
    handleEmail,
    handlePassword,
    handleUserName,
    handleSignUp,
  } = useSignUpForm();
  return (
    <View style={styles.container}>
      <Input
        inputType={OInputType.email}
        placeholder="Email"
        value={signUpInfo.email}
        onChangeText={handleEmail}
      />
      <Input
        inputType={OInputType.normal}
        placeholder="UserName"
        value={signUpInfo.userName}
        onChangeText={handleUserName}
      />
      <Input
        inputType={OInputType.secure}
        placeholder="Password"
        value={signUpInfo.password}
        onChangeText={handlePassword}
      />

      <View style={styles.buttonContainer}>
        <Button active={isValidSignUp} onPress={handleSignUp}>
          Sign Up
        </Button>
      </View>
      <Label
        title="Already have an account?"
        main="Login"
        onPress={() => navigation?.navigate("LoginScreen")}
      />
    </View>
  );
};

export default SignUpForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
  },
  buttonContainer: {
    marginTop: 50,
  },
});
