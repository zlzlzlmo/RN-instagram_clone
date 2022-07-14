import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { IPost } from "../../../ts/interface/post.interface";
import { Divider } from "@rneui/themed";
import PostHeader from "./PostHeader";
import PostImage from "./PostImage";
import PostFooter from "./PostFooter";
import PostLikes from "./PostLikes";
import PostCaption from "./PostCaption";
import PostCommentSection from "./PostCommentSection";

const Post = (post: IPost) => {
  return (
    <View style={styles.container}>
      <Divider width={1} orientation="vertical" style={{ marginBottom: 15 }} />
      <PostHeader profile_picture={post.profile_picture} user={post.user} />
      <PostImage imageUrl={post.imageUrl} />
      <View>
        <PostFooter />
        <PostLikes likes={post.likes} />
        <PostCaption user={post.user} caption={post.caption} />
        <PostCommentSection comments={post.comments} />
      </View>
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
  },
});
