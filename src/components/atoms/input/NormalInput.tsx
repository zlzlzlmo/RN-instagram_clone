import { StyleSheet, TextInput, View } from "react-native";
import React from "react";
import { Colors } from "../../../styles/colors";
import { InputProps } from ".";

const NormalInput = (props: InputProps) => {
  return (
    <View style={styles.inputField}>
      <TextInput
        placeholderTextColor={Colors.grayColor}
        placeholder={props.placeholder}
        autoCapitalize="none"
        onChangeText={props.onChangeText}
        value={props.value}
      />
    </View>
  );
};

export default NormalInput;

const styles = StyleSheet.create({
  inputField: {
    borderRadius: 4,
    padding: 12,
    backgroundColor: Colors.lightGray,
    marginBottom: 10,
    borderWidth: 1,
  },
});
