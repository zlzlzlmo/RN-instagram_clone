import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import React from "react";
import { Colors } from "../../../styles/colors";

const MessengerIcon = () => {
  return (
    <Pressable>
      <View style={styles.redBadge}>
        <Text style={styles.redBadgeText}>11</Text>
      </View>
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
  redBadge: {
    backgroundColor: Colors.redColor,
    position: "absolute",
    right: -10,
    top: -5,
    width: 25,
    height: 18,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
  },
  redBadgeText: {
    color: Colors.whiteColor,
  },
});
