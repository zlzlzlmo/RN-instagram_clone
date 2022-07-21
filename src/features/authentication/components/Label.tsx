import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Colors } from "../../../styles/colors";

interface LabelProps {
  title: string;
  main: string;
  onPress: any;
}

const Label = ({ title, main, onPress }: LabelProps) => {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <TouchableOpacity onPress={onPress}>
        <Text style={{ color: Colors.lightBlue, marginLeft: 5 }}>{main}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Label;

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
  },
});
