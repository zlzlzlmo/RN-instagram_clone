import { StyleSheet, Text, View } from "react-native";
import React from "react";
import IconFactory from "../../atoms/icon/IconFactory";

const PostFooter = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftSide}>
        <IconFactory iconType="LIKE" />
        <IconFactory iconType="COMMENT" />
        <IconFactory iconType="SHARE" />
      </View>
      <View>
        <IconFactory iconType="BOOKMARK" />
      </View>
    </View>
  );
};

export default PostFooter;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  leftSide: {
    flexDirection: "row",
    alignItems: "center",
  },
});
