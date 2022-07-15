import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "../styles/colors";

const BottomTabs = () => {
  return (
    <View style={styles.container}>
      <Text>BottomTabs</Text>
    </View>
  );
};

export default BottomTabs;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: Colors.whiteColor,
    height: 40,
    justifyContent: "space-around",
  },
});
