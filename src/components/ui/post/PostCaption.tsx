import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { IPost } from "../../../ts/interface/post.interface";
import { Colors } from "../../../styles/colors";

const PostCaption = (post: Pick<IPost, "caption" | "user">) => {
  return (
    <View style={styles.container}>
      <Text style={{ color: Colors.whiteColor }}>
        <Text style={styles.user}>{post.user}</Text>
        <Text>{post.caption}</Text>
      </Text>
    </View>
  );
};

export default PostCaption;

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
  },
  user: {
    fontWeight: "600",
  },
});
