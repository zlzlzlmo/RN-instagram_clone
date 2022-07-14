import { StyleSheet, Text, View } from "react-native";
import React, { useCallback, useMemo } from "react";
import { Colors } from "../../../styles/colors";
import { IPost } from "../../../ts/interface/post.interface";
import Length from "../../../util/length/length";

const PostCommentSection = (post: Pick<IPost, "comments">) => {
  return (
    <View>
      <Text style={{ color: Colors.grayColor }}>
        View {new Length(post.comments).IsTwoOrMore() ? "all" : ""}{" "}
        {post.comments.length}
        {new Length(post.comments).IsTwoOrMore() ? "comments" : "comment"}
      </Text>
    </View>
  );
};

export default PostCommentSection;

const styles = StyleSheet.create({});
