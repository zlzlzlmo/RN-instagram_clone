import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "../styles/colors";
import AddNewPost from "../features/create/post/AddNewPost";
import { RootTabScreenProps } from "../../navigation/types";

const NewPostScreen = ({ navigation }: RootTabScreenProps<"NewPostScreen">) => {
  return (
    <SafeAreaView style={styles.container}>
      <AddNewPost navigation={navigation} />
    </SafeAreaView>
  );
};

export default NewPostScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.blackColor,
  },
});
