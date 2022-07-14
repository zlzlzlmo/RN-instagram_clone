import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import React from "react";

const BookmarkIcon = () => {
  return (
    <Pressable>
      <Image
        style={styles.icon}
        source={require("../../../assets/icons/bookmark.png")}
      />
    </Pressable>
  );
};

export default BookmarkIcon;

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
    resizeMode: "contain",
    marginLeft: 10,
  },
});
