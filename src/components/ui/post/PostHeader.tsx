import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { IPost } from "../../../ts/interface/post.interface";
import { Colors } from "../../../styles/colors";
import StringTransformation from "../../../util/transformation/str-transformation";

const PostHeader = (post: Pick<IPost, "profile_picture" | "user">) => {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          source={{ uri: post.profile_picture }}
          style={styles.profilePicture}
        />
        <Text style={styles.userName}>
          {new StringTransformation(post.user).slice(5)}
        </Text>
      </View>
      <Text style={styles.more}>...</Text>
    </View>
  );
};

export default PostHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 5,
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  profilePicture: {
    width: 35,
    height: 35,
    borderRadius: 50,
    marginLeft: 6,
    borderWidth: 1.6,
    borderColor: Colors.orangeColor,
  },
  userName: {
    color: Colors.whiteColor,
    marginLeft: 5,
    fontWeight: "700",
  },
  more: {
    color: Colors.whiteColor,
    fontWeight: "900",
  },
});
