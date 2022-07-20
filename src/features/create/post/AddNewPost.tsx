import { StyleSheet, Text, View } from "react-native";
import React from "react";
import IconFactory from "../../../components/atoms/icon/IconFactory";
import { Colors } from "../../../styles/colors";
import PostUploader from "./PostUploader";
import { RootTabScreenProps } from "../../../../navigation/types";

const AddNewPost = ({ navigation }: RootTabScreenProps<"NewPostScreen">) => {
  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <PostUploader />
    </View>
  );
};

export default AddNewPost;

const Header = ({ navigation }: RootTabScreenProps<"NewPostScreen">) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerIcon}>
        <IconFactory iconType="BACK" onPress={() => navigation.goBack()} />
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
