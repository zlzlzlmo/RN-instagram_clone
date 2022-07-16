import { StyleSheet, Text, View } from "react-native";
import React from "react";
import IconFactory from "../../../components/atoms/icon/IconFactory";
import { Colors } from "../../../styles/colors";
import PostUploader from "./PostUploader";

const AddNewPost = () => {
  return (
    <View style={styles.container}>
      <Header />
      <PostUploader />
    </View>
  );
};

export default AddNewPost;

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerIcon}>
        <IconFactory iconType="BACK" />
      </View>
      <Text style={styles.headerText}>NEW POST</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  headerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  headerIcon: {
    position: "absolute",
    alignSelf: "center",
    left: 0,
  },
  headerText: {
    color: Colors.whiteColor,
  },
});
