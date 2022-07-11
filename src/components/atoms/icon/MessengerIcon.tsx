import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import React from "react";

const MessengerIcon = () => {
  return (
    <Pressable>
      <Image
        style={styles.icon}
        source={{
          uri: "https://img.icons8.com/fluency-systems-regular/60/ffffff/facebook-messenger.png",
        }}
      />
    </Pressable>
  );
};

export default MessengerIcon;

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
    resizeMode: "contain",
    marginLeft: 10,
  },
});
