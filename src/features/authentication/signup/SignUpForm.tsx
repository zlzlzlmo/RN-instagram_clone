import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Input, { OInputType } from "../../../components/atoms/input";
import Button from "../components/Button";
import Label from "../components/Label";

const SignUpForm = () => {
  return (
    <View style={styles.container}>
      <Input inputType={OInputType.email} placeholder="Email" />
      <Input inputType={OInputType.normal} placeholder="UserName" />
      <Input inputType={OInputType.secure} placeholder="Password" />

      <View style={styles.buttonContainer}>
        <Button active={false} onPress={() => {}}>
          Sign Up
        </Button>
      </View>
      <Label title="Already have an account?" main="Login" onPress={() => {}} />
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
