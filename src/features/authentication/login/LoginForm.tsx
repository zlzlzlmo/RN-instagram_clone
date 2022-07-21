import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useMemo } from "react";
import { Colors } from "../../../styles/colors";
import useLoginForm from "./hooks/useLoginForm";
import ValidatorFactory from "../../../util/validator/validatorFactory";
import Input, { OInputType } from "../../../components/atoms/input";
import Button from "../components/Button";
import Label from "../components/Label";

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
      <Input
        inputType={OInputType.normal}
        placeholder="Phone number, username or email"
        onChangeText={handleEmail}
        value={loginInfo.email}
      />
      <Input
        inputType={OInputType.secure}
        placeholder="Password"
        value={loginInfo.password}
        onChangeText={handlePassword}
      />

      <View style={{ alignItems: "flex-end", marginBottom: 30 }}>
        <Text style={{ color: Colors.lightBlue }}>Forgot password?</Text>
      </View>
      <Button active={activeLoginButton} onPress={handleLogin}>
        Login
      </Button>
      <Label
        title="Don't have an account?"
        main="Sign Up"
        onPress={handleLogin}
      />
    </View>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  container: {
    marginTop: 80,
  },
});
