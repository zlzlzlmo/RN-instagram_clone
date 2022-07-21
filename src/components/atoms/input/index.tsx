import { Text, StyleSheet, View } from "react-native";
import React, { Component } from "react";
import EmailInput from "./EmailInput";
import SecureInput from "./SecureInput";
import NormalInput from "./NormalInput";

export const OInputType = {
  normal: "NORMAL",
  email: "EMAIL",
  secure: "SECURE",
} as const;

type InputType = typeof OInputType[keyof typeof OInputType];

export interface InputProps {
  inputType: InputType;
  placeholder: string;
  onChangeText: (text: string) => void;
  value: string;
}

export default class Input extends Component<InputProps> {
  renderInput(props: InputProps) {
    switch (props.inputType) {
      case "NORMAL":
        return <NormalInput {...props} />;
      case "EMAIL":
        return <EmailInput {...props} />;
      case "SECURE":
        return <SecureInput {...props} />;
      default:
        throw new Error("wrong inputType");
    }
  }
  render() {
    return this.renderInput(this.props);
  }
}

const styles = StyleSheet.create({});
