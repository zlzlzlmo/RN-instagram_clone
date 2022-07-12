import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import React from "react";

const CommentIcon = () => {
  return (
    <Pressable>
      <Image
        style={styles.icon}
        source={require("../../../assets/icons/comment.png")}
      />
    </Pressable>
  );
};

export default CommentIcon;

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
    resizeMode: "contain",
    marginLeft: 10,
  },
});
