import { StyleSheet, Text, View } from "react-native";
import React, { useCallback, useMemo } from "react";
import { Colors } from "../../../styles/colors";
import { IPost } from "../../../ts/interface/post.interface";
import Length from "../../../util/length/length";

const PostCommentSection = (post: Pick<IPost, "comments">) => {
  const postCommentsLength = useMemo(() => {
    return new Length(post.comments);
  }, []);

  return (
    <View style={styles.container}>
      {postCommentsLength.hasElement() && (
        <Text style={{ color: Colors.grayColor }}>
          View {postCommentsLength.IsTwoOrMore() ? "all" : ""}
          {post.comments.length}
          {postCommentsLength.IsTwoOrMore() ? "comments" : "comment"}
        </Text>
      )}
    </View>
  );
};

export default PostCommentSection;

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
  },
});
