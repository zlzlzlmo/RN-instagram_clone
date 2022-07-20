import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "../../../styles/colors";

interface LoginButtonProps {
  onPress: () => void;
  activeLoginButton: boolean;
}

const LoginButton = ({ activeLoginButton, onPress }: LoginButtonProps) => {
  return (
    <Pressable
      style={[styles.button, activeLoginButton && styles.buttonActive]}
      onPress={onPress}
      disabled={!activeLoginButton}
    >
      <Text style={{ color: Colors.whiteColor, fontSize: 18 }}>Login</Text>
    </Pressable>
  );
};

export default LoginButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.lightBlue,
    minHeight: 42,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonActive: {
    backgroundColor: Colors.blueColor,
  },
});
