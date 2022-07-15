import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { Fragment } from "react";
import { Colors } from "../styles/colors";
import Header from "../layout/Header";
import Stories from "../components/ui/Stories";
import Post from "../components/ui/post/Post";
import { POSTS } from "../mocks/post-mock.data";
import BottomTabs from "../layout/BottomTabs";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const HomeScreen = () => {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.innerContainer}>
        <Stories />
        <FlatList
          style={{ marginBottom: insets.bottom }}
          data={POSTS}
          renderItem={(post) => (
            <Fragment>
              <Post {...post.item} />
            </Fragment>
          )}
        ></FlatList>
      </View>
      <BottomTabs />
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
    flex: 1,
  },
});
