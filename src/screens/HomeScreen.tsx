import { FlatList, SafeAreaView, StyleSheet, View } from "react-native";
import React, { Fragment, useEffect, useState } from "react";
import { Colors } from "../styles/colors";
import Header from "../layout/Header";
import Stories from "../components/ui/Stories";
import Post from "../components/ui/post/Post";
import BottomTabs from "../layout/BottomTabs";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { RootTabScreenProps } from "../../navigation/types";
import PostService from "../service/postService";

const HomeScreen = ({ navigation }: RootTabScreenProps<"HomeScreen">) => {
  const [posts, setPosts] = useState<any[]>([]);
  const insets = useSafeAreaInsets();

  useEffect(() => {
    new PostService().getPosts().then((result) => setPosts(result));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} />
      <View style={styles.innerContainer}>
        <Stories />
        <FlatList
          style={{ marginBottom: insets.bottom }}
          data={posts}
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
