import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { IPost } from "../../../ts/interface/post.interface";
import { Colors } from "../../../styles/colors";

const PostComments = (post: Pick<IPost, "comments">) => {
  return (
    <>
      {post.comments.map(({ user, comment }, index) => (
        <View key={index} style={styles.container}>
          <Text style={{ color: Colors.whiteColor }}>
            <Text style={{ fontWeight: "600" }}>{user}</Text> {comment}
          </Text>
        </View>
      ))}
    </>
  );
};

export default PostComments;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 5,
  },
});
