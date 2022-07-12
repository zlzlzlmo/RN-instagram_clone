import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "../styles/colors";
import Header from "../components/home/Header";
import Stories from "../components/ui/Stories";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <Header />
        <Stories />
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
