import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import React from "react";

const ShareIcon = () => {
  return (
    <Pressable>
      <Image
        style={styles.icon}
        source={require("../../../assets/icons/share.png")}
      />
    </Pressable>
  );
};

export default ShareIcon;

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
    resizeMode: "contain",
    marginLeft: 10,
  },
});
