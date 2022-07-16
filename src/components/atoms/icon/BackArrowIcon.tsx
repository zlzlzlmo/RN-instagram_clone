import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import React from "react";

const BackArrowIcon = () => {
  return (
    <Pressable>
      <Image
        style={styles.icon}
        source={{
          uri: "https://img.icons8.com/ios-glyphs/90/ffffff/back.png",
        }}
      />
    </Pressable>
  );
};

export default BackArrowIcon;

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
    resizeMode: "contain",
    marginLeft: 10,
  },
});
