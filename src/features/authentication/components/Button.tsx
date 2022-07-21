import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "../../../styles/colors";

interface ButtonProps {
  onPress: () => void;
  active: boolean;
  children: string;
}

const Button = ({ active, onPress, children }: ButtonProps) => {
  return (
    <Pressable
      style={[styles.button, active && styles.buttonActive]}
      onPress={onPress}
      disabled={!active}
    >
      <Text style={{ color: Colors.whiteColor, fontSize: 18 }}>{children}</Text>
    </Pressable>
  );
};

export default Button;

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
