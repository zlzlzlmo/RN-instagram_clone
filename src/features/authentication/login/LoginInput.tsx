import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { Colors } from "../../../styles/colors";

const OLoginInputType = {
  id: "ID",
  password: "PASSWORD",
} as const;

type LoginInputType = typeof OLoginInputType[keyof typeof OLoginInputType];

interface LoginInputProps {
  type: LoginInputType;
  value: string;
  onChangeText: (text: string) => void;
}

const LoginInput = ({ type, value, onChangeText }: LoginInputProps) => {
  return (
    <View style={styles.inputField}>
      {type === "ID" ? (
        <TextInput
          placeholderTextColor={Colors.grayColor}
          placeholder="Phone number, username or email"
          autoCapitalize="none"
          keyboardType="email-address"
          textContentType="emailAddress"
          autoFocus
          onChangeText={onChangeText}
          value={value}
        />
      ) : (
        <TextInput
          placeholderTextColor={Colors.grayColor}
          placeholder="Password"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry
          textContentType="password"
          onChangeText={onChangeText}
          value={value}
        />
      )}
    </View>
  );
};

export default LoginInput;

const styles = StyleSheet.create({
  inputField: {
    borderRadius: 4,
    padding: 12,
    backgroundColor: Colors.lightGray,
    marginBottom: 10,
    borderWidth: 1,
  },
});
