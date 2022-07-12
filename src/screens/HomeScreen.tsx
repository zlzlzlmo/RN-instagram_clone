import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { Fragment } from "react";
import { Colors } from "../styles/colors";
import Header from "../layout/Header";
import Stories from "../components/ui/Stories";
import Post from "../components/ui/post/Post";
import { POSTS } from "../mocks/post-mock.data";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <Header />
        <Stories />
        <ScrollView>
          {POSTS.map((post, index) => (
            <Fragment key={index}>
              <Post {...post} />
            </Fragment>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.blackColor,
    flex: 1,
  },
  innerContainer: {
    paddingHorizontal: 20,
  },
});
