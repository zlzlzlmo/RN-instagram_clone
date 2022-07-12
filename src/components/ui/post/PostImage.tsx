import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { IPost } from "../../../ts/interface/post.interface";

const PostImage = (post: Pick<IPost, "imageUrl">) => {
  return (
    <View style={styles.container}>
      <Image style={styles.postImage} source={{ uri: post.imageUrl }} />
    </View>
  );
};

export default PostImage;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 450,
  },
  postImage: {
    height: "100%",
    resizeMode: "cover",
  },
});
