import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import React from "react";

const PlusIcon = () => {
  return (
    <Pressable>
      <Image
        style={styles.icon}
        source={{
          uri: "https://img.icons8.com/fluency-systems-regular/60/ffffff/plus-2-math.png",
        }}
      />
    </Pressable>
  );
};

export default PlusIcon;

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
    resizeMode: "contain",
    marginLeft: 10,
  },
});
