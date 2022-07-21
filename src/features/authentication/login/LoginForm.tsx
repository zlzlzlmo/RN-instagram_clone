import {
  Pressable,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useMemo, useState } from "react";
import { Colors } from "../../../styles/colors";
import LoginInput from "./LoginInput";
import useLoginForm from "./hooks/useLoginForm";
import LoginButton from "./LoginButton";
import ValidatorFactory from "../../../util/validator/validatorFactory";

const LoginForm = () => {
  const { loginInfo, handleEmail, handlePassword, handleLogin } =
    useLoginForm();

  const activeLoginButton = useMemo<boolean>(() => {
    return (
      ValidatorFactory.createValidator("email", loginInfo.email).isValid() &&
      ValidatorFactory.createValidator("password", loginInfo.password).isValid()
    );
  }, [loginInfo]);

  return (
    <View style={styles.container}>
      <LoginInput
        type="ID"
        value={loginInfo.email}
        onChangeText={handleEmail}
      />
      <LoginInput
        type="PASSWORD"
        value={loginInfo.password}
        onChangeText={handlePassword}
      />
      <View style={{ alignItems: "flex-end", marginBottom: 30 }}>
        <Text style={{ color: Colors.lightBlue }}>Forgot password?</Text>
      </View>
      <LoginButton
        activeLoginButton={activeLoginButton}
        onPress={handleLogin}
      />

      <View style={styles.signUpContainer}>
        <Text>Don't have an account?</Text>
        <TouchableOpacity onPress={handleLogin}>
          <Text style={{ color: Colors.lightBlue, marginLeft: 3 }}>
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  container: {
    marginTop: 80,
  },

  signUpContainer: {
    marginTop: 50,
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
  },
});
