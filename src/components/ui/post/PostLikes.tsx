import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { IPost } from "../../../ts/interface/post.interface";
import { Colors } from "../../../styles/colors";
import NumberTransformation from "../../../util/transformation/number-transformation";

const PostLikes = (post: Pick<IPost, "likes">) => {
  return (
    <View>
      <Text style={styles.likes}>
        {new NumberTransformation(post.likes).getWithComma()}
      </Text>
    </View>
  );
};

export default PostLikes;

const styles = StyleSheet.create({
  likes: {
    color: Colors.whiteColor,
    fontWeight: "600",
  },
});
